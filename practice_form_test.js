Feature('practice_form');

Scenario('test something', ({ I }) => {

    I.amOnPage('https://demoqa.com/automation-practice-form');
    I.see('Student Registration Form');
    I.fillField('#firstName', 'Jan');
    I.fillField('#lastName', 'Kowalski');   
    I.fillField('#userEmail', 'jan.kowalski@gmail.com');
    I.fillField('#userNumber', '600700600');  
    I.fillField('#lastName', 'Kowalski'); 
    I.checkOption('Male');
    //I.see('Please select an item');
    I.click('//*[@id="item-0"]/span');

    I.wait(5);


});
