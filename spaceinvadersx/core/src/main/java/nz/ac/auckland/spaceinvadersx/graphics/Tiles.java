/*
 * Tiles class - stores a tileset
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class Tiles {

	protected Image[] tiles;
	protected int columns;

	public Tiles(Image[] tiles) {
		this.tiles = tiles;
		columns = tiles.length;
	}

	public Tiles(Image[] tiles, int columns) {
		this.tiles = tiles;
		this.columns = columns;
	}

	public Image getTile(int index) {
		return tiles[index];
	}

	public Image getTile(int row, int column) {
		return tiles[row * columns + column];
	}

	public int length() {	return tiles.length;			}
	public int columns() {	return columns;					}
	public int rows() {		return tiles.length / columns;	}

	public int getWidth() {		return tiles[0].getWidth();		}
	public int getHeight() {	return tiles[0].getHeight();	}

	public boolean success() {	return true;	}
	public Exception getError() {	return null;	}

	public Font getFont(char firstChar) {
		return Toolkit.getFont(this, firstChar);
	}

}
