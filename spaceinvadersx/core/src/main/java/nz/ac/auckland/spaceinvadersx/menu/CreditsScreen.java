package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class CreditsScreen extends MenuScreen {

	public static final int MIN_Y = -320, MAX_Y = 320;
	public static final int LOGO_MIN_Y = -420, LOGO_MAX_Y = 420, LOGO_OFFSET = 2080;
	public static final int GAP = 32, SPEED = 2;
	public static final char COPYRIGHT = 127;

	protected int startY;

	public static final String[] CREDITS = {
			"=== Graphics ===",
			"",
			"Thanks to the creators of:",
			"SWIV, Unreal, Star Wars, Star Trek, Abe's Oddysee",
			"and various others",
			"",
			"",
			"=== Sound ===",
			"",
			"Thanks to the creators of:",
			"SWIV and Unreal",
			"",
			"",
			"=== Music ===",
			"",
			"** SWIV_decimation.mod **",
			"Title track of \"SWIV\"",
			"Andrew Barnabas, Storm",
			"Released for Amiga 1991",
			"",
			"** Stardust.mod **",
			"Main track of \"Stardust\"",
			"RIB, Bloodhouse",
			"Released for Amiga 1993",
			"",
			"** Blade_Raver.mod **",
			"\"Blade Raver\"",
			"Bionic Blade, 1992",
			"",
			"** Assassin.mod **",
			"Title track of \"Assassin\"",
			"Allister Brimble, Psionic Systems",
			"Released for Amiga 1992",
			"",
			"** Xpedition.mod **",
			"Main track of \"Xpedition\"",
			"GOBI, for Amiga",
			"",
			"** SWIV_Mellow.mod **",
			"Highscore track of \"SWIV\"",
			"Andrew Barnabas, Storm",
			"Released for Amiga 1991",
			"",
			"** SD_GameOver.mod **",
			"Gameover track of \"Stardust\"",
			"RIB, Bloodhouse",
			"Released for Amiga 1993",
			"",
			"",
			"=== Development ===",
			"Programmer: aols010",
			"",
			"** Special Thanks To **",
			"My family",
			"UoA SOFTENG 2004-2007",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			COPYRIGHT + " aols010 2007"
		};

	public CreditsScreen() {
		super();
	}

	public void tick(int mouseX, int mouseY) {
		startY -= SPEED;
		if (startY + CREDITS.length * GAP < MIN_Y)
			SpaceInvadersX.popMenuScreen();
	}

	public void draw(Graphics g) {
		int y = startY;
		for (int i = 0; i < CREDITS.length; i++) {
			if (y > MIN_Y && !CREDITS[i].isEmpty()) {
				g.drawString(CREDITS[i], Resources.xenonWhite, 0, y);
			}
			y += GAP;
			if (y > MAX_Y) break;
		}
		int logoY = startY + LOGO_OFFSET;
		if (logoY > LOGO_MIN_Y && logoY < LOGO_MAX_Y) {
			LogoBackground.draw(g, 0, logoY);
		}
	}

	public void enter() {
		startY = MAX_Y;
	}


	public int backgroundType() {
		return Background.NEBULA;
	}


}
