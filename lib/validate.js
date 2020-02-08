const resumeSchema = require('resume-schema');
const [ source ] = process.argv.slice(2);
const resume = require(`${process.cwd()}/${source}`);

resumeSchema.validate(resume, function (err, report) {
  if (err) {
    console.error('The resume was invalid:', err);
    return;
  }
  console.log('Resume validated successfully');
});