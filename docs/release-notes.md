---
sidebar_label: 'Release notes'
title: Java Agent release notes
description: "Version history and change details for the Java Agent, including new features, improvements, and bug fixes."
tags:
  - Reference
  - Automation Engineer
  - Agents
---

# Java Agent release notes

## 21

### 21.0.0

2022 January

### What's new

:white_check_mark: **JAVA-32**: Replaced log4j with slf4j and logback for Java Agent logging component. Related to CVE-2021-44228.

:white_check_mark: **JAVA-33**: Replaced log4j with slf4j and logback for Java Proxy Agent logging component. Related to CVE-2021-44228.

:white_check_mark: **JAVA-34**: Updated logback to support two log files and dynamic creation of log file path.

### Why this matters

The log4j library was replaced with slf4j and logback across both the Java Agent and Java Proxy Agent in response to CVE-2021-44228, a critical remote code execution vulnerability. The logback update adds support for two log files and dynamic log file path creation, improving log management flexibility.

## 17

### 17.0.0

2017 May

### What's new

:eight_spoked_asterisk: Microsoft ProgramData requirements were implemented for the Java Agent for the Windows environment. When using the default installation locations, the configuration files, log files, and library directories are placed in the ProgramData directory, while the binary files are placed in Program Files.

:eight_spoked_asterisk: Added a new field, **Alternate JVM**, to the Class and JAR operations in the Enterprise Manager, which allows you to define the full path to the binary directory of an alternate JVM.

:eight_spoked_asterisk: Added a special Environment Variable definition, `JAVA_ENV_VARS`, that supports global property definition.

:eight_spoked_asterisk: Added a special JVM Argument definition, `JAVA_JVM_ARGS`, that supports global property definition.

### Why this matters

Windows installations now follow Microsoft ProgramData conventions, separating configuration and log files from binary files. The new Alternate JVM field gives you control over which JVM version runs specific jobs without changing the agent's default JVM. The `JAVA_ENV_VARS` and `JAVA_JVM_ARGS` global property definitions allow environment variables and JVM arguments to be managed through OpCon global properties rather than hard-coded values.

## 16

### 16.1.0

2016 September

### What's new

:eight_spoked_asterisk: Added a new Java operation, **JAR**, which allows you to define the run of a JAR file (for example, `-jar program.jar`). Fields to define this operation in the Enterprise Manager include:

- **Directory Location**: defines the full directory path of the executable or script to run
- **Jar File Name**: defines the name of the JAR file that contains the class or method to run

:eight_spoked_asterisk: Added two new tabs to Java Job Details in the Enterprise Manager:

- **JVM Arguments**: defines the arguments passed as JVM-specific (Java Virtual Machine) arguments, also known as Java VM Options
- **Environment Variables**: defines the variables that allow you to specify operating system environment variables

### Why this matters

The new JAR operation type lets you run packaged Java applications directly without specifying individual class names. The JVM Arguments and Environment Variables tabs give you per-job control over the JVM configuration and operating system environment, reducing the need for wrapper scripts or agent-level configuration changes.
