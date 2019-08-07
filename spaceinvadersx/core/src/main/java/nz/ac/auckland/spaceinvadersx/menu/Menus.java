package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Menus {

	public static Resources resources;
	public static IntroScreen introScreen;
	public static MainMenu mainMenu;
	public static ShipMenu shipMenu;
	public static OptionMenu optionMenu;
	public static ControlMenu controlMenu;
	public static InGameScreen inGameScreen;
	public static EndGameScreen endGameScreen;
	public static EnterNameScreen enterNameScreen;
	public static HighscoreScreen highscoreScreen;
	public static CreditsScreen creditsScreen;
	public static FadeWaitScreen fadeWaitScreen;

	public static void loadStartUp() {
		fadeWaitScreen = new FadeWaitScreen();
		creditsScreen = new CreditsScreen();
		highscoreScreen	= new HighscoreScreen();
		enterNameScreen = new EnterNameScreen();
		endGameScreen = new EndGameScreen();
		controlMenu = new ControlMenu();
		optionMenu = new OptionMenu();
		shipMenu = new ShipMenu();
		mainMenu = new MainMenu();
		introScreen = new IntroScreen();
		inGameScreen = new InGameScreen();
	}
}
