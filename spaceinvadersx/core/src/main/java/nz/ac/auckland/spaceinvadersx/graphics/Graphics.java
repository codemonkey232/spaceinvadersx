/*
 * Graphics class - wraps java.awt.Graphics2D
 * For use with all nz.ac.auckland.spaceinvadersx.graphics. Image, Tiles, Font, Rectangle
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class Graphics {

	public static final int LEFT_ALIGN = 1, CENTER_ALIGN = 0, RIGHT_ALIGN = -1;
	public static final int HORIZONTAL = 0, VERTICAL = 1;

	protected playn.core.Surface surface;

	public Graphics() {}

	public void setSurface(playn.core.Surface surface) {
		this.surface = surface;
	}

	public playn.core.Surface getSurface() {
		return surface;
	}

	// Image drawing methods
	public void drawImage(Image image, double x, double y) {
		if (image == null || !image.success()) return;
		surface.draw(image.getTile(), (int)(x - 0.5 * image.getWidth()), (int)(y - 0.5 * image.getHeight()));
	}

	public void drawImage(Image image, double x, double y, double alpha) {
		if (image == null || !image.success()) return;
		setAlpha(alpha);
		surface.draw(image.getTile(), (int)(x - 0.5 * image.getWidth()), (int)(y - 0.5 * image.getHeight()));
		resetAlpha();
	}

	public void drawImage(Image image, double x, double y, boolean isTransformed, boolean isAlpha,
								double angle, double scaleX, double scaleY, double alpha) {
		if (image == null || !image.success()) return;
		setAlpha(alpha);
		surface.saveTx();
		surface.translate((float)x, (float)y);
		if (angle != 0.0) {
			surface.rotate((float)angle);
		}
		surface.translate((float)(-0.5 * image.getWidth() * scaleX), (float)(-0.5 * image.getHeight() * scaleY));
		surface.scale((float)scaleX, (float)scaleY);
		surface.draw(image.getTile(), 0, 0);
		surface.restoreTx();
		resetAlpha();
	}


	//String Drawing methods
	public void drawString(String string, Font font, int x, int y) {
		drawString(string, font, x, y, CENTER_ALIGN);
	}

	public void drawString(String string, Font font, int x, int y, int alignment, double alpha) {
		setAlpha(alpha);
		drawString(string, font, x, y, alignment);
		resetAlpha();
	}

	public void drawString(String string, Font font, int x, int y, int alignment) {
		if (font == null) return;
		int charWidth = font.getWidth();
		switch(alignment) {
			case LEFT_ALIGN: 											break;
			case CENTER_ALIGN: x -= string.length() * charWidth / 2; 	break;
			case RIGHT_ALIGN: x -= string.length() * charWidth; 		break;
		}
		y -= font.getHeight() / 2;
		//graphics2D.setColor(java.awt.Color.WHITE);
		int baselineY = y + font.getHeight();
		for (int index = 0; index < string.length(); index++) {
			char c = string.charAt(index);
			Image charTile = font.getCharTile(c);
			if (charTile != null) {
				surface.draw(charTile.getTile(), x + index * charWidth, y);
			} else {
				//graphics2D.drawString("" + c, x + index * charWidth, baselineY);
			}
		}
	}

	// Rectangle Colouring methods
	public void drawRect(Rectangle rectangle, Colour colour, double alpha) {
		setAlpha(alpha);
		drawRect(rectangle, colour);
		resetAlpha();
	}

	public void drawRect(Rectangle rectangle, Colour colour) {
		if(rectangle == null) return;
		surface.setFillColor(colour.color);
		surface.drawLine(rectangle.getXMin(), rectangle.getYMin(), rectangle.getXMax(), rectangle.getYMin(), 1);
		surface.drawLine(rectangle.getXMin(), rectangle.getYMax(), rectangle.getXMax(), rectangle.getYMax(), 1);

		surface.drawLine(rectangle.getXMin(), rectangle.getYMin(), rectangle.getXMin(), rectangle.getYMax(), 1);
		surface.drawLine(rectangle.getXMax(), rectangle.getYMin(), rectangle.getXMax(), rectangle.getYMax(), 1);
	}

	public void fillRect(Rectangle rectangle, Colour colour, double alpha) {
		setAlpha(alpha);
		fillRect(rectangle, colour);
		resetAlpha();
	}

	public void fillRect(Rectangle rectangle, Colour colour) {
		if(rectangle == null) return;
		surface.setFillColor(colour.color);
		surface.fillRect(rectangle.getXMin(), rectangle.getYMin(), rectangle.getWidth(), rectangle.getHeight());
	}

	public void fillGradient(Rectangle rectangle, Image gradientFill, double alpha) {
		setAlpha(alpha);
		fillGradient(rectangle, gradientFill);
		resetAlpha();
	}

	public void fillGradient(Rectangle r, Image g) {
		// Assymetric - aligns the gradient with the left border of the rectangle, truncates it with the right border, and stretches it vertically to fit the rectangele.
		if(r == null) return;
		surface.draw(g.getTile(), r.getXMin(), r.getYMin(), r.getWidth(), r.getHeight(), 0, 0, Math.min(g.getWidth(), r.getWidth()), g.getHeight());
	}


	// protected Alpha methods
	protected void resetAlpha() {
		surface.setAlpha(1.0f);
	}

	protected void setAlpha(double alpha) {
		if (alpha >= 1.0) return;
		surface.setAlpha((float) alpha);
	}

}
