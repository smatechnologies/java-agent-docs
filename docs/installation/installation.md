# Installation

## Requirements

Before beginning the installation, ensure that the system requirements are met. The supported software include: any supported version of Windows with .NET Framework 4.0 installed.

:::note
The Oracle JRE prerequisite has been removed from the installation package for this product. You must have a functional Java Runtime Environment installed prior to installation for this product to work.
:::

## New installation

The Java Agent can be installed within a 32- or 64-bit Windows system. To install a new Java Agent on a Windows system, complete the procedures in this section.

### Agent installation

#### Install the Java Agent

1. Log in to the Windows machine as a Local Administrator.
2. Exit all running applications on the desktop (including OpCon applications).
3. Double-click the **setup**.exe on the root of the OpCon installation media. The **Choose Setup Language** screen displays.
4. Select the desired language for the installation screens and click **Next**. The **Welcome** screen displays.
5. Click **Next**. The **Select Components** screen displays.
6. Select the Java Agent option based on your CPU type:
   - **SMA OpCon Agents \> SMA OpCon Agent for Java x64**
   - **SMA OpCon Agents \> SMA OpCon Agent for Java x86**
7. Click **Install**. The **Welcome** screen displays.
8. Click **Next**. The **Destination Folder** screen displays.
9. Change the target location for the installation or retain the default location.
10. Click **Next**. The **Select Path for Output Files** screen displays.
11. Change the directory for the output files or retain the default location.
12. Click **Next**. The **Setup Type** screen displays.
13. Select the Setup Type: **Complete** or **Custom**.
14. Click **Next**. The **Ready to Install the Program** screen displays.
15. Click **Install**.
16. Click **Finish** on the **InstallShield Wizard Completed** screen.
17. Refer to [Java Agent Configuration](../administration/configuration-file) to configure and operate the agent.

:::note
The installation writes the log file named SMA_OpCon_Agent_for_Java_<CPU\>_Install.log to the Windows directory. Consult this file if any installation problems are suspected.
:::

### Service startup setup

By default, the Java Agent service is set for an Automatic (Delayed Start) startup and for running under the local system account. If you want to change the default settings, perform the procedure in this section.

:::caution
SMA recommends leaving the SMA OpCon Java Agent service set to Automatic (Delayed Start) to avoid potential issues at startup time while other services and programs start up.
:::

#### Set up service startup

1. Use the following menu path on the Application server: **Start \> Control Panel \> Administrative Tools**.
2. Click the **Administrative Tools** icon. The **Administrative Tools** window displays.
3. Double-click the **Services** icon. The **Services** window displays.
4. Double-click the newly installed **SMA OpCon Java Agent \<CPU\>** service. The **SMA OpCon Java Agent \<CPU\> Properties** dialog displays with the **General** tab in focus.
5. Select the **Service Startup type**:
   - **Automatic (Delayed Start)**
   - **Automatic**
   - **Manual**
   - **Disabled**
6. Click on the **Log On** tab.
7. Select one of the following two **Log on as** options for the service:
   1. **Local System account**: If the service will run as the local system account, select this option to delete the default Domain User displayed in the text box.
   2. **This account**: If the service will run as a user because it needs access to network directories, enter a *Domain User* in the text box, enter the *Password* for the Domain User, and re-enter the *Password* to confirm.
8. Click the **OK** button.

### Machine creation

When a Java Agent is installed, create a machine record with a unique Machine name and Socket number in OpCon. If the machine was previously defined in OpCon, you may skip this procedure.

#### Create the Machine in OpCon

1. Use menu path: **Start \> Programs \> OpConxps \> Enterprise Manager**. The **OpCon Login** screen displays.
2. Enter a *case-sensitive User Login ID* (e.g., ocadm) in the **Username** text box.
3. Enter the *case-sensitive password for the user* in the **Password** text box.
4. Select the **profile** in the **Profile** drop-down list.
5. Click the **Login** button to log in to the Enterprise Manager.
6. Double-click on **Machines** under the **Administration** topic in the Navigation Panel. The **Machines** screen displays.
7. Click the **Add** button on the **Machines** toolbar.
8. Enter the *official host name or alias based on the Agent machine* in the **Name** text box.
9. Enter *any relevant documentation* for this Agent machine in the **Documentation** text box.
10. Select **Java** in the **Machine Type** drop-down list.
11. Set the *value* to a unique number (e.g., 3100) in the **Socket Number** box.
12. *(Optional)* Enter the *IPv4 or IPv6 address* in the **IP Address** field.
13. *(Optional)* Enter the *name* in the **Fully Qualified Domain Name** field.
14. Click the **Save** button on the **Machines** toolbar.
15. Click **Open Advanced Settings Panel** under the **Advanced Settings** frame. The **Advanced Machine Properties** dialog displays.
16. Click the **Java Settings** tab.
17. Configure the Java IP Address for the TCP/IP address of the Java system.
18. Click **Update**.
19. Configure the Java Socket Number for the port for communication with the Java machine.
20. Click **Update**.
21. Click **Save**.
22. *(Optional)* Start communication with the machine by:
    1. Right-clicking over the graphic to enable the menu in the **Communication Status** frame.
    2. Selecting **Start Communication** from the menu.
23. Click on the **x** to the right of the **Machines** tab to close the **Machines** screen.

## Upgrade installation

To upgrade the Java Agent, simply install the new package to the same directory as the previous installation. The installation package will preserve your configuration files automatically.

## Silent mode

To learn how to install the Java Agent in silent mode, refer to [Silent Mode](https://help.smatechnologies.com/opcon/core/latest/Files/Installation/Component%20Installations.htm#Silent) in the **OpCon Installation** online help.
