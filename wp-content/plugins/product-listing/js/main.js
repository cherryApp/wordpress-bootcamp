// Angular modul inicializálása.
var productModule = angular.module( 'product', [] );

productModule.controller( 'productListController',
	[
		'$scope',
		'$http',
		function(
			$scope,
			$http
		) {

			// Termékek lekérése.
			$scope.url = window.ajaxOptions.ajaxurl+'?action=crud_action';
			$http.get( $scope.url )
				.then( function( serverResponse ) {
					$scope.products = serverResponse.data.productData;
					$scope.translates = serverResponse.data.translates;
				}, function( error ) {
					console.error( error );
				});

			// Termék frissítése.
			$scope.updateProduct = function( product ) {
				$http.post( $scope.url, { 'data': product } )
					.then( function( serverResponse ) {
						console.log( 'serverResponse', serverResponse );
					}, function( error ) {
						console.error( 'Error in product update: ', error );
					});
			};

		}
	]
);