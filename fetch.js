let priceDisplay = document.querySelector('#price');

setInterval(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then( (res) => {
        if(!res.ok){
            throw Error(res.status)
        } else {
            return res.json();
        }
}).then( (data) => {

    let Price = data.bpi.EUR.rate;
    console.log(Price);
    Price = Price.split('.');
    
    priceDisplay.innerHTML = '&euro;'+ Price[0] + '.' + Price[1][0] + Price[1][1];


}).catch( (error) => {
    console.log(error);
})
}, 2000)


