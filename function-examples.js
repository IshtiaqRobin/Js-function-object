function getAvarage(assingment1, assigment2, assigment3) {
    const total = assingment1 + assigment2 + assigment3;
    const avarage = total / 3;
    return avarage;
}

const assigment1Marks = 60;
const assigment2Marks = 58;
const assigment3Marks = 55;

var myAvarage = getAvarage(assigment1Marks, assigment2Marks, assigment3Marks);
console.log('my avarage marks: ', myAvarage);
