/*
 * ColourableFont class - stores an image ready to be recoloured
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class ColourableImage {

	protected Image image;
	protected int recolourType;

	public ColourableImage(Image image, int recolourType) {
		this.image = image;
		this.recolourType = recolourType;
	}

	public Image getImage() {		return image;			}
	public int getRecolourType() {	return recolourType;	}

	public boolean success() {	return image.success();		}
	public Exception getError() {	return image.getError();	}

	public Image recolour(Colour newColour) {
		return Toolkit.recolourImage(this, newColour);
	}

	public Image recolour(Colour newColour, int recolourType) {
		return Toolkit.recolourImage(this, newColour, recolourType);
	}

	public ColourableTiles getColourableTiles(int tileWidth, int tileHeight) {
		return Toolkit.getColourableTiles(this, tileWidth, tileHeight);
	}
}
