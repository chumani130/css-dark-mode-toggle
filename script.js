$(".darkmode").click(function(){
	$("body").toggleClass("dark")
		.css( //3
			$("body").hasClass("dark") ?
		  	{background:"#000000", color:"#f9f9f9"} : {background:"#f9f9f9", color:"#202225"}
		);
});