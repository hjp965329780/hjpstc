// 1-m中随机取n个数
function getRandomNumbers(m, n) {
    // 创建一个包含1到m的数组
    const numbers = Array.from({ length: m }, (_, i) => i + 1);
    
    // 打乱数组顺序
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    // 取前n个数
    return numbers.slice(0, n);
}