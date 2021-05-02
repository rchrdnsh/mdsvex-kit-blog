<script context='module'>
  export const prerender = true;
  export function load({ session }) {
    return {
      props: {
        posts: session.posts
      },
    };
  }
</script>

<script>
  export let posts;
</script>

<div class='content'>
  <h1>Blog Posts</h1>
  <div class='grid'>
    {#each posts as {slug, title, description}}
      <a href={`/blog/${slug}`} sveltekit:prefetch class='card'>
        <h1 class='title'>{title}</h1>
        <p class='description'>{description}</p>
      </a>
    {/each}
  </div>
</div>

<style>
	.content {
    display: grid;
    place-content: center;
	}

  .grid {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
  }

  .card {
    padding: 1rem;
    border-radius: 16px;
    display: grid;
    justify-content: start;
    background-color: #ff3e00;
    min-width: 12rem;
    transition: transform 100ms;
  }

  .card:active {
    transform: scale(0.95);
  }

  .title, .description {
    color: white
  }

  .title {
    font-size: 24px;
  }
</style>