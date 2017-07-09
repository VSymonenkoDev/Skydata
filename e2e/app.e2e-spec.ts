import { SkydataPage } from './app.po';

describe('skydata App', () => {
  let page: SkydataPage;

  beforeEach(() => {
    page = new SkydataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
