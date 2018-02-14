var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n = 1) {
  let y = [];
  for(var x = 0; x < n; x++){
    y.push(array[x]);
  }
  return y;
};

// Returns the last element of an array.
_.last = function(array) {
  let y = [];
  for(var x = 0; x < array.length; x++){
    y = array[x];
  }
  return y;
}

// Returns the last n number of elements in an array.
_.takeRight = function(array, n =1) {
  let y = [];
  for(var x = array.length-1; x >= array.length-n; x--){
    y.push(array[x]);
  }
  return y.reverse();
}

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  let happyTime = [];
	for(var x of array){
	  if(x)
	  happyTime.push(x);

	}
	return happyTime;
}

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(array, array2) {
  let happyTime = [];
	for(var x in array){
	  if(array[x] !== array2[x]){
	    happyTime.push(array[x]);
	  }
	}
	return happyTime;
}

// Returns element with minimum
// value in an array.
_.min = function(array) {
  let minNumb = 0;
	for(var x in array){
	  if( array[x] <= array[minNumb]){
	    array[minNumb] = array[x];
	  }
	}
	return array[minNumb];
}

// Returns element with maximum
// value in an array.
_.max = function(array) {
  let maxNumb = 0;
	for(var x in array){
	  if( array[x] >= array[maxNumb]){
	    array[maxNumb] = array[x];
	  }
	}
	return array[maxNumb];
}

// Returns either index of matched element or
// -1.
_.indexOf = function(array,el) {
  let elIndex = -1;
	for(var x in array){
	  if( array[x] === el){
	    elIndex = x;
	    console.log(x);
	  }
	}
	if(elIndex !== -1){
	return elIndex;
	}
	else{
	 return -1;
	}
}

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  let count = 0;
	for( let x in collection){
    count += 1;
  }
  return count;
}

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
  for(let x in collection){
    callback(collection[x]);
  }
  return collection;
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	let arr2 = [];
  for(let x in collection){
    arr2.push(callback(collection[x]));
  }
  return arr2;
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
 var result = [];
  if(typeof(collection) === 'object'){
   for (let x in collection) {
       if (collection.hasOwnProperty(x) && callback(collection[x]) === true) {
           result.push(collection[x]);
   }

 }
}
else {
  for(i=0; i<collection.length; i++){
    if (callback(collection[i]) === true){
      result.push(collection[i]);
    }
  }
}
   return result;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
   var result = [];
   if (typeof(collection) === 'object') {
       for (var x in collection) {
               if (!callback(collection[x])) {
                   result.push(collection[x]);
               }
       }
   } else {
       for (var y of collection) {
           if (!callback(y)) {
               result.push(y);
           }
       }
   }
   return result;
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	let arr2 = [];
  for(let x in collections){
    if( x < collections[n]){
      arr2.push(x);
    }
  }
  return arr2;

};

module.exports = _;
