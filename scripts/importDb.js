// npm run payload run scripts/importDb.js

import config from '@/payload.config'
import { readFileSync } from 'fs'
import { getPayload } from 'payload'

async function importData() {
  const rawData = readFileSync('scripts/2025-05-07 07_20_21.json', 'utf-8')
  const importData = JSON.parse(rawData)
  console.log(importData)

  const payload = await getPayload({ config })

  for (const language of importData) {
    console.log(`Creating ${language.language}`)

    try {
      const createdData = await payload.create({
        collection: 'translations',
        data: {
          language: language.language,
          isActive: true,
          languageNativeName: language.languageNativeName,
        },
      })

      console.log('Successful creation', createdData.createdAt)
    } catch (error) {
      console.error(error)
    }
  }
}

importData()
