window.onload = function(){
    alineBars();
    setEnergy();
    addFiveToAllAfterFiveSec();
}

function alineBars(){
    const lines = document.getElementsByClassName("line__prog");
    for(let i = 0; i < lines.length; i++){
        lines[i].style.display = "inline-block";
    }
}

function setEnergy(){
    const energy = document.getElementById("energy");
    energy.style.setProperty("--c", "red");
    energy.value -= 10;
}

function addFiveToAllAfterFiveSec(){
    const lines = document.getElementsByClassName("line__prog");
    setTimeout(function(){
        for(let i = 0; i < lines.length; i++){
            lines[i].children[2].value += 5;
        }
    }, 5000);
}