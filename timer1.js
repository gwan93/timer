// node timer1.js 10 3 5 15 9 0 monkey
const userInput = process.argv.slice(2);

if (userInput.length === 0) {
  console.log('Please provide an input');
}

for (const input of userInput) {
  const toNumber = parseInt(input);
  if (toNumber <= 0 || isNaN(toNumber)) {
    console.log('i skipped', toNumber);
  } else {
    setTimeout(() => process.stdout.write(`${toNumber}`), toNumber*1000)
  }
  
}

// timer noise
// process.stdout.write('\x07');
// my os doesn't have a system noise. so I will output a '.' instead