// Rover Object Goes Here
// ======================

// ======================
var rover = {
  direction: "N",
  position: [4,4],
  travelLog: [[4,4]]
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case("N"):
      rover.direction = "W"
      break;
    case("W"):
      rover.direction = "S"
      break;
    case("S"):
      rover.direction = "E";
      break;
    case("E"):
      rover.direction = "N"
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case("N"):
      rover.direction = "E"
      break;
    case("E"):
      rover.direction = "S"
      break;
    case("S"):
      rover.direction = "W";
      break;
    case("W"):
      rover.direction = "N"
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction) {
    case("N"):
      if(rover.position[1] + 1 > 9) {
        console.log("No can do sir");
        return;
      }
      else rover.position[1]++;
      break;
    case("E"):
      if(rover.position[0] + 1 > 9) {
        console.log("No can do sir");
        return;
      }
      else rover.position[0]++;
      break;
    case("S"):
      if(rover.position[1] - 1 < 0) {
        console.log("No can do sir");
        return;
      }
      else rover.position[1]--;
      break;
    case("W"):
      if(rover.position[0] - 1 < 0) {
        console.log("No can do sir");
        return;
      }
      else rover.position[0]--;
      break;
  }

  rover.travelLog.push(rover.position);

}

function moveBackwards(rover){
  console.log("move backwards was called")
  switch(rover.direction) {
    case("N"):
      if(rover.position[1] - 1 < 0) {
        console.log("No can do sir");
        return;
      }
      else rover.position[1]--;
      break;
    case("E"):
      if(rover.position[0] - 1 < 0) {
        console.log("No can do sir");
        return;
      }
      else rover.position[0]--;
      break;
    case("S"):
      if(rover.position[1] + 1 > 9) {
        console.log("No can do sir");
        return;
      }
      else rover.position[1]++;
      break;
    case("W"):
      if(rover.position[0] + 1 > 9) {
        console.log("No can do sir");
        return;
      }
      else rover.position[0]++;
      break;
  }

  rover.travelLog.push(rover.position);

}

function instructRover(stringOfCommands) {
  debugger
  let commands = "frlb";
  for(var i = 0; i < stringOfCommands.length; i++) {
    let valid = false;
    for(let j = 0; j < commands.length; j++){
      if(commands[j] === stringOfCommands[i]) {
        valid = true;
        break;
      }
    }
    if(!valid) {
      console.log("INVALID INPUT!!");
      return;
    }
    switch(stringOfCommands[i]) {
      case("f"):
        moveForward(rover);
        break;
      case("l"):
        turnLeft(rover);
        break;
      case("r"):
        turnRight(rover);
        break;
      case("b"):
        moveBackwards(rover);
        break;
    }
  }
}

