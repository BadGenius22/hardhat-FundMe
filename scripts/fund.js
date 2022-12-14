const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding contract...")

    const txResponse = await fundMe.fund({
        value: ethers.utils.parseEther("1")
    })
    await txResponse.wait()
    console.log("Funded!")
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
