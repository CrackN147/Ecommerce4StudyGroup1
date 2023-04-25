import { useContext } from "react"
import { LanguageContext } from "services/contexts/LanguageContext"
export function Home () {
  const { langs, language } = useContext(LanguageContext);
  return (
    <div>
      <h1>{langs[language].home.title}</h1>
    </div>
  )
}