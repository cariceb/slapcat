


// varibabelen
let currCatTile;
let currBomTile;
let score = 0;
let gameOver = false;

// game word geladen bij onload
window.onload = function() {
    setGame();
}

function setGame() {
    //grid in html maken
    for (let i = 0; i < 9; i++) { // i gaat van 0 tot 8 stopt bij 9
        
        let tile = document.createElement("div");
        tile.id = i.toString();
        // wanneer er word geklikt op een tile word selectTile aangeroepen
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setCat, 700);  
    setInterval(setBom, 1000); 
}

function getRandomTile() {
//    kiest 1 van de 9 vakjes
    let num = Math.floor(Math.random() * 9);
    return num.toString();  
    // zorgt dat het weer naar de html gaat
}

function setCat() {
    if (gameOver) {
        return;
    }
    // checkt of er een kat is op het spel zo ja gaat die weg
    if (currCatTile) {
        currCatTile.innerHTML = "";
    }

    let cat = document.createElement("img");
    cat.src = "img/cat.png";
//  controleerd of er al een kat is op de tegel zodat er geen bom kan komen
    let num = getRandomTile();
    if (currBomTile && currBomTile.id == num) {
        return;
    }
    // hierdoor word de afbeelding zichtbaar op speelveld
    currCatTile = document.getElementById(num);
    currCatTile.appendChild(cat);
}

function setBom() {
    if (gameOver) {
        return;
    }
    // alle bommen van speelveld af als game over is
    if (currBomTile) {
        currBomTile.innerHTML = "";
    }
    let bom = document.createElement("img");
    bom.src = "img/bom.png";
// controleerd tegel op of er al wat staat
    let num = getRandomTile();
    if (currCatTile && currCatTile.id == num) {
        return;
    }
    currBomTile = document.getElementById(num);
    // zorgt dat de bom te zien is op speelveld
    currBomTile.appendChild(bom);
}

function selectTile() {
    // als het game over is deze functie negeren
    if (gameOver) {
        return;
    }
    // controleerd of geklikte vakje een kat staat zo ja score erbij
    if (this == currCatTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    // als er op het vakje dat er geklikt is een bom staat Game over
    else if (this == currBomTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}


