var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/trang-chu.html",
      controller: homeCtrl,
    })
    .when("/about", {
      templateUrl: "./pages/gioi-thieu.html",
    })
    .when("/giohang", {
      templateUrl: "./pages/gio-hang.html",
      controller: hienThiQuanAo,
    })
    .when("/lienhe", {
      templateUrl: "./pages/lien-he.html",
    })
    .when("/product", {
      templateUrl: "./pages/products.html",
      controller: hienThiQuanAo,
    })
    .when("/category", {
      templateUrl: "./pages/quan-ly-category.html",
      controller: hienCategory,
    })
    .when("/qlysanpham", {
      templateUrl: "./pages/quan-ly-san-pham.html",
      controller: hienThiQuanAo,
    })
    .when("/mypage", {
      templateUrl: "./pages/trangcuatoi.html",
      controller: hienThiQuanAo,
    })
    .when("/quenmk", {
      templateUrl: "./pages/quen-mk.html",
    })
    .when("/spdamua", {
      templateUrl: "./pages/sp-da-mua.html",
      controller: hienThiQuanAo,
    })
    .when("/sanpham/details/:id", {
      templateUrl: "./pages/details-san-pham.html",
      controller: hienThiQuanAo,
    })
    // .when("/sanpham/details2/:id", {
    //   templateUrl: "./pages/details-san-pham2.html",
    //   controller: hienThiBlazer,
    // })
    // .when("/sanpham/details3/:id", {
    //   templateUrl: "./pages/details-san-pham3.html",
    //   controller: hienThiBlazer,
    // })
    .when("/sukien", {
      templateUrl: "./pages/sukien.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
