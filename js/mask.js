$(document).ready(function () {
	if ($(window).width() >= 1200) {
		var $sections = $('.section_wrap');
		var animationDuration = 500;

		// 초기 설정: 첫 번째 섹션에 'move' 클래스 추가
		$sections.eq(0).addClass('move');

		// 마우스 휠 이벤트 적용
		$sections.on("mousewheel DOMMouseScroll", function (e) {
			e.preventDefault();
			var delta = e.originalEvent.wheelDelta / 120 || -e.originalEvent.detail / 3;
			var moveTop = $(window).scrollTop();
			var $currentSection = $(this);
			var $targetSection;

			// 마우스 휠 방향에 따라 다음 또는 이전 섹션 선택
			if (delta < 0 && $currentSection.next().length > 0) {
				$targetSection = $currentSection.next();
			} else if (delta > 0 && $currentSection.prev().length > 0) {
				$targetSection = $currentSection.prev();
			}

			// 선택된 섹션이 있을 경우에만 처리
			if ($targetSection) {
				moveTop = $targetSection.offset().top;

				// 선택된 섹션에 'move' 클래스 추가
				$targetSection.addClass('move');

				// 현재 섹션에서 'move' 클래스 제거
				$currentSection.removeClass('move');

				// 화면 이동 애니메이션
				$("html, body").stop().animate({
					scrollTop: moveTop + 'px'
				}, {
					duration: animationDuration,
					complete: function () {
						// 애니메이션 완료 시 처리
					}
				});
			}
		});
	}
});


//

//맨위에서 스크롤 되는 현상은 감싸는 박스 하나 만들어주니까 해결 이유는??
//
let aside = document.querySelector('.aside_menu');
let asideli = document.querySelectorAll('.aside_menu li');

const section = document.querySelectorAll('.section_wrap');

var mainnav =document.querySelectorAll('.main_nav ul li');


/*mainnav 클릭시 자연스럽게 이동*/
mainnav.forEach((element,index) => {
	element.addEventListener('click', function(){
		window.scrollTo({top: section[index].offsetTop , behavior:'smooth'});
	});
});

/*asideli 클릭시 자연스럽게 이동*/
asideli.forEach((element,index) => {
	element.addEventListener('click', function(){
		window.scrollTo({top: section[index].offsetTop , behavior:'smooth'});
	});

});

document.querySelector('.scroll_look').addEventListener('click', function(){
	console.log('scroll_look클릭');
	window.scrollTo({top: section[1].offsetTop , behavior:'smooth'});
	
});
document.querySelector('header h1').addEventListener('click', function(){
	console.log('logo클릭');
	window.scrollTo({top: section[0].offsetTop , behavior:'smooth'});
	
});
/*side_top*/
var helptest = document.querySelectorAll('.clicktst a');
helptest[0].addEventListener('click', function(){
	window.scrollTo({top: section[4].offsetTop , behavior:'smooth'});	
});

var sidetopclick = document.querySelectorAll('.clicktst a');
/*성공했다 이유는ㅁㄹ https://merrily-code.tistory.com/228참고*/ 


const observer = new IntersectionObserver(entries => {
  // 2. 감지한 모든 .card 요소의 정보를 entries 배열로 전달받습니다.
  // 3. entries 배열을 순회해, isIntersecting 조건이 참일 경우 "visible" 이라는 클래스명을 추가합니다.
  entries.forEach(entry => {
	if(entry.isIntersecting){
		mainnav[entry.target.id].classList.add('on');
		asideli[entry.target.id].classList.add('on');
		
	}else {
		mainnav[entry.target.id].classList.remove('on');
		asideli[entry.target.id].classList.remove('on');
	}
	
  })
}, { threshold: 0.5 })
section.forEach(card => {
    // 1. 모든 .card 요소의 인터섹션을 감지합니다.
  observer.observe(card)
});

const why = document.querySelector('.click_topb');
const header = document.querySelector('.header');
const skillbox = document.querySelectorAll('.skill_box');
const observer2 = new IntersectionObserver(entries => {
	// 2. 감지한 모든 .card 요소의 정보를 entries 배열로 전달받습니다.
	// 3. entries 배열을 순회해, isIntersecting 조건이 참일 경우 "visible" 이라는 클래스명을 추가합니다.
	entries.forEach(entry => {
	  if(entry.isIntersecting){
			console.log('1page 올렸을 때 메뉴 fade 기능')
			header.classList.add('on');
			aside.classList.add('on');
	  }else {
			header.classList.remove('on');
			aside.classList.remove('on');
	  }
	  
	})
  }, { threshold: 0.5 })
  
	  observer2.observe(section[0]);

/**/

// 현재 브라우저 창 크기 확인
const windowWidth = window.innerWidth;

// 브라우저 넓이가 1200 이상인 경우에만 IntersectionObserver를 생성하고 관찰합니다.
if (windowWidth >= 1200) {
    const observerCallback = entries => {
        entries.forEach(entry => {
            skillbox.forEach(skill => {
                if (entry.isIntersecting) {
                    skill.classList.remove('skillon');
                } else {
                    skill.classList.add('skillon');
                }
            });
        });
    };

    const observerOptions = { threshold: 0.5 };

    const observer3 = new IntersectionObserver(observerCallback, observerOptions);
    observer3.observe(section[0]);
}


// 요소가 화면에 보이는지 확인하는 함수
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
    // 모든 hoho 클래스를 가진 div 요소를 선택합니다.
    const hohoDivs = document.querySelectorAll('.hoho');
    
    hohoDivs.forEach(function(div) {
        // div의 위치와 화면의 높이를 확인하여 화면에 보이는지 판단합니다.
        const rect = div.getBoundingClientRect();
        
        // 화면의 상단과 div의 하단, 화면의 하단과 div의 상단 사이에 위치하면 화면에 보이는 것으로 판단합니다.
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // div 안의 모든 a 태그에 on 클래스를 추가합니다.
            const aTags = div.querySelectorAll('a');
            aTags.forEach(function(a) {
                a.classList.add('on');
            });
        }
    });
});




/*콘텐츠 텝메뉴 script*/
const tabList = document.querySelectorAll('.tab_menu .list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont');
const tabList2 = document.querySelectorAll('.tab_menu2 .list li');
const contents2 = document.querySelectorAll('.tab_menu2 .cont_area .cont');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList2.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}
for(var i = 0; i < tabList2.length; i++){
	tabList2[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList2.length; j++){
      // 나머지 버튼 클래스 제거
      tabList2[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents2[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}

var popupbg =  document.querySelector('.popupbg');
var boxb = document.querySelectorAll('.contents_popup .box');
var close = document.querySelectorAll('.box_overlay .close');

for(var i = 0; i < boxb.length; i++){
	boxb[i].addEventListener('click', function(){
		popupbg.classList.add('bgon')
	})
}
for(var i = 0; i < boxb.length; i++){
	close[i].addEventListener('click', function(){
		popupbg.classList.remove('bgon')
	})
}
/*팝업 만들기 */  

    // 전체 상자 개수
	//처음 박스 오버레이 해보자
	var totalBoxes01 = 7;
	function openPopup01(boxNumber) {
	  var overlay01 = document.getElementById('overlayone' + boxNumber);
	  var popup01 = overlay01.querySelector('.popup01');
	  overlay01.classList.add('active');
	  popup01.classList.add('active');
	}
  
	function closePopup01(boxNumber) {
	  var overlay01 = document.getElementById('overlayone' + boxNumber);
	  var popup01 = overlay01.querySelector('.popup01');
	  overlay01.classList.remove('active');
	  popup01.classList.remove('active');
	}
  
	function prevPopup01(boxNumber) {
	  var prevBoxNumber = boxNumber - 1;
	  if (prevBoxNumber < 1) {
		prevBoxNumber = totalBoxes01;
	  }
	  closePopup01(boxNumber);
	  openPopup01(prevBoxNumber);
	}
  
	function nextPopup01(boxNumber) {
	  var nextBoxNumber = boxNumber + 1;
	  if (nextBoxNumber > totalBoxes01) {
		nextBoxNumber = 1;
	  }
	  closePopup01(boxNumber);
	  openPopup01(nextBoxNumber);
	}

	//
	var totalBoxes02 = 10;
	function openPopup02(boxNumber) {
	  var overlay02 = document.getElementById('overlaytow' + boxNumber);
	  var popup02 = overlay02.querySelector('.popup02');
	  overlay02.classList.add('active');
	  popup02.classList.add('active');
	}
  
	function closePopup02(boxNumber) {
	  var overlay02 = document.getElementById('overlaytow' + boxNumber);
	  var popup02 = overlay02.querySelector('.popup02');
	  overlay02.classList.remove('active');
	  popup02.classList.remove('active');
	}
  
	function prevPopup02(boxNumber) {
	  var prevBoxNumber = boxNumber - 1;
	  if (prevBoxNumber < 1) {
		prevBoxNumber = totalBoxes02;
	  }
	  closePopup02(boxNumber);
	  openPopup02(prevBoxNumber);
	}
  
	function nextPopup02(boxNumber) {
	  var nextBoxNumber = boxNumber + 1;
	  if (nextBoxNumber > totalBoxes02) {
		nextBoxNumber = 1;
	  }
	  closePopup02(boxNumber);
	  openPopup02(nextBoxNumber);
	}
	//
	
	var totalBoxes03 = 4;
	function openPopup03(boxNumber) {
	  var overlay03 = document.getElementById('overlaythr' + boxNumber);
	  var popup03 = overlay03.querySelector('.popup03');
	  overlay03.classList.add('active');
	  popup03.classList.add('active');
	}
  
	function closePopup03(boxNumber) {
	  var overlay03 = document.getElementById('overlaythr' + boxNumber);
	  var popup03 = overlay03.querySelector('.popup03');
	  overlay03.classList.remove('active');
	  popup03.classList.remove('active');
	}
  
	function prevPopup03(boxNumber) {
	  var prevBoxNumber = boxNumber - 1;
	  if (prevBoxNumber < 1) {
		prevBoxNumber = totalBoxes03;
	  }
	  closePopup03(boxNumber);
	  openPopup03(prevBoxNumber);
	}
  
	function nextPopup03(boxNumber) {
	  var nextBoxNumber = boxNumber + 1;
	  if (nextBoxNumber > totalBoxes03) {
		nextBoxNumber = 1;
	  }
	  closePopup03(boxNumber);
	  openPopup03(nextBoxNumber);
	}
	
	


//슬라이드  1
let currentIndex1 = 0;
const slides_w01 = document.getElementById('slide01');
const slides1 = slides_w01.querySelectorAll('.slide');
const totalSlides1 = slides1.length;
function updatePager1() {
	const pager1 = slides_w01.querySelector('.pager');
	pager1.innerHTML = '';

	for (let i = 0; i < totalSlides1; i++) {
		const pagerBtn1 = document.createElement('div');
		pagerBtn1.classList.add('pager-btn');
		pagerBtn1.addEventListener('click', () => goToSlide1(i));
		pager1.appendChild(pagerBtn1);
	}

	pager1.childNodes[currentIndex1].classList.add('active');
}

function goToSlide1(index) {
	currentIndex1 = index;
	updateSlider1();
}

function prevSlide1() {
	currentIndex1 = (currentIndex1 - 1 + totalSlides1) % totalSlides1;
	updateSlider1();
}

function nextSlide1() {
	currentIndex1 = (currentIndex1 + 1) % totalSlides1;
	updateSlider1();
}

function updateSlider1() {
	const sliderWrapper1 = slides_w01.querySelector('.slider-wrapper');
	sliderWrapper1.style.transform = `translateX(-${currentIndex1 * 100}%)`;

	const pager1 = slides_w01.querySelector('.pager');
	const pagerBtns1 = pager1.childNodes;
	pagerBtns1.forEach(btn => btn.classList.remove('active'));
	pagerBtns1[currentIndex1].classList.add('active');
}
updatePager1();

function startInterval1() {
    intervalId01 = setInterval(() => {
        nextSlide1();
    }, 5000);
}
startInterval1() ;

function stopInterval1() {
    clearInterval(intervalId01);
}

slides_w01.addEventListener('mouseenter', () => {
    stopInterval1();
});

slides_w01.addEventListener('mouseleave', () => {
    startInterval1();
});
/*슬라이드2*/
let currentIndex2 = 0;
const slides_w02 = document.getElementById('slide02');
const slides2 = slides_w02.querySelectorAll('.slide');
const totalSlides2 = slides2.length;


function updatePager2() {
	const pager2 = slides_w02.querySelector('.pager');
	pager2.innerHTML = '';

	for (let i = 0; i < totalSlides2; i++) {
		const pagerBtn2 = document.createElement('div');
		pagerBtn2.classList.add('pager-btn');
		pagerBtn2.addEventListener('click', () => goToSlide2(i));
		pager2.appendChild(pagerBtn2);
	}

	pager2.childNodes[currentIndex2].classList.add('active');
}

function goToSlide2(index) {
	currentIndex2 = index;
	updateSlider2();
}

function prevSlide2() {
	currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
	updateSlider2();
}

function nextSlide2() {
	currentIndex2 = (currentIndex2 + 1) % totalSlides2;
	updateSlider2();
}

function updateSlider2() {
	const sliderWrapper2 = slides_w02.querySelector('.slider-wrapper');
	sliderWrapper2.style.transform = `translateX(-${currentIndex2 * 100}%)`;

	const pager2 = slides_w02.querySelector('.pager');
	const pagerBtns2 = pager2.childNodes;
	pagerBtns2.forEach(btn => btn.classList.remove('active'));
	pagerBtns2[currentIndex2].classList.add('active');
}

updatePager2();

// 5초마다 nextSlide1 함수 호출
function startInterval2() {
    intervalId02 = setInterval(() => {
        nextSlide2();
    }, 5000);
}
function stopInterval2() {
    clearInterval(intervalId02);
}
// 초기화 시 인터벌 시작
startInterval2();


// 마우스가 박스 위에 있을 때 인터벌 멈춤
slides_w02.addEventListener('mouseenter', stopInterval2);

// 마우스가 박스를 벗어날 때 인터벌 재시작
slides_w02.addEventListener('mouseleave', startInterval2);


/*슬라이드33*/
let currentIndex3 = 0;
const slides_w03 = document.getElementById('slide03');
const slides3 = slides_w03.querySelectorAll('.slide');
const totalSlides3 = slides3.length;


function updatePager3() {
	const pager3 = slides_w03.querySelector('.pager');
	pager3.innerHTML = '';

	for (let i = 0; i < totalSlides3; i++) {
		const pagerBtn3 = document.createElement('div');
		pagerBtn3.classList.add('pager-btn');
		pagerBtn3.addEventListener('click', () => goToSlide3(i));
		pager3.appendChild(pagerBtn3);
	}

	pager3.childNodes[currentIndex3].classList.add('active');
}

function goToSlide3(index) {
	currentIndex3 = index;
	updateSlider3();
}

function prevSlide3() {
	currentIndex3 = (currentIndex3 - 1 + totalSlides3) % totalSlides3;
	updateSlider3();
}

function nextSlide3() {
	currentIndex3 = (currentIndex3 + 1) % totalSlides3;
	updateSlider3();
}

function updateSlider3() {
	const sliderWrapper3 = slides_w03.querySelector('.slider-wrapper');
	sliderWrapper3.style.transform = `translateX(-${currentIndex3 * 100}%)`;

	const pager3 = slides_w03.querySelector('.pager');
	const pagerBtns3 = pager3.childNodes;
	pagerBtns3.forEach(btn => btn.classList.remove('active'));
	pagerBtns3[currentIndex3].classList.add('active');
}

updatePager3();

// 5초마다 nextSlide1 함수 호출
function startInterval3() {
    intervalId03 = setInterval(() => {
        nextSlide3();
    }, 5000);
}
function stopInterval3() {
    clearInterval(intervalId03);
}
// 초기화 시 인터벌 시작
startInterval3();


// 마우스가 박스 위에 있을 때 인터벌 멈춤
slides_w03.addEventListener('mouseenter', stopInterval3);

// 마우스가 박스를 벗어날 때 인터벌 재시작
slides_w03.addEventListener('mouseleave', startInterval3);

		
/*모바일용*/ 
for(var i = 0; i < skillbox.length; i++){
	if (window.innerWidth <= 1200) {
		skillbox[i].classList.add('skillon');
		console.log(skillbox)
	}
	
};

/*a */
/* */
function toggleAccordion() {
	document.querySelector(".accordion_wrap").classList.add("silidego");
	document.querySelector(".mob_nav").classList.add("on");
	
  }

function toggleAccordionout() {
	document.querySelector(".accordion_wrap").classList.remove("silidego");
	document.querySelector(".mob_nav").classList.remove("on");
  }
/*클릭시 이동하는 함수 만들기*/
/*section1*/
function section1slide() {
	window.scrollTo({top: section[1].offsetTop , behavior:'smooth'});
  }
  /*section2*/
  function section2slide() {
	  window.scrollTo({top: section[2].offsetTop , behavior:'smooth'});
}
	
  /*section3*/
  function section3slide() {
	window.scrollTo({top: section[3].offsetTop , behavior:'smooth'});
  }
  	
  /*section4*/
  function section4slide() {
	window.scrollTo({top: section[4].offsetTop , behavior:'smooth'});
  }


  