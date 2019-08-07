package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.core.Resources;

public class ShieldPickup extends Pickup {

	public ShieldPickup(double x, double y) {
		super(Resources.shield, x, y);
	}

	protected boolean award(PlayerShip collector) {
		return collector.giveShield();
	}

	public static void spawn() {
		Game.addProjectile(new ShieldPickup(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y));
	}

}