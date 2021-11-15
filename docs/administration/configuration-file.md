# Agent.config file configuration

The Agent.config is the Java Agent configuration file name. The configuration of the Java Agent requires setting the required properties in the Agent.config file located in the <Configuration Directory\>\\Java Agent \[CPU\]\\ directory.

:::note
The Configuration Directory is based on where you installed your programs. For more information, refer to [File Locations](https://help.smatechnologies.com/opcon/core/file-locations) in the **Concepts** online help.
:::

The following settings are critical to the operation of the Agent with OpCon:

- **MaximumNumberOfJobs**: This value determines the maximum number of jobs the Agent is allowed to process concurrently.
- **SocketNumberToSAM**: This value is used for communication between the Agent and the SMANetCom; consequently, the value for this setting and the value for the Socket Number on the Machines screen in the Enterprise Manager (EM) must match.
- **JORSSocket**: This value is used for communicating job output information with the Enterprise Manager (EM).

## General settings

The table contains the basic settings for the Java Agent.

|[General Settings]|Default|Description|
|--- |--- |--- |
|MaximumNumberOfJobs|50|Defines the maximum number of jobs the Agent can simultaneously manage. When setting the MaximumNumberOfJobs, consider the Agent machine's processor speed and memory (RAM) size. No job is processed when this setting is 0.|

## TCP/IP parameters

The table contains the network settings for the Java Agent.

|[TCP/IP Parameters]|Default|Description|
|--- |--- |--- |
|SocketNumberToSAM|17100|Defines the socket number through which the Agent and the SMANetCom communicate. This number must match the Machine's socket number defined in the Enterprise Manager. If there are multiple Agents installed on one machine, each Agent must have a unique value. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|
|AllowedIPAddress_1|ANY|Determines if communication from the SMANetCom to the Agent is restricted to one or more TCP/IP addresses. If ANY is specified, the Agent accepts communication from any TCP/IP address. If a specific TCP/IP address is defined (e.g., 126.40.90.231), the Agent only accepts communication from the specified address. The Agent refuses a connection if communication is attempted from another address. This definition enhances communication security by refusing communications from other TCP/IP addresses. If multiple SAMs are on a network, this address ensures the Agent is only accepting messages from the intended SMANetCom. This parameter is case-sensitive.|
|AllowedIPAddress_2|Blank|Same as Address_1 explanation.|
|AllowedIPAddress_3|Blank|Same as Address_1 explanation.|
|AllowedIPAddress_4|Blank|Same as Address_1 explanation.|
|AllowedIPAddress_5|Blank|Same as Address_1 explanation.|

## Process creation parameters

The table contains the process settings involved in the execution of Java Agent jobs.

|[Process Creation Parameters]|Default|Description|
|--- |--- |--- |
|CaptureJobOutput|TRUE|Enables/Disables the creation of job output files for each OpCon job. If set to TRUE, the Agent saves the output from each started job in a subdirectory (under the Agent directory) called JobOutput. The Agent saves each job's output to unique files named with the following syntax:"*OpConxps job name up to 12 chars*_*unique number*.TXT" View Job Output feature works only if this setting is TRUE.|

## Debug options

The table contains the log and trace settings for troubleshooting the Java Agent.

|[Debug Options]|Default|Description|
|--- |--- |--- |
|ConnectorDebug|OFF|Enables debug tracing in the Agent.|

:::note
This trace is helpful for troubleshooting and debugging.

If ON, the Agent enables debug tracing.

If OFF, the Agent disables debug tracing.
:::

:::danger
Do not turn this option on unless directed by SMA.
:::

## JORS settings

The table contains settings for configuring JORS for job output retrieval.

|[JORS Settings]|Default|Description|
|--- |--- |--- |
|JORSSocket|18110|Defines the socket number through which the JORS Service and the Agent communicate. The Job Output Retrieval System (JORS) uses this socket. This number must match the JORS Port Number defined in the Enterprise Manager under the Advanced Machine Settings in the Communication Settings category. If there are multiple Agents installed on one machine, each Agent's JORS Service must have a unique port. For an up-to-date list of unused ports, please refer to the Internet Assigned Numbers Authority at www.iana.org.|

:::note
The JORSSocket number needs to be set in both the Agent.config and the advanced machine setting in the EM. For more information on modifying the JORS port number, refer to Set JORS Port Number for the Machine in the Enterprise Manager online help.
:::

## Application connector settings

This table contains the application connector settings for the Java Agent.

|[Application Connector Settings]|Default|Description|
|--- |--- |--- |
|ConnectorName|Java Agent|The name of the agent. This value does not need to be changed.|
|LibrariesInFile|N|This defines if the information about the libraries that need to be loaded into the Java Agent class path are defined in a file or available in the libraries directory.Values: Y or N.|
|LibrariesFileName|Blank|Defines the full path and name of the file that contains the information about the libraries that need to be loaded into the Java Agent class path. Required if LibrariesInFile configuration is set to Y.|
|LibrariesDirectory|Libraries|The name of the directory where the libraries that need to be loaded into the Java Agent class path are located. Only enter the directory name as this will be appended to the root installation directory. Required if LibrariesInFile configuration is set to N.|
|JobStatusCheckInterval|5|The time in seconds to wait between status checks to determine if a job has completed processing.|
|JobStatusCheckInitialPollDelay|5|The time in seconds to wait before the initial status check to determine if a job has completed processing.|

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
