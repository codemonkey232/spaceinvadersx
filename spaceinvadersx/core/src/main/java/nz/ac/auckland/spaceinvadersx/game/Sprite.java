package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class Sprite {

	public static final Rectangle DEFAULT_COLLISION_RECT = new Rectangle();

	protected Image image;
	protected double x, y;
	protected double xVel, yVel;
	protected double angle, speed;
	protected Rectangle collisionRect, bounds;
	protected int ageTicker;
	public boolean dead;

	public Sprite(Image image, double x, double y) {
		this(image, DEFAULT_COLLISION_RECT, x, y, 0, 0);
	}

	public Sprite(Image image, double x, double y, double xVel, double yVel) {
			this(image, DEFAULT_COLLISION_RECT, x, y, xVel, yVel);
	}

	public Sprite(Image image, Rectangle collisionRect, double x, double y) {
			this(image, collisionRect, x, y, 0, 0);
	}

	public Sprite(Image image, Rectangle collisionRect, double x, double y, double xVel, double yVel) {
		this.image = image;
		this.collisionRect = collisionRect;
		this.x = x;			this.y = y;
		bounds = new Rectangle();
		refreshBounds();
		this.xVel = xVel;	this.yVel = yVel;
		ageTicker = 0;
		dead = false;
	}

	// Tick methods
	public void tick() {
		tickSprite();
	}

	protected void tickSprite() {
		ageTicker++;
		x += xVel;
		y += yVel;
		refreshBounds();
	}

	protected void tickRotateSprite() {
		updateVelocity();
		tickSprite();
	}

	protected void refreshBounds() {
		bounds.setBounds(getX(), getY(), collisionRect);
	}

	// Draw methods
	public void draw(Graphics g) {
		if (!dead)
			drawSprite(g);
	}

	protected void drawSprite(Graphics g) {
		if (!dead)
			g.drawImage(image, x, y);
	}

	protected void drawRotateSprite(Graphics g) {
		if (!dead)
			g.drawImage(image, x, y, true, false, angle, 1.0, 1.0, 1.0);
	}

	public int getX() {		return (int)x;	}
	public int getY() {		return (int)y;	}


	// Constructor Helper methods
	protected void setPosition(double x, double y) {
		this.x = x;
		this.y = y;
	}

	protected void setVelocity(double xVel, double yVel) {
		this.xVel = xVel;
		this.yVel = yVel;
	}

	protected void setAngleAndSpeed(double angle, double speed) {
		this.angle = angle;
		this.speed = speed;
		updateVelocity();
	}


	// Image methods
	protected boolean animateSprite(Tiles frames, int frameTicker, int frameTicks) {
		image = frames.getTile((frameTicker / frameTicks) % frames.length());
		return ((frameTicker / frameTicks) >= frames.length());
	}

	protected void randimateSprite(Tiles frames, int frameTicker, int frameTicks) {
		if (frameTicker % frameTicks == 0)
			setRandomImage(frames);
	}

	protected void setRandomImage(Tiles frames) {
		image = frames.getTile((int)(Math.random() * frames.length()));
	}


	// Collide methods
	protected <T extends Sprite> T findCollision(Iterable<T> targets) {
		for (T target : targets) {
			if (target.dead) continue;
			if (collides(target) || target.collides(this)) return target;
		}
		return null;
	}

	protected boolean collides(Sprite other) {
		return (other instanceof Beast) ? other.collides(this) : bounds.intersects(other.bounds);
	}

	//Rotate Sprite methods
	protected boolean homeFor(Iterable<? extends Sprite> targets, double rotateSpeed) {
		double bestAngle = 0.0;
		boolean hasTarget = false;
		for (Sprite target : targets) {
			if (target.dead) continue;
			if (!Projectile.PROJECTILE_RANGE.contains(target.getX(), target.getY())) continue;
			double targetAngle = findAngle(target.x - x, target.y - y);
			targetAngle = Sprite.normaliseAngle(targetAngle - angle);
			if (!hasTarget || Math.abs(targetAngle) < Math.abs(bestAngle)) {
				hasTarget = true;
				bestAngle = targetAngle;
			}
		}
		if (hasTarget) {
			return approachRelAngle(bestAngle, rotateSpeed);
		}
		return false;
	}


	protected void updateVelocity() {
		xVel = xAngle(angle, speed);
		yVel = yAngle(angle, speed);
	}

	protected boolean approachAngle(double desiredAngle, double maxStep) {
		return approachRelAngle(Sprite.normaliseAngle(desiredAngle - angle), maxStep);

	}

	protected boolean approachRelAngle(double desiredAddend, double maxStep) {
		if (Math.abs(desiredAddend) <= maxStep) {
			angle = normaliseAngle(angle + desiredAddend);
			return true;
		}
		angle = normaliseAngle(angle + maxStep * Math.signum(desiredAddend));
		return false;
	}

	// Static angle methods

	public static double findAngle(double x, double y) {
		return Math.atan2(x, -y);
	}

	public static double xAngle(double angle, double scalar) {
		return scalar * Math.sin(angle);
	}

	public static double yAngle(double angle, double scalar) {
		return scalar * -Math.cos(angle);
	}

	public static double normaliseAngle(double angle) {
		while (angle > Math.PI)
				angle -= 2*Math.PI;
		while (angle < -Math.PI)
			angle += 2*Math.PI;
		return angle;
	}

	public static double approachAngle(double angle, double desiredAngle, double maxStep) {
		return approachRelAngle(angle, Sprite.normaliseAngle(desiredAngle - angle), maxStep);
	}

	public static double approachRelAngle(double angle, double desiredAddend, double maxStep) {
		if (Math.abs(desiredAddend) <= maxStep)
			return normaliseAngle(angle + desiredAddend);
		return normaliseAngle(angle + maxStep * Math.signum(desiredAddend));
	}

}