/*
 * ColourableFont class - stores a font ready to be recoloured
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class ColourableFont {
	protected ColourableTiles colourableTiles;
	protected char firstChar;
	protected char unknownChar;

	public ColourableFont (ColourableTiles colourableTiles, char firstChar) {
		this.colourableTiles = colourableTiles;
		this.firstChar = firstChar;
	}

	public ColourableTiles getColourableTiles() {	return colourableTiles;		}
	public char getFirstChar() {	return firstChar;		}

	public boolean success() {	return colourableTiles.success();		}
	public Exception getError() {	return colourableTiles.getError();	}

	public Font recolour(Colour newColour) {
		return Toolkit.recolourFont(this, newColour);
	}

	public Font recolour(Colour newColour, int recolourType) {
		return Toolkit.recolourFont(this, newColour, recolourType);
	}

}
