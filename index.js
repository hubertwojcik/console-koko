function getCallerInfo() {
  const error = new Error();
  const stack = error.stack.split("\n")[3];

  const match =
    stack.match(/at (.*?) \((.*?):(\d+):(\d+)\)/) ||
    stack.match(/at (.*?):(\d+):(\d+)/);

  if (match) {
    const method = match[1] ? match[1].trim() : "anonymous";
    const fullPath = match[2] ? match[2].trim() : null;

    if (fullPath) {
      const line = match[3].trim();
      return { method, file: stack.split("/").pop(), line };
    }
  }

  return { method: "unknown", file: "unknown", line: "unknown" };
}

export function koko(message) {
  const callerInfo = getCallerInfo();

  const formattedMessage =
    typeof message === "object" ? JSON.stringify(message, null, 2) : message;

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

  console.log(rooster);
  console.log(`Method: ${callerInfo.method}`);
  console.log(`File: ${callerInfo.file}`);
  console.log(`Line: ${callerInfo.line}`);
  console.log(` KOKO to console: \n ${formattedMessage}`);
}
