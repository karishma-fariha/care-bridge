"use client";
import React, { useActionState } from 'react'; // Updated import
import Link from 'next/link';
import { Mail, Lock, ArrowRight, HeartPulse } from 'lucide-react';
import { loginAction, loginDemoUser } from "@/actions/auth";

const LoginPage = () => {
    // 1. Updated hook from useFormState to useActionState
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-base-200 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-base-300">
                
                {/* Left Side: Branding */}
                <div className="md:w-1/2 bg-neutral p-12 text-base-100 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter mb-12">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                                <HeartPulse size={24} />
                            </div>
                            CareBridge
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                            Welcome Back to <span className="text-primary">Quality Care.</span>
                        </h1>
                        <p className="text-base-100/60 text-lg">
                            Log in to manage your care schedule and message your caregivers.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 p-6 bg-base-100/5 rounded-[2rem] border border-base-100/10 backdrop-blur-md">
                        <p className="italic text-sm text-base-100/80">
                            "The caregivers here treated my mother like their own family."
                        </p>
                        <p className="mt-4 font-bold text-primary">— Sarah J.</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 p-8 md:p-16 bg-base-100">
                    <div className="max-w-md mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="text-3xl font-black text-neutral mb-2">Sign In</h2>
                            <p className="text-neutral/50 font-medium text-sm">
                                Use <b className="text-neutral">admin@carebridge.com</b> / <b className="text-neutral">password123</b>
                            </p>
                        </div>

                        {/* Error Message */}
                        {state?.error && (
                            <div className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-2xl text-sm mb-6 font-bold flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                                {state.error}
                            </div>
                        )}

                        <form action={formAction} className="space-y-5">
                            <div className="form-control">
                                <label className="label font-bold text-neutral text-xs uppercase">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/30" size={20} />
                                    <input 
                                        name="email"
                                        type="email" 
                                        required
                                        placeholder="admin@carebridge.com" 
                                        className="input input-bordered w-full pl-12 rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none h-14" 
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label font-bold text-neutral text-xs uppercase">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/30" size={20} />
                                    <input 
                                        name="password"
                                        type="password" 
                                        required
                                        placeholder="password123" 
                                        className="input input-bordered w-full pl-12 rounded-2xl bg-base-200 border-base-300 focus:border-primary focus:outline-none h-14" 
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isPending}
                                className="btn btn-primary w-full rounded-2xl h-14 text-lg font-black shadow-lg shadow-primary/20 disabled:opacity-70"
                            >
                                {isPending ? "Signing In..." : "Sign In"}
                            </button>
                        </form>

                        <div className="divider text-xs font-bold text-neutral/30 uppercase my-8">Or Instant Access</div>

                        <button 
                            type="button"
                            onClick={() => loginDemoUser()}
                            className="btn btn-neutral w-full rounded-2xl h-14 font-black shadow-lg shadow-neutral/10 group"
                        >
                            Log in as Demo User
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;