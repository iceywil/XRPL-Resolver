/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GfatLN7KikT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-white w-64 p-6 flex flex-col">
        <div className="flex items-center mb-8">
          <BookIcon className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">Course Manager</h1>
        </div>
        <nav className="flex-1 space-y-4">
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-800 rounded-md p-2" prefetch={false}>
            <LayoutGridIcon className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-800 rounded-md p-2" prefetch={false}>
            <BookOpenIcon className="h-5 w-5" />
            <span>Courses</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-800 rounded-md p-2" prefetch={false}>
            <LayersIcon className="h-5 w-5" />
            <span>Modules</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-800 rounded-md p-2" prefetch={false}>
            <ActivityIcon className="h-5 w-5" />
            <span>Activities</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-800 rounded-md p-2" prefetch={false}>
            <UsersIcon className="h-5 w-5" />
            <span>Users</span>
          </Link>
        </nav>
        <div className="mt-auto">
          <Button variant="outline" className="w-full">
            Logout
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex gap-2">
            <Button variant="outline">Create Course</Button>
            <Button variant="outline">Create Module</Button>
            <Button variant="outline">Create Activity</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Introduction to HTML, CSS, and JavaScript</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-500">Modules</div>
                  <div className="text-2xl font-bold">12</div>
                </div>
                <div>
                  <div className="text-gray-500">Activities</div>
                  <div className="text-2xl font-bold">48</div>
                </div>
                <div>
                  <div className="text-gray-500">Students</div>
                  <div className="text-2xl font-bold">120</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" color="red">
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Science</CardTitle>
              <CardDescription>Exploring data analysis and machine learning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-500">Modules</div>
                  <div className="text-2xl font-bold">8</div>
                </div>
                <div>
                  <div className="text-gray-500">Activities</div>
                  <div className="text-2xl font-bold">32</div>
                </div>
                <div>
                  <div className="text-gray-500">Students</div>
                  <div className="text-2xl font-bold">80</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" color="red">
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>Strategies and tactics for online marketing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-500">Modules</div>
                  <div className="text-2xl font-bold">10</div>
                </div>
                <div>
                  <div className="text-gray-500">Activities</div>
                  <div className="text-2xl font-bold">40</div>
                </div>
                <div>
                  <div className="text-gray-500">Students</div>
                  <div className="text-2xl font-bold">100</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" color="red">
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function LayersIcon(props) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}