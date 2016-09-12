$(document).ready(function(){

	//Array of Quotes

	var quotes = [ 
	{ 
		'quote': 'I love deadlines. I like the whooshing sound they make as they fly by.', 
		'author': 'Douglas Adams' 
	},  
	{ 
		'quote': 'He was a dreamer, a thinker, a speculative philosopher... or, as his wife would have it, an idiot.', 
		"author": 'Douglas Adams' 
	}, 
	{ 
		'quote': 'Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.', 
		'author': 'Douglas Adams' 
	}, 
	{ 
		'quote': 'If it looks like a duck, and quacks like a duck, we have at least to consider the possibility that we have a small aquatic bird of the family anatidae on our hands.',
		'author': 'Douglas Adams' 
	},
	{ 
		'quote': 'Space is big. You just won\'t believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it\'s a long way down the road to the drug store, but that\'s just peanuts to space.',
		'author': 'Douglas Adams' 
	}, 
	{ 
		'quote':'Anyone who is capable of getting themselves made President should on no account be allowed to do the job.',
	 	'author': 'Douglas Adams' 
	}

	];
	var forismaticAPI = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
	//random number 
		var randNum = Math.floor((Math.random() * quotes.length - 1) + 1);
	//check that quotes are there
	console.log(quotes[0]);
	var quotesQuote = quotes[randNum].quote;
	var quotesAuthor= quotes[randNum].author;
	$('#quote').html('<h1> "' + quotesQuote + '"</h1>');
	$('#author').html('<h3>~ ' + quotesAuthor + '</h3>');
	$('.buttons>a#newTweet').attr("href",'https://twitter.com/intent/tweet?text=' + '"' + quotesQuote + '" - ' + quotesAuthor);

	//grab random quote
	function randomQuote(){
		//random number 
		var randNum = Math.floor((Math.random() * quotes.length - 1) + 1);

		//new quote & Author
		var randQuote = quotes[randNum].quote;
		var randAuthor = quotes[randNum].author;
		$.getJSON(forismaticAPI, function(data){
			//$('#quote').hide().fadeOut(2000);
			//$('#author').hide().fadeOut(2000);
		
			$('#quote').html('<h1>"' + data.quoteText + '"</h1>');
			if(data.quoteAuthor !== ''){
				$('#author').html('<h2> ~' + data.quoteAuthor + '</h2>');
			}else {
				$('#author').html('<h2>~Unkonwn</h2>');
			}
			
			//$('#quote').fadeIn(2000);
			//$('#author').fadeIn(2000);
				//Twitter Share
				$('.buttons>a#newTweet').attr("href",'https://twitter.com/intent/tweet?text=' + '"' + data.quoteText + '" - ' + data.quoteAuthor);
		});

	};


	$('.buttons>a#newQuote').click(function(){
		if(!$('body').hasClass('animationOne')){
			$('body').addClass('animationOne');
			$('body').removeClass('animationTwo');
		}else {
			$('body').addClass('animationTwo');
			$('body').removeClass('animationOne');
		}
		randomQuote();
		console.log('success');
	});


});