---
title: Typescript11_20
date: 2023/9/21
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 11. What is undefined in TypeScript?
When a variable is declared without initialization, it’s assigned the undefined value. It’s not very useful on its own. A variable is undefined if it’s declared, but no value has been assigned to it. In contrast, null is assigned to a variable, and it represents no value. 

# 12. Explain the purpose of the never type in TypeScript.
As the name suggests, the never type represents the type of values that never occur. For example, a function that never returns a value or that always throws an exception can mark its return type as never.

You might wonder why we need a ‘never’ type when we already have ‘void’. Though both types look similar, they represent two very different concepts.

A function that doesn't return a value implicitly returns the value undefined in JavaScript. Hence, even though we are saying it’s not returning anything, it’s returning ‘undefined’. We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.
In contrast, a function that has a never return type never returns. It doesn't return undefined, either. There are 2 cases where functions should return never type:

In an unending loop e.g a while(true){} type loop.
A function that throws an error e.g function foo(){throw new Exception('Error message')}

# 13. Explain how enums work in TypeScript?
Enums allow us to create named constants. It is a simple way to give more friendly names to numeric constant values. An enum is defined by the keyword enum, followed by its name and the members.

Consider the following example that defines an enum Team with four values in it.

By default, the enums start the numbering at 0. You can override the default numbering by explicitly assigning the values to its members.

TypeScript also lets you create enums with string values as follows:

# 14. What is the typeof operator? How is it used in TypeScript?
Similar to JavaScript, the typeof operator in TypeScript returns the type of the operand as a string.
In TypeScript, you can use the typeof operator in a type context to refer to the type of a property or a variable.

# 15. What are the rest parameters and arguments in TypeScript?
A rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by the ‘…’ syntax and indicates that the function can accept one or more arguments.
In contrast, the rest arguments allow a function caller to provide a variable number of arguments from an array. Consider the following example

# 16. What is parameter destructuring?
Parameter destructing allows a function to unpack the object provided as an argument into one or more local variables.

# 17. Explain the TypeScript class syntax.
TypeScript fully supports classes. The TypeScript syntax for class declaration is similar to that of JavaScript, with the added type support for the member declarations.

Here is a simple class that defines an Employee type.

# 18. Explain the arrow function syntax in TypeScript.
Arrow functions provide a short and convenient syntax to declare functions. They are also called lambdas in other programming languages.

Consider a regular function that adds two numbers and returns a number.

# 19. Provide the syntax for optional parameters in TypeScript.
A function can mark one or more of its parameters as optional by suffixing its name with ‘?’. In the example below, the parameter greeting is marked optional.

# 20. What is the purpose of the tsconfig.json file?
A tsconfig.json file in a directory marks that directory as the root of a TypeScript project. It provides the compiler options to compile the project.

Here is a sample tsconfig.json file: