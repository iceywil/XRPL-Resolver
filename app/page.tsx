"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar/navbar";
import { verifyRequest } from "./requests";
import Image from 'next/image';

interface IdentityProps {
	onResultTypeChange: (resultType: string) => void;
}

interface ResultProps {
	resultType: string;
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
						<CardTitle className="text-lg">What is a DID ?
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-base">
						<div className="text-l">
							A DID or a Decentralized Identity is an approach to identify and authenticate users and entities without a centralized authority.<br />
							<br />
							With centralized identity systems, identity management is often siloed by a single authority where user identity is stored and authenticated. Centralized identity can be controlled and created by a government entity. For example, a state's department of motor vehicles controls a person's driver's license identification. Centralized identity may be as basic as a username and password created on an online service.
							<br /><br />
							In contrast, decentralized identity lets users and organizations manage and control their identity in a distributed approach. Rather than relying on a siloed identity provider, the decentralized model relies on a Web 3.0 approach, using distributed ledger technology (DLT), including blockchain, and storing information in a digital wallet.
						</div>
					</CardContent>
				</Card>
				<Card className="w-full md:flex-grow mx-auto md:ml-4">
					<div className="flex justify-center items-center h-full">
						<Image src="/DID-flow.png" alt="DID" width={600} height={200} />
					</div>
				</Card>
			</div>
			<Card className="w-full md:flex-grow mx-auto">
				<CardHeader>
					<CardTitle className="space-y-4 text-center">Start Here !</CardTitle>
				</CardHeader>
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
		onResultTypeChange('Result');
		await verifyRequest(did);
	};

	return (
		<div className="flex gap-4 h-full">
			<Card className="w-2/3 flex-grow flex flex-col">
				<CardHeader>
					<CardTitle className="text-lg">Explaination</CardTitle>
					<CardDescription>To prefill your DID URL according to our network, please just click on Network.</CardDescription>
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
						<Button onClick={handleVerify}>Verify</Button>
					</div>
				</CardFooter>
			</Card>
			<Card className="w-1/3 flex-grow h-full flex flex-col bg-gray-200">
				<CardHeader>
					<CardTitle className="text-lg">2 - Verify a DID</CardTitle>
					<CardDescription>To prefill your DID URL according to our network, please just click on Network.</CardDescription>
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
						<Button onClick={handleVerify}>Verify</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

function Result({ resultType, onResultTypeChange }: ResultProps) {
	return (
		<Card className="w-full md:flex-grow mx-auto">
			<CardHeader>
				<CardTitle className="text-lg">Query Results</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="mt-4 min-h-[92px]">
					{resultType === 'Result' && <div>Displaying Result data...</div>}
					{resultType === 'DID Document' && <div>`{`
  "id": "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736",
  "verificationMethod": [
    {
      "id": "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736#controller",
      "type": "EcdsaSecp256k1RecoveryMethod2020",
      "controller": "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736",
      "blockchainAccountId": "eip155:1:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736"
    }
  ],
  "authentication": [
    "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736#controller"
  ],
  "assertionMethod": [
    "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736#controller"
  ],
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/secp256k1recovery-2020/v2",
    "https://w3id.org/security/v3-unstable"
  ]
`}`</div>}
					{resultType === 'Resolution Metadata' && <div>Displaying Resolution Metadata data...</div>}
					{resultType === 'Document Metadata' && <div>Displaying Document Metadata data...</div>}
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

function Mint({ onResultTypeChange }: IdentityProps) {
	const [did, setDid] = useState<string>('');

	const handleClear = () => {
		setDid('');
	};

	const handleVerify = () => {
		onResultTypeChange('Result');
	};

	return (
		<div className="flex gap-4 h-full">
			<Card className="w-1/3 flex-grow h-full flex flex-col bg-gray-200">
				<CardHeader>
					<CardTitle className="text-lg">1 - Mint a DID</CardTitle>
					<CardDescription>You just need to enter your XRPL addy and click on 'mint' button :)</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4 flex-grow">
					<div className="grid gap-2">
						<Label htmlFor="did">Our address</Label>
						<Input
							id="did"
							value={did}
							onChange={(e) => setDid(e.target.value)}
							placeholder="Enter your address"
						/>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between space-x-4">
					<div className="flex space-x-4 ml-auto justify-center items-center">
						<Button onClick={handleVerify}>Mint</Button>
					</div>
				</CardFooter>
			</Card>
			<Card className="w-2/3 flex-grow flex flex-col">
				<CardHeader>
					<CardTitle className="text-lg">Explanation</CardTitle>
					<CardDescription>When minting a DID, a wallet will sign a Set DID transaction onchain that will create the DID object</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4 flex-grow">
					<div className="grid gap-2">
						<Label htmlFor="did">Our address</Label>
						<Input
							id="did"
							value={did}
							onChange={(e) => setDid(e.target.value)}
							placeholder="Enter your address"
						/>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between space-x-4">
					<div className="flex space-x-4 ml-auto justify-center items-center">
						<Button onClick={handleVerify}>Mint</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

export default function App() {
	const [resultType, setResultType] = useState<string>('Result');

	return (
		<div className="px-3/5 md:px-40 min-h-screen flex flex-col gap-4">
			<NavBar />
			<Welcome />
			<Mint onResultTypeChange={setResultType} />
			<Identity onResultTypeChange={setResultType} />
			<Result resultType={resultType} onResultTypeChange={setResultType} />
			<Contact />
		</div>
	);
}
