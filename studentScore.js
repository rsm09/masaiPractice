
let scores = [30, 55, 95, 60, 38, 91, 45, 82, 88, 22];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 40) {
        scores[i] += 20;
    } else if (scores[i] > 90) {
        scores[i] = 90;
    }
}

let count=0
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
        count++
    } 
}

console.log("New Scores: ", scores);
console.log("Pass count: ", count);
