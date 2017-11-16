var str = "ABCD";

var levelArray = [];
var metaArray = [];
var metaMetaArray = [];



levelArray = swapItController(str, 0);

console.table(levelArray);





for(var i = 0; i < levelArray.length; i++) {
  metaArray.push(swapItController(levelArray[i], 1));
}

console.table(metaArray);





for(var i = 0; i < metaArray.length; i++) {
    for(var j = 0; j < metaArray[i].length; j++) {
        metaMetaArray.push(swapItController(metaArray[i][j], 2));
    }
}

console.log("metaMetaArray");
console.table(metaMetaArray);













function swapItController(str, fixedAmount) {
  
  var tempArray = [];
  
  for(var i = 0; i < str.length - fixedAmount; i++) {
    tempArray.push(swapIt(str, fixedAmount, i + fixedAmount));
  }
  
  return tempArray;
}




function swapIt(str, posA, posB) {
  
  if(posA === posB) {
    return str;
  }
 
  var tempStr = str.slice(0, posA) + str.slice(posB, posB + 1) + 
      str.slice(posA + 1, posB) + str[posA] + str.slice(posB + 1, str.length);

  return tempStr;
}