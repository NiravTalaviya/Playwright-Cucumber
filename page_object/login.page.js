// import { expect } from "@playwright/test";
const { expect } = require("chai");
//const { expect } = require("@playwright/test")
class LoginPage {

    async navigate() {
        // await page.goto('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login')
        await page.goto('http://localhost:3000')
    }

    async login(username, password) {
        await page.waitForSelector('text=Log In')

        // Click on Login Button
        await page.click('text="Log In"')
        
        // Fill username and password
        await page.fill('#username',username);
        await page.fill('#password',password);
    
        // Click on Continue button
        await page.click('button:nth-child(1)')
    }

    async loginSuccessful(){ 
        await page.waitForNavigation({timeout: 5000})
        await page.waitForSelector('text=Log Out')
        //await page.$('input[aria-label="Product search"]');
        //expect (element).to.not.be.null;
    }
    

    async loginFailed(){
        await page.waitForSelector('text=Forgot password')
        // await page.waitForSelector('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]');
        // let error = await page.$eval('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]', (errortext) => errortext.textContent);
        // expect (error).to.include("Customer not found")
    }

    async logout(){
        await page.click('text=Log Out')
        // await page.waitForNavigation({timeout: 10000})
    }

    async logOutSuccessful(){
        // await page.waitForNavigation({timeout: 10000})
        await console.log(page.url() + "Debug")
        await page.waitForSelector('text=Log In')
    }

    async createAccount(fname,lname,email,password){
        await page.click('text="Create Your E-Shop Account"');
        await page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', fname);
        await page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', lname);
        await page.fill('//div[normalize-space(.)=\'Email *\']/div/input[normalize-space(@type)=\'text\']', email);
        await page.fill('input[type="password"]', password);
        await page.fill('//div[normalize-space(.)=\'Confirm password *\']/div/input[normalize-space(@type)=\'password\']', password);
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('text="Create Your E-Shop Account"')
        ]);
    }

    async alreadyLoggedin(email,password){
        let random = Math.floor(Math.random()*90000) + 10000;
        email = email.replace('Ashish','Ashish'+random);
        this.createAccount('Ashish','Ghosh',email,password);
        this.loginSuccessful();
    }
  }
  module.exports = { LoginPage };