import { authOptions } from "@/utills/auth"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth(authOptions)