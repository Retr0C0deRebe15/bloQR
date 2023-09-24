let acc="";
async function connectWallet(){
// Check if web3 is available
if (typeof window.ethereum !== 'undefined') {
    // Use the browser injected Ethereum provider
    web3 = new Web3(window.ethereum);
    // Request access to the user's MetaMask account
    await window.ethereum.enable();
    // Get the user's accounts
    const acVar= await web3.eth.getAccounts();
    
     document.getElementById('log').innerHTML="Connected to wallet address: "+acVar[0];
     document.getElementById('generateDiv').style.display="block";
    acc=acVar[0];

} else {
    // If web3 is not available, give instructions to install MetaMask
    alert('Please install MetaMask to connect with the Ethereum network');
}
}


async function generate(){
    var urlInputVar=document.getElementById("urlInput").value;
    var obj={
        "userAddress":acc,
        "qrData":urlInputVar
    };
    console.log(obj);

}
