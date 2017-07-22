import { GazPage } from './app.po';

describe('gaz App', () => {
  let page: GazPage;

  beforeEach(() => {
    page = new GazPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
