package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class AlienMissile extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(16, 16);
	public static final double SPEED = 10.0, ROTATE_SPEED = 0.05;

	public static final int BOREDOM_TICKS = 100, SMOKE_TICKS = 3;

	public static final int HIT_EFFECT_FRAME_TICKS = 2;

	public AlienMissile(double x, double y, double angle) {
		super(Resources.alienMissile, Resources.alienMissile, COLLISION_RECT, x, y, 1);
		setAngleAndSpeed(angle, SPEED);
	}

	public void tick() {
		if (ageTicker < BOREDOM_TICKS)
			homeFor(Game.players, ROTATE_SPEED);
		Game.addEffect(new AnimEffect(Resources.cyanPlasmaEffect, x, y, 1));
		if (ageTicker % SMOKE_TICKS == 0)
			Game.addEffect(new SmokeEffect(x, y));

		tickRotateEnemy();
	}

	public void draw(Graphics g) {
		drawRotateSprite(g);
	}

	protected void spawnPickup() {}

	protected void removeIfStray() {
		if (!Projectile.PROJECTILE_RANGE.contains(getX(), getY()))
			dead = true;
	}

	protected void explode() {
		Game.addEffect(new AnimEffect(Resources.missileExplosion, x, y, HIT_EFFECT_FRAME_TICKS));
	}


}