let priceDisplay = document.querySelector('#price');

setInterval( () => {
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200) {
            let Price = JSON.parse(XHR.responseText).bpi.EUR.rate;
            Price = Price.split('.');
            console.log(Price);
            priceDisplay.innerHTML = '&euro;'+Price[0] + '.' + Price[1][0] + Price[1][1];
        }
    }

    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
}, 2000);
