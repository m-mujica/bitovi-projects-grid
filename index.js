import '@webcomponents/custom-elements#?needs-polyfill';
import './styles.css';

class BitProduct extends HTMLElement {
  constructor() {
    super();

    this.appendChild(this._makeLinkElement());
  }

  _makeLinkElement() {
    let link = document.createElement('a');

    link.href = this.getAttribute('data-url');
    link.appendChild(this._makeFigureElement());

    return link;
  }

  _makeFigureElement() {
    let figure = document.createElement('figure');


    figure.appendChild(this._makeImageElement());
    figure.appendChild(this._makeCaptionElement());

    return figure;
  }

  _makeImageElement() {
    let img = document.createElement('img');

    img.alt = this.getAttribute('data-name');
    img.src = this.getAttribute('data-img');
    img.className = 'product-img';

    return img;
  }

  _makeCaptionElement() {
    let caption = document.createElement('figcaption');

    caption.innerText = this.getAttribute('data-caption');
    return caption;
  }
}

customElements.define('bit-product', BitProduct);
