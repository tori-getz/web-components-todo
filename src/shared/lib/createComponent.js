export const createComponent = ({
  name,
  html,
  construct,
  connectedCallback,
}) => {
  const template = document.createElement('template');
  template.innerHTML = html;

  class Component extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      typeof construct === 'function' && construct({ self: this });
    }

    static componentName = name;

    static render(body = '') {
      return `
        <${name}>${body}</${name}>
      `;
    }

    connectedCallback() {
      if (!connectedCallback) return;
      
      connectedCallback({ self: this });
    }
  }

  window.customElements.define(name, Component);
  console.log(`${name}: registered!`);

  return Component;
};
