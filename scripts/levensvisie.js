const questions = {
  1: "Ga midden op straat de vogeltjesdans doen",
  2: "Lik de vloer",
  3: "Laat water over je hoofd gooien",
  4: "Laat door iedereen kappersklap of kontjeknal doen",
  5: "Stel je voor aan een vreemde",
  6: "Eet een lepel hete saus",
  7: "Kies met je ogen dicht iemand uit je contacten lijst en stuur hem/haar een bericht naar keuze van de rest",
  8: "Zing keihard een k3 liedje",
  9: "Mix 5 verschillende dranken naar keuze van de rest en drink het op",
  10: "Ren een rondje en schreeuw zo hard als je kan",
  11: "Laat een snor tekenen op je gezicht",
  12: "Bind je vingers bij elkaar met plakband en houd dit zo voor de rest van de dag",
  13: "Ga op de grond liggen en doe een vis na",
  14: "Doe nagellak op, als dit niet mogelijk is dobbel dan opnieuw",
  15: "Knip een stukje van je haar af",
  16: "Vertel je grootste gehiem in de groepsapp",
  17: "Laat iemand je kapsel veranderen voor de rest van de dag",
  18: "Loop in je blote bast voor 10 minuten",
  19: "Doe alsof je een scheet laat met een vreemde erbij",
  20: "Probeer iemands nummer te fixen, als het lukt krijg je een dobbel skip",
  21: "Je bent veilig!",
  22: "Belletje lel",
  23: "Ga naar een slager ofzo en vraag om iets wat de rest mag bepalen",
  24: "Draag voor de rest van de dag een hoodie verkeerd om",
  25: "Doe je schoenen verkeerd om aan voor een half uur",
  26: "Ga op de fiets door de mc drive en vraag om een komkommer",
};

const button = document.getElementById("button");
function random() {
  const output = document.getElementById("output");

  const randomIndex = Math.floor(Math.random() * 26) + 1;

  const randomQuestion = questions[randomIndex];

  console.log(randomQuestion);

  output.innerHTML = randomIndex + ": " + randomQuestion;
}

button.addEventListener("click", random);
