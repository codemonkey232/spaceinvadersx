package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Controls;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.game.PlayerShip;
import nz.ac.auckland.spaceinvadersx.game.IterateList;

import java.util.List;
import java.util.LinkedList;
import java.util.Collection;
import java.util.Iterator;

public class EnterNameScreen extends MenuScreen {

	public static final String ENTER_NAME = "Enter your name:";
	public static final int MAX_LENGTH = 20;

	protected IterateList<PlayerShip> players;
	protected Iterator<PlayerShip> iterator;
	protected PlayerShip currentShip;
	protected String playerDescription;
	protected String scoreString;
	protected String playerName;
	protected int score;

	public EnterNameScreen() {
		super();
                players = new IterateList<PlayerShip>();
	}

	public void setPlayers(Collection<PlayerShip> players) {
		this.players.clear();
		this.players.addAll(players);
	}

	public void enter() {
		iterator = players.iterator();
		nextShip();
	}

	public void draw(Graphics g) {
		g.drawString(playerDescription, Resources.xenonWhite, 0, -150);
		currentShip.drawIcon(g, 0, -50);
		g.drawString(scoreString, Resources.xenonWhite, 0, 25);
		g.drawString(ENTER_NAME, Resources.xenonWhite, 0, 100);
		String cursorName = playerName + (((SpaceInvadersX.getProgramTicks() / 10) % 2 == 0) ? " " : "_");
		g.drawString(cursorName, Resources.xenonWhite, 0, 125);
	}

	protected void nextShip() {
		if (iterator.hasNext()) {
			currentShip = iterator.next();
			int startPos = currentShip.getStartPos();
			playerDescription = (startPos == PlayerShip.MIDDLE) ? "Solo Player" : Controls.PLAYER_NAMES[startPos];
			score = currentShip.getScore();
			scoreString = "Score: " + score;
			playerName = "";
		} else {
			leave();
		}
	}

	public void typeChar(char character) {
		if (character == '\n') {
			if (playerName.trim().length() > 0) {
				Menus.highscoreScreen.add(playerName.trim(), score);
				nextShip();
			}
		}
		else if (character == '\010') playerName = ((playerName.length() > 1) ? playerName.substring(0, playerName.length() - 1) : "");
		else if (character >= 32 && character <= 126 && playerName.length() < MAX_LENGTH && (character > 32 || playerName.length() > 0)) playerName += character;
		else throw new IllegalArgumentException("" + ((int) character));
	}

	public int backgroundType() {
		return Background.NEBULA;
	}

	public void back() {}

	protected void leave() {
		Menus.highscoreScreen.sortHighscores();
		players.clear();
		SpaceInvadersX.popMenuScreen();
	}



}
