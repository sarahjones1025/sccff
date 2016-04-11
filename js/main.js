var content = $( ".content" );
var trigger = $( ".trigger" );

trigger.on( "click", function( e ){

    var selector = $( this ).data( "content" );

    content.hide();
    $( selector ).fadeIn( 500 );

    // console.log( $( selector ).height() );

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