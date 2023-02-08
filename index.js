import loadNFTSDK from 'javascript-algorand-nft-sdk'
const nftSDK = loadNFTSDK()

// Generate Account
// const account = nftSDK.testNet.createAccount()
// console.log(account.addr)

// Mint NFT
// const nft = await nftSDK.testNet.createNFT({
// 	name: 'labi',
// 	symbol: 'LA',
// 	url: 'https://bit.ly/3iLVoA3#i',
// 	address: '27TLG73MFLKUUNOW7XJSXCIVT5PPDD5BUYVBNFU6DOCQRVCXBLYMSLCQKY',
// })
// console.log(nft)

// Update NFT Account Params
// nftSDK.testNet.updateNFT({
// 	assetId: 157747552,
// 	clawback: '27TLG73MFLKUUNOW7XJSXCIVT5PPDD5BUYVBNFU6DOCQRVCXBLYMSLCQKY',
// })