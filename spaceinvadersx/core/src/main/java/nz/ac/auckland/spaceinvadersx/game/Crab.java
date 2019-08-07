package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Crab extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(60, 78);

	public static final int HEALTH = 100;

	public static final int MIN_SPAWN_X = -210, SPAWN_RANGE = 420;
	public static final int MIN_WOBBLE_WIDTH = 50, WOBBLE_RANGE = 100;
	public static final int SPAWN_Y = -400;
	public static final double ACCEL = 1.0, SPEED = 3.0, MAX_SPEED = 6.0;
	public static final int RELOAD_TICKS = 50, REFIRE_TICKS = 5, REFIRE_AMMO = 3;
	public static final int MIN_SHOOT_Y = -250;

	protected int reloadTicker, refireTicker, ammo;
	protected double desiredX, wobbleWidth;


	public Crab(double x, double y, double wobbleWidth) {
		super(Resources.crab, Resources.crabS, COLLISION_RECT, x, y, HEALTH);
		desiredX = x;
		this.wobbleWidth = wobbleWidth;
		yVel = SPEED;
		xVel = MAX_SPEED;
		reloadTicker = (int) Math.random() * RELOAD_TICKS;
		angle = Math.PI;
	}

	public void tick() {
		if (x < desiredX - wobbleWidth) {
			xVel += ACCEL;
			if (xVel > MAX_SPEED) xVel = MAX_SPEED;
		} else if (x > desiredX + wobbleWidth){
			xVel -= ACCEL;
			if (xVel < -MAX_SPEED) xVel = -MAX_SPEED;
		}
		tickEnemy();

		reloadTicker--;
		if (reloadTicker < 0) {
			reloadTicker = RELOAD_TICKS;
			ammo = REFIRE_AMMO;
		}
		refireTicker--;
		if (refireTicker < 0 && ammo > 0) {
			ammo--;
			refireTicker = REFIRE_TICKS;
			shoot();
		}
	}

	protected void shoot() {
		if (y < MIN_SHOOT_Y) return;
		Resources.plasma.play();
		Game.addProjectile(new AlienPlasma(Resources.redAlienPlasma, Resources.redPlasmaEffect,x ,y, angle));
	}

	protected void explode() {
		Game.addEffect(new AlienExplosion(x, y));
		Resources.explosion.play();
	}


	public static void spawn() {
		double x = MIN_SPAWN_X + Math.random() * SPAWN_RANGE;
		double wobbleWidth = MIN_WOBBLE_WIDTH + Math.random() * WOBBLE_RANGE;
		Game.addEnemy(new Crab(x, SPAWN_Y, wobbleWidth));
	}



}