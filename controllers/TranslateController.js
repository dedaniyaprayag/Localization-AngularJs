/*-------------------------------------------------------------------------------
 * TranslateController.js
 * 
 * Description: The factory service will return strings from json file as per language selected.
 *
 *------------------------------------------------------------------------------*/

app.controller("TranslateController",['$scope','$translate',function($scope,$translate){
	var self = this;

	self.changeLanguage = function(lang) {
		$translate.use(lang);
	};
	
	self.cancel = function(){
		self.name = '';
		self.password = '';
		self.email = '';
		$scope.frmValidation.$setPristine();
	}
}]);