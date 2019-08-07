package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Wasp extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(70, 70);
	public static final int HEALTH = 100;

	public static final int MIN_SPAWN_X = -360, SPAWN_RANGE = 720;
	public static final int SPAWN_Y = -400;

	public static final double SPEED = 4.0, MAX_SPEED = 12.0, ACCEL = 1.0;
	public static final double ROTATE_SPEED = 0.05, FLEE_ROTATE_SPEED = 0.2;
	public static final int PLASMA_SHOTS = 3, MISSILE_SHOTS = 1;
	public static final int RELOAD_TICKS = 25;

	protected int shot;
	protected int reloadTicker;

	public Wasp(double x, double y) {
		super(Resources.wasp, Resources.waspS, COLLISION_RECT, x, y, HEALTH);
		setAngleAndSpeed(Math.PI, SPEED);
		reloadTicker = RELOAD_TICKS + (int)(RELOAD_TICKS * Math.random());
		shot = 0;
	}

	public void tick() {
		tickEnemy();

		if (shot < PLASMA_SHOTS + MISSILE_SHOTS) {
			homeFor(Game.players, ROTATE_SPEED);

			reloadTicker--;
			if (reloadTicker == 0) {
				reloadTicker = RELOAD_TICKS;
				if (shot < PLASMA_SHOTS)
					shootPlasma();
				else
					shootMissile();
				shot++;
			}
		} else {
			if (approachAngle(Math.PI, FLEE_ROTATE_SPEED)) {
				speed = Math.min(speed + ACCEL, MAX_SPEED);
				updateVelocity();
			}
		}

	}

	public void draw(Graphics g) {
		drawRotateEnemy(g);
	}

	protected void shootPlasma() {
		Resources.plasma.play();
		Game.addProjectile(new AlienPlasma(Resources.cyanAlienPlasma, Resources.cyanPlasmaEffect, x ,y, angle));
	}

	protected void shootMissile() {
		Resources.missileLaunch.play();
		Game.addEnemy(new AlienMissile(x, y, angle));
	}

	protected void explode() {
		Game.addEffect(new AlienExplosion(x, y));
		Resources.explosion.play();
	}


	public static void spawn() {
		Game.addEnemy(new Wasp(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y));
	}



}