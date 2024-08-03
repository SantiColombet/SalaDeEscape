const imagePaths = [
    '../Images/habitacion4/buzz.png',
    '../Images/habitacion4/woody.png',
    '../Images/habitacion4/jesi.png',
    '../Images/habitacion4/caballo.png',
    '../Images/habitacion4/rex.png'
];
const cards = [...imagePaths, ...imagePaths];
let flippedCards = [];
let moves = 0;
const maxMoves = 10;
const div1 = document.querySelector("#div-boton");


console.log(div1);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    shuffleArray(cards);
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; 
    cards.forEach((imagePath, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back">
                    <img src="${imagePath}" alt="Card Image">
                </div>
            </div>
        `;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
    moves = 0;
    updateMoves();
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            moves++;
            updateMoves();
            setTimeout(checkMatch, 500);
        }
    }
}


function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;
    if (cards[index1] === cards[index2]) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    flippedCards = [];

    if (document.querySelectorAll('.flipped').length === cards.length) {
        setTimeout(() => {
            alert(`¡Felicidades! Has completado el juego en ${moves} movimientos.`);
            const form = document.getElementById('form4');
            const claveInput = form.querySelector('input[name="clave"]');
            claveInput.value = 'rex';
            form.submit();
        }, 500);
    } else if (moves >= maxMoves) {
        setTimeout(() => {
            alert(`Has alcanzado el límite de ${maxMoves} movimientos. El juego se reiniciará.`);
            resetGame();
        }, 500);
    }
}

function updateMoves() {
    document.getElementById('moves').textContent = `Movimientos: ${moves} / ${maxMoves}`;
}

function resetGame() {
    createBoard();
}

createBoard();

