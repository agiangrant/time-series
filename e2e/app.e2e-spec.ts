import { CleanSparkPage } from './app.po';

describe('clean-spark App', () => {
  let page: CleanSparkPage;

  beforeEach(() => {
    page = new CleanSparkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
