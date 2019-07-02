# Programmatic Japanese

A Node app that lets you build your own Hiragana flashcards using JSON objects.

## Currently working

Able to send GET requests to /api/{consonant}/ and get JSON response

```JSON
{
"consonant": "k",
"phonemes": {
"a": "か",
"i": "き",
"u": "く",
"e": "け",
"o": "こ"
    }
}
```

- Connected Mongoose / mongodb

- Added login / user functionality

- Lets user build own vocabulary by forming JSON objects

- handles a successful sign up (currently returns json response)

- merged profile page

- made profile show word bank

- completed flash card page

## To do

- Not all mobile devices are currently able to display the flash cards properly.

## Acknowledgements

Big thanks to [Wanakana.js](https://wanakana.com)