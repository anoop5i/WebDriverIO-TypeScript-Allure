class Search_Page {
  public get search() {
    return browser.element('//input[@name="q"]');
  }

  public get searchButton() {
    return browser.element('//input[@value="Google Search"]');
  }

  public open(): void {
    browser.url("/login");
  }

  public setSearch(item: string): void {
    this.search.waitForExist();
    this.search.keys(item);
  }
}
export default Search_Page;
