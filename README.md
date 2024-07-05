# Node.js

This repository is going to contain the files I generate during my Node.js studies. As I study I'm updating the repository with the new information and the code.
The name of the files with the code will contain the number of the sections it is related.

## 1 - Introduction

In this section, we are going to understand the basic concepts about Node.js and how it works, getting a solid base to keep going with it.

### 1.1 => Execution:

Node.js apps can be executed through the docs or by terminal. To execute them by terminal we have to type 'node [file_name]', probably this option will be useful for debbuging and testing.

### 1.2 - First code:

Now we are going to understand how to create the first file (in this moment, the first program will be written with only one file.)

<ul>
    <li>The extension will be .js;</li>
    <li>We are going to execute it using 'node [file_name]';</li>
    <li>This code is going to be interpreted and the program is going to be executed.</li>
</ul>

### 1.3 - Importing module:

Inside Node aplications it is very commom to use modules to do some basic stuff. To start and understand it, we are going to use a module called File System, from Node. This module is used to work with files and folders and it's called a 'core module', what means that it is provided by Node itself, not being necessary to install it from other sources. At last, to import this modulo we are going to use the 'require' method, although theres is also the 'import' method.

## 2 - The basics

In this section, we are going to understand some basic concepts about Node. Beyond that, we will see some functions and prompts that will be used very frequently and some very common modules.

### 2.1 - The modules

The modules are ready parts of code that you can import to use. Normally, they execute very frequent activities, so it's better to import them than rewrite that part of code in every project you work on. To get it more organized, they are separate in three possible categories:

<ul>
    <li>Core modules: Modules provided by Node itself, you don't need to install it from other sources.</li>
    <li>Local modules: Modules developed by you, they are going to be reused and imported in your code to avoid repetition or to make it more organised.</li>
    <li>Third-party modules: These modules are going to be installed using the Node Package Manager (npm) and they are developed by other people.</li>
</ul>

### 2.2 - Export and Import

To use a module it is necessary to import it, and when it comes to local modules we are going to export them too.
There are some ways to export a file:

<ul>
    <li>
        module.exports: it generates an object where its properties are the exported modules. Although it is an old way to export it and can make the code a little bit confusing, it is still the most common way to deal with the local modules import and export.
    </li>
    <li>
        mjs extension: it is a very new option, provided by the ES6 version, mot much used in the professional life, but is useful to understand it.
    </li>
</ul>

### 2.3 - Core Modules

Now that we already know how to create our own modules, let's see how to use the modules that we can access having Node.
Those modules are ready to be used and they are useful to solve frequent problems, such as managing folders and files. To use them it is only necessary to import them in your code.

### 2.4 - Command Line Arguments

It is possible to pass arguments to Node through command lines, it means that you can give Node information this way. In the folder '2.4_cmd-line-arguments' will be a detailed explanation on how to use it and access it.

The command line arguments are very useful in the routine of a Node developer due to the fact that this tool allows you to create very powerful scripts capable of doing many different things.
