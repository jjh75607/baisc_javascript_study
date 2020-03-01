for (var i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}
//

for (var i = 5; i > 0; i--) {
    console.log('*'.repeat(i));
}
//

for (var i = 10; i >= 2; i -= 2) {
    console.log('*'.repeat(i));
}
//

for (var i = 1; i <= 16; i *= 2) {
    console.log('*'.repeat(i));
}
//

for (var i = 5; i > 0; i--) {
    console.log(' '.repeat(5 - i) + '*'.repeat(i));
}
//

for (var i = 9; i > 0; i -= 2) {
    console.log(' '.repeat((9 - i) / 2) + '*'.repeat(i));
}
//

for (var i = -4; i < 5; i += 2) {
    console.log(' '.repeat(Math.abs(i / 2)) + '*'.repeat(5 - Math.abs(i)))
}
//