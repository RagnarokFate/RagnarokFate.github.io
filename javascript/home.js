document.addEventListener("DOMContentLoaded", function () {
    var listItems = document.querySelectorAll("#programmingList li");

    function fadeInSequence(index) {
        if (index < listItems.length) {
            listItems[index].style.opacity = 1;
            listItems[index].style.transform = "translateX(0)";
            setTimeout(function () {
                fadeInSequence(index + 1);
            }, 300); // Adjust the delay (in milliseconds) between appearances
        }
    }

    fadeInSequence(0);
});