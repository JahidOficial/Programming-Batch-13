// Problem-4: Upcoming Gono Vote
function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid";
    }

    const countHa = array.filter(array => array === "ha").length;
    const countNa = array.filter(array => array === "na").length;

        if(countHa > countNa){
            return true;
        }else if(countHa < countNa){
            return false;
        }
        return "equal";
}

console.log(gonoVote(["ha","na","ha","ha"]));