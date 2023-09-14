---
title: JavaScript Interview Questions 21 - 30
date: 2023/9/14
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 21. Mention some advantages of javascript.
There are many advantages of javascript. Some of them are
1. Javascript is executed on the client-side as well as server-side also. There are a
variety of Frontend Frameworks that you may study and utilize. However, if you
want to use JavaScript on the backend, you'll need to learn NodeJS. It is
currently the only JavaScript framework that may be used on the backend.
2. Javascript is a simple language to learn.
3. Web pages now have more functionality because of Javascript.
4. To the end-user, Javascript is quite quick.
   
# 22. What are object prototypes?
All javascript objects inherit properties from a prototype. For example,
Date objects inherit properties from the Date prototype
Math objects inherit properties from the Math prototype
Array objects inherit properties from the Array prototype.
On top of the chain is Object.prototype. Every prototype inherits properties and
methods from the Object.prototype.
A prototype is a blueprint of an object. The prototype allows us to use
properties and methods on an object even if the properties and methods do not
exist on the current object

# 23. What are callbacks
A callback is a function that will be executed aȅ er another function gets executed. In
javascript, functions are treated as first-class citizens, they can be used as an
argument of another function, can be returned by another function, and can be used
as a property of an object.
Functions that are used as an argument to another function are called callback
functions

# 24. What are the types of errors in javascript?
There are two types of errors in javascript.
Page 35 © Copyright by Interviewbit
JavaScriptInterview Questions
1. Syntax error: Syntax errors are mistakes or spelling problems in the code that
cause the program to not execute at all or to stop running halfway through.
Error messages are usually supplied as well.
2. Logical error: Reasoning mistakes occur when the syntax is proper but the logic
or program is incorrect. The application executes without problems in this case.
However, the output findings are inaccurate. These are sometimes more difficult
to correct than syntax issues since these applications do not display error signals
for logic faults.

# 25. What is memoization?
Memoization is a form of caching where the return value of a function is cached
based on its parameters. If the parameter of that function is not changed, the cached
version of the function is returned.
Let’s understand memoization, by converting a simple function to a memoized
function:
Note- Memoization is used for expensive function calls but in the following
example, we are considering a simple function for understanding the concept of
memoization better

When we are calling the function addTo256 again with the same parameter (“20” in
the case above), we are computing the result again for the same parameter.
Computing the result with the same parameter, again and again, is not a big deal in
the above case, but imagine if the function does some heavy-duty work, then,
computing the result again and again with the same parameter will lead to wastage
of time.
This is where memoization comes in, by using memoization we can store(cache) the
computed results based on the parameters. If the same parameter is used again
while invoking the function, instead of computing the result, we directly return the
stored (cached) value

# 26. What is recursion in a programming language?
Recursion is a technique to iterate over an operation by having a function call itself
repeatedly until it arrives at a result.

# 27. What is the use of a constructor function in javascript?
Constructor functions are used to create objects in javascript.
When do we use constructor functions?

If we want to create multiple objects having similar properties and methods,
constructor functions are used.
Note- The name of a constructor function should always be written in Pascal
Notation: every word should start with a capital letter.

The above line of code will create a new object of the type Person. Constructor
functions allow us to group similar objects.

# 28. What is DOM?
DOM stands for Document Object Model.  DOM is a programming interface for
HTML and XML documents.
When the browser tries to render an HTML document, it creates an object based
on the HTML document called DOM. Using this DOM, we can manipulate or
change various elements inside the HTML document.
Example of how HTML code gets converted to DOM:

# 29. Which method is used to retrieve a character from a certain index?
The charAt() function of the JavaScript string finds a char element at the supplied
index. The index number begins at 0 and continues up to n-1, Here n is the string
length. The index value must be positive, higher than, or the same as the string
length.

# 30. What do you mean by BOM?
Browser Object Model is known as BOM. It allows users to interact with the browser. A
browser's initial object is a window. As a result, you may call all of the window's
functions directly or by referencing the window. The document, history, screen,
navigator, location, and other attributes are available in the window object.

# 31. What is the distinction between client-side and server-side JavaScript?
Client-side JavaScript is made up of two parts, a fundamental language and
predefined objects for performing JavaScript in a browser. JavaScript for the client is
automatically included in the HTML pages. At runtime, the browser understands this script

Client-side JavaScript is similar to server-side JavaScript. It includes JavaScript that
will execute on a server. Only aȅ er processing is the server-side JavaScript deployed.

















































































