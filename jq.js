let priceDisplay = document.querySelector('#price');

setInterval(() => {
    $.ajax({
        method: 'GET',
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        dataType: 'json'
    })
    .done((res) => {
        
        // console.log(res);
        let Price = res.bpi.EUR.rate;
        console.log(Price);
        Price = Price.split('.');
        
        priceDisplay.innerHTML = '&euro;'+Price[0] + '.' + Price[1][0] + Price[1][1];
       
    })
    .fail((error) => {
        console.log(error);
    })       
}, 2000)

