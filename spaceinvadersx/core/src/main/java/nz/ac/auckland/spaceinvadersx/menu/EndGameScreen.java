package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.game.Game;
import nz.ac.auckland.spaceinvadersx.game.PlayerShip;

public class EndGameScreen extends MenuScreen {

	public static final String SUCCESS_STRING = "Congratulations!", FAILURE_STRING = "Game Over";

	protected static String message;
	protected static int fadeTicker;
	protected boolean success;


	public EndGameScreen() {
		super();
	}

	public void setSuccess(boolean success) {
		this.success = success;
		message = success ? SUCCESS_STRING : FAILURE_STRING;
	}


	public void enter() {
		fadeTicker = 0;
		if (success)
			SpaceInvadersX.fadeToTrack(Resources.gameWonTrack);
		else
			SpaceInvadersX.fadeToTrack(Resources.gameOverTrack);
	}

	public void draw(nz.ac.auckland.spaceinvadersx.graphics.Graphics g) {
		if (fadeTicker < 50) {
			double alpha = 1.0 * fadeTicker / 50;
			g.fillRect(SpaceInvadersX.SCREEN, Colour.BLACK, alpha);
			g.drawString(message, Resources.xenonWhite, 0, 0, Graphics.CENTER_ALIGN, alpha);
		} else {
			g.fillRect(SpaceInvadersX.SCREEN, Colour.BLACK);
			if (fadeTicker < 150) {
				g.drawString(message, Resources.xenonWhite, 0, 0);
			} else if (fadeTicker < 200) {
				g.drawString(message, Resources.xenonWhite, 0, 0, Graphics.CENTER_ALIGN, 1.0 * (200 - fadeTicker) / 50);
			}
		}

	}

	public void tick(int mouseX, int mouseY) {
		fadeTicker++;
		if (fadeTicker == 50) {
			Menus.enterNameScreen.setPlayers(Game.players);
			Game.clearGame();
		}
		if (fadeTicker == 225) {
			Background.setTo(Background.BLACK);
			if (success)
				SpaceInvadersX.queueMenuScreen(Menus.creditsScreen);
			SpaceInvadersX.queueMenuScreen(Menus.enterNameScreen);
			SpaceInvadersX.queueMenuScreen(Menus.highscoreScreen);
			SpaceInvadersX.queueMenuScreen(Menus.introScreen);
			SpaceInvadersX.popMenuScreen();
		}
	}

}
