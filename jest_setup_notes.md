# JEST TESTING SETUP

1. Create a directory for your project
2. In the terminal `cd` into your project directory
3. Run `npm install --save-dev jest` in the terminal
4. Open the newly created package.json file and update it to contain `scripts` and `type`:

```js
{
  "scripts": {
    "test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js"
  }, 
  "type": "module",
  "devDependencies": {} // keep exisiting dependencies
}
```

5. Create the following directory stucture (exchanging 'myProject' for something relevant your project):

```
> myProject
  + myProject.js
  > __tests__
    + myProject.test.js
```

6. Write your functions definitions in 'myProject.js' and your tests in the 'myProject.test.js'
7. Run the tests with `npm test` at the top level of your project