import { get } from '@/utils/request'

export const query = async () => {
  return get(
    '/api/holiday/single/20181121?ignoreHoliday=false&app_id=mpslpfozezerwohq&app_secret=Q0JOKzdUd0tORXQvN1o1aERXVHpaZz09',
    ''
  )
}
