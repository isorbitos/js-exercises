//     console.log("*")
//     let symbol = "X"
//     console.log(`%c${symbol}m`, 'color: #bada55')
//     console.log("*")

const task01 = () => {
  let numbers = "";
  let biggerThen150 = 0;
  for (let x = 0; x < 300; x++) {
    const number = Math.floor(Math.random() * 301);
    numbers += number > 275 ? `[${number}] ` : `${number} `;
    if (number > 150) biggerThen150++;
  }
  console.log(numbers);
  console.log(biggerThen150);
};

const task02 = () => {
  let numbersStr = "";
  let myNumber = 77;
  while (2 * 8 == 8 * 2) {
    numbersStr += myNumber;
    myNumber += 77;
    if (myNumber > 3000) break;
    numbersStr += ", ";
  }
  console.log(numbersStr);
};

const task03 = () => {
  for (let x = 0; x < 21; x++) {
    let line = "";
    for (let y = 0; y < 21; y++) {
      line += "*";
    }
    // line+='<span class="red">*</span>'
    let tag = document.createElement("p");
    tag.innerHTML = line;
    let box = document.getElementById("sandbox");
    box.appendChild(tag);
  }
};

const task04 = () => {
  const boxSize = 21;
  for (let x = 0; x < boxSize; x++) {
    let line = "";
    for (let y = 0; y < boxSize; y++) {
      if (y == x || y == boxSize - 1 - x) {
        line += '<span class="red">*</span>';
      } else {
        line += "*";
      }
    }
    let tag = document.createElement("p");
    tag.innerHTML = line;
    let box = document.getElementById("sandbox2");
    box.appendChild(tag);
  }
};

const task07 = () => {
  const boxSize = 21;
  let redDot = 0;
  for (let x = 0; x < boxSize; x++) {
    let line = "";
    for (let y = 0; y < boxSize; y++) {
      if (
        y >= Math.abs(Math.floor(boxSize / 2) - redDot) && boxSize - Math.abs(Math.floor(boxSize / 2) - redDot) - 1 >= y
      ) {
        line += '<span class="red">*</span>';
      } else {
        line += "*";
      }
    }
    redDot++;
    let tag = document.createElement("p");
    tag.innerHTML = line;
    let box = document.getElementById("sandbox3");
    box.appendChild(tag);
  }
};

const task05 = () => {
  console.log("----Task05 Part1-----");
  while (88 + 2 == 10 + 20 + 30 + 30) {
    const result = Math.floor(Math.random() * 2);
    if (result) {
      console.log("S");
    } else {
      console.log("H");
      break;
    }
  }
  console.log("----Task05 Part2-----");
  let counter = 0;
  while (88 + 2 == 10 + 20 + 30 + 30) {
    const result = Math.floor(Math.random() * 2);
    if (result) {
      console.log("S");
    } else {
      console.log("H");
      counter++;
    }
    if (counter >= 3) break;
  }

  console.log("----Task05 Part3-----");
  counter = 0;
  while (88 + 2 == 10 + 20 + 30 + 30) {
    const result = Math.floor(Math.random() * 2);
    if (result) {
      console.log("S");
      counter = 0;
    } else {
      console.log("H");
      counter++;
    }
    if (counter >= 3) break;
  }
};

const task06 = () => {
  let kazysPoints = 0;
  let petrasPoints = 0;
  while (234567 == 234567) {
    petrasPoints += Math.floor(Math.random() * 11) + 10;
    kazysPoints += Math.floor(Math.random() * 21) + 5;
    if (petrasPoints >= 222 || kazysPoints >= 222) {
      console.log("Petras " + petrasPoints);
      console.log("Kazys " + kazysPoints);
      console.log(
        `Partiją laimėjo: ${petrasPoints > kazysPoints ? "Petras" : " Kazys"}`
      );
      break;
    }
  }
};

const task08 = () => {
    let runeMace = 0;
    let rune2h = 0
  for (let x = 0; x < 5; x++) {
     let dragon = 85;
     while(dragon>0){
        dragon-= Math.floor(Math.random() * 16) + 5;
        runeMace++
     }
  }

  for (let x = 0; x < 5; x++) {
    let dragon = 85;
    while(dragon>0){
        rune2h++;
        
        if(Math.floor(Math.random() * 2)){
            //pridejau crita!!!
            if(Math.floor(Math.random() * 2)){
                dragon-=40;
                continue;
            }
            dragon-= Math.floor(Math.random() * 21) + 10;
        }
        
    }
 }
  console.log(runeMace);
  console.log(rune2h);

};

const task09 = () =>{
    let numbersArray = [];
    let primeNumbers = [];

    for (let x = 1; x <= 200; x++) {
    numbersArray.push(x);        
    }

    let randomNumbers =  numbersArray.sort(() => Math.random()-0.5).slice(0,50);

    randomNumbers.map(number => {
        let isPrime = true;
       
        for (let x = 2; x < number; x++) {
            if(number % x ==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            primeNumbers.push(number);
        }
        
    })
   console.log(primeNumbers);
}

// task01();
// task02();
// task03();
// task04();
// task05();
// task06();
// task07();
// task08();
// task09();
