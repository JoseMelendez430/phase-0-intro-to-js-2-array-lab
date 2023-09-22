const cats = ["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    let newCats = [...cats,name]; 
    return newCats
}   
function prependCat(name){
    let newnewCats = [name,...cats];
    return newnewCats
}
function removeLastCat(name){
    let copyofCats = [...cats.slice(0,2)];
    return copyofCats
}
function removeFirstCat(name){
    let copyofcopyofCats = [...cats.slice(1)];
    return copyofcopyofCats
}