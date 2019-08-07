package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Button extends Widget {

	protected String text;
	protected Font normalFont, highlitFont;
	protected boolean highlit;

	public Button(String text, int x, int y) {
		this(text, x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public Button(String text, int x, int y, Font normalFont, Font highlitFont) {
		this(text, textBounds(text, x, y, normalFont), normalFont, highlitFont);
	}

	public Button(String text, Rectangle bounds) {
		this(text, bounds, Resources.xenonGrey, Resources.xenonWhite);
	}

	public Button(String text, Rectangle bounds, Font normalFont, Font highlitFont) {
		super(bounds);
		this.text = text;
		this.normalFont = normalFont;
		this.highlitFont = highlitFont;
	}

	public void tickIn(int mouseX, int mouseY) {
		highlit = true;
	}
	public void tickOut() {
		highlit = false;
	}

	public void draw(Graphics g) {
		Font font = highlit ? highlitFont : normalFont;
		g.drawString(text, font, bounds.getX(), bounds.getY());
		if (highlit) {
			drawRightArrow(g, bounds.getXMin(), bounds.getY());
			drawLeftArrow(g, bounds.getXMax(), bounds.getY());
		}
	}

}
