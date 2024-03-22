"use strict";
function filterByGender(personsArray) {
    const result = {
        male: [],
        female: [],
    };
    for (const person of personsArray) {
        var [fullNames, age, gender] = person
            .split(",")
            .map((part) => part.trim());
        const [firstname, secondname] = fullNames.split(" ");
        const personsInfo = {
            "First-name": firstname,
            "Second-name": secondname,
            age: parseInt(age),
            "gender": gender.toLowerCase(),
        };
        if (personsInfo.gender == "male")
            result.male.push(personsInfo);
        else
            result.female.push(personsInfo);
    }
    return result;
}
const People = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21,male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10,male",
    "Patrick wyne, 40,male",
];
console.log(filterByGender(People));
