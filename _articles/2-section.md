---
title: JavaScript Interview Questions
date: 2023/8/14
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 1. What are the different data types present in javascript?

To know the type of a JavaScript variable, we can use the typeof operator.
1. Primitive types
String - It represents a series of characters and is written with quotes. A string can be
represented using a single or a double quote.
Number - It represents a number and can be written with or without decimals.
BigInt - This data type is used to store numbers which are above the limitation
of the Number data type. It can store large integers and is represented by adding
“n” to an integer literal.
Boolean - It represents a logical entity and can have only two values : true or
false. Booleans are generally used for conditional testing.
Undefined - When a variable is declared but not assigned, it has the value of
undefined and it’s type is also undefined.
Null - It represents a non-existent or a invalid value
Symbol - It is a new data type introduced in the ES6 version of javascript. It is
used to store an anonymous and unique value
typeof of primitive types
2. Non-primitive types
Primitive data types can store only a single value. To store multiple and complex
values, non-primitive data types are used.
Object - Used to store collection of data
Note- It is important to remember that any data type that is not a primitive
data type, is of Object type in javascript.
# 2. Explain Hoisting in javascript.
Hoisting is the default behaviour of javascript where all the variable and function
declarations are moved on top.
This means that irrespective of where the variables and functions are declared, they
are moved on top of the scope. The scope can be both local and global.
Note - Variable initializations are not hoisted, only variable declarations are
hoisted:
Note - To avoid hoisting, you can run javascript in strict mode by using “use
strict” on top of the code:
# 3. Why do we use the word “debugger” in javascript?
The debugger for the browser must be activated in order to debug the code. Built-in
debuggers may be switched on and off, requiring the user to report faults. The
remaining section of the code should stop execution before moving on to the next
line while debugging.

# 4. Difference between “ == “ and “ === “ operators.
Both are comparison operators. The difference between both the operators is that
“==” is used to compare values whereas, “ === “ is used to compare both values and
types.

# 5. Difference between var and let keyword in javascript.
Some differences are
1. From the very beginning, the 'var' keyword was used in JavaScript programming
whereas the keyword 'let' was just added in 2015.
2. The keyword 'Var' has function scope. Anywhere in the function, the variable
specified using var is accessible but in ‘let’ the scope of a variable declared with
the 'let' keyword is limited to the block in which it is declared. Let's start with a
Block Scope.
3. 'var' declares a variable that will be hoisted but 'let' declares a variable that will
be hoisted

# 6. Explain Implicit Type Coercion in javascript.
Implicit type coercion in javascript is the automatic conversion of value from one
data type to another. It takes place when the operands of an expression are of
different data types.
String coercion
String coercion takes place while using the ‘ + ‘ operator. When a number is added to
a string, the number type is always converted to the string type.

Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The
same ‘ + ‘ operator when used to add two strings, outputs the concatenated
string:
Let’s understand both the examples where we have added a number to a string,
When JavaScript sees that the operands of the expression x + y are of different types (
one being a number type and the other being a string type ), it converts the number
type to the string type and then performs the operation. Since aȅ er conversion, both
the variables are of string type, the ‘ + ‘ operator outputs the concatenated string
“33” in the first example and “24Hello” in the second example.
Note - Type coercion also takes place when using the ‘ - ‘ operator, but the
difference while using ‘ - ‘ operator is that, a string is converted to a number
and then subtraction takes place.
Boolean Coercion
Boolean coercion takes place when using logical operators, ternary operators, if
statements, and loop checks. To understand boolean coercion in if statements and
operators, we need to understand truthy and falsy values.
Truthy values are those which will be converted (coerced) to true. Falsy values are
those which will be converted to false.
All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.
If statements:

Logical operators:
Logical operators in javascript, unlike operators in other programming languages, do
not return true or false. They always return one of the operands.
OR ( | | ) operator - If the first value is truthy, then the first value is returned.
Otherwise, always the second value gets returned.
AND ( && ) operator - If both the values are truthy, always the second value is
returned. If the first value is falsy then the first value is returned or if the second value
is falsy then the second value is returned.
Equality Coercion
Equality coercion takes place when using ‘ == ‘ operator. As we have stated before
The ‘ == ‘ operator compares values and not types.
While the above statement is a simple way to explain == operator, it’s not completely
true
The reality is that while using the ‘==’ operator, coercion takes place.
The ‘==’ operator, converts both the operands to the same type and then compares
them.
Coercion does not take place when using the ‘===’ operator. Both operands are not
converted to the same type in the case of ‘===’ operator.
 
# 7. Is javascript a statically typed or a dynamically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, the
type of a variable is checked during run-time in contrast to a statically typed
language, where the type of a variable is checked during compile-time.
Since javascript is a loosely(dynamically) typed language, variables in JS are not
associated with any type. A variable can hold the value of any data type.
For example, a variable that is assigned a number type can be converted to a string
type:

# 8. What is NaN property in JavaScript?
NaN property represents the “Not-a-Number” value. It indicates a value that is not a
legal number.
typeof of NaN will return a Number.
To check if a value is NaN, we use the isNaN() function,
Note- isNaN() function converts the given value to a Number type, and then
equates to NaN.

# 9. Explain passed by value and passed by reference.
In JavaScript, primitive data types are passed by value and non-primitive data
types are passed by reference.
For understanding passed by value and passed by reference, we need to understand
what happens when we create a variable and assign a value to it,
var x = 2;
In the above example, we created a variable x and assigned it a value of “2”. In the
background, the “=” (assign operator) allocates some space in the memory, stores
the value “2” and returns the location of the allocated memory space. Therefore, the
variable x in the above code points to the location of the memory space instead of
pointing to the value 2 directly.
Assign operator behaves differently when dealing with primitive and non-primitive
data types,
Assign operator dealing with primitive types:

In the above example, the assign operator knows that the value assigned to y is a
primitive type (number type in this case), so when the second line code executes,
where the value of y is assigned to z, the assign operator takes the value of y (234)
and allocates a new space in the memory and returns the address. Therefore,
variable z is not pointing to the location of variable y, instead, it is pointing to a new
location in the memory.
From the above example, we can see that primitive data types when passed to
another variable, are passed by value. Instead of just assigning the same address to
another variable, the value is passed and new space of memory is created.
Assign operator dealing with non-primitive types:
In the above example, the assign operator directly passes the location of the variable
obj to the variable obj2. In other words, the reference of the variable obj is passed to
the variable obj2.
From the above example, we can see that while passing non-primitive data types, the
assign operator directly passes the address (reference).
Therefore, non-primitive data types are always passed by reference.

# 10. What is an Immediately Invoked Function in JavaScript?
An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a
function that runs as soon as it is defined.

To understand IIFE, we need to understand the two sets of parentheses that are
added while creating an IIFE :

While executing javascript code, whenever the compiler sees the word “function”, it
assumes that we are declaring a function in the code. Therefore, if we do not use the
first set of parentheses, the compiler throws an error because it thinks we are
declaring a function, and by the syntax of declaring a function, a function should
always have a name.

To remove this error, we add the first set of parenthesis that tells the compiler that
the function is not a function declaration, instead, it’s a function expression.
The second set of parenthesis:

From the definition of an IIFE, we know that our code should run as soon as it is
defined. A function runs only when it is invoked. If we do not invoke the function, the
function declaration is returned:

Therefore to invoke the function, we use the second set of parenthesis








































































































































