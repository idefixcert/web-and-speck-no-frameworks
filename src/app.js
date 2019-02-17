import Greeter from './greeter.js'
class WebAndSpeck extends HTMLElement {
    constructor() {
        super();
        this.greeter = new Greeter();
    }
    connectedCallback() {
        this.loadOrganizer();
    }
    async loadOrganizer() {
        const request = await fetch('./organizer.json');
        const { name } = await request.json();
        this.innerHTML = `
        <h2>${this.getAttribute("prefix")} ${name}</h2>
        <p>${this.greeter.greet()}</p>
        `;
    }
}
customElements.define("web-and-speck", WebAndSpeck)