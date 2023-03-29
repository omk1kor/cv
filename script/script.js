/* This code creates a visual effect by creating multiple dots and giving them an animated delay. 
It first gets the 'holder' element with id 'background', then creates a grid of dots using two 
nested loops that iterate over the value of gs. For each iteration, it creates a new div element 
with class name 'dot', adds an animation delay to it, and appends it as a child of the 'holder' element. */

// Get the DOM element with ID 'background' and store it in the variable 'holder'
let holder = document.getElementById('background')

// Set the value of 'gs' to 30
let gs = 30;

// Once the window has finished loading...
window.onload = () => {
  // Loop through from i=0 up to but not including gs
  for (let i =0; i < gs; i++){
    // Within the above loop, loop through from j=0 up to but not including gs
    for (let j =0; j < gs; j++){
      // Create a new HTML element called 'div' and store it in the variable 'dot'
      let dot = document.createElement("div")
      // Add the class "dot" to the newly created 'div' element
      dot.classList.add("dot")
      // Set the CSS animation delay of the 'dot' element to a calculated value based on 'i' and 'j' values
      dot.style.animationDelay = `${Math.sin(i * j)/7}s`
      // Add the 'dot' element as a child of the 'holder' DOM element
      holder.appendChild(dot)
    }
  }
}
