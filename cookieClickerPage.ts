import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class CC extends BasePage {

// selectors 
bigCookie: By = By.xpath(`//div[@id="bigCookie"]`)
cursor: By = By.xpath(`//div[@class="product unlocked enabled"]`)
grandma: By = By.xpath(`//div[@class="product unlocked enabled"][2]`)
firstUpgrade: By = By.xpath(`//div[@onClick="Game.UpgradesById[0].click(event);"]`)
closeTab: By = By.xpath(`//div[@class="close"]`)
banner: By = By.xpath(`//a[@data-cc-event="click:dismiss"]`)
legacyButton: By = By.xpath(`//div[@id="legacyButton"]`)
yesButton: By = By.xpath(`//a[@id="promptOption0"]`)
ascendButton: By = By.xpath(`//a[@id="ascendButton"]`) 
statsButton: By = By.xpath(`//div[@id="statsButton"]`)
menuClose: By = By.xpath(`//div[@class="close menuClose"]`)
logButton: By = By.xpath(`//div[@id="logButton"]`)
optionsButton: By = By.xpath(`//div[@id="prefsButton"]`)
twitterLink: By = By.xpath(`//a[@href="https://twitter.com/orteil42"]`)

    results: By = By.id("game")
    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"});
    }
    async getResults() {
        return this.getText(this.results)
    }
    async waitAndClick(sleep, buttons){
        // Names for future variables
        await this.driver.sleep(sleep);
        //Paramater withing the .sleep function
        await this.click(buttons);
        //Paramater within the .click function
    }
    async repeatClick(num, click){
        for (let i = 0; i < num; i++){
            await this.click(click);
        }
    }

}

