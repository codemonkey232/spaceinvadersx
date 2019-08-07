package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class ShipExplosion extends AnimEffect {

	public static final int FRAME_TICKS = 2;

	public static final int NUM_EXPLOSION_SMOKE = 20;

	public ShipExplosion(double x, double y) {
		super(Resources.shipExplosion, x, y, FRAME_TICKS);
		for (int smokeID = 0; smokeID < NUM_EXPLOSION_SMOKE; smokeID++)
			Game.addEffect(new SmokeEffect(x, y, 2 * Math.PI * smokeID / NUM_EXPLOSION_SMOKE));
	}

}