
  # Note Server [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
  A project that allows a client to save and view notes from a server.
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Going Forward](#GoingForward)
  - [Questions](#Questions)
  - [License](#License)
  ## Installation
  Run 'npm i' from the command line to install dependencies.
  ## Usage
  The node application is inteneded to be hosted on a server. When a client requests the site, they are also sent all notes stored on the site. Adding or deleting ntoes client-side also updates the server allowing the current notes to be syncronized across multiple clients.

  To start the server, run node server.js from the projects directory in the command line. 
  ## Contributing
  I'm always open to bug fixes or new features. Feel free to fork the repo and send me a pull request with your code. Would also love to collaborate if you have an idea. Feel free to reach out to me at the link in the questions section below.
  ## Going Forward
  This application would benefit from security and multi-user functionality. If I revisit this project, I would add objects for individual users and store the notes on a per user basis. From there I would like to implement user validation of some sort to only allow users to view their own notes.

  Additionally, grouping notes in folders could be useful and could likely be implemented by further nesting objects to store the notes. 
  ## Questions
  If you would like to contact me or view other projects I'm working on, you can explore my repositories at [TheBluWiz](https://github.com/TheBluWiz), or email me at thebluwiz@icloud.com.
  ## License
  This project is under the MIT license attached in the repository.