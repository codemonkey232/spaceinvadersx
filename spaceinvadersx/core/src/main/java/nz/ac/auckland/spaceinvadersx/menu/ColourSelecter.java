package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class ColourSelecter extends Widget {

	public static final Colour DEFAULT_HUE = Colour.RED;

	protected HueSlider hueSlider;
	protected ShadeSlider shadeSlider;
	protected Colour colour;

	public ColourSelecter(int x, int y) {
		this(x, y, DEFAULT_HUE);
	}

	public ColourSelecter(int x, int y, Colour defaultHue) {
		super(new Rectangle());
		colour = defaultHue;
		hueSlider = new HueSlider(this, x, y - 30);
		shadeSlider = new ShadeSlider(this, x, y + 30);
		hueSlider.setHue(defaultHue);
	}

	public void setHue(Colour hue) {
		shadeSlider.setHue(hue);
	}

	public void setColour(Colour colour) {
		this.colour = colour;
		applyColour();
	}

	public void tick(int mouseX, int mouseY) {
		if (hueSlider != null && shadeSlider != null) {
			hueSlider.tick(mouseX, mouseY);
			shadeSlider.tick(mouseX, mouseY);
		}
	}

	public void draw(Graphics g) {
		if (hueSlider != null && shadeSlider != null) {
			hueSlider.draw(g);
			shadeSlider.draw(g);
		}
	}

	public void mouseClick(int buttonCode, int x, int y) {
		if (hueSlider != null && shadeSlider != null) {
			hueSlider.mouseClick(buttonCode, x, y);
			shadeSlider.mouseClick(buttonCode, x, y);
		}
	}

	public void applyColour() {}

}
