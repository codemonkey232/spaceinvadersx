package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class CollisionBlock extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(820, 200);

	public static final CollisionBlock instance = new CollisionBlock();

	public static final int HURT_GLOW_TICKS = 10;

	protected int hurtGlowTicker;

	protected CollisionBlock() {
		super(null, null, COLLISION_RECT, 0, -300, 10);
		reset();
	}

	public void tick() {
		if (hurtGlowTicker > 0) hurtGlowTicker--;
	}
	public void damage(int damage, PlayerShip owner) {
		hurtGlowTicker = HURT_GLOW_TICKS;
	}
	public void draw(Graphics g) {
		if (hurtGlowTicker > 0)
			g.drawRect(bounds, Colour.WHITE, 1.0 * hurtGlowTicker / HURT_GLOW_TICKS);
	}

	public void reset() {
		hurtGlowTicker = 0;
	}



}