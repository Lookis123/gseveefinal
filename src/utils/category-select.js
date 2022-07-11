export const categorySelect = data => {
  switch (data) {
    case "Διεθνείς σχέσεις":
      return "#63C6DC"
    case "Θεσμική παρουσία":
      return "#FF8275"
    case "Οικονομία - Επιχειρηματικότητα":
      return "#63C6DC"
    case "Εργασία":
      return "#AF8373"
    case "Κοινωνική πολιτική":
      return "#3BBBA3"
    case "Κατάρτιση - Δεξιότητες":
      return "#CFA867"
    default:
      return "white"
  }
}
