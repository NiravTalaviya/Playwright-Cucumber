const { expect } = require("chai");

class LoginPage {

    async navigate() {
        // await page.goto('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login')
        await page.goto('http://localhost:3000')
    }

    async login(username, password) {
        await Promise.all[
            page.waitForNavigation({timeout: 10000}),
            page.click('text="Log In"')
        ]
        await page.fill('#username',username);
        await page.fill('#password',password);
        const text = await page.$('button')
    
        await page.click('button:nth-child(1)')
    
    
        const url = await page.url()
        
        await console.log("Loggin in")
        await console.log(url)
        const loc = await page.$('text="Log out"') 

    }

    async loginFailed(){
        console.log("Log in failed")
        // await page.waitForSelector('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]');
        // let error = await page.$eval('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]', (errortext) => errortext.textContent);
        // expect (error).to.include("Customer not found")
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
    async loginSuccessful(){ 
        await page.$('input[aria-label="Product search"]');
        //expect (element).to.not.be.null;
    }
    async alreadyLoggedin(email,password){
        let random = Math.floor(Math.random()*90000) + 10000;
        email = email.replace('Ashish','Ashish'+random);
        this.createAccount('Ashish','Ghosh',email,password);
        this.loginSuccessful();
    }
  }
  module.exports = { LoginPage };