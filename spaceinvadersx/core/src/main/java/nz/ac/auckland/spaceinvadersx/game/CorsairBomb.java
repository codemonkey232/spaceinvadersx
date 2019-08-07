package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static nz.ac.auckland.spaceinvadersx.core.Controls.SPECIAL;

public class CorsairBomb extends PlayerProjectile {

	public static final Rectangle COLLISION_RECT = new Rectangle(50, 50);
	public static final double SPEED = 7.0;

	public static final int FUSE_TICKS = 20;
	public static final int DARK = 0, LIT = 1;
	public static final int FRAME_TICKS = 3;
	public static final int HIT_RADIUS = 100, DAMAGE = 200;
	public static final int HIT_RADIUS_SQUARED = HIT_RADIUS * HIT_RADIUS;

	public static final int EXPLOSION_FRAME_TICKS = 1;

	protected Tiles tiles;
	protected boolean[] controlIsHeld;
	protected boolean remoteDetonate;


	public CorsairBomb(Tiles tiles, double x, double y, double angle, boolean[] controlIsHeld, PlayerShip owner) {
		super(tiles.getTile(DARK), COLLISION_RECT, x, y, DAMAGE, owner);
		setAngleAndSpeed(angle, SPEED);
		this.tiles = tiles;
		this.controlIsHeld = controlIsHeld;
	}

	public void tick() {
		tickRotateSprite();
		if (ageTicker == FUSE_TICKS) {
			remoteDetonate = controlIsHeld[SPECIAL];
			Resources.beep.play();
			image = tiles.getTile(LIT);
		} else if (ageTicker > FUSE_TICKS) {
			if (remoteDetonate) {
				if (!controlIsHeld[SPECIAL])
					explode();
			} else {
				if (findCollision(Game.enemies) != null)
					explode();
				else
					animateSprite(tiles, ageTicker, FRAME_TICKS);
			}
		}
		removeIfStray();
	}

	protected void explode() {
		Resources.deepExplosion.play();
		int explosionX = getX();
		int explosionY = getY();
		for (Enemy enemy : Game.enemies) {
			if (enemy.dead) continue;
			int xDist = enemy.bounds.xDist(explosionX);
			int yDist = enemy.bounds.yDist(explosionY);
			if ((xDist*xDist + yDist*yDist) <= HIT_RADIUS_SQUARED)
				enemy.damage(DAMAGE, owner);
		}
		die();
	}

	protected void spawnHitEffect() {
		Game.addEffect(new ShockWave(x, y));
		Game.addEffect(new AnimEffect(Resources.flakExplosion, x, y, EXPLOSION_FRAME_TICKS));
	}

}
