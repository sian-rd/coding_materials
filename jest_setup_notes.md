# JEST TESTING SETUP

1. Create a directory for your project
2. In the terminal `cd` into your project directory
3. Run `npm install --save-dev jest` in the terminal
4. Update the package.json file to contain `scripts` and `type`:

```js
{
  "scripts": {
    "test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js"
  }, 
  "type": "module",
  "devDependencies": {} // keep exisiting dependencies
}
```

5. In the top level of your project directory, create a file called `functions.js` (or name relevant to your project's functionality)

5. In the top level of your project directory, create a directory called `__tests__`. Inside it create a file called `functions.test.js` (or name matching your functions file)

6. Run tests with `npm test`