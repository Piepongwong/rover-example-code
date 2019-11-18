// Rover Object Goes Here
// ======================

// ======================
var rover1 = {
  direction: "N",
  position: [4,4],
  travelLog: [[4,4]]
}
var rover2 = {
  direction: "N",
  position: [6,6],
  travelLog: [[6,6]]
}

var obstacles = [[6,7]]

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
  checkForObstacleCollision(rover, obstacles);

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
  checkForObstacleCollision(rover, obstacles);
}

function instructRover(stringOfCommands, rover) {
  stringOfCommands = stringOfCommands.toLowerCase()
  let commands = "frlb";
  for(var i = 0; i < stringOfCommands.length; i++) {
    if(!commands.includes(stringOfCommands[i])) {
      console.log("INVALID INPUT")
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
  checkForRoverCollision(rover1, rover2)
}

function checkForObstacleCollision(rover, obstacles) {
  for(let i = 0; i<obstacles.length; i++) {
    if(obstacles[i][0] === rover.position[0] 
      && obstacles[i][1] === rover.position[1]) alert("Obstacle BOEM!")
  }
}

function checkForRoverCollision(rover1, rover2) {
  if(rover1.position[0] === rover2.position[0] 
    && rover1.position[1] === rover2.position[1])alert("Rover BOEM!")
}

instructRover("fl", rover1)
instructRover("blff", rover2)