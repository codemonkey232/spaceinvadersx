package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Slider extends Widget {

	public static final int UNLIT = 0, LEFT_LIT = 1, RIGHT_LIT = 2, BOTH_LIT = 3;
	public static final Colour 	HIGHLIT_COLOUR = Colour.WHITE, NORMAL_COLOUR = Colour.GREY,
					HIGHLIT_COLOUR0 = Colour.BLUE, HIGHLIT_COLOUR1 = Colour.WHITE,
					NORMAL_COLOUR0 = new Colour(0x000088), NORMAL_COLOUR1 = Colour.GREY;

	protected static Image normalGradient, highlitGradient;

	protected String text;
	protected int width, height, stepValue, value;
	protected Font normalFont, highlitFont;
	protected Rectangle borderBounds, sliderFill;
	protected int highlit;

	public Slider(String text, int x, int y, int width, int stepValue) {
		this(text, x, y, width, stepValue, Resources.xenonGrey, Resources.xenonWhite);
	}

	public Slider(String text, int x, int y, int width, int stepValue, Font normalFont, Font highlitFont) {
		super(new Rectangle(x, y, width + 100, normalFont.getHeight()*2 + 8));
		this.text = text;
		this.width = width;
		this.height = normalFont.getHeight();
		this.stepValue = stepValue;
		this.normalFont = normalFont;
		this.highlitFont = highlitFont;
		readValue();
		borderBounds = new Rectangle(x, y + height/2, width + 4, height + 4);
		sliderFill = Rectangle.getAbsRectangle(borderBounds.getXMin() + 2, borderBounds.getYMin() + 2, borderBounds.getXMax() - 2, borderBounds.getYMax() - 2);
                if (normalGradient == null || highlitGradient == null) {
			normalGradient = Toolkit.createGradientFill(NORMAL_COLOUR0, NORMAL_COLOUR1, width, false);
			highlitGradient = Toolkit.createGradientFill(HIGHLIT_COLOUR0, HIGHLIT_COLOUR1, width, false);
		}
		updateSliderFill();
	}

	public void tickIn(int mouseX, int mouseY) {
		highlit = (borderBounds.contains(mouseX, mouseY)) ? BOTH_LIT : ((mouseX < bounds.getX()) ? LEFT_LIT : RIGHT_LIT);
	}
	public void tickOut() {
		highlit = UNLIT;
	}

	public void draw(Graphics g) {
		Font font = (highlit != UNLIT) ?  highlitFont : normalFont;
		Colour borderColour = (highlit != UNLIT) ? HIGHLIT_COLOUR : NORMAL_COLOUR;
		Image gradient = (highlit != UNLIT) ? highlitGradient : normalGradient;

		g.drawString(text, font, bounds.getX(), bounds.getY() - height/2 - 4);
		g.fillGradient(sliderFill, gradient, 0.5);
		g.drawRect(borderBounds, borderColour);

		if (highlit == LEFT_LIT) {
			drawLeftArrow(g, bounds.getXMin() - 10, bounds.getY());
		} else if (highlit == RIGHT_LIT) {
			drawRightArrow(g, bounds.getXMax() + 10, bounds.getY());
		} else if (highlit == BOTH_LIT) {
			drawRightArrow(g, bounds.getXMin() + 40, bounds.getY());
			drawLeftArrow(g, bounds.getXMax() - 40, bounds.getY());
		}
	}

	public void mouseClickIn(int buttonCode, int x, int y) {
		if (borderBounds.contains(x, y)) {
			value = x - bounds.getX() + width/2;
		} else {
			if (x < bounds.getX())
				value -= stepValue;
			else
				value += stepValue;
		}
		value = Math.min(width, Math.max(0, value));
		updateSliderFill();
		applyValue();
	}

	public void readValue() {}
	public void applyValue() {}

	protected void updateSliderFill() {
		sliderFill.setAbsBounds(sliderFill.getXMin(), sliderFill.getYMin(), sliderFill.getXMin() + value, sliderFill.getYMax());
	}

}
