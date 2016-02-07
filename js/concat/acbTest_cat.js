//AtlanticCoastBrands Test JS
$( document ).ready(function() {

	function countDown(){
		$('#clock').countdown('2016/02/09 12:00:00')
		 .on('update.countdown', function(event) {
			var format = '%H:%M:%S';
			if(event.offset.days > 0) {
				format = '%-d day%!d ' + format;
		   }
		   if(event.offset.weeks > 0) {
				format = '%-w week%!w ' + format;
		 	}
		 	$(this).html(event.strftime(format));
		 })
			.on('finish.countdown', function(event) {
				$(this).html('This offer has expired!')
				.parent().addClass('disabled');
		});
	}//end countDown

	countDown();

});//end doc.ready