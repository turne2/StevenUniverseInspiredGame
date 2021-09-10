let readlineSync = require('readline-sync');

console.log("You wake up startled, in a place you dont really recognize. Although the space is new to you, you can feel a welcoming prescence nearby. A small boy approaches you. He has a red shirt, with a yellow star, thick curly dark hair, and what seems like stars in his eyes. ")

var userName = readlineSync.question('Small boy: WOAH! Who are you!? ');
console.log('Small boy:' + 'Hi ' + userName + '!' + ' ' + 'My'+ ' ' + 'Name' + ' ' + 'is' + ' ' + 'Steven' + '!' );
console.log("You are still very confused about how you got here, but he seems harmless. Its not like hes an alien or something. I doubt talking to him is going to do any harm. Also, its been a few seconds, you should probably do something now.");

console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: get some food, defeat the evil gems, go on an adventure " );
switch(option) {
  case "get some food":
    console.log( "Steven: I know what we can eat! awwwwwwww COOOKIE CAAAAT, hes a treat for your tummy! Cookie Cat, hes super duper yummy!" );
    console.log("You are genuinely hungry, but what the heck is Cookie Cat. I guess anything is better than nothing. He pulls out an icecream bar for both of us and starts to eat it.")
    break;
  case "defeat the evil gems":
    console.log( "Steven *singing*: If youre evil, and youre on the rise You can count on the four of us taking you down Cause were good and evil never beats us Well win the fight and then go out for pizzas " );
    break;
  case "go on an adventure":
    console.log( "Steven: Wait, lets have some food first! " );
    break;
  default: 
    console.log( "Steven: I have some food if youd like some" + username );
    console.log( "Steven: AWH YEAH!");
}

var favShow = readlineSync.question('Steven: So, whats your favorite TV show? ', {
   
});
console.log('Steven:' + 'Oh' + ' ' + 'wow!'  + ' ' + 'you' + ' love ' + ' ' + favShow + ' ' + 'too?!' + ' ');

console.log ( "Suddenly, you both hear a loud noise from outside. You would like to ignore it, but Steven has other plans.")

console.log( "Whats the best option here?" );

let option2 = readlineSync.question( "Options: ignore it, investigate, question the stars in his eyes " );
switch(option2) {
  case "ignore it":
    console.log( "Steven: aw come on what if something bad is happening?! " );
    console.log("At this point youve already finished your food. helping whoever is in trouble is the least you can do. ")
    break;
  case "investigate":
    console.log( "Steven: Awesome! Ill call up the crystal gems, theyll be sure to help out! " );
    break;
  case "question the stars in his eyes":
    console.log( "Steven: Ill explain that later, Lets go! " );
    break;
  default: 
    console.log( "Steven: We don't have time for thinking...lets go!" );
    console.log( "Steven: AWH YEAH!");
}

console.log("To be continued...")

 