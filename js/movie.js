let $select = {
    body: $('body'), // let body = $('body')
    overlay: $('#blackout'),
    modal: $('#trailerModal'),
    showBtn: $('#showTrailer'),
    hideBtn: $('#hideTrailer')
}

let play = {
    obj: null,
    query: {
        autoplay: 1,
        controls: 0,
        iv_load_policy: 3 // 특수효과를 안보이게 하겠다
    }
};

/* $select.showBtn.click(function(){
    showPlayer()
}); */
$select.showBtn.click(showPlayer);
$select.hideBtn.click(hidePlayer);

function setPlayer(id) {
    play.obj = new YT.Player('trailer', { // #trailer를 불러서 사용
        videoId: id,
        playerVars: play.query
    });
    resizePlayer(); // 함수 호출
    //리사이즈 : 화면이 회전되거나 화면의 사이즈를 바꿀 때 다시 설정
    $(window).on("resize orientationchange", function () {
        resizePlayer();
    });

}

/* 화면 사이즈 */
function resizePlayer() {
    let viewport_w = $(window).width(); // 현재화면의 넓이
    let viewport_h = $(window).height(); // 현재화면의 높이

    let frame_w = viewport_w; // 넓이가 16이라면 높이는 10
    let frame_h = viewport_w / 1.6; // =1.6

    // 화면이 위 아래로 중앙에 오게 함
    let modal_t=(viewport_h - frame_h) / 2 + "px";
    let modal_l = 0;

    $select.modal.css({top:modal_t , left:modal_l});
    play.obj.setSize(frame_w, frame_h);


}

function showPlayer() {
    // data로 시작하는 속성을 부르는 법 data('data를 지정한 이름')
    // console.log($select.showBtn.data('youtube')) // 03CLuLydk2(아이디)

    if (!play.obj) {
        // 연결이 제대로 됐다면
        setPlayer($select.showBtn.data('youtube'))
    }
    $select.overlay.show();

}

function hidePlayer() {
    play.obj.stopVideo();
    $select.overlay.hide();


}