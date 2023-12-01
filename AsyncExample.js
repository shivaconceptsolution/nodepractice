async function myFunction() {
    return "Hello";
  }
  function myDisplayer(some)
  {
   console.log(some);
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );