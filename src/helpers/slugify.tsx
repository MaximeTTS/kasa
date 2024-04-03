const slugify = (title: string) => {
  return title.toLowerCase().replace(/[\s\W-]+/g, '-')
}

export default slugify
