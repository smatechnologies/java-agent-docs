---
sidebar_label: 'Machine messages'
title: Java Agent machine messages
description: "Reference for all messages produced by the Java Agent during startup and job processing, including error messages and their meanings."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Java Agent machine messages

## What is it?

The Java Agent produces messages during startup and job processing. These messages appear in the job output and in the `JavaAgent.log` file. Use this reference to identify what each message means and, where applicable, what action to take.

- Use this reference when reviewing job output to understand the status of a job run
- Use this reference when troubleshooting agent startup failures or job failures caused by missing libraries or misconfiguration

## Java Agent startup messages

| Message | Description |
|--- |--- |
| `SMA Java Agent: <version>` | Displays the internal software version number associated with the Java Agent release. |
| `library directory: <directory name>` | If the `.jar` files to be loaded into the class path are defined in a directory, the directory name is displayed. |
| `Library File: <filename>` | If the `.jar` files to be loaded into the class path are defined in a file, the filename is displayed. |
| `Classpath Loading Libraries from <name>` | Indicates where the `.jar` files are being loaded from. |
| `Adding library <jar file name> to the classpath` | Indicates which `.jar` file is being loaded into the class path. |
| `Library file <jar file name> not found` | Error: the specified `.jar` file was not found. Verify the file exists at the configured library path. |
| `ERROR: Malformed URL Exception: could not load <jar file name>` | Error: the URL created to load the `.jar` file has an invalid format. Verify the library path in the configuration does not contain invalid characters. |
| `Classpath Load complete` | Indicates the class path loading is complete. |
| `MaximumNumberOfJobs Set to: <value>` | Configuration information from the `Agent.config` file indicating the maximum number of concurrent jobs supported by the agent. |
| `SocketNumberToSAM Set to: <number>` | The socket number used to communicate with OpCon. |
| `JORSSocket Set to: <number>` | The socket number used by JORS to retrieve job output. |
| `allowedIPAddress_1 Set to: <value>` | Allowed IP address 1. |
| `allowedIPAddress_2 Set to: <value>` | Allowed IP address 2. |
| `allowedIPAddress_3 Set to: <value>` | Allowed IP address 3. |
| `allowedIPAddress_4 Set to: <value>` | Allowed IP address 4. |
| `allowedIPAddress_5 Set to: <value>` | Allowed IP address 5. |
| `ConnectorName Set to: Java Agent` | Displays the name of the agent. |
| `JobStatusCheckInterval Set to: <number>` | Displays the interval in seconds between checks to determine whether a job has completed. |
| `JobStatusCheckInitialPollDelay Set to: <number>` | Displays the delay in seconds before the first status check to determine whether a job has completed. |
| `Starting Connector Java Agent` | Message displayed to indicate that the Java Agent has started. |
| `JORS Listening on port <number>` | The TCP/IP port used to listen for incoming JORS requests. |
| `Agent Listening on port <number>` | The TCP/IP port used to listen for incoming OpCon requests. |

## Java Agent job processing messages

| Message | Description |
|--- |--- |
| `Error: Invalid Operation = '<value>'` | An operation other than Class or Command was received by the agent. Verify the job definition in OpCon uses a supported operation type. |
| `Error: Class missing required definition - Class Library Name or Class Name` | Either the library name (`.jar` file) or the Java class name is missing from the requested Class operation. Verify the job definition includes both values. |
| `Error: Command missing required definition - Directory Name or Script/Exe Name` | Either the directory name or the script or executable name is missing from the requested Command operation. Verify the job definition includes both values. |
| `Executing: class <class name>.main` | The main method of the defined Java class will run. |
| `Executing: class <class name>.<method name>` | The defined method within the defined class will run. |
| `Executing: script/exe <directory name><file separator><script or executable>` | The defined script or executable in the defined directory will run. |
| `Job Error Fin: OpCon Return Code (<return code>)` | The job encountered an error condition during the run. |
| `Job Not Found: OpCon Return Code (<return code>)` | The defined class or executable was not found in the class path or directory. |
| `Job <OpCon unique jobid> Cancelled` | The job was cancelled by the Java Agent. |
| `Entry <OpCon unique jobid> not found in hashtable` | During recovery, the OpCon job was not found in the active job agent table while processing the tracking file. |
| `<timestamp>: Schedule (<schedule name>) Job (<job name>) was cancelled` | The defined job was cancelled by the Java Agent. |
| `<timestamp>: Schedule (<schedule name>) Job (<job name>) was cancelled by OpCon Kill function` | The job was cancelled by an OpCon kill command. |
| `<timestamp>: Schedule (<schedule name>) Job (<job name>) cancelled by OpCon Kill function failed, job not found` | The OpCon kill command failed because the job was not found in the active agent table. |
| `<timestamp>: Schedule (<schedule name>) Job (<job name>) Completed with Return Code (<return code>)` | Job completion message. |
| `<timestamp>: <name>` | Java Agent identification message that appears in job output. |
| `<timestamp>: Version: <agent version>` | Java Agent internal version number that appears in job output. |
| `<timestamp>: FrameWork Version: <application framework version>` | Java Application Framework identification message that appears in job output. |
| `<timestamp>: Jar File: <jar file name>` | Name of the JAR file containing the class, which appears in job output when a Class operation runs. |
| `<timestamp>: Executing Class: <class name>` | Name of the class to run, which appears in job output when a Class operation runs. |
| `<timestamp>: Method: <method name>` | Name of the method to run, which appears in job output when a Class operation runs. If the method name is omitted, it defaults to `main`. |
| `<timestamp>: Parameters: <parameters>` | Parameters passed to the method, which appears in job output when a Class operation runs. |
| `<timestamp>: Parameters: none` | Appears in job output when a Class operation runs and no parameters are supplied for the method. |
| `<timestamp>: Method <name> not found in class <name>` | Error: the method was not found in the defined class. Verify the method name in the job definition matches the class. |
| `<timestamp>: Class <name> not found in libraries` | Error: the class name was not found in the defined library. Verify the `.jar` file is loaded into the agent class path. |
| `<timestamp>: Executing Class: <class name> completed with Return Code <code>` | Completion message that appears in job output when a Class operation finishes. |
| `<timestamp>: Executable Path: <directory name>` | Appears in job output when a Command operation runs and defines the full path to the directory containing the executable or script. |
| `<timestamp>: Script/exe Name: <name>` | Appears in job output when a Command operation runs and defines the executable or script name. |
| `<timestamp>: Job Output redirected to file <filename>` | Appears in job output when a Class or Command operation runs and defines the log file used to capture the job output log. |
| `<timestamp>: Job ErrorLog redirected to file <filename>` | Appears in job output when a Class or Command operation runs and defines the error file used to capture the job error log. |
| `<timestamp>: Exception <exception>` | Appears in job output when a Class or Command operation runs and the job encounters an exception. |
| `<timestamp>: Problems creating redirected system out file <filename> Error: <error>` | Appears in job output when a Class or Command operation runs and the output redirection file cannot be created. |

## FAQs

**Where are these messages written?**
Messages appear in two places: the job output file (accessible via the View Job Output feature in OpCon) and the `JavaAgent.log` file on the agent machine.

**What does `Job Not Found: OpCon Return Code` mean?**
This means the class, method, or executable defined in the job definition was not found during the run. For Class operations, verify the `.jar` file is loaded into the class path and the class name is correct. For Command operations, verify the directory path and executable name are correct.

**What should I do if I see `Library file <jar file name> not found` at startup?**
The agent could not find the specified `.jar` file in the configured library location. Verify the file exists at the path defined in your library directory or library file. The agent will log this at startup and the affected class jobs will fail at run time.

## Glossary

**JavaAgent.log** — The log file written by the Java Agent on the agent machine. It captures all startup messages, configuration values, and job processing messages.

**Class operation** — A job operation type that runs a Java class method. It requires a JAR file name and class name (and optionally a method name and parameters).

**Command operation** — A job operation type that runs a script or executable. It requires a directory path and a file name.

**Return code** — The numeric exit code returned by a job when it completes or fails. OpCon uses the return code to determine job success or failure.
