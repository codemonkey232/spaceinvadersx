package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class Widget {

	protected Rectangle bounds;

	public Widget(Rectangle bounds) {
		this.bounds = bounds;
	}

	public void enter() {
		tickOut();
	}

	public void tick(int mouseX, int mouseY) {
		if (bounds.contains(mouseX, mouseY))
			tickIn(mouseX, mouseY);
		else
			tickOut();
	}

	public void tickIn(int mouseX, int mouseY) {}
	public void tickOut() {}

	public void draw(Graphics g) {}

	public static void drawRightArrow(Graphics g, int x, int y) {
		int ticker = SpaceInvadersX.getProgramTicks() % 10;
		int offset = 2 * ticker;
		g.drawImage(Resources.arrowRight, x - 60 + offset, y, ticker / 10.0);
		g.drawImage(Resources.arrowRight, x - 40 + offset, y);
		g.drawImage(Resources.arrowRight, x - 20 + offset, y, (10 - ticker) / 10.0);
	}

	public static void drawLeftArrow(Graphics g, int x, int y) {
		int ticker = SpaceInvadersX.getProgramTicks() % 10;
		int offset = 2 * ticker;
		g.drawImage(Resources.arrowLeft, x + 60 - offset, y, ticker / 10.0);
		g.drawImage(Resources.arrowLeft, x + 40 - offset, y);
		g.drawImage(Resources.arrowLeft, x + 20 - offset, y, (10 - ticker) / 10.0);
	}

	public static Rectangle textBounds(String text, int x, int y, Font font) {
		return new Rectangle(x, y, font.getWidth() * text.length(), font.getHeight());
	}

	public static Rectangle textBounds(String text, int x, int y, Font font, int padding) {
			return new Rectangle(x, y, font.getWidth() * text.length() + 2*padding, font.getHeight() + 2*padding);
	}

	public void mouseClick(int buttonCode, int x, int y) {
		if (bounds.contains(x, y))
			mouseClickIn(buttonCode, x, y);
	}

	public void mouseClickIn(int buttonCode, int x, int y) {}

}
