"use strict"
{
    let stop = true;
    let x_pos = 1930;
    let moving = false;
    const ship = document.getElementById('ship');

    window.addEventListener('keypress', function(e)
    {
        go_ship();
    });

    function go_ship()
    {
        console.log(moving);
        if(!moving)
        {
            moving = setInterval(move_ship);
        }
    }

    function move_ship()
    {
        x_pos -= 3;
        ship.style.left = x_pos + 'px';

        if(x_pos < 1000 && stop)
        {
            clearInterval(moving);
            moving = false;
            stop = false;
            console.log('stop');
        }
    }
} 