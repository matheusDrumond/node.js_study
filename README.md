# Node.js

This repository contains the files generated during my Node.js studies. I update this repository as I study, adding new information and code.

The filenames for the code will indicate the section number they correspond to.

[This study path is based in Matheus Battisti Node.js course]

## 1 - Introduction

In this section, we will cover the basic concepts of Node.js and its functionality, establishing a solid foundation for further exploration.

### 1.1 - Execution:

Node.js applications can be executed through the documentation or via the terminal. To execute them via the terminal, use `node [file_name]`. This option is particularly useful for debugging and testing purposes.

### 1.2 - First code:

Here, we will learn how to create our initial file (at this stage, our first program will consist of just one file).

- The file extension will be `.js`.
- We will execute it using `node [file_name]`.
- This code will be interpreted and executed as a program.

### 1.3 - Importing modules:

In Node applications, it is common to use modules for various tasks. To begin understanding this concept, we will utilize a core module called File System provided by Node. Core modules like this one are built into Node itself, eliminating the need for external installation. To import this module, we will use the `require` method, although there is also an `import` method available.

## 2 - The basics

In this section, we will delve into fundamental Node.js concepts, commonly used functions, prompts, and essential modules.

### 2.1 - Modules

Modules are reusable blocks of code that can be imported and utilized in your applications. They are categorized into three types:

- **Core modules:** Provided by Node itself, requiring no external installation.
- **Local modules:** Developed by you to be reused across different projects, enhancing code organization and reducing redundancy.
- **Third-party modules:** Developed by others and available via Node Package Manager (npm).

### 2.2 - Export and Import

To use a module, it must be imported, and in the case of local modules, it also needs to be exported. There are several ways to export a file:

- `module.exports`: Generates an object whose properties are the exported modules. Despite being older, this remains the most common approach for managing local module imports and exports.
- `.mjs` extension: Introduced in ES6, this is a newer option, less commonly used in professional environments but valuable for understanding modern JavaScript modules.

### 2.3 - Core Modules

Now that we understand how to create our own modules, let's explore using the modules provided by Node. These modules are ready to use and are valuable for addressing common tasks such as file and folder management.

### 2.4 - Command Line Arguments

Node.js allows passing arguments via the command line, enabling interaction with Node through input data. For detailed information on usage and access, refer to the '2.4_cmd-line-arguments' folder.

Command line arguments are indispensable in a Node developer's toolkit, empowering the creation of powerful scripts capable of diverse functionalities.

### 2.5 - Third-Party Modules

Before diving into this section, it's important to understand Node Package Manager (npm). npm comes bundled with Node.js, and you can verify its installation by typing `npm --version` in your terminal. This tool is crucial for installing, managing, and removing modules, among other functionalities. Throughout this section, npm will serve as the gateway to incorporating third-party modules into our projects.

#### -> Understanding Third-Party Modules

Apart from the modules provided by Node.js and those you develop yourself, there's another category to consider: third-party modules. These are created by other developers and are available for anyone to use in their projects.

#### -> How to Use Third-Party Modules

1. **Initialization:** Begin by initializing your project using `npm init`. This command sets up your project environment and generates a `package.json` file. This file contains project metadata, including dependencies (i.e., modules used in your project), scripts that can be executed via command line, and a project description.

2. **Installation:** To utilize a specific package, use npm to install it. The command format is `npm install <packageName>`. This action downloads and installs the package into the `node_modules` folder of your project.

3. **Usage:** Once installed, you can import the module into your project files using `require('moduleName')`. For example, `const moduleName = require('moduleName')` allows you to use functionalities provided by the third-party module within your code.

By following these steps, you can seamlessly integrate third-party modules into your Node.js projects, leveraging the extensive ecosystem of community-developed packages available through npm.
