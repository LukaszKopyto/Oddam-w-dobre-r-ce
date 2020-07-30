[![Netlify Status](https://api.netlify.com/api/v1/badges/cadd87ae-0e34-4218-be61-dc191a8108f1/deploy-status)](https://app.netlify.com/sites/oddam-w-dobre-rece/deploys)

# Oddam w dobre ręce - React app

> The project aims is to create a place where every one can donate unnecessary things to trusted institutions.</br>This project is the part of the Coders Lab workshop.

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)

## General info

The application aims to create a place where everyone can donate unnecessary things to trusted institutions.

It is a website with a form that makes it easier for users to return things wich they don't need.

- this project was created as a representation of an existing UX project
- based on a design in [Adobe XD](https://xd.adobe.com/spec/f11fc670-7af2-4502-4013-c1f66f8d3332-872e/grid) without RWD
- bootstrapped with Create React App.

## Live demo

[https://oddam-w-dobre-rece.netlify.app/](https://oddam-w-dobre-rece.netlify.app/)

## Screenshots

![App screenshot](./src/assets/Oddam_w_dobre_rece.jpg)
![App screenshot2](./src/assets/OddamWDobreRece.jpg)
![App screenshot2](./src/assets/handOverForm.jpg)
![App screenshot2](./src/assets/admin.jpg)

## Technologies

- React, based on:
  - Hooks,
  - Context API,
- React-router
- React-scroll
- Formik (Multi step form)
- Fetch (send contact form to the Coders Lab API)
- Firebase (Authentication, Protected Route with Authorization, Realtime Database)
- Sass
- Netlify
- Google Fonts

## Features

- list of institutions in the form of three tabs with pagination for each
- contact form with validation and sending data to API
- smooth scrolling on Home Page
- a complex multi-step form (donate things):
  - using Formik with validation and error messages, managing form state
  - custom checkboxes, radio buttons, select element
  - date picker
  - displaying a summary of the form
  - save the form data to the Firebase Realtime Database
- display a summary on the home page based on the Firebase Realtime Database data, sent from the (donate things) form
- Firebase authentication:
  - Sign Up (register with the ability to create an admin account)
  - Sign In
  - Sign Out
  - password reset
  - session handling
- protected route with admin authorization
- administrator view with a summary of all users and data on forms

## Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
