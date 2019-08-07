package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class Link extends Button {

	protected MenuScreen target;
	protected boolean pushScreenOnStack;

	public Link(String text, int x, int y, MenuScreen target) {
		this(text, x, y, target, Resources.xenonGrey, Resources.xenonWhite, true);
	}

	public Link(String text, int x, int y, MenuScreen target, Font normalFont, Font highlitFont) {
		this(text, x, y, target, normalFont, highlitFont, true);
	}

	public Link(String text, int x, int y, MenuScreen target, Font normalFont, Font highlitFont, boolean pushScreenOnStack) {
		super(text, x, y, normalFont, highlitFont);
		this.target = target;
		this.pushScreenOnStack = pushScreenOnStack;
	}

	public void mouseClickIn(int buttonCode, int x, int y) {
		if (target == null)
			SpaceInvadersX.popMenuScreen();
		else {
			if (pushScreenOnStack)
				SpaceInvadersX.pushMenuScreen(target);
			else
				SpaceInvadersX.setMenuScreen(target);
		}
	}

}
