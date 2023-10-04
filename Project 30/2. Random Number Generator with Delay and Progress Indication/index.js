let delay = 3;

const counte = setInterval(() => {
  if (delay === 0) {
    let number = parseInt(Math.random() * 100 + 1);
    console.log(`Random Number : ${number}`);
    clearInterval(counte);
  } else {
    console.log(
      `Remaining Time in seconds to generate Random Number...${delay}seconds`
    );
    delay--;
  }
}, 1000);
