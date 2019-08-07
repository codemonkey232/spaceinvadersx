/*
 * ColourableTiles class - stores a tileset ready to be recoloured
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class ColourableTiles {
	protected ColourableImage colourableImage;
	protected int tileWidth;
	protected int tileHeight;

	public ColourableTiles (ColourableImage colourableImage, int tileWidth, int tileHeight) {
		this.colourableImage = colourableImage;
		this.tileWidth = tileWidth;
		this.tileHeight = tileHeight;
	}

	public ColourableImage getColourableImage() {	return colourableImage;		}
	public int getTileWidth() {						return tileWidth;			}
	public int getTileHeight() {					return tileHeight;			}

	public boolean success() {	return colourableImage.success();		}
	public Exception getError() {	return colourableImage.getError();	}

	public Tiles recolour(Colour newColour) {
		return Toolkit.recolourTiles(this, newColour);
	}

	public Tiles recolour(Colour newColour, int recolourType) {
		return Toolkit.recolourTiles(this, newColour, recolourType);
	}

	public ColourableFont getColourableFont(char firstChar) {
		return Toolkit.getColourableFont(this, firstChar);
	}

}
