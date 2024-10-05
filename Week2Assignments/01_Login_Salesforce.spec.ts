import { chromium,  selectors,  test } from "@playwright/test";

test("Login to salesforce", async () => {

    const browserInstance = await chromium.launch({ headless: false, channel:
    "chrome" });
    
    const browserContext = await browserInstance.newContext();
    
    const page = await browserContext.newPage();
    
    await page.goto("https://login.salesforce.com/");
    await page.locator('input[name=username]').fill("ranjini.r@testleaf.com");
    await page.locator('input[name=pw]').fill("Testleaf@543");
    await page.locator('input[name=Login]').click();
   
    await page.waitForTimeout(10000); 
    const title = await page.title();
    //Get page url and title
    const url =page.url();
    console.log (`Actul url is ${url}`);
    console.log(title);

    });
    