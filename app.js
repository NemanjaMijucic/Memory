const wrapper = document.getElementById("wrapper");
const footer = document.querySelector('.footer');
const playAgain = document.querySelector('.play-again');
console.log(footer);
let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

function setup() {
  arr.sort(() => 0.5 - Math.random());
  for (let i = 0; i < arr.length; i++) {
    const field = document.createElement("button");
    field.innerText = arr[i];
    field.classList.add("number", "black");
    wrapper.appendChild(field);
  }
}
setup();

let cardChosen = [];
let score = 120;
counter = 0;

const cards = document.querySelectorAll(".number");

cards.forEach((element) => {
  element.addEventListener("click", (e) => {
    score = score - 5;
    cardChosen.push(+e.target.innerText);
    console.log(cardChosen);
    e.target.classList.remove("black");
    e.target.classList.add("white");
    e.target.disabled = true;
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);

    }

    function checkForMatch() {
      const optionOne = cardChosen[0];
      const optionTwo = cardChosen[1];
      if (optionTwo === optionOne) {
        counter++;
        console.log(counter);
        cards.forEach((card) => {
          if (optionOne === +card.innerText && optionTwo === +card.innerText) {
            card.classList.add("invisible");
            score = score + 5;
          }
        });
      }
      if (optionOne !== optionTwo) {
        cards.forEach((card) => {
          card.classList.remove("white");
          card.classList.add("black");
          card.disabled = false;

        });
      }
     
      cardChosen = [];
      console.log(cardChosen);
     
      if(score === 0) {
          wrapper.innerHTML = `<p>Your score: ${score}</p> `;
      }

      if(counter === 6){
        wrapper.innerHTML = `<p>Your score: ${score}</p> `;

      }
       
    }
  });
});

playAgain.addEventListener('click', ()=> {
    document.location.reload();
})
//