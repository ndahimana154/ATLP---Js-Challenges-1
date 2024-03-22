"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function processFamilies(families) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (let family of families) {
                const totalMembers = family.childrenNumber + 1;
                family.totalNumberOfFamilyMembers = totalMembers;
                if (family.fatherName.toLowerCase() === "yves") {
                    console.error("Yves is not an allowed dad in 2022");
                }
                console.log(family);
            }
        }
        catch (error) {
            console.log("Error:", error);
        }
    });
}
const families = [
    { fatherName: "John", motherName: "Mary", childrenNumber: 2 },
    { fatherName: "Yves", motherName: "Anna", childrenNumber: 1 },
    { fatherName: "Michael", motherName: "Emily", childrenNumber: 3 },
];
processFamilies(families);
