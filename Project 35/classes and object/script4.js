class complexnumber {
  #real;
  #imeg;
  constructor(r, i) {
    this.#real = r;
    this.#imeg = i;
  }
  get real() {
    return this.#real;
  }
  get imeg() {
    return this.#imeg;
  }
  display() {
    console.log(this.#real, "+", this.#imeg, "i");
  }
  addnumber(c) {
    this.#real += c.real;
    this.#imeg += c.imeg;
  }
}

const c1 = new complexnumber(10, 20);
c1.display();
const c2 = new complexnumber(20, 10);
c2.display();
c1.addnumber(c2)
c1.display();
