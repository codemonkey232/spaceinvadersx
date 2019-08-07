package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class EnemyProjectile extends Projectile {

	public EnemyProjectile(Image image, Rectangle collisionRect, double x, double y) {
		super(image, collisionRect, x, y);
	}

	protected void collideTargets() {
		PlayerShip hitPlayer = findCollision(Game.players);
		if (hitPlayer != null) {
			collidePlayer(hitPlayer);
		}
	}

	protected void collidePlayer(PlayerShip hitPlayer) {
		hitPlayer.kill();
		die();
	}

}

