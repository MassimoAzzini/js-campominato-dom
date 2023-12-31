const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const bombNumber = [];
const emptySquare = [];
const output = document.getElementById('output');

let messaggio

let formSelect;

let score = 0;


reset();

btn.addEventListener('click', function(){
  
  reset();
  
  formSelect = document.getElementById('inputGroupSelect04').value;
  
  createUniqueBombNumber(1, numberSquare());

  
  
  for(let i = 1; i <= numberSquare(); i++ ){
    
    let square = createSquare (i);
    content.append(square);
    
    
    square.addEventListener('click', function(){
      
      if(bombNumber.includes(this._squareID)){
        
        viewBomb()

        messaggio = `Hai PERSO! Il tuo punteggio è ${score}`;

        // !bombNumber.includes(square)

      }else{

        this.classList.add('active');

        score =+

        emptySquare.push(i);
        
        if(emptySquare.length == (numberSquare() - bombNumber.length)){

          messaggio = `Hai VINTO! Il tuo punteggio è ${score}`;

          viewBomb()

        } 

      }
      
      document.getElementById('output').innerHTML = messaggio;

    });
    
  };
  
});



function createSquare (index){
  const newSquare = document.createElement('div');
  
  newSquare._squareID = index;
  newSquare.className = 'square'
  
  newSquare.innerHTML = `<span>${index}</span>`;
  
  if(formSelect == 2){ 
    
    newSquare.classList.add('medium'); 
    
  }else if(formSelect == 3){
    
    newSquare.classList.add('hard');
    
  }else if(formSelect == 1){
    
    newSquare.classList.add('easy');
    
  }
  
  return newSquare;
  
};


function reset(){
  content.innerHTML = '';
  output.innerHTML = '';
  bombNumber.splice(0, bombNumber.length);
  score = 0
  emptySquare.splice(0, emptySquare.length);
  messaggio = ''
};


function numberSquare(){
  if(formSelect == 2) return 81;
  else if(formSelect == 1) return 100;
  else if(formSelect == 3) return 49;
};

function createUniqueBombNumber(min, max){
  
  
  let randomNumber;
  while(bombNumber.length <= 15){
    
    randomNumber = getRandomNumber(min, max);
    if(!bombNumber.includes(randomNumber)){
      bombNumber.push(randomNumber);
      console.log(bombNumber);
    }
  };

  console.log(bombNumber)
};


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function viewBomb(){
  const listSquare = document.getElementsByClassName('square');
  for(let i = 0; i < listSquare.length; i++){
    
    if(bombNumber.includes(listSquare[i]._squareID)){
      listSquare[i].classList.add('bomb');
    }else{
      listSquare[i].classList.add('active');
    }
    
  }

}