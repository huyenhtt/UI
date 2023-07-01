window.hienCategory = function ($scope, $http) {
  $scope.listCategories = [];
  $http.get(categoryAPI).then(function (response) {
    console.log(response);
    if (response.statusText == "OK") {
      $scope.listCategories = response.data;
    }
  });
  $scope.removeCategories = function (event, index) {
    event.preventDefault();
    let category7 = $scope.listCategories[index];
    let api = categoryAPI + "/" + category7.id;
    $http.delete(api).then(function (response) {
      $scope.listCategories.splice(index, 1);
      alert("xoá thành công");
    });
  };
  $scope.categoryF = {
    id: "",
    ten: "",
    soluong: 0,
  };
  $scope.vitriUpdate = -1;
  $scope.detailCategory = function (event, index) {
    event.preventDefault();
    let category = $scope.listCategories[index];
    $scope.categoryF.id = category.id;
    $scope.categoryF.ten = category.ten;
    $scope.categoryF.soluong = category.soluong;
    $scope.vitriUpdate = index;
  };
  $scope.addCategory = function (event) {
    event.preventDefault();
    if (
      $scope.categoryF.soluong == 0 ||
      $scope.categoryF.soluong == "" ||
      $scope.categoryF.ten == ""
    ) {
      alert("vui lòng nhập đầy đủ các trường!");
    } else if ($scope.categoryF.soluong < 0) {
      alert("vui lòng nhập lại số lượng");
    } else {
    $http.post(categoryAPI, $scope.categoryF).then(function (response) {
      $scope.listCategories.push(response.data);
      alert("thêm thành công");
    });
    }
  };
  $scope.updateCategories = function (event) {
    event.preventDefault();
    if ($scope.vitriUpdate == -1) {
      alert("chọn id để cập nhật");
    } else {
      let category3 = $scope.listCategories[$scope.vitriUpdate];
      let api = categoryAPI + "/" + category3.id;
      $http.put(api, $scope.categoryF).then(function (response) {
        $scope.listCategories[$scope.vitriUpdate] = response.data;
      });
      alert("cập nhật thành công");
    }
  };
};
