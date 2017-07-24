var app=angular.module("myApp",[])
app.controller("myCtrl", function($scope)
{
	// $scope.allProducts = true;

						//tabs product image
	$scope.showProduct1 = function()
	{
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("active");
		angular.element(document.querySelector("#product1")).addClass("active");
		angular.element(document.querySelectorAll(".navTabs")).removeClass("redBorder");
		angular.element(document.querySelector("#navTab1")).addClass("redBorder");
	};
	$scope.showProduct2 = function()
	{
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("active");
		angular.element(document.querySelector("#product2")).addClass("active");
		angular.element(document.querySelectorAll(".navTabs")).removeClass("redBorder");
		angular.element(document.querySelector("#navTab2")).addClass("redBorder");
	};
	$scope.showProduct3 = function()
	{
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("active");
		angular.element(document.querySelector("#product3")).addClass("active");
		angular.element(document.querySelectorAll(".navTabs")).removeClass("redBorder");
		angular.element(document.querySelector("#navTab3")).addClass("redBorder");
	};
	$scope.showProduct4 = function()
	{
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("active");
		angular.element(document.querySelector("#product4")).addClass("active");
		angular.element(document.querySelectorAll(".navTabs")).removeClass("redBorder");
		angular.element(document.querySelector("#navTab4")).addClass("redBorder");
	};
	$scope.showProduct5 = function()
	{
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("active");
		angular.element(document.querySelector("#product5")).addClass("active");
		angular.element(document.querySelectorAll(".navTabs")).removeClass("redBorder");
		angular.element(document.querySelector("#navTab5")).addClass("redBorder");
	};
	$scope.showProduct6 = function()
	{
		angular.element(document.querySelectorAll(".tabcontent")).removeClass("active");
		angular.element(document.querySelector("#product6")).addClass("active");
		angular.element(document.querySelectorAll(".navTabs")).removeClass("redBorder");
		angular.element(document.querySelector("#navTab6")).addClass("redBorder");
	};
						//slider functionality
	$scope.slideimage1 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent1")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab1")).addClass("red");
	};
	$scope.slideimage2 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent2")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab2")).addClass("red");
	};
	$scope.slideimage3 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent3")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab3")).addClass("red");
	};
	$scope.slideimage4 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent4")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab4")).addClass("red");
	};
	$scope.slideimage5 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent5")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab5")).addClass("red");
	};
	$scope.slideimage6 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent6")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab6")).addClass("red");
	};
	$scope.slideimage7 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent7")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab7")).addClass("red");
	};
	$scope.slideimage8 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent8")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab8")).addClass("red");
	};
	$scope.slideimage9 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent9")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab9")).addClass("red");
	};
	$scope.slideimage10 = function()
	{
		angular.element(document.querySelectorAll(".slidecontent")).removeClass("active");
		angular.element(document.querySelector("#slidecontent10")).addClass("active");
		angular.element(document.querySelectorAll(".slidetab")).removeClass("red");
		angular.element(document.querySelector("#slidetab10")).addClass("red");
	};
});
					//second controller for search filter
app.controller('searchCtrl', function($scope)
{
$scope.result = true;
$scope.errMessage = true;
$scope.txt = 'All brand types';
$scope.txtmin = '5000';
$scope.txtmax = '10000';
$scope.sortBy = 'price';
$scope.filterBrands = [
{brand:'Apple', price:9235 ,features:'IPhone 3S',image:'./assets/images/mobile4.jpg'},
{brand:'Micromax', price:9536, features:'Micromax Canvas 2',image:'./assets/images/mobile3.jpg'},
{brand:'Lumia', price:8546, features:'Lumia 200 Lite',image:'./assets/images/mobile9.jpg'},
{brand:'Vivo', price:5432, features:'Vivo Ultra',image:'./assets/images/mobile10.jpg'},
{brand:'Oppo', price:5897, features:'Oppo Magic',image:'./assets/images/mobile6.jpg'},
{brand:'Lenovo', price:4567 ,features:'Lenovo Note 5',image:'./assets/images/mobile7.jpg'}];
$scope.getItem = function()
{
	$scope.errMessage = true;
	var b = $scope.txt;
	var mins = $scope.txtmin;
	var maxs = $scope.txtmax;
	var finalArr = [];
	
	if(b != 'All brand types')
	{
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
	}
	else
	{
		angular.forEach($scope.allBrands,function(value,index)
		{
			if(mins == undefined){ mins = Math.min(parseInt($scope.min)); }
			if(maxs == undefined){ maxs = Math.max(parseInt($scope.max)); }
			
	    	if(value.price >= mins && value.price <= maxs)
	    	{
	    		obj = {'brand':value.brand, 'price':value.price ,'features':value.features,'image':value.image};
				finalArr.push(obj);	
	    	}
		});
	}
	$scope.filterBrands = finalArr;
	$scope.result = false;
	$scope.brandname = $scope.txt;
	$scope.mini = $scope.txtmin;
	$scope.maxi = $scope.txtmax;
	$scope.len = finalArr.length;
	if($scope.filterBrands == "")
	{
		$scope.errMessage = false;
		$scope.result = true;
	}
	else
	{
		$scope.errMessage = true;
	}
}
					//clear search functionality
$scope.clearItem = function()
{
	$scope.errMessage = true;
	$scope.txt = 'All brand types';
	$scope.txtmin = '5000';
	$scope.txtmax = '10000';
	$scope.sortBy = 'price';
	$scope.filterBrands = [
	{brand:'Apple', price:9235 ,features:'IPhone 3S',image:'./assets/images/mobile4.jpg'},
	{brand:'Micromax', price:9536, features:'Micromax Canvas 2',image:'./assets/images/mobile3.jpg'},
	{brand:'Lumia', price:8546, features:'Lumia 200 Lite',image:'./assets/images/mobile9.jpg'},
	{brand:'Vivo', price:5432, features:'Vivo Ultra',image:'./assets/images/mobile10.jpg'},
	{brand:'Oppo', price:5897, features:'Oppo Magic',image:'./assets/images/mobile6.jpg'},
	{brand:'Lenovo', price:4567 ,features:'Lenovo Note 5',image:'./assets/images/mobile7.jpg'}];
}
	$scope.brands = ["All brand types","Apple","Samsung","Micromax","Vivo","Oppo","Blackberry","Lenovo",
					 "Moto","Sony","Lumia"];
	$scope.min = [5000,10000,15000,20000];
	$scope.max = [10000,15000,20000,25000];
	$scope.sorting = ["price","brand"];
		//array of all products
$scope.allBrands = [
{brand:'Apple', price:19235 ,features:'IPhone 3S',image:'./assets/images/mobile4.jpg'},
{brand:'Micromax', price:9536, features:'Micromax Canvas 2',image:'./assets/images/mobile3.jpg'},
{brand:'Lumia', price:8546, features:'Lumia 200 Lite',image:'./assets/images/mobile9.jpg'},
{brand:'Vivo', price:5432, features:'Vivo Ultra',image:'./assets/images/mobile10.jpg'},
{brand:'Oppo', price:5897, features:'Oppo Magic',image:'./assets/images/mobile6.jpg'},
{brand:'Lenovo', price:4567 ,features:'Lenovo Note 5',image:'./assets/images/mobile7.jpg'},
{brand:'Sony', price:14567, features:'Sony Music',image:'./assets/images/mobile2.jpg'},
{brand:'Samsung', price:7894 ,features:'Samsung S Duos',image:'./assets/images/mobile5.jpg'},
{brand:'Moto', price:3564, features:'Moto 3G Smart',image:'./assets/images/mobile1.jpg'},
{brand:'Blackberry', price:13546, features:'Blackberry Keypad Lite',image:'./assets/images/mobile8.jpg'},
{brand:'Apple', price:18564, features:'IPhone 4S',image:'./assets/images/apple1.jpg'},
{brand:'Apple', price:15432, features:'IPhone 5C',image:'./assets/images/apple2.jpg'},
{brand:'Apple', price:21548, features:'IPhone 5S',image:'./assets/images/apple3.jpg'},
{brand:'Apple', price:22589, features:'IPhone 6S',image:'./assets/images/apple4.jpeg'},
{brand:'Apple', price:23999, features:'IPhone 6',image:'./assets/images/apple5.png'},
{brand:'Samsung', price:7865, features:'Samsung J7',image:'./assets/images/samsung1.jpg'},
{brand:'Samsung', price:11255, features:'Samsung A2',image:'./assets/images/samsung2.png'},
{brand:'Samsung', price:16750, features:'Samsung A5',image:'./assets/images/samsung3.jpeg'},
{brand:'Samsung', price:22500, features:'Samsung Edge',image:'./assets/images/samsung4.jpg'},
{brand:'Samsung', price:17550, features:'Samsung Note',image:'./assets/images/samsung5.jpg'},
{brand:'Micromax', price:6540, features:'Micromax Canvas',image:'./assets/images/micromax1.jpg'},
{brand:'Micromax', price:7899, features:'Micromax Joy',image:'./assets/images/micromax2.jpg'},
{brand:'Micromax', price:8799, features:'Micromax Bolt',image:'./assets/images/micromax3.jpg'},
{brand:'Micromax', price:7999, features:'Micromax Bharat',image:'./assets/images/micromax4.jpg'},
{brand:'Micromax', price:8500, features:'Micromax Vdeo',image:'./assets/images/micromax5.jpg'},
{brand:'Vivo', price:11500, features:'Vivo Plus',image:'./assets/images/vivo1.jpeg'},
{brand:'Vivo', price:7599, features:'Vivo Max',image:'./assets/images/vivo2.jpg'},
{brand:'Vivo', price:7999, features:'Vivo Pro',image:'./assets/images/vivo3.jpg'},
{brand:'Vivo', price:11500, features:'Vivo Lite',image:'./assets/images/vivo4.jpg'},
{brand:'Vivo', price:5999, features:'Vivo Mini',image:'./assets/images/vivo5.jpg'},
{brand:'Oppo', price:16500, features:'Oppo F1',image:'./assets/images/oppo1.jpeg'},
{brand:'Oppo', price:11999, features:'Oppo Plus',image:'./assets/images/oppo2.jpg'},
{brand:'Oppo', price:6999, features:'Oppo Neo',image:'./assets/images/oppo3.jpg'},
{brand:'Oppo', price:13999, features:'Oppo Joy',image:'./assets/images/oppo4.jpg'},
{brand:'Oppo', price:8999, features:'Oppo Lite',image:'./assets/images/oppo5.jpg'},
{brand:'Blackberry', price:22500, features:'Blackberry Passport',image:'./assets/images/blackberry1.jpg'},
{brand:'Blackberry', price:17599, features:'Blackberry Bold',image:'./assets/images/blackberry2.jpg'},
{brand:'Blackberry', price:14599, features:'Blackberry Priv',image:'./assets/images/blackberry3.jpg'},
{brand:'Blackberry', price:18999, features:'Blackberry Curve',image:'./assets/images/blackberry4.jpg'},
{brand:'Blackberry', price:13999, features:'Blackberry Torch',image:'./assets/images/blackberry5.jpg'},
{brand:'Lenovo', price:7599, features:'Lenovo Vibe',image:'./assets/images/lenovo1.jpg'},
{brand:'Lenovo', price:8799, features:'Lenovo Vibe Note',image:'./assets/images/lenovo2.jpeg'},
{brand:'Lenovo', price:6799, features:'Lenovo Yoga',image:'./assets/images/lenovo3.jpg'},
{brand:'Lenovo', price:9999, features:'Lenovo Zulk',image:'./assets/images/lenovo4.jpg'},
{brand:'Lenovo', price:11999, features:'Lenovo Phab',image:'./assets/images/lenovo5.jpg'},
{brand:'Moto', price:7500, features:'Moto 3G',image:'./assets/images/moto1.jpeg'},
{brand:'Moto', price:7999, features:'Moto 4G',image:'./assets/images/moto2.jpeg'},
{brand:'Moto', price:9500, features:'Moto 4G LTE',image:'./assets/images/moto3.jpg'},
{brand:'Moto', price:8500, features:'Moto V5',image:'./assets/images/moto4.jpeg'},
{brand:'Moto', price:9999, features:'Moto 5G',image:'./assets/images/moto5.jpeg'},
{brand:'Sony', price:12549, features:'Sony Aqua',image:'./assets/images/sony1.jpg'},
{brand:'Sony', price:16500, features:'Sony Xperia Z',image:'./assets/images/sony2.jpg'},
{brand:'Sony', price:18500, features:'Sony Xperia X Dual',image:'./assets/images/sony3.jpg'},
{brand:'Sony', price:10000, features:'Sony Premium',image:'./assets/images/sony4.jpg'},
{brand:'Sony', price:12999, features:'Sony Altra',image:'./assets/images/sony5.jpg'},
{brand:'Lumia', price:8459, features:'Lumia 200',image:'./assets/images/lumia1.jpeg'},
{brand:'Lumia', price:7896, features:'Lumia 300',image:'./assets/images/lumia2.jpg'},
{brand:'Lumia', price:6587, features:'Lumia 400',image:'./assets/images/lumia3.jpeg'},
{brand:'Lumia', price:11256, features:'Lumia 500',image:'./assets/images/lumia4.jpeg'},
{brand:'Lumia', price:7999, features:'Lumia 600',image:'./assets/images/lumia5.jpg'}];
});
