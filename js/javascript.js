const container = document.createElement('div');
container.classList.add('container');
const body = document.querySelector('body');
body.appendChild(container);
let color = "black";
let mouseClick = false;





document.querySelector('.container').addEventListener('click', function(e){

  let info = document.querySelector(".info");

  if(mouseClick == false) {mouseClick = true;
  info.innerHTML='Click once on the board to start drawing. Click again to stop!'}

  else if (mouseClick == true) {mouseClick = false};
  
})





sizeButton = document.querySelector(".btn1");
sizeButton.addEventListener('click', function()
{
  let size = getSize();
  createGrid(size);

});



    function createGrid(dimension){

    for(let i = 0; i < dimension; i++) {
      let columnDivs =  document.createElement('div');
      columnDivs.classList.add('column');
     

    for (let j = 0; j < dimension; j++) {
        let rowDivs = document.createElement('div');
        rowDivs.classList.add('row');
        columnDivs.appendChild(rowDivs); }
    container.appendChild(columnDivs); };

    let rows = document.querySelectorAll('.row');
  rows.forEach((row) => { 
  row.addEventListener('mouseover', colorDiv
  );
}); 

};



 
 function getSize() {
let choice = prompt("Enter the size of the board (2 - 100):");
let message = document.querySelector('#message');

if (choice == "") {
  message.innerHTML = "Please provide a number:"
}

else if (choice < 2 || choice > 100) {
  message.innerHTML = "Chose a number between 2 and 100!"
}

else {message.innerHTML = "I wanna' see a piece of art!";

return choice }
};



function colorDiv() {
  if (mouseClick == true){
  if (color == 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }
  else {this.style.backgroundColor = "black"}
}};

function setColor(colorChoice){

       color = colorChoice;
};


function clearBoard (){
  let divs = document.querySelectorAll('.row');
  divs.forEach((div) => div.style.backgroundColor = "white");
}














 







  