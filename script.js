document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
            alert('up');
            break;
        case 39:
            document.getElementById("first") = "  no script added";
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
};
