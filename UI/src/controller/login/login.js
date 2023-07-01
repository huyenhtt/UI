var myApp = angular.module("myApp", ["nglocalStorage"]);
var storage = localStorage.getItem;
myApp.controller("loginU", function ($scope, $http, storage) {
  $http.get(accountAPI).then(function (response) {
    console.log(response);

    if (response.statusText == "OK") {
      $scope.listAcc = response.data;
      console.log();
      $scope.login = function () {
        console.log("ghbvn");
        for (let i = 0; i < $scope.listAcc.length; i++) {
          // if (
          //   $scope.listAcc[i].username == $scope.username &&
          //   $scope.listAcc[i].password == $scope.password &&
          //   $scope.listAcc[i].role == "guest"
          // ) {
          //   window.location.href = "/src/index.html";

          //   alert("login success");

          //   break;
          // }
          if (
            $scope.listAcc[i].username == $scope.username &&
            $scope.listAcc[i].password == $scope.password &&
            $scope.listAcc[i].role == "admin"
          ) {
            // $cookies.put("user", $scope.listAcc[i]);
            storage("users", $scope.listAcc[i]);
            alert("login success");
            window.location.href = "/src/index.html";

            break;
          } else {
            alert("login failure. Go with signup");
            window.location.href = "/src/pages/dang-ky.html";
            break;
          }
        }
      };
    }
  });
});
