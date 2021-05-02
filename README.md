# How to enable the error

1. clone and run the repo and everything works fine...
2. Go to `src/content/post-one.md` and  uncomment the following:

```html
<!-- <script context='module'>
  import Clock from '$lib/Clock.svelte'
  metadata.icon = Clock;
</script> -->
```

then run again, or keep running...you should then get this error:

```bash
[vite] Error when evaluating SSR module /src/content/post-one.md:
ReferenceError: metadata is not defined
    at post-one.md:3:10
    at instantiateModule (/Users/rchrdnsh/Code/Svelte/mdsvex-kit-blog/node_modules/vite/dist/node/chunks/dep-994e0558.js:69063:166)
metadata is not defined
ReferenceError: metadata is not defined
    at post-one.md:3:10
    at instantiateModule (/Users/rchrdnsh/Code/Svelte/mdsvex-kit-blog/node_modules/vite/dist/node/chunks/dep-994e0558.js:69063:166)

```

I don't know why or what's going on, but thank you in advance for taking a look XD
