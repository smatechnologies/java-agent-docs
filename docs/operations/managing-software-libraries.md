# Managing software libraries

For the Java Agent to execute a Java class, the library files (.jar files) required by the class must be loaded into the class path of the Java Agent. During the Java Agent start up, the library files (.jar files) are loaded into the class path by either placing a copy of the required .jar files in a defined library directory or entering the full path and filename in a file that the agent uses to determine where the .jar files are located (refer to [Java Agent Configuration](../administration/configuration-file)).

The Java Agent includes listeners that monitor either the directory containing the .jar files or the filename containing the .jar file information for changes. When changes occur, the Java Agent will add the new information to the Java Agent class path.

When adding a new Java Job to the OpCon environment, all library files (.jar files) that the job requires must be added to the Java Agent that will execute the job before the job is released. How to add the libraries to the Java Agent is dependent on the Java Agent configuration.

If the *LibrariesDirectory* approach is being used the libraries must be copied to the defined directory. The Java Agent monitors the directory for changes and when new libraries are placed in the directory, the libraries will automatically be added to the existing class path.

If the *LibrariesFileName* approach is being used edit the file adding the full path and name of the libraries to the file. The Java Agent monitors the file for changes and when the file has been updated the file is read and the new libraries will automatically be added to the existing class path.
