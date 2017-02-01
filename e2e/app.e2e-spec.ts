import { TccAppPage } from './app.po';

describe('tcc-app App', function() {
  let page: TccAppPage;

  beforeEach(() => {
    page = new TccAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
