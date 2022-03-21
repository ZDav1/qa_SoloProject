import { Actions, Browser, Key, until, By } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import {CC} from "./cookieClickerPage"

const cookie = new CC; 

test("clicking on the cookie", async () => {
    await cookie.navigate();

    await cookie.driver.manage().window().maximize();

    await cookie.driver.sleep(1500);

    await cookie.click(cookie.banner);
    
    await cookie.driver.sleep(1500);

    await cookie.click(cookie.twitterLink)

    await cookie.driver.sleep(2500)

    let myTabs = await cookie.driver.getAllWindowHandles();

    await cookie.driver.switchTo().window(myTabs[1]);

    let myUrl= await cookie.driver.getCurrentUrl();

    await cookie.driver.close();

    await cookie.driver.switchTo().window(myTabs[0]);

    await cookie.driver.sleep(1000);

  //  console.log(myUrl);
     for (let i = 0; i < 200; i++) {
        cookie.click(cookie.bigCookie);
    }

    for (let i = 0; i < 6; i++) {
        cookie.click(cookie.cursor);
    }
    
    await cookie.driver.sleep(2000);

   for (let i = 70; i < 200; i++) {
        cookie.click(cookie.bigCookie);
    }

    await cookie.click(cookie.closeTab);

    await cookie.driver.sleep(1000);
    
    for (let i = 0; i < 1; i++) {
        cookie.click(cookie.grandma);
    }


    for (let i = 100; i < 350; i++) {
        cookie.click(cookie.bigCookie);
    }

    await cookie.driver.sleep(3500);

    await cookie.click(cookie.firstUpgrade);
    
    await cookie.click(cookie.closeTab);
    
    await cookie.click(cookie.closeTab);
    
    await cookie.click(cookie.closeTab);

    await cookie.click(cookie.closeTab);

    await cookie.click(cookie.closeTab);

    await cookie.driver.sleep(3500);

    await cookie.click(cookie.legacyButton);

    await cookie.driver.sleep(3500);

    await cookie.click(cookie.yesButton);

    await cookie.driver.sleep(3500);

    await cookie.click(cookie.ascendButton);

    await cookie.driver.sleep(2500);

    await cookie.click(cookie.yesButton);

    await cookie.driver.sleep(2500);

    await cookie.click(cookie.statsButton);

    await cookie.driver.sleep(1500)

    await cookie.click(cookie.menuClose);

    await cookie.driver.sleep(1500)

    await cookie.click(cookie.logBUtton);

    await cookie.driver.sleep(1500)

    await cookie.click(cookie.menuClose);

    await cookie.driver.sleep(1500)

    await cookie.click(cookie.optionsButton);

    await cookie.driver.sleep(1500)

    await cookie.click(cookie.menuClose);

    await cookie.driver.sleep(1500)



  
    await cookie.driver.quit();
    

})