window.quanAoCtrl = function ($scope, $rootScope, $routeParams) {
  $rootScope.listBlazer = [
    {
      id: "id 1",
      ten: "Blazer 1",
      gia: 40,
      image: "/assets/bla1.jpg",
      soluong: 30,
    },
    {
      id: "2",
      ten: "Blazer  2",
      gia: 60,
      image: "/assets/bla2.jpg",
      soluong: 80,
    },
    {
      id: "id 3",
      ten: "Dress 3",
      gia: 18,
      image: "/assets/vay99.jpg",
      soluong: 80,
    },
    {
      id: " 4",
      ten: "Dress 4",
      gia: 71,
      image: "/assets/vay4.jpg",
      soluong: 70,
    },
    {
      id: "id 5",
      ten: "Blazer 5",
      gia: 94,
      image: "/assets/bla4.jpg",
      soluong: 60,
    },
    {
      id: "id 6",
      ten: "Trouser 6",
      gia: 140,
      image: "/assets/qq3.jpg",
      soluong: 50,
    },
    {
      id: "id 7",
      ten: "Trouser 7",
      gia: 400,
      image: "/assets/qq5.jpg",
      soluong: 40,
    },
    {
      id: "id 8",
      ten: "Dress 8",
      gia: 300,
      image: "/assets/v1.jpg",
      soluong: 30,
    },
  ];
  $rootScope.listQuan = [
    {
      id: "1",
      ten: "Troser7 HSG",
      gia: 200,
      image: "/assets/qq3.jpg",
      soluong: 20,
    },
    {
      id: "2",
      ten: "Troser5 HSG8",
      gia: 80,
      image: "/assets/qq5.jpg",
      soluong: 10,
    },
    {
      id: "3",
      ten: "Troser3 HSG0",
      gia: 70,
      image: "/assets/qq6.jpg",
      soluong: 20,
    },
    {
      id: "4",
      ten: "Troser8 HSG",
      gia: 60,
      image: "/assets/qq10.jpg",
      soluong: 30,
    },
  ];
  $rootScope.listDress = [
    {
      id: "1",
      ten: "Dress 1",
      gia: 50,
      image: "/assets/vay99.jpg",
      soluong: 44,
    },
    {
      id: "2",
      ten: "Dress 2",
      gia: 40,
      image: "/assets/v1.jpg",
      soluong: 30,
    },
    {
      id: "3",
      ten: "Dress 3",
      gia: 30,
      image: "/assets/v2.jpg",
      soluong: 0,
    },
    {
      id: "4",
      ten: "Dress 4",
      gia: 20,
      image: "/assets/vay8.jpg",
      soluong: 20,
    },
    {
      id: "5",
      ten: "Dress 5",
      gia: 100,
      image: "/assets/vahq.jpg",
      soluong: 10,
    },
    {
      id: "6",
      ten: "Dress 6",
      gia: 110,
      image: "/assets/vay4.jpg",
      soluong: 110,
    },
    {
      id: "7",
      ten: "Dress 7",
      gia: 180,
      image: "/assets/vay2.jpg",
      soluong: 10,
    },
    {
      id: "8",
      ten: "Dress 8",
      gia: 140,
      image: "/assets/vay9.jpg",
      soluong: 10,
    },
  ];
  $rootScope.idBLa = $routeParams.id;
  for (let i = 0; i < $scope.listBlazer.length; i++) {
    if ($scope.listBlazer[i].id == $scope.idBLa) {
      ($scope.idBL = $scope.listBlazer[i].id),
        ($scope.nameBL = $scope.listBlazer[i].ten),
        ($scope.imgBL = $scope.listBlazer[i].image),
        ($scope.priceBL = $scope.listBlazer[i].gia);
      $scope.slBL = $scope.listBlazer[i].soluong;
    }
  }
  for (let i = 0; i < $scope.listQuan.length; i++) {
    if ($scope.listQuan[i].id == $scope.idBLa) {
      ($scope.idQ = $scope.listQuan[i].id),
        ($scope.nameQ = $scope.listQuan[i].ten),
        ($scope.imgQ = $scope.listQuan[i].image),
        ($scope.priceQ = $scope.listQuan[i].gia);
      $scope.slQ = $scope.listQuan[i].soluong;
    }
  }
  for (let i = 0; i < $scope.listDress.length; i++) {
    if ($scope.listDress[i].id == $scope.idBLa) {
      ($scope.idD = $scope.listDress[i].id),
        ($scope.nameD = $scope.listDress[i].ten),
        ($scope.imgD = $scope.listDress[i].image),
        ($scope.priceD = $scope.listDress[i].gia);
      $scope.slD = $scope.listDress[i].soluong;
    }
  }
};
