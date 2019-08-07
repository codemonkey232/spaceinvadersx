package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class MainMenu extends MenuScreen {

	public static final char COPYRIGHT = 127;

	public MainMenu() {
		super(new Widget[] {
				new Link("New Game", 0, 0, Menus.shipMenu),
				new Link("Options", 0, 40, Menus.optionMenu),
				new Link("Highscores", 0, 80, Menus.highscoreScreen),
				new Link("Credits", 0, 120, Menus.creditsScreen),
				new Label(COPYRIGHT + " aols010 2007", 0, 250)
			});
	}

}
