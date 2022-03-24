document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            document.getElementById("first") = " script added";
            break;
        case 40:
            alert('down');
            break;
    }
};
