//AtlanticCoastBrands - Codd Test Scripts
$( document ).ready(function() {

	//submit the form on graphical button click, alternatives would be to re-do the form via the Submit button standard or a <button></button element.
	$("#cta_button a").click(function(e){
    	alert(true);
    	$("#captureForm").submit();
	});

	//Sets the Timer countdown to 2/9/2016, this coming tuesday.
	//Uses the CountDown Jquery plugin, presents "expired" message after timer is done.
	function countDown(){
		$('#clock').countdown('2016/02/10 00:00:00')
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

	function anims(){
		var arrow = document.getElementById('arrowMainCenter');
		var flare = document.getElementById('flare');
		
		TweenMax.fromTo(arrow, 0.75, {scale:0.85, ease: Power4.easeInOut}, {scale:1.05, ease: Power4.easeInOut});
		TweenMax.fromTo(flare, 6.75, {opacity:0.9,scale:0.85,autoAlpha:1, ease: Power1.easeInOut},{opacity:1,scale:1.3,autoAlpha:1, ease: Power1.easeInOut, repeat:-1, yoyo:true}, "-=1.0");
	}

	//fires off the countdown on doc.ready
	countDown();
	anims();

});//end doc.ready