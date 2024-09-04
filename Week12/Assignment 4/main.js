//Challenge

function checkStatus(a, b, c) {
    let name, age, status;
  
    if (typeof a === "string") {
      name = a;
    } else if (typeof a === "number") {
      age = a;
    } else if (typeof a === "boolean") {
      status = a;
    }
  
    if (typeof b === "string") {
      name = b;
    } else if (typeof b === "number") {
      age = b;
    } else if (typeof b === "boolean") {
      status = b;
    }
  
    if (typeof c === "string") {
      name = c;
    } else if (typeof c === "number") {
      age = c;
    } else if (typeof c === "boolean") {
      status = c;
    }
  
    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"} For Hire`);
  }
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"