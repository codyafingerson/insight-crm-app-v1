"use client"

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import Image from "next/image";

export default function SignInForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-slate-900">
            <SignIn.Root>
                <SignIn.Step
                    name="start"
                    className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
                >
                    <header className="text-center">
                        <Image src="/images/logo.png" alt="Insight" priority={true} width={220} height={220} className="mx-auto mb-2"/>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <div className="space-y-4">
                        <Clerk.Field name="identifier" className="space-y-2">
                            <Clerk.Label className="text-sm font-medium text-slate-800">Username</Clerk.Label>
                            <Clerk.Input
                                type="text"
                                required
                                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                            />
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                        <Clerk.Field name="password" className="space-y-2">
                            <Clerk.Label className="text-sm  font-medium text-slate-800">Password</Clerk.Label>
                            <Clerk.Input
                                type="password"
                                required
                                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                            />
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                    </div>
                    <SignIn.Action
                        submit
                        className="w-full rounded-md bg-insight-blue px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-blue-400 hover:bg-blue-500 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                    >
                        Sign In
                    </SignIn.Action>
                </SignIn.Step>
            </SignIn.Root>
        </div>
  )
}