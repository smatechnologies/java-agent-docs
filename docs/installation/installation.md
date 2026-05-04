---
sidebar_label: 'Installation'
title: Java Agent installation
description: "How to install, upgrade, and configure the Java Agent on Windows, including service startup and machine creation in OpCon."
tags:
  - Procedural
  - System Administrator
  - Agents
---

# Java Agent installation

## What is it?

The Java Agent installation package places the agent binaries, configuration files, and library directories on the target Windows machine and registers the agent as a Windows service. After installation, you create a machine record in OpCon to allow OpCon to communicate with the agent.

- Use this procedure when setting up the Java Agent on a new Windows machine for the first time
- Use the upgrade procedure when updating an existing Java Agent to a newer release

## Requirements

The following software must be present on the Windows machine before installation:

| Requirement | Details |
|---|---|
| Operating system | Any supported version of Windows |
| .NET Framework | Version 4.0 or later |
| Java Runtime Environment | A functional JRE must be installed separately — the Oracle JRE is no longer included in the installation package |

## New installation

A complete new installation involves three sequential tasks:

1. **Install the agent software** — run the installer and select the Java Agent component
2. **Configure service startup** — optionally adjust how the Windows service starts and which account it uses
3. **Create the machine in OpCon** — register the agent so OpCon can schedule jobs on it

### Install the agent software

To install the Java Agent, complete the following steps:

1. Log in to the Windows machine as a Local Administrator.
2. Exit all running applications on the desktop, including OpCon applications.
3. Open **setup.exe** on the root of the OpCon installation media. The **Choose Setup Language** screen displays.
4. Select the desired language and select **Next**. The **Welcome** screen displays.
5. Select **Next**. The **Select Components** screen displays.
6. Select the Java Agent option that matches your CPU type:
   - **SMA OpCon Agents > SMA OpCon Agent for Java x64** — for 64-bit systems
   - **SMA OpCon Agents > SMA OpCon Agent for Java x86** — for 32-bit systems
7. Select **Install**. The component installer opens and the **Welcome** screen displays.
8. Select **Next**. The **Destination Folder** screen displays.
9. Accept the default installation path or enter a new location, then select **Next**. The **Select Path for Output Files** screen displays.
10. Accept the default output path or enter a new location, then select **Next**. The **Setup Type** screen displays.
11. Select **Complete** or **Custom**, then select **Next**. The **Ready to Install the Program** screen displays.
12. Select **Install** to begin copying files.
13. Select **Finish** on the **InstallShield Wizard Completed** screen.

:::note
The installer writes a log file named `SMA_OpCon_Agent_for_Java_<CPU>_Install.log` to the Windows directory. Consult this file if you suspect installation problems.
:::

After installation, refer to [Configuration file](../administration/configuration-file.md) to complete the agent configuration before starting the service.

### Configure service startup

The Java Agent service defaults to **Automatic (Delayed Start)** startup under the local system account. Complete this procedure only if you need to change those defaults.

:::caution
SMA recommends keeping the service set to **Automatic (Delayed Start)**. Changing to plain **Automatic** can cause startup failures if other required services have not finished initializing.
:::

To change the service startup settings, complete the following steps:

1. Go to **Start > Control Panel > Administrative Tools** and open **Services**.
2. Open the **SMA OpCon Java Agent \<CPU\>** service. The **Properties** dialog displays with the **General** tab in focus.
3. Select the desired **Startup type**:
   - **Automatic (Delayed Start)** *(recommended)*
   - **Automatic**
   - **Manual**
   - **Disabled**
4. Select the **Log On** tab.
5. Select the account the service will use:
   - **Local System account** — select this option if the service does not need access to network directories
   - **This account** — enter a *Domain User*, *Password*, and password confirmation if the service needs access to network directories
6. Select **OK**.

### Create the machine in OpCon

Create a machine record so OpCon can communicate with the newly installed agent. If this machine was previously defined in OpCon, skip this procedure.

**Step 1 — Define the machine**

1. Open **Start > Programs > OpConxps > Enterprise Manager** and log in.
2. Open **Machines** under the **Administration** topic in the Navigation Panel.
3. Select **Add** on the **Machines** toolbar.
4. Enter the agent machine's hostname or alias in the **Name** field.
5. Optionally enter documentation notes in the **Documentation** field.
6. Select **Java** in the **Machine Type** list.
7. Enter a unique port number (for example, `3100`) in the **Socket Number** field.
8. Optionally enter an IPv4 or IPv6 address in the **IP Address** field.
9. Optionally enter the fully qualified domain name in the **Fully Qualified Domain Name** field.
10. Select **Save** on the **Machines** toolbar.

**Step 2 — Configure Java advanced settings**

1. Select **Open Advanced Settings Panel** under the **Advanced Settings** frame. The **Advanced Machine Properties** dialog displays.
2. Select the **Java Settings** tab.
3. Enter the TCP/IP address of the Java system in the **Java IP Address** field, then select **Update**.
4. Enter the communication port number in the **Java Socket Number** field, then select **Update**.
5. Select **Save**.

**Step 3 — Start communication (optional)**

1. Right-select the graphic in the **Communication Status** frame to open the menu.
2. Select **Start Communication**.
3. Select **X** next to the **Machines** tab to close the screen.

## Upgrade installation

To upgrade the Java Agent, install the new package into the same directory as the previous installation. The installer preserves your existing configuration files automatically.

## Silent mode

To install the Java Agent without user interaction, refer to [Silent Mode](https://help.smatechnologies.com/opcon/core/installation/components#silent-mode) in the **OpCon Installation** online help.

## FAQs

**Can I install the Java Agent on a 32-bit Windows system?**
Yes. Select **SMA OpCon Agent for Java x86** during component selection. For 64-bit systems, select **SMA OpCon Agent for Java x64**.

**What happens to my configuration files when I upgrade?**
The installer preserves your existing configuration files automatically when you install into the same directory as the previous installation.

**What Java Runtime Environment do I need?**
You must install a functional JRE before running the Java Agent installer. The Oracle JRE is no longer bundled and must be installed separately.

**Where is the installation log file written?**
The installer writes `SMA_OpCon_Agent_for_Java_<CPU>_Install.log` to the Windows directory. Review this file if the installation does not complete successfully.

## Glossary

**SMA OpCon Java Agent service** — The Windows service that runs the Java Agent process. It is registered during installation and controlled through Windows Services.

**Socket number** — The TCP/IP port number used for communication between the Java Agent and OpCon's SMANetCom component. The value in `Agent.config` must match the socket number on the machine record in OpCon.

**JORS (Job Output Retrieval System)** — The OpCon mechanism for capturing and retrieving job output logs from agent jobs. Requires the `JORSSocket` port to be open between the agent machine and the OpCon server.
