/* File Created: February 3, 2012 */

$(function () {
	$(".albumLink").click(function () {
		return $('.albumNavigation').slideToggle('slow');
	});
	return $("ul.albumNavigation.current").show();
});