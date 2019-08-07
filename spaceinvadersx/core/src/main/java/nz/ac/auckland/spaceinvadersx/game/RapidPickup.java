package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.core.Resources;

public class RapidPickup extends Pickup {

	public RapidPickup(double x, double y) {
		super(Resources.rapid, x, y);
	}

	public void tick() {
		animateSprite(tiles, ageTicker, 1);
		yVel = Math.min(yVel + ACCEL, SPEED);
		tickProjectile();
	}

	protected boolean award(PlayerShip collector) {
		return collector.giveRapidFire();
	}

	public static void spawn() {
		Game.addProjectile(new RapidPickup(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y));
	}

}