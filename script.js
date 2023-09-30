// Connect to the Ethereum network using MetaMask
async function connectToEthereum() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);
            console.log('Connected to Ethereum');
        } catch (error) {
            console.error('User denied access to Ethereum:', error);
        }
    } else {
        console.error('MetaMask is not installed.');
    }
}
