window.homeCtrl = function ($scope, $rootScope, $http, $routeParams) {
  $scope.listSeler = [];
  $scope.listNewProduct = [];

  $http.get(quanAoAPI).then(function (response) {
    if (response.statusText == "OK") {
      let listData = response.data;
      $scope.handelListProduct(listData);
      $scope.handleListSeler(listData);
    }
  });

  $scope.handelListProduct = function (listData) {
    let listCopy = [...listData];
    $scope.listNewProduct = listData.filter(function (item, index) {});
    for (let i = 0; i < 4; i++) {
      $scope.listNewProduct.push(listCopy.pop());
    }
  };

  $scope.handleListSeler = function (listData) {
    let listInCreaseProduct = listData.sort(
      (a, b) => a.soluongMua - b.soluongMua
    );
    for (let i = 0; i < 8; i++) {
      $scope.listSeler.push(listInCreaseProduct.pop());
    }
  };

  // details
};
