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
    }

    :host([hidden]) {
      display: none;
    }

    header {
      display: inline-block;
      width: 100%;
      position: fixed;
      top: 0;
      background-color: #237d32;
      color: rgba(255,255,255,0.92);
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
  static get observedAttributes() {
    return ['headercolor']
  }

  get headercolor() {
    return this._headercolor;
  }

  set headercolor(v) {
    if (this._headercolor === v) return;
      this._headercolor = v;
      this.setAttribute('headercolor', v);
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const hasValue = newValue !== null;

    switch (name) {
      case 'headercolor':
        this.processHeaderColor();
        break;
    }
  }

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

  processHeaderColor() {
    var daubeHeader = this.shadowRoot.querySelector('header');

    if (this.hasAttribute('headercolor')) {
      daubeHeader.style.backgroundColor = this.getAttribute('headercolor');
    } else {
      daubeHeader.style.removeProperty('background-color');
    }
  }

} // Class CustomElement
customElements.define("daube-header-fixed", DaubeHeaderFixed);