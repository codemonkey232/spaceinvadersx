package nz.ac.auckland.spaceinvadersx.menu;

import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class OptionMenu extends MenuScreen {

	public static boolean musicMuted = false;

	public OptionMenu() {
		super(new Widget[] {
				new Link("Controls", 0, -30, Menus.controlMenu),
				new Button("Toggle Full-Screen", 0, 20) {
					public void mouseClickIn(int buttonCode, int x, int y) { SpaceInvadersX.toggleFullScreen(); }
				},
				new BoolSelecter("Sound:", 0, 70) {
					public void readBool() { bool = !Resources.getSoundMuted(); }
					public void applyBool() { Resources.setSoundMuted(!bool); }
				},
				new Slider("Sound Volume:", 0, 104, 200, 10) {
					public void readValue() { value = (int)(Resources.getSoundVolume() * 200);  }
					public void applyValue() {
						Resources.setSoundVolume(value / 200.0);
						Resources.collect.play();
					}
				},
				new BoolSelecter("Music:", 0, 164) {
					public void readBool() { bool = !Resources.getMusicMuted(); }
					public void applyBool() { Resources.setMusicMuted(!bool); }
				},
				new Slider("Music Volume:", 0, 200, 200, 10) {
					public void readValue() { value = (int)(Resources.getMusicVolume() * 200); }
					public void applyValue() { Resources.setMusicVolume(value / 200.0); }
				},
				new Link("Back", 0, 250, null)
			});
	}

}
