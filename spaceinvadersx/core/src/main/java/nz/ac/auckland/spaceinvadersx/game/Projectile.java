package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class Projectile extends Sprite {

	public static final Rectangle PROJECTILE_RANGE = new Rectangle(1200, 700);

	public Projectile(Image image, Rectangle collisionRect, double x, double y) {
		super(image, collisionRect, x, y, 0, 0);
	}

	public void tick() {
		tickProjectile();
	}

	protected void tickProjectile() {
		tickSprite();
		collideTargets();
		removeIfStray();
	}

	protected void tickRotateProjectile() {
		tickRotateSprite();
		collideTargets();
		removeIfStray();
	}

	protected void collideTargets() {}

	protected void die() {
		dead = true;
		spawnHitEffect();
	}

	protected void removeIfStray() {
		if (!PROJECTILE_RANGE.contains(getX(), getY()))
			dead = true;
	}

	protected void spawnHitEffect() {}

}