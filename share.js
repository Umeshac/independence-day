$(document).ready(function() {
$(document).on("click", '.tist', function() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var text = $(this).attr("data-text");
var url = $(this).attr("data-href");
var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
var whatsapp_url = "whatsapp://send?text=" + message;
window.location.href = whatsapp_url;} 
else {alert("If you want to share on WhatsApp, Then please use Mobile Device");}});
});
