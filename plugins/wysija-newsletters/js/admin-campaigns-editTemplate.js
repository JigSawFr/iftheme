var wysijaIMG=$H(),ajaxOver=true;document.observe("dom:loaded",function(){$("wysija-upload-browse").observe("click",function(){WysijaPopup.open($(this).innerHTML,$(this).readAttribute("href2"));return false});$("wysija-themes-browse").observe("click",function(){WysijaPopup.open($(this).innerHTML,$(this).readAttribute("href2"));return false});$("wysija_divider_settings").observe("click",function(){WysijaPopup.open(wysijatrans.dividerSelectionTitle,$(this).readAttribute("href2"));return false});handleRemoveImage();handleRemoveTheme();handleSwitchTheme();$$(".wysija_toolbar_tabs a").invoke("observe","click",function(){$$(".wysija_toolbar_tabs a").invoke("removeClassName","selected");$$(".wj_images, .wj_content, .wj_styles, .wj_themes").invoke("hide");$$(".wj_"+$(this).readAttribute("rel"))[0].show();$(this).addClassName("selected");return false})});function handleRemoveImage(){$$(".wj_images li").invoke("stopObserving","mouseover");$$(".wj_images li").invoke("stopObserving","mouseout");$$(".wj_images li").invoke("observe","mouseover",function(){$(this).select("span.delete-wrap").first().show()});$$(".wj_images li").invoke("observe","mouseout",function(){$(this).select("span.delete-wrap").first().hide()});$$(".wj_images li .del-attachment").invoke("observe","click",function(a){removeImage($(this).innerHTML);$(this).stopObserving("click")})}function handleRemoveTheme(){$$(".wj_themes li").invoke("stopObserving","mouseover");$$(".wj_themes li").invoke("stopObserving","mouseout");$$(".wj_themes li").invoke("observe","mouseover",function(){$(this).select("span.delete-wrap").first().show()});$$(".wj_themes li").invoke("observe","mouseout",function(){$(this).select("span.delete-wrap").first().hide()});$$(".wj_themes li .del-attachment").invoke("observe","click",function(a){removeTheme($(this).innerHTML);$(this).stopObserving("click")})}function handleSwitchTheme(){$$("a.wysija_theme").invoke("observe","click",function(a){switchThemeWYSIJA(a)})}function removeTheme(a){if(confirm(wysijatrans.abouttodeletetheme.replace("%1$s",a))){$("wysija-theme-"+a).remove();wysijaAJAX.task="deleteTheme";wysijaAJAX.themekey=a;WYSIJA_AJAX_POST()}return true}function removeImage(a){var b=wysijaIMG.unset(a);if(b!==undefined){$("wysija-img-"+a).remove()}saveIQS();return true}function addImage(e){var d=new Element("img",{width:80,height:80,wysija_height:e.height,wysija_width:e.width,wysija_src:e.url,src:e.thumb_url});var c=new Element("a",{wysija_type:"image","class":"wysija_item"}).update(d);var b=new Element("li",{id:"wysija-img-"+e.identifier,"class":"new"}).update(c);b.insert('<span class="delete-wrap" style="display:none;"><span class="delete del-attachment">'+e.identifier+"</span></span>");$("wj-images-quick").insert(b,"before");handleRemoveImage();wysijaIMG.set(e.identifier,e);saveIQS();return true};