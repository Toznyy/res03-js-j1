let i = 0;
while (i < 101) {
    
    while (i < 50) {
        if (i % 2 === 0) {
            console.log(`${i} pair`);
            i = i + 2;
        }
        else {
            console.log(`${i} impair`);
            i = i + 2;
        }
    }
    
    while (i < 101) {
        if (i % 2 === 0) {
            console.log(`${i} pair`);
            i = i + 3;
        }
        else {
            console.log(`${i} impair`);
            i = i + 3;
        }
    }
    i++
}