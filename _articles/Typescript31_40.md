---
title: Typescript31_40
date: 2023/9/27
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 11. What are abstract classes? When should you use one?
Abstract classes are similar to interfaces in that they specify a contract for the objects, and you cannot instantiate them directly. However, unlike interfaces, an abstract class may provide implementation details for one or more of its members.

An abstract class marks one or more of its members as abstract. Any classes that extend an abstract class have to provide an implementation for the abstract members of the superclass.

Here is an example of an abstract class Writer with two member functions. The write() method is marked as abstract, whereas the greet() method has an implementation. Both the FictionWriter and RomanceWriter classes that extend from Writer have to provide their specific implementation for the write method.



# 12. What are anonymous functions? Provide their syntax in TypeScript.
An anonymous function is a function without a name. Anonymous functions are typically used as callback functions, i.e., they are passed around to other functions, only to be invoked by the other function at a later point in time. For example,



# 13. What are union types in TypeScript?
A union type is a special construct in TypeScript that indicates that a value can be one of several types. A vertical bar (|) separates these types.

Consider the following example where the variable value belongs to a union type consisting of strings and numbers. The value is initialized to string “Foo”. Because it can only be a string or a number, we can change it to a number later, and the TypeScript compiler doesn’t complain. 
However, if we try to set the value to a type not included in the union types, we get the following error. 
Union types allow you to create new types out of existing types. This removes a lot of boilerplate code as you don’t have to create new classes and type hierarchies

# 14. What are intersection types?
Intersection types let you combine the members of two or more types by using the ‘&’ operator. This allows you to combine existing types to get a single type with all the features you need.

The following example creates a new type Supervisor that has the members of types Employee and Manager.



# 15. What are type aliases? How do you create one?
Type aliases give a new, meaningful name for a type. They don’t create new types but create new names that refer to that type.

For example, you can alias a union type to avoid typing all the types everywhere that value is being used.



# 16. Explain the tuple types in TypeScript.
Tuples are a special type in TypeScript. They are similar to arrays with a fixed number of elements with a known type. However, the types need not be the same.
Since TypeScript 3.0, a tuple can specify one or more optional types using the ? as shown below.


# 17. Explain how tuple destructuring works in TypeScript.
You can destructure tuple elements by using the assignment operator (=). The destructuring variables get the types of the corresponding tuple elements.  
After destructuring, you can’t assign a value of a different type to the destructured variable. For example,


# 18. What are type assertions in TypeScript?
Sometimes, you as a programmer might know more about the type of a variable than TypeScript can infer. Usually, this happens when you know the type of an object is more specific than its current type. In such cases, you can tell the TypeScript compiler not to infer the type of the variable by using type assertions.

TypeScript provides two forms to assert the types.

Type assertions are similar to typecasting in other programming languages such as C# or Java. However, unlike those languages, there’s no runtime penalty of boxing and unboxing variables to fit the types. Type assertions simply let the TypeScript compiler know the type of the variable

# 19. How to enforce strict null checks in TypeScript?
Null pointers are one of the most common sources of unexpected runtime errors in programming. TypeScript helps you avoid them to a large degree by enforcing strict null checks.

You can enforce strict null checks in two ways:

providing the --strictNullChecks flag to the TypeScript (tsc) compiler
setting the strictNullChecks property to true in the tsconfig.json configuration file.
When the flag is false, TypeScript ignores null and undefined values in the code. When it is true, null and undefined have their distinct types. The compiler throws a type error if you try to use them where a concrete value is expected


# 20. How to make object properties immutable in TypeScript? (hint: readonly)
You can mark object properties as immutable by using the readonly keyword before the property name. For example:
When you mark a property as readonly, it can only be set when you initialize the object. Once the object is created, you cannot change it. 


