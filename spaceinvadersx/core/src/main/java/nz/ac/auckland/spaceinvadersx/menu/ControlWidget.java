package nz.ac.auckland.spaceinvadersx.menu;

//import java.awt.event.KeyEvent;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.Controls;
import playn.core.Key;

import static nz.ac.auckland.spaceinvadersx.core.Controls.*;


public class ControlWidget extends Widget {

	public static final Colour PULSE0 = Colour.BLUE, PULSE1 = Colour.CYAN;
	public static Colour assignPulse = PULSE0;

	public static void tickPulse() {
		assignPulse = Colour.gradient(PULSE0, PULSE1, 0.5 + 0.5 * Math.sin(SpaceInvadersX.getProgramTicks() * 0.1));
	}

	protected int playerID, controlID;
	protected Font font;
	protected boolean highlit;

	public ControlWidget(int playerID, int controlID, Rectangle bounds) {
		this(playerID, controlID, bounds, Resources.xenonWhite);
	}

	public ControlWidget(int playerID, int controlID, Rectangle bounds, Font font) {
		super(bounds);
		this.playerID = playerID;
		this.controlID = controlID;
		this.font = font;
		highlit = false;
	}

	public void tickIn(int mouseX, int mouseY) {
		highlit = true;
	}
	public void tickOut() {
		highlit = false;
	}

	public void mouseClickIn(int buttonCode, int x, int y) {
		Controls.assignNextKey(playerID, controlID);
	}

	public void draw(Graphics g) {
		if (highlit) g.drawRect(bounds, PULSE0);
		String text = "";
		Key key = Controls.getKey(playerID, controlID);
		if (key == Controls.UNASSIGNED) {
			text = "Unassigned";
		} else if (key == Controls.WAITING_FOR_ASSIGN) {
			text = "Press a key:";
			g.drawRect(bounds, assignPulse);
		} else {
			text = key.name();
		}
		g.drawString(text, font, bounds.getX(), bounds.getY());
	}

}
