---
slug: '/'
sidebar_label: 'Java Agent'
---

# Getting started

The Java Agent is an OpCon agent that allows OpCon to schedule Java classes and scripts or programs within a Java environment.

The current version is **21.0.0**.

Each Java class, script, or executable is executed as part of the Java Agent within a separate thread which is terminated when the execution is complete. When executing Java classes with named methods (non-main method), the execution is performed within a separate thread of the Java Agent JVM. When executing Java classes using the main method and scripts or executables, the execution is performed within a separate thread that spawns a separate JVM for the duration of the execution. Standard output and error logs are collected and appended to the job output information which is accessible from the OpCon environment using the JORS capability.

Parameters can be passed to the Java class methods and the script or executable. The parameters are defined using the job definition of the Java job.

For the Java Agent to execute a Java class, the library files (.jar files) required by the class must be loaded into the class path of the Java Agent. During the Java Agent startup, the library files (.jar files) are loaded into the class path. The Java Agent includes listeners that monitor for changes. When changes occur, the Java Agent will add the new information to the Java Agent class path.
