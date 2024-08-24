import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const SignInPage = () => {
  return <SignIn path="/sign-in" appearance={{ baseTheme: dark }} />
}

export default SignInPage
