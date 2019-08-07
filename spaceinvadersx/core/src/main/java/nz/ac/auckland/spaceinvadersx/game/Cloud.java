package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Cloud extends Sprite {

	public static final int MIN_SPAWN_X = -400, SPAWN_RANGE = 800,
							MIN_SPEED = 2, SPEED_RANGE = 2;

	public static final int SPAWN_Y = -560, MAX_Y = 560;

	public Cloud(double x, double y, double speed) {
		super(null, x, y);
		setRandomImage(Resources.clouds);
		this.angle = angle;
		yVel = speed;
	}

	public void tick() {
		tickSprite();
		if (y > MAX_Y)
			dead = true;
	}

	public void draw(Graphics g) {
		drawSprite(g);
		//if (!dead)
		//	g.drawImage(image, x, y, true, false, angle, 4.0, 4.0, 1.0);
	}

	public static void spawn() {
		Game.addEffect(new Cloud(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y, MIN_SPEED + Math.random() * SPEED_RANGE));
	}

}
