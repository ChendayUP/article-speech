---
title: Typescript41_50
date: 2023/9/28
description: JavaScript Interview Questions Learning.
tag: JavaScript Interview Questions
author: You
---

# 21. What is a type declaration file?
A typical TypeScript project references other third-party TypeScript libraries such as JQuery to perform routine tasks. Having type information for the library code helps you in coding by providing detailed information about the types, method signatures, etc., and provides IntelliSense.

A type declaration file is a text file ending with a .d.ts extension providing a way to declare the existence of some types or values without actually providing implementations for those values. It contains the type declarations but doesn’t have any source code. It doesn’t produce a .js file after compilation

# 22. What are triple-slash directives?
Triple-slash directives are single-line comments that contain a single XML tag. TypeScript uses this XML tag as a compiler directive.

You can only place a triple-slash directive at the top of the containing file. Only single or multi-line comments can come before a triple-slash directive. TypeScript treats them as regular comments if it occurs in the middle of a code block, after a statement.

The primary use of triple-slash directives is to include other files in the compilation process. For example, the following directive instructs the compiler to include a file specified by the path in the containing TypeScript file.
Triple-slash directives also order the output when using --out or --outFile. The output files are produced to the output file location in the same order as the input files


# 23. Explain the purpose of the ‘in’ operator.
The in operator is used to find if a property is in the specified object. It returns true if the property belongs to the object. Otherwise, it returns false.



# 24. What are the ‘implements’ clauses in TypeScript?
An implements clause is used to check that a class satisfies the contract specified by an interface. If a class implements an interface and doesn’t implement that interface, the TypeScript compiler issues an error.

A class can implement more than one interface. In this case, the class has to specify all the contracts of those interfaces.

# 25. What are string literal types?
In TypeScript, you can refer to specific strings and numbers as types.

String literal types on their own are not that useful. However, you can combine them into unions. This allows you to specify all the string values that a variable can take, in turn acting like enums. This can be useful for function parameters.
String literal types can help us spell-check the string values

# 26. What are template literal types?
Template literal types are similar to the string literal types. You can combine them with concrete, literal types to produce a new string literal type. Template literal types allow us to use the string literal types as building blocks to create new string literal types.

Template literal types can also expand into multiple strings via unions. It helps us create the set of every possible string literal that each union member can represent.

# 27. Explain the concept of inheritance in TypeScript.
Inheritance allows a class to extend another class and reuse and modify the behavior defined in the other class. The class which inherits another class is called the derived class, and the class getting inherited is called the base class.

In TypeScript, a class can only extend one class. TypeScript uses the keyword ‘extends’ to specify the relationship between the base class and the derived classes.
In the above example, because the class Square extends functionality from Rectangle, we can create an instance of square and call both the area() and volume() methods


# 28. What are conditional types? How do you create them?
A conditional type allows you to dynamically select one of two possible types based on a condition. The condition is expressed as a type relationship test.

Here, if type C extends B, the value of the above type is TypeX. Otherwise, it is TypeY

# 29. What is the Function type in TypeScript?
Function is a global type in TypeScript. It has properties like bind, call, and apply, along with the other properties present on all function values.

You can always call a value of the Function type, and it returns a value of ‘any’ type.

# 30. List some of the utility types provided by TypeScript and explain their usage.
TypeScript provides various utility types that make common type transformations easy. These utility types are available globally. Here are some of the essential utility types included in TypeScript.

# 31



