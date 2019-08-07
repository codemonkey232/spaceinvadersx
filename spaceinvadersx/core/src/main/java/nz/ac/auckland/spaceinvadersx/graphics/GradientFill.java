/*
 * GradientFill class - stores a gradient fill
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class GradientFill {

  public static final int HEIGHT = 16;

  public static Image create(playn.core.Platform platform, Colour zero, Colour one, int width, boolean symmetric) {
    int[] pixels = new int[width * HEIGHT];
    playn.core.Canvas c = Toolkit.createCanvas(width, HEIGHT);
    for (int i = 0; i < width; i++) {
      double scale = (1.0 * i) / (width - 1);
      if (symmetric) {
        scale *= 2;
        if (scale > 1) {
          scale = 2 - scale;
        }
      }
      int color = gradient(zero, one, scale);
      for (int h = 0; h < HEIGHT; h++) {
        pixels[h * width + i] = color;
      }
    }
    c.image.setRgb(0, 0, width, HEIGHT, pixels, 0, width);
    c.image.texture().reference();
    return new Image(c.image, c.image.texture(), width, HEIGHT);
  }

  public static int gradient(Colour zero, Colour one, double scale) {
    scale = Math.max(Math.min(1.0, scale), 0.0);
    int a = 0xff & ((int) (scale * one.getAlpha() + (1 - scale) * zero.getAlpha()));
    int r = 0xff & ((int) (scale * one.getRed() + (1 - scale) * zero.getRed()));
    int g = 0xff & ((int) (scale * one.getGreen() + (1 - scale) * zero.getGreen()));
    int b = 0xff & ((int) (scale * one.getBlue() + (1 - scale) * zero.getBlue()));
    return (a << 24) | (r << 16) | (g << 8) | b;
  }
}
