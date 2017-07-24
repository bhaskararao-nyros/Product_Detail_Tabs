# Angular 1.x Slider and Product tabs along with Searching and Sorting

Created Slider and Tabs that displays product information
Search product by it's brand type and price range
* ng-repeat
* ng-model
* ng-hide
* ng-show directories were used
filter is used to search the required product
Sort product by it's brand and price 
orderBy is used to sort the products
# Functionality
This function is used to search through out the array

		angular.forEach($scope.allBrands,function(value,index)
		{
		    if(value.brand == b)
		    {
		    	if(value.price >= mins && value.price <= maxs)
		    	{
		    		obj = {'brand':value.brand, 'price':value.price ,'features':value.features,'image':value.image};
					finalArr.push(obj);
		    	}
		    }
		});
# Version 
Angular 1.x
# License
This app is built under MIT License











