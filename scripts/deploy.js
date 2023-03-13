async function main() {
    const GenesysNFT = await ethers.getContractFactory("GenesysNFT");

    const myNFT = await GenesysNFT.deploy(); 
    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });