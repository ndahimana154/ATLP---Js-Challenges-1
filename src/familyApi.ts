interface Family {
  fatherName: string;
  motherName: string;
  childrenNumber: number;
  totalNumberOfFamilyMembers?: number;
}

async function processFamilies(families: Family[]): Promise<void> {
  try {
    for (let family of families) {
      const totalMembers: number = family.childrenNumber + 1;
      family.totalNumberOfFamilyMembers = totalMembers;
      if (family.fatherName.toLowerCase() === "yves") {
        console.error("Yves is not an allowed dad in 2022");
      }

      console.log(family);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
const families: Family[] = [
  { fatherName: "John", motherName: "Mary", childrenNumber: 2 },
  { fatherName: "Yves", motherName: "Anna", childrenNumber: 1 },
  { fatherName: "Michael", motherName: "Emily", childrenNumber: 3 },
];

processFamilies(families);
