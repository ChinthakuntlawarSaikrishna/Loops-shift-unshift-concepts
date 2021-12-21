//for loop
for(let i=0;i<5;i++) {
    console.log(i)
}
// To print 10 fib numbers

let a=0,b=1
console.log(a,b)
for(let i=0;i<10;i++) {
    let c=a+b;
    a=b;
    b=c;
    console.log(c)

}


//to print multiple of 2 numbers

for(let i=0;i<=10;i++) {
    console.log(2*i)
}

//with while
let i=0;
while(i<10){
    i++;
    console.log(2*i)
}

//to print type of element

let x=['1','2',3,4,5,True]
for(let i=0;i<x.length;i++){
    console.log(typeof x[i])
}

//to push the elements
/*x.push(5) */
for(let i=0; i<100; i++) {
    x.push(i) }
 200

 //to double the elements

 let x=[1,2,3,4,6]
 for(let i=0;i<x.length;i++) {
     x[i]=2*x[i]
 }

//sum of all the elements in the array //


let a= [1,2,3,4,5,6,]
let sum=0;
for(let i=0;i<a.length;i++) {
    sum+=a[i];
    console.log(sum)
}


let b=[1,2,3,4,5];
let difference=0;
for(let i=0;i<b.length;i++){
difference-=b[i]}
console.log(difference)

Ternary condition: (sum%==2)?console.log('even'):console.log('odd')

//find the sum of all the elements of array and check whether the number is "even" or "odd"?

let a=[1,2,3,4,5]
let sum=0;
for(let i=0;i<a.length;i++){
    sum+=a.[i]}
    console.log(sum)
    if (sum%==0) {
    console.log("even");
    else
    console.log("odd")}

    //push and unshift is used to add the elements
    //push is used to add the element at the end (x.push)
    //unshift is used to add the element at the begining (x.unshift)
    //pop is used to remove the last element from the array (x.pop).
    //shift is used to remove the first element from the array (x.shift)
    //reverse is used to reverse the array as viceversa (x.reverse)
    //join is used to mix in between words (x.join)
    //concate is used to mix 2 arrays 

    //join

    let a=[4, 3, 2, 1, 0] 
    let str= " "
    for(let i=0;i<a.length;i++) {
        str=str+a[i]
    }






























