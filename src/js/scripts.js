// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  const prompt = "Please enter your name, or 'Exit' to quit: ";
  let name = await input(prompt);

  while (name !== "Exit") {
    output("Hello, " + name + "!");
    name = await input(prompt);
  }
}

// this is the correct code for assigment 1, I kept the old one for refrence and incase i got lost in the process hope that's okay !
async function main() {
  const prompt = "Please enter Your First Name: ";
  let firstName = await input(prompt);
    const prompt2 = "Please enter Your Last Name: ";
    let lastName = await input(prompt2);
      let myVar = firstName + " " + lastName;
  let fullName = myVar;
  fullName = fullName.replace("o", "a")
          const prompt3 = "Please enter a number larger than 10: ";
          let number = await input(prompt3);
            const prompt4 = "Please enter a number smaller than 10: ";
            let number2 = await input(prompt4);
              while (number <= 10) {
              number = await input(prompt3);
              number2 = await input(prompt4);
              number3 = number / number2;
              }
                
                  output("Hello, " + fullName + "!"
                  + " The result of " + number + " divided by " + number2 + " is " + (number / number2)
                  );
  
}
// all codes above this line have been tested locally on Chrome, Firefox as well as  Edge to make sure they work as intended. No errors came through the console and all functionalities work as intended.



