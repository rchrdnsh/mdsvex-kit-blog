<script context='module'>

  export const prerender = true;

  export async function load({ page, session }) {
    const { slug } = page.params;
    const pages = session.posts;
    const slugs = Object.fromEntries(
      pages.map((page) => [page.slug, page])
    );

    if (slug in slugs) {
      const pages = Object.fromEntries(
        await Promise.all(
          Object.entries(import.meta.glob('/src/content/*.md')).map(
            async ([path, page]) => {
              const filename = path.split('/').pop();
              const slug = filename.slice(0, -3);
              return [slug, page];
            }
          )
        )
      );

      const { default: Content } = await pages[slug]();

      return {
        props: {
          title: slugs[slug].title,
          description: slugs[slug].description,
          Content,
        },
      };
      
    } else {
      return {
        status: 404,
        error: new Error('Not found'),
      };
    };
  };
</script>

<script>
  export let title;
  export let description;
  export let Content;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class='container'>

  <div class='card'>
    <h1 class='title'>{title}</h1>
    <h2 class='description'>{description}</h2>
  </div>

  <div class='content'>
    {#key Content}
      <Content/>
    {/key}
  </div>

</div>

<style>
  .container {
    display: grid;
    row-gap: 2rem;
    justify-items: center;
  }

  .card, .content {
    border-radius: 16px;
    background-color: white;
    width: 50vw;
    padding: 2rem;
    display: grid;
    justify-items: center;
  }

  .content {
    justify-items: start;
  }
</style>