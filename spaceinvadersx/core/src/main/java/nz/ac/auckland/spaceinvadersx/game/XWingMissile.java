package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class XWingMissile extends PlayerProjectile {

	public static final Rectangle COLLISION_RECT = new Rectangle(5, 5);
	public static final int DAMAGE = 60;
	public static final double SPEED = 12.0, ROTATE_SPEED = 0.1;

	public static final int BOREDOM_TICKS = 200, SMOKE_TICKS = 3;

	public static final int HIT_EFFECT_FRAME_TICKS = 2;

	public XWingMissile(Image image, double x, double y, double angle, PlayerShip owner) {
		super(image, COLLISION_RECT, x, y, DAMAGE, owner);
		setAngleAndSpeed(angle, SPEED);
	}

	public void tick() {
		if (PlayerShip.gameState == PlayerShip.INPLAY) {
			if (ageTicker < BOREDOM_TICKS)
				homeFor(Game.enemies, ROTATE_SPEED);
		} else {
			approachAngle(0, ROTATE_SPEED);
		}
		Game.addEffect(new AnimEffect(Resources.missileFlame, x, y, 1));
		if (ageTicker % SMOKE_TICKS == 0)
			Game.addEffect(new SmokeEffect(x, y));
		tickRotateProjectile();
	}

	public void draw(Graphics g) {
		drawRotateSprite(g);
	}

	protected void spawnHitEffect() {
		Game.addEffect(new AnimEffect(Resources.missileExplosion, x, y, HIT_EFFECT_FRAME_TICKS));
	}

}