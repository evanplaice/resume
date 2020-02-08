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

*resume.config.js*
```javascript
module.exports = {
  // Whitelist Sections
  sections: [
    'basics',
    'work',
    'volunteer',
    'education',
    'skills',
    'interests',
    'references',
    'projects',
  ],
  // Whitelist Jobs by Employer Name
  jobs: [
    'Open Source',
    'Coder Technologies Inc',
    'JPA Inc (RIOS)'
  ],
  // Whitelist Projects by Name
  projects: [
    '@VanillaWC',
    '@VanillaES',
    'RIOS'
  ]
}
```

## License

**Non-Source Content**

All non-source-code content herein is covered under the [**Creative Commons CC-BY-SA 4.0**][] license.

**Source Code**

Source Code is licensed under MIT

[**Creative Commons CC-BY-SA 4.0**]: https://choosealicense.com/licenses/cc-by-sa-4.0/