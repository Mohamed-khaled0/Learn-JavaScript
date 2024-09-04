// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  let gameName = Object.keys(myFavGames)[i];
  let game = myFavGames[gameName];

  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  // Check If Nested Object Has Property (bestThree)
  if (game.hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
  console.log("#".repeat(20));
}
