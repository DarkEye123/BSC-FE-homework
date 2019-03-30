This application was developed as a part of an interview process for Banking Software Company(BSC).

There are two main parts. The backend part is developed using [graphql-yoga](https://github.com/prisma/graphql-yoga/) and [prisma-binding](https://github.com/prisma/prisma-binding). The database is using Prisma free tier service.
The service is available on [app.prisma.io](app.prisma.io). The backend is rather simplified. It provides necessary CRUD operations for Notes and Sign In/Log Out functionality with signed cookies.

Frontend part is done in Reactjs using CRA. I was thinking about Next.js and SSR, but for this sort of application it would be too big overhead.

Both parties communicate with each other using GraphQL.
Frontend part is accessible on [http://localhost:9000](http://localhost:9000), backend on [http://localhost:4000](http://localhost:4000).

Cookies used in this app are client side. They are secured by APP_SECRET and COOKIE_SECRET. Communication with Prisma server is secured
also via specific env key.

FE has small suite of cypress tests and an example of unit-test for Login.

### Running BE

Go to the fronted directory and run

```
npm install
npm run dev
```

this launches graphql-yoga server running on [http://localhost:4000](http://localhost:4000)
You can try some queries there directly.

**Note
in such a case, be sure you will set
`"request.credentials": "include"`
in the service settings available in the browser. This will enable sign in functionality.

### Running FE
You need to have running yoga-server before this step.
Go to the fronted directory and run

```
npm install
npm start
```

This will run the app in the development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### Running tests

There is an example of unit-test for Sign In page with mocked mutations.
to run it write

```
npm test
```

this launches the test runner in the interactive watch mode.<br>

I also included [Cypress](https://www.cypress.io/) tests
You can run them by:

```
npm run cy
```

#### storybook

This project has its own storybook included.
To see it, run

```
npm run storybook
```

### Why is .env here?

This is just example app. To ease the usage for the reviewer I included it. Be aware, that it considered as a very bad idea for the production.

**Note
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
