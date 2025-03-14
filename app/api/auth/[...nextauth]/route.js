import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import User from "@/model/User"
import Payment from "@/model/Payment"
import connectDB from "@/db/Connectdb"


export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'github') {
        await connectDB();
        let currUser = await User.findOne({ email: user.email });

        if (!currUser) {
          let newUser = new User({
            email: user.email,
            username: user.email.split('@')[0],
          });
          await newUser.save();
        }
        return true;
      }
      return false;
    },

    async session({ session }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.name = dbUser.username;
      }
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
