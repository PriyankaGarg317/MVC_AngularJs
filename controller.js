app.controller("myctrl",($scope,salarydetails)=>{
	console.log("controller loaded...",salarydetails);

	$scope.hra=0;
	$scope.da=0;
	$scope.compute=()=>{
		var salary = $scope.salary;
		salarydetails.takeSalary(salary);
		$scope.hra = salarydetails.hra();
		$scope.da = salarydetails.da();
		$scope.className = $scope.hra>2000?'red':'green';
	}
	$scope.doajax=()=>{
		var pr= salarydetails.callServer();
		pr.then(data => $scope.data = data, err=> $scope.error = err);
	}
	$scope.toggle=(id)=>{
		alert("toggle fn call");
		salarydetails.toggle(id);
		return  product.isAdded?"Already in Cart":"Add in Cart";
		$scope.cartcount = salarydetails.getCount();
	}
	
	
});