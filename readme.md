# docker-node
---
Sample application to demonstrate debugging a Node application running within a Docker container

clone: 

    `git clone https://github.com/serdar/docker-node.git`

build:

    `docker build . -t docker-node`

run:

    `docker run -p 90:3000 -p 9229:9229 --name nomnom  docker-node`

Launch.json file in VS Code to attach (create a new "project" to run this in):

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "port": 9229,
            "name": "Attach to Node (Docker)",
            "protocol": "inspector",
            "remoteRoot": "/app",
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```
