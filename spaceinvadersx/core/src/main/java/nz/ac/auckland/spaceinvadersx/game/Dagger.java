package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Dagger extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(70, 70);
	public static final int HEALTH = 40;
	public static final int TRAIL_DISTANCE = 100;

	public static final int LEFT = 0, RIGHT = 1;
	public static final int[] SPAWN_X = {-300, 300};
	public static final int SPAWN_Y = -400;

	public static final int MIN_SHOOT_Y = -200, SHOOT_Y_RANGE = 200, MAX_SHOOT_Y = 200;


	public static final double SPEED = 6.0, ROTATE_SPEED = 0.05;

	public static final double[] MIN_ANGLE = {12*Math.PI/16, 17*Math.PI/16};
	public static final double ANGLE_RANGE = 3*Math.PI/16;

	protected int minShootY;
	protected boolean shooter;

	public Dagger(double x, double y, double angle, boolean shooter) {
		super(Resources.dagger, Resources.daggerS, COLLISION_RECT, x, y, HEALTH);
		setAngleAndSpeed(angle, SPEED);
		minShootY = MIN_SHOOT_Y + (int) (SHOOT_Y_RANGE * Math.random());
		this.shooter = shooter;
	}

	public void tick() {
		tickEnemy();
		boolean aimed = homeFor(Game.players, ROTATE_SPEED);
		if (shooter && aimed && y >= minShootY && y <= MAX_SHOOT_Y) shoot();

	}

	public void draw(Graphics g) {
		drawRotateEnemy(g);
	}

	protected void shoot() {
		shooter = false;
		Resources.plasma.play();
		Game.addProjectile(new AlienPlasma(Resources.greenAlienPlasma, Resources.greenPlasmaEffect,x ,y ,angle));
	}

	protected void explode() {
		Game.addEffect(new AlienExplosion(x, y));
		Resources.explosion.play();
	}


	public static void spawnSwarm(int swarmSize, int startPos, double shooterFraction) {
		double startAngle = MIN_ANGLE[startPos] + Math.random() * ANGLE_RANGE;
		double trailX = xAngle(startAngle, TRAIL_DISTANCE);
		double trailY = yAngle(startAngle, TRAIL_DISTANCE);
		for (int daggerID = 0; daggerID < swarmSize; daggerID++) {
			Game.addEnemy(new Dagger(SPAWN_X[startPos] - trailX * daggerID, SPAWN_Y - trailY * daggerID, startAngle, Math.random() < shooterFraction));
		}
	}



}