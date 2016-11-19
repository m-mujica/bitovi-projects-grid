import 'document-register-element#?needs-polyfill';
import './styles.css';

function BitProduct() {
  return Reflect.construct(HTMLElement, arguments, BitProduct);
}

BitProduct.prototype = Object.create(HTMLElement.prototype);
BitProduct.prototype.constructor = BitProduct;

BitProduct.prototype.connectedCallback = function() {
  this.appendChild(this._makeLinkElement());
};

BitProduct.prototype._makeLinkElement = function() {
  let link = document.createElement('a');

  link.href = this.getAttribute('data-url');
  link.appendChild(this._makeFigureElement());

  return link;
};

BitProduct.prototype._makeFigureElement = function() {
  let figure = document.createElement('figure');


  figure.appendChild(this._makeImageElement());
  figure.appendChild(this._makeCaptionElement());

  return figure;
};

BitProduct.prototype._makeImageElement = function() {
  let img = document.createElement('img');

  img.alt = this.getAttribute('data-name');
  img.src = this.getAttribute('data-img');
  img.className = 'product-img';

  return img;
};

BitProduct.prototype._makeCaptionElement = function() {
  let caption = document.createElement('figcaption');

  caption.innerText = this.getAttribute('data-caption');
  return caption;
};

customElements.define('bit-product', BitProduct);
