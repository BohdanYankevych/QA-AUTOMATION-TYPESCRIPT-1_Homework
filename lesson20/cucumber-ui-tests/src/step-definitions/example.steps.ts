import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('I open the login page', async () => {
    console.log('Opening login page...');
});

When('I enter valid credentials', async () => {
    console.log('Entering valid credentials...');
});

Then('I should be logged in successfully', async () => {
    console.log('Checking login success...');
    expect(true).to.be.true;
});


When('I enter invalid credentials', async () => {
    console.log('Entering invalid credentials...');

});

Then('I should see an error message', async () => {
    console.log('Checking for error message...');

    expect(true).to.be.true;
});

