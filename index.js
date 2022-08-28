import ancientsData from './data/ancients.js'
import difficulties from './data/difficulties.js';
import cards from './data/mythicCards/index.js';

// console.log(ancientsData);
// console.log(difficulties);
// console.log(cards);

const ancientsContainer = document.querySelector('.ancients-container');
const difficultyContainer = document.querySelector('.difficulty-container');

let deck;
let ancientNumber;
let difficultyNumber;
let firstLine;
let secondLine;
let thirdLine;

ancientsContainer.addEventListener('click', containerClick);
difficultyContainer.addEventListener('click', difficultyContainerClick);

function containerClick(event) {
    // console.log(event);
    const element = event.target;
    toggleClass(element);
};

function difficultyContainerClick(event) {
    // console.log(event);
    const element = event.target;
    toggleDifficultyClass(element);
};

function toggleDifficultyClass(element) {
    for (let i = 0; i < difficultyContainer.children.length; i++) {
        difficultyContainer.children[i].classList.remove('active')
      }
    element.classList.add('active');
    // console.log(element.ariaLabel);
    difficultyNumber = element.ariaLabel;
    deck = getDeck();

    // firstLine = ancientsData[ancientNumber].firstStage.greenCards+ancientsData[ancientNumber].firstStage.blueCards+ancientsData[ancientNumber].firstStage.brownCards;
    // secondLine = ancientsData[ancientNumber].secondStage.greenCards+ancientsData[ancientNumber].secondStage.blueCards+ancientsData[ancientNumber].secondStage.brownCards;
    // thirdLine = ancientsData[ancientNumber].thirdStage.greenCards+ancientsData[ancientNumber].thirdStage.blueCards+ancientsData[ancientNumber].thirdStage.brownCards;

    
    

    // const dotsGreen = document.querySelectorAll('.dot.green');
    // const dotsBrown = document.querySelectorAll('.dot.brown');
    // const dotsBlue = document.querySelectorAll('.dot.blue');

    // console.log(ancientNumber)

    // dotsGreen[0].innerHTML(ancientsData[ancientNumber].firstStage.greenCards);
    // dotsGreen[1].innerHTML(ancientsData[ancientNumber].secondStage.greenCards);
    // dotsGreen[2].innerHTML(ancientsData[ancientNumber].thirdStage.greenCards);
    // пока рано это делать
    // deck = getDeck();
    // console.log(deck);
    
    // countCardsFirst();
};


function toggleClass(element) {
    for (let i = 0; i < ancientsContainer.children.length; i++) {
        ancientsContainer.children[i].classList.remove('active')
      }
    element.classList.add('active');0
    // console.log(element.ariaLabel);
    ancientNumber = element.ariaLabel;
    firstLine = ancientsData[ancientNumber].firstStage.greenCards+ancientsData[ancientNumber].firstStage.blueCards+ancientsData[ancientNumber].firstStage.brownCards;
    secondLine = ancientsData[ancientNumber].secondStage.greenCards+ancientsData[ancientNumber].secondStage.blueCards+ancientsData[ancientNumber].secondStage.brownCards;
    thirdLine = ancientsData[ancientNumber].thirdStage.greenCards+ancientsData[ancientNumber].thirdStage.blueCards+ancientsData[ancientNumber].thirdStage.brownCards;

    
    

    // const dotsGreen = document.querySelectorAll('.dot.green');
    // const dotsBrown = document.querySelectorAll('.dot.brown');
    // const dotsBlue = document.querySelectorAll('.dot.blue');

    // console.log(ancientNumber)

    // dotsGreen[0].innerHTML(ancientsData[ancientNumber].firstStage.greenCards);
    // dotsGreen[1].innerHTML(ancientsData[ancientNumber].secondStage.greenCards);
    // dotsGreen[2].innerHTML(ancientsData[ancientNumber].thirdStage.greenCards);
    // пока рано это делать
    // deck = getDeck();
    // console.log(deck);
    
    countCardsFirst();
};

function getDeck () {

const lineUp = [];
lineUp[0] = ancientsData[ancientNumber].firstStage;
lineUp[1] = ancientsData[ancientNumber].secondStage;
lineUp[2] = ancientsData[ancientNumber].thirdStage;

const lineUpStaticGreen = ancientsData[ancientNumber].firstStage.greenCards + ancientsData[ancientNumber].secondStage.greenCards + ancientsData[ancientNumber].thirdStage.greenCards;

const lineUpStaticBlue = ancientsData[ancientNumber].firstStage.blueCards + ancientsData[ancientNumber].secondStage.blueCards + ancientsData[ancientNumber].thirdStage.blueCards;

const lineUpStaticBrown = ancientsData[ancientNumber].firstStage.brownCards + ancientsData[ancientNumber].secondStage.brownCards + ancientsData[ancientNumber].thirdStage.brownCards;

// console.log(lineUp);

// console.log(ancientsData[ancientNumber].firstStage.greenCards, ancientsData[ancientNumber].firstStage.blueCards, ancientsData[ancientNumber].firstStage.brownCards);
// console.log(ancientsData[ancientNumber].secondStage.greenCards, ancientsData[ancientNumber].secondStage.blueCards, ancientsData[ancientNumber].secondStage.brownCards);
// console.log(ancientsData[ancientNumber].thirdStage.greenCards, ancientsData[ancientNumber].thirdStage.blueCards, ancientsData[ancientNumber].thirdStage.brownCards);

// console.log(lineUpStaticGreen);
// console.log(lineUpStaticBlue);
// console.log(lineUpStaticBrown);

// const difficult = difficulties[2];

// console.log(difficult);

function getRandom (range, count) {
    // range = 17; // максимальное значение (1..17 включительно green)
    // count = lineUpStaticGreen;      // кол-во требуемых чисел

    let m = {};
    let a = [];
    for (let i = 0; i < count; ++i) {
    let r = Math.floor(Math.random() * (range - i));
    a.push(((r in m) ? m[r] : r) + 1);
    let l = range - i - 1;
    m[r] = (l in m) ? m[l] : l;
    }
    return a
    // console.log(a);
};
/*зеленые карты*/
const greenDeck = [];
const brownDeck = [];
const blueDeck = [];
/* */
// console.log(difficultyNumber);

if (difficultyNumber == 0) { 
    //зеленый самый простой
    // console.log('done');
    for (let i=0; i<cards.greenCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.greenCards[i].difficulty == 'easy') {
            greenDeck.push(cards.greenCards[i]);
        }
    }
    if (greenDeck.length<lineUpStaticGreen) {
        let i=0;
        while (greenDeck.length<lineUpStaticGreen) {
            if (cards.greenCards[i].difficulty == 'normal') {
                greenDeck.push(cards.greenCards[i]);
            }
        i++;
        }
    }
    //коричневый самый простой
    for (let i=0; i<cards.brownCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.brownCards[i].difficulty == 'easy') {
            brownDeck.push(cards.brownCards[i]);
        }
    }
    if (brownDeck.length<lineUpStaticBrown) {
        let i=0;
        while (brownDeck.length<lineUpStaticBrown) {
            if (cards.brownCards[i].difficulty == 'normal') {
                brownDeck.push(cards.brownCards[i]);
            }
        i++;
        }
    }
    //синий самый простой
    for (let i=0; i<cards.blueCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.blueCards[i].difficulty == 'easy') {
            blueDeck.push(cards.blueCards[i]);
        }
    }
    if (blueDeck.length<lineUpStaticBlue) {
        let i=0;
        while (blueDeck.length<lineUpStaticBlue) {
            if (cards.blueCards[i].difficulty == 'normal') {
                blueDeck.push(cards.blueCards[i]);
            }
        i++;
        }
    }
};
if (difficultyNumber == 1) { 
    //зеленый  простой
    // console.log('done');
    for (let i=0; i<cards.greenCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.greenCards[i].difficulty == 'easy' || cards.greenCards[i].difficulty == 'normal') {
            greenDeck.push(cards.greenCards[i]);
        }
    }
    // if (greenDeck.length<lineUpStaticGreen) {
    //     let i=0;
    //     while (greenDeck.length<lineUpStaticGreen) {
    //         if (cards.greenCards[i].difficulty == 'normal') {
    //             greenDeck.push(cards.greenCards[i]);
    //         }
    //     i++;
    //     }
    // }
    //коричневый  простой
    for (let i=0; i<cards.brownCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.brownCards[i].difficulty == 'easy' || cards.brownCards[i].difficulty == 'normal') {
            brownDeck.push(cards.brownCards[i]);
        }
    }
    // if (brownDeck.length<lineUpStaticBrown) {
    //     let i=0;
    //     while (brownDeck.length<lineUpStaticBrown) {
    //         if (cards.brownCards[i].difficulty == 'normal') {
    //             brownDeck.push(cards.brownCards[i]);
    //         }
    //     i++;
    //     }
    // }
    //синий  простой
    for (let i=0; i<cards.blueCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.blueCards[i].difficulty == 'easy' || cards.blueCards[i].difficulty == 'normal') {
            blueDeck.push(cards.blueCards[i]);
        }
    }
    // if (blueDeck.length<lineUpStaticBlue) {
    //     let i=0;
    //     while (blueDeck.length<lineUpStaticBlue) {
    //         if (cards.blueCards[i].difficulty == 'normal') {
    //             blueDeck.push(cards.blueCards[i]);
    //         }
    //     i++;
    //     }
    // }
};
if (difficultyNumber == 2) { 
    //зеленый средний
    // console.log('done');
    for (let i=0; i<cards.greenCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        // if (cards.greenCards[i].difficulty == 'easy' || cards.greenCards[i].difficulty == 'normal') {
            greenDeck.push(cards.greenCards[i]);
        // }
    }
    // if (greenDeck.length<lineUpStaticGreen) {
    //     let i=0;
    //     while (greenDeck.length<lineUpStaticGreen) {
    //         if (cards.greenCards[i].difficulty == 'normal') {
    //             greenDeck.push(cards.greenCards[i]);
    //         }
    //     i++;
    //     }
    // }
    //коричневый  средний
    for (let i=0; i<cards.brownCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        // if (cards.brownCards[i].difficulty == 'easy' || cards.brownCards[i].difficulty == 'normal') {
            brownDeck.push(cards.brownCards[i]);
        // }
    }
    // if (brownDeck.length<lineUpStaticBrown) {
    //     let i=0;
    //     while (brownDeck.length<lineUpStaticBrown) {
    //         if (cards.brownCards[i].difficulty == 'normal') {
    //             brownDeck.push(cards.brownCards[i]);
    //         }
    //     i++;
    //     }
    // }
    //синий  средний
    for (let i=0; i<cards.blueCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        // if (cards.blueCards[i].difficulty == 'easy' || cards.blueCards[i].difficulty == 'normal') {
            blueDeck.push(cards.blueCards[i]);
        // }
    }
    // if (blueDeck.length<lineUpStaticBlue) {
    //     let i=0;
    //     while (blueDeck.length<lineUpStaticBlue) {
    //         if (cards.blueCards[i].difficulty == 'normal') {
    //             blueDeck.push(cards.blueCards[i]);
    //         }
    //     i++;
    //     }
    // }
};
if (difficultyNumber == 3) { 
    //зеленый сложный
    // console.log('done');
    for (let i=0; i<cards.greenCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.greenCards[i].difficulty != 'easy') {
            greenDeck.push(cards.greenCards[i]);
        }
    }
    // if (greenDeck.length<lineUpStaticGreen) {
    //     let i=0;
    //     while (greenDeck.length<lineUpStaticGreen) {
    //         if (cards.greenCards[i].difficulty == 'normal') {
    //             greenDeck.push(cards.greenCards[i]);
    //         }
    //     i++;
    //     }
    // }
    //коричневый сложный
    for (let i=0; i<cards.brownCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.brownCards[i].difficulty != 'easy') {
            brownDeck.push(cards.brownCards[i]);
        }
    }
    // if (brownDeck.length<lineUpStaticBrown) {
    //     let i=0;
    //     while (brownDeck.length<lineUpStaticBrown) {
    //         if (cards.brownCards[i].difficulty == 'normal') {
    //             brownDeck.push(cards.brownCards[i]);
    //         }
    //     i++;
    //     }
    // }
    //синий сложный
    for (let i=0; i<cards.blueCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.blueCards[i].difficulty != 'easy') {
            blueDeck.push(cards.blueCards[i]);
        }
    }
    // if (blueDeck.length<lineUpStaticBlue) {
    //     let i=0;
    //     while (blueDeck.length<lineUpStaticBlue) {
    //         if (cards.blueCards[i].difficulty == 'normal') {
    //             blueDeck.push(cards.blueCards[i]);
    //         }
    //     i++;
    //     }
    // }
};
if (difficultyNumber == 4) { 
    //зеленый самый сложный
    console.log('done');
    for (let i=0; i<cards.greenCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.greenCards[i].difficulty == 'hard') {
            greenDeck.push(cards.greenCards[i]);
        }
    }
    if (greenDeck.length<lineUpStaticGreen) {
        let i=0;
        while (greenDeck.length<lineUpStaticGreen) {
            if (cards.greenCards[i].difficulty == 'normal') {
                greenDeck.push(cards.greenCards[i]);
            }
        i++;
        }
    }
    //коричневый самый сложный
    for (let i=0; i<cards.brownCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.brownCards[i].difficulty == 'hard') {
            brownDeck.push(cards.brownCards[i]);
        }
    }
    if (brownDeck.length<lineUpStaticBrown) {
        let i=0;
        while (brownDeck.length<lineUpStaticBrown) {
            if (cards.brownCards[i].difficulty == 'normal') {
                brownDeck.push(cards.brownCards[i]);
            }
        i++;
        }
    }
    //синий самый сложный
    for (let i=0; i<cards.blueCards.length; i++) {
        // console.log(i, cards.greenCards[i]);
        if (cards.blueCards[i].difficulty == 'hard') {
            blueDeck.push(cards.blueCards[i]);
        }
    }
    if (blueDeck.length<lineUpStaticBlue) {
        let i=0;
        while (blueDeck.length<lineUpStaticBlue) {
            if (cards.blueCards[i].difficulty == 'normal') {
                blueDeck.push(cards.blueCards[i]);
            }
        i++;
        }
    }
};


// switch (difficultyNumber) {
//     case 0: console.log('done');
        
//         break;

// }

// switch (difficultyNumber) {
//    case 0: //super easy
//    console.log('done');
// //    for (let i=0; i<lineUpStaticGreen; i++) {
// //     console.log(i, cards.greenCards[i]);
// //     if (cards.greenCards[i].difficulty == 'easy') {
// //         greenDeck.push(cards.greenCards[i]);
// //     }
// //    };

//     break;

//    case 2:

// };
// console.log('green', greenDeck);
// console.log('brown', brownDeck);
// console.log('blue', blueDeck);
const greenPack = [];
// const greenAmmount = cards.greenCards.length;/*17;//все зеленые карты*/
const greenAmmount = greenDeck.length;//все зеленые карты из малой колоды/
// console.log(greenAmmount);
const RandomGreenNumbers = getRandom(greenAmmount, lineUpStaticGreen);

// console.log(RandomGreenNumbers);


for (let i=0; i<RandomGreenNumbers.length; i++) {
    greenPack.push(greenDeck[RandomGreenNumbers[i]-1]);
}

// console.log(greenPack);

/*голубые карты*/
const bluePack = [];
const blueAmmount = blueDeck.length;//все голубые карты из малой колоды
const RandomBlueNumbers = getRandom(blueAmmount, lineUpStaticBlue);

// console.log(RandomBlueNumbers);


for (let i=0; i<RandomBlueNumbers.length; i++) {
    bluePack.push(blueDeck[RandomBlueNumbers[i]-1]);
}

// console.log(bluePack);


/*коричневые карты*/
const brownPack = [];
const brownAmmount = brownDeck.length;//все коричневые карты
const RandomBrownNumbers = getRandom(brownAmmount, lineUpStaticBrown);

// console.log(RandomBrownNumbers);


for (let i=0; i<RandomBrownNumbers.length; i++) {
    brownPack.push(brownDeck[RandomBrownNumbers[i]-1]);
}

// console.log(brownPack);
// const x = brownPack.sort();
// console.log(x);

// const firstStageAmmount = ancientsData[ancientNumber].firstStage.greenCards + ancientsData[ancientNumber].firstStage.blueCards + ancientsData[ancientNumber].firstStage.brownCards

/*первая стадия*/
const firstStage = [];

for (let i=0; i<ancientsData[ancientNumber].firstStage.greenCards; i++) {
    firstStage.push(greenPack[i])
}
for (let i=0; i<ancientsData[ancientNumber].firstStage.blueCards; i++) {
    firstStage.push(bluePack[i])
}
for (let i=0; i<ancientsData[ancientNumber].firstStage.brownCards; i++) {
    firstStage.push(brownPack[i])
}
// console.log(firstStage);
shuffle(firstStage);
// console.log(firstStage);

/*вторая стадия*/
const secondStage = [];

for (let i=0+ancientsData[ancientNumber].firstStage.greenCards; i<ancientsData[ancientNumber].secondStage.greenCards+ancientsData[ancientNumber].firstStage.greenCards; i++) {
    secondStage.push(greenPack[i])
}
for (let i=0+ancientsData[ancientNumber].firstStage.blueCards; i<ancientsData[ancientNumber].secondStage.blueCards+ancientsData[ancientNumber].firstStage.blueCards; i++) {
    secondStage.push(bluePack[i])
}
for (let i=0+ancientsData[ancientNumber].firstStage.brownCards; i<ancientsData[ancientNumber].secondStage.brownCards+ancientsData[ancientNumber].firstStage.brownCards; i++) {
    secondStage.push(brownPack[i])
}
// console.log(secondStage);
shuffle(secondStage);
// console.log(secondStage);

/*третья стадия*/
const thirdStage = [];

for (let i=0+ancientsData[ancientNumber].secondStage.greenCards+ancientsData[ancientNumber].firstStage.greenCards; i<ancientsData[ancientNumber].thirdStage.greenCards+ancientsData[ancientNumber].secondStage.greenCards+ancientsData[ancientNumber].firstStage.greenCards; i++) {
    thirdStage.push(greenPack[i])
}
for (let i=0+ancientsData[ancientNumber].secondStage.blueCards+ancientsData[ancientNumber].firstStage.blueCards; i<ancientsData[ancientNumber].thirdStage.blueCards+ancientsData[ancientNumber].secondStage.blueCards+ancientsData[ancientNumber].firstStage.blueCards; i++) {
    thirdStage.push(bluePack[i])
}
for (let i=0+ancientsData[ancientNumber].secondStage.brownCards+ancientsData[ancientNumber].firstStage.brownCards; i<ancientsData[ancientNumber].thirdStage.brownCards+ancientsData[ancientNumber].secondStage.brownCards+ancientsData[ancientNumber].firstStage.brownCards; i++) {
    thirdStage.push(brownPack[i])
}
// console.log(thirdStage);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};

// console.log(thirdStage);
shuffle(thirdStage);
// console.log(thirdStage);

return deck = firstStage.concat(secondStage).concat(thirdStage);
// console.log(deck);
};
// console.log(deck);
const card = document.querySelector('.deck');
// console.log(ancientsData[ancientNumber]);



let count = 0;
card.addEventListener('click', cardClick);

function cardClick() {
    
    // console.log(count);
    
    const lastCard = document.querySelector('.last-card');
    
    // console.log(lastCard);
    // console.log(deck[count].cardFace);
    if (deck[count]) {
        lastCard.style.backgroundImage = `url('${deck[count].cardFace}')`;
        countCards();
    } else {
        lastCard.style.backgroundImage = '';
    }
    
    // "url('../../../assets/MythicCards/blue2.png')"
    // lastCard.style.backgroundImage = `url('${deck[0].cardFace}',')`;
    count++;
    // if (count>16) {
        // break
    // }
    
};
function countCards () {

    const firstStageGreen = document.querySelector('.first-stage .green');
    const firstStageBrown = document.querySelector('.first-stage .brown');
    const firstStageBlue = document.querySelector('.first-stage .blue');

    const secondStageGreen = document.querySelector('.second-stage .green');
    const secondStageBrown = document.querySelector('.second-stage .brown');
    const secondStageBlue = document.querySelector('.second-stage .blue');

    const thirdStageGreen = document.querySelector('.third-stage .green');
    const thirdStageBrown = document.querySelector('.third-stage .brown');
    const thirdStageBlue = document.querySelector('.third-stage .blue');

    
    // let xfg = ancientsData[ancientNumber].firstStage.greenCards;
    // let xfbl = ancientsData[ancientNumber].firstStage.blueCards;
    // let xfbr = ancientsData[ancientNumber].firstStage.brownCards;

    // let xsg = ancientsData[ancientNumber].secondStage.greenCards;
    // let xsbl = ancientsData[ancientNumber].secondStage.blueCards;
    // let xsbr = ancientsData[ancientNumber].secondStage.brownCards;

    // let xtg = ancientsData[ancientNumber].thirdStage.greenCards;
    // let xtbl = ancientsData[ancientNumber].thirdStage.blueCards;
    // let xtbr = ancientsData[ancientNumber].thirdStage.brownCards;

    // console.log(deck[count].color, count, firstLine, secondLine+firstLine, thirdLine+secondLine+firstLine);
// green
    if ((deck[count].color == 'green') && (count>=0 && count<firstLine)) {
        // console.log('bingo');
        firstStageGreen.innerHTML = Number(firstStageGreen.innerHTML)-1;
    } else if ((deck[count].color == 'green') && (count>=firstLine && count<(secondLine+firstLine))) {
        // console.log('bingo2');
        secondStageGreen.innerHTML = Number(secondStageGreen.innerHTML)-1;;
    } else if ((deck[count].color == 'green') && (count>=(secondLine+firstLine) && count<(thirdLine+secondLine+firstLine))) {
        // console.log('bingo3');
        thirdStageGreen.innerHTML = Number(thirdStageGreen.innerHTML)-1;;
    };
    //blue
    if ((deck[count].color == 'blue') && (count>=0 && count<firstLine)) {
        // console.log('bingo');
        firstStageBlue.innerHTML = Number(firstStageBlue.innerHTML)-1;
    } else if ((deck[count].color == 'blue') && (count>=firstLine && count<(secondLine+firstLine))) {
        // console.log('bingo2');
        secondStageBlue.innerHTML = Number(secondStageBlue.innerHTML)-1;;
    } else if ((deck[count].color == 'gbluereen') && (count>=(secondLine+firstLine) && count<(thirdLine+secondLine+firstLine))) {
        // console.log('bingo3');
        thirdStageBlue.innerHTML = Number(thirdStageBlue.innerHTML)-1;;
    }
    // brown
    if ((deck[count].color == 'brown') && (count>=0 && count<firstLine)) {
        // console.log('bingo');
        firstStageBrown.innerHTML = Number(firstStageBrown.innerHTML)-1;
    } else if ((deck[count].color == 'brown') && (count>=firstLine && count<(secondLine+firstLine))) {
        // console.log('bingo2');
        secondStageBrown.innerHTML = Number(secondStageBrown.innerHTML)-1;;
    } else if ((deck[count].color == 'brown') && (count>=(secondLine+firstLine) && count<(thirdLine+secondLine+firstLine))) {
        // console.log('bingo3');
        thirdStageBrown.innerHTML = Number(thirdStageBrown.innerHTML)-1;;
    }
};
function countCardsFirst () {

    const firstStageGreen = document.querySelector('.first-stage .green');
    const firstStageBrown = document.querySelector('.first-stage .brown');
    const firstStageBlue = document.querySelector('.first-stage .blue');

    const secondStageGreen = document.querySelector('.second-stage .green');
    const secondStageBrown = document.querySelector('.second-stage .brown');
    const secondStageBlue = document.querySelector('.second-stage .blue');

    const thirdStageGreen = document.querySelector('.third-stage .green');
    const thirdStageBrown = document.querySelector('.third-stage .brown');
    const thirdStageBlue = document.querySelector('.third-stage .blue');

    firstStageGreen.innerHTML = `${ancientsData[ancientNumber].firstStage.greenCards}`;
    firstStageBrown.innerHTML = `${ancientsData[ancientNumber].firstStage.brownCards}`;
    firstStageBlue.innerHTML = `${ancientsData[ancientNumber].firstStage.blueCards}`;
    
    secondStageGreen.innerHTML = `${ancientsData[ancientNumber].secondStage.greenCards}`;
    secondStageBrown.innerHTML = `${ancientsData[ancientNumber].secondStage.brownCards}`;
    secondStageBlue.innerHTML = `${ancientsData[ancientNumber].secondStage.blueCards}`;

    thirdStageGreen.innerHTML = `${ancientsData[ancientNumber].thirdStage.greenCards}`;
    thirdStageBrown.innerHTML = `${ancientsData[ancientNumber].thirdStage.brownCards}`;
    thirdStageBlue.innerHTML = `${ancientsData[ancientNumber].thirdStage.blueCards}`;

    

};






