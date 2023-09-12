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


























































































































