
    
document.querySelector('.btn1').onclick = () => {
   let cityName = document.querySelector('.form-control').value;
    
// запрос на 1 день
console.log(cityName);
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de89825baab7a8c481e43d97d379968a`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.card-title').textContent = data.name;
        document.querySelector('.hel-img').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png'>`;
        document.querySelector('.card-text').innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
        document.querySelector('.card_subtitle').textContent = data.sys.country;
        document.querySelector('.desc_text').textContent = data.weather[0]['description'];
        
        
        
    });
    

};
//запрос на 5 дней, выводим 3 дня
document.querySelector('.btn2').onclick = () => {
    let cityName = document.querySelector('.form-control').value;


    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=de89825baab7a8c481e43d97d379968a`)
    .then(function (resp) { return resp.json() })
    .then(function (data2) {
        console.log(data2);
        console.log(data2.list[8].dt_txt);
        document.querySelector('.weather3 .card-title').textContent = data2.city.name;
        document.querySelector('.weather3 .city2').textContent = data2.city.name;
        document.querySelector('.weather3 .city3').textContent = data2.city.name;

        document.querySelector('.weather3 .card-stitle').textContent = data2.list[8].dt_txt;
        document.querySelector('.img1').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[8].weather[0].icon}@4x.png'>`;
        document.querySelector('.weather3 .card-text').innerHTML = Math.round(data2.list[8].main.temp) - 273 + '&deg;';

        document.querySelector('.weather3 .card-stitle2').textContent = data2.list[16].dt_txt;
        document.querySelector('.img2').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[16].weather[0].icon}@4x.png'>`;
        document.querySelector('.weather3 .card-text2').innerHTML = Math.round(data2.list[16].main.temp) - 273 + '&deg;';

        document.querySelector('.weather3 .card-stitle3').textContent = data2.list[24].dt_txt;
        document.querySelector('.img3').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[24].weather[0].icon}@4x.png'>`;
        document.querySelector('.weather3 .card-text3').innerHTML = Math.round(data2.list[24].main.temp) - 273 + '&deg;';
        
       
        
        
        
    });
// 


};