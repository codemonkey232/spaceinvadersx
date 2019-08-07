package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class SmokeEffect extends FadeEffect {

	public static final int FADE_TICKS = 15;
	public static final double START_SCALE = 1.0, END_SCALE = 5.0;

	public static final double SPEED = 8.0;

	public SmokeEffect(double x, double y) {
		super(null, x, y, FADE_TICKS, START_SCALE, END_SCALE);
		setRandomImage(Resources.smokeEffect);
	}

	public SmokeEffect(double x, double y, double angle) {
		this(x, y);
		setAngleAndSpeed(angle, SPEED);
	}

}
