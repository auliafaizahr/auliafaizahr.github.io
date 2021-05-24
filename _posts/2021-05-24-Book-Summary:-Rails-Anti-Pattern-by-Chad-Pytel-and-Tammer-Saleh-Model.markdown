---
layout: post
title : "Book Summary: Rails Anti Pattern by Chad Pytel and Tammer Saleh(pt. 1-Model)"
date  : 2021-05-24 19:39:55 +0700
image : hello.png
tags  : rails book-techno book
---

{: style="text-align:center"}
![alt text][Rails Anti Pattern]

As Junior Developer Rails, I do realize Im still lack of knowledge of this beautiful programming language here and there, so I try to find as many as source to learn more about this language. So many people recommend this book titled 'Rails Anti Pattern' by Chad Pytel and Tammer Saleh. I havent done yet read all sections of this book, but I still want to post this and took this as my learning journey.

The book is organized into concise, modular chapters—each outlines a single common AntiPattern and offers detailed, cookbook-style code solutions that were previously difficult or impossible to find. Leading Rails developers Chad Pytel and Tammer Saleh also offer specific guidance for refactoring existing bad code or design to reflect sound object-oriented principles and established Rails best practices. With their help, developers, architects, and testers can dramatically improve new and existing applications, avoid future problems, and establish superior Rails coding standards throughout their organizations.

This book will help reader to understand and solve problem by dividing into these part :
- Model layer code, from general object-oriented programming violations to complex SQL and excessive redundancy
- Domain modeling, including schema and database issues such as normalization and serialization
- View layer tools and conventions
- Controller-layer code, including RESTful code
- Service-related APIs, including timeouts, exceptions, backgrounding, and response codes
- Third-party code, including plug-ins and gems
- Testing, from test suites to test-driven development processes
- Scaling and deployment
- Database issues, including migrations and validations
- System design for “graceful degradation” in the real world

### What Are AntiPatterns?
The term AntiPatterns was coined in 1995 by Andrew Koeing, inspired by Gang of Four's book Design Patterns, which developed the concept of design patterns in the software field.
AntiPatterns are common approaches to recurring problems that ultimately prove to be ineffective.

In this post I just going to talk about 1st Chapter(Model)

### SUMMARY CHAPTER 1 - Model
Some points I got after reading chapter 1 - Model :
- Put database related logical in model, as long as we can put and fetch from model directly, put the logical on model
- Dont do more than one dot (Following the Law of Demeter)
- Using delegate to avoid one dot
- Learn and mastering scope and use it in model as much as you can, to maximize database related logical
- KEEP DRY by delegating responsibility to new classes, make it single responsibility principle
- Use models
- Learn and understand ActiveRecord Associations Deeper

There's possibility I misinterpret how chapter 1 about Model on this book, but this is what I got, Im going to finish this book and read about other's perspective too to richen my knowledge.

Feel free to criticize and correct me if Im wrong.

[Rails Anti Pattern]: https://images-na.ssl-images-amazon.com/images/I/51sOS0+TmKL._SX382_BO1,204,203,200_.jpg "Rails Anti Pattern"