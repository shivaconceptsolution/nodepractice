const myPromise = new Promise(function(myResolve, myReject) {

    setTimeout(function() { myResolve("Wecome in SCS !!"); }, 3000);
  
  });
  
  myPromise.then(function(value) {

   // document.getElementById("demo").innerHTML = value;
   console.log(value)
  
  });
  
  