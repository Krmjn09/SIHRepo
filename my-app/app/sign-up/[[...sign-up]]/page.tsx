import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"


const SignUpPage = () => {
  return (
    <SignUp
      appearance={{
        baseTheme: dark,
      }}
      path="/sign-in"
    />
  )
}

export default SignUpPage
