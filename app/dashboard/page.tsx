"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950">
      <Link href="#" className="flex items-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-bold">XRPL Universal Resolver</span>
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

function Identity() {
  const [did, setDid] = useState('');
  const [network, setNetwork] = useState('Mainnet');

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

  return (
    <Card className="w-full max-w-md mt-8 ml-4">
      <CardHeader>
        <CardTitle>Verify your DID</CardTitle>
        <CardDescription>Please provide the following information to verify your decentralized identity.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="did">Our DID URL</Label>
          <Input
            id="did"
            value={did}
            onChange={(e) => setDid(e.target.value)}
            placeholder="Enter your DID URL"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between space-x-4">
        <Button onClick={handleToggleNetwork}>{network}</Button>
        <div className="flex space-x-4 ml-auto">
          <Button onClick={handleClear}>Clear</Button>
          <Button>Verify</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function App() {
  return (
    <div>
      <NavBar />
      <Identity />
    </div>
  );
}
