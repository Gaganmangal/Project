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
  display() {
    console.log("display function call......");
  }
}

const p = new produect("iphone", 100000, 5);
console.log(p);
p.display();
produect.coustm();
