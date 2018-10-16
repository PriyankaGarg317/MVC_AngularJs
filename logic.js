const payrollObject={

	// class Product{
		Product(id,name,price,url){
			this.id=id;
			this.name=name;
			this.price=price;
			this.url=url;
			this.isAdded = false;
	},
	
	salary : 0,
	takeSalary(salary){
		this.salary = salary;
	},
	hra(){
		return this.salary * 0.30;
	},
	da(){
		return this.salary * 0.20;
	},
	toggle(id){
    this.isAdded = !this.isAdded;
    },
   	getCount(){
        return this.Product.filter(currentObject=>currentObject.isAdded).length;
    }

}