"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar/navbar";

interface IdentityProps {
  onResultTypeChange: (resultType: string) => void;
}

interface ResultProps {
  resultType: string;
  onResultTypeChange: (resultType: string) => void;
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

  const handleVerify = () => {
    // Simulate verifying and fetching results
    onResultTypeChange('Result');
  };

  return (
    <Card className="w-full md:max-w-sm mx-auto md:mr-4 flex-grow">
      <CardHeader>
        <CardTitle>Verify your DID</CardTitle>
        <CardDescription>To prefill your DID URL according to our network, please just click on Network.</CardDescription>
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
        <Button onClick={handleToggleNetwork} className="flex-grow md:flex-grow-0">{network}</Button>
        <div className="flex space-x-4 ml-auto">
          <Button onClick={handleClear}>Clear</Button>
          <Button onClick={handleVerify}>Verify</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function Result({ resultType, onResultTypeChange }: ResultProps) {
  return (
    <Card className="w-full md:flex-grow mt-8 mx-auto md:ml-4">
      <CardHeader>
        <CardTitle>Query Result</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mt-4 min-h-[92px]">
          {resultType === 'Result' && <div>Displaying Result data...</div>}
          {resultType === 'DID Document' && <div>Displaying DID Document data...</div>}
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
    <Card className="w-full max-w-md mt-8 mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
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

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
  const [resultType, setResultType] = useState<string>('Result');

  return (
    <div className="space-y-8 px-4 md:px-12">
      <NavBar />
      <div className="flex flex-col md:flex-row items-start md:space-x-4">
        <Identity onResultTypeChange={setResultType} />
        <Result resultType={resultType} onResultTypeChange={setResultType} />
      </div>
      <Contact />
    </div>
  );
}
