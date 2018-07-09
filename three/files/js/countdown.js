CountDownTimer('2018/07/23 12:00:00 GMT-0000', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var _months = _day * 30;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var months = Math.floor(distance / _months);
        var days = Math.floor((distance % _months) / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

         
        document.getElementById(id).innerHTML ='<li>' + months + ' <span>months</span></li>';
        document.getElementById(id).innerHTML +='<li>' + days + ' <span>days</span></li>';
        document.getElementById(id).innerHTML +='<li>' + hours + ' <span>hours</span></li>';
        document.getElementById(id).innerHTML +='<li>' +  minutes + ' <span>minutes</span</li>';
 
    }

    showRemaining();
    timer = setInterval(showRemaining, 15000);
}