Feature('practice_form');

Scenario('test something', ({ I }) => {

    I.amOnPage('https://demoqa.com/automation-practice-form');
    I.see('Student Registration Form');
    I.fillField('#firstName', 'Jan');
    I.fillField('#lastName', 'Kowalski');   
    I.fillField('#userEmail', 'jan.kowalski@gmail.com');
    I.checkOption('Male');
    I.fillField('#userNumber', '600700600'); 
    I.clearField('#dateOfBirthInput');
    I.fillField('#dateOfBirthInput', '29 Feb 2000');
    I.fillField('#subjects-label', 'Biomaterials');
    I.checkOption('Music');
    I.checkOption('Sports');
    I.attachFile('#uploadPicture', 'avatar.jpg');
    I.wait(5);


});
