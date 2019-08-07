package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.Graphics;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class FadeWaitScreen extends MenuScreen {

	public FadeWaitScreen() {
		super();
	}


	public void tick(int mouseX, int mouseY) {
		if (Background.fadeFinished())
			SpaceInvadersX.endFadeWait();
	}

	public void draw(Graphics g) {}

	public void mouseClick(int buttonCode, int x, int y) {
		Background.skip();
		SpaceInvadersX.endFadeWait();
	}

	public void back() {
		Background.skip();
		SpaceInvadersX.endFadeWait();
	}

}
