(function($, d) {
    $(d).ready(function(){
        console.log('GWAPO CODES');
        // your handsome all code below
        if($('#controls').length){
            $('#slick-buttoons').slick({
                slidesToShow: 10,
                slidesToScroll: 1,
                draggable: false,
                infinite: false
            });
        }
        $(d).on('click', '.func-butons', function(){
            var page = $(this).data('page');
            $('.func-butons').removeClass('active');
            $(this).addClass('active');
            $('#content-pop h1').hide();
            $('#content-pop iframe').attr('src', '/training-ground/components/'+page+'.php').show();
        });

        // Accordion
        if($('#accordion-page').length){
            $('.accordion-item h3').click(function(){
                $('.accordion-content').slideUp('fast');
                $('.accordion-item h3 span i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
                $(this).parent().find('h3 span i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
                $(this).parent().find('.accordion-content').slideDown('fast');
            });
        }

        // readmore
        if($('#viewmore-page').length) {
            $('.readmpre-btn a').click(function(){
                var vm = $(this).parent().parent().find('.viewmore-content');
                if(vm.hasClass('collapsed')){
                    vm.removeClass('collapsed');
                    $(this).text('Read Less');
                } else {
                    vm.addClass('collapsed');
                    $(this).text('Read More');
                }
            });
        }
        
        // click image
        if($('#clickimage-page').length) {
            $('#the-embedded a').click(function(){
                var iframe = '<iframe class="embedded-video" src="https://www.youtube.com/embed/5oH9Nr3bKfw?autoplay=1" allow="autoplay" width="500" height="281" style="border:0;" allowfullscreen></iframe>';
                $(this).parent().html(iframe);
            });
        }

        // Scroll to element
        if($('#scrollelem-page').length) {
            $(".navi-links").click(function(e){
                e.preventDefault();
                var id = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(id).offset().top
                }, 1000);
            });
        }

        // Tabs
        if($('#tabs-page').length) {
            $('.nav-link').click(function(){
                var id = $(this).data('id');
                $('.nav-link, .tab-pane').removeClass('active');
                $(this).addClass('active');
                $('#'+id).addClass('active');
            });
        }

        // Widgets
        if($('#widgets-page').length) {
            $('#bottom-widget button').click(function(){
                if($(this).hasClass('expanded')){
                    $(this).removeClass('expanded');
                    $('#widget-content').slideUp('fast');
                } else {
                    $(this).addClass('expanded');
                    $('#widget-content').slideDown('fast');
                }
            });

            $('.left-btn-header button').click(function(){
                if($(this).parent().parent().hasClass('collapsed')) {
                    $(this).parent().parent().removeClass('collapsed');
                } else {
                    $(this).parent().parent().addClass('collapsed');
                }
            });
        }

        // Hoverbox
        if($('#hoverbox-page').length) {
            // No script for this. Hooray!
        }

        // Slideout
        if($('#slideout-page').length) {
            $('#slideout-page p button').click(function(){
                if($('.slideout-wrapper').hasClass('collapsed')){
                    $('.slideout-wrapper, .slideout-backdrop').removeClass('collapsed');
                } else {
                    $('.slideout-wrapper, .slideout-backdrop').addClass('collapsed');
                }
            });
            $('#slideout-left h1 a').click(function(){
                $('.slideout-wrapper, .slideout-backdrop').addClass('collapsed');
            });
        }

        // your code ends here
    });
})(jQuery, document);