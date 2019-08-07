package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static nz.ac.auckland.spaceinvadersx.menu.ColourSelecter.*;

public class ShadeSlider extends ColourSlider {

	protected Rectangle pieceLeft;
	protected Rectangle pieceRight;
	protected Image fillLeft;
	protected Image fillRight;
	protected Colour hue;

	public ShadeSlider(ColourSelecter parent, int x, int y) {
		this(parent, "Shade:", x, y, Resources.xenonGrey, Resources.xenonWhite, Colour.RED);
	}

	public ShadeSlider(ColourSelecter parent, String text, int x, int y, Font normalFont, Font highlitFont, Colour defaultHue) {
		super(parent, text, x, y, normalFont, highlitFont);
		pieceLeft = Rectangle.getAbsRectangle(sliderFill.getXMin(), sliderFill.getYMin(), sliderFill.getX(), sliderFill.getYMax());
		pieceRight = Rectangle.getAbsRectangle(sliderFill.getX(), sliderFill.getYMin(), sliderFill.getXMax(), sliderFill.getYMax());
		value = 128;
		updateSliderFill();
		setHue(defaultHue);
	}

	public void drawColourBar(Graphics g) {
		if (pieceLeft != null && pieceRight != null) {
			g.fillGradient(pieceLeft, fillLeft);
			g.fillGradient(pieceRight, fillRight);
		}
	}

	public void applyValue() {
		parent.setColour(getColour());
	}

	public void setHue(Colour hue) {
		this.hue = hue;
		fillLeft = Toolkit.createGradientFill(Colour.BLACK, hue, sliderFill.getWidth() / 2, false);
		fillRight = Toolkit.createGradientFill(hue, Colour.WHITE, sliderFill.getWidth() / 2, false);
		applyValue();
	}

	public Colour getColour() {
		float shade = value * 2f / 255f;
		int i = (int) shade;
		float f = shade - i;
		switch(i) {
			case 0: return Colour.gradient(Colour.BLACK, hue, f);
			case 1: return Colour.gradient(hue, Colour.WHITE, f);
		}
		return Colour.WHITE;
	}

}
