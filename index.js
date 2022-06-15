// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName(){
    customerName =  customerName.toUpperCase()
}
// describe('setBestCustomer()', function() {
//     it('setBestCustomer', function() {
//       expect(window.bestCustomer).to.equal(undefined);

//       setBestCustomer();

//       expect(window.bestCustomer).to.equal('not bob');
//     });
//   });
function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = 'rachel'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'samunosuke'
}