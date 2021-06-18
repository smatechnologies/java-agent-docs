# Executing Java classes

When executing Java classes, the Java Agent should be installed on the same system as the Java classes that it should execute. The reason for this is that the Java Agent needs access to the Java libraries (.jar files) that contain the classes that will be executed as well as any additional libraries that the class requires to execute successfully. All these libraries need to be loaded into the class path of the Java Agent before the Java class can be executed successfully (refer to [Managing Software Libraries](managing-software-libraries)).

The Java Agent can execute classes that contain either a named method or the default main method of the class.

## Named method

When a named method (not default main method) is executed, parameters can be passed to the method as part of the method execution. The parameters that are passed to the method, must be defined using an identifier and a value. The supported identifiers are STRING, INTEGER, LONG and BOOLEAN. The Java Agent passes the parameters to the method casting them to the identified type using the identifier in the order that the parameters are defined in the job definition.

:::info Example
A Java class execution has a method execute which has four parameters defined as String, String, int, boolean objects.
:::

```java
package com.sma.test;

public class execution {

public void execute(String name, String surname, int age, boolean male){

}
}
```

The parameters passed to the class would need to be defined in the Java job definition as follows:

```
STRING John
STRING Simpson
INTEGER 35
BOOLEAN True
```

The Java Agent would execute the method mapping the parameters according to the identifiers as follows:

```java
com.sma.test.execution.execute("John", "Simpson", 35, true);
```

## Main Method

When a main method is executed, parameters can be passed to the method as part of the method execution. The parameters that are passed to the method, must be defined using either an identifier or a name and a value. If an identifier such as STRING, INTEGER, LONG and BOOLEAN is used, this is not passed as part of the execution. Otherwise, the name definition will be passed as part of the execution. The Java Agent passes the parameters to the method in the order that the parameters are defined in the job definition.

:::info Example
A Java class execution has a main method and accepts multiple arguments.
:::

```java
package com.sma.test;

public class execution {

public static void main(String[] args){

}
}
```

The parameters for this would be defined in the Java job definition as follows:

```
STRING John
STRING Simpson
-age 35
-male True
```

The Java Agent would execute the main method passing the parameters as follows:

```java
com.sma.test.execution "John" "Simpson" -age 35 -male True
```
