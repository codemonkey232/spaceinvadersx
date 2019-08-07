/*
 * Image class - stores an image
 * Wraps java.awt.Image
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class Image {

	protected playn.core.Image playnImage;
        protected playn.core.Tile tile;
	protected int width;
	protected int height;

	public Image(playn.core.Tile tile, int width, int height) {
		this.tile = tile;
		this.width = width;
		this.height = height;
	}

	public Image(playn.core.Image playnImage, playn.core.Tile tile, int width, int height) {
		this.playnImage = playnImage;
		this.tile = tile;
		this.width = width;
		this.height = height;
	}

	public playn.core.Image getPlaynImage() {	return playnImage;	}
	public playn.core.Tile getTile() {	return tile;	}

	public int getWidth() {		return width;	}
	public int getHeight() {	return height;	}

	public boolean success() {	return true;	}
	public Exception getError() {	return null;	}

	public Tiles getTiles(int tileWidth, int tileHeight) {
		return Toolkit.getTiles(this, tileWidth, tileHeight);
	}

	public ColourableImage getColourableImage(int recolourType) {
		return Toolkit.getColourableImage(this, recolourType);
	}

	public Image scale(double scale) {
		return scale(scale, scale);
	}

	public Image scale(double scaleX, double scaleY) {
		return Toolkit.scaleImage(this, scaleX, scaleY);
	}

	public Image scale(int width, int height) {
		return Toolkit.scaleImage(this, width, height);
	}

	public Image flip() {
		return Toolkit.flipImage(this);
	}

	public static Image loadImage(String fileName) {
		return Toolkit.loadImage(fileName);
	}

}
