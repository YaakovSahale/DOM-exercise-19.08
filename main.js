

//!..............................1

// function printHello(){
//     document.write("hello there")
// }

// printHello()

//!...............................2

// function printToWindow(){
//     document.write("hello there David")
// }

// printToWindow()

//!...............................3

// function printHelloAndInput(userName){
//     document.write(`hello there ${userName}`)
// }

// var nameInput = prompt("enter your name")

// printHelloAndInput(nameInput)

//!.................................4

// function printFromUser(firstName,lastName,userAge){

//     document.write(`${firstName}, ${lastName}, ${userAge}`)
// }


// var firstNameInput = prompt("enter your first name")
// var lastNameInput = prompt("enter your last name")
// var userAgeInput = prompt("enter your age")

// printFromUser(firstNameInput,lastNameInput,userAgeInput)


//!...................................5

// function printToDiv(userName,userAge){
//     document.getElementById("myDiv").innerHTML = `name: ${userName} , age: ${userAge}`

// }


// printToDiv(inputName,inputAge)

// var inputName = prompt("enter your name")
// var inputAge = prompt("enter your age")


//!...................................6


// function printToDivSepartly(firstName,lastName,userAge){
//     document.getElementById("firstNameDiv").innerText = `first name: ${firstName}`
//     document.getElementById("lastNameDiv").innerText = `last name: ${lastName}`
//     document.getElementById("ageDiv").innerText = `age: ${userAge}`
// }

// var firstNameInput = prompt("enter your first name")
// var lastNameInput = prompt("enter your last name")
// var userAgeInput = prompt("enter your age")

// printToDivSepartly(firstNameInput,lastNameInput,userAgeInput)


//!....................................7


// function printToWindowFromInnerDiv(userName,userAge){
//     document.write(`<div>name: ${userName}, age: ${userAge}</div>`)
// }

// var inputName = prompt("enter your name")
// var inputAge = prompt("enter your age")

// printToWindowFromInnerDiv(inputName,inputAge)


//!....................................8


// function printToWindowFromInnerDiv(firstName,lastName,userAge){
//     document.write(`<div><p>first name: ${firstName}, last name: ${lastName}, age: ${userAge} </p></div>`)
// }

// var firstNameInput = prompt("enter your first name")
// var lastNameInput = prompt("enter your last name")
// var userAgeInput = prompt("enter your age")

// printToWindowFromInnerDiv(firstNameInput,lastNameInput,userAgeInput)


//!....................................9


// function printToWindowFromInnerDiv(firstName,lastName,userAge){
//     document.write(`<p id="myP">first name: ${firstName}, last name: ${lastName}, age: ${userAge} </p>`)
// }

// var firstNameInput = prompt("enter your first name")
// var lastNameInput = prompt("enter your last name")
// var userAgeInput = prompt("enter your age")

// printToWindowFromInnerDiv(firstNameInput,lastNameInput,userAgeInput)


//!...................................10


// function printToWindowFromInnerDiv(firstName,lastName,userAge){
//     document.write(`<div><p id="ourP">${firstName} , ${lastName} , ${userAge} </p></div>`)
// }

// var firstNameInput = prompt("enter your first name")
// var lastNameInput = prompt("enter your last name")
// var userAgeInput = prompt("enter your age")

// printToWindowFromInnerDiv(firstNameInput,lastNameInput,userAgeInput)


//!....................................11.a


// function printInput (firstName){
//     document.write(`<p id="thisPId">${firstName}</p>`)
// }

// var firstNameInput = prompt("enter your first name")

// printInput(firstNameInput)

//!.....................................11.b


// function printAddedInput(lastName){
//     document.getElementById("thisPId").innerHTML += `${lastName}`
// }

// var lastNameInput = prompt("enter your last name")

// printAddedInput(lastNameInput)


//!.......................................12.a


// function printInput(firstName){
//     document.write(`<p id="myP">${firstName} </p>`)
// }

// var firstNameInput = prompt("enter your first name")

// printInput(firstNameInput)


//!.........................................12.b


// function printAddedInput(lastName){
//     var currentDate = new Date()
//     var day = currentDate.getDate()
//     var month = currentDate.getMonth() + 1
//     var year = currentDate.getFullYear()

//     var date = ("<b>" + day + "/" + month + "/" + year + "</b>")

//     document.getElementById("myP").innerHTML += `${lastName}  ${date}`
// }


// var lastNameInput = prompt("enter your last name")

// printAddedInput(lastNameInput)


//!.........................................13

// function crateObjeectByInput(carColor,carCompany,carCapacity){
//     var car = {}
//     car.color = carColor
//     car.Company = carCompany
//     car.capacity = carCapacity

//     // var strCar = JSON.stringify(car,0,5)
//     document.write(`color: ${car.color} ,company: ${car.Company}, capacity: ${car.capacity}`)
// }

// var carColorInput = prompt("enter the car color")
// var carCompanyInput = prompt("enter the car company")
// var carCapacityInput = prompt("enter the car capacity")


// crateObjeectByInput(carColorInput, carCompanyInput, carCapacityInput)



//!..........................................14


// function crateObjeectByInput(carColor,carCompany,carCapacity){
//     var car = {}
//     car.color = carColor
//     car.carCompany = carCompany
//     car.capacity = carCapacity
//     car.ManufactureDate = new Date().getFullYear()

//     var strCar = JSON.stringify(car,0,5)
//     document.write(strCar)
// }

// var carColorInput = prompt("enter the car color")
// var carCompanyInput = prompt("enter the car company")
// var carCapacityInput = prompt("enter the car capacity")


// crateObjeectByInput(carColorInput, carCompanyInput, carCapacityInput)

//!...............................................15

// function crateObjeectByInput(carColor,carCompany,carCapacity){
//     car = {}
//     car.color = carColor
//     car.Company = carCompany
//     car.Capacity = carCapacity

//     var strCar = JSON.stringify(car,0,5)
//     document.getElementById("myDiv").innerHTML = strCar
// }


// var carColorInput = prompt("enter the car color")
// var carCompanyInput = prompt("enter the car company")
// var carCapacityInput = prompt("enter the car capacity")


// crateObjeectByInput(carColorInput, carCompanyInput, carCapacityInput)


//!................................................16

// function crateObjeectByInput(carColor,carCompany,carCapacity){
//     car = {}
//     car.color = carColor
//     car.Company = carCompany
//     car.Capacity = carCapacity
//     car.ManufactureDate = new Date().getFullYear()


// document.write(`<div>${car.color}</div>`)
// document.write(`<div>${car.company}</div>`)
// document.write(`<div>${car.capacity}</div>`)
// document.write(`<div>${car.manufactureDate}</div>`) 

// }


// var carColorInput = prompt("enter the car color")
// var carCompanyInput = prompt("enter the car company")
// var carCapacityInput = prompt("enter the car capacity")


// crateObjeectByInput(carColorInput, carCompanyInput, carCapacityInput)

//!..................................................17

// function crateObjeectByInput(carColor,carCompany,carCapacity){
//     car = {}
//     car.color = carColor
//     car.company = carCompany
//     car.capacity = carCapacity
//     car.manufactureDate = new Date().getFullYear()


//     document.write(`<div id="myDiv1">${car.color}</div>`)
//     document.write(`<div id="myDiv2">${car.company}</div>`)
//     document.write(`<div id="myDiv3">${car.capacity}</div>`)
//     document.write(`<div id="myDiv4">${car.manufactureDate}</div>`) 

// }


// var carColorInput = prompt("enter the car color")
// var carCompanyInput = prompt("enter the car company")
// var carCapacityInput = prompt("enter the car capacity")


// crateObjeectByInput(carColorInput, carCompanyInput, carCapacityInput)







