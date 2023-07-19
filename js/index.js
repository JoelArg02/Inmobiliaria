window.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById('myIframe');
    var resizeIframe = function() {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
    iframe.addEventListener('load', resizeIframe);
    window.addEventListener('resize', resizeIframe);
  });

  function resizeIframe() {
    var iframe = document.getElementById("myIframe");
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
    }
}
