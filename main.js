const module = angular.module("myModule", ["ngRoute"]);
module.controller("myController", function ($scope, $http) {
    $scope.key = "477e8e1241336b1fc81f475cb8ef78a5";
    $http.get(`https://imdb-api.com/API/AdvancedSearch/k_z2ibe766/?genres=action,adventure`).then(res => {
        $scope.action = res.data.results;
    })

})
module.controller("allMoviesController", function ($scope, $routeParams, $http) {
    $scope.key = "477e8e1241336b1fc81f475cb8ef78a5";
    $http.get(`https://imdb-api.com/API/AdvancedSearch/k_z2ibe766/?genres=${$routeParams.genre}`).then(res => {

        $scope.numberofItems = 10;
        $scope.pages = [];
        $scope.length = Math.floor(res.data.results.length / $scope.numberofItems);
        for (let i = 1; i <= $scope.length; i++) {
            $scope.pages.push(i);
        }
        $scope.page = $routeParams.index;
        $scope.start = ($scope.page - 1) * $scope.numberofItems;
        $scope.end = $scope.start + $scope.numberofItems;
        $scope.action = res.data.results.slice($scope.start, $scope.end);
    })

})
// Creating Router
module.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "./movie.html"
    }).when("/allMovie", {
        templateUrl: "./allMovies.html",
        controller: "allMoviesController"
    })
})
let arr = ["A", "B", "C", "D", "E", "F", "G"];
let count = 5;
let index = 1;
let start = (index - 1) * count;
let end = start + count;
console.log(arr.slice(start, end))