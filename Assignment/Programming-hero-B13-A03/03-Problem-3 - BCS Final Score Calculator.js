// Problem-3: BCS Final Score Calculator
function finalScore(omr) {
    const addScore = omr.right + omr.wrong + omr.skip;
    if(addScore === 100){
        const totalScore = omr.right + (omr.wrong * -0.5);
        return Math.round(totalScore);
    }
    return "Invalid";
}

console.log(finalScore({right: 67, wrong: 23, skip: 10}));