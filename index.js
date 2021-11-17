import { format } from 'date-fns'

const formatDate = format(new Date(2014, 1, 11), 'yyyy-MM-dd')

console.log(formatDate)