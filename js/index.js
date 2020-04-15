// Create an element with class dot
//<li class="dot"></li>

let $stage = document.querySelector('.stage');

const addADtot = () => {
  //Randomize a % value for widht and height
  
 let $positionX = Math.floor((event.clientX * 100) / (window.innerWidth) ) + `%`;
 let $positionY = Math.floor((event.clientY * 100) / (window.innerHeight) ) + `%`;
 let $ramdomSize = Math.floor(Math.random() * 100) + 1;
 let $randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  
  //Create a new Element 
  const $dot = document.createElement('li')
  
  // Add a class to it
  $dot.classList.add('dot');
  
  //Move the element around
  $dot.style.left = $positionX
  $dot.style.top =  $positionY

  //Ramdomize the Dot Size
  $dot.style.width = $ramdomSize
  $dot.style.height = $ramdomSize
  
  //Ramdomize the Dot Color
  $dot.style.backgroundColor = $randomColor

  //Insert it into the document
  $stage.appendChild($dot);

}

 window.addEventListener('click', addADtot)

 //1. Insert the dot at the position you clicked, not randomly
 //2. Insert the dot at the point, BUT, apply as a %, not a PX value
 //3. Randomize the size
 //4. Randomize the colour 
 
 //ADVANCED: 
 //If the new element is inserted such that it would be 
 //partially outside the window boundary, move it over in the appropriate direction

