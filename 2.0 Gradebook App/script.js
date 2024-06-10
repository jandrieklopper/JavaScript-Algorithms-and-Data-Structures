function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
    if(score <=59){
      return "F";
    }else if(score <= 69){
      return "D";
    }else if(score<=79){
      return "C";
    }else if(score<=89){
      return "B";
    }else if(score<=99){
      return "A";
    }else{
      return "A++"
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));