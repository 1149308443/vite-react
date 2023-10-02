class ComponentsDiv extends HTMLElement {
  static get observedAttributes() {
      return ['class'];
  }
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: 'open' });
    // const shadow = this.attachShadow({ mode: 'close' });
    const dom = document.createElement('div');
    const style = document.createElement('style');
    dom.textContent = 'components-div';
    style.textContent = `
      div {
        color: red;
      }
      .bule{
        color: blue;
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(dom);
  }


  //组件生命周期函数
  connectedCallback() {
    console.log('自定义组件添加到页面');
  }
  disconnectedCallback() {
    console.log('自定义组件从页面移除');
  }
  adoptedCallback() {
    console.log('自定义组件移动到新的文档时');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('自定义组件的属性改变了', name, oldValue, newValue);
  }
}

/**
 * @description 注册组件
 * */
customElements.define('components-div', ComponentsDiv)
