'use strict';
const memo = new Map()
memo,set(0,0)
memo.set(1,1)
function fib(n) {
    if(memo.has(n) === true){
        return memo.get(n)
    }
    const value = fib(n - 1)
    memo.set(n, value)
}
const length = 40
for (let i = 0; i <= length; i++){
    console.log(fib(i))
}