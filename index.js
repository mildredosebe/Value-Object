 function Employees (name,position,salary){

 
    this.name = name;
    this.position = position;
    this.salary = brand;

 }

  const employees= new Employee[
      {'name':'Tom','position':'developer','salary':100000},
      { 'name':'Milly','position':'chef','salary':30000 },
      { 'name':'Julie','position':'teacher','salary':50000 },
      {  'name':'Ken','position':'developer','salary':500000},
      {  'name':'Julie','position':'teacher','salary':500000 } 

  ]
  


  


  employees.forEach(employee=>{

  if (employee.position === 'developer'){
    employee.salary = employee*1.10
  }
}
)

  employees.forEach(employee=>{
      console.log(`name: ${employee.name}, position :${employee.position}, salary:${employee.salary}` );
      
  })
 
  function Product(name,price,inStock){
   
       this.name = name;
       this.price = price;
       this.inStock
     }
       const products  =[
        {'name':'stationeries', 'price':500,"inStock":'false'},
        {'name':'fridge', 'price':50000,"inStock":'true'},
        {'name':'nets', 'price':2500,"inStock":'true'},
        {'name':'laptop', 'price':20500,"inStock":'false'},

       ]
     
          products.filter (products = products.inStock)

        console.log(products);
        



    
      