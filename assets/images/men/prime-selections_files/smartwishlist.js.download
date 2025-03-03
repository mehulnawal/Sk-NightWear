function setCookieSW(e,t){var i=new Date;i.setTime(i.getTime()+31536e6);var r="expires="+i.toGMTString();if("string"!=typeof t)var n=JSON.stringify(t);else n=t;document.cookie=e+"="+n+";"+r+";path=/"}function getCookieSW(e){for(var t=e+"=",i=decodeURIComponent(document.cookie).split(";"),r=0;r<i.length;r++){for(var n=i[r];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}}if("undefined"==typeof jQuery){console.log("jquery not defined, loading it");var script=document.createElement("script");script.type="text/javascript",script.onload=SmartWishlistScripts,script.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(script)}else SmartWishlistScripts();var SmartWishlistMain;

function SmartWishlistScripts()
{
	
//tooltip
;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)}else{t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
	

(function($) {
	
var hostname=$(location).attr('hostname');
app_url="https://cloud.smartwishlist.webmarked.net/";
appdata_url="https://front.smartwishlist.webmarked.net/";
appsave_url="https://cloud.smartwishlist.webmarked.net/";
css_url="https://assets.smartwishlist.webmarked.net/static/v6/css/smartwishlist.min.css?20200409";
$("<link/>",{rel:"stylesheet",type:"text/css",href:css_url}).appendTo("head"),$("<link/>",{rel:"stylesheet",type:"text/css",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"}).appendTo("head");

console.log("SW: Smart Wishlist loaded successfully.");

customer_id=$("input[name='sw_customer_id']").val();

if((typeof __st)!=="undefined")
{
	if(customer_id==undefined) customer_id=__st.cid;
	if(customer_id==undefined) customer_id=0;
	store_id=__st.a;
	if(store_id==undefined) store_id=0;
}
else 
{
	store_id=0;customer_id=0;
}

SWGetExpressWishlistId=function(){return getCookieSW("wishlist_id");};
SWGetCustomerWishlistId=function(){return customer_id;};

var savewishlist= function (product_id,variant_id,wishlist_id,action,variant) {
	$.ajax({
	url: appsave_url+"v6/savewishlist.php/",
	data: {product_id: product_id,variant_id:variant_id,wishlist_id:wishlist_id,customer_id:customer_id,action:action,hostname:hostname,variant:variant,store_id:store_id},
	dataType: 'jsonp',
	jsonp: "callback",   
	})
	.done(function(data) {
	});				
	
return 0;
} 

var decodeEntities=function(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}


var getParameterByName=	function(paramatername) {
			paramatername = paramatername.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + paramatername + "=([^&#]*)");
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}		

var objectExists=function(items,product_variant)
{
	for (var i=0;i<items.length;i++)
	{
		if((items[i][0]==product_variant[0])&&(items[i][1]==product_variant[1]))
		return i;
	}
	return -1;
}

enable_accounts=0;

var initalWishlistSetupAccounts;
SmartWishlistMain=function()
{
		enable_variants=1;

		extra_css_product = $('<textarea />').html(extra_css_product).text();
		
		//unbind click for all wishlist buttons before we proceed
		$( ".smartwishlist" ).off( "click");
		
		if(swpbutton_type>1) extra_css_product+="#sw_wishlist_label{margin-left:10px} div#smartwishlist{margin:20px 0;} span#smartwishlist{margin-left:10px;}  #bookmarkit.swpbutton2{padding:0;height:50px;line-height:50px}";
		
		//add button
		
		swfl_text="My Wishlist";
		swfl_html=decodeEntities(swfl_html);

		
		//exclude checkout pages
		if (display_fixed_link === "1" && !$('#smartwishlistfixedlink').length && typeof Checkout=='undefined') { 
			// Existing 'smartwishlistfixedlink' element NOT found
			$('body').append('<div id="smartwishlistfixedlink"><a class="smartwishlistlink" href="' + wishlist_url + '" id="smartwishlist_desktop_link" title="' + swfl_text + '" aria-label="' + swfl_text + '">' + swfl_html + '</a></div>');
		}
		
		
		

		
		topbadge_font="sans-serif";

		
		
		$(".smartwishlistlink").css("background-color",swfl_background_color);
		$(".smartwishlistlink").css("color",swfl_text_color);		
		$("#smartwishlistfixedlink").css(swfl_margin_desktop,swfl_margin_value_desktop);
		
		if(swfl_position_desktop=="left") $("#smartwishlistfixedlink").css("left","0");
		else if(swfl_position_desktop=="right") $("#smartwishlistfixedlink").css("right","0");
		
		if((swfl_position_desktop=="left")&&(swfl_orientation_desktop=="vertical"))
		{
		 $("#smartwishlistfixedlink").css("transform","rotate(-90deg)");
		 $("#smartwishlistfixedlink").css("transform-origin","left top 0");
		}
		else if((swfl_position_desktop=="right")&&(swfl_orientation_desktop=="vertical"))
		{
		 $("#smartwishlistfixedlink").css("transform","rotate(90deg)");
		 $("#smartwishlistfixedlink").css("transform-origin","right top 0");
		}
		
		$(".topbadge").css("font-family",topbadge_font);
	
	
	
		wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
		wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
		
		tagproductid=$("#smartwishlist").data("product");
		if(tagproductid!=undefined) product_id=tagproductid;
		else
		{
			if((typeof __st)!=="undefined")	 product_id=__st.rid; else product_id=0;
		}	 
		
		
		urlvariantid=getParameterByName("variant");
		tagvariantid=$("#smartwishlist").data("variant");
		if((urlvariantid!=undefined)&&(urlvariantid!="")) 	variant_id=parseInt(urlvariantid);
		else if(tagvariantid!==undefined) variant_id=tagvariantid;
		else variant_id=0;
		
		var product_variant=[product_id,variant_id,1];
		
		if(use_extra_icon==1)
		{
			$("#smartwishlist").html('<div role="button" tabindex="0" id="bookmarkit" status="unbookmarked" class="unbookmarked sw_tooltip tooltip" title="'+wishlist_add_tooltip+'" aria-label="'+swpbutton_add_text+'"> <i id="wishlist_icon" class="'+extra_icon_class_name+'"></i><span id="bookmarkcount" class="wishlistcounter"></span></div><span id="wishlist_message"></span>');
			$(".smartwishlist").html('<span class="'+extra_icon_class_name+'"></span>');
		}
		else
		{
			$("#smartwishlist").html('<div role="button" tabindex="0" id="bookmarkit" status="unbookmarked" class="unbookmarked sw_tooltip tooltip" title="'+wishlist_add_tooltip+'" aria-label="'+swpbutton_add_text+'"> <i id="wishlist_icon" class="fa"></i><span id="bookmarkcount" class="wishlistcounter"></span></div><span id="wishlist_message"></span>');
			$("#wishlist_icon").addClass("fa-"+wishlist_icon_name);
			$(".smartwishlist").html('<span class="fa fa-'+wishlist_icon_name+'"></span>');
			
		}
		
		
		
		
		//initialize label        
		if(swpbutton_type=="2")
		{ 	
			$("#bookmarkit").addClass("swpbutton2").append('<span id="sw_wishlist_label"></span>');
			$("#sw_wishlist_label").html(swpbutton_add_text);
			
			$("#sw_wishlist_label").css("font-size", swpbutton_label_fontsize);
			$("#wishlist_icon").css("font-size", swpbutton_icon_fontsize);
			
			$("#bookmarkit").css("font-size", "inherit");//important
			
		}
		
		else if(swpbutton_type=="3")
		{
			
			$("#bookmarkit").addClass("swpbutton3").append('<span id="sw_wishlist_label"></span>');			
			$("#sw_wishlist_label").html(swpbutton_add_text);			
			
			$("#bookmarkit").css("font-size", "inherit");//important
			$("#sw_wishlist_label").css("font-size", swpbutton_label_fontsize);
			$("#wishlist_icon").css("font-size", swpbutton_icon_fontsize);
			
			$("#bookmarkit").css("height", swpbutton3_height);
			$("#bookmarkit").css("line-height", swpbutton3_height);
			$("#bookmarkit").css("border-radius", swpbutton3_radius);		
			
			extra_css_product+="#bookmarkit.swpbutton3{width:"+swpbutton3_width_desktop+" !important}";
			
			if(optimize_swpbutton_mobile==1) extra_css_product+=" @media (max-width:"+mobile_max_width+"){ #bookmarkit.swpbutton3{width:"+swpbutton3_width_mobile+" !important} #smartwishlist{text-align:center} span#smartwishlist{display:block!important;margin:20px 0}}";
			
			extra_css_product+=" #bookmarkit.swpbutton3{color: "+swpbutton3_color+" !important}";
			$("#bookmarkit").css("background-color", swpbutton3_background_color);
			
			
			$("div#smartwishlist").css("height",swpbutton3_height).css("display","block");
			
		}
		
		$("head").append("<style>/*CSS Dynamically added by Smart Wishlist*/"+extra_css_product+"</style>");   
		
	
		if(display_tooltip==1)	$(".smartwishlist").addClass("sw_tooltip").addClass("tooltip");
		$(".smartwishlist").attr("title",wishlist_add_tooltip);
		$(".smartwishlist").attr("aria-label",swpbutton_add_text).attr("role","button").attr("tabindex","0");
		
		 $("#bookmarkit, .smartwishlist")
        	.mouseenter(function() {	
        		var title = $(this).attr("title");
        		$(this).attr("tmp_title", title);
        		$(this).attr("title","");
        	})
        	.mouseleave(function() {
        		var title = $(this).attr("tmp_title");
        		$(this).attr("title", title);
        	})
        	.click(function() {	
        		var title = $(this).attr("tmp_title");
        		$(this).attr("title", title);
        	//});
        });	

         
		//initialize topbadge but hide it
		
		
		if(display_topbadge==1)
		{
			
			$('a[href$="'+wishlist_url+'"]').each(function(index) {
				var wishlist_link_text=$(this).html();
				if(wishlist_link_text.indexOf("topbadge")===-1) wishlist_link_text+='<span class="topbadge"></span>';
				$(this).html(wishlist_link_text);
				
				});
					
			$(".topbadge").css("color",topbadge_color);
			$(".topbadge").css("background-color",topbadge_background_color);
			if(topbadge_padding!="") $(".topbadge").css("padding",topbadge_padding);
			$(".topbadge").hide();
		}
		
	

		if(display_item_count==1) $("#bookmarkcount").show(); else $("#bookmarkcount").hide();
		

		var bookmarkeditems=getCookieSW('bookmarkeditems'); 
		
		//drop random wishlist id if not present
		var wishlist_id=getCookieSW('wishlist_id');
		//console.log("SW: Express Wishlist Id= "+wishlist_id);
		if(wishlist_id==undefined)
		{
			if((typeof __st)!=="undefined")	wishlist_id=__st.a+(Math.random().toString(36)).slice(2, 22);
			else wishlist_id=(Math.random().toString(36)).slice(2, 22)+(Math.random().toString()).slice(2, 22);
			setCookieSW('wishlist_id',wishlist_id,{ expires: 365 });
		}
		
		if(customer_id==0)
		{
							
		if(bookmarkeditems==undefined) 
		{
				$("#bookmarkcount").html(""); 
				$("#bookmarkit").attr("title",wishlist_add_tooltip);
				$("#sw_wishlist_label").html(swpbutton_add_text);
				setCookieSW('bookmarkeditems',JSON.stringify({"items":[]}),{ expires: 365 });
				$(".smartwishlist").removeClass("bookmarked").addClass("unbookmarked");
			

		}
		else
		{
			var bookmarkeditems_json=JSON.parse(bookmarkeditems);
			
			//upgrade
			
			if(bookmarkeditems!="undefined")
			{
				if(bookmarkeditems_json.items.length>0)
					{
						if(typeof bookmarkeditems_json.items[0]!="object")
						{
							$.ajax({url:app_url+"/upgradewishlistdata.php",
							data: {bookmarkeditems:bookmarkeditems,shop:hostname},
							dataType: 'jsonp',
							jsonp: "callback",   
							success:function(data)
							{
								setCookieSW('bookmarkeditems',JSON.stringify({"items":data}),{ expires: 365 });
								bookmarkeditems=getCookieSW('bookmarkeditems'); 
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								alert("Your Wishlist has been upgraded to use multiple Variants. Please reload the Page to continue");

							},
							error: function(data){},
							complete: function(xhr,status){}
							});				
						}
						
					}
			}		
			
			
			if(bookmarkeditems_json.items.length>0) 
			{
				$("#bookmarkcount").html(bookmarkeditems_json.items.length);
				$(".topbadge").show();
				$(".topbadge").html(bookmarkeditems_json.items.length);
			}	
			
			if(objectExists(bookmarkeditems_json.items,product_variant)>-1) 
			{
				$("#bookmarkit").attr("status","bookmarked");
				$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
				$("#bookmarkit").attr("title",wishlist_remove_tooltip);
				$("#sw_wishlist_label").html(swpbutton_remove_text);
				$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
				if(use_extra_icon==1)
				$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
				else 
				$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
				
			}				
				
				
			var updateWishlist=function()
			{
				urlvariantid=getParameterByName("variant");
				tagvariantid=$("#smartwishlist").data("variant");
				
				if((urlvariantid!=undefined)&&(urlvariantid!="")) 
				{
					variant_id=parseInt(urlvariantid);
				}
				else if(tagvariantid!=undefined) variant_id=tagvariantid;		
				else variant_id=0;
				
				product_variant=[product_id,variant_id,1];
				
				if(objectExists(bookmarkeditems_json.items,product_variant)>-1) 
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_remove_tooltip);
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_remove_tooltip);
					
					if(use_extra_icon==1) 
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					
				}
				else
				{
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_add_tooltip);
					
					if(use_extra_icon==1) 
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					
				}									
				
			};	
			
			 var oldLocation = location.href;
			 setInterval(function() {
				  if(location.href != oldLocation) {
					   updateWishlist();
					   oldLocation = location.href;
				  }
			  }, 1000); // check every second	
			
			
							
			// initial setup on category/collection pages
			$(".smartwishlist").each(function(index)
			{
				var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
				if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
				{
					$(this).removeClass("unbookmarked").addClass("bookmarked");
					$(this).attr("title",wishlist_remove_tooltip);
					$(this).attr("aria-label",swpbutton_remove_text);
					
					if(use_extra_icon==1) 
					{
						$(this).find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					}
					else 
					{
						$(this).find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					}
					
				}
				else
				{
					$(this).removeClass("bookmarked").addClass("unbookmarked");
					$(this).attr("title",wishlist_add_tooltip);
					$(this).attr("aria-label",swpbutton_add_text);
					
					
					if(use_extra_icon==1) 
					{
						$(this).find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					}
					else 
					{
						$(this).find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					}
				}
								
			
			});
		
			

		}
		/* end bookmarkeditems present */
	} /* end customer_id 0 */
	else /* customer_id > 0 */
	{
		if(bookmarkeditems==undefined) 		setCookieSW('bookmarkeditems',JSON.stringify({"items":[]}),{ expires: 365 });
		else
		{
			var bookmarkeditems_json=JSON.parse(bookmarkeditems);
			
			//upgrade wishlist format
			
			if(bookmarkeditems!="undefined")
			{
				if(bookmarkeditems_json.items.length>0)
					{
						if(typeof bookmarkeditems_json.items[0]!="object")
						{
							$.ajax({url:app_url+"/upgradewishlistdata.php",
							data: {bookmarkeditems:bookmarkeditems,shop:hostname},
							dataType: 'jsonp',
							jsonp: "callback",   
							success:function(data)
							{
								setCookieSW('bookmarkeditems',JSON.stringify({"items":data}),{ expires: 365 });
								bookmarkeditems=getCookieSW('bookmarkeditems'); 
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								alert("Your Wishlist has been upgraded to use multiple Variants. Please reload the Page to continue");

							},
							error: function(data){},
							complete: function(xhr,status){}
							});				
						}
						
					}
			}
		}			
			
			
			
				
				
			var updateWishlist=function()
			{
				urlvariantid=getParameterByName("variant");
				tagvariantid=$("#smartwishlist").data("variant");
				
				if((urlvariantid!=undefined)&&(urlvariantid!="")) 
				{
					variant_id=parseInt(urlvariantid);
				}
				else if(tagvariantid!=undefined) variant_id=tagvariantid;		
				else variant_id=0;
				
				product_variant=[product_id,variant_id,1];
				
				if(objectExists(saved_wishlist_items,product_variant)>-1) 
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_remove_tooltip);
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_remove_tooltip);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					
				}
				else
				{
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_add_tooltip);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					
				}									
				
			};	
			
			 var oldLocation = location.href;
			 setInterval(function() {
				  if(location.href != oldLocation) {
					   updateWishlist();
					   oldLocation = location.href;
				  }
			  }, 1000); // check every second	
			
			
			
			
			initalWishlistSetupAccounts=function()
			{
				//initial setup for product pages
				
				if(num_saved_wishlist_items>0) 
				{
					//display counters only if items are present in the wishlist
					$("#bookmarkcount").html(num_saved_wishlist_items);
					$(".topbadge").show();
					$(".topbadge").html(num_saved_wishlist_items);
				}
				else $(".topbadge").html(num_saved_wishlist_items).hide();
				
				if(objectExists(saved_wishlist_items,product_variant)>-1) 
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_remove_tooltip);
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					
				}
				else
				{
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
				}	
							
								
				// initial setup on category/collection pages
				$(".smartwishlist").each(function(index)
				{
					var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
					if(objectExists(saved_wishlist_items,product_variant_local)>-1) 
					{
						$(this).removeClass("unbookmarked").addClass("bookmarked");
						$(this).attr("title",wishlist_remove_tooltip);
						$(this).attr("aria-label",swpbutton_remove_text);
						if(use_extra_icon==1) 
						{
							$(this).find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
						}
						else 
						{
							$(this).find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
						}
						
					}
					else
					{
						$(this).removeClass("bookmarked").addClass("unbookmarked");
						$(this).attr("title",wishlist_add_tooltip);
						$(this).attr("aria-label",swpbutton_add_text);
						
						if(use_extra_icon==1) 
						{
							$(this).find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
						}
						else 
						{
							$(this).find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
						}
					}
									
				
				});
			
		};
		
		initalWishlistSetupAccounts();
		
			

		//}
	}/* end customer_id > 0 */


//repeat the same for on click events
if(customer_id==0)
{
			
		$(".smartwishlist").click(function(event)
		//$(".smartwishlist").on('click touchend', function(event)
			{
				event.preventDefault();
				bookmarkeditems=getCookieSW('bookmarkeditems');

						if((force_login==1)&&(enable_accounts==1))
						{
							location.href="/account/login?redirect_url="+location.pathname;
						}
						else
						{
							if(bookmarkeditems!=undefined)
							{
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								var wishlistitemcount=bookmarkeditems_json.items.length;
								
								var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
								if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
								{
									
									bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant_local),1);
									
									if(customer_id==0)
									setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
								
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("bookmarked").addClass("unbookmarked").attr("aria-label",swpbutton_add_text);
									
									if(use_extra_icon==1)								
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
									}
									else
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
									}
																		
									
									try
									{
										wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
										if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_add_tooltip);
									}
									catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
									
									wishlistitemcount--;
									savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"remove",0);
									
									if (typeof SWCallbackExpressWishlistCollectionItemRemoved !== "undefined" && $.isFunction(SWCallbackExpressWishlistCollectionItemRemoved)) SWCallbackExpressWishlistCollectionItemRemoved();
																
								}
								else
								{
									bookmarkeditems_json.items.push(product_variant_local);
									
									if(customer_id==0)
									setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });							
									
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("unbookmarked").addClass("bookmarked").attr("aria-label",swpbutton_remove_text);
									
									if(use_extra_icon==1)								
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
									}
									else
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
									}
									
									try
									{
										wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
										if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_remove_tooltip);
									}
									catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
									
									wishlistitemcount++;
									savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"add",0);
									
									if (typeof SWCallbackExpressWishlistCollectionItemAdded !== "undefined" && $.isFunction(SWCallbackExpressWishlistCollectionItemAdded)) SWCallbackExpressWishlistCollectionItemAdded();
								}
								
								
								if(wishlistitemcount>0)
								{
									$(".topbadge").show();
									$(".topbadge").html(wishlistitemcount);		
								}
								else
								{
									$(".topbadge").html(wishlistitemcount).hide();
								}
								
								
							} 	
							bookmarkeditems=getCookieSW('bookmarkeditems');
						}
						 return false;				
				
			});		

		$("#bookmarkit").click(function()
		//$("#bookmarkit").on('click touchend', function()
		{
			if((force_login==1)&&(enable_accounts==1))
			{
				location.href="/account/login?redirect_url="+location.pathname;
			}
			else
			{	
				
				bookmarkeditems=getCookieSW('bookmarkeditems');
				bookmarkeditems_json=JSON.parse(bookmarkeditems);
				var bookmarkcount= bookmarkeditems_json.items.length;
				
				if($("#bookmarkit").attr("status")=="unbookmarked")
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					if(use_extra_icon==1)
					{
						$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					}
					else
					{
						$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					}
				
					wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
					if(display_tooltip_productpage==1)	$(this).tooltipster('content', wishlist_remove_tooltip);
					
					bookmarkeditems_json.items.push(product_variant);
					if(customer_id==0)
					setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
					
					bookmarkcount++;
					savewishlist(product_id,variant_id,wishlist_id,"add",1);
					
					if (typeof SWCallbackExpressWishlistProductItemAdded !== "undefined" && $.isFunction(SWCallbackExpressWishlistProductItemAdded)) SWCallbackExpressWishlistProductItemAdded();
					
					
				}
				else
				{
					
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					
					if(use_extra_icon==1)
					{
						$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					}
					else
					{
						$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					}
				
					wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
					if(display_tooltip_productpage==1) $(this).tooltipster('content', wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					bookmarkcount--;	
					
					bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant),1);
					
					if(customer_id==0)
					setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
					savewishlist(product_id,variant_id,wishlist_id,"remove",1);
					
					if (typeof SWCallbackExpressWishlistProductItemRemoved !== "undefined" && $.isFunction(SWCallbackExpressWishlistProductItemRemoved)) SWCallbackExpressWishlistProductItemRemoved();
			
				}
			}
			
			
			
			if(bookmarkcount>0)
			{
				$(".topbadge").show();
				$(".topbadge").html(bookmarkcount);
				$("#bookmarkcount").html(bookmarkcount);		
			}
			else
			{
				$(".topbadge").html(bookmarkcount).hide();
				$("#bookmarkcount").html("");
			}
			bookmarkeditems=getCookieSW('bookmarkeditems');
		});
} 
else //customer_id >0	
{
	$(".smartwishlist").click(function(event)
	//$(".smartwishlist").on('click touchend', function(event)
			{
				event.preventDefault();

							
							var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
							if(objectExists(saved_wishlist_items,product_variant_local)>-1) 
							{
								
								saved_wishlist_items.splice(objectExists(saved_wishlist_items,product_variant_local),1);
								$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("bookmarked").addClass("unbookmarked").attr("aria-label",swpbutton_add_text);
								
								if(use_extra_icon==1)								
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
								}
								else
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
								}
								
								try
								{
									wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
									if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_add_tooltip);
								}
								catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
								
								num_saved_wishlist_items--;
								savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"remove",0);
								
								if (typeof SWCallbackCustomerWishlistCollectionItemRemoved !== "undefined" && $.isFunction(SWCallbackCustomerWishlistCollectionItemRemoved)) SWCallbackCustomerWishlistCollectionItemRemoved();
															
							}
							else
							{
								saved_wishlist_items.push(product_variant_local);			
								$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("unbookmarked").addClass("bookmarked").attr("aria-label",swpbutton_remove_text);
								
								if(use_extra_icon==1)								
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
								}
								else
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
								}
								
								try
								{
									wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
									if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_remove_tooltip);
								}
								catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
								
								num_saved_wishlist_items++;
								savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"add",0);
								
								if (typeof SWCallbackCustomerWishlistCollectionItemAdded !== "undefined" && $.isFunction(SWCallbackCustomerWishlistCollectionItemAdded)) SWCallbackCustomerWishlistCollectionItemAdded();
							}
							
							bookmarkeditems=getCookieSW('bookmarkeditems');
							if(bookmarkeditems!=undefined)
							{
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								var wishlistitemcount=bookmarkeditems_json.items.length;
								
								var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
								if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
								{
									
									bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant_local),1);
									setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
																
								}
							}	
							
							
							if(num_saved_wishlist_items>0)
							{
								$(".topbadge").show();
								$(".topbadge").html(num_saved_wishlist_items);		
							}
							else
							{
								$(".topbadge").html(num_saved_wishlist_items).hide();
							}
							
						return false;					
				
			});		

		$("#bookmarkit").click(function()
		//$("#bookmarkit").on('click touchend', function()
		{
			if($("#bookmarkit").attr("status")=="unbookmarked")
			{
				$("#bookmarkit").attr("status","bookmarked");
				$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
				$("#sw_wishlist_label").html(swpbutton_remove_text);
				$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
				
				if(use_extra_icon==1)
				{
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
				}
				else
				{
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
				}
				
				wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);

				if(display_tooltip_productpage==1)	$(this).tooltipster('content', wishlist_remove_tooltip);
				
				saved_wishlist_items.push(product_variant);				
				num_saved_wishlist_items++;
				savewishlist(product_id,variant_id,wishlist_id,"add",1);
				
				if (typeof SWCallbackCustomerWishlistProductItemAdded !== "undefined" && $.isFunction(SWCallbackCustomerWishlistProductItemAdded)) SWCallbackCustomerWishlistProductItemAdded();
				
				
			}
			else
			{
				
				$("#bookmarkit").attr("status","unbookmarked");
				//$("#bookmarkit").attr("class","unbookmarked sw_tooltip tooltip");
				$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
				//if(display_tooltip==1) $(".sw_tooltip.tooltip").tooltipster('content', wishlist_add_tooltip);
				
				if(use_extra_icon==1)
				{
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
				}
				else
				{
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
				}
				
				wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);

				if(display_tooltip_productpage==1) $(this).tooltipster('content', wishlist_add_tooltip);
				$("#sw_wishlist_label").html(swpbutton_add_text);
				$("#bookmarkit").attr("aria-label",swpbutton_add_text);
				
				//$("#bookmarktext").html(pre_bookmark_text);
				num_saved_wishlist_items--;	
				//var bookmarkeditems_json=JSON.parse(bookmarkeditems);	
				
				saved_wishlist_items.splice(objectExists(saved_wishlist_items,product_variant),1);
				savewishlist(product_id,variant_id,wishlist_id,"remove",1);
				
				if (typeof SWCallbackCustomerWishlistProductItemRemoved !== "undefined" && $.isFunction(SWCallbackCustomerWishlistProductItemRemoved)) SWCallbackCustomerWishlistProductItemRemoved();

				
				//if(Cookies2==undefined) var Cookies2=Cookies.noConflict();
				bookmarkeditems=getCookieSW('bookmarkeditems');
				if(bookmarkeditems!=undefined)
				{
					bookmarkeditems_json=JSON.parse(bookmarkeditems);
					var wishlistitemcount=bookmarkeditems_json.items.length;
					
					var product_variant_local=[$(this).data("product"),$(this).data("variant"),1];
					if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
					{
						bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant_local),1);
						setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
													
					}
				}

			}
			
			if(num_saved_wishlist_items>0)
			{
				$(".topbadge").show();
				$(".topbadge").html(num_saved_wishlist_items);
				$("#bookmarkcount").html(num_saved_wishlist_items);		
			}
			else
			{
				$(".topbadge").html(num_saved_wishlist_items).hide();
				$("#bookmarkcount").html("");
			}
		});
}

//patch for admin bar
if($("#admin_bar_iframe").css("right")!=undefined)
{
	if($("#admin_bar_iframe").css("left")=="0px")
	{
		tooltip_offset_y="40px";
		console.log("SW: Tooltip position adjusted due to Shopify Admin Bar.");
	}
	
}


if(display_tooltip_productpage==1)
		{	
			$('#smartwishlist .sw_tooltip.tooltip').tooltipster({
			 theme: 'tooltip-store-theme',
			 hideOnClick:true,
			 updateAnimation:false,	 
			 interactive:true,
			 contentAsHTML:true,		
			 delay:0,
			 offsetX:tooltip_offset_x,
			 offsetY:tooltip_offset_y,
			 position:tooltip_position
			 });
		}

		
		//initialize tooltip
		if(display_tooltip==1)
		{	
			$('.smartwishlist.sw_tooltip.tooltip').tooltipster({
			 theme: 'tooltip-store-theme',
			 hideOnClick:true,
			 updateAnimation:false,	 
			 interactive:true,
			 contentAsHTML:true,		
			 delay:0,
			 offsetX:tooltip_offset_x,
			 offsetY:tooltip_offset_y,
			 position:tooltip_position
			 });
		}
		
		
}

//use_autosetup=1;
display_button_inline=1;
if(location.pathname.indexOf("/products/")!=-1) is_product_page=1; else is_product_page=0;

function SmartWishlistMainAuto()
{

	if(is_product_page==1)
	{
		//not homepage
		jsonURL=location.origin+location.pathname+".json";

		$.ajax({
		  url: jsonURL,			  
		  success: function(data)
			{
				autoproductid=data.product.id;
				autovariantid=data.product.variants[0].id;
				
				if($("#smartwishlist").html()==undefined)
				{
					//console.log("SW: Auto Wishlist button displayed");
					if(use_custom_location==1) var sw_product_button_location=custom_location; else var sw_product_button_location='form[action^="/cart/add"]';
					
					//takes care of cases like /en/cart/add without impacting other stores
					if (typeof $(sw_product_button_location).html()=="undefined") var sw_product_button_location='form[action*="/cart/add"]';
					
					$(sw_product_button_location).after('<div id="smartwishlist" data-product="'+autoproductid+'" data-variant="'+autovariantid+'"></div>');					
				}
				//else console.log("SW: Manual Wishlist button displayed");
				
				SmartWishlistMain();
			},
		  dataType: 'json'
		});	
	}	
}

var webstorage_supported=0;
if (typeof(Storage) !== "undefined") webstorage_supported=1; else console.log("SW: Browser doesn't support local storage. caching not possible");

if (webstorage_supported==1) var smartwishlist_local_config=localStorage.getItem("smartwishlist_config");
if(smartwishlist_local_config!=undefined)
{
		
		smartwishlist_local_config=JSON.parse(smartwishlist_local_config);
		
		pre_bookmark_text=smartwishlist_local_config['add_tooltip_text'];
		post_bookmark_text=smartwishlist_local_config['remove_tooltip_text'];
		wishlist_icon_color=smartwishlist_local_config['wishlist_icon_color'];
		wishlist_icon_hover_color=smartwishlist_local_config['wishlist_icon_hover_color'];
		wishlist_icon_name=smartwishlist_local_config['wishlist_icon_name'];
		wishlist_icon_hover_name=smartwishlist_local_config['wishlist_icon_hover_name'];
		use_extra_icon=parseInt(smartwishlist_local_config['use_extra_icon']);
		extra_icon_class_name=smartwishlist_local_config['extra_icon_class_name'];
		extra_icon_hover_class_name=smartwishlist_local_config['extra_icon_hover_class_name'];
		use_custom_location=parseInt(smartwishlist_local_config['use_custom_location']);
		custom_location=smartwishlist_local_config['custom_location'];				
		display_item_count=smartwishlist_local_config['display_item_count'];		
		wishlist_add_tooltip=smartwishlist_local_config['add_tooltip_text'];
		wishlist_remove_tooltip=smartwishlist_local_config['remove_tooltip_text'];
		wishlist_url=smartwishlist_local_config['proxy_base'];
		display_topbadge=smartwishlist_local_config['display_topbadge'];
		topbadge_color=smartwishlist_local_config['topbadge_color'];
		topbadge_background_color=smartwishlist_local_config['topbadge_background_color'];
		topbadge_padding=smartwishlist_local_config['topbadge_padding'];
		enable_accounts=smartwishlist_local_config['enable_accounts'];
		force_login=smartwishlist_local_config['force_login'];
		extra_css_product=smartwishlist_local_config['extra_css_product'];
		saved_wishlist_items=smartwishlist_local_config['wishlist_items'];
		num_saved_wishlist_items=saved_wishlist_items.length;
		tooltip_offset_x=smartwishlist_local_config['tooltip_offset_x'];
		tooltip_offset_y=smartwishlist_local_config['tooltip_offset_y'];
		tooltip_position=smartwishlist_local_config['tooltip_position'];
		display_tooltip=smartwishlist_local_config['display_tooltip'];
		display_tooltip_productpage=smartwishlist_local_config['display_tooltip_productpage'];
		use_autosetup=smartwishlist_local_config['use_autosetup'];
		display_fixed_link=smartwishlist_local_config['display_fixed_link'];
		swfl_html=smartwishlist_local_config['swfl_html'];
		swfl_orientation_desktop=smartwishlist_local_config['swfl_orientation_desktop'];
		swfl_position_desktop=smartwishlist_local_config['swfl_position_desktop'];
		swfl_margin_desktop=smartwishlist_local_config['swfl_margin_desktop'];
		swfl_margin_value_desktop=smartwishlist_local_config['swfl_margin_value_desktop'];
		swfl_background_color=smartwishlist_local_config['swfl_background_color'];
		swfl_text_color=smartwishlist_local_config['swfl_text_color'];
		swpbutton_type=smartwishlist_local_config['swpbutton_type'];
		swpbutton_add_text=smartwishlist_local_config['swpbutton_add_text'];
		swpbutton_remove_text=smartwishlist_local_config['swpbutton_remove_text'];
		swpbutton_font_family=smartwishlist_local_config['swpbutton_font_family'];
		swpbutton_label_fontsize=smartwishlist_local_config['swpbutton_label_fontsize'];
		swpbutton_icon_fontsize=smartwishlist_local_config['swpbutton_icon_fontsize'];
		swpbutton3_color=smartwishlist_local_config['swpbutton3_color'];
		swpbutton3_background_color=smartwishlist_local_config['swpbutton3_background_color'];
		swpbutton3_radius=smartwishlist_local_config['swpbutton3_radius'];
		swpbutton3_width_desktop=smartwishlist_local_config['swpbutton3_width_desktop'];
		swpbutton3_width_mobile=smartwishlist_local_config['swpbutton3_width_mobile'];
		swpbutton3_height=smartwishlist_local_config['swpbutton3_height'];
		optimize_swpbutton_mobile=smartwishlist_local_config['optimize_swpbutton_mobile'];
		mobile_max_width=smartwishlist_local_config['mobile_max_width'];
		
		
		if((use_autosetup==1)&&(is_product_page==1)) SmartWishlistMainAuto(); else SmartWishlistMain();
		//console.log("SW: Loading from App Cache");
}


$.ajax({
	url:appdata_url+"v6/fetchstoredata.php",
	data: {store_domain:hostname,store_id:store_id,customer_id:customer_id},
	dataType: 'jsonp',
	jsonp: "callback",
	success: function(data)
	{  
		pre_bookmark_text=data['add_tooltip_text'];
		post_bookmark_text=data['remove_tooltip_text'];
		wishlist_icon_color=data['wishlist_icon_color'];
		wishlist_icon_hover_color=data['wishlist_icon_hover_color'];
		wishlist_icon_name=data['wishlist_icon_name'];
		wishlist_icon_hover_name=data['wishlist_icon_hover_name'];
		use_extra_icon=parseInt(data['use_extra_icon']);
		extra_icon_class_name=data['extra_icon_class_name'];
		extra_icon_hover_class_name=data['extra_icon_hover_class_name'];
		use_custom_location=parseInt(data['use_custom_location']);
		custom_location=data['custom_location'];		
		display_item_count=data['display_item_count'];		
		wishlist_add_tooltip=data['add_tooltip_text'];
		wishlist_remove_tooltip=data['remove_tooltip_text'];
		wishlist_url=data['proxy_base'];
		display_topbadge=data['display_topbadge'];
		topbadge_color=data['topbadge_color'];
		topbadge_background_color=data['topbadge_background_color'];
		topbadge_padding=data['topbadge_padding'];
		enable_accounts=data['enable_accounts'];
		force_login=data['force_login'];
		extra_css_product=data['extra_css_product'];
		saved_wishlist_items=data['wishlist_items'];
		num_saved_wishlist_items=saved_wishlist_items.length;
		tooltip_offset_x=data['tooltip_offset_x'];
		tooltip_offset_y=data['tooltip_offset_y'];
		tooltip_position=data['tooltip_position'];
		display_tooltip=data['display_tooltip'];
		display_tooltip_productpage=data['display_tooltip_productpage'];
		use_autosetup=data['use_autosetup'];
		display_fixed_link=data['display_fixed_link'];
		swfl_html=data['swfl_html'];
		swfl_text=data['swfl_text'];
		swfl_orientation_desktop=data['swfl_orientation_desktop'];
		swfl_position_desktop=data['swfl_position_desktop'];
		swfl_margin_desktop=data['swfl_margin_desktop'];
		swfl_margin_value_desktop=data['swfl_margin_value_desktop'];
		swfl_background_color=data['swfl_background_color'];
		swfl_text_color=data['swfl_text_color'];
		swpbutton_type=data['swpbutton_type'];
		swpbutton_add_text=data['swpbutton_add_text'];
		swpbutton_remove_text=data['swpbutton_remove_text'];
		swpbutton_font_family=data['swpbutton_font_family'];
		swpbutton_label_fontsize=data['swpbutton_label_fontsize'];
		swpbutton_icon_fontsize=data['swpbutton_icon_fontsize'];
		swpbutton3_color=data['swpbutton3_color'];
		swpbutton3_background_color=data['swpbutton3_background_color'];
		swpbutton3_radius=data['swpbutton3_radius'];
		swpbutton3_width_desktop=data['swpbutton3_width_desktop'];
		swpbutton3_width_mobile=data['swpbutton3_width_mobile'];
		swpbutton3_height=data['swpbutton3_height'];
		optimize_swpbutton_mobile=data['optimize_swpbutton_mobile'];
		mobile_max_width=data['mobile_max_width'];
		
			
		if(smartwishlist_local_config==undefined) {if((use_autosetup==1)&&(is_product_page==1)) SmartWishlistMainAuto(); else SmartWishlistMain();	}
		if (webstorage_supported==1) localStorage.setItem("smartwishlist_config",JSON.stringify(data));
		
		if(parseInt(num_saved_wishlist_items)>0) { $("#bookmarkcount, .topbadge").html(num_saved_wishlist_items);}
		
		if(customer_id>0) initalWishlistSetupAccounts();

		
				 
	
	},
	error: function(data)
	{    
		//
	},
	complete: function(data)
	{    
			if(wishlist_id==undefined)
			{
				var wishlist_id=getCookieSW('wishlist_id');
			}
			
			if (typeof SWCallbackWishlistButtonLoaded !== "undefined" && $.isFunction(SWCallbackWishlistButtonLoaded)) SWCallbackWishlistButtonLoaded();

			//sync wishlist data
			//console.log("SW: Customer_id= "+customer_id);
			//console.log("SW: Enable_accounts= "+enable_accounts);
			if((customer_id!=undefined)&&(customer_id>0)&&(enable_accounts==1))
			{
			var wishlist_customer_id=getCookieSW('wishlist_customer_id');
			var sync=false;
			if(wishlist_customer_id=="undefined") {sync=true; setCookieSW('wishlist_customer_id',customer_id,{ expires: 365 });}
			else if(wishlist_customer_id!=customer_id) {sync=true; setCookieSW('wishlist_customer_id',customer_id,{ expires: 365 });}
			if(sync==true)
				{
					console.log("syncing wishlist");
					$.ajax({
						url:app_url+"v6/syncwishlist.php",
						data: {wishlist_id:wishlist_id,customer_id:customer_id,store_id:store_id},
						dataType: 'jsonp',
						jsonp: "callback",
						success: function(data)
						{
							var total_count= parseInt(data.total_count);
							if((total_count>0)&&(display_topbadge>0))
							{
								$(".topbadge").show();
								$(".topbadge").html(total_count);
							}
							
						},
						error: function(data)
						{    
						},
						complete: function(data)
						{    

						}		
						});	
				}	
			}
			else 
			{
				setCookieSW('wishlist_customer_id',0,{ expires: 365 });
				
			}				

	}			
});



//patch for admin bar changes
if($("#admin_bar_iframe").length>0)
{
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var target = document.querySelector('#admin_bar_iframe');
	var observer = new MutationObserver(function(mutations) {
		
		if($("#admin_bar_iframe").css("left")=="0px")
		{
			tooltip_offset_y="40px";
		}
		else tooltip_offset_y="0";
			
		$(".sw_tooltip.tooltip").tooltipster('option','offsetY', tooltip_offset_y);

	});
	var config = { attributes: true }
	observer.observe(target, config);
}

//redirect back to original page after login
var sw_redirect_url=getParameterByName("redirect_url");
if((sw_redirect_url!="")&&(sw_redirect_url!=null)&&(sw_redirect_url!=undefined))
{ 
	
	var input_checkout_url= document.getElementsByName("checkout_url");
	for (i = 0; i < input_checkout_url.length; i++) {
    input_checkout_url[i].value =sw_redirect_url;
	}

}

AddToSmartWishlist=function(temp_product_id,temp_variant_id)
{
	if((typeof(temp_product_id)=="undefined")||(typeof(temp_variant_id)=="undefined")) {console.log("SW:Invalid input"); return;}
	if(!(parseInt(temp_product_id)>0)&&(parseInt(temp_product_id)>0)){console.log("SW:Invalid input"); return;}
	var temp_product_variant=[temp_product_id,temp_variant_id,1];
	var temp_wishlist_id=getCookieSW('wishlist_id');
	
	if(parseInt(customer_id)>0)// if user loggged in
	{	
		//check if data exists on server
		if(objectExists(saved_wishlist_items,temp_product_variant)==-1)
		{
			//insert data
			saved_wishlist_items.push(temp_product_variant);
			savewishlist(temp_product_id,temp_variant_id,temp_wishlist_id,"add",1);
			ReloadSmartWishlist();
		}
		
	}
	else //user not logged in
	{
		//check if data exists on browser
		bookmarkeditems=getCookieSW('bookmarkeditems');
		if(bookmarkeditems!=undefined) 
		{
			bookmarkeditems_json=JSON.parse(bookmarkeditems);
			if(objectExists(bookmarkeditems_json.items,temp_product_variant)==-1)
			{
				bookmarkeditems_json.items.push(temp_product_variant);
				setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
				savewishlist(temp_product_id,temp_variant_id,temp_wishlist_id,"add",1);
				ReloadSmartWishlist();
			} 
		}
		
	}
	
}

RemoveFromSmartWishlist=function(temp_product_id,temp_variant_id)
{
	if((typeof(temp_product_id)=="undefined")||(typeof(temp_variant_id)=="undefined")) {console.log("SW:Invalid input"); return;}
	if(!(parseInt(temp_product_id)>0)&&(parseInt(temp_product_id)>0)){console.log("SW:Invalid input"); return;}
	var temp_product_variant=[temp_product_id,temp_variant_id,1];
	var temp_wishlist_id=getCookieSW('wishlist_id');
	
	if(parseInt(customer_id)>0)// if user loggged in
	{	
		//check if data exists on server
		var temp_prod_index=objectExists(saved_wishlist_items,temp_product_variant);
		if(temp_prod_index>-1)
		{
			//remove data
			saved_wishlist_items.splice(temp_prod_index,1);
			savewishlist(temp_product_id,temp_variant_id,temp_wishlist_id,"remove",1);
			ReloadSmartWishlist();
		}
		
	}
	else //user not logged in
	{
		//check if data exists on browser
		bookmarkeditems=getCookieSW('bookmarkeditems');
		if(bookmarkeditems!=undefined) 
		{
			bookmarkeditems_json=JSON.parse(bookmarkeditems);
			var temp_prod_index=objectExists(bookmarkeditems_json.items,temp_product_variant);
			if(temp_prod_index>-1)
			{
				bookmarkeditems_json.items.splice(temp_prod_index,1);
				setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
				savewishlist(temp_product_id,temp_variant_id,temp_wishlist_id,"remove",1);
				ReloadSmartWishlist();
			} 
		}
		
	}
	
}

})(jQuery);


}

function ReloadSmartWishlist() {
console.log("Reloading Smart Wishlist");
SmartWishlistMain();  
}


