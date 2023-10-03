//Create function with speed as an argument 
function speedDetector(speed){
    //Work demerit points for speeds above the limit
    const demeritPoints = ((speed-70)/5)
    //Set conditions for when invoking function
    // Speeds below 70 are considered okay and any additonal units above 70 are used in calculating demerit points.
      if (speed<=70){
          console.log("Ok")
      }else if(demeritPoints<12){
          console.log(demeritPoints)
      }else if(demeritPoints>12){
          console.log ("Licence suspended")
      }
  }

//The function should now console.log one the conditional statements matching the speed range