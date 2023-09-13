---
title: JavaScript Interview Questions 11 - 20
date: 2023/9/12
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 11. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. 
In most cases, this language is 'not particularly severe' when it comes to throwing errors. 
In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result,
debugging becomes a lot simpler. Thus programmer's chances of making an error are lowered.
Characteristics of strict mode in javascript
1. Duplicate arguments are not allowed by developers.
2. In strict mode, you won't be able to use the JavaScript keyword as a parameter
or function name.
3. The 'use strict' keyword is used to define strict mode at the start of the script.
Strict mode is supported by all browsers.
4. Engineers will not be allowed to create global variables in 'Strict Mode.

# 12. Explain Higher Order Functions in javascript.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
Higher-order functions are a result of functions being first-class citizens in javascript

# 13. Explain “this” keyword.
The “this” keyword refers to the object that the function is a property of.
The value of the “this” keyword will always depend on the object that is invoking the function.

# 14. What do you mean by Self Invoking Functions?
Without being requested, a self-invoking expression is automatically invoked (initiated). 
If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.
Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again.
And there is no name for these kinds of functions.
# 15. Explain call(), apply() and, bind() methods.
1. call():
It’s a predefined method in javascript.
This method invokes a method (function) by specifying the owner object.

call() method allows an object to use the method (function) of another object.

apply()
The apply method is similar to the call() method. The only difference is that,
call() method takes arguments separately whereas, apply() method takes arguments as an array.

2. bind():
This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter

# 16. What is the difference between exec () and test () methods in javascript?
test () and exec () are RegExp expression methods used in javascript.
We'll use exec () to search a string for a specific pattern, and if it finds it, it'll
return the pattern directly; else, it'll return an 'empty' result.
We will use a test () to find a string for a specific pattern. It will return the
Boolean value 'true' on finding the given text otherwise, it will return 'false'.


# 17. What is currying in JavaScript?
Currying is an advanced technique to transform a function of arguments n, to n
functions of one or fewer arguments.

# 18. What are some advantages of using External JavaScript?
External JavaScript is the JavaScript Code (script) written in a separate file with the
extension.js, and then we link that file inside the <head> or <body> element of the
HTML file where the code is to be placed.
Some advantages of external javascript are
1. It allows web designers and developers to collaborate on HTML and javascript files.
1. We can reuse the code.
2. Code readability is simple in external javascript.

# 19. Explain Scope and Scope Chain in javascript.
Scope in JS determines the accessibility of variables and functions at various parts of one’s code.
In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot access.
There are three types of scopes in JS:
Global Scope
Local or Function Scope

Block Scope
Global Scope: Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.

Function Scope: Any variables or functions declared inside a function have
local/function scope, which means that all the variables and functions declared
inside a function, can be accessed from within the function and not outside of it.

Block Scope: Block scope is related to the variables declared using let and const.
Variables declared with var do not have block scope. Block scope tells us that any
variable declared inside a block { }, can be accessed only inside that block and cannot
be accessed outside of it.

Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:
As you can see in the code above, if the javascript engine does not find the
variable in local scope, it tries to check for the variable in the outer scope. If the
variable does not exist in the outer scope, it tries to find the variable in the global
scope.
If the variable is not found in the global space as well, a reference error is thrown.

# 20. Explain Closures in JavaScript.
Closures are an ability of a function to remember the variables and functions that are
declared in its outer scope.

This ability of a function to store a variable for further reference even aȅ er it is
executed is called Closure.
















































































































