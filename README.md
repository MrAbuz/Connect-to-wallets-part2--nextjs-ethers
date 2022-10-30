2nd way to connect our smart contracts to Metamask: Using next.js + ethers.

Following from "https://www.youtube.com/watch?v=pdsYCkUWrgQ"

To start, git clone this, then run "yarn" to install the dependencies.
To open the project on a browser tab:

```
yarn dev
```

You have to have the "video-one-html-ethers" aswell in a folder to run a hardhat local node, so:

```
code ..
git clone https://github.com/MrAbuz/connect-to-wallets-part1--html-ethers

Not sure if we're able to git clone that "hardhat-simple-storage" repo that is inside because it bugged in github. if we can't access it, we can git clone
my "hardhat-simple-storage-fcc" from github, go to the solidity code, add a retrieve() and fallback() function (because the frontend bugs somehow if the solidity code
doesn't have those), and then in the deployments folder go to the .json file, copy the abi, paste it in this index.js instead of the abi we have here, and its ready to go!
If we doing this way, the next step you must cd to this "hardhat-simple-storage-fcc" instead of the one i'll be saying, to run the hardhat node.
```

In a 2nd terminal in the main project, cd into the "hardhat-simple-storage" file that is inside the repo you just git gloned, and run a hardhat node:

```
cd ..
cd video-one-html-ethers/
cd hardhat-simple-storage/
yarn hardhat node

```

Then in the metamask add a new network with the rpc url provided in the hardhat node with chainid: 31337.
Also, pick one private key from the ones provided in the hardhat node and import that private key to the metamask.
