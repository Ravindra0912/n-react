1. What is package.json file? it is a configuration for npm
2.  npm manages dependencies, it is managed in package.json
3.  What is bundler? it packages app so it can be shipped to production. CRA behhind the scenes uses webpack and babel
4.  There can be two types of dependencies. dev and non-dev dependencies. Dev dependencies are required in dev phase.
5.  Significance of ^ and ~ in package.json
    1.  "^1.2.4", will upgrade to all minor versions only eg- 1.2.5, 1.3.1 etc .while "~1.2.4" will upgrade to all major future versions only, example 2.0.0, 3.0.0 etc.
6. What is package-lock.json 
   1.  package-lock.json keeps track of exact version of the dependecy being installed, while package.json might have a ^ or ~ which won't have exact version
   2.  it keeps hash so that same version is installed on local and p
7. What is Node Modules
   1. all the code that has been fetched from npm. contains data from dependencies/packages.
   2. Transitive dependecies-> for example when we installed parcel, it has it's own dependencies and those were also installed, this is called transitive dependencies and that is why node_modules have huge number of files.
8. What is npx? it is used for executing a package
9. to run parcel we can do npx parcel
10. we should not use cdn link for react instead use the npm package. easier to manage versions and avoids extra api call

## parcel does following 
    - Dev build
    - Local server
    - HMR - hot module replacement
    - File Watching algorith - written in c++
    - does caching, stores data in .parcel-cache
    - image optimization
    - minification
    - bundles files
    - compress
    - Consitent Hashing (something to read)
    - code splitting
    - differential bundling (something to read) : to support older browser etc.
    - Diagnostings
    - error handling
    - HTTPs support
    - Tree shaking : removes unused code
    - different build for dev and prod

11. remove main: App.js on package.json, we will specify entry point in command "npx parcel build index.html"
12. development(any) build is put in dist folder. 
13. after bundling code is put in dist folder and combination of dist and parcel cache is what we see hosted