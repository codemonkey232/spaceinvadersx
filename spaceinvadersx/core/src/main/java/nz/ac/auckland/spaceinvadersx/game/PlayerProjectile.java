package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class PlayerProjectile extends Projectile {

	public static final Rectangle PROJECTILE_RANGE = new Rectangle(1200, 700);

	protected PlayerShip owner;
	protected int damage;

	public PlayerProjectile(Image image, Rectangle collisionRect, double x, double y, int damage, PlayerShip owner) {
		super(image, collisionRect, x, y);
		this.owner = owner;
		this.damage = damage;
	}

	protected void collideTargets() {
		Enemy hitEnemy = findCollision(Game.enemies);
		if (hitEnemy != null) {
			hitEnemy.damage(damage, owner);
			dead = true;
			spawnHitEffect();
		}
	}

}