'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar/navbar";
import confetti from "canvas-confetti";
import { ConfettiButton } from "@/components/confetti";
import Image from 'next/image';
import SiteFooter from '@/components/footer';

interface IdentityProps {
  onResultTypeChange: (resultType: string) => void;
}

export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="relative">
      <Button onClick={handleClick}>Start Here</Button>
    </div>
  );
}

interface ResultProps {
  resultType: string;
  resultData?: string; 
  onResultTypeChange: (resultType: string) => void;
}

function Welcome() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="w-full md:flex-grow mx-auto">
        <CardHeader>
          <CardTitle className="space-y-4 text-center">Welcome to XRPL Resolver !</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-base text-center">
            The ToolBox every developer needs ! You can learn everything about DID and how to implement it on the XRP Ledger ecosystem.
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
        <Card className="w-full md:flex-grow mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">What is a DID ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base">
            <div className="text-l">
              A DID or a Decentralized Identity is an approach to identify and authenticate users and entities without a centralized authority.
              <a href="https://www.w3.org/TR/did-core/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Learn more about it</a>
              <br /><br />
              With centralized identity systems, identity management is often siloed by a single authority where user identity is stored and authenticated. Centralized identity can be controlled and created by a government entity. For example, a state's department of motor vehicles controls a person's driver's license identification. Centralized identity may be as basic as a username and password created on an online service.
              <a href="https://www.shareid.ai/blog/centralized-vs-decentralized-identity#:~:text=Decentralized%20identity%20models%20offer%20several,models%20also%20have%20some%20drawbacks." target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Learn more about it</a>
              <br /><br />
              In contrast, decentralized identity lets users and organizations manage and control their identity in a distributed approach. Rather than relying on a siloed identity provider, the decentralized model relies on a Web 3.0 approach, using distributed ledger technology (DLT), including blockchain, and storing information in a digital wallet.
              <a href="https://www.pingidentity.com/en/resources/blog/post/blockchain-sidechains-decentraized-identity.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Learn more about it</a>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:flex-grow mx-auto md:ml-4">
          <div className="flex justify-center items-center h-full">
            <Image src="/DID-flow.png" alt="DID" width={600} height={200} />
          </div>
        </Card>
      </div>
      <Card className="w-full md:flex-grow mx-auto p-4">
        <div className="flex justify-center py-4 text-lg">
          <ConfettiFireworks />
        </div>
      </Card>
    </div>
  );
}

function Identity({ onResultTypeChange }: IdentityProps) {
  const [did, setDid] = useState<string>('');
  const [network, setNetwork] = useState<string>('Mainnet');

  const handleToggleNetwork = () => {
    if (network === 'Mainnet') {
      setNetwork('EVM');
      setDid('did:ethr:xrpl:');
    } else {
      setNetwork('Mainnet');
      setDid('did:xrpl:');
    }
  };

  const handleClear = () => {
    setDid('');
  };

  const handleVerify = async () => {
    //const result = await verifyRequest(did);
    const result = "aaa";
    onResultTypeChange('Result');
  };

  return (
    <div className="flex gap-4 h-full">
      
      <Card className="w-2/3 flex-grow flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg">How to Resolve a DID</CardTitle>
          <CardContent className="space-y-4 text-base">
            <div className="text-l">
              <br /><br />
              Resolving a DID retrieves its DID document, containing keys and service endpoints. The resolver interprets the DID, accesses the relevant ledger, and provides the document, essential for secure identity verification in decentralized systems.
              <br /><br />
              Explore more on Universal Resolver. <a href="https://dev.uniresolver.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Learn more</a>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
       
      <Card className="w-1/3 flex-grow h-full flex flex-col bg-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">2 - Resolve a DID</CardTitle>
          <CardDescription>To prefill your DID URL according to your network, please just click on Network. We support XRPL Mainnet and XRPL EVM Sidechain.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="did">Your DID URL</Label>
            <Input
              id="did"
              value={did}
              onChange={(e) => setDid(e.target.value)}
              placeholder="Enter your DID URL"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <Button onClick={handleToggleNetwork} className="flex-grow md:flex-grow-0">{network}</Button>
          <div className="flex space-x-4 ml-auto">
            <Button onClick={handleClear}>Clear</Button>
            <Button onClick={handleVerify}>Resolve</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function Result({ resultType, resultData, onResultTypeChange }: ResultProps) {
  const didDocument = {
    id: "did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD",
    verificationMethod: [
      {
        id: "did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD#controller",
        type: "EcdsaSecp256k1RecoveryMethod2020",
        controller: "did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD",
      }
    ],
    authentication: [
      "did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD#controller"
    ],
    assertionMethod: [
      "did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD#controller"
    ],
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/secp256k1recovery-2020/v2",
      "https://w3id.org/security/v3-unstable"
    ]
  };
  const resolutionMetadata = {
    "contentType": "application/did+ld+json",
    "pattern": "^(did:xrpl:.+)$",
    "driverUrl": "http://uni-resolver-driver-did-uport:8081/1.0/identifiers/",
    "duration": 114,
    "did": {
      "didString": "did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD",
      "method": "xrpl"
    }
  }

  const docMetadata = {
    "name": "Amaury",
    "type": "Human",
    "planet": "Earth"
  };
  return (
    <Card className="w-full md:flex-grow mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Query Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mt-4 min-h-[92px]">
          {resultType === 'Result' && <div>{resultData}</div>}
          {resultType === 'DID Document' && (<pre>{JSON.stringify(didDocument, null, 2)}</pre>)}
          {resultType === 'Resolution Metadata' && (<pre>{JSON.stringify(resolutionMetadata, null, 2)}</pre>)}
          {resultType === 'Document Metadata' && (<pre>{JSON.stringify(docMetadata, null, 2)}</pre>)}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap space-x-4 ml-auto justify-end">
        <Button onClick={() => onResultTypeChange('Result')} className="w-full sm:w-auto mb-2 sm:mb-0">Result</Button>
        <Button onClick={() => onResultTypeChange('DID Document')} className="w-full sm:w-auto mb-2 sm:mb-0">DID Document</Button>
        <Button onClick={() => onResultTypeChange('Resolution Metadata')} className="w-full sm:w-auto mb-2 sm:mb-0">Resolution Metadata</Button>
        <Button onClick={() => onResultTypeChange('Document Metadata')} className="w-full sm:w-auto">Document Metadata</Button>
      </CardFooter>
    </Card>
  );
}

function Contact() {
  return (
    <Card className="w-full md:flex-grow mx-auto h-full">
      <CardHeader>
        <CardTitle className="text-lg">Get in touch !</CardTitle>
        <CardDescription>
          Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Mint({ onResultTypeChange }) {
  const [did, setDid] = useState('did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD');
  const [name, setName] = useState('Amaury');
  const [type, setType] = useState('Human');
  const [planet, setPlanet] = useState('Earth');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleClear = () => {
    setDid('');
    setName('');
    setType('');
    setPlanet('');
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 4000);
    }, 4000);
  };

  return (
    <div className="flex gap-4 h-full">
      <Card className="w-1/3 flex-grow h-full flex flex-col bg-gray-200">
        <CardHeader>
          <CardTitle className="text-lg">1 - Create a DID</CardTitle>
          <CardDescription>Enter the metadata fields and click on the 'Mint' button :)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow">
          <div className="grid gap-2">
            <Label htmlFor="did">DID URL</Label>
            <Input
              id="did"
              value={did}
              onChange={(e) => setDid(e.target.value)}
              placeholder="did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Amaury"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Type</Label>
            <Input
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Human"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="planet">Planet</Label>
            <Input
              id="planet"
              value={planet}
              onChange={(e) => setPlanet(e.target.value)}
              placeholder="Earth"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <div className="flex space-x-4 ml-auto justify-center items-center">
            <Button onClick={handleClear}>Clear</Button>
            <Button onClick={handleConfirm} disabled={loading}>
              {loading ? 'Loading...' : 'Confirm'}
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="w-2/3 flex-grow flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg">Understanding Minting of DIDs and Credentials</CardTitle>
          <CardContent className="space-y-4 text-base">
            <div className="text-l">
              <br /><br />
              "Minting" a DID (Decentralized Identifier) and a credential in the context of digital identity refers to the process of creating and issuing these digital assets on a blockchain or another form of distributed ledger technology (DLT). Here’s what each term involves:
              <br /><br />
              <strong>Minting a DID:</strong> A DID is a unique identifier for a digital entity, such as a person or organization, allowing them to prove control over their identity without central authority. It involves generating a key pair, with the public key attached to the DID and recorded on a blockchain, making the DID persistent and verifiable.
              <br /><br />
              <strong>Minting a Credential:</strong> In decentralized identity systems, a credential is information related to an identity, like a qualification. Issuing a credential involves the issuer signing a digital claim with their private key, verifying its authenticity. This signed credential can be stored on a blockchain, giving the owner control over who can access it, thus maintaining privacy.
              <br /><br />
              <a href="https://www.w3.org/TR/did-core/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Learn more about DIDs and Verifiable Credentials at W3C</a>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          Your DID is minted. Check it <a href="https://testnet.xrpl.org/accounts/rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD/assets" target="_blank" className="underline">here</a>.
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [resultType, setResultType] = useState<string>('Result');
  const [resultData, setResultData] = useState<string>('');

  const handleResultTypeChange = (type: string, data?: string) => {
    setResultType(type);
    setResultData("DID URL : did:xrpl:rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD"+"\n" +
      "| method : xrpl\n" +
      "| method-specific-id : rNsD97gAPq9V3DRBfWkV32N6ihbF5oWBrD\n");
  };

  return (
    <div className="px-3/5 md:px-40 min-h-screen flex flex-col gap-4 bg-gray-800">
      <NavBar />
      <Welcome />
      <Mint onResultTypeChange={handleResultTypeChange} />
      <Identity onResultTypeChange={handleResultTypeChange} />
      <Result resultType={resultType} resultData={resultData} onResultTypeChange={handleResultTypeChange} />
      <Contact />
      <SiteFooter/>
    </div>
  );
}
