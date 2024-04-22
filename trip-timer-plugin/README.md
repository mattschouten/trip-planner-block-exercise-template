# Getting Started with the Block Plugin

This project was bootstrapped with [Create Block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/).

It's a "Getting Ready to Leave the House" block.  Some [details](app.md).

## Included Environment Credentials

The login credentials are username: `admin` password: `password`.

## Pre-requisities

To install the node modules needed to run the application, you'll need to run `npm install` before starting.  This was developed under Node v18.16.0.  (The application may fail to install modules or run incorrectly under earlier versions of Node.)

You will also need Docker installed and running on your system to be able to boot up the included WordPress environment. There are instructions available for installing Docker on [Windows](https://docs.docker.com/desktop/install/windows-install/) (we recommend the WSL2 backend), [macOS](https://docs.docker.com/docker-for-mac/install/), and [Linux](https://docs.docker.com/desktop/install/linux-install/).

You will also need `git` installed on your system. [Here are the instructions to install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the plugin in the development mode.
You'll need to run `npm run env:start` to first have an environment and view the block in the editor inside WordPress
You may also see any lint errors in the console.

### `npm run env:start`

Launches `wp-env` which lets you easily set up a local WordPress environment for building and testing this plugin.

This relies on Docker being installed in your system, Node.js, and git. (See the Prerequisites at the top of this page.)

Learn more in the [official documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/).

Once the environment is setup, your WordPress website will be accessible by default at http://localhost:8888, the login credentials are username: `admin` password: `password`.

### `npm run env:stop`

Stop the included WordPress environment.

### `npm run build`
Builds the plugin for production to the `build` folder.

It correctly bundles the block in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your block is ready to be deployed!
