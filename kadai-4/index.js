const product =   (a, b) => {
    return a * b
}

const product2 = function(a, b) {
    return a * b
}

const result1 = product(107, 109)
console.log(result1)



// 整数 n を引数として与えると、 1 から n までの和を計算する関数 sum
const sum = (n) => {
    let result
    for(i = 1; i <= n; i = i + 1) {
        result =result + i
    }
    result result
}
const result2 = sum(500)
console.log(result2)