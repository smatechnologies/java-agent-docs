---
sidebar_label: 'Managing software libraries'
title: Managing software libraries
description: "How to add and manage Java library files (.jar files) in the Java Agent class path, including directory and file-based configuration approaches."
tags:
  - Procedural
  - System Administrator
  - Agents
---

# Managing software libraries

## What is it?

For the Java Agent to run a Java class, the required library files (`.jar` files) must be loaded into the agent's class path before the job runs. The agent loads these libraries at startup and monitors them for changes, automatically updating the class path when new libraries are added.

- Use the library directory approach when you want a simple, folder-based method of managing libraries — copy `.jar` files into the directory and the agent picks them up automatically
- Use the library file approach when you need precise control over which libraries are loaded and where they are located on the file system

During the Java Agent startup, the library files (`.jar` files) are loaded into the class path by either placing a copy of the required `.jar` files in a defined library directory or entering the full path and filename in a file that the agent uses to determine where the `.jar` files are located. For configuration details, refer to [Java Agent Configuration](../administration/configuration-file).

The Java Agent includes listeners that monitor either the directory containing the `.jar` files or the file listing the `.jar` file information for changes. When changes occur, the agent adds the new information to the class path automatically.

## Adding libraries

When adding a new Java job to the OpCon environment, all library files (`.jar` files) that the job requires must be added to the Java Agent that will run the job before the job is released.

How you add the libraries depends on the Java Agent configuration.

**If the LibrariesDirectory approach is configured:**
Copy the required `.jar` files to the defined library directory. The agent monitors the directory for changes. When new libraries are placed in the directory, they are automatically added to the existing class path.

**If the LibrariesFileName approach is configured:**
Edit the file and add the full path and name of each library. The agent monitors the file for changes. When the file is updated, the agent reads it and automatically adds the new libraries to the existing class path.

## FAQs

**Do I need to restart the Java Agent after adding a new library?**
No. The agent monitors the library directory or library file for changes. When a new `.jar` file is added to the directory or the library file is updated, the agent automatically adds the new library to the class path without requiring a restart.

**How do I know which approach my agent uses?**
Check the `LibrariesInFile` setting in the `Agent.config` file. If it is set to `N`, the agent uses the directory approach (`LibrariesDirectory`). If it is set to `Y`, the agent uses the file approach (`LibrariesFileName`).

**What happens if a required library is missing when a job runs?**
The agent logs a `Library file <jar file name> not found` message during startup, or logs `Class <name> not found in libraries` at run time. The job fails. Add the missing `.jar` file to the configured library directory or library file and verify it appears in the agent's class path before releasing the job.

**Can I use both the directory and file approaches at the same time?**
No. The `LibrariesInFile` setting selects one approach. Set it to `N` to use the directory approach or `Y` to use the file approach.

## Glossary

**Class path** — The list of directories and `.jar` files that the JVM searches when loading Java classes. The Java Agent builds and maintains this list from the configured library source at startup and updates it dynamically as new libraries are detected.

**LibrariesDirectory** — The `Agent.config` setting that defines the directory where `.jar` files are stored when using the directory approach. Only the directory name is entered — it is appended to the root installation directory.

**LibrariesFileName** — The `Agent.config` setting that defines the full path and name of the file listing library paths when using the file approach. Required when `LibrariesInFile` is set to `Y`.

**LibrariesInFile** — The `Agent.config` setting that controls which library loading approach the agent uses. `N` uses the directory approach; `Y` uses the file approach.
