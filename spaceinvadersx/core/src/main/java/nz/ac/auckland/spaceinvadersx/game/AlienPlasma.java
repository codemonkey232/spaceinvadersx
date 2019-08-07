package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class AlienPlasma extends EnemyProjectile {

	public static final Rectangle COLLISION_RECT = new Rectangle(8, 8);
	public static final double SPEED = 10.0;
	public static final int FRAME_TICKS = 3;

	public static final int HIT_EFFECT_FRAME_TICKS = 1;

	protected Tiles tiles, hitEffect;

	public AlienPlasma(Tiles tiles, Tiles hitEffect, double x, double y, double angle) {
		super(tiles.getTile(0), COLLISION_RECT, x, y);
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