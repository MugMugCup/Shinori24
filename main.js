"use strict"
{
    let stop = true;
    let x_pos = 1930;
    let moving = false;
    const ship = document.getElementById('ship');
    const event = document.getElementById('event');

    window.addEventListener('keypress', function(e)
    {
        go_ship();
        hide_event();
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
            disp_event();
        }

        if(x_pos < -306)
        {
            clearInterval(moving);
            moving = false;
            x_pos = 1930;
            ship.style.left = x_pos + 'px';
            console.log('respawn');
        }
    }

    function disp_event()
    {
        event.style.display = 'block';
    }

    function hide_event()
    {
        event.style.display = 'none';
    }
} 