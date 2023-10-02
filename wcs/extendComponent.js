class MyCustom extends HTMLParagraphElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      alert('hello world')
    })

  //   const shadow = this.attachShadow({ mode: 'open' });
  //   const dom = document.createElement('div');
  //   const style = document.createElement('style');
  //   dom.textContent = 'components-div';
  //   style.textContent = `
  //   div {
  //     color: red;
  //   }
  // `;
  //   shadow.appendChild(style);
  //   shadow.appendChild(dom);
  }
}
customElements.define('my-custom', MyCustom, { extends: 'p' });