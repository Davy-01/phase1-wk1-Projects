//Create function with speed as an argument 
function speedDetector(speed){
    //Work demerit points
    const demeritPoints = ((speed-70)/5)
    //Set conditions when invoking function
      if (speed<70){
          console.log("Ok")
      }else if(demeritPoints<12){
          console.log(demeritPoints)
      }else if(demeritPoints>12){
          console.log ("Licence suspended")
      }
  }

