# Just HTML View Engine for Express.js

> Static HTML view engine for Node.js


### Installation

```bash
$ npm install justhtml
```

```javascript

var justhtml = require('justhtml');

app.set('views', __dirname + '/views');
app.set("view options", {layout: false});
app.engine('html', justhtml.__express);
app.set('view engine', 'html');
````

### Author: [Leandro Boffi][0]

[0]: http://github.com/leandrob/
