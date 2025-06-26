import Player from "../Player.ts";

export default class MiniGameController {

    private _player: Player;
    private _name: string;
    private _el: HTMLElement;

    constructor (
        name: string = "",
        player: Player = new Player(),
        el: HTMLElement = document.createElement('div'),
    ) {
        this._name = name;
        this._player = player;
        this._el = el;
    }

    load() {
        this._el.id = this.name;

        document.querySelector('#app')?.append(this._el);
    }

    unload() {
        this._el.remove();

    }


    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get element() {
        return this._el;
    }

    set element(el: HTMLElement) {
        this._el = el;
    }

    get player() {
        return this._player;
    }

    set player(player: Player) {
        this._player = player;
    }
}