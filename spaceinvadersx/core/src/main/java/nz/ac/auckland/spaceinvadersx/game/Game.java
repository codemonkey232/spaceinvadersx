package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.core.Resources;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.menu.Menus;
import nz.ac.auckland.spaceinvadersx.menu.Background;
import nz.ac.auckland.spaceinvadersx.graphics.*;

import java.util.Collection;
import java.util.Iterator;

public class Game {

	public static final int IDLE = 0, PREGAME = 1, INPLAY = 2, PAUSED = 3;

	public static int playersAlive = 0;

	public static IterateList<Enemy> enemies = new IterateList<Enemy>();
	public static IterateList<PlayerShip> players = new IterateList<PlayerShip>();
	public static IterateList<Projectile> projectiles = new IterateList<Projectile>();
	public static IterateList<Sprite> effects = new IterateList<Sprite>();

	protected static int gameState = IDLE;
	public static boolean training = false;

	public static void newGame() {
		clearAll();
		CollisionBlock.instance.reset();
		enemies.add(CollisionBlock.instance);
		gameState = PREGAME;
		PlayerShip.gameState = PlayerShip.PREGAME;
	}

	public static void startGame() {
		enemies.clear();
		Level.startGame(players.size());
		for (PlayerShip player : players)
			player.startGame();
		playersAlive = players.size();
		PlayerShip.gameState = PlayerShip.INPLAY;
		gameState = INPLAY;
		training = false;
	}

	public static void clearGame() {
		clearAll();
		gameState = IDLE;
	}

	public static void tick() {
		if (gameState != PAUSED) {
			Background.tick();
			if (gameState == INPLAY) {
				if (playersAlive == 0 && !training) gameOver();
				Level.tickLevel();
			}

			for (Iterator<Enemy> i = enemies.iterator(); i.hasNext(); ) {
				Enemy enemy = i.next();
				if (enemy.dead) i.remove();
				else enemy.tick();
			}
			for (PlayerShip player : players)
				player.tick();
			for (Iterator<Projectile> i = projectiles.iterator(); i.hasNext(); ) {
				Projectile projectile = i.next();
				if (projectile.dead) i.remove();
				else projectile.tick();
			}
			for (Iterator<Sprite> i = effects.iterator(); i.hasNext(); ) {
				Sprite effect = i.next();
				if (effect.dead) i.remove();
				else effect.tick();
			}

		}
	}

	public static void draw(Graphics g) {
		Background.draw(g);
		for (Enemy enemy : enemies)
			enemy.draw(g);
		for (PlayerShip player : players)
			player.draw(g);
		for (Projectile projectile : projectiles)
			projectile.draw(g);
		for (Sprite effect : effects)
			effect.draw(g);
		if (gameState != PREGAME)
			for (PlayerShip player : players)
				player.drawHUD(g);
		if (gameState == PAUSED)
			g.fillRect(SpaceInvadersX.SCREEN, Colour.BLACK, 0.5);

	}

	// Add/remove Sprite methods
	public static void addEnemy(Enemy newEnemy) {
		enemies.add(newEnemy);
	}

	public static PlayerShip createPlayerShip(int shipType, Colour colour, int startPos, boolean[] controlState) {
		PlayerShip newShip = PlayerShip.getPlayerShip(shipType, colour, startPos, controlState);
		players.add(newShip);
		return newShip;
	}

	public static void removePlayerShip(PlayerShip player) {
		players.remove(player);
	}

	public static void addProjectile(Projectile newProjectile) {
		projectiles.add(newProjectile);
	}

	public static void addEffect(Sprite newEffect) {
		effects.add(newEffect);
	}

	protected static void clearAll() {
		enemies.clear();
		players.clear();
		projectiles.clear();
		effects.clear();
	}

	public static void setPaused(boolean paused) {
		gameState = paused ? PAUSED : INPLAY;
	}

	protected static void gameOver() {
		Menus.endGameScreen.setSuccess(false);
		endGame();
	}

	protected static void winGame() {
		Menus.endGameScreen.setSuccess(true);
		endGame();
	}

	protected static void endGame() {
		gameState = IDLE;
		PlayerShip.gameState = PlayerShip.ENDGAME;
		for (PlayerShip player : players)
			player.endGame();
		SpaceInvadersX.setMenuScreen(Menus.endGameScreen);
	}

}
