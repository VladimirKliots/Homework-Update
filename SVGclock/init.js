setInterval(function() {
    function r(el, deg) {
        el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
    }
    var d = new Date()
    r(seconds, 6*d.getSeconds())
    r(minutes, 6*d.getMinutes())
    r(hours, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000)