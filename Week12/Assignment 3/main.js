function ageInTime(theAge) {
    if ( theAge >= 100) {
      console.log("Age Out Of Range");
    } else {
      const months = theAge * 12;
      const weeks = theAge * 52.1775; 
      const days = theAge * 365.25;  
      const hours = days * 24;
      const minutes = hours * 60;
      const seconds = minutes * 60;
      console.log(`${months} Months`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months