import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display Menu', () => {
    expect(page.getParagraphText()).toEqual('Menu');
  });

  it('should have  3 menu items', () => {
    page.getMenuList().then((items) => {
      expect(items.length).toBe(3);
      expect(items[0].getText()).toBe('First Page');
      expect(items[1].getText()).toBe('Editable Data Table');
      expect(items[2].getText()).toBe('Reactive Forms');
    });
  });
});
