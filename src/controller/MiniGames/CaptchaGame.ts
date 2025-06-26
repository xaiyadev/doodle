// Small mini-game
// This Game simply wants you to solve a simple captcha
// e.g. pick the right picture or turn object into the right placement

import MiniGameController from "./MiniGameController.ts";
import Player, {Movement} from "../Player.ts";

export default class CaptchaGame extends MiniGameController {

    constructor() {
        super("Captcha", new Player(Movement.MOUSE));
    }

    load() {
        // Centered div
        // this div has form of captcha field
        // clickable 3x3 grid
        // Check which one is, colored

        this.element.innerHTML = `
            <div>Hello World!</div>
        `;

        super.load();
    }
}