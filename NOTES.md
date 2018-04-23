# Node with React fullstack web development

Notes for Stephen Grider's course on [Udemy](https://www.udemy.com/node-with-react-fullstack-web-development)

## Table of Contents

* [Stack](#Stack)
* [App Flow](#app-flow)
* [Deployment Checklist](#deployment-checklist)

## Stack

1.  Oauth
    1.  Express
    2.  MongoDB
    3.  Passport
2.  Payment
    1.  Stripe
    2.  MongoDB
3.  New campaign
    1.  React
    2.  Redux
4.  User types emails for campaign
    1.  React
    2.  Redux
    3.  Redux Form
5.  Send email to users
    1.  Email Provider
6.  Click on email button to give feedback
    1.  Email Provider
    2.  Express
    3.  MongoDB
7.  Tabulate feedback
    1.  Mongo
8.  User can see report of feedback
    1.  Mongo
    2.  React
    3.  Redux

## App Flow

1.  Login
2.  See current campaigns
3.  Add credits
4.  Add Campaign

## Deployment Checklist

1.  Dynamic Port Binding
    Cloud provider indicates the port the app must run on
    process.env.PORT

2.  Specify Node Environment
    Need to tell cloud provider which node version we want

```json
// package.json
{
  "engines": {
    "node": "8.1.1",
    "npm": "5.0.3"
  }
}
```

3.  Specify start script
    Instruct cloud provider command to run app

```json
// package.json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

4.  Create `.gitignore`
5.  Install Heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)
6.  Push to remote heroku branch (https://devcenter.heroku.com/articles/git)
