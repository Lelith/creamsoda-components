# component-library

Living Styleguide by @thecakedesk

Licensed under [GNU LESSER GENERAL PUBLIC LICENSE](https://www.gnu.org/licenses/lgpl-3.0.de.html)

## Usage
### For react based applications

Install the cream-soda library package from npm

`npm install -s creamsoda-components`

Now you should have in your node modules a folder from gsy-component-library which contains a build folder. In this build folder are all ready to use pre-compiled components.
If you want to use one of them in a react render function just import the component you want to use:

`import Button from 'creamsoda-components/build/'`

Every component comes with its own, already included, css. Check out the storybook demo of the component to see prop and theming options and how to set them.

For using a theme you have to wrap the components in the themeprovider component and set the name of the theme.

## Contribute

This repository is published under GLGPL-3.0, you can fork it and create Pull Requests to participate in the development of this library. Feel free to check out existing issues or create new issues if you discover a bug or miss some functionality.


Use [angular commit message format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) to commit. This allows the automatic versioning to pick the right versionnumber.

### How to develop for this repository

#### Clone repository & install dependencies

```bash
git clone https://github.com/lelith/creamsoda-components.git
cd creamsoda-components
npm install
```

#### Start the storybook demo

`npm run storybook`

The demo will reload if you make edits.
You will see the build errors and lint warnings in the console

### Create new component

Create a new folder in /lib/components/MyComponent and a index.js and MyComponent.scss file

There you write your react component and the styling.

### Write CSS for the component

These components are themeable with scss. In the file `/lib/styles/themes.scss` you can enter the variables for a new theme or see the variables of the other themes.

When writing scss for your component you should use these variables so the component is themeable.
