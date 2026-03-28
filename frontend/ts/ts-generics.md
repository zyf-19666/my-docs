<!--  -->
# TypeScript 泛型
TypeScript中的泛型（Generics）是一种强大的工具，可以让你在编写代码时保持类型的灵活性，同时又能确保类型安全。泛型允许你定义一个函数、接口或类时，不指定具体的类型，而是在使用时再指定。
## 泛型函数
```typescript
function identity<T>(arg: T): T {
    return arg;
}
```
在这个例子中，`identity`函数使用了一个类型参数`T`，它可以是任何类型。当你调用这个函数时，可以指定具体的类型：
```typescript
let output = identity<string>("myString");
```
或者让TypeScript自动推断类型：
```typescript
let output = identity(42); // TypeScript会推断T为number
```
## 泛型接口
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}
```
这个接口定义了一个泛型函数类型。你可以使用它来创建一个具体的函数：
```typescript
const myIdentity: GenericIdentityFn<number> = (arg) => arg;
```
## 泛型类
```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
```
这个类定义了一个泛型类`GenericNumber`，它有一个类型参数`T`。你可以创建一个具体的实例：
```typescript
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```
## 泛型约束
有时候你可能希望限制泛型参数必须满足某些条件。你可以使用泛型约束来实现这一点：
```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}
```在这个例子中，`logLength`函数要求泛型参数`T`必须有一个`length`属性。你可以传入任何满足这个条件的类型：
```typescript
logLength("Hello, world!"); // 输出: 13
logLength([1, 2, 3]); // 输出: 3
```
## 泛型可以有多个类型参数
```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };// 这里使用了对象展开运算符来合并两个对象
}
```在这个例子中，`merge`函数有两个类型参数`T`和`U`，它接受两个对象并返回一个新的对象，这个新对象同时具有`T`和`U`的属性。
```typescript
const mergedObj = merge({ name: "Alice" }, { age: 30 });
console.log(mergedObj.name); // 输出: Alice
console.log(mergedObj.age); // 输出: 30
```
## 总结
泛型是TypeScript中非常重要的特性，它使得代码更加灵活和可重用。通过使用泛型，你可以在保持类型安全的同时，编写出更通用的代码。