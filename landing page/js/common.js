(function(){
    //widget slider
    $('.widgets-content').flipster({
        loop: 1,
        style: 'carousel',
        spacing: -0.4,
        buttons: true,
        buttonPrev: 'lolol'
    });

    //open mobile menu
    document.querySelector("body").addEventListener("click",function (e) {
        if(e.target.classList.contains("down")) {
            document.querySelector(".menu-mobile").classList.add("active");
        }else{
            document.querySelector(".menu-mobile").classList.remove("active");
        }
    });

//scroll on button click
    $('.buttons').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-30
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
    function onScroll(event){}

    //circle move
    document.querySelector(".header").onmousemove=getCoords;
})();
var prev,next;
function getCoords(elem) {
    prev =next;
    next = elem.clientX-(screen.width/2);
    prev>next?moveCircle(1):moveCircle(0);
}
function moveCircle(arg) {
    let a= document.querySelector(".icon-sunny");
    let b= document.querySelector(".icon-london");
    let c= document.querySelector(".icon-rio");
    let aPos = parseInt(getComputedStyle(a).left);
    let bPos = parseInt(getComputedStyle(b).left);
    let cPos = parseInt(getComputedStyle(c).left);
    if(aPos>=-150  && bPos>=300 && cPos>=310 ) {
        if (arg == 0) {
            a.style.left = aPos - 1 + 'px';
            b.style.left = bPos - 1 + 'px';
            c.style.left = cPos - 1 + 'px';
        }
    }
    if(cPos<=350&& aPos<=-100 && bPos<=355)
    if(arg==1){
        a.style.left=aPos+1 +'px';
        b.style.left=bPos +1 + 'px';
        c.style.left=cPos+1+'px';
    }

}