// import _ from 'lodash';

let miniMenu = document.getElementById("minimenu"); // less complicated than a foreach or a loop with a class
document.getElementById('mm').onclick = function changeContent() {
    miniMenu.classList.toggle("minimenu-open");
}

// click outside the minimenu to remove it
function remover() {
    if (miniMenu.classList.contains('minimenu-open')) {
        miniMenu.classList.remove("minimenu-open");
    }
}


// Large margins when IO comes into play
if ('IntersectionObserver' in window) {

    let iopush = document.querySelectorAll('.io-push');

    var numSteps = 20.0;

    var pusher; // naming choice is too close to push
    var prevRatio = 0.0;
    var mT = "ratioem";

    // Set things up.
    window.addEventListener("load", function (event) {
        pusher = document.querySelectorAll(".io-push");

        createObserver();
    }, false);

    function createObserver() {
        var observer;

        var options = {
            root: null,
            rootMargin: "0px",
            threshold: buildThresholdList()
        };

        observer = new IntersectionObserver(handleIntersect, options);

        pusher.forEach(pushers => {
            observer.observe(pushers);
        });
    }

    function buildThresholdList() {
        var thresholds = [];
        var numSteps = 100;

        for (var i = 1.0; i <= numSteps; i++) {
            var ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    function handleIntersect(entries, observer) {
        entries.forEach(function (entry) {
            entry.target.style.marginTop = mT.replace("ratio", (entry.intersectionRatio * 5));
            prevRatio = entry.intersectionRatio;
        });
    }
}