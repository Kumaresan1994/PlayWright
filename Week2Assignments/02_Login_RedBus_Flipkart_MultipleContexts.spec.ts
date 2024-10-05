import { chromium, firefox, test } from "@playwright/test";

test("Load redbus url in edge ", async () => {

const browserInstance = await chromium.launch({ headless: false, channel:"msedge" });

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://www.redbus.in/");

const url =page.url();
const title = await page.title();
 //Get page url and title
 console.log (`Actul url is ${url}`);
console.log(title);
});

test("Load flipkart url firebox browser", async () => {

    const browserInstance = await firefox.launch({ headless: false});
    
    const browserContext = await browserInstance.newContext();
    
    const page = await browserContext.newPage();
    
    await page.goto("https://www.flipkart.com/");
    
    const url =page.url();
    const title =  await page.title();
    //Get page url and title
    console.log (`Actul url is ${url}`);
    console.log(title);
    
    });