import MenuController, {MenuState} from "./MenuController.ts";
import MiniGameController from "./MiniGames/MiniGameController.ts";
import CaptchaGame from "./MiniGames/CaptchaGame.ts";

export enum GameState {
    RUNNING,
    STOPPED
}

export default class {

    private _menu: MenuController;
    private _currentMiniGame: MiniGameController;
    private _state: GameState;

    constructor () {

        this._state = GameState.STOPPED;
        this._menu = new MenuController();
        this._currentMiniGame = new MiniGameController();

        this.init();
    }

    init() {
        this._menu.open();
        this._registerEvents();
    }

    _registerEvents() {
        window.addEventListener('menuStart', this.start.bind(this))

        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && this._menu.state === MenuState.CLOSED) this.stop()
        })
    }

    start() {
        this._currentMiniGame.load();
        this._state = GameState.RUNNING;

        setInterval(() => { this.updateMiniGame(new CaptchaGame())}, 5000)
    }

    stop() {
        this._menu.open();
        this._currentMiniGame.unload();

        this._state = GameState.STOPPED;
    }

     updateMiniGame(miniGame: MiniGameController) {
        this._currentMiniGame.element.style.display = "none";

        // transition
        let transitionRequest: number;
        let x: number = -220;

        let transitionEl = document.createElement('div');

        document.querySelector('#app')?.appendChild(transitionEl);
        let transition = () => {

            transitionRequest = requestAnimationFrame(transition.bind(this));
        };

        transition();


        this._currentMiniGame.unload();
        this._currentMiniGame = miniGame;
        this._currentMiniGame.load();

    }

    get CurrentMiniGame() {
        return this._currentMiniGame;
    }

    set CurrentMiniGame(miniGame: MiniGameController) {
        this._currentMiniGame = miniGame;
    }

}