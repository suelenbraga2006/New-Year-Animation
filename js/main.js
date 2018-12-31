(function($){
	'use strict';

	// declare actors here
	var $letters = $('.letter'),
		$year = $('#two, #zero, #one, #nine'),
		$firewk = $('#left, #right'),
		$cardContainer = $('.card-container')
	;

	//clear stage function
	function clearStage(){
		var clearStageTl = new TimelineMax();

		clearStageTl
			.set($letters, {autoAlpha:0})
			.set($year, {y:'+=8', autoAlpha:0})
			.set('#zero', {rotation:'15deg', x:3, transformOrigin:'center center'})
			.set($firewk, {autoAlpha:0, onComplete: showContainer})
		;

		function showContainer(){
			$cardContainer.css('display', 'block');
		}

		return clearStageTl;
	}

	//fireworks animation
	function fireworks(){
		var fireworksTl = new TimelineMax({repeat:-1});

		fireworksTl
			//left
			.fromTo('#left', 1.2, {scale:.2, autoAlpha:0, transformOrigin:'center center'}, {scale:1.3, autoAlpha:1, transformOrigin:'center center'}, 'right-firework-=0.6')
			.fromTo('#left', 1, {scale:1.3, autoAlpha:1, y:0, transformOrigin:'center center'}, {scale:1.25, autoAlpha:0, y:'+=0.3', transformOrigin:'center center'})
			.add('left-firework')
			//right
			.fromTo('#right', 1.2, {scale:.2, autoAlpha:0, transformOrigin:'center center'}, {scale:1.3, autoAlpha:1, transformOrigin:'center center'}, 'left-firework-=0.6')
			.fromTo('#right', 1, {scale:1.3, autoAlpha:1, y:0, transformOrigin:'center center'}, {scale:1.25, autoAlpha:0, y:'+=0.3', transformOrigin:'center center'})
			.add('right-fireworks')

		return fireworksTl;
	}

	//year animation
	function year(){
		var yearTl = new TimelineMax({delay:-1});

		yearTl
		/*
			.staggerFromTo($year, .8, {y:'+=8', autoAlpha:0, transformOrigin:'center center', ease: Elastic.easeIn}, 
				{y:0, autoAlpha:1, transformOrigin:'center center', ease: Elastic.easeOut}, 0.6)
			.to('#zero', .5, {rotation:0, y:'-=2', x:2.5, ease: Elastic.easeOut}, '-=1.8')
		*/
		//2
		.to('#two', .4, {y:'-=12', autoAlpha:1, ease: Back.easeIn})
		.to('#two', .5, {y:0, ease: Back.easeOut}, '-=0.2')
		//0
		.to('#zero', .4, {y:'-=12', autoAlpha:1, ease: Back.easeIn})
		.to('#zero', .5, {y:0, rotation:'0deg', x:0, ease: Back.easeOut}, '-=0.2')
		//1
		.to('#one', .4, {y:'-=12', autoAlpha:1, ease: Back.easeIn})
		.to('#one', .5, {y:0, ease: Back.easeOut}, '-=0.2')
		//9
		.to('#nine', .4, {y:'-=12', autoAlpha:1, ease: Back.easeIn})
		.to('#nine', .5, {y:0, ease: Back.easeOut}, '-=0.2')

		return yearTl;
	}

	//letter animation
	function greeting(){
		var greetingTl = new TimelineMax({delay:-0.5});

		greetingTl
			.staggerFromTo($letters, 0.5, {scale:2, autoAlpha:0, transformOrigin:'center center'}, 
				{scale:1, autoAlpha:1, transformOrigin:'center center'}, 0.1)

		return greetingTl;
	}
	
	// the GO function ...to kick things all off
	function go(){
		console.log('go ...');
		var masterTl = new TimelineMax();
		masterTl
			.add(clearStage(), 'scene-clear-stage')
			.add(fireworks(), 'scene-fireworks-animation')
			.add(year(), 'scene-year-aimation')
			.add(greeting(), 'scene-greeting-aimation')
		; 
	}

	go();
	

})(jQuery);