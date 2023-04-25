import { Stage, game, ColorLayer, BitmapText  } from 'melonjs';

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a gray background to the default Stage
        game.world.addChild(new ColorLayer("background", "#202020"));
    }
};

export default PlayScreen;
