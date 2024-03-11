import { test,expect } from "@playwright/test";

test("Handling page alerts", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async (alert) =>{
        const text = alert.message();
        console.log(text);
        await alert.accept();
    
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();

})

test("Page alerts with click", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async (alert) =>{
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel")

})
//These are javascript alerts, cant inspect  the alerts
// To just accept the page alerts
//await alert.accept();

//To dismiss an alert
//await alert.dismiss();

// Text  input into pop up
//await alert.accept("textvalue");
//expect(page.locator("id=confirm-demo")).toContainText("textvalue")


//For Modal based alerts you can interact with - Can find elements for these and click on them.