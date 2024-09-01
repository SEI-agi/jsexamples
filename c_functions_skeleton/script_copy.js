
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation(){

    // what types of salutations do we give people?
    return new Array("Mr.", "Mrs.", "Ms.", "Dr.", "Sir.");
  
    // return ["Mr.", "Mrs.", "Ms.", "Dr.", "Sir."];
  }
  
  /* 
    ftnSalutation written as an ARROW function
    it uses the passed-in parameters to form
    a greeting to be returned to the function that
    calls it
  */
  const ftnGreeting = (salutation, user) => {
      //  implement your statement(s) here
      ftnGreeting(saluation, user)
      var msg = "Hi," + saluation + " " + user + "!";
      return msg;
  }
  
  /*
  Complete the challenge statement below
  Create the function validateInputs below
  Hint: 
  - validateInputs accepts two arguments (choice, name)
  - name should include a default value name=""
  - validateInputs returns false if either choice or name is incorrectly filled
  - validateInputs returns true if both choice and name are correctly filled
  */
  
  function validateInputs(choice, name=""){
    if(choice =="")
      return; 
    // returning undefined === false
  
    if(name == "")
      return;
    // returning undefined === false
  
    return true;
  }