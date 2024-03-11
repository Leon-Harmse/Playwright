import { test,expect } from "@playwright/test";

// Choose drop down with an option 
test("dropdown interactions", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("id=select-demo",{
        //label: "Tuesday"
        //value: "Friday"
        index: 4
    })
    await page.waitForTimeout(5000)
})