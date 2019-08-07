package nz.ac.auckland.spaceinvadersx.core;

import playn.core.Key;

public class Controls {

	/* Mouse */
	public static final int NO_BUTTON = 0, LEFT_MOUSE_BUTTON = 1, RIGHT_MOUSE_BUTTON = 2;
	public static final String[] MOUSE_BUTTON_NAMES = {"No Button", "Left Mouse Button", "Right Mouse Button"};

	/* Keyboard */
	public static final int NUM_GAME_CONTROLS = 2;
	public static final int PAUSE = 0, BACK = 1;
	public static final String[] GAME_CONTROL_NAMES = {"Pause", "Back"};
	public static final Key[] GAME_CONTROL_KEYS = {Key.PAUSE, Key.ESCAPE};

	public static final int NUM_PLAYERS = 2;
	public static final int LEFT_HAND_PLAYER = 0, RIGHT_HAND_PLAYER = 1;
	public static final String[] PLAYER_NAMES = {"Left Hand Player", "Right Hand Player"};

	public static final int NUM_MULTIPLAY_OPTIONS = 3;
	public static final int LEFT_PLAYER_ONLY = 0, RIGHT_PLAYER_ONLY = 1, BOTH_PLAYERS = 2;
	public static final String[] MULTIPLAY_OPTIONS = {"Left Player Only", "Right Player Only", "Both Players"};

	public static final int NUM_PLAYER_CONTROLS = 6;
	public static final int UP = 0, DOWN = 1, LEFT = 2, RIGHT = 3, FIRE = 4, SPECIAL = 5;
	public static final String[] PLAYER_CONTROL_NAMES = {"Up", "Down", "Left", "Right", "Fire", "Special"};
	public static final Key[][] DEFAULT_PLAYER_CONTROL_KEYS =
			{	//Up		Down		Left		Right		Fire			Special
			 	{Key.I,		Key.K,		Key.J,		Key.L,		Key.D,			Key.S},			//Left Hand Side
				{Key.UP,	Key.DOWN,	Key.LEFT,	Key.RIGHT,	Key.SHIFT,		Key.SLASH}		//Right Hand Side
			};

	public static Key[][] playerControlKeys = new Key[NUM_PLAYERS][NUM_PLAYER_CONTROLS];
	public static boolean[][] playerControlStates = new boolean[NUM_PLAYERS][NUM_PLAYER_CONTROLS];
	public static boolean[] gameControlStates = new boolean[NUM_GAME_CONTROLS];

	static {
		resetKeys();
	}

	static int assignPlayerID;
	static int assignControlID;
	static boolean waitingForKeyAssign;
	static boolean allKeysDefined;

	public static final Key WAITING_FOR_ASSIGN = Key.RED, UNASSIGNED = Key.BLUE;

	public static void setKeyState(Key key, boolean state) {
		for (int controlID = 0; controlID < NUM_GAME_CONTROLS; controlID++) {
			if (key == GAME_CONTROL_KEYS[controlID]) {
				sendGameControl(controlID, state);
				return;
			}
		}

		if (waitingForKeyAssign && state) {
			assignKey(key);
			return;
		}

		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++) {
			for (int controlID = 0; controlID < NUM_PLAYER_CONTROLS; controlID++) {
				if (key == playerControlKeys[playerID][controlID]) {
					sendPlayerControl(playerID, controlID, state);
					return;
				}
			}
		}
	}

	public static boolean[] getPlayerControlState(int playerID) {
		return playerControlStates[playerID];
	}

	public static void resetKeys() {
		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++) {
			for (int controlID = 0; controlID < NUM_PLAYER_CONTROLS; controlID++) {
				playerControlKeys[playerID][controlID] = DEFAULT_PLAYER_CONTROL_KEYS[playerID][controlID];
			}
		}
		clearPlayerControlState();
		waitingForKeyAssign = false;
		updateAllKeysDefined();
	}



	// Request Key-Assign Methods
	public static void assignNextKey(int assignPlayerID, int assignControlID) {
		Controls.assignPlayerID = assignPlayerID;
		Controls.assignControlID = assignControlID;
		waitingForKeyAssign = true;
	}

	public static void cancelAssign() {
		waitingForKeyAssign = false;
	}

	public static Key getKey(int playerID, int controlID) {
		if (waitingForKeyAssign && playerID == assignPlayerID && controlID == assignControlID)
			return WAITING_FOR_ASSIGN;
		return playerControlKeys[playerID][controlID];
	}

	public static int getAssignPlayerID() 			{	return assignPlayerID;		}
	public static int getAssignControlID() 		{	return assignControlID;		}
	public static boolean getWaitingForKeyAssign() {	return waitingForKeyAssign;	}
	public static boolean getAllKeysDefined() 		{	return allKeysDefined;		}

	// Sending control methods
	static void sendGameControl(int controlID, boolean state) {
		if (state && !gameControlStates[controlID]) {
			if (waitingForKeyAssign && controlID == BACK)
				waitingForKeyAssign = false;
			else SpaceInvadersX.sendGameControl(controlID);
		}
		gameControlStates[controlID] = state;
	}

	static void sendPlayerControl(int playerID, int controlID, boolean state) {
		playerControlStates[playerID][controlID] = state;
		//System.out.println(PLAYER_NAMES[playerID] + " " + PLAYER_CONTROL_NAMES[controlID] + " " + state); /**/
	}

	// Key-Assign Methods
	static void assignKey(Key key) {
		clearKeys(key);
		playerControlKeys[assignPlayerID][assignControlID] = key;
		sendPlayerControl(assignPlayerID, assignControlID, true);
		waitingForKeyAssign = false;
		updateAllKeysDefined();
	}

	static boolean isGameControl(Key key) {
		for (int controlID = 0; controlID < NUM_GAME_CONTROLS; controlID++)
			if (key == GAME_CONTROL_KEYS[controlID])
				return true;
		return false;
	}

	static void clearKeys(Key key) {
		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++)
			for (int controlID = 0; controlID < NUM_PLAYER_CONTROLS; controlID++)
				if (playerControlKeys[playerID][controlID] == key) {
					playerControlKeys[playerID][controlID] = UNASSIGNED;
					sendPlayerControl(playerID, controlID, false);
				}
	}

	static void updateAllKeysDefined() {
		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++)
			for (int controlID = 0; controlID < NUM_PLAYER_CONTROLS; controlID++)
				if (playerControlKeys[playerID][controlID] == UNASSIGNED) {
					allKeysDefined = false;
					return;
				}
		allKeysDefined = true;
	}

	static void clearPlayerControlState() {
		for (int playerID = 0; playerID < NUM_PLAYERS; playerID++)
		java.util.Arrays.fill(playerControlStates[playerID], false);
		//System.out.println("Clear Player Control State");
	}

}
