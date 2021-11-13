const {Given, When, Then} = require ('@cucumber/cucumber')
const {LoginPage} = require('../../page_object/login.page')
const {ProductPage} = require('../../page_object/product.page')
const {PaymentPage} = require('../../page_object/payment.page')

const loginpage = new LoginPage();
const productpage = new ProductPage();
const paymentpage = new PaymentPage();


Given('User launched eshop login page', async()=>{
    await loginpage.navigate();
 });

When('User logged in eshop using the valid emailid {string} and the valid password {string}', async (email, password) =>{
    await loginpage.login(email,password);
});

When('User logged in eshop using the invalid emailid {string} and the invalid password {string}',async(username,password) =>{
    await loginpage.login(username,password);
});

Given('User is already logged in', async () =>{
    await loginpage.navigate();
    await loginpage.login("test@mydomain.com","Test@123");
    // await loginpage.loginSuccessful()
});

Then('User should be logged in', async()=>{
    await loginpage.loginSuccessful();
});

Then('User should fail', async()=>{
    await loginpage.loginFailed();
});

When("User is logged in successfully", async ()=> {
    await loginpage.loginSuccessful();
});

When("User clicks on logout button", async()=> {
    await loginpage.logout()
});

Then("User is logged out", async()=> {
    await loginpage.logOutSuccessful()
});
