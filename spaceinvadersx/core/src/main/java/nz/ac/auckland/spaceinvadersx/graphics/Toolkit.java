/*
 * Toolkit class - contains useful methods for loading and converting Images
 * Converts Images to Tiles to Fonts, or to ColourableImages to ColourableTiles to ColourableFonts
 * Recolours anything colourable
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

import playn.core.Platform;
import playn.core.Canvas;

import java.util.Map;
import java.util.HashMap;


public class Toolkit {
	public static final int ALL_RECOLOUR = 7, RED_RECOLOUR = 4, GREEN_RECOLOUR = 2, BLUE_RECOLOUR = 1, SHADOW_RECOLOUR = 0, DEFAULT_RECOLOUR = -1;

	public static final int NO_FLIP = 0, HORIZONTAL = 1, VERTICAL = 2, BOTH_AXES = 3;

	protected static final int RED_PRIMARY = 0, GREEN_PRIMARY = 1, BLUE_PRIMARY = 2;

	public static final Colour ORIGINAL = null;

	public static Platform platform = null;

	private static final Map<String, playn.core.Image> map = new HashMap<String, playn.core.Image>();

	private static final Image NULL_IMAGE = new Image(null, 0, 0);
	private static final ColourableImage NULL_CI = new ColourableImage(NULL_IMAGE, 0);
	private static final Tiles NULL_TILES = new Tiles(new Image[0]);
	private static final ColourableTiles NULL_CT = new ColourableTiles(NULL_CI, 0, 0);
	private static final Font NULL_FONT = new Font(NULL_TILES, ' ');
	private static final ColourableFont NULL_CF = new ColourableFont(NULL_CT, ' ');

	public interface CanvasCreator {
		Canvas createCanvas(int pixelWidth, int pixelHeight);
        }

	public static CanvasCreator canvasCreator;

	public static Canvas createCanvas(int pixelWidth, int pixelHeight) {
		if (canvasCreator != null) return canvasCreator.createCanvas(pixelWidth, pixelHeight);
		return platform.graphics().createCanvas(pixelWidth, pixelHeight);
	}

	// Creating Images, Tiles and Fonts
	public static Image loadImage(String fileName) {
		if (!map.containsKey(fileName)) {
			map.put(fileName, platform.assets().getImage(fileName));
		}
		if (map.get(fileName).isLoaded()) {
			playn.core.Texture texture = map.get(fileName).texture();
			texture.reference();
			return new Image(map.get(fileName), texture, (int) texture.width(), (int) texture.height());
		}
		return NULL_IMAGE;
	}

	public static Image flipImage(Image im) {
		if (im == NULL_IMAGE) return NULL_IMAGE;
		playn.core.Canvas c = createCanvas(im.getWidth(), im.getHeight());
                c.rotate((float)Math.PI);
                c.draw(im.getPlaynImage(), -im.getWidth(), -im.getHeight());
                c.image.texture().reference();
                return new Image(c.image, c.image.texture(), im.getWidth(), im.getHeight());
	}

	public static Tiles getTiles(Image image, int tileWidth, int tileHeight) {
		if (image == NULL_IMAGE) return NULL_TILES;
		int columns = image.getWidth() / tileWidth;
		int numTiles = columns * (image.getHeight() / tileHeight);
		if (numTiles == 0)
			throw new IllegalArgumentException("Image smaller than tile: (" + image.getWidth() + ", " + image.getHeight() + ") / (" + tileWidth + ", " + tileHeight + ")");
		Image[] tiles = new Image[numTiles];
                playn.core.Texture texture = (playn.core.Texture) image.getTile();
		for (int tileID = 0; tileID < numTiles; tileID++) {
			playn.core.Tile tile = texture.tile(tileWidth * (tileID % columns), tileHeight * (tileID / columns), tileWidth, tileHeight);
			tiles[tileID] = new Image(tile, tileWidth, tileHeight);
                }
		return new Tiles(tiles, columns);
	}

	public static Font getFont(Tiles tiles, char firstChar) {
		if (tiles == NULL_TILES) return NULL_FONT;
		return new Font(tiles, firstChar);
	}

	// Creating Colourable-Images, -Tiles and -Fonts
	public static ColourableImage getColourableImage(Image image, int recolourType) {
		if (image == NULL_IMAGE) return NULL_CI;
		return new ColourableImage(image, recolourType);
	}

	public static ColourableTiles getColourableTiles(ColourableImage colourableImage, int tileWidth, int tileHeight) {
		if (colourableImage == NULL_CI) return NULL_CT;
		return new ColourableTiles(colourableImage, tileWidth, tileHeight);
	}

	public static ColourableFont getColourableFont(ColourableTiles colourableTiles, char firstChar) {
		if (colourableTiles == NULL_CT) return NULL_CF;
		return new ColourableFont(colourableTiles, firstChar);
	}

	// Recolouring Images, Tiles and Fonts
	public static Image recolourImage(ColourableImage colourableImage, Colour newColour) {
		if (colourableImage == NULL_CI) return NULL_IMAGE;
		return recolourImage(colourableImage, newColour, DEFAULT_RECOLOUR);
	}

	public static Image recolourImage(ColourableImage colourableImage, Colour newColour, int recolourType) {
		if (colourableImage == NULL_CI) return NULL_IMAGE;
		Image image = colourableImage.getImage();
		if (newColour == null)
			return image;
		if (recolourType == DEFAULT_RECOLOUR)
			recolourType = colourableImage.getRecolourType();
		switch(recolourType) {
			case ALL_RECOLOUR: return recolourImage(image, new RecolourAllFilter(newColour));
			case RED_RECOLOUR: return recolourImage(image, new RecolourPrimaryFilter(newColour, RED_PRIMARY));
			case GREEN_RECOLOUR: return recolourImage(image, new RecolourPrimaryFilter(newColour, GREEN_PRIMARY));
			case BLUE_RECOLOUR: return recolourImage(image, new RecolourPrimaryFilter(newColour, BLUE_PRIMARY));
			case SHADOW_RECOLOUR: return recolourImage(image, new ShadowFilter(newColour));
		}
		return image;
	}

        public static Image recolourImage(Image im, Filter filter) {
		if (im == NULL_IMAGE) return NULL_IMAGE;
		int[] pixels = new int[im.getWidth() * im.getHeight()];
		im.getPlaynImage().getRgb(0, 0, im.getWidth(), im.getHeight(), pixels, 0, im.getWidth());
                for (int i = 0; i < pixels.length; i++) {
			pixels[i] = filter.filter(pixels[i]);
		}
		playn.core.Canvas c = createCanvas(im.getWidth(), im.getHeight());
		c.image.setRgb(0, 0, im.getWidth(), im.getHeight(), pixels, 0, im.getWidth());
                c.image.texture().reference();
                return new Image(c.image, c.image.texture(), im.getWidth(), im.getHeight());
	}
		

	public static Tiles recolourTiles(ColourableTiles colourableTiles, Colour newColour) {
		return recolourTiles(colourableTiles, newColour, DEFAULT_RECOLOUR);
	}

	public static Tiles recolourTiles(ColourableTiles colourableTiles, Colour newColour, int recolourType) {
		return getTiles(recolourImage(colourableTiles.getColourableImage(), newColour, recolourType), colourableTiles.getTileWidth(), colourableTiles.getTileHeight());
	}

	public static Font recolourFont(ColourableFont colourableFont, Colour newColour) {
		return recolourFont(colourableFont, newColour, DEFAULT_RECOLOUR);
	}

	public static Font recolourFont(ColourableFont colourableFont, Colour newColour, int recolourType) {
		return getFont(recolourTiles(colourableFont.getColourableTiles(), newColour, recolourType), colourableFont.getFirstChar());
	}

	// Scaling Images
	public static Image scaleImage(Image image, double scaleX, double scaleY) {
		return scaleImage(image, (int)(image.getWidth() * scaleX + 0.5), (int)(image.getHeight() * scaleY + 0.5));
	}

	public static Image scaleImage(Image image, int width, int height) {
		if (image == NULL_IMAGE) return NULL_IMAGE;
		Canvas c = createCanvas(width, height);
		c.draw(image.getPlaynImage(), 0, 0, width, height);
                c.image.texture().reference();
                return new Image(c.image, c.image.texture(), width, height);
	}

	public static Image createGradientFill(Colour zero, Colour one, int width, boolean symmetric) {
        	return GradientFill.create(platform, zero, one, width, symmetric);
        }

	public static boolean isImagesLoaded() {
		if (map.size() == 0) {
			return false;
		}
		for (playn.core.Image image : map.values()) {
			if (!image.isLoaded()) {
				return false;
			}
		}
		return true;
	}

	public static int loaded() {
		int loaded = 0;
		for (playn.core.Image image : map.values()) {
			if (image.isLoaded()) {
				loaded++;
			}
		}
		return loaded;
	}

	public static int loading() {
		return map.size();
	}

	static interface Filter {
		public int filter(int argb);
	}


	static class RecolourAllFilter implements Filter {
		int newRed, newGreen, newBlue;

		public RecolourAllFilter(Colour newColour) {
			newRed = newColour.getRed();
			newGreen = newColour.getGreen();
			newBlue = newColour.getBlue();
		}

		public int filter(int rgb) {
			int rgbSum = (rgb & 0xff0000) >> 16;
			rgbSum += (rgb & 0xff00) >> 8;
			rgbSum += rgb & 0xff;
			float brightness = rgbSum / 255.0f / 3.0f;
			int red = (int)(newRed * brightness);
			int green = (int)(newGreen * brightness);
			int blue = (int)(newBlue * brightness);
			return ((rgb & 0xff000000) | (red << 16) | (green << 8) | (blue));
		}
	}

	static class RecolourPrimaryFilter implements Filter {
		int newRed, newGreen, newBlue;
		int p, a, b;
		int[] primaries = new int[3];

		public RecolourPrimaryFilter(Colour newColour, int primary) {
			newRed = newColour.getRed();
			newGreen = newColour.getGreen();
			newBlue = newColour.getBlue();
			this.p = primary;
			switch(p) {
				case RED_PRIMARY: a = 1; b = 2; break;
				case GREEN_PRIMARY: a = 0; b = 2; break;
				case BLUE_PRIMARY: a = 0; b = 1; break;
			}
		}

		public int filter(int rgb) {
			primaries[0] = (rgb & 0xff0000) >> 16;
			primaries[1] = (rgb & 0xff00) >> 8;
			primaries[2] = rgb & 0xff;

			if (primaries[p] <= primaries[a] || primaries[p] <= primaries[b])
				return rgb;

			float brightness = primaries[p] / 255.0f;
			float dullness = (0.5f * (primaries[a] + primaries[b])) / primaries[p];

			int red = (int)((255 * dullness + (1 - dullness) * newRed) * brightness);
			int green = (int)((255 * dullness + (1 - dullness) * newGreen) * brightness);
			int blue = (int)((255 * dullness + (1 - dullness) * newBlue) * brightness);
			return ((rgb & 0xff000000) | (red << 16) | (green << 8) | (blue));
		}
	}

	static class ShadowFilter implements Filter {
		int rgbNew;

		public ShadowFilter(Colour newColour) {
			rgbNew = ((newColour.getRed() << 16) | (newColour.getGreen() << 8) | newColour.getBlue());
		}

		public int filter(int rgb) {
			return ((rgb & 0xff000000) | (rgbNew));
		}
	}

}
