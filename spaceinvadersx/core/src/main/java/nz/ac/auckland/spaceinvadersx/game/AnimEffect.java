package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class AnimEffect extends Sprite {

	protected Tiles frames;
	protected int frameTicks;

	public AnimEffect(Tiles frames, double x, double y, int frameTicks) {
		this(frames, x, y, 0, 0, frameTicks);
	}

	public AnimEffect(Tiles frames, double x, double y, double xVel, double yVel, int frameTicks) {
		super(frames.getTile(0), x, y, xVel, yVel);
		this.frames = frames;
		this.frameTicks = frameTicks;
	}

	public void tick() {
		if (animateSprite(frames, ageTicker, frameTicks))
			dead = true;
		tickSprite();
	}
}