var fs = require('fs');
var path = require('path');

// collect the command-line args
var args = process.argv.slice(2);
if (!args[0]) {
  console.log("Error: Missing the input path to [resume].json.");
  process.exit(1);
}
var source = args[0];
var name = args[0].replace(/\.[^/.]+$/, "");

// parse package.json
var packagePath = path.join('.', 'package.json');
var package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// build the scripts
package.scripts['validate'] = `npx hackmyresume VALIDATE ./src/${source}`;
package.scripts['build:clean'] = `rm ./dist/compact-html.css && rm ./dist/compact-pdf.css && rm ./dist/${name}.pdf.html && rm ./dist/tmp.json`;
package.scripts['build:filter'] = `node ./lib/filter.js ./src/${source} ./dist/tmp.json`;
package.scripts['build:build'] = `npx hackmyresume BUILD ./dist/tmp.json TO ./dist/${name}.html ./dist/${name}.pdf -t compact`;

// write the scripts back to package.json
fs.writeFile(packagePath, JSON.stringify(package, null, 2), (err) => {
  if (err) {
    return console.log(err);
  }
});

// create the resume file if it doesn't already exist
const resumePath = `./src/${source}`;
if (!fs.existsSync(resumePath)) {
  fs.copyFile('./lib/blank.json', `${resumePath}`, (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });
}

