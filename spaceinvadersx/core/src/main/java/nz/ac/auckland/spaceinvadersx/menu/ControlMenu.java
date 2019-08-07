package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Controls;

import static nz.ac.auckland.spaceinvadersx.core.Controls.*;


public class ControlMenu extends MenuScreen {

	public static final int X_START = 0, 	Y_START = -60,
							X_STEP = 76,	Y_STEP = 20;

	public ControlMenu() {
		super(createControlWidgets());
	}

	public void tick(int mouseX, int mouseY) {
		tickWidgets(mouseX, mouseY);
		ControlWidget.tickPulse();
	}

	protected static Widget[] createControlWidgets() {
		Widget[] controlWidgets = new Widget[(NUM_PLAYERS+1) * (NUM_PLAYER_CONTROLS+1) + 1];
		int widgetID = 0;
		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++)
			controlWidgets[widgetID++] = new Label(PLAYER_NAMES[playerID], xGrid(4*playerID - 1), yGrid(1));

		for (int controlID = 0; controlID < NUM_PLAYER_CONTROLS; controlID++)
			controlWidgets[widgetID++] = new Label(PLAYER_CONTROL_NAMES[controlID], xGrid(-4), yGrid(2*controlID + 3));

		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++)
			for (int controlID = 0; controlID < NUM_PLAYER_CONTROLS; controlID++)
				controlWidgets[widgetID++] = new ControlWidget(playerID, controlID, Rectangle.getAbsRectangle(xGrid(4*playerID - 3), yGrid(2*controlID + 2), xGrid(4*playerID + 1), yGrid(2*controlID + 4)));

		controlWidgets[widgetID++] = new Button("Reset Controls", xGrid(-2), yGrid(17)) {
				public void mouseClickIn(int buttonCode, int x, int y) {
					Controls.resetKeys();
				}
			};

		controlWidgets[widgetID++] = new Button("Back", xGrid(2), yGrid(17)) {
				public void mouseClickIn(int buttonCode, int x, int y) {
					Controls.cancelAssign();
					SpaceInvadersX.popMenuScreen();
				}
			};

		return controlWidgets;
	}

	protected static int xGrid(int index) {
		return X_START + index * X_STEP;
	}
	protected static int yGrid(int index) {
		return Y_START + index * Y_STEP;
	}


}
