

type UserPayload = {
    email: string
}

export const handelLogin = (email: string, password: string) => {
    const token = btoa(JSON.stringify({ email: email, exp: Date.now() + 60 * 60 * 1000 }))
    localStorage.setItem("token", token);
    console.log("Login Successful")
}

export const getUserEmail = (): string | null => {
    if (typeof window === "undefined") return null
    
    const token = localStorage.getItem("token")
    if (!token) return null
  
    try {
        const decoded = JSON.parse(atob(token))
        return decoded.email || null
    } catch (error) {
      console.error("Failed to decode token:", error)
      return null
    }
  }