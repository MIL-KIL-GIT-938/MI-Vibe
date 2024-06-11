var more_on = document.getElementById('more_on');
var more_off = document.getElementById('more_off');
var more_menu = document.getElementById('more_menu');

var button_burger = document.getElementById('button_burger');
var button_exit = document.getElementById('button_exit');
var menu_burger = document.getElementById('menu_burger');

function ClickMore() {
    more_on.style.display = 'none';
    more_off.style.display = 'inline';
    more_menu.style.top = '50px';
}

function ClickMoreOff() {
    more_on.style.display = 'inline';
    more_off.style.display = 'none';
    more_menu.style.top = '-200vh';
}

function ClockButtonBurgerOn() {
    button_burger.style.rotate = '1000deg'
    button_burger.style.top = '-200vh'

    button_exit.style.top = '10px'
    button_exit.style.rotate = '0deg'

    menu_burger.style.left = '0'
}

function ClockButtonBurgerOff() {
    button_burger.style.rotate = '0deg'
    button_burger.style.top = '10px'

    button_exit.style.top = '-200vh'
    button_exit.style.rotate = '1000deg'

    menu_burger.style.left = '-200vh'
}