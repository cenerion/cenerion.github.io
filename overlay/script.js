var c;
var timer;

window.onload = () => {
    var weekpart = document.getElementById("weekpart");
    var date = document.getElementById("date");
    var weekday = document.getElementById("weekday");
    var daytime = document.getElementById("daytime");
    timer = setInterval(
    c = () => {
        var now = new Date();
        
        day_m = now.getDate();
        month = now.getMonth() + 1;
        date.textContent = ((day_m < 10) ? "0" : "") + day_m.toString()
                    + ((month < 10) ? "/0" : "/") + month.toString();

                    
        day = now.getDay();

        switch (day) {
            case 0:
            case 6:
                weekpart.textContent = "weekend";
                break;

            default:
                weekpart.textContent = "weekday";
                break;
        }

        switch (day) {
            case 0:
                weekday.textContent = "Sun";
                break;
            case 1:
                weekday.textContent = "Mon";
                break;
            case 2:
                weekday.textContent = "Tue";
                break;
            case 3:
                weekday.textContent = "Wed";
                break;
            case 4:
                weekday.textContent = "Thu";
                break;
            case 5:
                weekday.textContent = "Fri";
                break;
            case 6:
                weekday.textContent = "Sat";
                break;
        }


        var h = now.getHours();
        if(h < 6 || h >= 22){
            daytime.textContent = "night";
        }
        else if(h < 12){
            daytime.textContent = "morning";
        }
        else if(h < 17){
            daytime.textContent = "afternoon";
        }
        else{
            daytime.textContent = "evening";
        }
    }, 5000);
    c();
}