//The 3 different doors
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let numClosedDoors = 3;
let openDoor1, openDoo2, openDoor3;
let startButton = document.getElementById('start');
currentlyPlaying = true;

//images for 3 door paths
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let isBot = (door) =>{
    if(door.src === botDoorPath){
        return true;
    }else{
        return false;
    }
}

//isClicked Function
const isClicked = (door) =>{
    if(door.src === closedDoorPath){
        return false;
    }else{
        return true;
    }
}

//game over function
const gameOver = (status) =>{
    if(status == 'win'){
        startButton.innerHTML = "You win! Play again?";
    }else{
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}

//playDoor Function
const playDoor = (door) =>{
    numClosedDoors--;
    if(numClosedDoors ==0){
        gameOver('win');
    }else if(isBot(door)){
        gameOver();
    }
}


//Random Generator Function
const randomChoreDoorGenerator = () =>{
    const choreDoor = Math.floor(Math.random() * numClosedDoors);  
    if(choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor ===1){
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }else{
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}


//Door 1 onclick handler
doorImage1.onclick = () =>{
    if(!isClicked(doorImage1)&& currentlyPlaying){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

//Door 2 on click handler
doorImage2.onclick = () =>{
    if(!isClicked(doorImage2) && currentlyPlaying){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

//Door 3 on click handler
doorImage3.onclick = () =>{
    if(!isClicked(doorImage3)&& currentlyPlaying){
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

//startover function to reset all the values in order to start a new game
const startRound = () =>{
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good luck!"
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}
//click handler function to reset game
startButton.onclick = () =>{
    if(!currentlyPlaying) {
        startRound();
    }
}
startRound();
