# Backend

## Node

- create curriculum-back directory

  - > touch index.js
    >
    > npm init -y
    >
    > npm install express

  - http://expressjs.com/en/starter/hello-world.html#hello-world-exampleNode

* create server/

  - api/
    - curricula.js
      - http://expressjs.com/en/starter/basic-routing.html#basic-routing
    - index.js
  - app.js

  - [Routing](http://expressjs.com/en/guide/routing.html#routing)

  - [Advanced RESTClient Chrome Extension](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo/related)
  - npx - point to local dependencies
  - routing with middlewares

<br/>

<br/>

## MongoDB, Mongoose

- Mongo automatically adds "id"

- import db to node app

  - server/index.js
    - require("../db");
    - the db runs

- check mongo shell

  - > show dbs

    - db list is shown in terminal

  - > use curriculumapp // determine which db that I am going to use

    > db // current database that I am looking at

    > show collections // curriculums
    >
    > db.curriculums.find() // logs db

  - > exit // to exit
