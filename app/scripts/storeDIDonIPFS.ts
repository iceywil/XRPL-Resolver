import axios from "axios";

// Function to pin DIDDocument to IPFS using Pinata
async function pinFileToIPFS(didDocument) {
  const pinataApiKey = "a50075fcaa06cde562a3";
  const pinataSecretApiKey =
    "5fd4f66ada94e3b713212b57e487cb702ecff447cbe62c1ef5a58b2d2cabb58a";
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const response = await axios.post(url, didDocument, {
    headers: {
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });

  return response.data;
}