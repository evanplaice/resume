# Evan Plaice's Resume

The master branch contains the 'generic' version of my resume. Feature branches contain employer-specific versions.

## Usage

Setup points the utility scripts to the correct source resume.json file.

```sh
npm run setup [resume.json]
```

Once that's done you can either validate...

```sh
npm run validate
```

Or, generate the output as HTML/PDF

```sh
npm run build
```

## Filtering

Since it's usually desirable to trim a resume down to a consumable size, this utility includes the ability to selectively add/remove different sections of the source.

The options include:

```javascript
module.exports = {
	// Display/Hide dates
  noDates: true,
  // Include/Exclude entire sections
  sections: [
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
    //'recognition',
    // 'samples',
    // 'social',
    // 'references',
    // 'testimonials',
    // 'extracurricular',
    // 'interests',
    // 'languages';
  ],
  // Include/exclude employers (ie matches employment.employer)
  jobs: [
    'Coder.inc',
    // 'WiseConnect Inc.',
    //'24 Hour Alert Systems',
    'Strike Group LLC.',
    'Joel Plaice & Associates Inc.',
    //'Spiral Aviation Training Company'
  ],
  // Include/Exclude projects (ie matches projects.title)
  projects: [
    'absurdum (OSS)',
    //'ng2-resume (OSS)',
    //'ng2-markdown (OSS)',
    'node-ftpsync (OSS)',
    'jquery-csv (OSS)',
    'SharpPcap/Packet.Net (OSS)',
    'Replacement Instructor Operating Station (Proprietary)'
  ]
}
```

## License

**Non-Source Content**

All non-source-code content herein is covered under the [**Creative Commons CC-BY-SA 4.0**][] license.

**Source Code**

Source Code is licensed under MIT

[**Creative Commons CC-BY-SA 4.0**]: https://choosealicense.com/licenses/cc-by-sa-4.0/