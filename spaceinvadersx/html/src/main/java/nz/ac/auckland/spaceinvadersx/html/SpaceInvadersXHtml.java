package nz.ac.auckland.spaceinvadersx.html;

import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlPlatform;
import playn.html.HtmlGraphics;
import playn.html.HtmlCanvas;
import playn.html.HtmlImage;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;
import nz.ac.auckland.spaceinvadersx.core.SpaceInvadersX;
import nz.ac.auckland.spaceinvadersx.graphics.Toolkit;

public class SpaceInvadersXHtml implements EntryPoint {

  @Override public void onModuleLoad () {
    HtmlPlatform.Config config = new HtmlPlatform.Config();
    config.experimentalFullscreen = true;
    HtmlPlatform plat = new HtmlPlatform(config);
    plat.assets().setPathPrefix("spaceinvadersx/");
    HtmlCanvasCreator cc = new HtmlCanvasCreator(plat.graphics());
    new SpaceInvadersX(plat, cc, new HtmlFullScreener());
    plat.start();
  }

  static class HtmlCanvasCreator implements Toolkit.CanvasCreator {
    private final Graphics graphics; 
    
    HtmlCanvasCreator(Graphics graphics) {
      this.graphics = graphics;
    }

    public Canvas createCanvas(int pixelWidth, int pixelHeight) {
      CanvasElement elem = Document.get().createCanvasElement();
      elem.setWidth(pixelWidth);
      elem.setHeight(pixelHeight);
      return new HtmlCanvas(graphics, new HtmlImage(graphics, Scale.ONE, elem, "<canvas>"));
    }
  }

  static class HtmlFullScreener implements SpaceInvadersX.FullScreener {

    public void toggleFullScreen() {
      if (isFullScreen()) disableFullScreen();
      else enableFullScreen();
    }

    public native void enableFullScreen() /*-{
      var p = parent.document.getElementById('playn-root');
      if (p.requestFullScreen) p.requestFullScreen();
      else if (p.webkitRequestFullScreen) p.webkitRequestFullScreen();
      else if (p.mozRequestFullScreen) p.mozRequestFullScreen();
    }-*/;

    public native void disableFullScreen() /*-{
      var d = parent.document;
      if (d.exitFullScreen) d.exitFullScreen();
      else if (d.webkitCancelFullScreen) d.webkitCancelFullScreen();
      else if (d.mozCancelFullScreen) d.mozCancelFullScreen();
    }-*/;

    public native boolean isFullScreen() /*-{
      var d = parent.document;
      return d.isFullScreen || d.webkitIsFullScreen || d.mozIsFullScreen || false;
    }-*/;
      
  }
}
