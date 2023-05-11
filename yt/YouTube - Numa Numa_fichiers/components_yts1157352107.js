var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var UT_RATING_IMG = '/img/star.gif';
var UT_RATING_IMG_HOVER = '/img/star_hover.gif';
var UT_RATING_IMG_HALF = '/img/star_half.gif';
var UT_RATING_IMG_BG = '/img/star_bg.gif';
var UT_RATING_IMG_REMOVED = '/img/star_removed.gif';

function UTRating(ratingElementId, maxStars, objectName, formName, ratingMessageId, componentSuffix, size)
{
	this.ratingElementId = ratingElementId;
	this.maxStars = maxStars;
	this.objectName = objectName;
	this.formName = formName;
	this.ratingMessageId = ratingMessageId
	this.componentSuffix = componentSuffix

	this.starTimer = null;
	this.starCount = 0;

	if(size=='S') {
		UT_RATING_IMG      = '/img/star_sm.gif'
		UT_RATING_IMG_HALF = '/img/star_sm_half.gif'
		UT_RATING_IMG_BG   = '/img/star_sm_bg.gif'
	}
	
	// pre-fetch image
	(new Image()).src = UT_RATING_IMG;
	(new Image()).src = UT_RATING_IMG_HALF;

	function showStars(starNum, skipMessageUpdate) {
		this.clearStarTimer();
		this.greyStars();
		this.colorStars(starNum);
		if(!skipMessageUpdate)
			this.setMessage(starNum);
	}

	function setMessage(starNum) {
		messages = new Array("Rate this video", "Poor", "Nothing special", "Worth watching", "Pretty cool", "Awesome!");
		document.getElementById(this.ratingMessageId).innerHTML = messages[starNum];
	}

	function colorStars(starNum) {
		for (var i=0; i < starNum; i++)
			document.getElementById('star_'  + this.componentSuffix + "_" + (i+1)).src = UT_RATING_IMG;
	}

	function greyStars() {
		for (var i=0; i < this.maxStars; i++)
			if (i <= this.starCount)
				document.getElementById('star_' + this.componentSuffix + "_"  + (i+1)).src = UT_RATING_IMG_BG; // UT_RATING_IMG_REMOVED;
			else
				document.getElementById('star_' + this.componentSuffix + "_"  + (i+1)).src = UT_RATING_IMG_BG;
	}

	function setStars(starNum) {
		this.starCount = starNum;
		this.drawStars(starNum);
		document.forms[this.formName]['rating'].value = this.starCount;
		var ratingElementId = this.ratingElementId;
		postForm(this.formName, true, function (req) { replaceDivContents(req, ratingElementId); });
	}


	function drawStars(starNum, skipMessageUpdate) {
		this.starCount=starNum;
		this.showStars(starNum, skipMessageUpdate);
	}

	function clearStars() {
		this.starTimer = setTimeout(this.objectName + ".resetStars()", 300);
	}

	function resetStars() {
		this.clearStarTimer();
		if (this.starCount)
			this.drawStars(this.starCount);
		else
			this.greyStars();
		this.setMessage(0);
	}

	function clearStarTimer() {
		if (this.starTimer) {
			clearTimeout(this.starTimer);
			this.starTimer = null;
		}
	}

	this.clearStars = clearStars;
	this.clearStarTimer = clearStarTimer;
	this.greyStars = greyStars;
	this.colorStars = colorStars;
	this.resetStars = resetStars;
	this.setStars = setStars;
	this.drawStars = drawStars;
	this.showStars = showStars;
	this.setMessage = setMessage;

}




}
/*
     FILE ARCHIVED ON 21:53:32 Jan 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:37:07 Apr 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 125.906
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 100.712 (3)
  PetaboxLoader3.datanode: 48.758 (4)
  PetaboxLoader3.resolve: 99.416 (3)
  load_resource: 58.242
*/