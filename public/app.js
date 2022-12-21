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
$(document).ready(function() {
    // Create two variables with names of months and days of the week in the array
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // Create an object newDate()
    const newDate = new Date();
    // Retrieve the current date from the Date object
    newDate.setDate(newDate.getDate());
    // At the output of the day, date, month and year    
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval(function() {
        // Create an object newDate () and extract the second of the current time
        const seconds = new Date().getSeconds();
        // Add a leading zero to the value of seconds
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);

    setInterval(function() {
        // Create an object newDate () and extract the minutes of the current time
        const minutes = new Date().getMinutes();
        // Add a leading zero to the minutes
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function() {
        // Create an object newDate () and extract the clock from the current time
        const hours = new Date().getHours();
        // Add a leading zero to the value of hours
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);

});
//зачдача куба


window.setInterval(function() {
    $('.base').toggleClass('start');
    $('.stack').toggleClass('start');
    $('.cube').toggleClass('start');
}, 2200);
//задача куба


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