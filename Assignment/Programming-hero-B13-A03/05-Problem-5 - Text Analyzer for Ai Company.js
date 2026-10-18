// Problem-5: Text Analyzer for an AI Company
function analyzeText(str) {
    if(typeof str === "string" && str !== ""){
        const count = str.split(" ").join("").length;
        
        const words = str.split(" ");
        let longwords = "";

        for(const word of words){
            if(word.length > longwords.length){
                longwords = word;
            }
        }
        
        return {
            longwords: longwords,
            token: count
        };
    }
    return "Invalid";
}

console.log(analyzeText("I am a little honest person"));