package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Destroyer extends PlayerShip {

	public static final Rectangle COLLISION_RECT = new Rectangle(40, 30);
	public static final int RELOAD_TICKS = 6, SPECIAL_RELOAD_TICKS = 50;

	public static final int LASER_DAMAGE = 20;
	public static final int LASER_SPAWN_Y = 30, MIN_LASER_Y = -350;
	public static final int LASER_WIDTH = 2, LASER_GLOW_WIDTH = 4;
	public static final int LASER_FADE_TICKS = 5, HIT_EFFECT_FRAME_TICKS = 1;

	public static final int DEATH_RAY_DAMAGE = 10;
	public static final int DEATH_RAY_SPAWN_Y = 30, MIN_DEATH_RAY_Y = -350;
	public static final int DEATH_RAY_WIDTH = 10, DEATH_RAY_GLOW_WIDTH = 20;
	public static final int DEATH_RAY_FADE_TICKS = 30;

	public static final Colour WHITE_TRANSPARENT = Colour.WHITE.transparent();

	public static final double MAX_SHIELD_SCALE = 1.5;

	protected Image laserShieldImage;
	protected Tiles laserHitEffect;
	protected Rectangle laserBounds, laserGlowBounds;
	protected Rectangle deathRayBounds, deathRayGlowBounds;
	protected Image deathRayBeam, deathRayGlow;
	protected int laserTicker, deathRayTicker;
	protected Colour playerColourTransparent;

	public Destroyer(Colour playerColour, int startPos, boolean[] controlState) {
		super(Resources.destroyerC, Resources.destroyerS, playerColour, COLLISION_RECT, startPos, RELOAD_TICKS, SPECIAL_RELOAD_TICKS, controlState);
		laserShieldImage = Resources.destroyerC.recolour(playerColour, Toolkit.SHADOW_RECOLOUR);
		laserHitEffect = recolourTiles(Resources.laserEffectC, playerColour);
		laserBounds = new Rectangle();
		laserGlowBounds = new Rectangle();
		deathRayBounds = new Rectangle();
		deathRayGlowBounds = new Rectangle();
		laserTicker = 0;
		playerColourTransparent = playerColour.transparent();
		deathRayBeam = Toolkit.createGradientFill(WHITE_TRANSPARENT, Colour.WHITE, DEATH_RAY_WIDTH, true);
		deathRayGlow = Toolkit.createGradientFill(playerColourTransparent, playerColour,  DEATH_RAY_GLOW_WIDTH, true);
	}

	public void tick() {
		laserTicker--;
		deathRayTicker--;
		tickPlayerShip();
		if (laserTicker > 0) {
			laserBounds.setAbsBounds(getX() - LASER_WIDTH/2, laserBounds.getYMin(), getX() + LASER_WIDTH/2, laserBounds.getYMax());
			laserGlowBounds.setAbsBounds(getX() - LASER_GLOW_WIDTH/2, laserBounds.getYMin(), getX() + LASER_GLOW_WIDTH/2, laserBounds.getYMax());
		}
		if (deathRayTicker > 0)
			tickDeathRay();
	}

	public void draw(Graphics g) {
		if (laserTicker > 0) {
			g.fillRect(laserBounds, playerColour, 1.0 * laserTicker / LASER_FADE_TICKS);
			g.fillRect(laserGlowBounds, playerColour, 0.5 * laserTicker / LASER_FADE_TICKS);
		}
		if (deathRayTicker > 0) {
			double rayTime = 1.0 * deathRayTicker / DEATH_RAY_FADE_TICKS;
			g.fillGradient(deathRayBounds, deathRayBeam, rayTime);
			g.fillGradient(deathRayGlowBounds, deathRayGlow, rayTime);
			double shieldScale = (MAX_SHIELD_SCALE - 1) * (1 - rayTime) + 1;
			g.drawImage(laserShieldImage, x, y, true, true, 0, shieldScale, shieldScale, rayTime);
		}
		drawPlayerShip(g);
	}

	public boolean kill() {
		if (deathRayTicker > 0) return false;
		return super.kill();
	}


	protected void fire() {
		laserTicker = LASER_FADE_TICKS;
		int laserY = MIN_LASER_Y;
		laserBounds.setAbsBounds(getX() - LASER_WIDTH/2, laserY, getX() + LASER_WIDTH/2, getY() - LASER_SPAWN_Y);

		Enemy hitEnemy = null;
		for (Enemy enemy : Game.enemies) {
			if (enemy.dead) continue;
			if (laserBounds.intersects(enemy.bounds)) {
				int hitY = enemy.bounds.getYMax();
				if (hitY > laserY) {
					hitEnemy = enemy;
					laserY = hitY;
					if (laserY >= getY() - LASER_SPAWN_Y) {
						laserY = getY() - LASER_SPAWN_Y;
						break;
					}
				}
			}
		}
		laserBounds.setAbsBounds(getX() - LASER_WIDTH/2, laserY, getX() + LASER_WIDTH/2, getY() - LASER_SPAWN_Y);

		if (hitEnemy != null) {
			hitEnemy.damage(LASER_DAMAGE, this);
			Game.addEffect(new AnimEffect(laserHitEffect, x, laserY, HIT_EFFECT_FRAME_TICKS));
		}

	}

	protected void fireSpecial() {
		deathRayTicker = DEATH_RAY_FADE_TICKS;
		Resources.deathRay.play();
	}

	protected void tickDeathRay() {
		deathRayBounds.setAbsBounds(getX() - DEATH_RAY_WIDTH/2, MIN_DEATH_RAY_Y, getX() + DEATH_RAY_WIDTH/2, getY() - DEATH_RAY_SPAWN_Y);
		deathRayGlowBounds.setAbsBounds(getX() - DEATH_RAY_GLOW_WIDTH/2, MIN_DEATH_RAY_Y, getX() + DEATH_RAY_GLOW_WIDTH/2, getY() - DEATH_RAY_SPAWN_Y);
		for (Enemy enemy : Game.enemies) {
			if (enemy.dead) continue;
			if (deathRayBounds.intersects(enemy.bounds))
				enemy.damage(DEATH_RAY_DAMAGE, this);
		}
	}

}
