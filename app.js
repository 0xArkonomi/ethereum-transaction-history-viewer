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

async function getContractData() {
    const ethAddress = document.getElementById('ethAddress').value;
    try {
        const web3 = window.web3;

        // Load your Solidity smart contract ABI and address
        const contractABI = [
            // Define your contract ABI here
        ];
        const contractAddress = '0xYourContractAddress';

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Call a function on the smart contract to retrieve data
        const contractData = await contract.methods.yourFunction().call({ from: ethAddress });

        // Display the contract data
        const contractDataDisplay = document.getElementById('contractData');
        contractDataDisplay.innerHTML = `<h2>Contract Data</h2>`;
        contractDataDisplay.innerHTML += `<p>Your data: ${contractData}</p>`;
    } catch (error) {
        console.error('Error fetching contract data:', error);
        alert('Error fetching contract data. Please check the Ethereum address and contract configuration.');
    }
}

async function connectToMetaMask() {
    console.log('Connecting to MetaMask...');
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request user permission to access their Ethereum accounts
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Access to Ethereum accounts granted.');

            // Initialize web3 with the MetaMask provider
            window.web3 = new Web3(window.ethereum);

            console.log('Connected to MetaMask');
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    } else {
        console.error('MetaMask is not installed.');
    }
}

// Attach click event handler to the "Connect with MetaMask" button
document.getElementById('connectMetaMaskButton').addEventListener('click', connectToMetaMask);

// Connect to MetaMask when the page loads
window.addEventListener('load', function () {
    connectToMetaMask();
});

// Connect to Ethereum when the page loads
window.addEventListener('load', function () {
    connectToEthereum();
});

// Attach click event handler to the button
document.getElementById('getDataButton').addEventListener('click', getContractData);
