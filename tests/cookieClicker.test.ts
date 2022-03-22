import { Actions, Browser, Key, until, By } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { CC } from "../pages/cookieClickerPage"
const cookie = new CC;
test("clicking on the cookie", async () => {
    await cookie.navigate();
    await cookie.driver.manage().window().maximize();
    await cookie.waitAndClick(1500, cookie.banner);
    await cookie.waitAndClick(1500, cookie.twitterLink);
    await cookie.driver.sleep(2500)
    await cookie.tabs();
    await cookie.repeatClick(200, cookie.bigCookie);
    await cookie.repeatClick(6, cookie.cursor);
    await cookie.driver.sleep(2000);
    await cookie.repeatClick(200, cookie.bigCookie);
    await cookie.click(cookie.closeTab);
    await cookie.driver.sleep(1000);
    await cookie.repeatClick(1, cookie.grandma);
    await cookie.repeatClick(350, cookie.bigCookie);
    await cookie.driver.sleep(3500);
    await cookie.click(cookie.firstUpgrade);
    await cookie.repeatClick(5, cookie.closeTab);
    await cookie.waitAndClick(3500, cookie.legacyButton)
    await cookie.waitAndClick(2500, cookie.yesButton)
    await cookie.waitAndClick(4000, cookie.ascendButton)
    await cookie.waitAndClick(1000, cookie.yesButton)
    await cookie.waitAndClick(500, cookie.statsButton)
    await cookie.waitAndClick(500, cookie.menuClose)
    await cookie.waitAndClick(500, cookie.logButton)
    await cookie.waitAndClick(500, cookie.menuClose)
    await cookie.waitAndClick(500, cookie.optionsButton)
    await cookie.waitAndClick(500, cookie.menuClose)
    // using a method for repeating tasks.
    await cookie.driver.sleep(1500)
    await cookie.driver.quit();
})
