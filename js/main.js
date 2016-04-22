var content = $( ".content" );
var trigger = $( ".trigger" );

trigger.on( "click", function( e ){

	console.log("hello");

    var selector = $( this ).data( "content" );
    
	content.not(selector).hide();

    $( selector ).fadeToggle( 500 );

    if ( $( window ).height() < 600 ) {
		$( document.body ).scrollTop( $( selector ).offset().top - 130 );
    }

    e.preventDefault();
} );

$(document.body).on('click', function (e) {
	// Test is program locator contains the actual target of the event
	if (!$('.program_locator').has(e.target).length > 0) {
		// Hide ALL inner lists
		$('.inner_list').hide();
	}
})

content.hide();

$( ".trigger_2" ).trigger( "click" );




// Send a Mailer option on donate.html //

var mailer 		= document.querySelector( ".mailer" );
var openMailer 	= document.getElementById( "open_mailer" );
var closeMailer = document.getElementById( "close_mailer" );

var openUp = function openUp( e ){
	mailer.classList.toggle('show')

	// mailer.className += ( "show" );
	console.log( "working" );

}

var closeDown = function closeDown( e ){

	mailer.classList.remove("show");
	openMailer.checked = false;
	e.preventDefault();
}

if (openMailer != null){

	openMailer.addEventListener( "click", openUp );
	
}
 if (closeMailer != null){

 	closeMailer.addEventListener( "click", closeDown );

}














