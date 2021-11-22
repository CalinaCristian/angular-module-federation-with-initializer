# Purpose
This is a module federation in angular demo where I try to see what happens if you have a 
root injected service that has an initialize method called in APP_INITIALIZER in the remote, and I export a module that uses that service to a host.

Behavior: The root injected service is provided in the host as well, but the initialization done in APP_INITIALIZER is not passed.

# How to run
These are two separate angular projects.

In order to start them, go to host -> npm i and npm start and do the same for remote.

