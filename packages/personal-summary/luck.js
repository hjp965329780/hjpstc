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

/**
 * 辅助函数：从 [min, max] 区间内随机取 n 个不重复的整数
 * @param {number} min - 区间最小值（包含）
 * @param {number} max - 区间最大值（包含）
 * @param {number} count - 要取的数字个数
 * @returns {number[]} 包含 n 个不重复随机数的数组
 */
function getRandomUniqueNumbers(min, max, count) {
  // 参数校验
  if (!Number.isInteger(min) || !Number.isInteger(max) || !Number.isInteger(count)) {
    throw new Error('参数错误：min、max、count 必须为整数');
  }
  if (min > max) {
    [min, max] = [max, min]; // 交换 min 和 max，避免区间颠倒
  }
  const totalNums = max - min + 1;
  if (count <= 0 || count > totalNums) {
    throw new Error(`参数错误：count 必须大于 0 且小于等于区间内数字总数（${totalNums}）`);
  }

  // 生成 [min, max] 的有序数组
  const numberArr = Array.from({ length: totalNums }, (_, index) => min + index);

  // Fisher-Yates 洗牌算法打乱数组（保证随机性均匀）
  for (let i = numberArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberArr[i], numberArr[j]] = [numberArr[j], numberArr[i]];
  }

  // 截取前 count 个元素，返回不重复的随机数
  return numberArr.slice(0, count);
}

/**
 * 主函数：输入 m（示例 10），返回 [1-5 取 2 个, 6-m 取 3 个] 并排序后的数组
 * @param {number} m - 输入的最大值（示例：10，要求 ≥10）
 * @returns {number[]} 按从小到大排序的最终数组
 */
function getRandomSplitArray(m = 10) {
  // 参数校验：m 必须是 ≥10 的整数
  if (!Number.isInteger(m) || m < 10) {
    throw new Error('参数错误：m 必须是大于或等于 10 的整数');
  }

  // 区间 1：1-5 取 2 个
  const part1 = getRandomUniqueNumbers(1, 5, 2);
  // 区间 2：6-m 取 3 个
  const part2 = getRandomUniqueNumbers(6, m, 3);

  // 合并数组并从小到大排序
  const result = part1.concat(part2).sort((a, b) => a - b);

  return result;
}
