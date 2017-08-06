import { AngularMaterialTabsPage } from './app.po';

describe('angular-material-tabs App', () => {
  let page: AngularMaterialTabsPage;

  beforeEach(() => {
    page = new AngularMaterialTabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
