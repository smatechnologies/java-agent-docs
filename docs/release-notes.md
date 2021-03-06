---
sidebar_label: 'Release notes'
---

# Java Agent release notes

## Java Agent 21.0.0

2022 January

:white_check_mark: **JAVA-32**: Replaced log4j with slj4j and logback for Java Agent logging component.  Related to CVE-2021-44228.

:white_check_mark: **JAVA-33**: Replaced log4j with slj4j and logback for Java Proxy Agent logging component.  Related to CVE-2021-44228.

:white_check_mark: **JAVA-34**: Update logback to support two log files and dynamic creation of log file path.

## Java Agent 17.0.0

2017 May

:eight_spoked_asterisk: Microsoft ProgramData requirements were implemented for the Java Agent for the Windows environment. When using the default installation locations, the configuration files, log files, and library directories are placed in the ProgramData directory, while the execution files are placed in Program Files.

:eight_spoked_asterisk: Added a new field, Alternate JVM, to the Class and JAR Operations in the Enterprise Manager which allows the user to define the full path to the binary directory of an alternate JVM.

:eight_spoked_asterisk: Added a special Environment Variable definition, JAVA_ENV_VARS, that supports global property definition.

:eight_spoked_asterisk: Added a special JVM Argument definition, JAVA_JVM_ARGS, that supports global property definition.

## Java Agent 16.1.0

2016 September

:eight_spoked_asterisk: Added a new Java Operation, JAR, which allows the user to define the execution of a JAR file (e.g., -jar program.jar). Fields to define this Operation in the Enterprise Manager include:

- Directory Location: defines the full directory path of the exe or script to execute.
- Jar File Name: defines the name of the jar file that contains the class or method to be executed.
:eight_spoked_asterisk: Added two new tabs to Java Job Details in the Enterprise Manager:

- JVM Arguments: defines the arguments that will be passed as JVM-specific (Java Virtual Machine) arguments, also known as Java VM Options.
- Environment Variables: defines the variables that allow users to specify Operating System Environment Variables.
