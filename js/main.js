var content = $( ".content" );
var trigger = $( ".trigger" );

trigger.on( "click", function( e ){

    var selector = $( this ).data( "content" );

    content.hide();
    $( selector ).fadeIn( 500 );

    // console.log( $( selector ).height() );
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

// ^ How do I make it so that the screen always displays the active list item? Currently I have to scroll
// to view the contents of each section.


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


closeMailer.addEventListener( "click", closeDown );


// ^ I am attempting to add the class "show" to this section. 
//How do I set my checkbox to immediate mode so my click listener will work?















