package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Label extends Widget {

	protected String text;
	protected Font font;

	public Label(String text, int x, int y) {
		this(text, x, y, Resources.xenonWhite);
	}

	public Label(String text, int x, int y, Font font) {
		super(textBounds(text, x, y, font));
		this.text = text;
		this.font = font;
	}

	public void draw(Graphics g) {
		g.drawString(text, font, bounds.getX(), bounds.getY());
	}

}
