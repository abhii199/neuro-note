import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-lg font-semibold text-foreground dark:text-foreground">
            Create an account
          </h3>
          <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Enter your credentials to create your account.
          </p>
          <div className="border border-muted-foreground/10 dark:border-muted-foreground/20 rounded-lg p-6 mt-6 shadow-lg shadow-white/10">
            <form action="#" method="post" className="mt-6 space-y-4">
            <div>
              <Label
                htmlFor="email-login-03"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Username
              </Label>
              <Input
                type="text"
                id="username-login-03"
                name="username-login-03"
                placeholder="username"
                autoComplete="username"
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="email-login-03"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email-login-03"
                name="email-login-03"
                autoComplete="email"
                placeholder="abc@email.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="password-login-03"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Password
              </Label>
              <Input
                type="password"
                id="password-login-03"
                name="password-login-03"
                autoComplete="password"
                placeholder="**************"
                className="mt-2"
              />
            </div>
            <Button type="submit" className="mt-4 w-full py-2 font-medium">
              Sign up
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground dark:text-muted-foreground">
            By signing in, you agree to our{" "}
            <a href="/tos" className="underline underline-offset-4">
              terms of service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-4">
              privacy policy
            </a>
            .
          </p>
          </div>

          <p className="mt-6 text-sm text-muted-foreground dark:text-muted-foreground text-center">
            Already have an Account?{" "}
            <a
              href="/signin"
              className="font-medium text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90"
            >
              SignIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp