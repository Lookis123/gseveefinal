import dayjs from "dayjs"
require("dayjs/locale/el")

const formatDate = date => {
  return dayjs(date).locale("el").format("D MMM. YYYY")
}

export default formatDate
