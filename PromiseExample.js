/*const myPromise = new Promise(function(myResolve, myReject) {

    setTimeout(function() { myResolve("Wecome in SCS !!"); }, 3000);
  
  });
 
  myPromise.then(function(value) {

    console.log(value);
  
  });
  */
  async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();