$(document).ready(function(){
    var p = 1;
    $('.portlet').each(function(){
      var portletid = "portlet"+p;
      $(this).attr('id',portletid);
      $('#'+portletid+' .close-portlet').attr('data-parent',portletid);
      $('#'+portletid+' .fullscreen-portlet').attr('data-parent',portletid);
      $('#'+portletid+' .normalscreen-portlet').attr('data-parent',portletid);
      $('#'+portletid+' .collapse-portlet').attr('data-target','#collapse'+portletid);
      $('#'+portletid+' .collapse-portlet').attr('aria-controls','collapse'+portletid);
      $('#'+portletid+' .collapse').attr('id','collapse'+portletid);
      $('#'+portletid+' .dropdown-portlet').attr('id','dropdown'+portletid);
      $('#'+portletid+' .dropdown-menu').attr('aria-labelledby','dropdown'+portletid);
      p = p + 1           
    });



   $('.close-portlet').click(function(){
     var portlet = $(this).attr('data-parent');
     $('#'+portlet).remove();
   });

   $('.fullscreen-portlet').click(function(){
     var portlet = $(this).attr('data-parent');
     $('#'+portlet).fullscreen();
     $('#'+portlet).addClass('fullscreen');
   });

   $('.normalscreen-portlet').click(function(){
     var portlet = $(this).attr('data-parent');
     $.fullscreen.exit();
     $('#'+portlet).removeClass('fullscreen');
   });

   $('.portlet-scroll').each(function(){
     var psportlet = new PerfectScrollbar('#'+$(this).attr('id')+' .card-body');
   });
   

   $(function(){                           
     $(".sortable-portlet .row .col-md-6" ).sortable({
       connectWith: ".sortable-portlet .row .col-md-6",
       handle: ".card-header",
       revert: true,
       tolarance: "pointer",
       opacity: 0.8,
       forceHelperSize: true,
       placeholder:  "sortable-placeholder",
       forcePlaceholderSize: true,
       helper: "clone",
       cursor: "move"
     });
     
   } );

 });