package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;
import nz.ac.auckland.spaceinvadersx.core.Resources;

public class Phantom extends Enemy {

	public static final Rectangle COLLISION_RECT = new Rectangle(50, 100);

	public static final int HEALTH = 20;

	public static final int MIN_SPAWN_X = -360, SPAWN_RANGE = 720;
	public static final int SPAWN_Y = -400;

	public static final int EXPLODE_Y = 200;
	public static final int FADE_IN_Y = 100;

	public static final int BACKWARDS = 0, VERTICAL = 1, HORIZONTAL = 2, THREE_WAY = 3, FOUR_WAY = 4;

	public static final double[][] ANGLES = {	{Math.PI/4, -Math.PI/4},
											{0, Math.PI},
											{Math.PI/2, -Math.PI/2},
											{0, 3*Math.PI/4, -3*Math.PI/4},
											{Math.PI/4, -Math.PI/4, 3*Math.PI/4, -3*Math.PI/4} 	};


	protected double startAlpha, alpha;
	protected int angleSet;

	public Phantom(double x, double y, double startAlpha, double speed, int angleSet) {
		super(Resources.phantom, Resources.phantomS, COLLISION_RECT, x, y, HEALTH);
		yVel = speed;
		this.startAlpha = startAlpha;
		alpha = startAlpha;
		this.angleSet = angleSet;
		angle = Math.PI;
	}

	public void tick() {
		tickEnemy();
		if (!dead) {
			int explodeY = EXPLODE_Y;
			for (PlayerShip player : Game.players)
				if (!player.dead && player.getY() < explodeY)
					explodeY = player.getY();
			if (y >= explodeY)
				destruct();
			else if (y > explodeY - FADE_IN_Y)
				alpha = Math.max(alpha, 1 - ((explodeY - y) / FADE_IN_Y) * (1 - startAlpha));
		}
	}

	protected void drawSprite(Graphics g) {
		if (!dead)
			g.drawImage(image, x, y, alpha);
	}

	protected void destruct() {
		explode();
		shoot();
		dead = true;
	}

	protected void shoot() {
		for (int i = 0; i < ANGLES[angleSet].length; i++)
			Game.addEnemy(new AlienMissile(x, y, ANGLES[angleSet][i]));
	}

	protected void explode() {
		Game.addEffect(new AlienExplosion(x, y));
		Resources.explosion.play();
	}


	public static void spawn() {
		Game.addEnemy(new Phantom(MIN_SPAWN_X + Math.random() * SPAWN_RANGE, SPAWN_Y, 0.5, 4, BACKWARDS));
	}



}