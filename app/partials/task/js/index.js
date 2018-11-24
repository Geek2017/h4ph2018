for (var i = 1; i <= 4; i++) {
  Sortable.create(document.getElementById("col_" + i), { 
    group: "omega",
    draggable: ".tile",
    animation: 300
  });
}

$('.add').click(function(e){
	e.stopPropagation();
	  $('.card').removeClass('no-tile, mute');
  $('.add').removeClass('mute');
  $('.save-edit').remove();
  $('.edit').remove();
  $('.task').show();
	
  $('.no-tile').remove();
  $('.add').show();
  $('.save, .cancel').hide();
  $('.add-textarea').remove();
  $(this).prev().append('<li class="card no-tile"><div class=""><textarea class="add-textarea" autofocus/></div><i class="js-remove">✖</i>');
  $(this).closest('.col').find('textarea').focus();
 // $(this).replaceWith('<button class="save">Save</button>')
  $(this).hide();
   $(this).next().show();
  $(this).siblings('.cancel').show();
  $('textarea').bind('input propertychange', function() {
      $(this).closest('.col').find('.save').removeClass('disabled');
  });
});

$('.cancel').click(function(e){
  e.stopPropagation();
  $(this).closest('.col').find('.no-tile').remove();
  $(this).prev().addClass('disabled');
  $(this).siblings('.add').show();
  $(this).siblings('.save').hide();
  $(this).hide();
  
});


 $('.save').click(function(){
    $('.add-textarea').parent().addClass('task');
   if (!$(this).siblings('.column-wrapper').find('textarea').val()==""){
      $(this).siblings('.column-wrapper').find('textarea').replaceWith($(this).siblings('.column-wrapper').find('textarea').val());
      $(this).siblings('.column-wrapper').find('.no-tile').addClass('tile').removeClass('no-tile');
    //  $(this).replaceWith('<a class="card add">Add a card...</a>');
  
     $(this).prev().show();
   $(this).hide().addClass('disabled');
  $(this).siblings('.cancel').hide();
   }
  });

$(document).on('click', '.edit', function(e){
  e.stopPropagation();
});


$(document).on('click','.task',function(e){
  e.stopPropagation();
$('.no-tile').remove();
  if($('.card').not(':has(.task)')){
   // $('.no-tile').remove();
 // $('.card').removeClass('tile').addClass('no-tile');
  $('.add').show();
  $('.save, .cancel, textarea').hide();
  $('.add').addClass('mute');
  $('.task').parent().addClass('mute');
  $(this).parent().removeClass('mute');
  $('.edit').hide();
  $('.save-edit').remove();
  $('.task').show();
  $(this).hide();
  $('.card').removeClass('tile').addClass('remove');
  $(this).parent('.card').append('<textarea class="edit">' + $(this).text() + '</textarea><a class="save-edit">Save</a>');
  $('.edit').select();
  
  $('.save-edit').click(function(){
    if (!$('.edit').val()==""){
      $('.edit').hide();
      $(this).parent('.card').find('.task').text($(this).prev().val());
      $(this).remove();
      $('.task').show();
		 $('.card').removeClass('remove, mute').addClass('tile');
		// $('.card').addClass('tile').removeClass('no-tile');
    }
  });
}
});

$(window).click(function() {
  $('.card').removeClass('no-tile, mute, remove');
  $('.add').removeClass('mute');
	$('.card').removeClass('mute');
  $('.save-edit').remove();
  $('.edit').remove();
  $('.task').show();
	if (!$('textarea')){
  		$('.card').addClass('tile');
	}
});


$(document).keyup(function(e){

    if(e.keyCode === 27){
      $('.card').removeClass('no-tile, mute, remove');
		 $('.card').removeClass('mute');
  $('.add').removeClass('mute');
  $('.save-edit').remove();
  $('.edit').remove();
  $('.task').show();
  $('.card').addClass('tile');
	 }
	else {
		return false;
	}

});

$(document).on('click','.js-remove',function(){
	$(this).parent('.card').remove();
});