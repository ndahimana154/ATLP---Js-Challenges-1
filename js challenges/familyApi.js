// Define the asynchronous function
async function processFamilies(families) {
    try {
        // Iterate through each family object
        for (let family of families) {
            // Calculate the total number of family members
            const totalMembers = Object.keys(family).length;
            // Add totalNumberOfFamilyMembers to the family object
            family.totalNumberOfFamilyMembers = totalMembers;

            // Check if the father's name is Yves (case insensitive)
            if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
                // Throw an error if the father's name is Yves
                throw new Error('Yves is not an allowed dad in 2022');
            }

            // Log the family object to the console
            console.log(family);
        }
    } catch (error) {
        // Handle any thrown errors
        console.error('Error:', error.message);
    }
}

// Example array of family objects
const families = [
    { fatherName: 'John', motherName: 'Mary', childrenNumber: 2 },
    { fatherName: 'Yves', motherName: 'Anna', childrenNumber: 1 },
    { fatherName: 'Michael', motherName: 'Emily', childrenNumber: 3 }
];

// Invoke the asynchronous function
processFamilies(families);
