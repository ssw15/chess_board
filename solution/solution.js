$(document).ready(function() {
  $('.square').draggable({ containment: "#board",
                           scroll: false,
                           revert: 'valid',
                           revertDuration: 0,
                           helper: "clone",
                           opacity: 0.5
                         });
  $('.square').droppable({
    drop: function( event, ui ) {
      $(this).html(ui.draggable.html());
      ui.draggable.html('');
    }
  });
});
