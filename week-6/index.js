// <div>red</div>

function makeColorfulDiv(color) {

let newDiv = document.createElement('div')
// newDiv = <div></div>

// 2. <div>red</div>

newDiv.innerHTML = color

// 3. div's background color is red 
// <div style="background-color: red">

newDiv.style.backgroundColor = color

// 4. <div id="colors"> <div> red </div> </div>



// 1. find #colors div

const colors = document.getElementById('colors')

// 2. Append the child to the #colors div

colors.appendChild(newDiv)
}
makeColorfulDiv('red')
makeColorfulDiv('orange')
makeColorfulDiv('yellow')
makeColorfulDiv('green')
makeColorfulDiv('blue')
makeColorfulDiv('purple')
makeColorfulDiv('mistyrose')


// 1. make a div



// Re-use code ---> functions

// 1. create function at top of js doc