const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numbers = {
  '\u0031': 1,
  '\u0032': 2,
  '\u0033': 3,
  '\u0034': 4,
  '\u0035': 5,
  '\u0036': 6,
  '\u0037': 7,
  '\u0038': 8,
  '\u0039': 9
}

stdin.on('data', (key) => {
  // any numeric key
  if (Object.keys(numbers).includes(key)) { 
    process.std.out(`Setting timer for ${key} seconds...`)
    setTimeout(() => process.stdout.write('\x07'), key * 1000)
  // press b
  } else if (key === '\u0062') { 
    process.stdout.write('\x07');
  // ctrl+c to kill app
  } else if (key === '\u0003') { 
    process.stdout.write('\nThanks for using me, ciao!\n');
    process.exit();
  }
});