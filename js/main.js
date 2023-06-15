// banner slider
const swiper = new Swiper('.slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// movie slider
const swiper2 = new Swiper('.swiper-container2', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10, // 10px의 공간이 생김

    // Responsive breakpoints (뷰포터의 넓이에 따라서 슬라이드 갯수가 결정)
    breakpoints: {
      // 뷰포터의 넓이가 0px 보다 클 때
      0: {
        slidesPerView: 1.4,
        spaceBetween: 24 // 사이 간격
      },
      // 뷰포터의 넓이가 600px 보다 클 때
      600: {
        slidesPerView: 2, 
        spaceBetween: 24
      },
      // 뷰포터의 넓이가 768px 보다 클 때
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      // 뷰포터의 넓이가 960px 보다 클 때
      960: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  
});

// movie tab menu
let movBtn = $('.movie_title ul li');
let movCont = $('.movie_chart>div');

movCont.hide().eq(0).show();
movBtn.click(function(e){
  e.preventDefault();
  
  let target = $(this); // 클릭한 li가 잡힘
  let index = target.index(); // 클릭한 li의 index 번호 추출
  console.log(index)

  movCont.hide().eq(index).show(); // 모두 지우고 해당 index 번호의 슬라이드 보이기

  movBtn.removeClass('active') // li에 active라는 클래스명을 다 지우고,
  target.addClass('active') // 클릭한 li에게 active라는 클래스 명을 추가
});


// 공지사항 (notice) tab menu - help_box1
let tabmenu = $('.notice');

tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();

// tabmenu의 버튼 역할을 하는 a태그
tabmenu.find('ul>li>a').click(function(e){
  // 클릭했을 때 새로고침 영향으로 위에 올라가는 것을 막아줌
  e.preventDefault();
  // 클릭했을 때의 target을 나타냄으로 click 함수 안에 target 변수를 선언
  let target = $(this);
  // .next(); : 나의 바로 아래 동생
  // .nextAll(); : 나의 아래 동생 전부

  // 클릭했을 때 일어나는 일
  tabmenu.find('ul>li>a').next().hide(); // 먼저 a태그의 바로밑 형제요소인 ul을 모두 숨긴다
  target.next().show();
  tabmenu.find('ul>li').removeClass('active');
  // target이 지금 ul>li>a태그를 가르키고 있기 때문에 a태그 부모인 li을 불러 클래스명을 추가한다.
  target.parent().addClass('active');

})

