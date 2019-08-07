package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.game.Game;
import nz.ac.auckland.spaceinvadersx.game.PlayerShip;
import nz.ac.auckland.spaceinvadersx.core.Controls;

import static nz.ac.auckland.spaceinvadersx.core.Controls.*;

public class ShipMenu extends MenuScreen {

	public static final int X_LEFT = -200, X_RIGHT = 200;
	public static final int[] X_POS = {X_LEFT, X_RIGHT};

	protected static int[] shipTypes = {0, 1};
	protected static Colour[] shipColours = {Colour.RED, Colour.BLUE};
	protected static PlayerShip[] ships = new PlayerShip[NUM_PLAYERS];

	protected static boolean entered;

	protected static int multiplayOption = BOTH_PLAYERS;

	public ShipMenu() {
		super(new Widget[] {
				new Label("Left Hand Player", -200, -30),
				new Label("Right Hand Player", 200, -30),
				new ColourSelecter(X_LEFT, 50, shipColours[0]) {
						public void applyColour() {shipColours[0] = colour; setShip(0);}
					},
				new ColourSelecter(X_RIGHT, 50, shipColours[1]) {
						public void applyColour() {shipColours[1] = colour; setShip(1);}
					},
				new Label("Players:", 0, 150),
				new PlayerSelecter(0, 180) {
						public void readValue() {value = BOTH_PLAYERS;}
						public void applyValue() {multiplayOption = value;}
					},
				new Selecter(PlayerShip.SHIP_TYPE_NAMES, new Rectangle(X_LEFT, 280, 144, 216)) {
						public void readValue() {value = 0;}
						public void applyValue() {shipTypes[0] = value; setShip(0);}
					},
				new Selecter(PlayerShip.SHIP_TYPE_NAMES, new Rectangle(X_RIGHT, 280, 144, 216)) {
						public void readValue() {value = 1;}
						public void applyValue() {shipTypes[1] = value; setShip(1);}
					},
				new GlowButton("START", 0, 240) {
						public void mouseClickIn(int buttonCode, int x, int y) {startGame();}
					},
				new Button("TRAIN", 0, -280) {
						public void draw(Graphics g) { if (highlit) super.draw(g);}
						public void mouseClickIn(int buttonCode, int x, int y) {startGame(); Game.training = true;}
					}
			});
	}

	public void enter() {
		enterWidgets();
		java.util.Arrays.fill(ships, null);
		entered = true;
		Game.newGame();
		setShip(0);
		setShip(1);
	}

	public void tick(int mouseX, int mouseY) {
		tickWidgets(mouseX, mouseY);
		ColourSlider.tickPulse();
	}

	public static void setShip(int shipID) {
		if (!entered) return;
		if (ships[shipID] != null) {
			Game.removePlayerShip(ships[shipID]);
		}
		ships[shipID] = Game.createPlayerShip(shipTypes[shipID], shipColours[shipID], shipID, Controls.getPlayerControlState(shipID));
	}

	public static void startGame() {
		if (multiplayOption != BOTH_PLAYERS) {
			Game.removePlayerShip(ships[1 - multiplayOption]);
			ships[multiplayOption].setStartPos(PlayerShip.MIDDLE);
		}
		Game.startGame();
		SpaceInvadersX.setMenuScreen(Menus.inGameScreen);
		Menus.inGameScreen.startGame();
	}

	protected void back() {
		Game.clearGame();
		SpaceInvadersX.popMenuScreen();
	}

}
