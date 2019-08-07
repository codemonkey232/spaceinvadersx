/*
 * Colour class - stores a colour
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class Colour {

	public static final Colour WHITE = new Colour(0xFFFFFF),
							   BLACK = new Colour(0x000000),
							   GREY = new Colour(0x7F7F7F),
							   RED = new Colour(0xFF0000),
							   GREEN = new Colour(0x00FF00),
							   BLUE = new Colour(0x0000FF),
							   YELLOW = new Colour(0xFFFF00),
							   CYAN = new Colour(0x00FFFF),
							   MAGENTA = new Colour(0xFF00FF);


	public final int color;

	public Colour(int red, int green, int blue) {
		color = 0xff000000 | (red << 16) | (green << 8) | blue;
	}

	public Colour(int red, int green, int blue, int alpha) {
		color = (alpha << 24) | (red << 16) | (green << 8) | blue;
	}

	public Colour(int rgb) {
		color = 0xff000000 | rgb;
	}

	public Colour opaque() {
		return (getAlpha() == 0xFF) ? this : new Colour(getRed(), getGreen(), getBlue(), 0xFF);
	}

	public Colour transparent() {
		return (getAlpha() == 0) ? this : new Colour(getRed(), getGreen(), getBlue(), 0);
	}

	public static Colour gradient(Colour zero, Colour one, double scale) {
		scale = Math.max(Math.min(1.0, scale), 0.0);
		int r = ((int) (scale * one.getRed() + (1 - scale) * zero.getRed()));
		int g = ((int) (scale * one.getGreen() + (1 - scale) * zero.getGreen()));
		int b = ((int) (scale * one.getBlue() + (1 - scale) * zero.getBlue()));
		return new Colour(r, g, b);
	}

	public static Colour randomColour() {
		return new Colour(randomByte(), randomByte(), randomByte());
	}

	public static int randomByte() {
		return ((int) Math.floor(256 * Math.random()));
	}

        public int getAlpha() {
          return (color >> 24) & 0xff;
        }

        public int getRed() {
          return (color >> 16) & 0xff;
        }

        public int getGreen() {
          return (color >> 8) & 0xff;
        }

        public int getBlue() {
          return (color) & 0xff;
        }

}
