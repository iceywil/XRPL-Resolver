import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <>
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

      <Card className="w-full max-w-md mt-8 mx-auto">
        <CardHeader>
          <CardTitle>Verify your DID</CardTitle>
          <CardDescription>Please provide the following information to verify your decentralized identity.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Our DID URL</Label>
            <Input id="name" placeholder="did:xrpl:rnF1piRtrWe6KbEMsWJCdfb9RjWyciAByi" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Verify</Button>
        </CardFooter>
      </Card>
    </>
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
