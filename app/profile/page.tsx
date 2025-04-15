"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, User, Shield, Settings, Camera } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="container max-w-4xl py-10"
    >
      <div className="flex items-center gap-6 mb-8">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-950 p-1">
              <img
                src="/placeholder-user.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0 rounded-full shadow-lg"
          >
            <Camera className="h-4 w-4" />
          </Button>
        </motion.div>
        <div>
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>
      
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full space-y-8"
      >
        <div className="sticky top-16 z-10 backdrop-blur-xl bg-background/80 pb-4">
          <TabsList className="grid grid-cols-3 gap-4 p-1">
            <TabsTrigger
              value="personal"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <User className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Settings className="h-4 w-4" />
              Preferences
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="personal">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <Card className="p-6 backdrop-blur-3xl bg-card/50">
              <form className="space-y-6">
                <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="bg-background/50 backdrop-blur-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="bg-background/50 backdrop-blur-xl"
                    />
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-background/50 backdrop-blur-xl"
                  />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="bg-background/50 backdrop-blur-xl"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  className="flex justify-end"
                >
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Save Changes
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="security">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <Card className="p-6 backdrop-blur-3xl bg-card/50">
              <form className="space-y-6">
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="currentPassword" className="text-sm font-medium">Current Password</label>
                  <Input 
                    id="currentPassword" 
                    type="password"
                    className="bg-background/50 backdrop-blur-xl"
                  />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                  <Input 
                    id="newPassword" 
                    type="password"
                    className="bg-background/50 backdrop-blur-xl"
                  />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    className="bg-background/50 backdrop-blur-xl"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  className="flex justify-end"
                >
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Update Password
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="preferences">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <Card className="p-6 backdrop-blur-3xl bg-card/50">
              <div className="space-y-6">
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Email Notifications</label>
                    <p className="text-sm text-muted-foreground">Receive email about your orders and account</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Language</label>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                  <Button variant="outline" size="sm">English</Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}