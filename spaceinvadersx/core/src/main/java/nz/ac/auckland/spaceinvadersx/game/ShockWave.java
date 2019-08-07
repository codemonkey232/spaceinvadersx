package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class ShockWave extends FadeEffect {

	public static final int FADE_TICKS = 15;
	public static final double START_SCALE = 0.25, END_SCALE = 1.0;

	public ShockWave(double x, double y) {
		super(Resources.shockWave, x, y, FADE_TICKS, START_SCALE, END_SCALE);
	}
}

