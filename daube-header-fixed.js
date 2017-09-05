const template = document.createElement('template');
template.innerHTML = `
  <style>

    :host {
      display: block;
      font-size: 1rem;
      font-family: Helvetica, Verdana, sans-serif;
      color: rgba(0,0,0,0.87);
      margin: 0;
      padding: 0;

    :host([hidden]) {
      display: none;
    }

    header {
      display: inline-block;
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #237d32;
      color: rgba(255,255,255,0.81);
      height: 3.5rem;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .daubemaintitle {
      padding: 0.92rem 0rem 0.92rem 1.5rem;
      font-weight: 200;
      font-size: 1.66rem;
      height: 3.5rem;
    }

  </style>
  <header>
    <div class="daubemaintitle">Header</div>
    <slot></slot>
  </header>
  `

if (window.ShadyCSS) {
  ShadyCSS.prepareTemplate(template, 'daube-header-fixed');
}

class DaubeHeaderFixed extends HTMLElement {
  static get observedAttributes() {}
  constructor() {
    super();
    
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }
} // Class CustomElement
customElements.define("daube-header-fixed", DaubeHeaderFixed);