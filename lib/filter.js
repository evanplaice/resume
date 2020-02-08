var fs = require('fs');
var path = require('path');
var config = require('../resume.config.js');

function main() {
  // collect the command-line args
  var args = process.argv.slice(2);
  var inputFile = args[0];
  var outputFile = args[1];
  if (!args[0]) {
    console.log("Error: Missing the input path to [resume].json.");
    process.exit(1);
  }
  if (!args[1]) {
    console.log("Error: Missing the output path to [resume].json.");
    process.exit(1);
  }

  // read in the full resume
  var inputPath = path.join('.', inputFile);
  var resume = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

  // filter content
  var resume = trimResume(resume, config.sections);
  var resume = trimEmployment(resume, config.jobs);
  var resume = trimProjects(resume, config.projects);

  // write the results to file
  fs.writeFile(outputFile, JSON.stringify(resume, null, 2), (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// content filters
// --------------------------

// filter out unwanted sections
function trimResume(resume, sections) {
  return Object.filterByKey(resume, key => {
    return sections.includes(key);
  });
}

// list [num] number of employment entries
function trimEmployment(resume, jobs) {
  resume.work = resume.work
    .filter((job) => {
      return jobs.includes(job.name);
    });

  return resume;
}

function trimEmploymentDates(resume, projects) {
  resume.projects = resume.projects
    .filter((project) => {
      return projects.includes(project.name);
    });

  return resume;
}

function trimProjects(resume, projects) {
  resume.projects = resume.projects
    .filter((project) => {
      return projects.includes(project.name);
    });

  return resume;
}

// helpers
// --------------------------

Object.prototype.filterByKey = function (obj ,predicate) {
  return Object.fromEntries(Object.entries(obj)
    .filter(obj => predicate(obj[0])));
}

// entry
// --------------------------

main();
