package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.graphics.Graphics;
import nz.ac.auckland.spaceinvadersx.core.Controls;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class MenuScreen {

	protected Widget[] widgets;

	public MenuScreen() {
		this (new Widget[0]);
	}

	public MenuScreen(Widget[] widgets) {
		this.widgets = widgets;
	}

	public void prefade() {}

	public void enter() {
		enterWidgets();
	}

	public void enterWidgets() {
		for (Widget w : widgets)
			w.enter();
	}

	public void tick(int mouseX, int mouseY) {
		tickWidgets(mouseX, mouseY);
	}

	public void tickWidgets(int mouseX, int mouseY) {
		for (Widget w : widgets)
			w.tick(mouseX, mouseY);
	}

	public void draw(Graphics g) {
		LogoBackground.draw(g);
		drawWidgets(g);
	}

	public void drawWidgets(Graphics g) {
		for (Widget w : widgets)
			w.draw(g);
	}

	public void mouseClick(int buttonCode, int x, int y) {
		for (Widget w : widgets)
			w.mouseClick(buttonCode, x, y);
	}

	public void typeChar(char character) {}

	public void controlPressed(int controlID) {
		switch(controlID) {
			case Controls.PAUSE: pause(); break;
			case Controls.BACK: back(); break;
			default:
		}
	}

	public int backgroundType() {
		return Background.STARS;
	}

	protected void pause() {}
	protected void back() {
		SpaceInvadersX.popMenuScreen();
	}

}
