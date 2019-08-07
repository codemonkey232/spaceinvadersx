/*
 * Rectangle class - stores a Rectangle
 * Rectangles are defined from the centre, no edge or corner is treated differently
 * Andrew Olsen 2005
 */
package nz.ac.auckland.spaceinvadersx.graphics;

public class Rectangle {

	protected int xMin, yMin, xMax, yMax;

	public Rectangle() {
		setAbsBounds(0, 0, 0, 0);
	}

	public Rectangle(int x, int y, int width, int height) {
		setBounds(x, y, width, height);
	}

	public Rectangle(int width, int height) {
		setBounds(0, 0, width, height);
	}

	public Rectangle(Rectangle other) {
		setBounds(other);
	}

	public Rectangle(int x, int y, Rectangle other) {
		setBounds(x, y, other);
	}

	public static Rectangle getRectangle(int x, int y, int width, int height) {
		return new Rectangle(x, y, width, height);
	}

	public static Rectangle getAbsRectangle(int x1, int y1, int x2, int y2) {
		Rectangle newRectangle = new Rectangle();
		newRectangle.setAbsBounds(x1, y1, x2, y2);
		return newRectangle;
	}

	public void setBounds(int x, int y, int width, int height) {
		width = Math.abs(width) / 2;
		height = Math.abs(height) / 2;
		xMin = x - width;
		yMin = y - height;
		xMax = x + width;
		yMax = y + height;
	}

	// Duplicates the bounds of the other Rectangle
	public void setBounds(Rectangle other) {
		setBounds(0, 0, other);
	}

	// Sets bounds to that of the other Rectangle, but translated
	public void setBounds(int x, int y, Rectangle other) {
		xMin = other.xMin + x;
		yMin = other.yMin + y;
		xMax = other.xMax + x;
		yMax = other.yMax + y;
	}

	public void setAbsBounds(int x1, int y1, int x2, int y2) {
		xMin = Math.min(x1, x2);
		yMin = Math.min(y1, y2);
		xMax = Math.max(x1, x2);
		yMax = Math.max(y1, y2);
	}

	public int getXMin() {	return xMin;	}
	public int getYMin() {	return yMin;	}
	public int getXMax() {	return xMax;	}
	public int getYMax() {	return yMax;	}

	public int getX() {
		return (xMin + xMax) / 2;
	}
	public int getY() {
		return (yMin + yMax) / 2;
	}

	public int getWidth() {
		return xMax - xMin;
	}
	public int getHeight() {
		return yMax - yMin;
	}

	public boolean contains(int x, int y) {
		return (x >= xMin && x <= xMax && y >= yMin && y <= yMax);
	}

	public boolean intersects(Rectangle other) {
		return ((xMax >= other.xMin && xMin <= other.xMax) && (yMax >= other.yMin && yMin <= other.yMax));
	}

	public int xDist(int x) {
		if (x >= xMin && x <= xMax) return 0;
		if (x < xMin) return xMin - x;
		return x - xMax;
	}

	public int yDist(int y) {
		if (y >= yMin && y <= yMax) return 0;
		if (y < yMin) return yMin - y;
		return y - yMax;
	}

}
