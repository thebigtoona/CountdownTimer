const MovingDate = new Date('May 7, 2018 14:00:00').getTime();  // date in the future to count to 
// const MovingDate = new Date('March 27, 2018 18:00:00').getTime();  // date in the future to count to 

let x = setInterval( function(){

    const now = new Date().getTime(); // getting time now

    distance = MovingDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // for two zeros instead of one and also proper formatting of the card 
    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // mute items that have already counted all the way down
    if ($('#day').html() === '00') $('#d').addClass('text-muted') && $('#day').addClass('text-muted');
    if ($('#hour').html() === '00') $('#h').addClass('text-muted') && $('#hour').addClass('text-muted');
    if ($('#min').html() === '00')  $('#m').addClass('text-muted') && $('#min').addClass('text-muted');
    if ($('#sec').html() === '00' & $('#min').html() === '00')  $('#s').addClass('text-muted') && $('#sec').addClass('text-muted');
    
    // if ($('#sec').html() !== '00' && $('#sec').hasClass('text-muted')) $('#sec').removeClass('text-muted')
    if ($('#hour').html() !== '00' && $('#hour').hasClass('text-muted')) $('#hour').removeClass('text-muted') && $('#h').removeClass('text-muted');
    if ($('#min').html() !== '00' && $('#min').hasClass('text-muted')) $('#min').removeClass('text-muted')&& $("#m").removeClass('text-muted');
    if ($('#sec').html() !== '00' && $('#sec').hasClass('text-muted')) $('#sec').removeClass('text-muted')&& $("#s").removeClass('text-muted');
    
    
    // If the count down is finished, clear the interval
    if (distance < 0) {
        clearInterval(x);
    }

} , 1000);  // 1 sec interval 


$('#menu').click( function (e) {
    e.preventDefault();
    $('#options').addClass('d-block');
});

// console.log(MovingDate);
