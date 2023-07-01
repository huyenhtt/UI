let isObjCategory = { isBlazer: false, isDress: false, isTrouser: false };
let { isBlazer, isDress, isTrouser } = isObjCategory;

window.hienThiQuanAo = function ($scope, $rootScope, $http, $routeParams) {
  $scope.listBlazer = [];
  $scope.count = 0;

  $scope.handleCategory = function (cate) {
    if (cate == "blazers") {
      isBlazer = true;
      isDress = false;
      isTrouser = false;
    }
    if (cate == "dress") {
      isBlazer = false;
      isDress = true;
      isTrouser = false;
    }
    if (cate == "trouser") {
      isBlazer = false;
      isDress = false;
      isTrouser = true;
    }
  };
  $scope.filterCategory = function (category, listData) {
    $scope.listBlazer = listData.filter((item) => item.theloai === category);
  };
  $http.get(quanAoAPI).then(function (response) {
    console.log(response);
    if (response.statusText == "OK") {
      let listData = response.data;
      if (isBlazer) {
        $scope.filterCategory("blazers", listData);
      }
      if (isDress) {
        $scope.filterCategory("dress", listData);
      }
      if (isTrouser) {
        $scope.filterCategory("trouser", listData);
      }

      if (!isBlazer && !isDress && !isTrouser) {
        $scope.listBlazer = response.data;
      }
    }
  });
  //

  $scope.handleBuy = function (event, index) {
    event.preventDefault();
    let { id, soluongMua } = $scope.listBlazer[index];
    let api = quanAoAPI + "/" + id;
    let updateSLMua = soluongMua + 1;
    let listBuy = { ...$scope.listBlazer[index], soluongMua: updateSLMua };
    $http.put(api, listBuy).then(function (response) {});
    $http.post(api, listBuy).then(function (response) {});
  };

  //
  $scope.themSPGH = function () {
    $scope.count++;
  };
  // details
  $scope.blazer = {
    id: "",
    ten: "",
    gia: "",
    image: "",
    soluong: 0,
    theloai: "",
    soluongMua: "",
  };
  $scope.vitriHT = -1;
  $scope.detailsBla = function (event, index) {
    event.preventDefault();
    let bla = $scope.listBlazer[index];
    ($scope.blazer.id = bla.id), ($scope.blazer.ten = bla.ten);
    ($scope.blazer.gia = bla.gia), ($scope.blazer.image = bla.image);
    ($scope.blazer.soluong = bla.soluong), ($scope.vitriHT = index);
    $scope.blazer.theloai = bla.theloai;
  };
  // trng sp
  $scope.chooseBla = function (event) {
    event.preventDefault();
    $http.get(quanAoAPI).then(function (response) {
      console.log(response);
      if (response.statusText == "OK") {
        $scope.listBlazer = response.data;
      }
    });
  };
  // add sp
  $scope.addSP = function (event) {
    event.preventDefault();
    if (
      $scope.blazer.ten == 0 ||
      $scope.blazer.gia == "" ||
      $scope.blazer.soluong == "" ||
      $scope.blazer.theloai == ""
    ) {
      alert("vui lòng nhập đầy đủ các trường!");
    }
    if ($scope.blazer.soluong < 0 || $scope.blazer.gia < 0) {
      alert("vui lòng nhập lại số lượng");
    }
    $scope.handleImportImages($scope.blazer);
  };
  $scope.handleImportImages = function (quanAo) {
    var files = document.getElementById("myfile").files[0].name;

    $scope.listQuanAo = { ...quanAo, image: files, soluongMua: 0 };

    $http.post(quanAoAPI, $scope.listQuanAo).then(function (response) {
      $scope.listQuanAo.push(response.data);
      alert("thêm thành công !");
    });
  };
  $scope.updateSP = function (event) {
    event.preventDefault();
    if ($scope.vitriHT == -1) {
      alert("Chọn id");
    } else {
      let blaz = $scope.listBlazer[vitriHT];
      let api = quanAoAPI + "/" + blaz.id;
      $http.put(api, $scope.blazer).then(function (response) {
        $scope.listBlazer[$scope.vitriHT] = response.data;
      });
      alert("cập nhật thành công!");
    }
  };
  $scope.deleteSP = function (event, index) {
    event.preventDefault();
    let blas = $scope.listBlazer[index];
    let api = quanAoAPI + "/" + blas.id;
    $http.delete(api).then(function (response) {
      $scope.listBlazer.splice(index, 1);
      alert("Xoá thành công");
    });
  };
  //
  $scope.handleImport = function (event) {
    var file = document.getElementById("myFile");

    // const files = event.target.files;
    if (file) {
      var Reader = new FileReader();
      Reader.readAsText(file, "UTF-8");
      Reader.onload = function (event) {
        $scope.filemane = document.getElementById("myFile").file[0].name;
        $scope.form_product.images = $scope.filename;
      };
      Reader.onerror = function (evt) {};
      $scope.filecontent = "error";
    }
  };
  // trang details sản phẩm
  $scope.idSP = $routeParams.id;
  $http.get(quanAoAPI).then(function (response) {
    for (let i = 0; i < $scope.listBlazer.length; i++) {
      if ($scope.idSP == $scope.listBlazer[i].id) {
        $scope.blazer.ten = $scope.listBlazer[i].ten;
        $scope.blazer.gia = $scope.listBlazer[i].gia;
        $scope.blazer.image = $scope.listBlazer[i].image;
        $scope.blazer.soluong = $scope.listBlazer[i].soluong;
        $scope.blazer.theloai = $scope.listBlazer[i].theloai;
      }
    }
  });
  $scope.listCard = [];
  $scope.add_cart = function (product) {
    if (product) {
      $scope.listCard.push({
        id: product.id,
        ten: product.ten,
        gia: product.gia,
        theloai: product.theloai,
        image: product.image,
        soluong: product.soluong,
      });
    }
  };
  $scope.total = 0;
  $scope.setTotal = function (cart) {
    $scope.total += cart.gia;
  };
  $scope.removeCart = function () {
    $scope.listCart.splice($scope.listCart.indexOf(cart), 1);
    $scope.total += cart.gia;
  };
};
