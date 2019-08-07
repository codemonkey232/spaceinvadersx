package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.graphics.Graphics;

public class IntroScreen extends MenuScreen {

	public IntroScreen() {
		super();
	}

	public void prefade() {
		SpaceInvadersX.fadeToTrack(Resources.titleTrack);
	}

	public void enter() {
		LogoBackground.fadeIn();
	}

	public void tick(int mouseX, int mouseY) {
		LogoBackground.tick();
		if (LogoBackground.fadeFinished())
			SpaceInvadersX.setMenuScreen(Menus.mainMenu);
	}

	public void draw(Graphics g) {
		LogoBackground.drawFadeIn(g);
	}

	public void mouseClick(int buttonCode, int x, int y) {
		SpaceInvadersX.setMenuScreen(Menus.mainMenu);
	}

	public void back() {
		SpaceInvadersX.setMenuScreen(Menus.mainMenu);
	}

}
