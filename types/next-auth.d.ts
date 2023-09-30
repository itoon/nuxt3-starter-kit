declare module 'next-auth' {
  interface Session {
    user?: {
      id?: string | null
      username?: string | null
      name?: string | null
      email?: string | null
    }
    expires: Date
  }
}
