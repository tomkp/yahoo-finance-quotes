# Yahoo Finance Quotes

> Fetch stock prices from the Yahoo finance api


## Install

```sh
$ npm install --save yahoo-finance-quotes
```


## Usage

```js
var fetchQuotes = require('yahoo-finance-quotes');


fetchQuotes(["ISF.L", "EMG.L", "LMI.L"])
    .then((quotes) => {
        console.info(quotes);
    })
    .catch((response) => {
        console.error(response);
    });

```


## License

MIT © [tomkp](http://tomkp.com)


