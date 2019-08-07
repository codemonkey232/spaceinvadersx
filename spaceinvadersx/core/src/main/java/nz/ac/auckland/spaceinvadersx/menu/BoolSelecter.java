package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class BoolSelecter extends Selecter {

	protected boolean bool;

	public BoolSelecter(String text, int x, int y) {
		this(text + " Off", text + " On", x, y);
	}

	public BoolSelecter(String text, int x, int y, Font normalFont, Font highlitFont) {
		this(text + " Off", text + " On", x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public BoolSelecter(String falseText, String trueText, int x, int y) {
		this(falseText, trueText, x, y, Resources.xenonGrey, Resources.xenonWhite);
	}

	public BoolSelecter(String falseText, String trueText, int x, int y, Font normalFont, Font highlitFont) {
		super(new String[]{falseText, trueText}, x, y, normalFont, highlitFont);
	}

	public void readValue() {
		readBool();
		value = bool ? 1 : 0;
	}

	public void applyValue() {
		bool = (value == 1);
		applyBool();
	}

	public void readBool() {}
	public void applyBool() {}

}
