function compareTriplets(a, b) {
    var scoreAlice = 0;
    var scoreBob = 0;
    const finalScore = [];

    var aliceArray = [];
    var bobArray = [];

    const aliceEntry = (a) => {
        aliceArray.map(a => a)
    }
    const bobEntry = (b) => {
        bobArray.map(b => b)
    }
    for (var i = 0; i < aliceArray && i < bobArray; i++) {
        if (aliceArray[i] > bobArray[i]) {
            scoreAlice += 1;
        } if (aliceArray[i] < bobArray[i]) {
            scoreBob += 1;
        } else if (aliceArray[i] === bobArray[i]) {
            scoreAlice + 0
            scoreBob + 0
        }
    }

    finalScore.push(scoreAlice, scoreBob);
    
    }