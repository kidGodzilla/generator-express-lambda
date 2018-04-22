'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
        yosay(`Lambda Express App Generator.`)
    );

    return this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
      }
    ]).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
    );

    this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('index.js')
    );

    this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
    );
    this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('static/index.html')
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }

  end() {
    this.spawnCommand('npm', ['run', 'generate']).on('close', (code) => {
      this.log(
          yosay(`Successfully Generated your new Lambda/Express App.\n\nTo run, type \`npm start\`.\n\nTo deploy, type \`npm run deploy\`.\n\nTo Update after Deployment, type \`npm run update\`.`)
      );
    });

  }
};
