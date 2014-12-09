$(function () {
	var menu = function (buttonsAndContents) {
		buttonsAndContents.map(function (buttonAndContent) {
			if (window.location.hash !== buttonAndContent.button.prop("id")) {
				buttonAndContent.content.css("display", "none");
			}
			buttonAndContent.button.on("click", function () {
				buttonsAndContents.map(function (buttonAndContent) {
					buttonAndContent.content.css("display", "none");
				});
				buttonAndContent.content.css("display", "");
			});
		});
		buttonsAndContents[0].content.css("display", "");
	};


	menu([{
		button: $("#browse-laws-menu"),
		content: $("#browse-laws"),
	}, {
		button: $("#vote-on-bills-menu"),
		content: $("#vote-on-bills"),
	}, {
		button: $("#submit-bill-menu"),
		content: $("#submit-bill"),
	}, {
		button: $("#about-menu"),
		content: $("#about"),
	}]);
});
