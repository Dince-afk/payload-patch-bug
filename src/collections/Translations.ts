import { revalidatePath, revalidateTag } from 'next/cache'
import { CollectionConfig } from 'payload'

export const Translations: CollectionConfig = {
  slug: 'translations',
  admin: {
    pagination: {
      defaultLimit: 50,
    },
  },
  fields: [
    {
      name: 'language',
      type: 'text',
    },
    {
      name: 'languageNativeName',
      type: 'text',
    },
  ],
}
