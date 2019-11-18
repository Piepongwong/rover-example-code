// Rover Object Goes Here
// ======================

// ======================
var rover1 = {
  direction: "N",
  position: [4,4],
  travelLog: [[4,4]],
  turnLeft: function(){
    console.log("turnLeft was called!");
    switch(this.direction) {
      case("N"):
        this.direction = "W"
        break;
      case("W"):
        this.direction = "S"
        break;
      case("S"):
        this.direction = "E";
        break;
      case("E"):
        this.direction = "N"
        break;
    }
  },
  turnRight: function(){
    console.log("turnRight was called!");
    switch(this.direction) {
      case("N"):
        this.direction = "E"
        break;
      case("E"):
        this.direction = "S"
        break;
      case("S"):
        this.direction = "W";
        break;
      case("W"):
        this.direction = "N"
        break;
    }
  },
  moveForward: function(){
    console.log("moveForward was called")
    switch(this.direction) {
      case("N"):
        if(this.position[1] + 1 > 9) {
          console.log("No can do sir");
          return;
        }
        else this.position[1]++;
        break;
      case("E"):
        if(this.position[0] + 1 > 9) {
          console.log("No can do sir");
          return;
        }
        else this.position[0]++;
        break;
      case("S"):
        if(this.position[1] - 1 < 0) {
          console.log("No can do sir");
          return;
        }
        else this.position[1]--;
        break;
      case("W"):
        if(this.position[0] - 1 < 0) {
          console.log("No can do sir");
          return;
        }
        else this.position[0]--;
        break;
    }
  
    this.travelLog.push(this.position);
    checkForObstacleCollision(this, obstacles);
  },
  moveBackwards: function(){
    console.log("move backwards was called")
    switch(this.direction) {
      case("N"):
        if(this.position[1] - 1 < 0) {
          console.log("No can do sir");
          return;
        }
        else this.position[1]--;
        break;
      case("E"):
        if(this.position[0] - 1 < 0) {
          console.log("No can do sir");
          return;
        }
        else this.position[0]--;
        break;
      case("S"):
        if(this.position[1] + 1 > 9) {
          console.log("No can do sir");
          return;
        }
        else this.position[1]++;
        break;
      case("W"):
        if(this.position[0] + 1 > 9) {
          console.log("No can do sir");
          return;
        }
        else this.position[0]++;
        break;
    }
  
    this.travelLog.push(this.position);
    checkForObstacleCollision(this, obstacles);
  },
  instructRover: function(stringOfCommands) {
    stringOfCommands = stringOfCommands.toLowerCase()
    let commands = "frlb";
    for(var i = 0; i < stringOfCommands.length; i++) {
      if(!commands.includes(stringOfCommands[i])) {
        console.log("INVALID INPUT")
        return;
      }
      switch(stringOfCommands[i]) {
        case("f"):
          this.moveForward();
          break;
        case("l"):
          this.turnLeft();
          break;
        case("r"):
          this.turnRight();
          break;
        case("b"):
          this.moveBackwards();
          break;
      }
    }
    checkForRoverCollision(rover1, rover2)
  }
}

var rover2 = {
  direction: "N",
  position: [6,6],
  travelLog: [[6,6]]
}

var obstacles = [[6,7]]


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

// instructRover("fl", rover1)
// instructRover("blff", rover2)