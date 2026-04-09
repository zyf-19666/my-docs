# 解构赋值
解构赋值是ES6引入的一种新语法，它可以方便地从数组或对象中提取值，并将其赋值给变量。

:::tip
解构赋值的核心思想是模式匹配，左边的模式与右边的数据结构进行匹配，从而提取出需要的值。
:::


## 数组的解构赋值
1. 基础用法（一一对应）
```javascript
// 数组
let arr = [10, 20, 30];
// 解构
let [a, b, c] = arr;
console.log(a, b, c); // 10 20 30
```
2. 跳过元素(逗号占位，跳过不需要的值)
```javascript{2}
let arr = [10, 20, 30];
let [a, , c] = arr;
console.log(a, c); // 10 30
```
3. 剩余元素(使用...运算符收集剩余元素)
剩余必须放最后
```javascript
let arr = [10, 20, 30, 40];
let [a, ...rest] = arr;
console.log(a); // 10
console.log(rest); // [20, 30, 40]
```
## 对象的解构赋值(最常用)
1. 基础用法(**属性名必须一致**，顺序无关)
```javascript
let obj = { name: "张三", age: 18 };
let { name, age } = obj;
console.log(name, age); // 张三 18
```
2. 解构起别名(使用:指定新的变量名)
```javascript
let obj = { name: "李四", age: 20 };
let { name: username, age: userAge } = obj;
// console.log(name) //报错
console.log(username, userAge); //李四 20
```
3. 设置默认值(属性不存在时生效)
```javascript
let obj = { name: "王五" };
let { name, age = 25 } = obj;
console.log(name, age); // 王五 25
```
4. 解构嵌套对象
```javascript
let info = {
  id: 1,
  user: {
    nickname: "前端",
    email: "123@qq.com"
  }
};
let { user: { nickname, email } } = info;
console.log(nickname, email); // 前端 123@qq.com
```
5. 已有变量解构（易错）
```javascript
let name,age;
// 错误 {name,age} = {name:"aa",age:12}
({name,age} = {name:"aa",age:12})
console.log(name,age)// aa 12
```

## 结论
1. 数组解构：按索引顺序匹配；
2. 对象解构：按属性名匹配，顺序无关；
3. 设置默认值，只有值为 undefined 才走默认；
4. : 是别名，修改接收变量名；
5. ... 剩余元素，只能写在最后一位；
6. 已声明变量再解构，外面包 ( )；
7. 解构不会修改原数组、原对象。