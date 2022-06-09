import './plugins/jQuery.js';

// index


// pricing

// slide toggle 
// 將其都 做成expand 狀態
// 使用slideToggle 將底層意見收起
// 使用監聽 若slideToggle啟動 使用classToggle變換樣式



// jQuery
$(function () {
	// toTop
	$('.btn-toTop').on('click', function(){
		$(window).scrollTop(0);
	});
	// Question toggle
	$('.qna-item').on('click', function () { 
		$(this).toggleClass('qna-item-show');
	})
});
  

  