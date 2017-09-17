/*-------------------------------------------------------------------------------
 * LanguageLoader.js
 * 
 * Description: The factory service will return strings from json file as per language selected.
 *
 *------------------------------------------------------------------------------*/
app.factory('LanguageFactory',function($http,$q){
	return function(options){
		var defered = $q.defer();
		$http({
			method : 'Get',
			url : 'locale/locale-'+ options.key +'.json'
		}).then(function(data) {
			defered.resolve(data.data);
		},function(data){
			defered.reject(options.key);
		});
		return defered.promise;
	}
});