const template = document.createElement('template');

template.innerHTML = `
  <style>
  p {
    color: yellow;
    background-color: red;
    padding: 10px;
  }
  </style>
  <p>
    My template
    <slot name="my-slot">默认为本</slot>
  </p>
`
// <slot name="my-slot">默认为本</slot>


class MyTemplate extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-template', MyTemplate)