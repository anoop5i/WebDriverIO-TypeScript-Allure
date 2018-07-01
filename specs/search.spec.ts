import * as chai from "chai";
import Search_Page from "../pages/search.page";
import StringUtils from "../utils/string.utils";

describe("Search title", () => {
  it("Shows the correct title", () => {
    browser.url("http://www.google.com");
    let search = new Search_Page();
    const item: string = "test";
    search.setSearch(item);
    chai.expect(browser.getTitle()).contains('Google');
    search.searchButton.waitForEnabled();
    search.searchButton.click();
    chai.expect(browser.getTitle()).contains('test');
    chai.expect(StringUtils.getRandomString(5)).empty;
  });
});
