require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY="423085dfc250c611e08035fcd89e8adb27b29945f53572b1073a08c5012b323f";
const RPC_URL="https://sepolia.infura.io/v3/4229270ff76a4062a0e492d0e0047fcc";

module.exports={
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{
      chainID: 11155111,
    },
    sepolia:{
      url:"https://sepolia.infura.io/v3/4229270ff76a4062a0e492d0e0047fcc",
      accounts:[`0x${PRIVATE_KEY}`],
    },
  },

  solidity:{
    version:"0.8.0",
    settings:{
      optimizer:{
        enabled:true,
        runs:200,
      },
    },
  },
};