package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static java.lang.Math.PI;

public class XWing extends PlayerShip {

	public static final Rectangle COLLISION_RECT = new Rectangle(40, 30);
	public static final int RELOAD_TICKS = 8, SPECIAL_RELOAD_TICKS = 50;

	public static final int BULLET_SPAWN_X = 23;
	public static final int SPECIAL_SALVO = 3, SPECIAL_REFIRE_TICKS = 5;


	public static final double[][] SALVO_ANGLES = { {0, -1*PI/3, -2*PI/3}, {0, PI/3, 2*PI/3} };

	protected Image bulletImage, missileImage;
	protected Tiles bulletHitEffect;
	protected int specialRefireTicker;


	public XWing(Colour playerColour, int startPos, boolean[] controlState) {
		super(Resources.xWingC, Resources.xWingS, playerColour, COLLISION_RECT, startPos, RELOAD_TICKS, SPECIAL_RELOAD_TICKS, controlState);
		bulletImage = recolourImage(Resources.xWingLaserC, playerColour);
		missileImage = recolourImage(Resources.xWingMissileC, playerColour);
		bulletHitEffect = recolourTiles(Resources.laserEffectC, playerColour);
		specialRefireTicker = 100;

	}

	public void tick() {
		tickPlayerShip();
		if (specialRefireTicker / SPECIAL_REFIRE_TICKS < SPECIAL_SALVO && specialRefireTicker % SPECIAL_REFIRE_TICKS == 0) {
			Game.addProjectile(new XWingMissile(missileImage, x - BULLET_SPAWN_X, y, SALVO_ANGLES[0][specialRefireTicker / SPECIAL_REFIRE_TICKS], this));
			Game.addProjectile(new XWingMissile(missileImage, x + BULLET_SPAWN_X, y, SALVO_ANGLES[1][specialRefireTicker / SPECIAL_REFIRE_TICKS], this));
		}
		specialRefireTicker++;
	}

	protected void fire() {
		Game.addProjectile(new XWingBullet(bulletImage, bulletHitEffect, x - BULLET_SPAWN_X, y, this));
		Game.addProjectile(new XWingBullet(bulletImage, bulletHitEffect, x + BULLET_SPAWN_X, y, this));
	}

	protected void fireSpecial() {
		specialRefireTicker = 0;
		Resources.missileLaunch.play();
	}

}
