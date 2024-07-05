# Node.js

This repository contains the files generated during my Node.js studies. I update this repository as I study, adding new information and code.

The filenames for the code will indicate the section number they correspond to.

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
