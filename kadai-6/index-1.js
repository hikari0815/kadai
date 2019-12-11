const obj1 = "abc" 
2 const obj2 = 123 
3 const obj3 = false 
4 const obj4 = { a: 123 } 
5 const obj5 = { func: () => console.log('Hi!') } 
6 const obj6 = { property: undefined } 
7 const obj7 = {a: "aaa", b: { c: "ccc", d: undefined } } 
8 
 
9 console.log(JSON.stringify(obj1)) 
10 console.log(JSON.stringify(obj2)) 
11 console.log(JSON.stringify(obj5)) 
12 console.log(JSON.stringify(obj7)) 
