package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class CorsairBullet extends PlayerProjectile {

	public static final Rectangle COLLISION_RECT = new Rectangle(8, 8);
	public static final double SPEED = 10.0;
	public static final int FRAME_TICKS = 3;
	public static final int DAMAGE = 10;

	public static final int HIT_EFFECT_FRAME_TICKS = 1;

	protected Tiles tiles, hitEffect;

	public CorsairBullet(Tiles tiles, Tiles hitEffect, double x, double y, double angle, PlayerShip owner) {
		super(tiles.getTile(0), COLLISION_RECT, x, y, DAMAGE, owner);
		setAngleAndSpeed(angle, SPEED);
		this.tiles = tiles;
		this.hitEffect = hitEffect;
	}

	public void tick() {
		randimateSprite(tiles, ageTicker, FRAME_TICKS);
		tickRotateProjectile();
	}

	public void draw(Graphics g) {
		drawRotateSprite(g);
	}

	protected void spawnHitEffect() {
		Game.addEffect(new AnimEffect(hitEffect, x, y, HIT_EFFECT_FRAME_TICKS));
	}

}