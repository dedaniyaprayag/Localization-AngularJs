var app = angular.module('TranslateApp',["pascalprecht.translate"]);

app.config(['$translateProvider',function($translateProvider){
	$translateProvider.useLoader('LanguageFactory',{});
	$translateProvider.preferredLanguage('en');
}]);