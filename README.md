# Meteor Sample App

This is a metor sample app created with the [em tool](https://github.com/EventedMind/em).
It is a test to see test issues with [velocity](https://github.com/xolvio/velocity).


## Running

To run the app you just need to call:
```
DEBUG=1 mrt
```


## Here's how the app was created:

```
meteor create meteor-sample-app
cd meteor-sample-app
meteor add coffeescript
mrt add iron-router
em init
rm meteor-sample-app.*
```

I added the following to `smart.json`
```
  "velocity": { "git": "https://github.com/xolvio/velocity" },
  "mocha-web": {
    "git": "https://github.com/mad-eye/meteor-mocha-web",
    "branch": "mtr"
  }
```
and these lines to `.meteor/packages`
```
  velocity
  mocha-web
```

```
mrt add velocity-jasmine-unit
em g:scaffold todos

DEBUG=1 mrt
```