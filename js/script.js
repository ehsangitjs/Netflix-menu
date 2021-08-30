document.write('<script src="js/jquery-3.6.0.min.js"></script>')
var search = document.querySelector('.search')
var noti = document.querySelector('.noti')
var log = document.querySelector('.log')
showsearch = () => {
    search.style.display = "flex"
}
closesearch = () => {
    $('.search').fadeOut();
}
shownoti = () => {
    noti.style.display = "flex"
}
closenoti = () => {
    $('.noti').fadeOut();
}
showlog = () => {
    log.style.display = "flex"
}
closelog = () => {
    $('.log').fadeOut();
}