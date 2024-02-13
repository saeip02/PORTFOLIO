//硫붿씤 �섏씠吏� 湲��� ���댄븨
$(".split").each(function () {
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
});

setTimeout(function () {
    gsap.to(".split span", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.1
    });
}, 100);

//�ㅽ겕濡� �� progress bar
const progressBar = document.querySelector("#progress");
const bodyTag = document.querySelector("body");

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    let pageHeight = bodyTag.offsetHeight;
    let windowHeight = window.innerHeight;
    let totalHeight = pageHeight - windowHeight;
    let percent = (y / totalHeight) * 100;

    progressBar.style.width = percent + "%";
});

//�ㅽ겕濡� �� �ㅻ퉬 �섎떒 �쇱씤 諛� 湲��� �됱긽
$(window).scroll(function(){
    const scr = $(document).scrollTop();
    let all_h = $(document).height();
    let abo_h = $("#about").offset().top;
    let pub_h = $("#publishing").offset().top;
    let con_h = $("#contact").offset().top;

    //�ㅻ퉬 湲��� �됱긽
    if (con_h > scr && scr >= abo_h) {
        //�ㅻ퉬 湲��먯깋 #616161
        $("#header").addClass("color");
    } else {
        //�ㅻ퉬 湲��먯깋 #fff
        $("#header").removeClass("color");
    }
    const scr = $(document).scrollTop();
    let all_h = $(document).height();
    let abo_h = $("#about").offset().top;
    let pub_h = $("#publishing").offset().top;
    let con_h = $("#contact").offset().top;
    //�ㅻ퉬 �섎떒 �쇱씤 �됱긽 蹂��� 諛� ABOUT, CONTACT �먯뿰�ㅻ읇寃� �섑��섍쾶
    if (scr < abo_h) {
        //home �쇱씤
        $(".gnb li").removeClass("on");
        $(".gnb #h").addClass("on");
    }  elseif (scr >= abo_h && scr < pub_h) {
        //about �쇱씤
        $(".gnb li").removeClass("on");
        $(".gnb #a").addClass("on");
    } else if (scr >= pub_h && scr < con_h) {
        //publishing �쇱씤
        $(".gnb li").removeClass("on");
        $(".gnb #p").addClass("on");
    } else if (scr >= con_h && scr < all_h) {
        //contact �쇱씤
        $(".gnb li").removeClass("on");
        $(".gnb #c").addClass("on");
        if($(window).width() > 991) {
            $("#contact .contact_wrap").stop().animate({ left: 0, opacity: 1 }, 1200);
        }else{

        }
    }

    //媛�濡� �ㅽ겕濡�_PUBLISHING
    let offset = scr - pub_h

    if (scr > pub_h) {
        $("#publishing .container").css({ left: -offset });
    }
});

//硫붿씤 硫붾돱 �대┃ �� �대떦 �섏씠吏�濡� �먯뿰�ㅻ읇寃� �ㅽ겕濡�
$(".gnb li a").on("click", function () {
    let hr = $(this).attr("href");
    let target = $(hr).offset().top;

    $("html, body").animate({ scrollTop: target }, 800);
});

//top 踰꾪듉 �대┃ �� �섏씠吏� �곷떒�쇰줈 �먯뿰�ㅻ읇寃� �ㅽ겕濡�
$("#top").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 800);
});