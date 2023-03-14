import { createClient } from 'newt-client-js'

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: import.meta.env.NEXT_PUBLIC_NEWT_API_TYPE as 'api' | 'cdn',
})
