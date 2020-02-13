// const tab= (process.argv)
let result=0;
for  (let i=2;i<process.argv.length;i++){
 
    result+=Number(process.argv[i])
  
}

console.log(result)
// let result=Number.tab.slice(2).reduce((a,b)=>a+b)
// console.log(result)
