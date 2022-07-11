exports.linkResolver = doc => {
  // URL for a category type
  if (doc.type === "category") {
    return `/category/${doc.uid}`
  }

  // URL for a resource type
  if (doc.type === "resource") {
    return `/resource/${doc.uid}`
  }

  // Backup for all other types
  return "/"
}
