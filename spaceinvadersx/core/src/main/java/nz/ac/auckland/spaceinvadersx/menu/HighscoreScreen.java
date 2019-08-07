package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.game.Game;

import java.util.*;

public class HighscoreScreen extends MenuScreen {

	public static final String[] DEFAULT_NAMES = {
			"Atari", "Commodore", "Epic", "Konami", "Midway", "Namco", "Sega", "Storm", "Taito", "Tecmo"
		};

	public static final int[] DEFAULT_SCORES = {
			100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000
		};

	public static final int TITLE_Y = -240, START_Y = -150, GAP = 36;
	public static final int LEFT_X = -272, RIGHT_X = 272;
	public static final int NUM_PLACES = 10;

	protected Vector<ScoreEntry> entries;
	protected boolean isCurrent;

	public HighscoreScreen() {
		super();
		entries = new Vector<ScoreEntry>();
		resetHighscores();
	}

	public void add(String name, int score) {
		entries.add(new ScoreEntry(name, score, true));
		isCurrent = true;
	}

	public void resetHighscores() {
		entries.clear();
		for (int entryID = 0; entryID < NUM_PLACES; entryID++)
			entries.add(new ScoreEntry(DEFAULT_NAMES[entryID], DEFAULT_SCORES[entryID], false));
		isCurrent = false;
                sortHighscores();
	}

	public void sortHighscores() {
		Collections.sort(entries);
		for (int entryID = entries.size() - 1; entryID >= 0; entryID--) {
			if (entryID >= NUM_PLACES && !entries.get(entryID).isCurrent()) {
				entries.remove(entryID);
			} else {
				entries.get(entryID).entryString(entryID + 1);
			}
		}
	}

	public void endCurrent() {
		while (entries.size() > NUM_PLACES) {
			entries.remove(NUM_PLACES);
		}
		for (ScoreEntry entry : entries) {
			entry.setCurrent(false);
		}
		isCurrent = false;
	}


	public void enter() {
	}

	public void draw(Graphics g) {
		g.drawImage(Resources.xPulse, 0, TITLE_Y, 0.5 + 0.5 * Math.sin(SpaceInvadersX.getProgramTicks() * 0.2));
		g.drawImage(Resources.xMini, 0, TITLE_Y);
		g.drawString("Highscores", Resources.xenonWhite, 0, TITLE_Y);
		int entryY = START_Y;
		for (ScoreEntry entry : entries) {
			if (entry.isCurrent()) {
				Widget.drawRightArrow(g, LEFT_X, entryY);
				Widget.drawLeftArrow(g, RIGHT_X, entryY);
			}
			g.drawString(entry.toString(), Resources.xenonWhite, 0, entryY);
			entryY += GAP;
		}
	}

	public void mouseClick(int buttonCode, int x, int y) {
		back();
	}

	public void back() {
		if (isCurrent) endCurrent();
		SpaceInvadersX.popMenuScreen();
	}

	public int backgroundType() {
		return Background.NEBULA;
	}

}


class ScoreEntry implements Comparable<ScoreEntry> {

	public static final int ENTRY_LENGTH = 30;
	public static final String SPACES = "                              ";

	protected String name;
	protected String entryString;
	protected int score;
	protected boolean current;

	public ScoreEntry(String name, int score, boolean current) {
		this.name = name;
		this.score = score;
		this.current = current;
	}

	public String getName() {
		return name;
	}

	public int getScore() {
		return score;
	}

	public boolean isCurrent() {
		return current;
	}

	public void setCurrent(boolean current) {
		this.current = current;
	}

	public String toString() {
		return entryString;
	}

	protected void entryString(int place) {
		int spaceLength = ENTRY_LENGTH - name.length() - Integer.toString(score).length();
		String placeString = "    ";
		if (place < 10) placeString = " " + place + ". ";
		else if (place <= HighscoreScreen.NUM_PLACES) placeString = place + ". ";
		entryString = placeString + name + SPACES.substring(0, spaceLength) + score;
	}

	public int compareTo(ScoreEntry other) {
		if (Game.training && (current != other.current)) return current ? 1 : -1;
		return other.score - score;
	}

}
