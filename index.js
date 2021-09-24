const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
     const aCats = [ ...cats.slice(0), name];
     return aCats;
}

function prependCat(name) {
    const pCats = cats.slice();
    pCats.unshift(name);
    return pCats;
}

function removeLastCat() {
    const rCats = cats.slice(0, -1);
    return rCats;
}

function removeFirstCat() {
    const fCats = cats.slice(1);
    return fCats;
}