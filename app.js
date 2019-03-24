var app = angular.module("myApp", []);
app.factory('ArrayOfUsers',function()
{
	return  [
	{
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",

	},
	{
		"id": 2,
		"name": "Ervin Howell",
		"username": "Antonette",
		"email": "Shanna@melissa.tv",
	},
	{
		"id": 3,
		"name": "Clementine Bauch",
		"username": "Samantha",
		"email": "Nathan@yesenia.net",

	},
	{
		"id": 4,
		"name": "Patricia Lebsack",
		"username": "Karianne",
		"email": "Julianne.OConner@kory.org",
	},
	{
		"id": 5,
		"name": "Chelsey Dietrich",
		"username": "Kamren",
		"email": "Lucio_Hettinger@annie.ca",
	},
	{
		"id": 6,
		"name": "Mrs. Dennis Schulist",
		"username": "Leopoldo_Corkery",
		"email": "Karley_Dach@jasper.info",
	},
	{
		"id": 7,
		"name": "Kurtis Weissnat",
		"username": "Elwyn.Skiles",
		"email": "Telly.Hoeger@billy.biz",
	},
	{
		"id": 8,
		"name": "Nicholas Runolfsdottir V",
		"username": "Maxime_Nienow",
		"email": "Sherwood@rosamond.me",
	},
	{
		"id": 9,
		"name": "Glenna Reichert",
		"username": "Delphine",
		"email": "Chaim_McDermott@dana.io",
	},
	{
		"id": 10,
		"name": "Clementina DuBuque",
		"username": "Moriah.Stanton",
		"email": "Rey.Padberg@karina.biz",
	}
	] ;
});
app.controller("indexController", function($scope,ArrayOfUsers) {

	$scope.buttonAdd= function(){
		window.location= './add.html';
	}
	$scope.buttonDelete= function(){
		window.location= './delete.html';
	}
	$scope.buttonDisplay= function(){
		window.location= './display.html';
	}
});

app.controller("addController", function($scope,ArrayOfUsers) {
	
	var idCount=9;
	$scope.addUser= function () {
		idCount++;
		name=document.getElementById("name").value;
		var username=document.getElementById("username").value;
		var email=document.getElementById("email").value;
		ArrayOfUsers.push(
			{"id": idCount,
			"name": name,
			"username": username,
			"email":email,
		});
		$scope.ArrayOfUsers=ArrayOfUsers;
	}
});

app.controller("deleteController", function($scope,ArrayOfUsers) {
	
	$scope.deleteUser= function () {
		var username=document.getElementById("deleteUsername").value;
		ArrayOfUsers.forEach(findUser);
		function findUser(item, index, arr) {
			if(item.username==username)
				ArrayOfUsers.splice(index,1);
		}
		$scope.ArrayOfUsers=ArrayOfUsers;
	}
});

app.controller("displayController", function($scope, ArrayOfUsers) {
    $scope.ArrayOfUsers=ArrayOfUsers;//display
    $scope.findId=function(){
    	var aux=0;
    	var id1= document.getElementById("id2").value;
    	ArrayOfUsers.forEach(findUser);
    	function findUser(item, index, arr) {
    		if(item.id==id1)
    			aux=1;
    	}

    	if(aux==1){
    		alert("correct");
    		$scope.correctId=$scope.correctId=true;
    	}
    	else {
    		alert("id invalid");
    		$scope.correctId=$scope.correctId=false;
    	}
	}
	$scope.editUser=function(){
	var id1= document.getElementById("id2").value;
	var name=document.getElementById("name").value;
	var username=document.getElementById("username").value;
	var email=document.getElementById("email").value;
	ArrayOfUsers.forEach(findUser);
		function findUser(item, index, arr) {
			if(item.id==id1)
			{
			item.name=name;
			item.username=username;
			item.email=email;
			}
		}
	}
});