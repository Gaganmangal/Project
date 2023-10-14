class produect {
  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.rate = r;
  }
  display() {
    console.log("display function call......");
  }
}

const p = new produect("iphone", 100000, 5);
console.log(p);
p.display();