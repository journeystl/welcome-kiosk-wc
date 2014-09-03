$('.button').on('click', function(e) {
    document.querySelector('webview').src = $(this).data('target');
});
