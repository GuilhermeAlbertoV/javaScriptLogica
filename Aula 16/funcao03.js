function teste(a) {
    var array = [5, 4, 7, 3, 1, 4]
    a = array
    if (array.length == 5) {
        array.sort()
    } else {
        array[6] = 2
    }
    return a
}

console.log(teste(6))