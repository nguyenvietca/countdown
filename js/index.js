var noel = "#txtNoel";
var dl = "#txtDl";
var al = "#txtAl";

var dateNoel = "12/25/2021";
var dateDl = "01/01/2022";
CountDownTimer(dateNoel, noel);
CountDownTimer(dateDl, dl);
CountDownTimer("02/01/2022", al);

setInterval(() => {
    randomColors();
}, 1000);

function CountDownTimer(dt, id) {
    var end = new Date(dt).getTime();
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date().getTime();
        var distance = end - now;
        if (distance < 0) {
            var noel = "#txtNoel";
            var dl = "#txtDl";
            var al = "#txtAl";
            clearInterval(timer);
            var welcome = "";
            switch (id) {
                case noel:
                    welcome = "chúc mừng giáng sinh";
                    break;
                case dl:
                    welcome = "chúc mừng năm mới";
                    break;
                case al:
                    welcome = "chúc mừng năm mới sức khỏe và an khang";
                    break;

                default:
                    break;
            }
            $(id).html("<h2>" + welcome + " < /h2>");
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        // var datacount = days + 'ngày ' + hours + 'giờ ' + minutes + 'phút ' + seconds + 'giây';
        // $(id).html(datacount);

        switch (id) {
            case "#txtDl":
                $("#dldays").html(days);
                $("#dlhours").html(hours);
                $("#dlminutes").html(minutes);
                $("#dlseconds").html(seconds);
                break;
            case "#txtNoel":
                $("#days").html(days);
                $("#hours").html(hours);
                $("#minutes").html(minutes);
                $("#seconds").html(seconds);
                break;
            case "#txtAl":
                $("#aldays").html(days);
                $("#alhours").html(hours);
                $("#alminutes").html(minutes);
                $("#alseconds").html(seconds);
                break;
            default:
                break;
        }


    }

    timer = setInterval(showRemaining, 1000);
}


function randomColors() {
    var colors = ["Green", "Yellow", "Orange", "Pink", "Gray", "Red", "Brown", "Violet", "#FF1493", "#FFB6C1", "#D8BFD8", "#FF00FF", "#8A2BE2", "#FFA07A", "#FA8072", "#F08080", "#DC143C", "#FF0000", "#FF8C00", "#FF4500", "#FFD700", "#BDB76B", "#ADFF2F", "#ADFF2F", "#9ACD32", "#8FBC8F", "#008B8B"];
    var index = Math.floor(Math.random() * colors.length);
    document.getElementById("hello").style.color = colors[index];
    var cardTxt = document.getElementsByClassName("nav-link");
    for (var i = 0; i < cardTxt.length; i++) {
        cardTxt[i].style.color = colors[index]
    }


}