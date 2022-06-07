const args = process.argv.slice(2);

const time = function (delay) {
  delay = Number(delay);
  if (!isNaN(delay)) {
    setTimeout(beep, delay * 1000)
  }
  
}
function beep() {
  process.stdout.write('\x07');
}
for (const num of args) {
  time(num)
}