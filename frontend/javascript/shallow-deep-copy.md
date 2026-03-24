<!-- 浅拷贝与深拷贝 -->
# 浅拷贝与深拷贝
在 JavaScript 中，拷贝对象或数组时，存在两种主要的拷贝方式：浅拷贝（Shallow Copy）和深拷贝（Deep Copy）。理解这两者的区别对于正确处理数据结构非常重要。
## 浅拷贝
浅拷贝是指创建一个新的对象或数组，但其中的属性或元素仍然引用原始数据的内存地址。这意味着如果原始数据发生变化，浅拷贝后的数据也会受到影响。浅拷贝可以通过以下方式实现：
```javascript
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original }; // 使用扩展运算符进行浅拷贝
shallowCopy.a = 4;
shallowCopy.b.c = 3;
console.log(original.a); // 1, 因为 a 是基本类型，浅拷贝后是独立的
console.log(original.b.c); // 3, 因为 b 是对象，浅拷贝后仍然引用同一个对象
```
在这个例子中，`shallowCopy` 是 `original` 的浅拷贝。当我们修改 `shallowCopy.a` 时，`original.a` 不受影响，因为它是一个基本类型。但是当我们修改 `shallowCopy.b.c` 时，`original.b.c` 也被修改了，因为它们引用同一个对象。
<!-- 浅拷贝的方法 -->
常见的浅拷贝方法包括：
- 使用扩展运算符（`...`）进行对象或数组的浅拷贝。
- 使用 `Object.assign()` 方法进行对象的浅拷贝。
- 使用 `Array.slice()` 方法进行数组的浅拷贝。
- 使用 `Array.concat()` 方法进行数组的浅拷贝。
- 使用 `Array.map()` 方法进行数组的浅拷贝。
## 深拷贝
深拷贝是指创建一个新的对象或数组，并且递归地复制所有的属性或元素，使得新对象与原始对象完全独立。深拷贝可以通过以下方式实现：
```javascript       
const original = { a: 1, b: { c: 2 } }; 
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 3;
console.log(original.b.c); // 2
```
在这个例子中，`deepCopy` 是 `original` 的深拷贝。当我们修改 `deepCopy.b.c` 时，`original.b.c` 不受影响，因为它们是完全独立的对象。
## 总结
- 浅拷贝：创建一个新的对象或数组，但其中的属性或元素仍然引用原始数据的内存地址。修改浅拷贝会影响原始数据。
- 深拷贝：创建一个新的对象或数组，并且递归地复制所有的属性或元素，使得新对象与原始对象完全独立。修改深拷贝不会影响原始数据。
理解浅拷贝和深拷贝的区别对于正确处理数据结构和避免潜在的错误非常重要。
