package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Beast extends Enemy {

	public static final Rectangle WIDE_COLLISION_RECT = new Rectangle(290, 170);
	public static final Rectangle TALL_COLLISION_RECT = new Rectangle(50, 350);

	public static final int HEALTH = 5000;
	public static final int PICKUP_HEALTH = 800;

	public static final int SPAWN_X = 0, SPAWN_Y = -500;
	public static final double START_SPEED = 15.5;
	public static final double ACCEL = 0.25, MAX_SPEED = 6.0;

	public static final int MIN_X = -250, X_RANGE = 500;
	public static final int MIN_Y = -200, Y_RANGE = 100;

	public static final int EXPLODE_TICKS = 120, EXPLOSION_PERIOD = 4, WHITE_TICKS = 12;
	public static final int EXPLODE_WIDTH = 100, EXPLODE_HEIGHT = 350;
	public static final double DEATH_VEL_DAMP = 0.95;
	public static final int KILL_POINTS = 100;


	public static final int FIRE_PAUSE = 150;
	public static final int NUM_FIRE_TYPES = 6;
	public static final int MINI_SPLATTER = 0, SPLATTER = 1, SPRAY = 2, LEFT_MISSILE = 3, RIGHT_MISSILE = 4, MISSILES = 5;

	public static final int SPLATTER_TIME = 50, LOW_SPLATTER_RATE = 10, SPLATTER_RATE = 5;
	public static final int NUM_SPRAY = 10, SPRAY_RATE = 5;
	public static final int SECOND_MISSILE_TICKS = 40;

	protected Rectangle bounds2;

	protected int fireType;
	protected int fireTicker;

	protected double desiredX, desiredY;
	protected int xSide, ySide;
	protected int deathTicker;
	protected boolean entering;


	public Beast() {
		super(Resources.beast, Resources.beastS, WIDE_COLLISION_RECT, SPAWN_X, SPAWN_Y, HEALTH);
		bounds2 = new Rectangle();

		xVel = 0;
		yVel = START_SPEED;

		desiredX = 0;
		desiredY = 0;
		xSide = 0;
		ySide = 0;

		angle = Math.PI;
		deathTicker = 0;
		entering = true;
		fireType = MINI_SPLATTER;
	}

	public void tick() {
		if (deathTicker != 0) {
			dyingTick();
			return;
		}
		if (entering) {
			yVel -= ACCEL;
			if (yVel <= 0) {
				entering = false;
				fireTicker = -FIRE_PAUSE;
			}
		} else {
			if (side(x, desiredX) != xSide) {
				desiredX = MIN_X + Math.random() * X_RANGE;
				xSide = side(x, desiredX);
			}
			if (side(y, desiredY) != ySide) {
				desiredY = MIN_Y + Math.random() * Y_RANGE;
				ySide = side(y, desiredY);
			}

			if (xSide == 1) xVel = Math.min(xVel + ACCEL, MAX_SPEED);
			else xVel = Math.max(xVel - ACCEL, -MAX_SPEED);

			if (ySide == 1) yVel = Math.min(yVel + ACCEL, MAX_SPEED);
			else yVel = Math.max(yVel - ACCEL, -MAX_SPEED);

			fireTicker++;
			if (fireTicker >= FIRE_PAUSE) {
				fireType = (int) (Math.random() * NUM_FIRE_TYPES);
				fireTicker = 0;
			}
			tickBeastFire();
		}

		tickEnemy();
	}

	protected void tickBeastFire() {
		switch(fireType) {
			case MINI_SPLATTER: case SPLATTER:
				if (fireTicker > SPLATTER_TIME) return;
				if (fireType == MINI_SPLATTER && fireTicker % LOW_SPLATTER_RATE == 0 || fireType == SPLATTER && fireTicker % SPLATTER_RATE == 0) {
					Resources.plasma.play();
					firePlasma(-1, Math.PI + (Math.random() * Math.PI/4));
					firePlasma(1, Math.PI - (Math.random() * Math.PI/4));
				}
				break;
			case SPRAY:
				if (fireTicker % SPRAY_RATE != 0) return;
				int shot = fireTicker / SPRAY_RATE;
				if (shot < NUM_SPRAY) {
					double shootAngle = Math.PI / 4 * shot / NUM_SPRAY;
					Resources.plasma.play();
					firePlasma(-1, Math.PI + shootAngle);
					firePlasma(1, Math.PI - shootAngle);
				}
				break;
			case LEFT_MISSILE: case RIGHT_MISSILE: case MISSILES:
				if (fireTicker == 0) {
					Resources.missileLaunch.play();
					if (fireType != RIGHT_MISSILE) fireMissile(RIGHT_MISSILE);
					if (fireType != LEFT_MISSILE) fireMissile(LEFT_MISSILE);
				}
				if (fireTicker == SECOND_MISSILE_TICKS && fireType != MISSILES) {
					Resources.missileLaunch.play();
					fireMissile(fireType);
				}
				break;
			default:
		}
	}

	protected void fireMissile(int side) {
		Game.addEnemy(new AlienMissile(x + ((side == LEFT_MISSILE) ? -96 : 96), y + 130, Math.PI));
	}

	protected void firePlasma(int side, double shootAngle) {
		Game.addProjectile(new AlienPlasma(Resources.redAlienPlasma, Resources.redPlasmaEffect, x + (side * 48), y + 20, shootAngle));
	}

	protected void tickSprite() {
		ageTicker++;
		x += xVel;
		y += yVel;
		refreshBeastBounds();
	}

	protected void refreshBeastBounds() {
		bounds.setBounds(getX(), getY(), WIDE_COLLISION_RECT);
		bounds2.setBounds(getX(), getY(), TALL_COLLISION_RECT);
	}

	protected boolean collides(Sprite other) {
		return bounds.intersects(other.bounds) || bounds2.intersects(other.bounds);
	}

	public void draw(Graphics g) {
		if (deathTicker == 0)
			drawEnemy(g);
		else {
			if (deathTicker < EXPLODE_TICKS + WHITE_TICKS / 2)
				g.drawImage(image, x, y);
			if (deathTicker >= EXPLODE_TICKS) {
				double elapse = 1.0 * (deathTicker - EXPLODE_TICKS) / WHITE_TICKS;
				double scale = 1 + elapse;
				double alpha = 1 - Math.abs(2.0 * elapse - 1);
				g.drawImage(shadowImage, x, y, true, true, 0, scale, scale, alpha);
			}
		}
	}

	public void damage(int damage, PlayerShip victor) {
		if (dead || deathTicker > 0) return;
		lastHurtTicker = ageTicker;
		victor.award(Math.max(0, Math.min(damage, health)));
		health -= damage;
		if (health <= 0) {
			award(victor);
			die();
		} else if ((health + damage) / PICKUP_HEALTH != health / PICKUP_HEALTH) spawnPickup(true);
	}

	protected int side(double loc, double desiredLoc) {
		return (int) Math.signum(desiredLoc - loc);
	}

	protected void dyingTick() {
		deathTicker++;
		xVel *= DEATH_VEL_DAMP;
		yVel *= DEATH_VEL_DAMP;
		if (deathTicker < EXPLODE_TICKS && deathTicker % EXPLOSION_PERIOD == 0) explode();
		if (deathTicker == EXPLODE_TICKS)
			Resources.deepExplosion.play();
		if (deathTicker > EXPLODE_TICKS + WHITE_TICKS) {
			dead = true;
			Game.winGame();  // Congratulations!
		}
		tickSprite();
	}

	protected void die() {
		explode();
		deathTicker++;
	}

	protected void award(PlayerShip victor) {
		victor.award(KILL_POINTS);
	}

	protected void explode() {
		double explosionX = x - EXPLODE_WIDTH/2 + Math.random() * EXPLODE_WIDTH;
		double explosionY = y - EXPLODE_HEIGHT/2 + Math.random() * EXPLODE_HEIGHT;
		if ((deathTicker / EXPLOSION_PERIOD) % 3 == 0)
			Game.addEffect(new ShipExplosion(explosionX, explosionY));
		else
			Game.addEffect(new AlienExplosion(explosionX, explosionY));
		Resources.explosion.play();
	}

	public static void spawn() {
		Game.addEnemy(new Beast());
	}
}