for (i = 1; i <= 7; i++){
    console.log(i);
  }
  
  console.log(`******************`);
  
  for(i = 6; i <= 26; i += 4){
    console.log(i);
  }
  
   const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  for (name of wizards){
    console.log(name);
  }
  
  let harryPotterMovies = 0;
  
  while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
  }
  
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];
  
  for (houses of hogwartsHouses){
    for (letters of houses){
      console.log(letters);
    }
  }
  
  const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
  ];
  
  let message = "";
  for (word of quote){
    message = message + `${word} `;
  }
  console.log(message);