# generator-express-lambda [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

A scaffolding tool to build an Express app quickly, for Serverless deployment to AWS Lambda, using Claudia.js.

It uses Yeoman to automatically generate a project with **Express** & **Claudia.js**, ready to deploy to **AWS Lambda**.


## Dependencies

First, install [Yeoman](http://yeoman.io) and generator-express-lambda using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

You'll also need `awscli`. This can be installed via brew: `brew install awscli`


## Installation

To install, you'll need to globally install this package along with yo and claudia, if you don't already have it.

```bash
npm install -g yo claudia generator-express-lambda
```


## Creating a New Project

Make a new directory for your project, and navigate into it.

```bash
mkdir <project-name>
cd <project-name>
```

Then generate your new project (from inside your new project directory):

```bash
yo express-lambda
```

This will create a ready-to-deploy Express application you can start your project from. It includes minimal dependencies to run your project locally, and deploy using Claudia.js.

## AWS Free Tier

The AWS Free Tier includes a million invocations for your Lambda apps per month. 
You can find out more here: https://aws.amazon.com/free/


## Getting your AWS Keys

### To get your access key ID and secret access key

1. Open the <a href="https://console.aws.amazon.com/iam/home" target="_blank">IAM console</a>.
2. From the navigation menu, click **Users**.
3. Select your IAM user name.
4. Click **User Actions**, and then click **Manage Access Keys**.
5. Click **Create Access Key**.
  * Your keys will look something like this:
    * Access key ID example: `AKIAIOSFODNN7EXAMPLE`
    * Secret access key example: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
    * Click **Download Credentials**, and store the keys in a secure location.

### Important

Your secret key will no longer be available through the AWS Management Console; you will have the only copy. Keep it confidential in order to protect your account, and never email it. Do not share it outside your organization, even if an inquiry appears to come from AWS or Amazon.com.

## Setting up your AWS Keys

Run the following from your terminal to create your default AWS configuration, if one does not exist:

```bash
awscli configure
```

Alternatively, if you already have keys setup and wish to create keys specifically for **claudia.js**, run:

```bash
awscli configure --profile claudia
```

This will create keys under the profile **[claudia]**, and leave the rest of your keys in tact.


## Deploying your Project

When you are ready to deploy your project, run the following:

```bash
npm run deploy
```

## Updating your Project

After deployment, to update your project, run:

```bash
npm run update
```


# About Yeoman Generator

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-express-lambda.svg
[npm-url]: https://npmjs.org/package/generator-express-lambda
[travis-image]: https://travis-ci.org/kidGodzilla/generator-express-lambda.svg?branch=master
[travis-url]: https://travis-ci.org/kidGodzilla/generator-express-lambda
[daviddm-image]: https://david-dm.org/kidGodzilla/generator-express-lambda.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kidGodzilla/generator-express-lambda
