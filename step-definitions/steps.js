import { Given, When, Then } from "@wdio/cucumber-framework";

Given("I am on the table page", async () => {
  await browser.url(`https://the-internet.herokuapp.com/tables`);
});

When("I click on Due title", async () => {
  let title = await $("//*[@id='table1']/thead/tr/th[4]");
  await title.click();
});

Then("I see that first in column have $50.00", async () => {
  let element = await $("#table1 > tbody > tr:nth-child(1) > td:nth-child(4)");
  expect(await element.getText()).toEqual("$50.00");

});

  

