<!-- 常见数组的方法 -->
# 常见数组的方法
<!-- 不改变原数组 -->
## 不改变原数组
- `concat()`: 用于合并两个或多个数组，返回一个新的数组。
```javascript   
const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4]
```
- `slice()`: 用于提取数组的一部分，返回一个新的数组。
```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 4);
console.log(newArr); // [2, 3, 4]
```
- `map()`: 用于对数组中的每个元素进行操作，返回一个新的数组。
```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6, 8, 10]
```
- `filter()`: 用于过滤数组中的元素，返回一个新的数组。
```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(x => x > 2);
console.log(newArr); // [3, 4, 5]
```
- `reduce()`: 用于对数组中的元素进行累积操作，返回一个单一的值。
```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```
<!-- 改变原数组 -->
## 改变原数组
- `push()`: 用于向数组末尾添加一个或多个元素，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
```
- `pop()`: 用于删除数组末尾的一个元素，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); // [1, 2, 3, 4]
```
- `shift()`: 用于删除数组开头的一个元素，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr); // [2, 3, 4, 5]
```
- `unshift()`: 用于向数组开头添加一个或多个元素，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]
```
- `splice()`: 用于删除、替换或添加数组中的元素，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6);
// 参数说明：
// 2: 起始索引，表示从数组的第3个元素开始操作（索引从0开始）
// 1: 删除的元素数量，表示删除1个元素（即数字3）
// 6: 替换的元素，表示将被删除的元素替换为数字6
console.log(arr); // [1, 2, 6, 4, 5]
```
- `sort()`: 用于对数组中的元素进行排序，改变原数组。
```javascript
const arr = [5, 2, 4, 1, 3];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]
```
- `reverse()`: 用于反转数组中的元素顺序，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```
- `fill()`: 用于用一个固定值填充数组中的元素，改变原数组。
```javascript
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);  
// 参数说明：
// 0: 填充的值，表示将数组中的元素替换为数字0
// 1: 起始索引，表示从数组的第2个元素开始填充（索引从0开始）
// 4: 结束索引，表示填充到数组的第5个元素（不包括索引4）
console.log(arr); // [1, 0, 0, 0, 5]
```
