package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

import static java.lang.Math.PI;
import static nz.ac.auckland.spaceinvadersx.core.Controls.FIRE;

public class Corsair extends PlayerShip {

	public static final Rectangle COLLISION_RECT = new Rectangle(30, 40);
	public static final double TURRET_ROTATE_SPEED = 0.2;
	public static final int RELOAD_TICKS = 4, SPECIAL_RELOAD_TICKS = 50;

	public static final int TURRET_Y = 10, BARREL_LENGTH = 15;

	public static final double[][] DESIRED_ANGLES = {{	7*PI/4,		0,		PI/4	},
													 {	3*PI/2,		0,		PI/2	},
													 {	5*PI/4,		PI,		3*PI/4	}};

	protected Tiles bulletTiles, bombTiles, bulletHitEffect;

	protected double turretAngle, desiredTurretAngle;

	public Corsair(Colour playerColour, int startPos, boolean[] controlState) {
		super(Resources.corsairC, Resources.corsairS, playerColour, COLLISION_RECT, startPos, RELOAD_TICKS, SPECIAL_RELOAD_TICKS, controlState);
		bulletTiles = recolourTiles(Resources.corsairBulletC, playerColour);
		bombTiles = recolourTiles(Resources.corsairBombC, playerColour);
		bulletHitEffect = recolourTiles(Resources.plasmaEffectC, playerColour);
		turretAngle = desiredTurretAngle = 0;
	}

	public void tick() {
		tickPlayerShip();
		if (!controlIsHeld[FIRE] && (xDir != 0 || yDir != 0))
			desiredTurretAngle = DESIRED_ANGLES[yDir+1][xDir+1];

		turretAngle = Sprite.approachAngle(turretAngle, desiredTurretAngle, TURRET_ROTATE_SPEED);
	}

	public void drawIcon(Graphics g, double x, double y) {
		g.drawImage(image, x, y);
		g.drawImage(Resources.corsairTurret, x, y + TURRET_Y);
	}

	protected void drawShip(Graphics g) {
		g.drawImage(image, x, y);
		g.drawImage(Resources.corsairTurret, x, y + TURRET_Y, true, false, turretAngle, 1.0, 1.0, 1.0);
	}

	protected void fire() {
		Game.addProjectile(new CorsairBullet(bulletTiles, bulletHitEffect, x + BARREL_LENGTH * Math.sin(turretAngle), y + TURRET_Y - BARREL_LENGTH * Math.cos(turretAngle), turretAngle, this));
	}

	protected void fireSpecial() {
		Resources.bombLaunch.play();
		Game.addProjectile(new CorsairBomb(bombTiles, x + BARREL_LENGTH * Math.sin(turretAngle), y + TURRET_Y - BARREL_LENGTH * Math.cos(turretAngle), turretAngle, controlIsHeld, this));
	}

}
