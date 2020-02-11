// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 4 === 0) {
    console.log('あなたは優しい性格です')
} else if(day % 4 === 1) {
    console.log('あなたは好奇心旺盛な性格です')
} else if(day % 4 === 2) {
    console.log('dddd')
} else {
    console.log('あなたは怒りっぽい性格です')
}