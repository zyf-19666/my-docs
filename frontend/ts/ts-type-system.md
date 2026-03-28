# TypeScript类型系统
TypeScript的类型系统是其核心特性之一，它提供了静态类型检查和类型推断，使得开发者能够在编写代码时捕获错误并提高代码的可维护性。以下是TypeScript类型系统的一些关键概念：

## 基本类型
#### JavaScript中的基本类型:
- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`
- `object`:其中`object`类型表示非原始类型的值，例如数组、函数和对象字面量。  
#### TypeScript在这些基本类型的基础上还提供了更多的类型，例如：
- `any`:表示任意类型，使用`any`类型的变量可以赋值为任何类型的值，但使用`any`会失去类型检查的好处。
- `unknown`:表示未知类型，使用`unknown`类型的变量必须进行类型检查后才能使用。
- `void`:表示没有返回值的函数的返回类型。
- `never`:表示永远不会发生的类型，例如抛出异常或无限循环的函数。
- `enum`:表示枚举类型，可以定义一组命名的常数。
- `tuple`:表示一个已知元素数量和类型的数组。
#### 自定义类型
- `type`
- `interface`
## 类型注解
你可以通过类型注解来显式指定变量、函数参数和返回值的类型。例如：
```typescript
let age: number = 30;
function greet(name: string): string {
    // 这里指定了函数参数name的类型为string，返回值的类型也为string
    return `Hello, ${name}!`;
}
```

## 类型推断
TypeScript具有强大的类型推断能力，它可以根据变量的初始值或函数的返回值自动推断类型。例如：
```typescript
let age = 30; // TypeScript会推断age为number类型
function greet(name) {
    return `Hello, ${name}!`;
}
```

## 复杂类型
TypeScript还支持多种复杂类型，包括：
- **数组**：可以使用`Array<type>`或`type[]`来表示数组类型。
- **元组**：可以使用`[type1, type2, ...]`来表示元组类型。
- **枚举**：可以使用`enum`关键字来定义枚举类型。
- **交叉类型**：可以使用`&`运算符来表示交叉类型。
- **联合类型**：可以使用`|`运算符来表示联合类型。


## 总结
TypeScript的类型系统提供了强大的类型检查和类型推断能力，使得开发者能够编写更安全、更可维护的代码。通过使用基本类型、类型注解、类型推断、复杂类型、类型别名和接口等特性，开发者可以更好地管理代码中的数据结构和类型关系。