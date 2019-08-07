package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class LogoBackground {

	public static final int TITLE_X = 0, TITLE_Y = -160;

	protected static int fadeTicker;

	public static void tick() {
		fadeTicker++;
	}

	public static void fadeIn() {
		fadeTicker = 0;
	}

	public static void draw(Graphics g) {
		draw(g, TITLE_X, TITLE_Y);
	}

	public static void draw(Graphics g, int x, int y) {
		g.drawImage(Resources.siRed, x, y - 10, flicker());
		g.drawImage(Resources.siYellow, x, y, flicker());

		g.drawImage(Resources.xLogo, x, y);
		g.drawImage(Resources.xSilver, x, y);
	}

	public static void drawFadeIn(Graphics g) {
		if (fadeTicker > 100) {
			double textGlow = Math.min((fadeTicker - 100) / 50.0, 1.0);
			g.drawImage(Resources.siRed, TITLE_X, TITLE_Y - 10, textGlow * flicker());
			g.drawImage(Resources.siYellow, TITLE_X, TITLE_Y, textGlow * flicker());
		}

		g.drawImage(Resources.xLogo, TITLE_X, TITLE_Y, fadeTicker / 50.0);
		if (fadeTicker > 50) {
			g.drawImage(Resources.xSilver, TITLE_X, TITLE_Y, (fadeTicker - 50) / 50.0);
		}
	}

	public static boolean fadeFinished() {
		return (fadeTicker >= 150);
	}

	protected static double flicker() {
		return Math.random() + 0.5;
	}

}
