angular.module("myApp", []); // you need to include two parameters when declaring a new module. The array can include other modules that you want to inculde. 

// they are the upper management of the application
// this is where al the routing of business loginc should be taking place
// they are a bridge between your data and your view

// angular is built around dependency injection.
// if you want to access data, you need to inject them in 
// in this example, its $scope. We will have access to this in the view.

angular.module("myApp").controller("pancakeCtrl", function($scope) {
    // scope behaves like a regular object
    $scope.name = "pancakeCtrl";
    $scope.pancakes = [
        {background:'red', height:'20px', width:'100px'},
        {background:'orange', height:'20px', width:'900px'},
        {background:'yellow', height:'20px', width:'400px'},
        {background:'green', height:'20px', width:'300px'},
        {background:'blue', height:'20px', width:'600px'},
        {background:'purple', height:'20px', width:'800px'},
        {background:'grey', height:'20px', width:'200px'},
        {background:'white', height:'20px', width:'400px'}
    ]
    $scope.addPancake = function() {
        $scope.pancakes.push($scope.newPancake);
        $scope.newPancake={};
    }
});
