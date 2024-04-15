import { render } from '../framework/render.js';
import FilterView from '../view/filter-view.js';

export default class FilterPresenter {
  #container = null;

  constructor({ container }) {
    this.#container = container;
  }

  init() {
    render(new FilterView(), this.#container);
  }
}
