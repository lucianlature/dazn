# Goal

The goal is to build a UI to search the Movie DB: The user should be able to enter some text into a search field, see and browse the results from the Movie DB. Anything else it does it up to you!

## TODO
  - More tests!
  - make the search input more user friendly
  - implement an autocomplete feature for movie titles
  - include TV shows into the results, maybe a tabbed panel could serve better
  - more movie info to be added
  - the API KEY is included in the source code, that's a big NO from the security point of view
  - further testing on other browsers and devices
  - I wanted initially to live deploy the app on [now](https://zeit.co/now),  but for some reason `browserify` keeps crashing.

## Setup
Install it:

```bash
npm install
```
then
```bash
npm start
```

## Running the tests
```bash
npm test
```

## Features
  - Plain vanilla ES6 JavaScript code, no jQuery, no Angular, no React.
  - 🚄 simple `http-server` as dev server.
  - 🎭 `Mocha` as the test framework.
  - 🖌 Very basic CSS support - it's up to you to extend it with CSS Modules etc.
  - 🚀 Full ES2017+ support - use the exact same JS syntax across the entire project. No more folder context switching! We also only use syntax that is stage-3 or later in the TC39 process.
  - 🎛 Preconfigured to support development and optimised production builds.
  - ❤️ Preconfigured to deploy to `now` with a single command.
