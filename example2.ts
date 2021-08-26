let a: number = 0;
let b: boolean = false;
let c: string = 'Typing for variables';
let d: any = 1
let e: number[] = [1,2,3];
let f: any[] = [a,b,c,d,e];

console.log(f)

a = "this shows an error";
b = 1;
c = 0;
e = ["1","2","3"];
console.log(f)