package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class AlienExplosion extends AnimEffect {

	public static final int FRAME_TICKS = 2;

	public AlienExplosion(double x, double y) {
		super(Resources.alienExplosion, x, y, FRAME_TICKS);
	}

}