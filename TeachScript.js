$('document').ready(function() {
	$('#miniNav span').click(function() {
		//$('div#navBar > ul > li > span').removeClass();
		//$(this).addClass('miniSel');
		if ( !$(this).hasClass('miniSel') ) {
			var $sel = $('.miniSel');
			var oldIdTag = $sel.attr('id');
			$('div#miniNav > ul > li > span').removeClass('miniSel');
			$(this).addClass('miniSel');
			var newIdTag = 'div#content > div.'+$(this).attr('id');
			$('#content > .'+oldIdTag).fadeOut('slow', function() {
				$('.TPage').css('display','none');
				$(newIdTag).css('display','inline-block');
				$('#content').fadeIn('slow');
			});
		}
	});
});