package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static nz.ac.auckland.spaceinvadersx.menu.ColourSelecter.*;

public class HueSlider extends ColourSlider {

	public static final Colour[] HUES = new Colour[] { Colour.RED, Colour.YELLOW, Colour.GREEN, Colour.CYAN, Colour.BLUE, Colour.MAGENTA, Colour.RED };

	protected Rectangle[] pieces;
        protected Image[] pieceColours;

	public HueSlider(ColourSelecter parent, int x, int y) {
		this(parent, "Hue:", x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public HueSlider(ColourSelecter parent, String text, int x, int y, Font normalFont, Font highlitFont) {
		super(parent, text, x, y, normalFont, highlitFont);
		this.pieces = new Rectangle[HUES.length - 1];
		this.pieceColours = new Image[HUES.length - 1];
		for (int i = 0; i < HUES.length - 1; i++) {
			int x1 = sliderFill.getXMin() + sliderFill.getWidth() * i / (HUES.length - 1);
			int x2 = sliderFill.getXMin() + sliderFill.getWidth() * (i + 1) / (HUES.length - 1);
			pieces[i] = Rectangle.getAbsRectangle(x1, sliderFill.getYMin(), x2, sliderFill.getYMax());
                        pieceColours[i] = Toolkit.createGradientFill(HUES[i], HUES[i + 1], x2 - x1, false);
		} 
	}

	public void drawColourBar(Graphics g) {
		for (int i = 0; i < pieces.length; i++) {
			g.fillGradient(pieces[i], pieceColours[i]);
		}
	}

	public void applyValue() {
		parent.setHue(getHue());
	}

	public void setHue(Colour c) {
		float r = c.getRed() / 255.0f, g = c.getGreen() / 255.0f, b = c.getBlue() / 255.0f;
		float min = Math.min(Math.min(r, g), b);
		float max = Math.max(Math.max(r, g), b);
		if (min == max) return;
		float hue = (r == max)? 0+(b-g) : (g == max)? 2 + (r-b) : 4 + (g-r);
		value = (int) (hue * 255f / 6f);
		updateSliderFill();
		applyValue();  
	}

	public Colour getHue() {
		float hue = value * 6f / 255f;
		int i = (int) hue;
		int f = (int) ((hue - i) * 255f);
		switch(i) {
			case 0: case 6: return new Colour(255, f, 0);
			case 1: return new Colour(255 - f, 255, 0);
			case 2: return new Colour(0, 255, f);
			case 3: return new Colour(0, 255 - f, 255);
			case 4: return new Colour(f, 0, 255);
			case 5: return new Colour(255, 0, 255 - f);
		}
		return Colour.RED;
	}

}
