function getCallerInfo() {
  const error = new Error();
  const stack = error.stack.split("\n")[3];
  const match =
    stack.match(/at (.*?) \((.*?):(\d+):\d+\)/) ||
    stack.match(/at (.*?):(\d+):\d+/);

  if (match) {
    const method = match[1].trim();
    const file = match[2].trim();
    const line = match[3].trim();
    return { method, file, line };
  }
  return { method: "unknown", file: "unknown", line: "unknown" };
}

function koko(message) {
  const rooster = `
                   //			       __
 ww_          ___.///			      W._\`\\._
o__ \`._.-'''''    //			      |/ \\   \`-._._._.-//
|/  \\   ,     /   //			       _  \\ \`.__.'  _//
     \\  \'',,,' _///			      \`v'\\_\\'-.  \\--'   _
      \'-.  \\--'   .'.			    .^.\`..    \\_/_/   <'\\-_//
         \\_/_/    \`.,'			   .' \`.  \`\`   // \\\\   \`-.-'
          \\\\\\\\				   \`'_'\`     -'\` -'\`    ''  
         ,,','\`    			    ' \`

  K   K   OOO   K   K   OOO        K   K   OOO   K   K   OOO  
  K  K   O   O  K  K   O   O       K  K   O   O  K  K   O   O 
  KKK    O   O  KKK    O   O       KKK    O   O  KKK    O   O 
  K  K   O   O  K  K   O   O       K  K   O   O  K  K   O   O 
  K   K   OOO   K   K   OOO        K   K   OOO   K   K   OOO  
    `;

  const callerInfo = getCallerInfo();
  console.log(rooster);
  console.log(`Message: ${message}`);
  console.log(`Method: ${callerInfo.method}`);
  console.log(`File: ${callerInfo.file}`);
  console.log(`Line: ${callerInfo.line}`);
}

module.exports = koko;
