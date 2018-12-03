let priceDisplay = document.querySelector('#price');

setInterval(() => {
    $.ajax({
        method: 'GET',
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
    })
    .done((res) => {
        
        // console.log(res);
        let Price = JSON.parse(res).bpi.EUR.rate;
        console.log(Price);
        Price = Price.split('.');
        
        priceDisplay.innerHTML = '&euro;'+Price[0] + '.' + Price[1][0] + Price[1][1];
       
    })
    .fail(() => {
        console.log("There was a error");
    })       
}, 2000)

