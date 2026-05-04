---
sidebar_label: 'Overview'
title: Java Agent overview
description: "Overview of the Java Agent for OpCon, including what it does, use cases, and key concepts."
tags:
  - Overview
  - Automation Engineer
  - Agents
---

# Java Agent overview

## What is it?

The Java Agent is an OpCon agent that allows OpCon to schedule Java classes and scripts or programs within a Java environment. It bridges OpCon's workload automation capabilities with Java-based application logic, enabling teams to run Java classes, JAR files, and scripts as managed OpCon jobs.

- Use this agent when you need OpCon to schedule Java classes that contain business logic or batch processing routines
- Use this agent when you need to run existing scripts or executables (`.exe`, `.com`, `.bat`, `.sh`) from within a Java environment managed by OpCon
- Reduces manual intervention by allowing Java workloads to participate in OpCon schedules, dependencies, and event-driven automation
- Ensures job output and error logs are captured via JORS and accessible from the OpCon environment

The current release is **21.0.0**.

## How the Java Agent runs jobs

Each Java class, script, or executable runs as part of the Java Agent within a separate thread that terminates when the run completes.

- **Named method and non-main method classes**: The agent runs the job within a separate thread of the Java Agent JVM
- **Main method classes, scripts, and executables**: The agent runs the job within a separate thread that spawns a separate JVM for the duration of the run

Standard output and error logs are collected and appended to the job output, which is accessible from the OpCon environment using the JORS capability.

## Parameters

Parameters can be passed to Java class methods and to scripts or executables. Parameters are defined in the job definition of the Java job. The agent passes parameters to named methods using typed identifiers: `STRING`, `INTEGER`, `LONG`, and `BOOLEAN`. For main method classes and scripts, parameters are passed as command-line arguments.

## Class path and library management

For the Java Agent to run a Java class, the required library files (`.jar` files) must be loaded into the agent's class path before the job runs. The agent loads these libraries at startup from either a configured library directory or a file listing library paths. The agent monitors both sources for changes and automatically updates the class path when new libraries are added.

## FAQs

**What Java operations does the agent support?**
The agent supports three operation types: Class (run a named method or main method in a Java class), JAR (run a JAR file with `-jar`), and Command (run a script or executable such as `.exe`, `.bat`, or `.sh`).

**Does the agent support running multiple jobs at the same time?**
Yes. The `MaximumNumberOfJobs` setting in the `Agent.config` file controls how many jobs the agent can run concurrently. The default is 50.

**How do I view job output?**
Job output is available through the JORS (Job Output Retrieval System) capability in OpCon, provided the `CaptureJobOutput` setting is set to `TRUE` in the `Agent.config` file.

**Where are the library files stored?**
Library files can be stored in a configured library directory (default: `Libraries`) or listed in a file. The configuration is controlled by the `LibrariesInFile`, `LibrariesFileName`, and `LibrariesDirectory` settings in `Agent.config`.

**What happens if a required library is not found?**
The agent logs a `Library file <jar file name> not found` message during startup. The job will fail at run time if it requires a library that is not in the class path.

## Glossary

**Java Agent** — The OpCon agent component that connects OpCon to a Java environment, enabling OpCon to schedule and monitor Java classes, JAR files, scripts, and executables as jobs.

**Class path** — The list of directories and `.jar` files that the Java Virtual Machine (JVM) searches when loading Java classes. The agent manages this list at startup and updates it dynamically as libraries are added.

**JORS (Job Output Retrieval System)** — The OpCon mechanism for capturing and retrieving standard output and error logs from agent jobs. Job output is accessible from the OpCon user interface when `CaptureJobOutput` is enabled.

**Named method** — A specific method within a Java class, identified by name, that the agent calls instead of the default `main` method. Parameters are passed using typed identifiers (`STRING`, `INTEGER`, `LONG`, `BOOLEAN`).

**Agent.config** — The configuration file for the Java Agent. It controls network settings, job limits, library paths, debug options, and JORS settings.
