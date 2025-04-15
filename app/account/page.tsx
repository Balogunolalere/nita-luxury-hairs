"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function AccountPage() {
  const { toast } = useToast()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Mock user data
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
  }

  // Mock order data
  const orders = [
    {
      id: "ORD-1234",
      date: "2023-06-15",
      status: "Delivered",
      total: 219.98,
      items: [
        { name: "Brazilian Body Wave", quantity: 1, price: 169.99 },
        { name: "Hair Care Kit", quantity: 1, price: 49.99 },
      ],
    },
    {
      id: "ORD-5678",
      date: "2023-05-22",
      status: "Processing",
      total: 249.99,
      items: [{ name: "Lace Front Wig", quantity: 1, price: 249.99 }],
    },
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoggedIn(true)

    toast({
      description: "Successfully logged in",
    })
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      description: "Account created successfully. Please check your email for verification.",
    })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)

    toast({
      description: "Successfully logged out",
    })
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      description: "Profile updated successfully",
    })
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      description: "Password updated successfully",
    })
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>

      {isLoggedIn ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="text-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h2 className="font-semibold">{userData.name}</h2>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
              </div>

              <Separator className="my-4" />

              <nav className="space-y-2">
                <Link href="/account" className="block p-2 rounded-md bg-primary/10 font-medium">
                  Dashboard
                </Link>
                <Link href="/account/orders" className="block p-2 rounded-md hover:bg-muted">
                  Orders
                </Link>
                <Link href="/account/wishlist" className="block p-2 rounded-md hover:bg-muted">
                  Wishlist
                </Link>
                <Link href="/account/addresses" className="block p-2 rounded-md hover:bg-muted">
                  Addresses
                </Link>
                <Link href="/account/settings" className="block p-2 rounded-md hover:bg-muted">
                  Account Settings
                </Link>
              </nav>

              <Separator className="my-4" />

              <Button variant="outline" className="w-full" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.slice(0, 2).map((order) => (
                      <div key={order.id} className="border p-4 rounded-md">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{order.id}</span>
                          <span
                            className={`text-sm ${order.status === "Delivered" ? "text-green-600" : "text-amber-600"}`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {order.date} • ${order.total.toFixed(2)}
                        </p>
                        <Button asChild variant="link" className="p-0 h-auto">
                          <Link href={`/account/orders/${order.id}`}>View Order Details</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                )}
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <Link href="/account/orders">View All Orders</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Account Details</h2>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">Name:</span>
                    <p>{userData.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Email:</span>
                    <p>{userData.email}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Phone:</span>
                    <p>{userData.phone}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Address:</span>
                    <p>
                      {userData.address}
                      <br />
                      {userData.city}, {userData.state} {userData.postalCode}
                      <br />
                      {userData.country}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <Link href="/account/settings">Edit Account Details</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              <Tabs defaultValue="profile">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="profile">Profile Information</TabsTrigger>
                  <TabsTrigger value="password">Change Password</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="p-4">
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userData.email} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue={userData.address} />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue={userData.city} />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" defaultValue={userData.state} />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" defaultValue={userData.postalCode} />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" defaultValue={userData.country} />
                      </div>
                    </div>
                    <Button type="submit">Update Profile</Button>
                  </form>
                </TabsContent>
                <TabsContent value="password" className="p-4">
                  <form onSubmit={handleUpdatePassword} className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button type="submit">Update Password</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="p-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="loginEmail">Email</Label>
                  <Input id="loginEmail" type="email" required />
                </div>
                <div>
                  <Label htmlFor="loginPassword">Password</Label>
                  <Input id="loginPassword" type="password" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="remember" className="ml-2">
                      Remember me
                    </Label>
                  </div>
                  <Button variant="link" className="p-0 h-auto">
                    Forgot password?
                  </Button>
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register" className="p-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <Label htmlFor="registerName">Full Name</Label>
                  <Input id="registerName" required />
                </div>
                <div>
                  <Label htmlFor="registerEmail">Email</Label>
                  <Input id="registerEmail" type="email" required />
                </div>
                <div>
                  <Label htmlFor="registerPassword">Password</Label>
                  <Input id="registerPassword" type="password" required />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" required />
                </div>
                <div className="flex items-center">
                  <input id="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300" required />
                  <Label htmlFor="terms" className="ml-2">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
