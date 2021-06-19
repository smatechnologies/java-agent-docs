# Release notes

## Java Agent 17.0.0

2017 May

### New Features

- Microsoft ProgramData requirements were implemented for the Java Agent for the Windows environment. When using the default installation locations, the configuration files, log files, and library directories are placed in the ProgramData directory, while the execution files are placed in Program Files.
- Added a new field, Alternate JVM, to the Class and JAR Operations in the Enterprise Manager which allows the user to define the full path to the binary directory of an alternate JVM.
- Added a special Environment Variable definition, JAVA_ENV_VARS, that supports global property definition.
- Added a special JVM Argument definition, JAVA_JVM_ARGS, that supports global property definition.

## Java Agent 16.1.0

2016 September

### New Features

- Added a new Java Operation, JAR, which allows the user to define the execution of a JAR file (e.g., -jar program.jar). Fields to define this Operation in the Enterprise Manager include:
  - Directory Location: defines the full directory path of the exe or script to execute.
  - Jar File Name: defines the name of the jar file that contains the class or method to be executed.
- Added two new tabs to Java Job Details in the Enterprise Manager:
  - JVM Arguments: defines the arguments that will be passed as JVM-specific (Java Virtual Machine) arguments, also known as Java VM Options.
  - Environment Variables: defines the variables that allow users to specify Operating System Environment Variables.
