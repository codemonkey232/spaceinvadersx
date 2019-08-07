package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.game.Game;

public class InGameScreen extends MenuScreen {

	public static final int GAME_ON = 0, PAUSED = 1, MENU = 2;

	public static final Rectangle PAUSE_RECTANGLE = new Rectangle(0, 0, 128, 64);

	public static final int MESSAGE_TICKS = 100;

	protected static int state;

	protected static String message;
	protected static int messageTicker;

	public InGameScreen() {
		super(new Widget[] {
				new Button("Return to Game", 0, 0) {
					public void mouseClickIn(int buttonCode, int x, int y) {
						Game.setPaused(false);
						state = GAME_ON;
					}
				},
				new Link("Options", 0, 48, Menus.optionMenu),
				new Button("End Game", 0, 96) {
					public void mouseClickIn(int buttonCode, int x, int y) {
						Game.clearGame();
						SpaceInvadersX.fadeToTrack(Resources.titleTrack);
						SpaceInvadersX.setMenuScreen(Menus.mainMenu);
					}
				},
			});
	}

	public void enter() {
		enterWidgets();
	}

	public void draw(Graphics g) {
		if (state == PAUSED) {
			g.fillRect(PAUSE_RECTANGLE, Colour.BLACK, 0.5);
			g.drawRect(PAUSE_RECTANGLE, Colour.WHITE);
			g.drawString("PAUSED", Resources.xenonWhite, 0, 0);
		} else if (state == MENU) {
			LogoBackground.draw(g);
			drawWidgets(g);
		} else {
			if (messageTicker > 0)
				g.drawString(message, Resources.xenonWhite, 0, 0, Graphics.CENTER_ALIGN, 1.0 * messageTicker / MESSAGE_TICKS);
		}
	}

	public void startGame() {
		state = GAME_ON;
		setMessage("Good Luck!");
	}

	public void tick(int mouseX, int mouseY) {
		tickWidgets(mouseX, mouseY);
		if (state == GAME_ON) messageTicker--;
	}

	protected void setMessage(String message) {
		this.message = message;
		messageTicker = MESSAGE_TICKS;
	}

	public void mouseClick(int buttonCode, int x, int y) {
		if (state == MENU)
			super.mouseClick(buttonCode, x, y);
	}

	protected void pause() {
		if (state == GAME_ON) {
			Game.setPaused(true);
			state = PAUSED;
		}
		else if (state == PAUSED) {
			Game.setPaused(false);
			state = GAME_ON;
		}
	}

	protected void back() {
		if (state == MENU) {
			Game.setPaused(false);
			state = GAME_ON;
		} else {
			Game.setPaused(true);
			state = MENU;
		}
	}

}
