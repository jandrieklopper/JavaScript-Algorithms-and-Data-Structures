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
 
  function hasPassingGrade(score) {
    const grade = getGrade(score);
    return grade !== 'F';
  }
  
  function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);
  
    if (passed) {
      return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    } else {
      return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }
  }
  
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));