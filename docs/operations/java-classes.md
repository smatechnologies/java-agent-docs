---
sidebar_label: 'Java classes'
title: Running Java classes
description: "How the Java Agent runs Java classes using named methods or the main method, including parameter passing and type identifiers."
tags:
  - Procedural
  - Automation Engineer
  - Agents
---

# Running Java classes

## What is it?

The Java Agent runs Java classes defined in OpCon job definitions. It supports two entry points: a named method (any non-main method in the class) and the default main method. Parameters can be passed to either entry point from the OpCon job definition using typed identifiers.

- Use named method when the class contains specific business logic methods you want OpCon to call directly
- Use main method when the class follows a standard command-line entry point pattern or accepts arguments as a string array

When the Java Agent is installed on the same system as the Java classes, the agent needs access to the Java libraries (`.jar` files) that contain the classes. All required libraries must be loaded into the agent's class path before a job runs. For information on loading libraries, refer to [Managing Software Libraries](managing-software-libraries).

The Java Agent can run classes that contain either a named method or the default main method of the class.

## Named method

When a named method (not the default main method) runs, parameters can be passed to the method as part of the run. The parameters must be defined using an identifier and a value. The supported identifiers are `STRING`, `INTEGER`, `LONG`, and `BOOLEAN`. The agent passes the parameters to the method, casting them to the identified type using the identifier, in the order that the parameters are defined in the job definition.

:::info Example
A Java class `com.sma.test.execution` has a method `execute` with four parameters defined as `String`, `String`, `int`, and `boolean` objects.
:::

```java
package com.sma.test;

public class execution {

public void execute(String name, String surname, int age, boolean male){

}
}
```

The parameters passed to the class would need to be defined in the Java job definition as follows:

```
STRING John
STRING Simpson
INTEGER 35
BOOLEAN True
```

The Java Agent would run the method mapping the parameters according to the identifiers as follows:

```java
com.sma.test.execution.execute("John", "Simpson", 35, true);
```

## Main method

When a main method runs, parameters can be passed to the method as part of the run. The parameters must be defined using either an identifier or a name and a value. If an identifier such as `STRING`, `INTEGER`, `LONG`, or `BOOLEAN` is used, the identifier is not passed as part of the run — only the value is passed. If a name definition is used (for example, `-age`), the name is passed as part of the run. The agent passes the parameters to the method in the order that the parameters are defined in the job definition.

:::info Example
A Java class `com.sma.test.execution` has a main method that accepts multiple arguments.
:::

```java
package com.sma.test;

public class execution {

public static void main(String[] args){

}
}
```

The parameters for this would be defined in the Java job definition as follows:

```
STRING John
STRING Simpson
-age 35
-male True
```

The Java Agent would run the main method passing the parameters as follows:

```java
com.sma.test.execution "John" "Simpson" -age 35 -male True
```

## FAQs

**What is the difference between a named method and the main method?**
A named method is any specific non-main method in a class that you want the agent to call directly. The main method is the standard Java entry point (`public static void main(String[] args)`). Named method runs happen within a thread of the agent's JVM. Main method runs spawn a separate JVM process.

**What type identifiers does the Java Agent support?**
The agent supports `STRING`, `INTEGER`, `LONG`, and `BOOLEAN`. These identifiers tell the agent what Java type to use when passing the parameter value to the method.

**Does the identifier appear in the method call for named methods?**
No. For named methods, the identifier is used only to determine the Java type for casting. The identifier itself is not passed to the method — only the value is passed, cast to the specified type.

**Does the identifier appear in the command line for main method runs?**
No. When you use a type identifier (`STRING`, `INTEGER`, `LONG`, `BOOLEAN`) with a main method, only the value is passed as a command-line argument. When you use a name definition (for example, `-age`), both the name and the value are passed.

**What happens if the class or method is not found?**
The agent logs an error message: `Method <name> not found in class <name>` or `Class <name> not found in libraries`. The job fails with an error return code. Verify that the required `.jar` files are loaded into the agent's class path.

## Glossary

**Named method** — A specific non-main method within a Java class, identified by name, that the agent calls directly. Parameters are passed using typed identifiers (`STRING`, `INTEGER`, `LONG`, `BOOLEAN`).

**Main method** — The standard Java entry point method (`public static void main(String[] args)`). When using the main method, the agent spawns a separate JVM process. Parameters are passed as command-line arguments.

**Type identifier** — A keyword (`STRING`, `INTEGER`, `LONG`, `BOOLEAN`) used in the OpCon job definition to specify the Java type for a parameter value. The agent casts the value to this type before passing it to the method.

**Class path** — The list of directories and `.jar` files that the JVM searches when loading Java classes. All required libraries must be in the class path before a job runs.
