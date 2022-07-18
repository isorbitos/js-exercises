const task1 = () => {
  const firstName = "Arnold";
  const lastName = "Shvarcneger";

  console.log(firstName.length);
  console.log(firstName.length < lastName.length ? firstName : lastName);
};

const task2 = () => {
  const firstName = "Arnold";
  const lastName = "Shvarcneger";

  console.log(firstName.toUpperCase() + " " + lastName.toLowerCase());
};

const task3 = () => {
  const firstName = "Arnold";
  const lastName = "Shvarcneger";
  const initials = firstName[0] + lastName[0];

  console.log(initials);
};

const task4 = () => {
  const firstName = "Arnold";
  const lastName = "Shvarcneger";

  const lastLetters =
    firstName.substring(firstName.length - 3) +
    lastName.substring(lastName.length - 3);

  console.log(lastLetters);
};

const task5 = () => {
  const america = "An American in Paris";
  const paris = america.replace(/[Aa]/g, "*");
  console.log(paris);
};

const task06 = () => {
  const movies = [
    "Breakfast at Tiffany's",
    "2001: A Space Odyssey",
    "It's a Wonderful Life",
  ];
  movies.map((m) => console.log(m.replace(/[aeiouyAEIOUY]/g, "")));
};

const task07 = () => {
  const movie =
    "Star Wars: Episode " +
    " ".repeat(Math.ceil(Math.random() * 10)) +
    (Math.ceil(Math.random() * 7) + 1) +
    " - A New Hope";

  const movieArray = movie.split(" ").filter((item) => item);
  console.log(movieArray[3]);
};

const task08 = () => {
  enName =
    "Don't Be a Menace to South Central While Drinking Your Juice in the Hood".split(
      " "
    );
  ltName =
    "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale".split(
      " "
    );

  enCounter = 0;
  enName.forEach((element) => {
    if (element.length < 5) {
      enCounter += 1;
    }
  });
  console.log(enCounter);

  ltCounter = 0;
  ltName.forEach((element) => {
    if (element.length < 5) {
      ltCounter += 1;
    }
  });
  console.log(ltCounter);
};

const task09 = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let mysteriousWord = "";
  for (let i = 0; i < 3; i++) {
    mysteriousWord += letters[Math.floor(Math.random() * letters.length)];
  }
  console.log(mysteriousWord);
};

const task10 = () => {
  let words = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale".split(" ");
  let randomWords =  words.sort(() => Math.random()-0.5).slice(0,10);
  console.log(randomWords.join(' '))

};

// task2();
// task3();
// task4();
// task5();
// task06();
// task07();
// task08();
// task09();
// task10();