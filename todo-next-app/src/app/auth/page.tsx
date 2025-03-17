import { AuthForm } from "./_components/auth-form";

export default function Page() {
    return (
        <main className="flex min-h-screen items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
              <p className="mt-2 text-sm text-muted-foreground">Sign in to your account using a magic link</p>
            </div>
            <AuthForm />
          </div>
        </main>
      )
}