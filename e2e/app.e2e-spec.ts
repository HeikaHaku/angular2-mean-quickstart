import { Angular2MeanQuickstartPage } from './app.po';

describe('angular2-mean-quickstart App', function() {
  let page: Angular2MeanQuickstartPage;

  beforeEach(() => {
    page = new Angular2MeanQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
