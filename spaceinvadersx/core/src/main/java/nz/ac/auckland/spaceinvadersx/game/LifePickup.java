package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.core.Resources;

public class LifePickup extends Pickup {

	public LifePickup(double x, double y) {
		super(Resources.heart, x, y);
	}

	protected boolean award(PlayerShip collector) {
		return collector.giveLife();
	}

	public static void spawn() {
		Game.addProjectile(new LifePickup(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y));
	}

}