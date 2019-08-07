package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class Background {

	public static final int STARS = 0, BLACK = 50, NEBULA = 100;
	public static final int FADETICKS = 50;
	protected static int current = BLACK, desired = BLACK;

	public static final int TWINKLE_SPEED = 2;
	protected static int height = 0;


	public static void fadeTo(int newDesired) {
		desired = newDesired;
	}

	public static void setTo(int newDesired) {
		desired = newDesired;
		current = newDesired;
	}

	public static void skip() {
		current = desired;
	}

	public static boolean fadeFinished() {
		return current == desired;
	}

	public static void tick() {
		height += TWINKLE_SPEED;
		if (height >= 150) height -= 300;
		if (current < desired) current++;
		else if (current > desired) current--;
	}

	public static void draw(Graphics g) {
		if (current == BLACK) {
			g.fillRect(SpaceInvadersX.SCREEN, Colour.BLACK);
		} else {
			g.drawImage(Resources.twinkle, -200, height - 300);
			g.drawImage(Resources.twinkle, 200, height - 300);
			g.drawImage(Resources.twinkle, -200, height);
			g.drawImage(Resources.twinkle, 200, height);
			g.drawImage(Resources.twinkle, -200, height + 300);
			g.drawImage(Resources.twinkle, 200, height + 300);
			if (current < BLACK) {
				g.drawImage(Resources.stars, 0, 0);
			} else {
				g.drawImage(Resources.nebula, 0, 0);
			}
			if (current > STARS && current < NEBULA) {
				g.fillRect(SpaceInvadersX.SCREEN, Colour.BLACK, (FADETICKS - Math.abs(current - BLACK)) * 1.0 / FADETICKS);
			}
		}
	}

}
