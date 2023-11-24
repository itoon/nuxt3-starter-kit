declare module 'next-auth' {
  interface Session {
    user?: {
      id?: string | null
      name?: string | null
      email?: string | null
      // custom attributes
      username?: string | null
    }
    expires: Date
  }
}
