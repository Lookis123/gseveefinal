export const returnLeftPosition = (category, position) => {
  switch (category) {
    case "Οικονομία - Επιχειρηματικότητα":
      return position === "Left"
        ? "190px"
        : position === "Middle"
        ? "-50px"
        : position === "Right"
        ? "-250px"
        : ""
    case "Θεσμική Παρουσία":
      return position === "Left"
        ? "75px"
        : position === "Middle"
        ? "-115px"
        : position === "Right"
        ? "-350px"
        : ""
    case "Κατάρτιση Δεξιότητες":
      return position === "Left"
        ? "100px"
        : position === "Middle"
        ? "-125px"
        : position === "Right"
        ? "-350px"
        : ""
    case "Κοινωνική πολιτική":
      return position === "Left"
        ? "100px"
        : position === "Middle"
        ? "-160px"
        : position === "Right"
        ? "-415px"
        : ""
    case "Εργασία":
      return position === "Left"
        ? "100px"
        : position === "Middle"
        ? "-125px"
        : position === "Right"
        ? "-350px"
        : ""

    default:
      return ""
  }
}

export const returnTopPosition = (category, position) => {
  switch (category) {
    case "Οικονομία - Επιχειρηματικότητα":
      return position === "Left"
        ? "-135px"
        : position === "Middle"
        ? "-130px"
        : position === "Right"
        ? "-70px"
        : ""
    case "Θεσμική Παρουσία":
      return position === "Left"
        ? "-40px"
        : position === "Middle"
        ? "-25px"
        : position === "Right"
        ? "-360px"
        : ""
    case "Κατάρτιση Δεξιότητες":
      return position === "Left"
        ? "-155px"
        : position === "Middle"
        ? "-140px"
        : position === "Right"
        ? "-250px"
        : ""
    case "Κοινωνική πολιτική":
      return position === "Left"
        ? "-50px"
        : position === "Middle"
        ? "-10px"
        : position === "Right"
        ? "-120px"
        : ""
    case "Εργασία":
      return position === "Left"
        ? "20px"
        : position === "Middle"
        ? "-150px"
        : position === "Right"
        ? "-70px"
        : ""
    default:
      return ""
  }
}
