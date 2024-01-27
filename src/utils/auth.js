import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
// import Email from "next-auth/providers/email";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "../app/api/auth/lib/mongodb/client";
import connect from "../utils/db";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: "credentials",
      username: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({
            username: credentials.username,
          });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Identifiants incorrects!");
            }
          } else {
            throw new Error("Utilisateur introuvable!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    //   Email({
    //     server: {
    //       host: process.env.SMTP_HOST,
    //       port: Number(process.env.SMTP_PORT),
    //       auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASSWORD,
    //       },
    //     },
    //     from: process.env.EMAIL_FROM,
    //   }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.image = token.image;
      }
      return session;
    },
  },
  pages: {
    error: "/connexion",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
