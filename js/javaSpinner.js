document.addEventListener('DOMContentLoaded', function () {
    // JavaScriptコードをここに記述する
    const $wrap = document.querySelector('.number-spinner-wrap');
    const $input = $wrap.querySelector('input');
    $wrap.querySelector('.spinner-down').onclick = () => {
        $input.stepDown();
    };
    $wrap.querySelector('.spinner-up').onclick = () => {
        $input.stepUp();
    };
});

$(function() {
    /*=================================================
    画像切り替え
    ==================================================*/
    $('.thumbnail img').on('click', function() {
  
      // クリックされた画像のパスを取得
      let img_src = $(this).attr("src");
  
      // メイン画像と同じサムネイルがクリックされた際は画像切り替えを実行しない
      // （メイン画像のsrcとクリックされた画像のsrcが異なる場合のみ実行）
      if ($('.mainvisual img').attr("src") != img_src) {
        $('.mainvisual img').fadeOut(300, function() {
          $(".mainvisual img").attr({ src: img_src });
          $(".mainvisual img").fadeIn(300);
        })
      }
    });
  });
  