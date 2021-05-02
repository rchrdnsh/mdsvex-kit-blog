async function getMarkdown(files) {
  const all = Object.entries(files);
  return Promise.all(
    all.map(async ([path, page]) => {
      const {
        default: { render },
        metadata,
      } = await page();
      const content = render();
      const filename = path.split("/").pop();
      const slug = filename.slice(0, -3);
      return { ...metadata, filename, slug };
    })
  );
}

export async function getSession() {
  const session = {
    posts: await getMarkdown(import.meta.glob('/src/content/*.md'))
  }
  console.log('session:', session);
  return session
};