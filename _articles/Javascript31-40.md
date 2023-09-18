---
title: JavaScript Interview Questions 31 - 40
date: 2023/1/1
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 31. What is the distinction between client-side and server-side JavaScript?
Client-side JavaScript is made up of two parts, a fundamental language and
predefined objects for performing JavaScript in a browser. JavaScript for the client is
automatically included in the HTML pages. At runtime, the browser understands this
script
Client-side JavaScript is similar to server-side JavaScript. It includes JavaScript that
will execute on a server. Only aȅ er processing is the server-side JavaScript deployed.

# JavaScriptInterview Questions for Experienced

# 32. What are arrow functions?
Arrow functions were introduced in the ES6 version of javascript. They provide us
with a new and shorter syntax for declaring functions. Arrow functions can only be
used as a function expression.
Let’s compare the normal function declaration and the arrow function declaration in
detail
Arrow functions are declared without the function keyword. If there is only one
returning expression then we don’t need to use the return keyword as well in an
arrow function as shown in the example above. Also, for functions having just one
line of code, curly braces { } can be omitted.

If the function takes in only one argument, then the parenthesis () around the
parameter can be omitted as shown in the code above.

The biggest difference between the traditional function expression and the arrow function is the handling of this keyword. By general definition, this keyword always refers to the object that is calling the function. As you can see in the code above, obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.

In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object

# 33. What do mean by prototype design pattern?
The Prototype Pattern produces different objects, but instead of returning uninitialized objects, it produces objects that have values replicated from a template – or sample – object. Also known as the Properties pattern, the Prototype pattern is used to create prototypes.

The introduction of business objects with parameters that match the database's default settings is a good example of where the Prototype pattern comes in handy. The default settings for a newly generated business object are stored in the prototype object.

The Prototype pattern is hardly used in traditional languages, however, it is used in the development of new objects and templates in JavaScript, which is a prototypal language

# 34. Differences between declaring variables using var, let and const.
Before the ES6 version of javascript, only the keyword var was used to declare variables. With the ES6 Version, keywords let and const were introduced to declare variables

The variables declared with the let keyword in the global scope behave just like the variable declared with the var keyword in the global scope.
Variables declared in the global scope with var and let keywords can be accessed from anywhere in the code.
But, there is one difference! Variables that are declared with the var keyword in the global scope are added to the window/global object. Therefore, they can be accessed using window.variableName.
Whereas, the variables declared with the let keyword are not added to the global object, therefore, trying to access such variables using window.variableName results in an error.

In javascript, a block means the code written inside the curly braces {}.
Variables declared with var keyword do not have block scope. It means a variable declared in block scope {} with the var keyword is the same as declaring the variable in the global scope.
Variables declared with let keyword inside the block scope cannot be accessed from outside of the block.

Const keyword

Variables with the const keyword behave exactly like a variable declared with the let keyword with only one difference, any variable declared with the const keyword cannot be reassigned.
In the code above, although we can change the value of a property inside the variable declared with const keyword, we cannot completely reassign the variable itself

# 35 What is the rest parameter and spread operator?
Both rest parameter and spread operator were introduced in the ES6 version of javascript.

Rest parameter

It provides an improved way of handling the parameters of a function.
Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
Any number of arguments will be converted into an array using the rest parameter.
It also helps in extracting all or some parts of the arguments.
Rest parameters can be used by applying three dots (...) before the parameters.

Spread operator (…): Although the syntax of the spread operator is exactly the same as the rest parameter, the spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.

Note- Key differences between rest parameter and spread operator:

Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
Rest parameter is used in function declaration whereas the spread operator is used in function calls

# 36. In JavaScript, how many different methods can you make an object?
In JavaScript, there are several ways to declare or construct an object.

Object.
using Class.
create Method.
Object Literals.
using Function.
Object Constructor

# 37 What is the use of promises in javascript?
Promises are used to handle asynchronous operations in javascript.

Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.

Promise object has four states -

Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
Settled - This state represents that the promise has been either rejected or fulfilled.
A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.

resolve is a function that will be called when the async operation has been successfully completed.

reject is a function that will be called, when the async operation fails or if some error occurs.

Example of a promise:

Promises are used to handle asynchronous operations like server requests, for ease of understanding, we are using an operation to calculate the sum of three elements.

In the function below, we are returning a promise inside a function:

In the code above, we are calculating the sum of three elements, if the length of the elements array is more than 3, a promise is rejected, or else the promise is resolved and the sum is returned.

We can consume any promise by attaching then() and catch() methods to the consumer.

then() method is used to access the result when the promise is fulfilled.

catch() method is used to access the result/error when the promise is rejected. In the code below, we are consuming the promise:

# 38. What are classes in javascript?
Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript.  Below are the examples of how classes are declared and used:

Key points to remember about classes:

Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
A class can inherit properties and methods from other classes by using the extend keyword.
All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed

# 39 What are generator functions?
Introduced in the ES6 version, generator functions are a special class of functions.

They can be stopped midway and then continue from where they had stopped.

Generator functions are declared with the function* keyword instead of the normal function keyword:

# 40 Explain WeakSet in javascript.
In javascript, a Set is a collection of unique and ordered elements. Just like Set, WeakSet is also a collection of unique and ordered elements with some key differences:

Weakset contains only objects and no other type.
An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.
Unlike Set, WeakSet only has three methods, add() , delete() and has() .