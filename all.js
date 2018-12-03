let xhrbtn = document.querySelector('#xhr');
let fetchbtn = document.querySelector('#fetch');
let jquerybtn = document.querySelector('#jquery');
let axiosbtn = document.querySelector('#axios');

let priceDisplay = document.querySelector('#price');

xhrbtn.addEventListener('click', () => {
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200) {
            let Price = JSON.parse(XHR.responseText).bpi.EUR.rate;
            console.log(Price);
            Price = Price.split('.');
            
            priceDisplay.innerHTML = '&euro;'+Price[0] + '.' + Price[1][0] + Price[1][1];
        }
    }

    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
});

fetchbtn.addEventListener('click', () => {
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
});

jquerybtn.addEventListener('click', () => {
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
});

axiosbtn.addEventListener('click', () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((res) => {
    
        let Price = res.data.bpi.EUR.rate;
        console.log(Price);
        Price = Price.split('.');
    
        priceDisplay.innerHTML = '&euro;'+Price[0] + '.' + Price[1][0] + Price[1][1];
    })
    .catch( (error) => {
        console.log(error.message);
})
});