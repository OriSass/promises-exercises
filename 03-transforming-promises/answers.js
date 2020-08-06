/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
   
    promise.catch((error) => {
      reject(error)
    });
    let result = promise.then((res) =>{
      return transformer(res);
    });
    resolve(result);
    reject(result);
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((arg) => {
        return new Promise((resolve, reject) => {
          console.log(isNaN(Number(arg)));
          if(typeof(arg) === "number" && isNaN(Number(arg)) === false)
          {
              resolve(arg * arg);
          }
          if(isNaN(Number(arg)))
          {
            reject("Cannot convert to a number!");
          }
          if(typeof(arg) === "string" && !isNaN(Number(arg)))
          {
             let newArg = Number(arg);
             resolve(newArg * newArg);  
          }          
    });
})};

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(/* IMPLEMENT ME! */);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};