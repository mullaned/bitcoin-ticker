let priceDisplay = document.querySelector('#price');

setInterval(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((res) => {
    
        let Price = res.data.bpi.EUR.rate;
        console.log(Price);
        Price = Price.split('.');
    
        priceDisplay.innerHTML = '&euro;'+Price[0] + '.' + Price[1][0] + Price[1][1];
    })
    .catch( (error) => {
        console.log(error);
})
}, 2000);

