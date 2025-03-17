"use client"

import type React from "react"

import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

import { signIn } from "next-auth/react"
import { toast } from "sonner"

export function AuthForm() {

  const form = useForm()

  const handleSubmit = form.handleSubmit( async (data) => {

    try {
      await signIn('email', {email: data.email, redirect: false})
      toast.success('Magic link sent.', {
        description: 'Check your email for the magic link to login'
      })
    } catch (err) {
      console.log(err)
      toast.error('Failed to send magic link.', {
        description: 'Please try again later.'
      })
    }
  })

  return (
    <Card className="border-none shadow-sm">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-xl">Sign in</CardTitle>
          <CardDescription>Enter your email to receive a magic link</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="pl-10"
                { ...form.register('email')}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" >
            Send magic link
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

