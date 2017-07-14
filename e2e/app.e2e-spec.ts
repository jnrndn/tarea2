import { Tarea2Page } from './app.po';

describe('tarea2 App', () => {
  let page: Tarea2Page;

  beforeEach(() => {
    page = new Tarea2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
