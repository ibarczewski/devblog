---
template: post
title: 'What I''m Excited For In The Upcoming C# 9.0 Release'
slug: test
draft: true
date: 2020-05-22T14:54:37.069Z
description: test
category: Code
tags:
  - 'C#'
  - .net
  - 'c# 9.0'
---
Improved Pattern Matching

## Top Level Statements

Introducing new developers to C# usually starts with me explaining about the necessity of having a static main method in order to start developing a C# program. This generally looks ugly - once it's fleshed out, the main method can look overwhelming. Even for boilerplate, it is surprisingly messy for how little it does. Before 9.0, that boilerplate look something like this:

```
// how we used to have to do it
using System;
class Program
{
static void Main()
{
Console.WriteLine("owie");
}
}
```

We would declare a class, and inside of that class, declare a static main method. While there isn't much to do to make this work, it feels bloated and unnecessary to beginners.

In 9.0, that has now been reduced to simply:

```
// blessed C# 9.0
using System;

Console.WriteLine("Hello World!");
```

Your code has to start after your using statements, but anything works from here. You have access to args, you can create asynchronous statements - everything you were able to do in the old boilerplate still stands up here. 

## Target Typed "New"

In the old versions of C#, you used to have to declare the types you were instantiating, even if the context of the type was apparent. 

```
Dog dog = new Dog("Zena", "German Shepherd");
```

C# 9.0 removes the need to declare the new type if it can be inferred from the initial declaration!

```
Dog dog = new ("Zena", "German Shepherd");
```

## Parameterized Null Checks

One of my favorite new features is being able to do null checks and throw an ArgumentNullException *inside* of the parameter declaration as opposed to wiring it up inside of the method.

In previous versions of C#, we handled null checks where we wanted to throw ArgumentNullExceptions like this:

```
// yes I am aware that this would be more complex, just bear with me
public void AddGameToLibrary(string title) 
{
   if (title == null) 
   {
      throw new ArgumentNullException(nameof(title));
   }
   
   // execute code here
} 
```

C# 9.0 makes the code above real tidy! Now, you simply use the ! symbol at the end of your parameter declaration to do the same thing.

```
public void AddGameToLibrary(string title!) 
{
   // execute code here
} 
```

With Expressions
