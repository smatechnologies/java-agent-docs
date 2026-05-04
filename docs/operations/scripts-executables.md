---
sidebar_label: 'Scripts and executables'
title: Running scripts and executables
description: "How the Java Agent runs scripts and executables, including supported file types, parameter passing, and Windows limitations."
tags:
  - Procedural
  - Automation Engineer
  - Agents
---

# Running scripts and executables

## What is it?

The Java Agent runs scripts and executable files defined in OpCon job definitions. It supports `.exe`, `.com`, `.bat`, and `.sh` file types. Parameters can be passed to the script or executable from the OpCon job definition.

- Use this capability when you need OpCon to schedule existing scripts or executables on the same system as the Java Agent
- Use `.sh` for shell scripts in a Java environment on Windows using a shell compatibility layer

:::note
When using `.com` and `.bat` file types, there is a Windows limitation of nine arguments that can be passed to the script.
:::

When the script or executable runs, parameters can be passed as part of the run. Parameters must be defined using either an identifier or a name and a value. If an identifier such as `STRING`, `INTEGER`, `LONG`, or `BOOLEAN` is used, the identifier is not passed as part of the run — only the value is passed. If a name definition is used (for example, `-age`), both the name and the value are passed. The agent passes the parameters to the script or executable in the order that the parameters are defined in the job definition.

## Example

A Java command runs `c:\test\program.exe` and accepts multiple arguments.

The parameters for this would be defined in the Java job definition as follows:

```
STRING John
STRING Simpson
-age 35
-male True
```

The result would be:

```
C:\test\program.exe "John" "Simpson" -age 35 -male True
```

## FAQs

**What file types does the Java Agent support for scripts and executables?**
The agent supports `.exe`, `.com`, `.bat`, and `.sh` file types.

**Is there a limit on the number of arguments I can pass to a batch script?**
Yes. Windows limits `.com` and `.bat` files to nine arguments. If you need more than nine parameters, consider using an `.exe` or wrapping the script to read parameters from a file.

**Does the type identifier appear in the final command line?**
No. When you use a type identifier (`STRING`, `INTEGER`, `LONG`, `BOOLEAN`), only the value is passed as a command-line argument. When you use a name definition (for example, `-age`), both the name and the value appear in the final command line.

**Does the Java Agent need to be on the same machine as the script?**
Yes. The Java Agent runs scripts and executables on the machine where it is installed. The script file path in the job definition must be accessible from that machine.

## Glossary

**Command operation** — The Java Agent job operation type for running scripts and executables. It requires a directory path and a script or executable file name.

**Type identifier** — A keyword (`STRING`, `INTEGER`, `LONG`, `BOOLEAN`) used in the OpCon job definition to pass a typed value to a script or executable. The identifier itself is not included in the command line — only the value is passed.
