// console.log("hello")
/* A function that takes in two objects and check if they are deeply equal.
   Returns true if equal else false.
   
   objA {
     'key1': 'val1'
     'key3': 'val3'
   }
   objB {
     'key3': 'val4'
     'key2': 'val2'
   }
   Case1: Keys in objA and notB.
   Case2: Keys in objB and notA.
   Case3: Keys that are in both the objects but their data is not same.

   extraKeysInA, extraKeysInB: [], Set
   Case3: {"key": [valueInA, valueInB]};
   
   {
     equal: boolean
     extraKeysInA, 
     extraKeysInB,
     dismatchingData: {"key": [any, any]}
   }
   
*/

function checkEquality(objA, objB) {
  let equal = true, 
      extraKeysInA = new Set(), 
      extraKeysInB = new Set(),
      dismatchingData = {};
  //check for null undefined cases. 
  // Have explicit checks for null, undefined and other cases.
  if(!objA && !objB) {
    return {equal, extraKeysInA, extraKeysInB,  dismatchingData};
  }
  
  // if(objA === null && )  {
  //   equal = false;
  //   return {equal, extraKeysInA, extraKeysInB,  dismatchingData};
  // }
  if(!objA || !objB)  {
    equal = false;
    return {equal, extraKeysInA, extraKeysInB,  dismatchingData};
  }
  
  if(Object.keys(objA).length ==0 && Object.keys(objB).length ==0 ) {
    return {equal, extraKeysInA, extraKeysInB,  dismatchingData};
  }
  
  const keysInObjA = Object.keys(objA);
  for(let key of keysInObjA) {
    if(key in objB) {
      if(objA[key] != objB[key]) {
        equal = false;
        dismatchingData[key] = [objA[key], objB[key]];
      }
    } else {
      equal = false;
      extraKeysInA.add(key);
    }
  }
  
  // Move to a function and call it.
  const keysInObjB = Object.keys(objB);
  for(let key of keysInObjB) {
    if(key in objA) {
      if(objA[key] != objB[key]) {
        equal = false;
        dismatchingData[key] = [objA[key], objB[key]];
      }
    } else {
      equal = false;
      extraKeysInB.add(key);
    }
  }
  return {equal, extraKeysInA, extraKeysInB,  dismatchingData};
}

checkEquality(null, null);
checkEquality(null, undefined);
checkEquality({}, {});
checkEquality(null, {});

// -------
checkEquality({key1: 'd1', key2: 'd2', key3: 'd3'}, {key4: 'zz', key3: 'd4'})
// ---
checkEquality({key1: 'd1', key2: 'd2'}, {key1: 'd1', key2: 'd2'})

