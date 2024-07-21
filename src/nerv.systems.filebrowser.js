#!@GJS@ -m
import {exit, programArgs} from 'system';

// Initialize the package
imports.package.init({
    name: '@PACKAGE_NAME@',
    version: '@PACKAGE_VERSION@',
    prefix: '@PREFIX@',
    libdir: '@LIBDIR@',
});

// Import the main module and run the main function
const module = await import('resource:///nerv/systems/filebrowser/js/main.js');
const exitCode = await module.main(programArgs);
exit(exitCode);
