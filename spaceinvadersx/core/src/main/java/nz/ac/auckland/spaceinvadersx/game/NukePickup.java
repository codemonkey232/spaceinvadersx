package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.core.Resources;

public class NukePickup extends Pickup {

	public NukePickup(double x, double y) {
		super(Resources.nuke, x, y);
	}

	protected boolean award(PlayerShip collector) {
		return collector.giveSpecialAmmo();
	}

	public static void spawn() {
		Game.addProjectile(new NukePickup(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y));
	}

}