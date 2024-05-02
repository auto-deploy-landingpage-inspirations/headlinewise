import { login } from "@/app/(auth)/login/actions";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const error = searchParams?.error;
  return (
    <div className="flex justify-center">
      <form>
        <Card className="w-[400px] shadow-none bg-fuchsia-50 border-none">
          <CardHeader>
            <CardTitle className="font-semibold text-center">Log in</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border-violet-200 focus-visible:ring-violet-700"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="bg-transparent border-violet-200 focus-visible:ring-violet-700"
                />
              </div>
              {error && (
                <div className="flex flex-col space-y-1.5 text-sm text-red-700">
                  There was an error logging in.
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col w-full align-center justify-center space-y-2">
              <Button variant="default" size="lg" formAction={login}>
                Log in
              </Button>
              <Link
                href="/"
                className={buttonVariants({ variant: "link", size: "lg" })}
              >
                &larr; Go Back
              </Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
