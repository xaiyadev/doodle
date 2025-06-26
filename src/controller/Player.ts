export enum Movement {
    KEYBOARD,
    ARROW_KEYS,
    KEYBOARD_MOUSE,
    MOUSE,
}

// Player should not be called in the renderer but in a game instead
// Because the player can variate from the current game
export default class Player {

    private _el: HTMLElement;
    private _movement: Movement;

    constructor(
        movement: Movement = Movement.KEYBOARD,
        element: HTMLElement = document.createElement('div')
    ) {
        this._movement = movement;
        this._el = element;
    }

    render() {
        requestAnimationFrame(() => {
            this._registerPlayerMovement();
        })

        document.querySelector('#app')?.append(this.element);
    }

    unloadPlayer() {
        this._el.remove();
    }

    _registerPlayerMovement() {
        switch (this._movement) {
            case Movement.KEYBOARD:

                break;
            case Movement.MOUSE:

                break;
            case Movement.ARROW_KEYS:

                break;
            case Movement.KEYBOARD_MOUSE:

                break;
            default:
                throw Error('You specified a wrong movement type!');
        }
    }

    get element() {
        return this._el;
    }

    set element(el: HTMLElement) {
        this._el = el;
    }

    get movement() {
        return this._movement;
    }

    set movement(movement: Movement) {
        this._movement = movement;
    }




}