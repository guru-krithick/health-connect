/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthForm } from "@/components/auth/auth-form";
import { SocialAuth } from "@/components/auth/social-auth";
import { authService } from "@/lib/services/auth.service";
import { toast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const user = await authService.login(email, password);
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      router.push('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      toast({
        title: "Error",
        description: "Login failed. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (userData: { name: string; email: string }) => {
    try {
      const user = await authService.googleAuth(userData);
      toast({
        title: "Success",
        description: "Logged in with Google successfully",
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Google login failed. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center text-blue-600">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AuthForm type="login" onSubmit={handleSubmit} loading={loading} />
          <SocialAuth onGoogleSuccess={handleGoogleSuccess} />
        </CardContent>
        <CardFooter>
          <Link 
            href="/signup" 
            className="w-full text-center text-blue-600 hover:text-blue-700"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

