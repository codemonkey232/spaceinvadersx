package nz.ac.auckland.spaceinvadersx.java;

import playn.java.LWJGLPlatform;

import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;

public class SpaceInvadersXJava {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.appName = "Space Invaders X";
    config.width = SpaceInvadersX.WIDTH;
    config.height = SpaceInvadersX.HEIGHT;
    LWJGLPlatform plat = new LWJGLPlatform(config);
    new SpaceInvadersX(plat);
    plat.start();
  }
}
