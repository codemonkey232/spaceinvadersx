/*
 * Font class - stores a font
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class Font {

	protected Tiles charTiles;
	protected char firstChar;

	public Font(Tiles charTiles, char firstChar) {
		this.charTiles = charTiles;
		this.firstChar = firstChar;
	}

	public Image getCharTile(char character) {
		int index = character - firstChar;
		if (index < 0 || index >= charTiles.length())
			return null;
		return charTiles.getTile(index);
	}

	public char firstChar() {	return firstChar;	}
	public char lastChar() {	return (char)(firstChar + charTiles.length() - 1);	}
	public int length() {	return charTiles.length();	}

	public int getWidth() {		return charTiles.getWidth();	}
	public int getHeight() {	return charTiles.getHeight();	}

	public boolean success() {	return true;	}
	public Exception getError() {	return null;	}

}