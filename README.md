# FoodieDelight

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14
The app focuses on simple CRUD operation placholder from front end point of view, which can be further modified to use a actual live server to return and manipulate data.

Currently the app uses mock jsons as data and all the operation remains in the front end with no connection to any backend servers.

An Authenticated User will be able to,
1. Add a restraurant.
2. Edit an existing restraurant.
3. Delete and existing restraurant.

# Technologies/Libraries Used

1. Angular (V14)
2. Firebase 
3. AgGrid
4. Bootstrap

## Development server

1. Clone the repository.
2. Make sure you are in sync with the angular version (14) and node version.
3. Run 'npm install' to install all the required dependencies.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
5. You can use user (ADMIN) and pass (ADMIN) to bypass the firebase authentication unless you have configured the firebase using your configs.
6. Play around!

## Video - How the App Works.


https://github.com/user-attachments/assets/74d495ea-1875-4511-9662-07021f7c377d




## Firebase 

This app contains a firebase integration, for which to run smoothly requires the configurations to be added in "environment.ts" file.
Adding these configs will let you use the "Sign in with Gmail feature Also".

Although there is bypass for the below user for thos who wants to play around with the app -
UserName/Email - ADMIN (All Caps)
Password - ADMIN (All Caps)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
