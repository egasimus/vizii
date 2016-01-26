require('riko').M({

  blend:
    0.5,

  font:
    require('fs').readFileSync(require('path').resolve(__dirname, '../data/font.css'), 'utf8'),

  src:
    "https://upload.wikimedia.org/wikipedia/commons/d/de/Philosophy-final-state-1907.jpg"

})

