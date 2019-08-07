package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Selecter extends Button {

	protected String[] texts;
	protected Rectangle[] textBounds;
	protected int value, numValues;

	public Selecter(String[] texts, int x, int y) {
		this(texts, x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public Selecter(String[] texts, int x, int y, Font normalFont, Font highlitFont) {
		super(texts[0], x, y, normalFont, highlitFont);
		this.texts = texts;
		numValues = texts.length;
		textBounds = new Rectangle[numValues];
		for (int i = 0; i < numValues; i++)
			textBounds[i] = textBounds(texts[i], x, y, normalFont);
		readValue();
		update();
	}

	public Selecter(String[] texts, Rectangle bounds) {
		this(texts, bounds, Resources.xenonGrey, Resources.xenonWhite);
	}

	public Selecter(String[] texts, Rectangle bounds, Font normalFont, Font highlitFont) {
		super(texts[0], bounds, normalFont, highlitFont);
		this.texts = texts;
		numValues = texts.length;
		textBounds = new Rectangle[numValues];
		for (int i = 0; i < numValues; i++)
			textBounds[i] = bounds;
		readValue();
		update();
	}

	public void mouseClickIn(int buttonCode, int x, int y) {
		value = (value + 1) % numValues;
		applyValue();
		update();
	}

	public void readValue() {}
	public void applyValue() {}

	protected void update() {
		text = texts[value];
		bounds = textBounds[value];
	}

}
