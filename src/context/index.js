import React, { useState, useContext, useEffect } from "react"

export const CookieContext = React.createContext(null)

const CookieProvider = ({ children }) => {
  const [cookie, setCookie] = useState({
    required: true,
    functionality: false,
    preferenece: false,
    targeting: false,
    acceptAll: false,
  })

  useEffect(() => {}, [])

  const cookieSet = [
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
    {
      name: "cck3",
      source: "Κιτ αποδοχής cookies",
      duration: 451,
      description:
        "Αποθηκεύει τις προτιμήσεις σας για τα cookies τρίτων (ώστε να μην σας ζητηθούν εκ νέου)",
    },
  ]

  const setAcceptAll = b => {
    setCookie({
      ...cookie,
      acceptAll: b,
    })
  }
  return (
    <CookieContext.Provider
      value={{ cookie, setCookie, cookieSet, setAcceptAll }}
    >
      {children}
    </CookieContext.Provider>
  )
}

export const useCookieContext = () => {
  const ctx = useContext(CookieContext)
  if (ctx === undefined) {
    throw new Error(
      "useCookieContext hook must be used within a CookieProvider component"
    )
  }
  return ctx
}

export default CookieProvider
