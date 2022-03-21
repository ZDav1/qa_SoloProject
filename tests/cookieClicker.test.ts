import { Actions, Browser, Key, until, By } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { CC } from "../pages/cookieClickerPage"

const cookie = new CC;

test("clicking on the cookie", async () => {
    await cookie.navigate();

    await cookie.driver.manage().window().maximize();

    await cookie.driver.sleep(1500);

    await cookie.click(cookie.banner);

    await cookie.driver.sleep(1500);

    await cookie.click(cookie.twitterLink)
    // clicks twitter link
    await cookie.driver.sleep(2500)

    let myTabs = await cookie.driver.getAllWindowHandles();

    await cookie.driver.switchTo().window(myTabs[1]);

    let myUrl = await cookie.driver.getCurrentUrl();

    expect(await cookie.driver.getCurrentUrl()).toBe("https://twitter.com/orteil42")

    await cookie.driver.close();

    await cookie.driver.switchTo().window(myTabs[0]);

    expect(await cookie.driver.getCurrentUrl()).toBe("https://orteil.dashnet.org/cookieclicker/")

    await cookie.driver.sleep(1000);

    console.log(myUrl);

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

    await cookie.waitAndClick(3500, cookie.yesButton)

    await cookie.waitAndClick(3500, cookie.ascendButton)

    await cookie.waitAndClick(1500, cookie.yesButton)

    await cookie.waitAndClick(1500, cookie.statsButton)

    await cookie.waitAndClick(1500, cookie.menuClose)

    await cookie.waitAndClick(1500, cookie.logButton)

    await cookie.waitAndClick(1500, cookie.menuClose)

    await cookie.waitAndClick(1500, cookie.optionsButton)

    await cookie.waitAndClick(1500, cookie.menuClose)
    // using a method for repeating tasks.
    await cookie.driver.sleep(1500)

    await cookie.driver.quit();


})