enum State {
    CLOSED = 0,
    OPEN = 1,
    OPTIONS = 2,
}

export default class {

    el: HTMLDivElement;
    state: State;

    constructor(
        state: State = State.OPEN,
        el:HTMLDivElement = document.createElement('div'),
    ) {
        this.el = el;
        this.state = state;

    }

    _registerEvents() {
        document.querySelector('#app > #menu > #start')
            ?.addEventListener('click', this._onStartButton.bind(this))

        document.querySelector('#app > #menu > #options')
            ?.addEventListener('click', this._onOptionButton.bind(this))

        document.querySelector('#app > #menu > #quit')
            ?.addEventListener('click', this._onQuitButton.bind(this))

    }


    openMenu(initial = false) {
        this.el.id = "menu";

        this.el.innerHTML = `
            <button class="buttons" id="start">Start</button>
            <button class="buttons" id="options">Options</button>
        `;

        if (initial) {
            this.el.innerHTML += `
                <button class="buttons" id="quit">Quit</button>
            `;
        }

        /* Append Document to the app */
        document.querySelector('#app')?.append(this.el)

        this.state = State.OPEN;
        this._registerEvents();
    }

    closeMenu() {
        this.state = State.CLOSED;
        this.el.remove();
    }

    _onStartButton() {
        alert('Starting!');
        this.closeMenu();
    }

    _onOptionButton() {
        alert('Options!');
    }

    _onQuitButton() {
        window.close();
    }

}