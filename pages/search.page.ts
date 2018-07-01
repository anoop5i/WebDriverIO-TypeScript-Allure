class Search_Page {
  public get username() {
    return browser.element("#username");
  }
  public get password() {
    return browser.element("#password");
  }
  public get form() {
    return browser.element("#login");
  }
  public get flash() {
    return browser.element("#flash");
  }
  public get search() {
    return browser.element('//input[@name="q"]');
  }

  public get searchButton() {
    return browser.element('//input[@value="Google Search"]');
  }

  public open(): void {
    browser.url("/login");
  }
  /**
   *
   */
  public submit(): void {
    this.form.submitForm();
  }

  public setSearch(item: string): void {
    this.search.waitForExist();
    this.search.keys(item);
  }
}
export default Search_Page;
