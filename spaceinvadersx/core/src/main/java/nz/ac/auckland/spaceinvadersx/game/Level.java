package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import playn.core.Sound;

public class Level {

	public static final int ALWAYS = 1, TWO_PLAYER = 2;

	public static final int DAGGER_LEFT = 0, DAGGER_RIGHT = 1, CRAB = 2, HAWK = 3, WASP = 4, PHANTOM = 5, BEAST = 6;
	public static final int LIFE = 7, NUKE = 8, SHIELD = 9, RAPID = 10, NEXT_LEVEL = 11;

	protected static int[][] events = new int[4][];
	static {
		events[0] = new int[] {
				100, DAGGER_LEFT, ALWAYS,
				200, DAGGER_RIGHT, ALWAYS,
				250, DAGGER_LEFT, ALWAYS,
				300, DAGGER_RIGHT, ALWAYS,
				400, DAGGER_LEFT, ALWAYS,
				500, DAGGER_RIGHT, ALWAYS,
				534, CRAB, ALWAYS,
				797, DAGGER_RIGHT, ALWAYS,
				847, DAGGER_LEFT, ALWAYS,
				1055, DAGGER_LEFT, ALWAYS,
				1070, DAGGER_RIGHT, ALWAYS,
				1085, CRAB, ALWAYS,
				1255, DAGGER_RIGHT, ALWAYS,
				1274, DAGGER_LEFT, ALWAYS,
				1471, DAGGER_RIGHT, ALWAYS,
				1493, DAGGER_LEFT, ALWAYS,
				1534, CRAB, ALWAYS,
				1578, CRAB, ALWAYS,
				1725, DAGGER_LEFT, ALWAYS,
				1750, DAGGER_RIGHT, ALWAYS,
				1775, DAGGER_LEFT, ALWAYS,
				1804, DAGGER_RIGHT, ALWAYS,
				1833, CRAB, ALWAYS,
				1993, DAGGER_LEFT, ALWAYS,
				2020, DAGGER_RIGHT, ALWAYS,
				2060, CRAB, ALWAYS,
				2097, CRAB, ALWAYS,
				2146, CRAB, ALWAYS,
				2328, DAGGER_RIGHT, ALWAYS,
				2352, DAGGER_LEFT, ALWAYS,
				2370, DAGGER_RIGHT, ALWAYS,
				2391, DAGGER_LEFT, ALWAYS,
				2425, CRAB, ALWAYS,
				2457, CRAB, ALWAYS,
				2498, HAWK, ALWAYS,
				2677, CRAB, ALWAYS,
				2699, CRAB, ALWAYS,
				2750, CRAB, ALWAYS,
				2800, HAWK, ALWAYS,
				2994, DAGGER_LEFT, ALWAYS,
				3020, DAGGER_RIGHT, ALWAYS,
				3061, CRAB, ALWAYS,
				3082, CRAB, ALWAYS,
				3113, HAWK, ALWAYS,
				3275, DAGGER_LEFT, ALWAYS,
				3298, DAGGER_LEFT, ALWAYS,
				3324, DAGGER_RIGHT, ALWAYS,
				3346, DAGGER_RIGHT, ALWAYS,
				3467, CRAB, ALWAYS,
				3489, CRAB, ALWAYS,
				3512, HAWK, ALWAYS,
				3620, NEXT_LEVEL, ALWAYS
			};

		events[1] = new int[] {
				102, DAGGER_LEFT, ALWAYS,
				133, DAGGER_RIGHT, ALWAYS,
				178, DAGGER_LEFT, ALWAYS,
				219, DAGGER_RIGHT, ALWAYS,
				274, CRAB, ALWAYS,
				302, HAWK, ALWAYS,
				342, WASP, ALWAYS,
				542, DAGGER_LEFT, ALWAYS,
				569, DAGGER_RIGHT, ALWAYS,
				654, WASP, ALWAYS,
				777, HAWK, ALWAYS,
				820, CRAB, ALWAYS,
				921, CRAB, ALWAYS,
				956, HAWK, ALWAYS,
				1013, DAGGER_RIGHT, ALWAYS,
				1035, DAGGER_LEFT, ALWAYS,
				1192, DAGGER_RIGHT, ALWAYS,
				1219, DAGGER_LEFT, ALWAYS,
				1298, DAGGER_LEFT, ALWAYS,
				1320, DAGGER_RIGHT, ALWAYS,
				1370, CRAB, ALWAYS,
				1401, HAWK, ALWAYS,
				1426, WASP, ALWAYS,
				1610, CRAB, ALWAYS,
				1634, HAWK, ALWAYS,
				1661, WASP, ALWAYS,
				1680, DAGGER_RIGHT, ALWAYS,
				1680, DAGGER_LEFT, ALWAYS,
				1850, DAGGER_RIGHT, ALWAYS,
				1850, DAGGER_LEFT, ALWAYS,
				1939, WASP, ALWAYS,
				1961, HAWK, ALWAYS,
				1982, CRAB, ALWAYS,
				2170, DAGGER_LEFT, ALWAYS,
				2192, DAGGER_RIGHT, ALWAYS,
				2235, WASP, ALWAYS,
				2254, WASP, ALWAYS,
				2446, DAGGER_LEFT, ALWAYS,
				2468, DAGGER_RIGHT, ALWAYS,
				2501, CRAB, ALWAYS,
				2528, HAWK, ALWAYS,
				2545, WASP, ALWAYS,
				2784, DAGGER_LEFT, ALWAYS,
				2809, DAGGER_RIGHT, ALWAYS,
				2959, DAGGER_RIGHT, ALWAYS,
				2980, DAGGER_LEFT, ALWAYS,
				3033, PHANTOM, ALWAYS,
				3062, PHANTOM, ALWAYS,
				3094, HAWK, ALWAYS,
				3123, HAWK, ALWAYS,
				3240, CRAB, ALWAYS,
				3262, CRAB, ALWAYS,
				3293, HAWK, ALWAYS,
				3319, HAWK, ALWAYS,
				3564, CRAB, ALWAYS,
				3581, HAWK, ALWAYS,
				3595, WASP, ALWAYS,
				3669, NEXT_LEVEL, ALWAYS
			};

		events[2] = new int[] {
				150, PHANTOM, ALWAYS,
				250, PHANTOM, ALWAYS,
				350, PHANTOM, ALWAYS,
				450, PHANTOM, ALWAYS,
				500, DAGGER_LEFT, ALWAYS,
				500, DAGGER_RIGHT, ALWAYS,
				750, PHANTOM, ALWAYS,
				850, PHANTOM, ALWAYS,
				950, PHANTOM, ALWAYS,
				1050, PHANTOM, ALWAYS,
				1127, CRAB, ALWAYS,
				1166, PHANTOM, ALWAYS,
				1358, PHANTOM, ALWAYS,
				1481, PHANTOM, ALWAYS,
				1498, PHANTOM, ALWAYS,
				1516, PHANTOM, ALWAYS,
				1537, PHANTOM, ALWAYS,
				1560, WASP, ALWAYS,
				1686, WASP, ALWAYS,
				1710, HAWK, ALWAYS,
				1794, PHANTOM, ALWAYS,
				1953, DAGGER_RIGHT, ALWAYS,
				1967, DAGGER_LEFT, ALWAYS,
				2170, CRAB, ALWAYS,
				2189, HAWK, ALWAYS,
				2215, WASP, ALWAYS,
				2421, CRAB, ALWAYS,
				2454, HAWK, ALWAYS,
				2526, WASP, ALWAYS,
				2690, PHANTOM, ALWAYS,
				2701, PHANTOM, ALWAYS,
				2715, PHANTOM, ALWAYS,
				2833, PHANTOM, ALWAYS,
				2850, PHANTOM, ALWAYS,
				2865, PHANTOM, ALWAYS,
				2902, PHANTOM, ALWAYS,
				3065, PHANTOM, ALWAYS,
				3083, PHANTOM, ALWAYS,
				3101, PHANTOM, ALWAYS,
				3276, CRAB, ALWAYS,
				3295, HAWK, ALWAYS,
				3314, WASP, ALWAYS,
				3526, PHANTOM, ALWAYS,
				3549, PHANTOM, ALWAYS,
				3568, PHANTOM, ALWAYS,
				3704, PHANTOM, ALWAYS,
				3721, PHANTOM, ALWAYS,
				3737, PHANTOM, ALWAYS,
				3826, CRAB, ALWAYS,
				3848, HAWK, ALWAYS,
				3868, WASP, ALWAYS,
				4050, DAGGER_RIGHT, ALWAYS,
				4050, DAGGER_LEFT, ALWAYS,
				4192, WASP, ALWAYS,
				4205, WASP, ALWAYS,
				4217, WASP, ALWAYS,
				4468, PHANTOM, ALWAYS,
				4486, PHANTOM, ALWAYS,
				4509, PHANTOM, ALWAYS,
				4680, PHANTOM, ALWAYS,
				4695, PHANTOM, ALWAYS,
				4708, PHANTOM, ALWAYS,
				4841, CRAB, ALWAYS,
				4852, CRAB, ALWAYS,
				4864, CRAB, ALWAYS,
				4876, CRAB, ALWAYS,
				5039, PHANTOM, ALWAYS,
				5055, PHANTOM, ALWAYS,
				5110, CRAB, ALWAYS,
				5129, HAWK, ALWAYS,
				5255, HAWK, ALWAYS,
				5267, HAWK, ALWAYS,
				5465, HAWK, ALWAYS,
				5480, HAWK, ALWAYS,
				5500, PHANTOM, ALWAYS,
				5513, PHANTOM, ALWAYS,
				5635, PHANTOM, ALWAYS,
				5647, PHANTOM, ALWAYS,
				5824, CRAB, ALWAYS,
				5841, HAWK, ALWAYS,
				5856, WASP, ALWAYS,
				5879, DAGGER_RIGHT, ALWAYS,
				5897, DAGGER_LEFT, ALWAYS,
				6104, CRAB, ALWAYS,
				6121, HAWK, ALWAYS,
				6140, WASP, ALWAYS,
				6174, PHANTOM, ALWAYS,
				6203, PHANTOM, ALWAYS,
				6393, PHANTOM, ALWAYS,
				6414, PHANTOM, ALWAYS,
				6434, PHANTOM, ALWAYS,
				6456, PHANTOM, ALWAYS,
				6479, PHANTOM, ALWAYS,
				6500, PHANTOM, ALWAYS,
				6523, PHANTOM, ALWAYS,
				6546, PHANTOM, ALWAYS,
				6651, CRAB, ALWAYS,
				6675, HAWK, ALWAYS,
				6711, WASP, ALWAYS,
				6745, WASP, ALWAYS,
				6933, PHANTOM, ALWAYS,
				6950, PHANTOM, ALWAYS,
				6977, HAWK, ALWAYS,
				6987, HAWK, ALWAYS,
				7004, WASP, ALWAYS,
				7192, NUKE, ALWAYS,
				7209, NUKE, ALWAYS,
				7227, NUKE, ALWAYS,
				7250, NUKE, ALWAYS,
				7299, NEXT_LEVEL, ALWAYS
			};
		events[3] = new int[] { 200, BEAST, ALWAYS };
	}

	public static final double[] DAGGER_NASTINESS = new double[]{ 0.1, 0.5, 0.5, 0.5};

	protected static int numPlayers = 1;
	protected static int levelTicker = 0;
	protected static int levelNumber = -1;
	protected static int eventIndex = 0;

	public static void startGame(int numPlayers) {
		Level.numPlayers = numPlayers;
		levelNumber = -1;
		nextLevel();
	}

	public static void nextLevel() {
		levelNumber++;
		if (levelNumber < 0 || levelNumber >= 4) return;
		levelTicker = 0;
		eventIndex = 0;

		Sound nextTrack = null;
		switch(levelNumber) {
			case 0: nextTrack = Resources.track1; break;
			case 1: nextTrack = Resources.track2; break;
			case 2: nextTrack = Resources.track3; break;
			case 3: nextTrack = Resources.track4; break;
			default:
		}
		SpaceInvadersX.fadeToTrack(nextTrack);
	}


	public static void tickLevel() {
		if (levelNumber < 0 || levelNumber >= 4) return;
		levelTicker++;

		while (eventIndex * 3 < events[levelNumber].length && levelTicker >= events[levelNumber][eventIndex * 3]) {
			if (events[levelNumber][eventIndex * 3 + 2] > numPlayers) { eventIndex++; continue; }
			doEvent(events[levelNumber][eventIndex++ * 3 + 1]);
		}

		if (levelNumber == 2 && levelTicker % 100 == 0) Cloud.spawn();

	}

	public static final String[] NAMES = new String[] {
			"DAGGER_LEFT", "DAGGER_RIGHT", "CRAB", "HAWK", "WASP", "PHANTOM", "BEAST",
			"LIFE", "NUKE", "SHIELD", "RAPID", "NEXT_LEVEL"
		};

	protected static void doEvent(int eventType) {
		switch (eventType) {
			case DAGGER_LEFT: Dagger.spawnSwarm(5, Dagger.LEFT, DAGGER_NASTINESS[levelNumber]); break;//todo
			case DAGGER_RIGHT: Dagger.spawnSwarm(5, Dagger.RIGHT, DAGGER_NASTINESS[levelNumber]); break;
			case CRAB: Crab.spawn(); break;
			case HAWK: Hawk.spawn(); break;
			case WASP: Wasp.spawn(); break;
			case PHANTOM: Phantom.spawn(); break;
			case BEAST: Beast.spawn(); break;
			case LIFE: LifePickup.spawn(); break;
			case NUKE: NukePickup.spawn(); break;
			case SHIELD: ShieldPickup.spawn(); break;
			case RAPID: RapidPickup.spawn(); break;
			case NEXT_LEVEL: nextLevel(); break;
			default:
		}
	}

}
