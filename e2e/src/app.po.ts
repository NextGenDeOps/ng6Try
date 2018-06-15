import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root my-nav mat-sidenav-container mat-sidenav mat-toolbar')).getText();
  }

  getMenuList() {
    return new Promise((resolve, reject) => {
      element(by.css('.mat-nav-list')).all(by.css('.mat-list-item')).then(function (items) {
        resolve(items);
      },
        (err) => { reject(err)});
    });
  }
}
