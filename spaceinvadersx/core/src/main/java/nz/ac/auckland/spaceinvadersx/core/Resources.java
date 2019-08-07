package nz.ac.auckland.spaceinvadersx.core;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.menu.Background;
import nz.ac.auckland.spaceinvadersx.menu.Menus;
import nz.ac.auckland.spaceinvadersx.menu.MenuScreen;

import playn.core.Sound;

import static nz.ac.auckland.spaceinvadersx.graphics.Toolkit.*;

import java.util.Map;
import java.util.HashMap;

public class Resources extends MenuScreen {

	public static final String IMAGES_DIR = "images/";
	public static final String SOUND_DIR = "sounds/";
	public static final String MUSIC_DIR = "music/";

	public static final int SOUNDS_COUNT = 10, MUSIC_COUNT = 7;
	public static Image alienMissile, bubble, corsairTurret, nebula, shockWave, stars, twinkle;
	public static Image crab, dagger, hawk, phantom, wasp, beast;
	public static Image crabS, daggerS, hawkS, phantomS, waspS, beastS;
	public static Image xLogo, xMini, xPulse, xSilver, siRed, siYellow, arrowLeft, arrowRight, heartHUD, nukeHUD, rapidHUD;
	public static Image corsairS, destroyerS, xWingS;
	public static ColourableImage corsairC, destroyerC, xWingC, xWingLaserC, xWingMissileC;

	public static Tiles sixIconAnim, alienExplosion, clouds, flakExplosion, orangeExplosion;
	public static Tiles missileFlame, missileExplosion, shipExplosion, smokeEffect;

	public static Tiles heart, nuke, shield, rapid;
	public static ColourableTiles alienPlasmaC, corsairBombC, corsairBulletC, laserEffectC, plasmaEffectC;
	public static Tiles greenAlienPlasma, greenPlasmaEffect, redAlienPlasma, redPlasmaEffect, cyanAlienPlasma, cyanPlasmaEffect;

	public static Font xenonWhite, xenonGrey;
	public static ColourableFont xenonC;


	public static Sound armourHit, beep, bombLaunch, collect, deathRay, deepExplosion, explosion, missileLaunch, plasma, pop;


	public static Sound titleTrack, gameOverTrack, gameWonTrack, track1, track2, track3, track4;

	private static Sound NULL_SOUND = new Sound();

	private static final Map<String, playn.core.Sound> soundMap = new HashMap<String, playn.core.Sound>();
	private static final Map<String, playn.core.Sound> musicMap = new HashMap<String, playn.core.Sound>();

	public static playn.core.Platform platform;

	public static void loadFirst() {
		xenonC = loadImage("XenonFont.png").getColourableImage(ALL_RECOLOUR).getColourableTiles(16, 16).getColourableFont(' ');
		xenonWhite = xenonC.recolour(ORIGINAL);
		xenonGrey = xenonC.recolour(Colour.GREY);
		Menus.resources = new Resources();
	}

	public static void loadStartUp() {

		sixIconAnim = loadImage("Icon.png").getTiles(16, 16);

		//Images
		alienMissile = loadImage("AlienMissile.png");
		bubble = loadImage("Bubble.png");
		corsairTurret = loadImage("CorsairTurret.png");
		nebula = loadImage("Nebula.png");
		shockWave = loadImage("ShockWave.png");
		stars = loadImage("Stars.png");
		twinkle = loadImage("Twinkle.png");

		crab = loadImage("Crab.png").flip();
		dagger = loadImage("Dagger.png");
		hawk = loadImage("Hawk.png").flip();
		phantom = loadImage("Phantom.png").flip();
		wasp = loadImage("Wasp.png");
		beast = loadImage("Beast.png").flip();
		crabS = crab.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.WHITE);
		daggerS = dagger.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.WHITE);
		phantomS = phantom.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.WHITE);
		hawkS = hawk.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.WHITE);
		waspS = wasp.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.WHITE);
		beastS = beast.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.WHITE);

		xLogo = loadImage("XLogo.png");
		xMini = xLogo.scale(0.5, 0.5);
		xPulse = xMini.getColourableImage(SHADOW_RECOLOUR).recolour(Colour.YELLOW);
		xSilver = loadImage("XSilver.png");
		siRed = loadImage("SpaceInvadersLogo.png");
		siYellow = siRed.getColourableImage(RED_RECOLOUR).recolour(Colour.YELLOW);
		Tiles arrows = loadImage("SelectArrows.png").getTiles(16, 16);
		if (arrows.length() > 0) {		
			arrowRight = arrows.getTile(0);
			arrowLeft = arrows.getTile(1);
		}
		Tiles HUD = loadImage("HUD.png").getTiles(16, 16);
		if (HUD.length() > 0) {
			heartHUD = HUD.getTile(0);
			nukeHUD = HUD.getTile(1);
			rapidHUD = HUD.getTile(2);
		}


		//Recolourable Images
		corsairC = loadImage("Corsair.png").getColourableImage(GREEN_RECOLOUR);
		corsairS = corsairC.recolour(Colour.WHITE, SHADOW_RECOLOUR);
		destroyerC = loadImage("Destroyer.png").getColourableImage(GREEN_RECOLOUR);
		destroyerS = destroyerC.recolour(Colour.WHITE, SHADOW_RECOLOUR);
		xWingC = loadImage("XWing.png").getColourableImage(RED_RECOLOUR);
		xWingS = xWingC.recolour(Colour.WHITE, SHADOW_RECOLOUR);
		xWingLaserC = loadImage("XWingLaser.png").getColourableImage(RED_RECOLOUR);
		xWingMissileC = loadImage("XWingMissile.png").getColourableImage(RED_RECOLOUR);


		//Tiles
		alienExplosion = loadImage("AlienExplosion.png").getTiles(128, 128);
		clouds = loadImage("Clouds.png").scale(1024, 1024).getTiles(512, 512);
		flakExplosion = loadImage("FlakExplosion.png").getTiles(128, 128);
		orangeExplosion = loadImage("OrangeExplosion.png").getTiles(64, 64);
		missileExplosion = loadImage("MissileExplosion.png").getTiles(64, 64);
		missileFlame = loadImage("MissileFlame.png").getTiles(24, 24);
		shipExplosion = loadImage("ShipExplosion.png").getTiles(128, 128);
		smokeEffect = loadImage("SmokeEffect.png").getTiles(32, 32);
		heart = loadImage("Heart.png").getTiles(32, 32);
		nuke = loadImage("Nuke.png").getTiles(32, 32);
		shield = loadImage("Shield.png").getTiles(32, 32);
		rapid = loadImage("Rapid.png").getTiles(32, 32);

		//Recolourable Tiles
		corsairBombC = loadImage("CorsairBomb.png").getColourableImage(RED_RECOLOUR).getColourableTiles(32, 24);
		corsairBulletC = loadImage("CorsairBullet.png").getColourableImage(GREEN_RECOLOUR).getColourableTiles(12, 24);
		laserEffectC = loadImage("LaserEffect.png").getColourableImage(GREEN_RECOLOUR).getColourableTiles(32, 32);

		Colour alienCyan = new Colour(0x00CCFF);
		alienPlasmaC = loadImage("AlienPlasma.png").getColourableImage(RED_RECOLOUR).getColourableTiles(32, 32);
		greenAlienPlasma = alienPlasmaC.recolour(Colour.GREEN);
		redAlienPlasma = alienPlasmaC.recolour(ORIGINAL);
		cyanAlienPlasma = alienPlasmaC.recolour(alienCyan);

		plasmaEffectC = loadImage("PlasmaEffect.png").getColourableImage(RED_RECOLOUR).getColourableTiles(32, 32);
		greenPlasmaEffect = plasmaEffectC.recolour(Colour.GREEN);
		redPlasmaEffect = plasmaEffectC.recolour(ORIGINAL);
		cyanPlasmaEffect = plasmaEffectC.recolour(alienCyan);

		//Sounds
		armourHit = loadSound("ArmourHit");
		beep = loadSound("Beep");  // TODO(olsen):
		bombLaunch = loadSound("BombLaunch");
		collect = loadSound("Collect");
		deathRay = loadSound("DeathRay");
		deepExplosion = loadSound("DeepExplosion");
		explosion = loadSound("Explosion");
		missileLaunch = loadSound("MissileLaunch");
		plasma = loadSound("Plasma");
		pop = loadSound("Pop");

		//Music
		titleTrack = loadMusic("SWIV_Decimation");
		gameOverTrack = loadMusic("SD_GameOver");
		gameWonTrack = loadMusic("SWIV_Mellow");
		track1 = loadMusic("Stardust");
		track2 = loadMusic("Blade_Raver");
		track3 = loadMusic("Assassin");
		track4 = loadMusic("Xpedition");
	}

	public Resources() {
		super();
	}

	public void draw(Graphics g) {
		g.fillRect(SpaceInvadersX.SCREEN, Colour.BLACK);
		g.drawString("Loading Images: " + Toolkit.loaded() + "/" + Toolkit.loading(), xenonWhite, 0, -50);
		g.drawString("Loading Sounds: " + soundsLoaded() + "/" + soundMap.size(), xenonWhite, 0, 0);
		g.drawString("Loading Music: " + musicLoaded() + "/" + musicMap.size(), xenonWhite, 0, 50);
	}

	public void tick(int mouseX, int mouseY) {
	}

	public int backgroundType() {
		return Background.BLACK;
	}

	// Loading Resources
	public static Image loadImage(String fileName) {
		Image image = Image.loadImage(IMAGES_DIR + fileName);
		return image;
	}

	public static playn.core.Sound loadSound(String fileName) {
		fileName = SOUND_DIR + fileName;
		if (!soundMap.containsKey(fileName)) {
			soundMap.put(fileName, platform.assets().getSound(fileName));
		}
		if (soundMap.get(fileName).isLoaded()) {
			return soundMap.get(fileName);
		}
		return NULL_SOUND;
	}

	public static playn.core.Sound loadMusic(String fileName) {
		fileName = MUSIC_DIR + fileName;
		if (!musicMap.containsKey(fileName)) {
			musicMap.put(fileName, platform.assets().getMusic(fileName));
		}
		if (musicMap.get(fileName).isLoaded()) {
			Sound music = musicMap.get(fileName);
			return music;
		}
		return NULL_SOUND;
	}

	public static int soundsLoaded() {
		int loaded = 0;
		for (playn.core.Sound s : soundMap.values()) {
			if (s.isLoaded()) {
				loaded++;
			}
		}
		return loaded;
	}

	public static int musicLoaded() {
		int loaded = 0;
		for (playn.core.Sound s : musicMap.values()) {
			if (s.isLoaded()) {
				loaded++;
			}
		}
		return loaded;
	}

	public static boolean isAllLoaded() {
		return Toolkit.isImagesLoaded()
			&& (soundsLoaded() == soundMap.size()) 
                        && (musicLoaded() == musicMap.size());
	}

	private static double soundVolume = 1.0;
	private static boolean soundMuted = false;
	public static void setSoundVolume(double soundVolume ) {
		Resources.soundVolume = soundVolume;
		updateSounds();
	}
	public static void setSoundMuted(boolean soundMuted) {
		Resources.soundMuted = soundMuted;
		updateSounds();
	}
	public static double getSoundVolume() { return soundVolume; }
        public static boolean getSoundMuted() { return soundMuted; }
	private static void updateSounds() {
		float vol = soundMuted ? 0.0f : (float) soundVolume;
		for (playn.core.Sound s : soundMap.values()) {
			s.setVolume(vol);
		}
	}

	private static double musicVolume = 1.0;
	private static boolean musicMuted = false;
	public static void setMusicVolume(double musicVolume ) {
		Resources.musicVolume = musicVolume;
		updateMusic();
	}
	public static void setMusicMuted(boolean musicMuted) {
		Resources.musicMuted = musicMuted;
		updateMusic();
		if (SpaceInvadersX.currentTrack != null) {
			if (musicMuted) {
				SpaceInvadersX.currentTrack.stop();
			} else {
				SpaceInvadersX.currentTrack.play();
			}
		}
	}
	public static double getMusicVolume() { return musicVolume; }
        public static boolean getMusicMuted() { return musicMuted; }
	private static void updateMusic() {
		float vol = musicMuted ? 0.0f : (float) musicVolume;
		for (playn.core.Sound s : musicMap.values()) {
			s.setVolume(vol);
		}
	}
}
