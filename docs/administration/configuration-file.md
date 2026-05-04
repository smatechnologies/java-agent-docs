---
sidebar_label: 'Configuration file'
title: Java Agent configuration file
description: "Reference for all settings in the Agent.config file, including network, job limits, debug options, JORS, and library configuration."
tags:
  - Reference
  - System Administrator
  - Agents
---

# Agent.config file configuration

## What is it?

The `Agent.config` file is the Java Agent configuration file. It controls how the agent communicates with OpCon, how many jobs it runs concurrently, where it finds Java libraries, and how it captures job output.

- Use this reference when setting up the agent for the first time to configure the required network and job settings
- Use this reference when troubleshooting connectivity or job output issues to verify that settings match the values defined in OpCon

The configuration of the Java Agent requires setting the required properties in the `Agent.config` file located in the `<Configuration Directory>\Java Agent [CPU]\` directory.

:::note
The Configuration Directory is based on where you installed your programs. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

The following settings are critical to the operation of the agent with OpCon:

- **MaximumNumberOfJobs**: Determines the maximum number of jobs the agent is allowed to process concurrently
- **SocketNumberToSAM**: Used for communication between the agent and SMANetCom; this value must match the socket number on the Machines screen in the Enterprise Manager
- **JORSSocket**: Used for communicating job output information with the Enterprise Manager

## General settings

The table contains the basic settings for the Java Agent.

| [General Settings] | Default | Description |
|--- |--- |--- |
| MaximumNumberOfJobs | 50 | Defines the maximum number of jobs the agent can simultaneously manage. When setting the MaximumNumberOfJobs, consider the agent machine's processor speed and memory (RAM) size. No job is processed when this setting is 0. |

## TCP/IP parameters

The table contains the network settings for the Java Agent.

| [TCP/IP Parameters] | Default | Description |
|--- |--- |--- |
| SocketNumberToSAM | 17100 | Defines the socket number through which the agent and SMANetCom communicate. This number must match the machine's socket number defined in the Enterprise Manager. If there are multiple agents installed on one machine, each agent must have a unique value. For an up-to-date list of unused ports, refer to the Internet Assigned Numbers Authority at www.iana.org. |
| AllowedIPAddress_1 | ANY | Determines if communication from SMANetCom to the agent is restricted to one or more TCP/IP addresses. If ANY is specified, the agent accepts communication from any TCP/IP address. If a specific TCP/IP address is defined (for example, `126.40.90.231`), the agent only accepts communication from the specified address. The agent refuses a connection if communication is attempted from another address. This definition enhances communication security by refusing communications from other TCP/IP addresses. If multiple SAMs are on a network, this address ensures the agent only accepts messages from the intended SMANetCom. This parameter is case-sensitive. |
| AllowedIPAddress_2 | Blank | Same as AllowedIPAddress_1. |
| AllowedIPAddress_3 | Blank | Same as AllowedIPAddress_1. |
| AllowedIPAddress_4 | Blank | Same as AllowedIPAddress_1. |
| AllowedIPAddress_5 | Blank | Same as AllowedIPAddress_1. |

## Process creation parameters

The table contains the process settings involved in running Java Agent jobs.

| [Process Creation Parameters] | Default | Description |
|--- |--- |--- |
| CaptureJobOutput | TRUE | Enables or disables the creation of job output files for each OpCon job. If set to `TRUE`, the agent saves the output from each started job in a subdirectory (under the agent directory) called `JobOutput`. The agent saves each job's output to unique files named with the syntax: `<OpConxps job name up to 12 chars>_<unique number>.TXT`. The View Job Output feature works only if this setting is `TRUE`. |

## Debug options

The table contains the log and trace settings for troubleshooting the Java Agent.

| [Debug Options] | Default | Description |
|--- |--- |--- |
| ConnectorDebug | OFF | Enables debug tracing in the agent. |

:::note
This trace is helpful for troubleshooting and debugging.

If `ON`, the agent enables debug tracing.

If `OFF`, the agent disables debug tracing.
:::

:::danger
Do not turn this option on unless directed by SMA.
:::

## JORS settings

The table contains settings for configuring JORS for job output retrieval.

| [JORS Settings] | Default | Description |
|--- |--- |--- |
| JORSSocket | 18110 | Defines the socket number through which the JORS service and the agent communicate. The Job Output Retrieval System (JORS) uses this socket. This number must match the JORS Port Number defined in the Enterprise Manager under the Advanced Machine Settings in the Communication Settings category. If there are multiple agents installed on one machine, each agent's JORS service must have a unique port. For an up-to-date list of unused ports, refer to the Internet Assigned Numbers Authority at www.iana.org. |

:::note
The JORSSocket number needs to be set in both the `Agent.config` and the advanced machine setting in the Enterprise Manager. For more information on modifying the JORS port number, refer to Set JORS Port Number for the Machine in the Enterprise Manager online help.
:::

## Application connector settings

This table contains the application connector settings for the Java Agent.

| [Application Connector Settings] | Default | Description |
|--- |--- |--- |
| ConnectorName | Java Agent | The name of the agent. This value does not need to be changed. |
| LibrariesInFile | N | Defines if the information about the libraries to be loaded into the Java Agent class path is defined in a file or available in the libraries directory. Values: `Y` or `N`. |
| LibrariesFileName | Blank | Defines the full path and name of the file that contains the information about the libraries to be loaded into the Java Agent class path. Required if `LibrariesInFile` is set to `Y`. |
| LibrariesDirectory | Libraries | The name of the directory where the libraries to be loaded into the Java Agent class path are located. Enter only the directory name — it is appended to the root installation directory. Required if `LibrariesInFile` is set to `N`. |
| JobStatusCheckInterval | 5 | The time in seconds to wait between status checks to determine if a job has completed processing. |
| JobStatusCheckInitialPollDelay | 5 | The time in seconds to wait before the initial status check to determine if a job has completed processing. |

## Example Agent.config

```
[General Settings]

MaximumNumberOfJobs=50

 

[TCP/IP Parameters]

SocketNumberToSAM=17100

AllowedIPAddress_1=ANY

AllowedIPAddress_2=

AllowedIPAddress_3=

AllowedIPAddress_4=

AllowedIPAddress_5=

 

[Process Creation Parameters]

CaptureJobOutput=TRUE # This MUST be either TRUE or FALSE

 

[Debug Options]

ConnectorDebug=OFF

 

[JORS Settings]

JORSSocket=17110

 

[Application Connection Settings]

ConnectorName=Java Agent

LibrariesInFile=N

LibrariesFileName=

LibrariesDirectory=libraries

JobStatusCheckInterval=5

JobStatusCheckInitialPollDelay=5
```

## FAQs

**What happens if SocketNumberToSAM does not match the socket number in OpCon?**
The agent and OpCon will not be able to communicate. Jobs will not start, and the machine will show as not connected in the Enterprise Manager. Ensure the value in `Agent.config` matches the socket number on the machine record in OpCon.

**Why is job output not appearing in the View Job Output screen?**
The `CaptureJobOutput` setting must be set to `TRUE`. If it is set to `FALSE`, the agent does not write job output files and the View Job Output feature has no data to display.

**Can I allow connections from multiple specific IP addresses?**
Yes. Use `AllowedIPAddress_1` through `AllowedIPAddress_5` to define up to five specific IP addresses. If you need unrestricted access, set `AllowedIPAddress_1` to `ANY`.

**What does MaximumNumberOfJobs = 0 do?**
Setting `MaximumNumberOfJobs` to `0` prevents the agent from processing any jobs. Set this to `0` only if you want to temporarily disable job processing on the agent.

## Glossary

**Agent.config** — The configuration file for the Java Agent. It is located in the `<Configuration Directory>\Java Agent [CPU]\` directory and controls all agent behavior, including network communication, job limits, library loading, and debug tracing.

**SMANetCom** — The OpCon network communications component that sends job start, status check, and stop requests to agents. The `SocketNumberToSAM` value in `Agent.config` must match the socket number configured in OpCon for this communication to work.

**JORS (Job Output Retrieval System)** — The OpCon mechanism for retrieving standard output and error logs from agent jobs after they complete. The `JORSSocket` port must be open between the agent and the OpCon server.

**CaptureJobOutput** — The `Agent.config` setting that controls whether job output files are written to the `JobOutput` subdirectory. Must be `TRUE` for the View Job Output feature to work.
