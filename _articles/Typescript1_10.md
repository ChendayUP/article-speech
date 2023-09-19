---
title: Typescript1_10
date: 2023/9/20
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 1. What are the primitive types in TypeScript?
TypeScript has three primitive types that are frequently used: string, number, and boolean. These correspond to the similarly named types in JavaScript. 

string: represents text values such as “javascript”, “typescript”, etc.
number: represents numeric values like 1, 2, 32, 43, etc.
boolean: represents a variable that can have either a ‘true’ or ‘false’ value.

# 2. Explain how the arrays work in TypeScript.
We use arrays to store values of the same type. Arrays are ordered and indexed collections of values. The indexing starts at 0, i.e., the first element has index 0, the second has index 1, and so on.

Here is the syntax to declare and initialize an array in TypeScript.

# 3. What is any type, and when to use it?
There are times when you want to store a value in a variable but don’t know the type of that variable in advance. For example, the value is coming from an API call or the user input. The ‘any’ type allows you to assign a value of any type to the variable of type any.

TypeScript assumes a variable is of type any when you don’t explicitly provide the type, and the compiler cannot infer the type from the surrounding context. 

# 4. What is void, and when to use the void type?
The void indicates the absence of type on a variable. It acts as the opposite type to any. It is especially useful in functions that don’t return a value.
If a variable is of type void, you can only assign the null or undefined values to that variable

# 5. What is an unknown type, and when to use it in TypeScript?
The unknown type is the type-safe counterpart of any type. You can assign anything to the unknown, but the unknown isn’t assignable to anything but itself and any, without performing a type assertion of a control-flow-based narrowing. You cannot perform any operations on a variable of an unknown type without first asserting or narrowing it to a more specific type.

Consider the following example. We create the foo variable of unknown type and assign a string value to it. If we try to assign that unknown variable to a string variable bar, the compiler gives an error.

You can narrow down a variable of an unknown type to something specific by doing typeof checks or comparison checks or using type guards. For example, we can get rid of the above error by

# 6. What are the different keywords to declare variables in TypeScript?
var: Declares a function-scoped or global variable. You can optionally set its value during the declaration. Its behavior and scoping rules are similar to the var keyword in JavaScript. For example,

let: Declares a block-scoped local variable. Similar to var, you can optionally set the value of a variable during the declaration. For example,
const: Declares a block-scoped constant value that cannot be changed after it’s initialized.  For example

# 7. Provide the syntax of a function with the type annotations.
Functions are blocks of code to perform a specific code. Functions can optionally take one or more arguments, process them, and optionally return a value.

Here’s the TypeScript syntax to create and call a function.

# 8. How to create objects in TypeScript?
Objects are dictionary-like collections of keys and values. The keys have to be unique. They are similar to arrays and are also sometimes called associative arrays. However, an array uses numbers to index the values, whereas an object allows you to use any other type as the key.

In TypeScript, an Object type refers to any value with properties. It can be defined by simply listing the properties and their types. For example,

# 9. How to specify optional properties in TypeScript?
An object type can have zero or more optional properties by adding a ‘?’ after the property name. 
In the example above, because the property ‘z’ is marked as optional, the compiler won’t complain if we don’t provide it during the initialization

# 10. Explain the concept of null and its use in TypeScript.
In programming, a null value indicates an absence of value. A null variable doesn’t point to any object. Hence you cannot access any properties on the variable or call a method on it.

In TypeScript, the null value is indicated by the ‘null’ keyword. You can check if a value is null as follows:


