jQuery(document).ready(function(){

    jQuery('a[rel=tooltip]').tooltip();

    jQuery('.up-btn').scrollToTop({ speed: 500, start: 300 });

    categorySelect();

    toggleSlideMenu();

    templatesPinterest();

    $('.new-message__button').on('click', function()
    {
        $('.dialog-messages').hide();
        $('.new-message').show();
    });

});

function categorySelect() {

    jQuery('.ik_select_link').live('click', function() {
        jQuery('.ik_select_list').removeClass('ik_select_list_type_categories');
    });

    jQuery('.sort .ik_select_link:first').live('click', function() {
        jQuery('.ik_select_list').addClass('ik_select_list_type_categories');
    });

}

function toggleSlideMenu() {

    var slideMenu = jQuery('.slide-menu');

    jQuery('.show-slide-menu').click(function() {
        slideMenu.animate({'margin-left': '+=400px'});
    });

    jQuery('.ico_close_panel').click(function() {
        slideMenu.animate({'margin-left': '-=400px'});
    });

}

function templatesPinterest() {
    if($.fn.mosaicflow !== undefined)
    {
        var templates = $('.templates');
        templates.mosaicflow({
            minItemWidth: 420
        });

        templates.on('click', '.about-templates__hide', function(event)
        {
            event.preventDefault();
            var el = $(event.currentTarget);
            var about = el.parents('.about-templates');
            var root = about.parents('.templates');
            about.slideUp(300, function()
            {
                root.mosaicflow('remove', about);
                about.remove();
            });
        });
    }
}
