"use client"

import { useState } from "react"
import { Truck, Package2, ArrowLeftRight, Clock, Globe2, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const features = [
  {
    icon: Package2,
    title: "Free Premium Packaging",
    description: "All orders come in our signature luxury packaging"
  },
  {
    icon: Shield,
    title: "Insured Shipping",
    description: "Full insurance coverage on all shipments"
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    description: "We ship to over 180+ countries worldwide"
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Track your order status 24/7"
  }
]

const shippingMethods = [
  {
    name: "Standard Shipping",
    time: "5-7 business days",
    cost: "Free on orders over $100",
    details: "Available for all US addresses",
    tracking: "Full tracking included",
    insurance: "Up to $200 coverage"
  },
  {
    name: "Express Shipping",
    time: "2-3 business days",
    cost: "$15",
    details: "Available for all US addresses",
    tracking: "Priority tracking",
    insurance: "Up to $500 coverage"
  },
  {
    name: "Next Day Air",
    time: "Next business day",
    cost: "$25",
    details: "Order by 2 PM EST",
    tracking: "Real-time updates",
    insurance: "Up to $500 coverage"
  },
  {
    name: "International Express",
    time: "7-14 business days",
    cost: "Calculated at checkout",
    details: "Available for most countries",
    tracking: "International tracking",
    insurance: "Up to $200 coverage"
  }
]

const internationalRates = [
  { zone: "North America", time: "5-7 days", rate: "From $20" },
  { zone: "Europe", time: "7-10 days", rate: "From $30" },
  { zone: "Asia Pacific", time: "8-12 days", rate: "From $35" },
  { zone: "Middle East", time: "10-14 days", rate: "From $40" },
  { zone: "Africa", time: "12-15 days", rate: "From $45" },
  { zone: "South America", time: "10-14 days", rate: "From $35" }
]

export default function ShippingPage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [postalCode, setPostalCode] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
            Shipping & Returns
          </h1>
          <p className="text-lg text-muted-foreground">
            Fast, secure shipping worldwide with our premium delivery service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background/50 backdrop-blur-sm border">
              <CardContent className="p-6">
                <feature.icon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Calculator */}
          <Card className="lg:col-span-1 bg-background/50 backdrop-blur-sm border">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Shipping Calculator</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal/ZIP Code</Label>
                  <Input 
                    id="postal" 
                    value={postalCode} 
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter postal code"
                  />
                </div>
                <Button className="w-full">Calculate Shipping</Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="shipping" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="shipping">Shipping Information</TabsTrigger>
                <TabsTrigger value="returns">Returns & Exchanges</TabsTrigger>
              </TabsList>

              <TabsContent value="shipping" className="space-y-6">
                <div className="prose max-w-none space-y-8">
                  {/* Domestic Shipping */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Domestic Shipping</h2>
                    <div className="grid gap-4">
                      {shippingMethods.slice(0, 3).map((method) => (
                        <Card key={method.name} className="bg-background/50">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold mb-1">{method.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{method.details}</p>
                                <div className="flex gap-4 text-sm">
                                  <span className="text-primary">{method.time}</span>
                                  <span>{method.tracking}</span>
                                </div>
                              </div>
                              <span className="font-semibold">{method.cost}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* International Shipping */}
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Region</TableHead>
                          <TableHead>Delivery Time</TableHead>
                          <TableHead className="text-right">Starting Rate</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {internationalRates.map((rate) => (
                          <TableRow key={rate.zone}>
                            <TableCell>{rate.zone}</TableCell>
                            <TableCell>{rate.time}</TableCell>
                            <TableCell className="text-right">{rate.rate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="returns" className="space-y-6">
                <div className="prose max-w-none space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Returns & Exchanges Policy</h2>
                    <div className="space-y-6">
                      <Card className="bg-background/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-4">30-Day Return Policy</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Items must be unused and in original packaging</li>
                            <li>• Return shipping is customer responsibility</li>
                            <li>• Custom orders are final sale</li>
                            <li>• Store credit available for all returns</li>
                            <li>• Free returns for defective items</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-background/50">
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-4">Return Process</h3>
                          <ol className="space-y-4 text-muted-foreground">
                            <li className="flex gap-4">
                              <span className="font-semibold text-foreground">1.</span>
                              <div>
                                <p className="font-semibold text-foreground">Initiate Return</p>
                                <p>Log into your account and select the items you wish to return</p>
                              </div>
                            </li>
                            <li className="flex gap-4">
                              <span className="font-semibold text-foreground">2.</span>
                              <div>
                                <p className="font-semibold text-foreground">Print Label</p>
                                <p>Download and print your return shipping label</p>
                              </div>
                            </li>
                            <li className="flex gap-4">
                              <span className="font-semibold text-foreground">3.</span>
                              <div>
                                <p className="font-semibold text-foreground">Pack Items</p>
                                <p>Securely pack items in original packaging</p>
                              </div>
                            </li>
                            <li className="flex gap-4">
                              <span className="font-semibold text-foreground">4.</span>
                              <div>
                                <p className="font-semibold text-foreground">Ship Return</p>
                                <p>Drop off package at authorized shipping location</p>
                              </div>
                            </li>
                          </ol>
                        </CardContent>
                      </Card>

                      <Alert>
                        <AlertDescription>
                          For hygiene reasons, we cannot accept returns on items that have been used, 
                          washed, or damaged. Please inspect your items carefully upon receipt.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-pink-500/5 border backdrop-blur-sm">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Need Help with Your Order?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our customer support team is available 24/7 to assist you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button variant="outline">
                Track Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}