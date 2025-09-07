// This file simply exports the handlers from our auth.ts configuration.
// Next.js will automatically create all the necessary API routes
// like /api/auth/signin, /api/auth/signout, etc.
export { handlers as GET, handlers as POST } from "@/auth";
