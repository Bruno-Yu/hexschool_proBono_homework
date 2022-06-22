import './plugins/jQuery.js';



// jQuery
$(function () {
	// toTop
	$('.btn-toTop').on('click', function(){
		// $(window).scrollTop(0);
		$('html,body').animate({ scrollTop:0 }, 1500);
	});
	// calculate
	// 思路: 先分離基本版data-num按鈕 data-ppl 人數 data-basic 與data-bis商頁板，再設立data-num做乘除使用，但data-num要設立最大值
	// 後續再用.text()將相關數字帶入
	$('.select-btn').on('click', function (e) { 
		$(this).addClass('active').siblings().removeClass('active');
		let ppl = $(this).attr('data-num');
		if (ppl == 3) {
				$('.ppl').text('>25000');
		} else { 
				$('.ppl').text(ppl*10000);
		}
	
		$('.basic').text( ppl*600);
		$(' .bis').text( ppl*1600 );

	})

	// Question toggle
	$('.qna-item').on('click', function () { 
		$(this).toggleClass('qna-item-show');
	})
});
  

  