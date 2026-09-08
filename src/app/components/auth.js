import { authUid } from "drizzle-orm/supabase";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {

  providers:[
    GithubProvider({
      clientID: process.env.GITHUB_ID, 
      ClientSecret: process.env.GITHUB_SECRET,
    }),
    // more providers here.
  ],

}


export default NextAuth(authOptions)