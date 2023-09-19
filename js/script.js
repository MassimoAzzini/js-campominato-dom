const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
let formSelect;
reset();

btn.addEventListener('click', function(){
  
  reset();
  formSelect = document.getElementById('inputGroupSelect04').value;
  
  for(let i = 1; i <= numberSquare(); i++ ){
    
    let square = createSquare (i);
    content.append(square);
    square.addEventListener('click', function(){
      
      this.classList.toggle('active');
      
      console.log(this._squareID);
      
    });
    
    console.log(square)
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
};

function numberSquare(){
  if(formSelect == 2) return 81;
  else if(formSelect == 1) return 100;
  else if(formSelect == 3) return 49;
};

