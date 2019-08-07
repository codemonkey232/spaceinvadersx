package nz.ac.auckland.spaceinvadersx.game;

import nz.ac.auckland.spaceinvadersx.graphics.*;

public class FadeEffect extends Sprite {

	protected int fadeTicks;
	protected double startScale, endScale;
	protected double alpha, scale;

	public FadeEffect(Image image, double x, double y, int fadeTicks, double startScale, double endScale) {
		super(image, x, y);
		this.fadeTicks = fadeTicks;
		this.startScale = startScale;
		this.endScale = endScale;
		tickFadeEffect();
	}

	public void tick() {
		tickSprite();
		if (tickFadeEffect())
			dead = true;
	}

	boolean tickFadeEffect() {
		alpha = Math.max(1.0 - 1.0 * ageTicker / fadeTicks, 0);
		scale = alpha * alpha;
		scale = scale * startScale + (1 - scale) * endScale;
		return (ageTicker > fadeTicks);
	}

	public void draw(Graphics g) {
		g.drawImage(image, x, y, true, true, 0, scale, scale, alpha);
	}
}
