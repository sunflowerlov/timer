const args = process.argv.slice(2)
//console.log(args)

const time = function (args) {
  args.sort(function (a, b) {
    return a - b;
  })
  console.log(args)
  for (const each of args) {
    if (!isNaN(Number(each))) {
      if (each > 0) {
        setTimeout(() => {
          process.stdout.write('\x07')
        }, each * 1000)
      }
    }
  }
}

time(args)