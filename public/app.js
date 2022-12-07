//задача вида цены

const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(price)
}

document.querySelectorAll('.table__price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})

// Задача вида цены

//зачдача куба
window.setInterval(function() {
    $('.base').toggleClass('start');
    $('.stack').toggleClass('start');
    $('.cube').toggleClass('start');
}, 2200);
//задача куба

//форма логина и пароля

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
            // this.style.backgroundColor = 'red'
    })
})

//форма логина
//клики по кнопке 

document.querySelectorAll('.table-cell__btn').forEach(function(e) {
    e.addEventListener('click', function() {
        this.style.backgroundColor = "#024649";
    })
});


// function check() {
//     if (document.getElementById('signup-password') === document.getElementById('signup-password-confirm'));
//     else
//         alert('Пароли неверны');
// }
// check()

//клики по кнопке