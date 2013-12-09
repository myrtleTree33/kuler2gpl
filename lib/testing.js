var ansi = require('ansi')
  , cursor = ansi(process.stdout)

// You can chain your calls forever:
cursor
  .red()                 // Set font color to red
  .bg.grey()             // Set background color to grey
  .write('Hello World!') // Write 'Hello World!' to stdout
  .bg.reset()            // Reset the bgcolor before writing the trailing \n,
                         //      to avoid Terminal glitches
  .write('\n')           // And a final \n to wrap things up

// Rendering modes are persistent:
cursor.hex('#AAC789').bold().underline()

// You can use the regular logging functions, text will be green
console.log('This is blood red, bold text')

console.log('█');
// To reset just the foreground color:
cursor.fg.reset()

// console.log(String.fromCharCode(219))

// Clean up after yourself!
cursor.reset()