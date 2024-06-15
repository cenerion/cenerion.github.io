var weekpart = document.getElementById("weekpart");
var date = document.getElementById("date");
var weekday = document.getElementById("weekday");
var daytime = document.getElementById("daytime");

var c;
var timer = setInterval(
c = function() {
    var now = new Date();
    
    day_m = now.getDate();
    month = now.getMonth() + 1;
    date.innerText = ((day_m < 10) ? "0" : "") + day_m.toString()
                   + ((month < 10) ? "/0" : "/") + month.toString();

                   
    day = now.getDay();

    switch (day) {
        case 0:
        case 6:
            weekpart.innerText = "weekend";
            break;

        default:
            weekpart.innerText = "weekday";
            break;
    }

    switch (day) {
        case 0:
            weekday.innerText = "Sun";
            break;
        case 1:
            weekday.innerText = "Mon";
            break;
        case 2:
            weekday.innerText = "Tue";
            break;
        case 3:
            weekday.innerText = "Wed";
            break;
        case 4:
            weekday.innerText = "Thu";
            break;
        case 5:
            weekday.innerText = "Fri";
            break;
        case 6:
            weekday.innerText = "Sat";
            break;
    }


    var h = now.getHours();
    if(h < 6 || h >= 22){
        daytime.innerText = "night";
    }
    else if(h < 12){
        daytime.innerText = "morning";
    }
    else if(h < 17){
        daytime.innerText = "afternoon";
    }
    else{
        daytime.innerText = "evening";
    }
}, 5000);
c();