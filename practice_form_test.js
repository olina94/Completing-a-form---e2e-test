Feature('practice_form');

Scenario('Student registration form', ({ I }) => {

    I.amOnPage('https://demoqa.com/automation-practice-form');
    I.see('Student Registration Form');
    I.fillField('#firstName', 'Jan');
    I.fillField('#lastName', 'Kowalski');   
    I.fillField('#userEmail', 'jan.kowalski@gmail.com');
    I.checkOption('Male');
    I.fillField('#userNumber', '600700600'); 
    I.clearField('#dateOfBirthInput');
    I.fillField('#dateOfBirthInput', '29 Feb 2000');
    I.pressKey("Enter");
    I.fillField('#subjectsInput', 'Biomaterials');
    I.checkOption('#hobbies-checkbox-3');
    I.checkOption('Sports');
    I.attachFile('#uploadPicture', 'avatar.jpg');
    I.fillField('#currentAddress', 'Polna 100');
    I.click('#state');
    I.click('//*[@id="state"]/div/div[1]/div[1]');
    I.click('#city');
    I.click('//*[@id="city"]/div/div[1]/div[2]');
});
