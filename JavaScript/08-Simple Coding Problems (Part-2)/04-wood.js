// chair = 3 cft
// table = 10 cft
// bed = 50 cft

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairTotalWood = chairQuantity * perChair;
    const tableTotalWood = tableQuantity * perTable;
    const bedTotalWood = bedQuantity * perBed;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return {
        totalWood,
        chairTotalWood,
        tableTotalWood,
        bedTotalWood
    };
}

const wood = woodQuantity(4, 3, 7);
console.log("Total wood for chair: ", wood.chairTotalWood);
console.log("Total wood for table: ", wood.tableTotalWood);
console.log("Total wood for bed: ", wood.bedTotalWood);

console.log("Wood needed: ", wood.totalWood);