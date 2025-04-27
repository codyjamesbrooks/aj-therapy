import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static classes = ['open']
  static targets = ['menu', 'nav']

  toggle(e) {
    e.preventDefault()

    const isOpen = this.element.classList.contains(this.openClass)

    if (!isOpen) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.element.classList.add(this.openClass)

    let menu = this.menuTarget.cloneNode(true);
    this.element.appendChild(menu);
  }

  close() {
    this.element.classList.remove(this.openClass)

    let menuClone = this.menuTargets.pop();
    this.element.removeChild(menuClone);
  }
}
