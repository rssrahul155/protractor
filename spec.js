// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
    browser.sleep(5000);
    element(by.id('gobutton')).click();
browser.sleep(5000);
expect(element(by.binding('latest')).getText()).
        toEqual('5'); 
    
  });
});