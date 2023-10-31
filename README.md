<h4 align="center">
  This repo provides an implementation of Full Stack Shopping application.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/joao96/punch-timesheet?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joao96/punch-timesheet?style=flat-square">
</p>

<p align="center">
  <a href="#checkered_flag-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-structure">Structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-backend-setup-with-docker">Backend Setup with Docker</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-backend-setup-without-docker">Backend Setup without Docker</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test_tube-backend-testing">Backend Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-frontend-setup">Frontend Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test_tube-frontend-testing">Frontend Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#get-in-touch-monocle_face">Get in touch</a>
</p>


## :checkered_flag: Technologies
For the backend:
- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Nestjs](https://nestjs.com/)
- [Postgres - Official Image | Docker Hub](https://hub.docker.com/_/postgres)
- [Prisma](https://www.prisma.io/)
- [Swagger](https://swagger.io/specification/)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)

For the frontend:
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Jest](https://jestjs.io/)
- [FakeStoreAPI](https://fakestoreapi.com/)
- [Reduxjs/toolkit](https://redux-toolkit.js.org/)
- [styled-components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)


- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: Structure
This application is basically a simple shopping system. The Customer must provide an e-mail and name in order to login into the application. Once there, they can add products to the cart and purchase them.
If the purchase is successful, an Order will be created and added to the Customer. They can access their previous orders as well.

The products were fetched from a public API called [FakeStoreAPI](https://fakestoreapi.com/).

The Customer and Order domains are sent to a [Postgres](https://hub.docker.com/_/postgres) database.

This project is divided between two different applications, one for the backend server called _ilia-server_ and a second one for the frotend, called _web_.


## :information_source: Backend Setup with Docker

In order to run this application with Docker, it's required that you have [Git], [Docker] and [Node.js v21.x][nodejs] or higher on your computer. 

From your command line:

**Step 1:** 

Clone this repo & run a `cd` into the project's folder.

**Step 2: Starting the backend server** 

First, inside the project root:

```bash
$ cd apps/ilia-server
```

Install the dependecies:

```bash
$ npm install
```

Then, run the command that will create a Docker Image of the project and start the container:

```bash
$ docker-compose up -d
```

**Step 3:** 

Once you get the container running, open the same directory (apps/ilia-server) on a different terminal window and execute the following command in order to apply the necessary migrations:

```bash
$ npx prisma migrate dev
```

That's it! 
Now you should be able to access the Swagger page through http://localhost:3001/api and test it out.

## :information_source: Backend Setup without Docker

It is also possible to run the application without using the container created previously. The only requirement is that the postgres container stays running. So make sure only the application container is interrupted.

From your command line:

**Step 1: Install dependencies** 

```bash
$ npm install
```

**Step 2: Run the code** 

```bash
$ npm run start:dev
```

## :test_tube: Backend Testing

In order to execute the test suite, run the command below inside the ilia-server folder:

```bash
$ npm run test
```

---------

## :information_source: Frontend Setup

First, inside the project root:

```bash
$ cd apps/web
```

Install dependencies:

```bash
$ npm install
```

Then, just execute next with the following command:

```bash
$ npm run dev
```

That's it! 
Now you should be able to access the webpage through http://localhost:3000/ and test it out.


## :test_tube: Frontend Testing

In order to execute the test suite, run the command below inside the web folder:

```bash
$ npm run test
```

---------

## :page_facing_up: License

This project is licensed under the [MIT](LICENSE).


---------
## Get in touch! :monocle_face:

[![Linkedin Badge](https://img.shields.io/badge/-João%20Victor%20Poletti-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jvpoletti/)](https://www.linkedin.com/in/jvpoletti/)
[![Gmail Badge](https://img.shields.io/badge/-jvpoletti@gmail.com-ff512f?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvpoletti@gmail.com)](mailto:jvpoletti@gmail.com)

<br />

Made with :green_heart: by [João Victor Poletti](https://github.com/joao96).

[nodejs]: https://nodejs.org/
[Git]: https://git-scm.com/
[Docker]: https://www.docker.com/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
