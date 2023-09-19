---
title: JavaScript Interview Questions 41 - 52
date: 2023/9/19
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 41. Why do we use callbacks?
A callback function is a method that is sent as an input to another function (now let us name this other function "thisFunction"), and it is performed inside the thisFunction after the function has completed execution.

JavaScript is a scripting language that is based on events. Instead of waiting for a reply before continuing, JavaScript will continue to run while monitoring for additional events. Callbacks are a technique of ensuring that a particular code does not run until another code has completed its execution.


# 42. Explain WeakMap in javascript.
In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:

The keys and values in weakmap should always be an object.
If there are no references to the object, the object will be garbage collected.

# 43. What is Object Destructuring?
Object destructuring is a new way to extract elements from an object or an array.

Object destructuring: Before ES6 version:
As one can see, using object destructuring we have extracted all the elements inside an object in one line of code. If we want our new variable to have the same name as the property of an object we can remove the colon:

# 44. Difference between prototypal and classical inheritance
Programers build objects, which are representations of real-time entities, in traditional OO programming. Classes and objects are the two sorts of abstractions. A class is a generalization of an object, whereas an object is an abstraction of an actual thing. A Vehicle, for example, is a specialization of a Car. As a result, automobiles (class) are descended from vehicles (object).

Classical inheritance differs from prototypal inheritance in that classical inheritance is confined to classes that inherit from those remaining classes, but prototypal inheritance allows any object to be cloned via an object linking method. Despite going into too many specifics, a prototype essentially serves as a template for those other objects, whether they extend the parent object or not

# 45. What is a Temporal Dead Zone?
Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone:

In the code above, both in the global scope and functional scope, we are trying to access variables that have not been declared yet. This is called the Temporal Dead Zone

# 46. What do you mean by JavaScript Design Patterns?
JavaScript design patterns are repeatable approaches for errors that arise sometimes when building JavaScript browser applications. They truly assist us in making our code more stable.

They are divided mainly into 3 categories 

Creational Design Pattern
Structural Design Pattern
Behavioral Design Pattern.
Creational Design Pattern: The object generation mechanism is addressed by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.
Structural Design Pattern: The JavaScript Structural Design Pattern explains how the classes and objects we've generated so far can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so.
Behavioral Design Pattern: This design pattern highlights typical patterns of communication between objects in JavaScript. As a result, the communication may be carried out with greater freedom

# 47. Is JavaScript a pass-by-reference or pass-by-value language?
The variable's data is always a reference for objects, hence it's always pass by value. As a result, if you supply an object and alter its members inside the method, the changes continue outside of it. It appears to be pass by reference in this case. However, if you modify the values of the object variable, the change will not last, demonstrating that it is indeed passed by value

# 48. Difference between Async/Await and Generators usage to achieve the same functionality.
Generator functions are run by their generator yield by yield which means one output at a time, whereas Async-await functions are executed sequentially one after another.
Async/await provides a certain use case for Generators easier to execute.
The output result of the Generator function is always value: X, done: Boolean, but the return value of the Async function is always an assurance or throws an error

# 49. What are the primitive data types in JavaScript?
A primitive is a data type that isn't composed of other data types. It's only capable of displaying one value at a time. By definition, every primitive is a built-in data type (the compiler must be knowledgeable of them) nevertheless, not all built-in datasets are primitives. In JavaScript, there are 5 different forms of basic data. The following values are available:

Boolean
Undefined
Null
Number
String

# 50. What is the role of deferred scripts in JavaScript?
The processing of HTML code while the page loads are disabled by nature till the script hasn't halted. Your page will be affected if your network is a bit slow, or if the script is very hefty. When you use Deferred, the script waits for the HTML parser to finish before executing it. This reduces the time it takes for web pages to load, allowing them to appear more quickly

# 51. What has to be done in order to put Lexical Scoping into practice?
To support lexical scoping, a JavaScript function object's internal state must include not just the function's code but also a reference to the current scope chain.

# 52. What is the purpose of the following JavaScript code?
Every executing function, code block, and script as a whole in JavaScript has a related object known as the Lexical Environment. The preceding code line returns the value in scope.