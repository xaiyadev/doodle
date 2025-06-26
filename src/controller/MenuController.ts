export enum MenuState {
    OPEN,
    OPTIONS,
    CLOSED,
}

export default class MenuController {

    private readonly _el: HTMLElement;
    private _state: MenuState;

    constructor(
        el:HTMLElement = document.createElement('div'),
        state: MenuState = MenuState.CLOSED,
    ) {
        this._el = el;
        this._state = state;
    }

    open() {
        if (document.querySelector('#menu')) throw Error('There is already a menu open!');

        this._el.id = "menu";
        this._el.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        this._el.innerHTML = `
            <button class="buttons" id="start">Start</button>
            <button class="buttons" id="options">Options</button>
            <button class="buttons" id="close">close</button>
        `;

        /* Append Document to the app */
        document.querySelector('#app')?.before(this._el);
        this._registerEvents();
        this._state = MenuState.OPEN;
    }

    closeMenu() {
        this._state = MenuState.CLOSED;
        this._el.remove();
    }

    _registerEvents() {
        this.startButton.addEventListener('click', this._onStartButton.bind(this));
        this.optionsButton.addEventListener('click', this._onOptionButton.bind(this))
        this.closeButton.addEventListener('click', this._onCloseButton.bind(this))
    }

    _onStartButton() {
        window.dispatchEvent(new Event('menuStart'));

        this.closeMenu();
    }

    _onOptionButton() {
        alert('Options!');
        this._state = MenuState.OPTIONS;
    }

    _onCloseButton() {
        this._state = MenuState.CLOSED;
        this.closeMenu();
    }

    get state(): MenuState {
        return this._state;
    }

    get startButton() {
        const start: Element|null = this._el.querySelector('#start');
        if (!start) throw Error('Start button not found in Menu!')
        return start;
    }

    get optionsButton() {
        const options: Element|null = this._el.querySelector('#options');
        if (!options) throw Error('Options button not found in Menu!');
        return options;
    }

    get closeButton() {
        const close: Element|null = this._el.querySelector('#close');
        if (!close) throw Error('Close button not found in Menu!');
        return close;
    }
}