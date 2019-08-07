package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;

import static nz.ac.auckland.spaceinvadersx.core.Controls.*;

public class PlayerSelecter extends Selecter {

	public PlayerSelecter(int x, int y) {
		super(MULTIPLAY_OPTIONS, x, y);
	}

	public void draw(Graphics g) {
		Font font = highlit ? highlitFont : normalFont;
		g.drawString(text, font, bounds.getX(), bounds.getY());
		if (highlit) {
			if (value != RIGHT_PLAYER_ONLY) {
				drawLeftArrow(g, bounds.getXMin() - 50, bounds.getY());
			}
			if (value != LEFT_PLAYER_ONLY) {
				drawRightArrow(g, bounds.getXMax() + 50, bounds.getY());
			}
		}
	}

}
