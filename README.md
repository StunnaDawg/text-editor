# text-editor

## Description

The following application is a text editor application, used to write whatever text you want! My motivation for creating this application was to create a text editor that can be downloaded locally to your personal computer. this particualr application uses idb to help use the indexedDB. The application also uses service workers to help with caching. During the development of this project I learned how to retrieve and store data using the idb wrapper for indexedDB. I also learned how to create an installable application as well as utilzie service workers to help with caching! I ran into problems on figuring out which get methods to utilzie for idb. I also ran into problem with the service workers, encountaring multiple errors.
## Installation 

Though this application is served on a server via Heroku you are able to install it following these steps:

1. Clone the repository in the CLI with the following command: ‘git clone https://github.com/StunnaDawg/text-editor
2. Make sure you have nodejs(https://nodejs.org/) installed
3. Through the CLI cd into the text-editor directory
4. Ensure to run the command "npm install" to install the dependencies
5. Use the command "npm run start" to start the server and acess the application
6. Follow the link into your browser of choice

## Usage

Upon downloading the application make sure you do the following:
- run 'npm install' so that the dependcies are installed
  - If the dependencies do not exist: run 'npm install uuid', and 'npm install express' to download the latest version of inquirer
- run 'npm run start' to start the sever locally'

## Screenshot

[!Alt](./images/Screenshot%202023-06-01%20at%2010.15.25%20PM.png)
[!Alt](./images/Screenshot%202023-06-01%20at%2010.16.07%20PM.png)

## Deployed Link

https://jwa-text-editor.herokuapp.com/

## Dependencies 
- NodeJS: https://nodejs.org/ 
- Express.JS: http://expressjs.com/
- idb: https://www.npmjs.com/package/idb#opendb
- concurrently: https://www.npmjs.com/package/concurrently
- nodemon: https://www.npmjs.com/package/nodemon
- if-env: https://www.npmjs.com/package/if-env
