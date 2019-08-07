package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Pickup extends EnemyProjectile {

	public static final int MIN_SPAWN_X = -360, SPAWN_RANGE = 720;
	public static final int SPAWN_Y = -400;

	public static final Rectangle COLLISION_RECT = new Rectangle(32, 32);
	public static final double SPEED = 3.0, ACCEL = 1.0;
	public static final int FRAME_TICKS = 2;
	public static final int COLLECT_POINTS = 100;
	public static final int MAX_Y = 350;

	protected Tiles tiles;

	public Pickup(Tiles tiles, double x, double y) {
		super(tiles.getTile(0), COLLISION_RECT, x, y);
		yVel = SPEED;
		this.tiles = tiles;
	}

	public void tick() {
		if (ageTicker % FRAME_TICKS == 0) {
			int frame = (ageTicker / FRAME_TICKS) % (2 * tiles.length());
			if (frame >= tiles.length()) frame =  (2 * tiles.length()) - frame - 1;
			image = tiles.getTile(frame);
		}
		yVel = Math.min(yVel + ACCEL, SPEED);
		tickProjectile();

	}

	public void draw(Graphics g) {
		drawSprite(g);
	}

	protected void collidePlayer(PlayerShip hitPlayer) {
		if (award(hitPlayer)) {
			Resources.collect.play();
			hitPlayer.award(COLLECT_POINTS);
			die();
		} else {
			yVel -= 2 * ACCEL;
		}
	}

	protected void removeIfStray() {
		if (y > MAX_Y)
			dead = true;
	}

	protected boolean award(PlayerShip collector) {
		return true;
	}


}