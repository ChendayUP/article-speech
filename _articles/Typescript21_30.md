---
title: Typescript21_30
date: 2023/9/26
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 1. Explain the different variants of the for loop in TypeScript.
TypeScript provides the following three ways to loop over collections.

# 2. Explain the symbol type in TypeScript.
Symbols were introduced in ES6 and are supported by TypeScript. Similar to numbers and strings, symbols are primitive types. You can use Symbols to create unique properties for objects.

You can create symbol values by calling the Symbol() constructor, optionally providing a string key.
A key characteristic of symbols is that they are unique and immutable.

# 3. Explain how optional chaining works in TypeScript.
Optional chaining allows you to access properties and call methods on them in a chain-like fashion. You can do this using the ‘?.’ operator.

TypeScript immediately stops running some expression if it runs into a ‘null’ or ‘undefined’ value and returns ‘undefined’ for the entire expression chain.

Using optional chaining, the following expression


# 4. Provide the TypeScript syntax to create function overloads.
Function overloading allows us to define multiple functions with the same name, as long as their number of parameters or the types of parameters are different.

The following example defines two overloads for the function buildDate. The first overload takes a number as a parameter, whereas the second takes three numbers as parameters. These are called overload signatures.

The body of the function also called an implementation signature, follows the overload signatures. You can’t call this signature directly, as it’s not visible from the outside. It should be compatible with the overload signatures.

# 5. What is meant by type inference?
TypeScript can infer the type of a variable when you don’t provide an explicit type. This is known as type inference. This is usually done when the variables or parameters are initialized during the declaration.

For example, TypeScript knows that the variable foo is a string, even though we don’t mention string as a type.

# 6. What is meant by contextual typing?
When the TypeScript compiler uses the location (or context) of a variable to infer its type, it’s called contextual typing.

In the following example, TypeScript uses the Window.onmousedown function type information to infer the type of the function expression on the right-hand side of the assignment. This allows it to infer the type of the e parameter, which does have a button property but not a property named foo.

# 7. What is the purpose of noImplicitAny?
Usually, when we don’t provide any type on a variable, TypeScript assumes ‘any’ type. For example, TypeScript compiles the following code, assuming the parameter ‘s’ is of any type. It works as long as the caller passes a string.
However, the code breaks down as soon as we pass a number or other type than a string that doesn’t have a split() method on it. For example,
noImplicitAny is a compiler option that you set in the tsconfig.json file. It forces the TypeScript compiler to raise an error whenever it infers a variable is of any type. This prevents us from accidentally causing similar errors.


# 8. What is an interface?
An interface defines a contract by specifying the type of data an object can have and its operations. In TypeScript, you can specify an object’s shape by creating an interface and using it as its type. It’s also called “duck typing”.

In TypeScript, you can create and use an interface as follows:
Interfaces are an effective way to specify contracts within your code as well as outside your code.


# 9. Explain the various ways to control member visibility in TypeScript.
TypeScript provides three keywords to control the visibility of class members, such as properties or methods.

public: You can access a public member anywhere outside the class. All class members are public by default. 
protected: A protected member is visible only to the subclasses of the class containing that member. Outside code that doesn’t extend the container class can’t access a protected member. 
private: A private member is only visible inside the class. No outside code can access the private members of a class

# 10. Does TypeScript support static classes? If not, why?
TypeScript doesn’t support static classes, unlike the popular object-oriented programming languages like C# and Java.

These languages need static classes because all code, i.e., data and functions, need to be inside a class and cannot exist independently. Static classes provide a way to allow these functions without associating them with any objects.

In TypeScript, you can create any data and functions as simple objects without creating a containing class. Hence TypeScript doesn’t need static classes. A singleton class is just a simple object in TypeScript



