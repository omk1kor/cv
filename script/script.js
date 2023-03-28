let holder = document.getElementById('background')
let gs = 35;

window.onload = () => {
    for (let i =0; i < gs; i++){
        for (let j =0; j < gs; j++){
            let dot = document.createElement("div")
            dot.classList.add("dot")
            dot.style.animationDelay = `${Math.sin(i * j)/7}s`
            holder.appendChild(dot)
        }
    }
}