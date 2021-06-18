# Java Agent messages

The agent output provides various messages when processing and these messages are written to the job output as well as the JavaAgent.log file. This section provides an overview of these messages and their meanings.

## Java Agent startup messages

|Message|Description|
|--- |--- |
|SMA Java Agent: ***version***|Displays the internal software version number associated with the Java Agent release.|
|library directory: ***directory name***|If the various .jar files to be loaded into the classpath are defined in a directory, the directory name is displayed.|
|Library File: ***filename***|If the various .jar files to be loaded into the classpath are defined in a file, the filename is displayed.|
|Classpath Loading Libraries from ***name***|Indicates where the various .jar files are being loaded from.|
|Adding library ***jar file name*** to the classpath|Indicates which .jar file is being loaded into the classpath.|
|Library file ***jar file name*** not found|Error message indicating if a defined .jar file is not found.|
|ERROR: Malformed URL Exception: could not load ***jar file name***|ERROR message indicating that the URL created to load the .jar file is an invalid format.|
|Classpath Load complete|Indicates the loading of the classpath is complete.|
|MaximumNumberOfJobs Set to: ***value***|Configuration information from the Agent.config file indicating the maximum number of concurrent jobs supported by the agent.|
|SocketNumberToSAM Set to: ***number***|The socket number used to communicate with OpCon.|
|JORSSocket Set to: ***number***|The socket number used by JORS to retrieve job output.|
|allowedIPAddress_1 Set to: ***value***|Allowed IP Addresses.|
|allowedIPAddress_2 Set to: ***value***|Allowed IP Addresses.|
|allowedIPAddress_3 Set to: ***value***|Allowed IP Addresses.|
|allowedIPAddress_4 Set to: ***value***|Allowed IP Addresses.|
|allowedIPAddress_5 Set to: ***value***|Allowed IP Addresses.|
|ConnectorName Set to: Java Agent|Displays the name of the Agent.|
|JobStatusCheckInterval Set to: ***number***|Displays the value to be used between checks when determining the status of a task.|
|JobStatusCheckInitialPollDelay Set to: ***number***|Displays the value to be used before the first check when determining the status of a task.|
|Starting Connector Java Agent|Message displayed to indicate that the Java Agent has started.|
|JORS Listening on port ***number***|The TCP/IP port used to listen for incoming JORS requests.|
|Agent Listening on port ***number***|The TCP/IP port used to listen for incoming OpCon requests.|

## Java Agent task execution messages

|Message|Description|
|--- |--- |
|Error: Invalid Operation = '***value***'|An operation other than Class or Command was received by the Agent.|
|Error: Class missing required definition - Class Library Name or Class Name|Either the library name (.jar file) or the java class name is missing from the requested Class Operation.|
|Error: Command missing required definition -Directory Name or Script/Exe Nam|Either the directory name or the Script/Exe name is missing from the requested Command Operation.|
|Executing: class ***class name***.main|The main method of the defined java class will be executed.|
|Executing: class ***class name***.***method name***|The defined method name within the defined class name will be executed.|
|Executing: script/exe ***directory name******file separator******script or executable***|The defined script or executable in the defined directory will be executed.|
|Job Error Fin: OpCon Return Code (***return code***)|The job encountered an error condition while executing.|
|Job Not Found: OpCon Return Code (***return code***)|The defined definition was not found in the classpath or in the directory.|
|Job ***OpCon unique jobid*** Cancelled|Job was cancelled by the Java Agent.|
|Entry ***OpCon unique jobid*** not found in hastable|During recovery when trying to track jobs defined in the tracking file, the OpCon job was not found in the active job agent table.|
|***timestamp***: Schedule (***schedule name***) Job (***job name***) was cancelled|The defined job was cancelled by the Java Agent.|
|***timestamp***: Schedule (***schedule name***) Job (***job name) was cancelled by OpCon Kill function|Job was cancelled by an OpCon 'kill' command.|
|***timestamp***: Schedule (***schedule name***) Job (***job name***) cancelled by OpCon Kill function failed, job not found|Job cancel command by OpCon 'kill' failed as the OpCon job could not be found in the active agent table.|
|***timestamp***: Schedule (***schedule name***) Job (***job name***) Completed with Return Code (***return code***)|Job completion message.|
|***timestamp***: ***name***|Java Agent identification message which appears in job output.|
|***timestamp***: Version: ***agent version***|Java Agent internal version number which appears in job output.|
|***timestamp***: FrameWork Version: ***application framework version***|Java Application Framework identification message which appears in job output.|
|***timestamp***: Jar File: ***jar file name***|Name of the jar file containing the class which appears in the output when a Class Operation is performed.|
|***timestamp***: Executing Class: ***class name***|Name of the class to execute which appears in the output when a Class Operation is performed.|
|***timestamp***: Method: ***method name***|Name of the method to execute which appears in the output when a Class Operation is performed. If the method name is omitted, it defaults to 'main'.|
|***timestamp***: Parameters: ***parameters***|Parameters to be passed to the method which appears in the output when a Class Operation is performed.|
|***timestamp***: Parameters: none|Appears in the output when a Class Operation is performed and no parameters are supplied for the methods.|
|***timestamp***: Method ***name*** not found in class ***name***|Error message that appears in the output when the method is not found in the defined class when a Class Operation is performed.|
|***timestamp***: Class ***name*** not found in libraries|Error message that appears in the output when the class name is not found in the defined library when a Class Operation is performed.|
|***timestamp***: Executing Class: ***class name*** completed with Return Code ***code***|Completion message that appears in the output when the Class Operation is completed.|
|***timestamp***: Executable Path: ***directory name***|Appears in the output when a Command Operation is performed and defines the full path to the filename that contains the executable/script to execute.|
|***timestamp***: Script/exe Name: ***name***|Appears in the output when a Command Operation is performed and defines the executable/script to execute.|
|***timestamp***: Job Output redirected to file ***filename***|Appears in the output when a Class or Command Operation is performed and defines the log file used to capture the job output log.|
|***timestamp***: Job ErrorLog redirected to file ***filename***|Appears in the output when a Class or Command Operation is performed and defines the error file used to capture the job error log.|
|***timestamp***: Exception ***exception***|Appears in the output when a Class or Command Operation is performed and the job encounters an exception.|
|***timestamp***: Problems creating redirected system out file ***filename*** Error: ***error***|Appears in the output when a Class or Command Operation is performed and the redirection file cannot be created.|
