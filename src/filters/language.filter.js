import * as ruRU from '@/languages/ru-RU'
import * as enUS from '@/languages/en-US'

const languages = {
  'ru-RU': { ...ruRU },
  'en-US': { ...enUS }
}

export default function lang(key) {
  const language = localStorage.getItem('lang') || 'ru-RU'
  return languages[language][key] || `[${key}] not found`
}