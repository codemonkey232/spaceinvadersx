package nz.ac.auckland.spaceinvadersx.java;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.graphics.Toolkit;

import java.lang.reflect.Field;

public class SpaceInvadersXJava {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.appName = "Space Invaders X";
    config.width = SpaceInvadersX.WIDTH;
    config.height = SpaceInvadersX.HEIGHT;
    LWJGLPlatform plat = new LWJGLPlatform(config);
    JavaCanvasCreator cc = new JavaCanvasCreator(plat.graphics());
    new SpaceInvadersX(plat, cc, null);
    plat.start();
  }

  static class JavaCanvasCreator implements Toolkit.CanvasCreator {
    private final Graphics graphics; 
    
    JavaCanvasCreator(Graphics graphics) {
      this.graphics = graphics;
    }

    public Canvas createCanvas(int pixelWidth, int pixelHeight) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(graphics);
        f.set(graphics, Scale.ONE);
        Canvas canvas = graphics.createCanvas(pixelWidth, pixelHeight);
        f.set(graphics, temp);
        return canvas;
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
  }
}
