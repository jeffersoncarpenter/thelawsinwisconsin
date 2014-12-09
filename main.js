$(function () {
	var menu = function (buttonsAndContents) {
		buttonsAndContents.map(function (buttonAndContent) {
			buttonAndContent.content.css("display", "none");
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
		button: $("#about-menu"),
		content: $("#about"),
	}, {
		button: $("#browse-laws-menu"),
		content: $("#browse-laws"),
	}, {
		button: $("#vote-on-bills-menu"),
		content: $("#vote-on-bills"),
	}, {
		button: $("#submit-bill-menu"),
		content: $("#submit-bill"),
	}]);
});

var app = angular.module("thelawsinwisconsin", []);

app.controller("ctrl", [
	'$scope',
	'chapters',
	function ($scope, chapters) {
		$scope.chapters = chapters;
	}]);

app.directive("browseChapter", function () {
	return {
		scope: {
			chapter: '=',
		},
		templateUrl: "templates/chapter.html",
	};
});
