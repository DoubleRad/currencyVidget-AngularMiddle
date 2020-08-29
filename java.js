const mainApp = angular.module( "mainApp" , [ ] );
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';


//спросить как получить event target 

mainApp.controller( "mainController" , ($scope)=>{
    $scope.switch = function(event){
        document.getElementsByClassName("vidgBtnBtn")[0].classList.toggle("active");
    }
})

mainApp.directive( "dir1" , function(){
    return {
        restrict: "ACEM",
        template: "<b>Directive 1 </b>",
        replace: true
        
    }
});

mainApp.directive( "dir2" , function(){
    return {
        restrict: "E",
        templateUrl: "tpl2.html",
        controller: function( $scope , $http ){
            $http.get( url )
            .then( response =>{
                $scope.strings = response.data;
            } )
        }
        
    }
});

mainApp.directive( "dirvdg" , function(){
    return{
        restrict: "E",
        templateUrl: "vdgTpl.html" ,
        controller: function( $scope , $http){
            $http.get( url ).then( response=>{
                $scope.vidgRates = response.data;
            } )
        },
    }
    
});


