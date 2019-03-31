var myApp = angular.module('myApp', []);

myApp.controller('myControler', function($scope) {
  $scope.name = "Pera";
  $scope.obj = {
    name: "Pera",
    age: 99
  }
  $scope.niz = [76, 'ja sam string' , 2, 8]
  $scope.persons = [
    {
      name: "Mika",
      age: 19,
      voli: "fudbal"
    },
    {
      name: "Zika",
      age: 76,
      voli: "pecanje"
    },
    {
      name: "Djole",
      age: 6,
      voli: "mamu i tatu"
    }
  ]

  $scope.isTrue = true;
});

myApp.controller('nekiTestKontroler', function($scope) {
  $scope.gradovi = [
    {
      name: "Beograd",
      contry: "Serbia",
      club: "Partizan"
    },
    {
      name: "London",
      contry: "Englang",
      club: "Arsenal"
    },
    {
      name: "Moscow",
      contry: "Russia",
      club: "CSKA"
    },
    {
      name: "Vojka",
      contry: "Srbija",
      club: "Sremac"
    }
  ]
  $scope.izaberiDrzavu, $scope.izaberiGrad = false;
});
