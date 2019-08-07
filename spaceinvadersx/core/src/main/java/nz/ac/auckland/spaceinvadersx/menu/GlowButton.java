package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class GlowButton extends Button {

	public static final Colour GLOW_COLOUR = Colour.WHITE;
	public static final int PADDING = 15;

	protected Rectangle glowRect;

	public GlowButton(String text, int x, int y) {
		this(text, x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public GlowButton(String text, int x, int y, Font normalFont, Font highlitFont) {
		this(text, textBounds(text, x, y, normalFont, PADDING), normalFont, highlitFont);
	}

	public GlowButton(String text, Rectangle bounds) {
		this(text, bounds, Resources.xenonGrey, Resources.xenonWhite);
	}

	public GlowButton(String text, Rectangle bounds, Font normalFont, Font highlitFont) {
		super(text, bounds, normalFont, highlitFont);
		glowRect = new Rectangle(bounds);
	}

	public void draw(Graphics g) {
		super.draw(g);
		Font font = highlit ? highlitFont : normalFont;
		g.drawString(text, font, bounds.getX(), bounds.getY());
		if (highlit) {
			int ticker = SpaceInvadersX.getProgramTicks() % 10;
			int offset = 2 * ticker;
			glowRect.setBounds(bounds.getX(), bounds.getY(), bounds.getWidth() + 30 - offset, bounds.getHeight() + 30 - offset);
			g.drawRect(glowRect, GLOW_COLOUR, ticker / 10.0);
			glowRect.setBounds(bounds.getX(), bounds.getY(), bounds.getWidth() + 10 - offset, bounds.getHeight() + 10 - offset);
			g.drawRect(glowRect, GLOW_COLOUR);
			glowRect.setBounds(bounds.getX(), bounds.getY(), bounds.getWidth() - 10 - offset, bounds.getHeight() - 10 - offset);
			g.drawRect(glowRect, GLOW_COLOUR, (10 - ticker) / 10.0);
		} else {
			g.drawRect(bounds, GLOW_COLOUR);
		}
	}


}
