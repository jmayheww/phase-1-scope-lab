// Write your solution in this file!


function setGlobalScope () {
    window.customerName = 'bob';
    return upperCaseCustomerName = () => {
        window.customerName = customerName.toUpperCase();
    }
}


setGlobalScope();



    function setBestCustomer() {
        window.bestCustomer = 'not bob';

    }



    function overwriteBestCustomer() {
        window.bestCustomer = 'maybe bob';
    }

    const leastFavoriteCharacter = 'dingo';
    function changeLeastFavoriteCustomer() {
        leastFavoriteCharacter = 'hugo';

    }















// const setBestCustomer = () => {
//   window.bestCustomer = "not bob";
// };

// setBestCustomer();

// const overwriteBestCustomer = () => {
//   window.bestCustomer = "maybe bob";
// };

// overwriteBestCustomer();

// const changeLeastFavoriteCustomer = () =>  {const changeLeastFavoriteCustomer = 'Josh'};

// changeLeastFavoriteCustomer();
