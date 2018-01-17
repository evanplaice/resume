const sections = [
  'name',
  'meta',
  'info',
  'contact',
  // 'location',
  'employment',
  'projects',
  'skills',
  // 'education',
  // 'affiliation',
  // 'service',
  // 'disposition',
  // 'writing',
  // 'reading',
  // 'speaking',
  // 'governance',
  'recognition',
  // 'samples',
  // 'social',
  // 'references',
  // 'testimonials',
  // 'extracurricular',
  // 'interests',
  // 'languages';
];

const jobs = [
  'WiseConnect Inc.',
  //'24 Hour Alert Systems',
  'Strike Group LLC.',
  'Joel Plaice & Associates Inc.',
  //'Spiral Aviation Training Company'
];

const projects = [
  //'ng2-resume (OSS)',
  'ng2-markdown (OSS)',
  'node-ftpsync (OSS)',
  'jquery-csv (OSS)',
  'SharpPcap/Packet.Net (OSS)',
  'Replacement Instructor Operating Station'
];

// --------------------------

function main() {
  var fs = require('fs');
  var path = require('path');

  // collect the command-line args
  var args = process.argv.slice(2);
  var inputFile = args[0];
  var outputFile = args[1];

  // read in the full resume
  var inputPath = path.join(__dirname, inputFile);
  var resume = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

  // filter content
  var resume = trimResume(resume, sections);
  var resume = trimEmployment(resume, jobs);
  var resume = trimProjects(resume, projects);

  // write the results to file
  fs.writeFile(outputFile, JSON.stringify(resume, null, 2), (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// content filters
// --------------------------

Object.prototype.filterByKey = function (obj, predicate) {
  return Object.keys(obj)
    .filter(key => predicate(key))
    .reduce((out, key) => {
      out[key] = obj[key];
      return out;
    }, {});
}


// filter out unwanted sections
function trimResume(resume, sections) {
  return Object.filterByKey(resume, key => {
    return sections.contains(key);
  });
  console.log(resume);
}

// list [num] number of employment entries
function trimEmployment(resume, jobs) {
  for (key in resume) {
    if (key === "employment") {
      resume[key].history = resume[key].history.filter((job) => {
        return jobs.contains(job.employer);
      });
    }
  }
  return resume;
}

function trimProjects(resume, projects) {
  for (key in resume) {
    if (key === "projects") {
      resume[key] = resume[key].filter((project) => {
        return projects.contains(project.title);
      });
    }
  }
  return resume;
}

// helpers
// --------------------------

Object.prototype.filterByKey = function (obj, predicate) {
  return Object.keys(obj)
    .filter(key => predicate(key))
    .reduce((out, key) => {
      out[key] = obj[key];
      return out;
    }, {});
}

// comparator to see if array contains an entry
Array.prototype.contains = function(obj) {
  return this.indexOf(obj) > -1;
};

// entry
// --------------------------

main();
