$(function(){var s=window.location.href.split("?")[1].split("&")[0],e=s.split("-")[0],t=(s.split("-")[1],$.ajax("https://app.codingblocks.com/events/"+e,{method:"GET",contentType:"application/json; charset=UTF-8",dataType:"json"}));t.done(function(e){var t=e.event;if(t){var n=moment(t.end_date+" "+t.end_time);t.is_registration_closed||"unpublished"===t.status||n.isBefore(moment())?$("#registrations-closed").removeClass("display-none"):($(".event-registration").removeClass("display-none"),$(".event-registration .event-banner").attr("src",t.banner),$(".event-registration > form").attr("action","https://app.codingblocks.com/events/"+s+"/register"),$(".event-registration > .title").html(t.title),$(".event-registration > .about").html(t.about),$(".event-registration > .description").html(t.description),t.is_certificate_event?$(".certificate-note").removeClass("display-none"):$(".certificate-note").addClass("display-none"))}else $("#not-found").removeClass("display-none")}),t.fail(function(e,t,n){500==e.status&&$("#not-found").removeClass("display-none")}),$("#event-registration-form").submit(function(e){$("#registration-error").addClass("display-none"),e.preventDefault();var t=$(this),n=t.attr("action"),s=$.ajax({method:"POST",url:n,data:t.serialize(),json:!0,xhrFields:{withCredentials:!0}});s.done(function(e){$("#event-registration-form").addClass("display-none"),$("#event-registration-form-success").removeClass("display-none")}),s.fail(function(e,t,n){500==e.status&&$("#registration-error").removeClass("display-none")})})});