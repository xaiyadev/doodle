import MenuController from "./MenuController.ts";

export default class {

    private readonly level: number
    private menu: MenuController;

    constructor (
        menu = new MenuController(),
        level: number = 0,
    ) {
        this.level = level;
        this.menu = menu;

        this.menu.openMenu(true);
    }

    start() {
        this.menu.closeMenu();
    }
}