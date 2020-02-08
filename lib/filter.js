const fs = require('fs');
const config = require('../resume.config.js');

const [ input, output ] = process.argv.slice(2);

function main() {
  if (!input) { throw Error("Error: Missing the input path"); }
  if (!output) { throw Error("Error: Missing the output path"); }

  // read contents
  let resume = JSON.parse(fs.readFileSync(`./${input}`, 'utf8'));

  // filter contents
  resume = trimResume(resume, config.sections);
  resume = trimSocial(resume, config.sections);
  resume = trimEmployment(resume, config.jobs);
  resume = trimProjects(resume, config.projects);

  // write contents
  fs.writeFile(output, JSON.stringify(resume, null, 2), (err) => {
    if (err) { console.log(err); }
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

function trimSocial(resume, sections) {
  if (!sections.includes('profiles')){
    resume.basics = Object.filterByKey(resume.basics, key => {
      return key !== 'profiles';
    });
    return resume;
  }
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
