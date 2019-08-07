package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class Enemy extends Sprite {

	public static final int COLLISION_DAMAGE = 20;
	public static final int KAMIKAZE_DAMAGE = 100;
	public static final int KILL_POINTS = 10;

	public static final double LIFE_CHANCE = 0.02, NUKE_CHANCE = 0.07, SHIELD_CHANCE = 0.02, RAPID_CHANCE = 0.07;

	protected Image shadowImage;
	protected int health;
	protected int lastHurtTicker = Integer.MIN_VALUE;

	public static final int MAX_Y = 350;

	public Enemy(Image image, Image shadowImage, double x, double y, int health) {
		super(image, x, y);
		this.shadowImage = shadowImage;
		this.health = health;
	}

	public Enemy(Image image, Image shadowImage, double x, double y, double xVel, double yVel, int health) {
		super(image, x, y, xVel, yVel);
		this.shadowImage = shadowImage;
		this.health = health;
	}

	public Enemy(Image image, Image shadowImage, Rectangle collisionRect, double x, double y, int health) {
		super(image, collisionRect, x, y);
		this.shadowImage = shadowImage;
		this.health = health;
	}

	public Enemy(Image image, Image shadowImage, Rectangle collisionRect, double x, double y, double xVel, double yVel, int health) {
		super(image, collisionRect, x, y, xVel, yVel);
		this.shadowImage = shadowImage;
		this.health = health;
	}

	public void tick() {
		tickEnemy();
	}

	protected void tickEnemy() {
		tickSprite();
		collideTargets();
		removeIfStray();
	}

	protected void tickRotateEnemy() {
		tickRotateSprite();
		collideTargets();
		removeIfStray();
	}

	public void draw(Graphics g) {
		drawEnemy(g);
	}

	public void drawEnemy(Graphics g) {
		if (dead) return;
		if (lastHurtTicker == ageTicker)
			g.drawImage(shadowImage, x, y);
		else
			drawSprite(g);
	}

	public void drawRotateEnemy(Graphics g) {
		if (dead) return;
		if (lastHurtTicker == ageTicker)
			g.drawImage(shadowImage, x, y, true, false, angle, 1.0, 1.0, 1.0);
		else
			drawRotateSprite(g);
	}

	protected void collideTargets() {
		PlayerShip hitPlayer = findCollision(Game.players);
		if (hitPlayer != null) {
			if (hitPlayer.kill()) {
				damage(KAMIKAZE_DAMAGE, hitPlayer);
			} else {
				damage(COLLISION_DAMAGE, hitPlayer);
			}
		}
	}

	public void damage(int damage, PlayerShip victor) {
		if (dead) return;
		lastHurtTicker = ageTicker;
		victor.award(Math.max(0, Math.min(damage, health)));
		health -= damage;
		if (health <= 0) {
			award(victor);
			die();
		}
	}

	protected void award(PlayerShip victor) {
		victor.award(KILL_POINTS);
	}

	protected void die() {
		explode();
		spawnPickup();
		dead = true;
	}

	protected void explode() {}

	protected void spawnPickup() { spawnPickup(false); }

	protected void spawnPickup(boolean forceSpawn) {
		double choice = Math.random();
		if (forceSpawn) choice *= (LIFE_CHANCE + NUKE_CHANCE + SHIELD_CHANCE + RAPID_CHANCE);
		choice -= LIFE_CHANCE;
		if (choice < 0) {
			Game.addProjectile(new LifePickup(x ,y));
			return;
		}
		choice -= NUKE_CHANCE;
		if (choice < 0) {
			Game.addProjectile(new NukePickup(x ,y));
			return;
		}
		choice -= SHIELD_CHANCE;
		if (choice < 0) {
			Game.addProjectile(new ShieldPickup(x ,y));
			return;
		}
		choice -= RAPID_CHANCE;
		if (choice < 0) {
			Game.addProjectile(new RapidPickup(x, y));
			return;
		}
	}

	protected void removeIfStray() {
		if (y > MAX_Y)
			dead = true;
	}


}