package nz.ac.auckland.spaceinvadersx.core;

import nz.ac.auckland.spaceinvadersx.graphics.Graphics;
import nz.ac.auckland.spaceinvadersx.graphics.Rectangle;
import nz.ac.auckland.spaceinvadersx.graphics.Toolkit;
import nz.ac.auckland.spaceinvadersx.menu.MenuScreen;
import nz.ac.auckland.spaceinvadersx.menu.Menus;
import nz.ac.auckland.spaceinvadersx.menu.Background;
import nz.ac.auckland.spaceinvadersx.game.Game;

import playn.core.Platform;
import playn.core.Surface;
import playn.scene.SceneGame;
import playn.core.Clock;
import playn.core.Sound;
import playn.core.Mouse;
import playn.core.Keyboard;
import playn.core.Key;
import react.Slot;

import java.util.LinkedList;

public class SpaceInvadersX extends SceneGame {

  public static final String TITLE = "Space Invaders X";
  public static final int WIDTH = 800, HEIGHT = 600, TICK_MS = 25, FRAME_TICKS = 20;
  public static final Rectangle SCREEN = new Rectangle(WIDTH, HEIGHT);
  public static final Graphics graphics = new Graphics();
  public static LinkedList<MenuScreen> menuStack = new LinkedList<MenuScreen>();
  public static MenuScreen currentScreen;

  public static FullScreener fullScreener;

  private static final int START = 0, FIRST_LOADED = 1, ALL_LOADED = 2;
  private static int state = START;

  private static int ticks;
  private int mouseX, mouseY;

  public interface FullScreener {
    void toggleFullScreen();
  }

  public static void toggleFullScreen() {
    if (fullScreener != null) fullScreener.toggleFullScreen();
  }

  public SpaceInvadersX(Platform plat, Toolkit.CanvasCreator canvasCreator,
    FullScreener fullScreener) {
    this(plat);
    Toolkit.canvasCreator = canvasCreator;
    this.fullScreener = fullScreener;
  }

  public SpaceInvadersX (Platform plat) {
    super(plat, 33); // update our "simulation" 33ms (30 times per second)

    Resources.platform = Toolkit.platform = plat;

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(new Slot<Mouse.Event>() {
      public void onEmit(Mouse.Event e) {
        mouseX = ((int) e.x) - WIDTH/2;
	mouseY = ((int) e.y) - HEIGHT/2;
	if (e instanceof Mouse.ButtonEvent) {
          if (currentScreen != null && ((Mouse.ButtonEvent)e).down) {
            currentScreen.mouseClick(0, mouseX, mouseY);
          }
	}
      }
    });

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(new Slot<Keyboard.Event>() {
      public void onEmit(Keyboard.Event e) {
	if (e instanceof Keyboard.TypedEvent) {
          if (currentScreen != null) {
            currentScreen.typeChar(((Keyboard.TypedEvent)e).typedChar);
          }
	} else if (e instanceof Keyboard.KeyEvent) {
	  Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
          if (currentScreen != null && ke.down) {
            if (ke.key == Key.ENTER) currentScreen.typeChar('\n');
            if (ke.key == Key.BACKSPACE || ke.key == Key.DELETE || ke.key == Key.BACK) currentScreen.typeChar('\010');
          }
          Controls.setKeyState(ke.key, ke.down);
        }
      }
    });

    Resources.loadFirst();

  }

  public static void sendGameControl(int controlId) {
    if (currentScreen != null) {
      currentScreen.controlPressed(controlId);
    }
  }

  public void update(Clock clock) {
    finishStartup();

    Game.tick();
    if (currentScreen != null) {
      currentScreen.tick(mouseX, mouseY);
    }
    ticks++;
  }

  public void paintScene() {
    viewSurf.saveTx();
    viewSurf.translate(WIDTH / 2, HEIGHT / 2);
    viewSurf.begin();
    viewSurf.clear(0.0f, 0.0f, 0.0f, 1.0f);
    try {
      graphics.setSurface(viewSurf);
      Game.draw(graphics);
      if (currentScreen != null) {
        currentScreen.draw(graphics);
      }
    } finally {
      viewSurf.end();
      viewSurf.restoreTx();
    }
  }

  public static int getProgramTicks() {
    return ticks;
  }

  public static void setMenuScreen(MenuScreen nextScreen) {
    menuStack.clear();
    pushMenuScreen(nextScreen);
  }

  public static void pushMenuScreen(MenuScreen nextScreen) {
    menuStack.addFirst(nextScreen);
    fadeWaitScreen();
  }

  public static void queueMenuScreen(MenuScreen lastScreen) {
    menuStack.addLast(lastScreen);
  }

  public static boolean popMenuScreen() {
    if (menuStack.size() <= 1) return false;
    menuStack.removeFirst();
    fadeWaitScreen();
    return true;
  }

  public static void fadeWaitScreen() {
    currentScreen = menuStack.getFirst();
    currentScreen.prefade();
    Background.fadeTo(currentScreen.backgroundType());
    if (!Background.fadeFinished()) {
      currentScreen = Menus.fadeWaitScreen;
    } else {
      currentScreen.enter();
    }
  }

  public static void endFadeWait() {
    currentScreen = menuStack.getFirst();
    currentScreen.enter();
  }

  private void finishStartup() {
    if (state == START) {
      if (Toolkit.isImagesLoaded()) {
        Resources.loadFirst();
        state = FIRST_LOADED;
	pushMenuScreen(Menus.resources);
        Resources.loadStartUp();
      }
    } else if (state == FIRST_LOADED) {
      if (Resources.isAllLoaded()) {
        Resources.loadStartUp();
        Menus.loadStartUp();
        setMenuScreen(Menus.introScreen);
        state = ALL_LOADED;
      }
    }
  }

  public static Sound currentTrack;

  public static void fadeToTrack(Sound track) {
    if (currentTrack != null) {
      currentTrack.stop();
    }
    currentTrack = track;
    if (currentTrack != null) {
      currentTrack.play();
    }
  }
}
