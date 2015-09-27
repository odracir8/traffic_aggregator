var app = {
    // Application Constructor
    initialize: function() {
        app.loadTvi24();
        setInterval(app.loadTvi24, 60000);

    },
    loadTvi24: function() {
        $.ajax({ url: 'http://www.tvi24.iol.pt/transito', success: function(fullHtml) {
            portoSection = $(fullHtml).find('.porto');
            $('.tvi24').html(portoSection);
            }
        });
    }
};

