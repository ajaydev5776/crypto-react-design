// cripto Filter
const criptoFilter = document.querySelector('#criptoFilter');
const trendingcripto = document.querySelector('#trendingcripto')
criptoFilter.addEventListener('click', () => {
    const criptoFilterContant = document.querySelector('#criptoFilter .contant');
    const filterValue = criptoFilterContant.innerHTML;
    if (filterValue === 'top losers') {
        criptoFilterContant.innerHTML = 'top gainers';
    } else if (filterValue === 'top gainers') {
        criptoFilterContant.innerHTML = 'top losers';
    } else {
        criptoFilterContant.innerHTML = 'top losers';
    };

    const hasClass = trendingcripto.classList.contains('losers-cripto');
    // Toggle the 'losers-cripto' class
    if (hasClass) {
        trendingcripto.classList.remove('losers-cripto');
    } else {
        trendingcripto.classList.add('losers-cripto');
    }
});
// cripto Filter End


// chart-crypto-switch Start
const cryptoswitch = document.querySelector('#chart-crypto-switch')
const chartcrypto = document.querySelector('#left-chart-crtpto')

cryptoswitch.addEventListener('click', () => {
    cryptoswitch.classList.toggle('active')
    chartcrypto.classList.toggle('active');
})



// cripto buy & sell
const criptoQuantity = document.querySelector('#criptoQuantity');
criptoQuantity.addEventListener('click', () => {
    const amounts = document.querySelector('.contantside .amount')//crypto amount to quntity 
    const criptoQuantityContant = document.querySelector('#criptoQuantity .quantitycrypto');
    const filterValue = criptoQuantityContant.innerHTML;
    if (filterValue === 'quantity') {
        criptoQuantityContant.innerHTML = 'amount';
        amounts.innerHTML = '₹6,30,443.01';
    } else if (filterValue === 'amount') {
        criptoQuantityContant.innerHTML = 'quantity';
        amounts.innerHTML = 0.005;
    } else {
        criptoQuantityContant.innerHTML = 'quantity';
    };
});
// cripto buy & sell End




// cripto buy & sell
const lasttradeCripto = document.querySelector('#lasttradeCripto');
lasttradeCripto.addEventListener('click', () => {
    const lasttradeCriptoContant = document.querySelector('#lasttradeCripto .quantitycrypto');
    const amounts = document.querySelector('.lasttradetable tbody .tradamount')//crypto amount to quntity 
    const filterValue = lasttradeCriptoContant.innerHTML;
    if (filterValue === 'quantity') {
        lasttradeCriptoContant.innerHTML = 'amount';
        amounts.innerHTML = '₹477.04';
    } else if (filterValue === 'amount') {
        lasttradeCriptoContant.innerHTML = 'quantity';
        amounts.innerHTML = 0.005;
    } else {
        lasttradeCriptoContant.innerHTML = 'quantity';
    };
});
// cripto buy & sell End



