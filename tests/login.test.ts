import {chromium, expect, test} from "@playwright/test"

test("Login test practice",async()=> {

    const browser = await chromium.launch ({
        headless: false

    });
    const context = await browser.newContext();
    const page = await context.newPage();
    

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a')
    await page.click("text=Login")
    
    await page.fill("input[name='email']", "harmseleon6+playwright@gmail.com")
    await page.fill("input[type='password']", "Password1234!")
    await page.click("//input[@value='Login']");

    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

    const page1 = await context.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io/")


})