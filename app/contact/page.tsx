"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Loader2, 
  MessageSquare, 
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@nitaluxuryhairs.com",
    delay: 0.1,
    color: "from-blue-500/20 to-indigo-400/20",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-indigo-400/30",
    iconColor: "text-blue-500",
    link: "mailto:info@nitaluxuryhairs.com"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    delay: 0.2,
    color: "from-emerald-500/20 to-teal-400/20",
    hoverColor: "group-hover:from-emerald-500/30 group-hover:to-teal-400/30",
    iconColor: "text-emerald-500",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Hair Street\nBeauty City, BC 12345\nUnited States",
    delay: 0.3,
    color: "from-amber-500/20 to-orange-400/20",
    hoverColor: "group-hover:from-amber-500/30 group-hover:to-orange-400/30",
    iconColor: "text-amber-500",
    link: "https://maps.google.com/?q=123+Hair+Street+Beauty+City+BC+12345"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9am - 6pm\nSaturday: 10am - 4pm\nSunday: Closed",
    delay: 0.4,
    color: "from-purple-500/20 to-fuchsia-400/20",
    hoverColor: "group-hover:from-purple-500/30 group-hover:to-fuchsia-400/30",
    iconColor: "text-purple-500",
    link: null
  },
]

const formFields = [
  { 
    id: "name", 
    label: "Your Name", 
    type: "text", 
    placeholder: "Jane Smith",
    delay: 0.4,
    component: Input,
    validation: (value: string) => value.length > 0 ? null : "Please enter your name"
  },
  { 
    id: "email", 
    label: "Your Email", 
    type: "email", 
    placeholder: "jane@example.com",
    delay: 0.5,
    component: Input,
    validation: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Please enter a valid email"
  },
  { 
    id: "subject", 
    label: "Subject", 
    type: "text", 
    placeholder: "How can we help you?",
    delay: 0.6,
    component: Input,
    validation: (value: string) => value.length > 0 ? null : "Please enter a subject"
  },
  { 
    id: "message", 
    label: "Your Message", 
    type: "textarea", 
    placeholder: "Tell us how we can assist you...",
    delay: 0.7,
    component: Textarea,
    validation: (value: string) => value.length > 10 ? null : "Message should be at least 10 characters"
  }
]

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string | null>>({})
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" })
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })

  // Scroll animation for parallax effect
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string | null> = {}
    let isValid = true
    
    formFields.forEach(field => {
      const error = field.validation(formData[field.id as keyof typeof formData])
      errors[field.id] = error
      if (error) isValid = false
    })
    
    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Smooth scroll to first error
      const firstErrorField = Object.keys(formErrors).find(key => formErrors[key])
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.focus()
      }
      return
    }
    
    setFormState("submitting")
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState("success")
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      })
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setFormState("idle")
      }, 3000)
    } catch (error) {
      setFormState("error")
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20 overflow-x-hidden">
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <div className="container max-w-7xl pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Header with parallax effect */}
        <div 
          ref={headerRef} 
          className="relative mb-20"
        >
          <motion.div 
            style={{ y: translateY }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl opacity-40 pointer-events-none"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHeaderInView ? 1 : 0, y: isHeaderInView ? 0 : 20 }}
            transition={{ duration: 0.7 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="relative inline-flex items-center justify-center p-3 bg-primary/10 backdrop-blur-sm rounded-2xl">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="ml-2 text-sm font-medium text-foreground">Get in touch</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We'd Love to Hear<br />From You
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
            </motion.p>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - Contact info & map */}
          <div className="lg:col-span-5 space-y-10">
            {/* Contact info cards */}
            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link || undefined}
                    className={cn(
                      "group relative overflow-hidden backdrop-blur-md p-6 rounded-2xl",
                      "border border-white/10 shadow-lg transition-all duration-300",
                      "hover:shadow-xl hover:-translate-y-1",
                      item.link && "cursor-pointer"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-80 transition-all duration-300",
                      item.color,
                      item.hoverColor
                    )} />
                    
                    {/* Glass effect */}
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={cn(
                        "inline-flex items-center justify-center p-3 rounded-xl mb-4",
                        "bg-white/10 backdrop-blur-sm"
                      )}>
                        <item.icon className={cn("h-5 w-5", item.iconColor)} />
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-foreground/90">{item.title}</h3>
                      
                      <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                      
                      {item.link && (
                        <div className="mt-3 flex items-center text-sm font-medium text-primary group-hover:text-primary/80">
                          <span>View details</span>
                          <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            {/* Interactive Map */}
            <motion.div 
              ref={mapRef}
              className="relative h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: isMapInView ? 1 : 0, 
                y: isMapInView ? 0 : 40
              }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-10 pointer-events-none" />
              
              {/* Map content with parallax effect */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619544993268!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Nita Luxury Hairs Location"
                ></iframe>
                
                {/* Map overlay with button */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <motion.a
                    href="https://maps.google.com/?q=123+Hair+Street+Beauty+City+BC+12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/80 backdrop-blur-md text-foreground px-4 py-2 rounded-full shadow-lg border border-white/10 flex items-center gap-2 hover:bg-background/90 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Get directions</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Contact form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.3}>
              <motion.div 
                className="relative overflow-hidden rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Background effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur-lg opacity-30" />
                
                {/* Form container with glass morphism */}
                <div className="relative bg-card/80 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">Complete the form below and we'll respond within 24 hours.</p>
                  
                  {formState === "success" ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">We have received your message and will get back to you shortly.</p>
                      <Button
                        onClick={() => setFormState("idle")}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {formFields.map((field) => {
                        const Component = field.component;
                        return (
                          <motion.div
                            key={field.id}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: field.delay }}
                          >
                            <label 
                              htmlFor={field.id} 
                              className={cn(
                                "block text-sm font-medium mb-2 transition-colors duration-300",
                                formErrors[field.id] ? "text-destructive" : "group-focus-within:text-primary"
                              )}
                            >
                              {field.label}
                            </label>
                            
                            <Component
                              id={field.id}
                              name={field.id}
                              type={field.type !== "textarea" ? field.type : undefined}
                              value={formData[field.id as keyof typeof formData]}
                              onChange={handleChange}
                              placeholder={field.placeholder}
                              className={cn(
                                "w-full transition-all duration-300 border-muted-foreground/20",
                                "bg-background/50 backdrop-blur-md",
                                "focus:border-primary focus:ring-1 focus:ring-primary/30",
                                field.id === "message" ? "resize-none min-h-[150px]" : "",
                                formErrors[field.id] ? "border-destructive focus:border-destructive focus:ring-destructive/30" : ""
                              )}
                              required
                            />
                            
                            {formErrors[field.id] && (
                              <motion.p 
                                className="text-destructive text-sm mt-1"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                              >
                                {formErrors[field.id]}
                              </motion.p>
                            )}
                          </motion.div>
                        )
                      })}

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="pt-3"
                      >
                        <Button
                          type="submit"
                          className="w-full h-14 text-base font-medium rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                          disabled={formState === "submitting"}
                        >
                          {formState === "submitting" ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending your message...
                            </>
                          ) : formState === "error" ? (
                            <>
                              <span className="mr-2">⚠️</span>
                              Try Again
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
