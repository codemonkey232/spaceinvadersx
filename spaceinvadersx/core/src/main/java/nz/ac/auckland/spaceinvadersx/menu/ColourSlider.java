package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static nz.ac.auckland.spaceinvadersx.menu.ColourSelecter.*;

public abstract class ColourSlider extends Slider {

	public static final int WIDTH = 256, STEP_VALUE = 15;
	public static final int BOX_WIDTH = 10;

        public static final Colour HIGHLIT_PULSE0 = Colour.BLACK, HIGHLIT_PULSE1 = Colour.WHITE;
	public static final Colour NORMAL_PULSE0 = new Colour(0x555555), NORMAL_PULSE1 = new Colour(0xAAAAAA);
	public static Colour highlitPulse = HIGHLIT_PULSE0;
	public static Colour normalPulse = NORMAL_PULSE0;

	public static void tickPulse() {
		highlitPulse = Colour.gradient(HIGHLIT_PULSE0, HIGHLIT_PULSE1, 0.5 + 0.5 * Math.sin(SpaceInvadersX.getProgramTicks() * 0.2));
		normalPulse = Colour.gradient(NORMAL_PULSE0, NORMAL_PULSE1, 0.5 + 0.5 * Math.sin(SpaceInvadersX.getProgramTicks() * 0.1));
	}

	protected ColourSelecter parent;
        protected Rectangle sliderBar;

	public ColourSlider(ColourSelecter parent, String text, int x, int y) {
		this(parent, text, x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public ColourSlider(ColourSelecter parent, String text, int x, int y, Font normalFont, Font highlitFont) {
		super(text, x, y, WIDTH, STEP_VALUE, normalFont, highlitFont);
		this.parent = parent;
		sliderBar = new Rectangle();
		updateSliderFill();
	}

	public void draw(Graphics g) {
		Font font = (highlit != UNLIT) ?  highlitFont : normalFont;
		Colour borderColour = (highlit != UNLIT) ? HIGHLIT_COLOUR : NORMAL_COLOUR;
		Colour barColour = (highlit != UNLIT) ? highlitPulse : normalPulse;
		g.drawString(text, font, bounds.getX(), bounds.getY() - height/2 - 4);
		drawColourBar(g);
		g.drawRect(borderBounds, borderColour);
		g.drawRect(sliderBar, barColour);
		if (highlit == LEFT_LIT) {
			drawLeftArrow(g, bounds.getXMin() - 10, bounds.getY());
		} else if (highlit == RIGHT_LIT) {
			drawRightArrow(g, bounds.getXMax() + 10, bounds.getY());
		} else if (highlit == BOTH_LIT) {
			drawRightArrow(g, bounds.getXMin() + 40, bounds.getY());
			drawLeftArrow(g, bounds.getXMax() - 40, bounds.getY());
		}
	}

	protected abstract void drawColourBar(Graphics g);

	public void readValue() {
		value = 0;
	}

	public abstract void applyValue();

	protected void updateSliderFill() {
		if (sliderBar == null) return;
		int sliderX = sliderFill.getXMin() + value;
		int sliderXmin = Math.max(sliderFill.getXMin(), sliderX - BOX_WIDTH / 2);
		int sliderXmax = Math.min(sliderFill.getXMax(), sliderX + BOX_WIDTH / 2);
		sliderBar.setAbsBounds(sliderXmin, sliderFill.getYMin(), sliderXmax, sliderFill.getYMax());
	}

}
