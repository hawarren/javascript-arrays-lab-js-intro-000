const app = "I don't do much."
var kittens = [];
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens = kittens.shift(name);
  return kittens;
}