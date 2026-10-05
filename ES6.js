// Create a curried function that accepts 3 numbers one by one and prints their sum.
function add(a){
    return function(b){
        return function(c){
           console.log(a+b+c)
        }
    }
}
add(1)(2)(3)

// Create a curried function that accepts name, department, and salary and prints all three values.
function employee(name){
    return function(department){
        return function(salary){
            console.log(`Name: ${name} , Department:- ${department} , Salary:- ${salary}`)
        }
    }
}
employee("Shiva ram")("Software Development")(30000)

// Create a curried function that accepts 3 numbers and prints their multiplication.
function mul(d){
    return function(e){
        return function(f){
           console.log(d*e*f)
        }
    }
}
mul(4)(5)(6)

// Convert a curried function that accepts a, b, and c into an uncurried function.
function add1(a1){
    return function(b1){
        return function(c1){
            console.log(a1+b1+c1)
        }
    }
}
add1(10)(20)(30)

function add2(a2,b2,c2){
    console.log(a2+b2+c2)
}
add2(10,20,30)

// Write both curried and uncurried versions of a function that adds 4 numbers.
function curried(a3){
    return function(b3){
        return function(c3){
            return function(d3){
                console.log("Curried function",a3+b3+c3+d3)
            }
        }
    }
}
curried(10)(20)(30)(15)

function uncurride(a4,b4,c4,d4){
    console.log("Uncurried function",a4+b4+c4+d4)
}
uncurride(10,20,30,15)

// ----------------------------------------------------------------Spread Operator----------------------------------

// Create two arrays of 5 numbers and merge them using the array spread operator.
let arr=[1,2,3,4,5]
let arr1=[6,7,8,9,10]
let res=[...arr,...arr1]
console.log(res)

// Create two arrays containing student names and merge them into one array using spread.
let arr2=["shiva","ram","krishna","thanush","mohan"]
let arr3=["rakesh","manoj","sriman","abhi","anil"]
let res1=[...arr2,...arr3]
console.log(res1)

// Create an array and create another array containing the original values plus 3 new values using spread.
let arr4=[10,20,30]
let arr5=[...arr4,40,50,60]
console.log(arr5)

// Create two objects containing employee details and merge them using the object spread operator.
let obj={
    name1:"ram",
    age:20
}
let obj1={
    city:"Hyderabad",
    designation:"Frontend Developer"
}
let result={
    ...obj,
    ...obj1
}
console.log(result)

// Create an employee object and create a new object by copying it and adding a salary property using spread.
let emp={
    name2:"shiva ram",
    designation:"Frontend Developrer",
    location:"Hyderabad"
}
let obj2={
    ...emp,
    salary:30000
}
console.log(obj2)

// Create two objects with different properties and combine them into one object using spread.
let emp1={
    name3:"Krishna",
    age1:23
}
let emp2={
    location:"Hyderabad",
    salary:30000
}
let res2={
    ...emp1,...emp2
}
console.log(res2)

// Create two arrays and use spread to create one array in reverse order.
let arr6=[1,2,3]
let arr7=[4,5,6]
console.log(...arr7,...arr6)

// --------------------------------------------------------------Rest Operator----------------------------------------------

// Create a function that accepts two fixed values and stores all remaining values using the rest operator.
function rest(x,y,...z){
    console.log(x)
    console.log(y)
    console.log(z)
}
rest(1,2,3,4,5,6)

// Create a function student(name, department, ...marks) and print the name, department, and marks.
function student(name4,department,...marks){
    console.log("Name:- ",name4)
    console.log("Department:- ",department)
    console.log("Marks:- ",marks)
}
student("shivaram","CSE-AIML",75,80,68,94)

// Create a function that accepts two numbers and any number of additional numbers using rest.
function numbers(x1,x2,...x3){
    console.log(x1,x2,x3)
}
numbers(10,20,30,40)

// Create a function that prints the 5th value from the rest parameter.
function num5th(y1,y2,...y3){
    console.log(y1,y2,y3[4])
}
num5th(1,2,1,2,3,4,5,6)

// Create a function that accepts product, price, and remaining values using rest and prints them.
function productDetails(product, price, ...rest) {
    console.log(product,price,", brand:",rest[0],", color:",rest[1]);
}
productDetails("Laptop", 50000, "hp", "Black")

// Create a function that receives 10 numbers and uses rest to store all values after the first two.
function num(z1,z2,...z3){
    console.log(z1)
    console.log(z2)
    console.log(z3)
}
num(1,2,3,4,5,6,7,8,9,10)

// -----------------------------------------------------------------Array Destructuring------------------------------------------

// Create an array of 4 values and extract all four values using array destructuring.
let array=[1,2,3,4]
let [one,two,three,four]=array
console.log(one)
console.log(two)
console.log(three)
console.log(four)

// Create an array of student details and extract the first, second, and third values using destructuring.
let details=["shiva","ram","krishna","chintu"]
let [name5,name6,name7,name8]=details
console.log(name5)
console.log(name6)
console.log(name7)

// Create an array of 5 numbers and extract only the first and fourth values using destructuring.
let array1=[10,20,30,40,50]
let [first,second,third,fourth,fifth]=array1
console.log(first)
console.log(fourth)

// Create a nested array and extract its values using nested destructuring.
let array2=[10,[20,30]]
let [m,[n,o]]=array2
console.log(m,n,o)

// Given a nested array containing numbers inside 3 levels, extract the required values using nested destructuring.
let array3=[1,[2,3],[4],[5,6]]
let [g,[h,i],[j],[k,l]]=array3
console.log(g,h,i,j,k,l)

// ---------------------------------------------------------------------Object Destructuring-----------------------------------

// Create an employee object with name, designation, and salary. Extract all values using object destructuring.
let employees={
    name9:"shiva ramakrishna",
    designation2:"Frontend Developer",
    salary2:30000
}
let {name9,designation2,salary2}=employees
console.log(name9)
console.log(designation2)
console.log(salary2)

// Create a student object with name, department, and cgpa. Extract all values using destructuring.
let std={
    Name:"shiva",
    Department:"AIML",
    cgpa:8.2
}
let {Name,Department,cgpa}=std
console.log(Name,Department,cgpa)

// Create an object with 5 properties and extract only 3 properties using object destructuring.
let obj5prop={
    company:"Stackly",
    location2:"hyderabad",
    designation3:"Frontend Developer",
    workType:"WFO",
    salary3:30000
}
let {company,location2,designation3,workType,salary3}=obj5prop
console.log(company,location2,designation3)

// Create a nested object containing employee and team details. Extract the employee name and team member names using nested destructuring.
let Company={
    Name1:"Ramakrishna",
    Age:23,
    team:{
        member1:"shiva",
        member2:"ram",
        member3:"krishna"
    }
}
let {Name1,team:{member1},team:{member2},team:{member3}}=Company
console.log(Name1)
console.log(member1)
console.log(member2)
console.log(member3)

// Create a nested object containing company → department → employee and extract the employee name using nested destructuring.
let COMPANY={
    company2:"Stackly",
    department4:{
        Department2:"Software Development"
    },
    employee1:{
        empName:"Shiva ramakrishna"
    }
}
let {company2,department4:{Department2},employee1:empName}=COMPANY
console.log(empName)

// ---------------------------------------------------------------------Array Manipulation-----------------------------------------
// Create an array of 5 fruits and add 3 more fruits at the end using push().
let arr8=["apple","banana","mango","kiwi","guava"]
arr8.push("pineapple","orange","grapes")
console.log(arr8)

// Create an array of 5 numbers and remove the last value using pop().
let arr9=[1,2,3,4,5]
arr9.pop()
console.log(arr9)

// Create an array of 5 student names and remove the first student using shift().
let arr10=["shiva","ram","krishna","thanush","mohan"]
arr10.shift()
console.log(arr10)

// Create an array of 4 numbers and add 2 numbers at the beginning using unshift().
let array4=[1,2,3,4]
array4.unshift(10,20)
console.log(array4)

// Create an array [10,20,30,40,50] and replace 30 with 100 using splice().
let array5=[10,20,30,40,50]
array5.splice(2,1,100)
console.log(array5)

// Create an array of 6 values and remove 2 values from the middle using splice().
let array6=[10,20,30,40,50,60]
array6.splice(2,2)
console.log(array6)

// Create an array and add 3 new values in the middle using splice().
let array7=[10,20,30]
array7.splice(2,0,25,35,40)
console.log(array7)

// Create an array and remove 2 values and add 3 new values at the same position using splice().
let array8=[10,20,30,40,50]
array8.splice(2,2,60,70,80)
console.log(array8)

// Create a student list and remove one student from the middle using splice().
let std1=["shiva","ram","krishna","thanush","mohan"]
std1.splice(2,1)
console.log(std1)

// Create a shopping cart array and perform push, pop, shift, and unshift operations on it.
let cart = ["Laptop","Mobile","Headphones","Keyboard","Mouse"]
cart.push("HDMI cabel")
console.log(cart)
cart.pop()
console.log(cart)
cart.shift()
console.log(cart)
cart.unshift("charging cabel")
console.log(cart)

// ------------------------------------------------------------------Array Merge & Extraction Methods---------------------------------------------
// Create two arrays and merge them using concat().
let n1=[1,2,3,4,5]
let n2=[6,7,8,9,10]
let result1=n1.concat(n2)
console.log(result1)

// Create three arrays and merge all three using concat().
let n3=[1,2,3,4,5]
let n4=[6,7,8,9,10]
let n5=[11,12,13,14,15]
let result2=n3.concat(n4).concat(n5)
console.log(result2)

// Create an array of 8 values and extract values from index 2 to index 5 using slice().
let n6=[1,2,3,4,5,6,7,8]
console.log(n6.slice(1,5))

// Create an array of student names and extract the first 3 students using slice().
let n7=["shiva","ram","krishna","thanush","mohan"]
console.log(n7.slice(3))

// Create a nested array with 3 levels and convert it into a single-level array using flat().
let n8=[1,2,[3,[4,5]]]
console.log(n8.flat(Infinity))

// Create a nested array with 4 levels and use flat() to remove the nesting.
let n9=[1,2,[3,[4,5,[6,7]]]]
console.log(n9.flat(Infinity))

// Explain through code the difference between slice() and splice() by performing an operation with both.
let slice="slice()-> it does not change the original array, its just uses the copy of an original array"

let splice="splice()->it will change the original when we modify the array,splice uses the original aarray"

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]
let res3=fruits.slice(1,3)
console.log(fruits)
console.log(res3)

let res4=fruits.splice(1,3)
console.log(res4)
console.log(fruits)

// -----------------------------------------------------Search & Other Array Methods--------------------------------------------------

// Create an array of numbers and check whether 50 exists using includes().
let num1=[10,15,30,40,50,60]
console.log(num1.includes(50))

// Create an array containing duplicate values and find the first occurrence of a value using indexOf().
let num2=[1,2,3,4,1,5,6,7,2,8,1]
console.log(num2.indexOf(1))

// Create an array containing duplicate values and find the last occurrence using lastIndexOf().
let num3=[1,2,3,4,1,5,6,7,2,8,1]
console.log(num3.lastIndexOf(1))

// Create an array of numbers and sort it using sort().
let num4=[6,7,2,8,1,4]
let res5=num4.sort()
console.log(res5)

// Create an array of numbers and reverse its order using reverse().
let num5=[1,2,3,4,5,6]
let res6=num5.reverse()
console.log(num5)