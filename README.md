# Console KOKO 🐓

**Console KOKO** is a fun and creative npm package that logs a detailed ASCII art rooster along with a custom message, large "KOKO KOKO" text, and information about where the log was called from (method, file, and line).

## Features

- 🐔 Logs a beautifully crafted ASCII art rooster to the console.
- 🎉 Displays a large "KOKO KOKO" text for extra fun.
- 🔍 Provides detailed information about the method, file, and line number where the log was called.
- 📝 Fully customizable message to log alongside the rooster.

## Installation

You can install the package via npm:

```bash
npm install console-koko
```

## Usage

To use the package in your project, simply import the koko function and call it with your message.

```bash
import { koko } from "console-koko";

koko("This is a simple string message!");
```

Output

```
                   //			       __
 ww_          ___.///			      W._`\._
o__ `._.-'''''    //			      |/ \   `-._._._.-//
|/  \   ,     /   //			       _  \ `.__.'  _//
     \  `',,,' _///			      `v'\_\`-.  \--'   _
      `-.  \--'   .'.			    .^.`..    \_/_/   <'\-_//
         \_/_/    `.,'			   .' `.  ``   // \\   `-.-'
          \\\\				   `'_'`     -'` -'`    ''
         ,,','`    			    ' `

  K   K   OOO   K   K   OOO        K   K   OOO   K   K   OOO
  K  K   O   O  K  K   O   O       K  K   O   O  K  K   O   O
  KKK    O   O  KKK    O   O       KKK    O   O  KKK    O   O
  K  K   O   O  K  K   O   O       K  K   O   O  K  K   O   O
  K   K   OOO   K   K   OOO        K   K   OOO   K   K   OOO

Message: This is a simple string message!
Method: anonymous
File: test.js
Line: 3

```
