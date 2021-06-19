# Executing scripts or executables

When executing scripts or executables, the Java Agent should be installed on the same system as the script or executable that it should execute. The Java Agent supports executing .exe, .com, .bat, and .sh file types. When using .com and .bat files types, there is a Windows limitation of nine arguments that can be passed to .com or .bat scripts.

When the script or executable is executed, parameters can be passed as part of the execution. The parameters that are passed to the script or executable, must be defined using either an identifier or a name and a value. If an identifier such as STRING, INTEGER, LONG and BOOLEAN is used, this is not passed as part of the execution. Otherwise, the name definition will be passed as part of the execution. The Java Agent passes the parameters to the script or executable in the order that the parameters are defined in the job definition.

:::info Example
A Java command execution c:\test\program.exe accepts multiple arguments.
:::

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
