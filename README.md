# Ng6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#For IE 10/11
- UnComment lines in polyfils.ts
- npm install --save classlist.js

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

- add --protractor-config e2e/protractor.conf.ie.js for specific config file
- only update ie driver. Remove other files and update update.json file to remove gecko and chrome entries
- start stand along selenium webdriver-manager start OR 
- java -Dwebdriver.ie.driver=node_modules\protractor\node_modules\webdriver-manager\selenium\IEDriverServer3.12.0.exe -jar node_modules\protractor\node_modules\webdriver-manager\selenium\selenium-server-standalone-3.12.0.jar -port 4444
- use seleniumAddress to point to selenium on started by step above

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
