package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class XWingBullet extends PlayerProjectile {

	public static final Rectangle COLLISION_RECT = new Rectangle(4, 12);
	public static final double Y_VEL = -10.0;
	public static final int DAMAGE = 15;

	public static final int HIT_EFFECT_FRAME_TICKS = 1;

	protected Tiles hitEffect;

	public XWingBullet(Image image, Tiles hitEffect, double x, double y, PlayerShip owner) {
		super(image, COLLISION_RECT, x, y, DAMAGE, owner);
		this.hitEffect = hitEffect;
		setVelocity(0, Y_VEL);
	}

	protected void spawnHitEffect() {
		Game.addEffect(new AnimEffect(hitEffect, x, y, HIT_EFFECT_FRAME_TICKS));
	}

}