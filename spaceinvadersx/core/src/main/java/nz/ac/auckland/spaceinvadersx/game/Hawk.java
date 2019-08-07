package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Hawk extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(80, 60);

	public static final int HEALTH = 100;

	public static final int MIN_SPAWN_X = -360, SPAWN_RANGE = 720;
	public static final int SPAWN_Y = -400;

	public static final int SPEED = 4, FORWARD_BIAS = 2;
	public static final int MIN_LEFT_X = -300, MAX_RIGHT_X = 300;
	public static final int MIN_BACKWARDS_Y = -250, MAX_BACKWARDS_Y = 200;

	public static final int DIRECTION_TICKS = 20;
	public static final int MIN_RELOAD_TICKS = 35, RELOAD_TICKS_RANGE = 25;

	public static final int REFIRE_TICKS = 2, SALVO = 10;
	public static final int FIRE_OFFSET = 13;

	public static final double QUARTER = Math.PI/2;

	protected int backwardPoints;
	protected int directionTicker;
	protected int reloadTicker;
	protected int refireTicker;

	public Hawk(double x, double y) {
		super(Resources.hawk, Resources.hawkS, COLLISION_RECT, x, y, HEALTH);
		backwardPoints = -1;
		reloadTicker = -1;
		refireTicker = 100;
		changeDirection();
	}

	public void tick() {
		tickEnemy();
		directionTicker--;
		if (directionTicker <= 0)
			changeDirection();
		reloadTicker--;
		if (reloadTicker < -1 && y > MIN_BACKWARDS_Y)
			reloadTicker = (int)(MIN_RELOAD_TICKS * Math.random());
		else if (reloadTicker <= 0 && y > MIN_BACKWARDS_Y) {
			refireTicker = 0;
			reloadTicker = (int)(RELOAD_TICKS_RANGE * Math.random() + MIN_RELOAD_TICKS) + REFIRE_TICKS * SALVO;
		}

		if (refireTicker / REFIRE_TICKS < SALVO && refireTicker % REFIRE_TICKS == 0) {
			shootPlasma();
		}
		refireTicker++;
	}

	public void changeDirection() {
		directionTicker = DIRECTION_TICKS;

		boolean forwards = true;
		if (backwardPoints > 0 && y > MIN_BACKWARDS_Y && y < MAX_BACKWARDS_Y) {
			forwards = (int) (2 * Math.random()) != 0;
		}

		boolean right = true;
		if (x > MIN_LEFT_X && x < MAX_RIGHT_X) {
			right = (int) (2 * Math.random()) != 0;
		} else if (x >= MAX_RIGHT_X) right = false;

		if (forwards) {
			backwardPoints++;
			setAngleAndSpeed(Math.random() * QUARTER + (right ? QUARTER : 2*QUARTER), SPEED);
		} else {
			backwardPoints -=2;
			setAngleAndSpeed(Math.random() * QUARTER + (right ? 0 : 3*QUARTER), SPEED);
		}
		yVel += FORWARD_BIAS;
	}

	protected void shootPlasma() {
		Resources.plasma.play();
		double fireX = x + (((refireTicker/REFIRE_TICKS) % 2 == 0) ? FIRE_OFFSET : -FIRE_OFFSET);
		Game.addProjectile(new AlienPlasma(Resources.cyanAlienPlasma, Resources.cyanPlasmaEffect, fireX ,y, Math.PI));
	}

	protected void explode() {
		Game.addEffect(new AlienExplosion(x, y));
		Resources.explosion.play();
	}


	public static void spawn() {
		Game.addEnemy(new Hawk(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y));
	}



}