# Evan Plaice's Resume

The master branch contains the 'generic' version of my resume. Feature branches contain employer-specific versions.

**Versions**
- [Evan.Plaice-FullStack[Full].json](https://evanplaice.github.io/resume/Evan.Plaice-FullStack[Full].json)
- [Evan.Plaice-FullStack[Full].pdf](https://evanplaice.github.io/resume/Evan.Plaice-FullStack[Full].pdf)
- [Evan.Plaice-FullStack[Short].json](https://evanplaice.github.io/resume/Evan.Plaice-FullStack[Short].json)
- [Evan.Plaice-FullStack[Short].pdf](https://evanplaice.github.io/resume/Evan.Plaice-FullStack[Short].pdf)

## Usage

Create/update a `resume.json` file in the project root

Validate the resume contents with

```sh
npm run validate
```

Build the JSON/HTML/PDF outputs

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