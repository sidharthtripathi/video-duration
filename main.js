const fs = require('fs')
const {TotalDuration,grabvids} = require('./modules.js')

TotalDuration('./')
.then(t=>console.log(`${t.toFixed(2)} minutes of content`))

