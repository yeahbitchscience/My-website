function dark() {

    if (document.body.style.background == "black") {
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("mode").src = "./Images/night.png";
        var x = document.querySelectorAll("a");
        var y = document.querySelector("p");
        y.style.color = "black";
        var i;
        for (i = 0; i < 10; i++) {
            x[i].style.color = "black";
        };

    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("mode").src = "./Images/day.png";

        var x = document.querySelectorAll("a");
        var y = document.querySelector("p");
        y.style.color = "white";
        var i;
        for (i = 0; i < 10; i++) {
            x[i].style.color = "white";
        };

    }

}

function darka() {
    if (document.body.style.background == "black") {
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("mode").src = "./Images/night1.png";
        var x = document.querySelectorAll("a");
        var y = document.querySelector("p");
        y.style.color = "black";
        var i;
        for (i = 0; i < 10; i++) {
            x[i].style.color = "black";
        };

    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.getElementById("mode").src = "./Images/day.png";

        var x = document.querySelectorAll("li");
        var y = document.querySelector("p");
        y.style.color = "white";
        var i;
        for (i = 0; i < 10; i++) {
            x[i].style.color = "white";
        };

    }
}

function darkb() {
    if (document.body.style.background == "black") {
        document.body.style.background = "white";
        document.getElementById("mode").src = "./Images/night1.png";


    } else {
        document.body.style.background = "black";
        document.getElementById("mode").src = "./Images/day.png";

    }
}

