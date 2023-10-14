class produect {
  #rate;
  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.#rate = r;
  }
  static coustm() {
    console.log("static metod call......");
  }

  get getter() {
    console.log(this.#rate);
  }
  set setter(r) {
    if (r > 0) {
      this.#rate = r;
    } else {
      return;
    }
  }

  display() {
    console.log("display function call......");
  }
}

const p = new produect("iphone", 100000, 5);
console.log(p);
// p.setter = 10;
// p.getter;
// p.display();
produect.coustm();
