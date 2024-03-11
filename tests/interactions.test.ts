import {expect, test} from "@playwright/test"



test("inputtextintofield", async ({ page }) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("input#user-message")

    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log(await messageInput.inputValue());

    await messageInput.fill("leon");
    console.log('After Input:' + await messageInput.inputValue())
    
});

test("Calculations", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1input = await page.locator("#sum1")
    await sum1input.fill("111")

    const sum2input = await page.locator("#sum2")
    await sum2input.fill("111")

    const sumtotal = await page.locator("#addmessage")

    await page.locator("form#gettotal>button").click()
    expect(sumtotal).toHaveText("222")
})

test("Checkbox", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singlecheckbox =  page.locator("#isAgeSelected")
    expect(singlecheckbox).not.toBeChecked();
    await singlecheckbox.check();
    expect(singlecheckbox).toBeChecked();
})


