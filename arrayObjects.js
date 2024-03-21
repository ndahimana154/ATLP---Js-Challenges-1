function organizeByGender(peopleArray) {
  // Initialize empty objects for males and females
  const result = {
    male: [],
    female: [],
  };

  // Iterate through each person's identity string in the input array
  for (const person of peopleArray) {
    // Split the string into parts using the comma as a delimiter
    const [fullName, age, gender] = person
      .split(",")
      .map((part) => part.trim());

    // Extract first name and second name from the full name
    const [firstName, secondName] = fullName.split(" ");

    // Create an object representing the person's information
    const personInfo = {
      "second-name": secondName,
      age: parseInt(age), // Convert age string to a number
      gender: gender.toLowerCase(), // Ensure gender is lowercase for consistency
    };

    // Check the gender and push the person's info to the corresponding array
    if (personInfo.gender === "male") {
      result.male.push({ "first-name": firstName, ...personInfo });
    } else if (personInfo.gender === "female") {
      result.female.push({ "first-name": firstName, ...personInfo });
    }
  }

  // Return the result object containing arrays for males and females
  return result;
}

// Example usage:
const peopleArray = [
  "Hello Lee,19,female",
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21, male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10, male",
  "Patrick wyne, 40, male",
];

const organized = organizeByGender(peopleArray);
console.log(organized);
