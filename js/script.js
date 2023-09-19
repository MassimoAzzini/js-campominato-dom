const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const bombNumber = [];
const emptySquare = [];


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

        this.classList.add("bomb");

      }else{


        this.classList.add('active');

        point();

        emptySquare.push(i);
        
        if(emptySquare.length == (numberSquare() - bombNumber.length)) message = 'Hai VINTO'
        
        console.log(emptySquare)
      }

      console.log(point)

      
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
  bombNumber.splice(0, bombNumber.length);
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

function point(){
  
  score + 1
}