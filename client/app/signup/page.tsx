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

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const userData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      const user = await authService.signup(userData);
      toast({
        title: "Success",
        description: "Account created successfully",
      });
      router.push('/login');
    } catch (error) {
      toast({
        title: "Error",
        description: "Signup failed. Please try again.",
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
        description: "Account created with Google successfully",
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Google signup failed. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">
            Create an account
          </CardTitle>
          <CardDescription className="text-center text-blue-600">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AuthForm type="signup" onSubmit={handleSubmit} loading={loading} />
          <SocialAuth onGoogleSuccess={handleGoogleSuccess} />
        </CardContent>
        <CardFooter>
          <Link 
            href="/auth/login" 
            className="w-full text-center text-blue-600 hover:text-blue-700"
          >
            Already have an account? Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

