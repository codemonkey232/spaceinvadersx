package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static nz.ac.auckland.spaceinvadersx.core.Controls.*;

public class PlayerShip extends Sprite {

	public static final Rectangle PLAYER_AREA = new Rectangle(700, 500);

	public static final int NUM_SHIP_TYPES = 3;
	public static final int X_WING = 0, CORSAIR = 1, DESTROYER = 2;
	public static final String[] SHIP_TYPE_NAMES = {"X-Wing", "Corsair", "Destroyer"};

	public static final int START_LIVES = 2, START_SPECIAL_AMMO = 1, START_SCORE = 0;
	public static final int MAX_LIVES = 3, MAX_SPECIAL_AMMO = 3;
	public static final int SHIELD_TICKS = 100, SHIELD_FLASH_TICKS = 5;
	public static final int RESPAWN_TICKS = 150, RAPID_FIRE_TICKS = 200;

	public static final int LEFT_SIDE = 0, RIGHT_SIDE = 1, MIDDLE = 2;
	public static final int[] SPAWN_X = {-200, 200, 0};
	public static final int SPAWN_Y = 200;

	public static final int[] HUD_X = {-390, 390, 390};
	public static final int SCORE_Y = -290, ICON_Y = 290, ICON_GAP_Y = -20;
	public static final int[] ALIGNMENT = {Graphics.LEFT_ALIGN, Graphics.RIGHT_ALIGN, Graphics.RIGHT_ALIGN};
	public static final int[] ICON_GAP_X = {20, -20, -20};

	public static final double MAX_BUBBLE_WOBBLE = 0.1, WOBBLE_SPEED = 0.2, WOBBLE_FADE = 0.002;

	public static final double SPEED = 5.0;
	public static final double PREGAME_STICK = 0.1;

	public static final int ESCAPE_MIN_Y = -1000;
	public static final double ESCAPE_ACCEL = 0.5, MAX_ESCAPE_SPEED = 20.0;
	public static final int PREGAME = 0, INPLAY = 1, ENDGAME = 2;
	public static int gameState;

	protected Image shadowImage;
	protected Colour playerColour;
	protected int xDir, yDir;
	protected double speed;
	protected int lives, specialAmmo;
	protected int startPos, score;
	protected int reloadTicks, specialReloadTicks;
	protected int reloadTicker, specialReloadTicker;
	protected int shieldTicker, respawnTicker, rapidFireTicker;
	protected boolean specialIsFresh;
	protected boolean bubble;
	protected double bubbleWobble;

	protected boolean[] controlIsHeld;

	public PlayerShip(ColourableImage shipImage, Image shadowImage, Colour playerColour, Rectangle collisionRect, int startPos, int reloadTicks, int specialReloadTicks, boolean[] controlState) {
		super(recolourImage(shipImage, playerColour), collisionRect, SPAWN_X[startPos], SPAWN_Y);
		this.shadowImage = shadowImage;
		this.playerColour = playerColour;
		this.speed = speed;
		lives = START_LIVES;
		specialAmmo = 1;
		this.startPos = startPos;
		score = START_SCORE;
		this.reloadTicks = reloadTicks;
		this.specialReloadTicks = specialReloadTicks;
		rapidFireTicker = -1;
		controlIsHeld = controlState;
		respawn();
	}

	public void tick() {
		tickPlayerShip();
	}

	public void draw(Graphics g) {
		drawPlayerShip(g);
	}

	public void drawIcon(Graphics g, double x, double y) {
		g.drawImage(image, x, y);
	}

	protected void drawPlayerShip(Graphics g) {
		if (!dead) {
			if (shieldTicker > 0 && shieldTicker % SHIELD_FLASH_TICKS == 0 && gameState != PREGAME)
				drawShadowShip(g);
			else
				drawShip(g);
			if (bubble) {
				double bubbleBounce = bubbleWobble * Math.sin(ageTicker * WOBBLE_SPEED);
				g.drawImage(Resources.bubble, x, y, true, false, 0, 1 + bubbleBounce, 1 - bubbleBounce, 1);
			}
		}
	}

	protected void drawShadowShip(Graphics g) {
		g.drawImage(shadowImage, x, y);
	}

	protected void drawShip(Graphics g) {
		g.drawImage(image, x, y);
	}

	public void drawHUD(Graphics g) {
		g.drawString(Integer.toString(score), Resources.xenonWhite, HUD_X[startPos], SCORE_Y, ALIGNMENT[startPos]);
		drawIcons(g, Resources.heartHUD, lives, HUD_X[startPos], ICON_Y, ICON_GAP_X[startPos], 0);
		drawIcons(g, Resources.nukeHUD, specialAmmo, HUD_X[startPos], ICON_Y, 0, ICON_GAP_Y);
		if (rapidFireTicker > 0) {
			if (rapidFireTicker > 50)
				g.drawImage(Resources.rapidHUD, HUD_X[startPos] + ICON_GAP_X[startPos], ICON_Y + ICON_GAP_Y, 0.5 + 0.5 * Math.sin(ageTicker * 0.2));
			else
				g.drawImage(Resources.rapidHUD, HUD_X[startPos] + ICON_GAP_X[startPos], ICON_Y + ICON_GAP_Y, 0.5 + 0.5 * Math.sin(ageTicker * 0.3));
		}
	}


	public void startGame() {
		respawn();
		lives = START_LIVES;
		specialAmmo = START_SPECIAL_AMMO;
		score = START_SCORE;
	}

	public void endGame() {
		if (dead && (lives > 0 || Game.training)) respawn();
		xDir = 0; yDir = 0;
		xVel = 0;
		yVel = Math.min(yVel, 0);
	}

	public void setStartPos(int startPos) {
		this.startPos = startPos;
	}

	public int getStartPos() {
		return startPos;
	}

	public boolean giveLife() {
		if (lives < MAX_LIVES) {
			lives++;
			return true;
		}
		for (PlayerShip ally : Game.players)
			if (ally.resurrect()) return true;
		return false;
	}

	public boolean resurrect() {
		if (dead && lives == 0) {
			lives = 1;
			Game.playersAlive++;
			return true;
		}
		return false;
	}

	public boolean giveSpecialAmmo() {
		if (specialAmmo >= MAX_SPECIAL_AMMO)
			return false;
		specialAmmo++;
		return true;
	}

	public boolean giveShield() {
		if (bubble) return false;
		bubble = true;
		bubbleWobble = 0;
		return true;
	}

	public boolean giveRapidFire() {
		if (rapidFireTicker > 0) return false;
		rapidFireTicker = RAPID_FIRE_TICKS;
		return true;
	}

	public boolean kill() {
		if (gameState != INPLAY || shieldTicker > 0)
			return false;
		if (bubble) {
			Resources.pop.play();
			bubble = false;
			shieldTicker = SHIELD_TICKS;
			return false;
		} else {
			die();
			return true;
		}
	}

	protected void die() {
		Game.addEffect(new ShipExplosion(x, y));
		Resources.deepExplosion.play();
		dead = true;
		if (lives == 0) Game.playersAlive--;
		respawnTicker = RESPAWN_TICKS;
	}

	protected void award(int points) {
		if (gameState == INPLAY)
			score += points * 10;
	}

	public int getScore() {
		return score;
	}

	protected void drawIcons(Graphics g, Image icon, int number, int iconX, int iconY, int changeX, int changeY) {
		for (int iconID = 0; iconID < number; iconID++) {
			iconX += changeX;
			iconY += changeY;
			g.drawImage(icon, iconX, iconY);
		}
	}

	protected void respawn() {
		x = SPAWN_X[startPos];
		y = SPAWN_Y;
		lives--;
		dead = false;
		bubble = false;
		bubbleWobble = 0;
		specialReloadTicker = 0;
		rapidFireTicker = -1;
		shieldTicker = SHIELD_TICKS;
	}

	protected void tickPlayerShip() {

		shieldTicker--;
		reloadTicker--;
		specialReloadTicker--;
		respawnTicker--;
		rapidFireTicker--;

		if (bubble) {
			if (xDir != 0 || yDir != 0)
				bubbleWobble = Math.min(MAX_BUBBLE_WOBBLE, bubbleWobble + WOBBLE_FADE);
			else
				bubbleWobble = Math.max(0, bubbleWobble - WOBBLE_FADE);
		}

		if (gameState != ENDGAME) {
			if (respawnTicker < 0 && dead && (lives > 0 || Game.training)) respawn();

			xDir = (controlIsHeld[LEFT] ? -1 : 0) + (controlIsHeld[RIGHT] ? 1 : 0);
			yDir = (controlIsHeld[UP] ? -1 : 0) + (controlIsHeld[DOWN] ? 1 : 0);
			if (gameState == INPLAY) {
				xVel = xDir * SPEED;
				yVel = yDir * SPEED;
			} else if (gameState == PREGAME) {
				xVel = xDir * SPEED - PREGAME_STICK * (x - SPAWN_X[startPos]);
				yVel = yDir * SPEED - PREGAME_STICK * (y - SPAWN_Y);
			} else {
				xVel = yVel = 0;
			}
		} else {
			if (y < ESCAPE_MIN_Y)
				yVel = 0;
			else
				yVel = Math.max(-MAX_ESCAPE_SPEED, yVel - ESCAPE_ACCEL);
		}

		tickSprite();

		if (gameState == INPLAY) {
			x = Math.max(PLAYER_AREA.getXMin(), Math.min(PLAYER_AREA.getXMax(), x));
			y = Math.max(PLAYER_AREA.getYMin(), Math.min(PLAYER_AREA.getYMax(), y));
			refreshBounds();
		}

		if (gameState != ENDGAME) {
			if (!dead) {
				if (controlIsHeld[FIRE] && reloadTicker <= 0) {
					reloadTicker = (rapidFireTicker > 0) ? reloadTicks/2 : reloadTicks;
					fire();
				}
				if (controlIsHeld[SPECIAL] && specialReloadTicker <=0 && specialIsFresh) {
					if (gameState != INPLAY || specialAmmo > 0) {
						if (gameState == INPLAY) specialAmmo--;
						specialReloadTicker = specialReloadTicks;
						fireSpecial();
					}
				}
			}
		}
		specialIsFresh = !controlIsHeld[SPECIAL];

	}

	protected void fire() {}
	protected void fireSpecial() {}

	public static PlayerShip getPlayerShip(int shipType, Colour playerColour, int startPos, boolean[] controlState) {
		switch(shipType) {
			case X_WING: return new XWing(playerColour, startPos, controlState);
			case CORSAIR: return new Corsair(playerColour, startPos, controlState);
			case DESTROYER: return new Destroyer(playerColour, startPos, controlState);
		}
		throw new IllegalArgumentException("ERROR: Not a valid ship type.");
	}

	protected static Image recolourImage(ColourableImage playerColourableImage, Colour newColour) {
		return Toolkit.recolourImage(playerColourableImage, newColour);
	}

	protected static Tiles recolourTiles(ColourableTiles playerColourableTiles, Colour newColour) {
		return Toolkit.recolourTiles(playerColourableTiles, newColour);
	}
}
