# About this repository

This repository serves as frontend code, bootstraped with Vite for the technical exercise.

## Steps to setup and run locally

- Clone this repository
- Once cloning is complete, run `npm install` to install all dependency packages
- To get the project running, use the `npm run dev` script and go to `localhost:5173` on your machine.
- Once the app is succesfully running you will be able to see invoices dashboard screen.

### A note about Mui tabs not working on mobile
- On mobile devices, the tabs created using Mui appear to be non responsive.
- This looks like a bug from the [Mui side](https://github.com/mui/material-ui/issues/32749) and the [suggested workarounds](https://stackoverflow.com/questions/72085892/mui-the-value-provided-to-the-tabs-component-is-invalid-the-tab-with-this-v) don't seem to be working.
- For filtering table data based on selected tabs, please view the tabs and table on bigger screens. 