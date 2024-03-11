import { test,expect } from "@playwright/test";

test("frames with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame")
    const allframes = page.frames();
    console.log("No of frames:" + allframes.length)

    const firstframe = page.frame("firstFr")
    //const lastname = page.frame()
    await firstframe?.fill("input[name='fname']", "Leon")
    await firstframe?.fill("input[name='lname']", "Harmse")

    expect(await firstframe?.locator("p.title.has-text-info").textContent()).toContain("You have entered Leon Harmse")
    

    await page.waitForTimeout(3000)

})