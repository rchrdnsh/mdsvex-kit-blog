<script context="module">
  import { browser, dev } from '$app/env';
  import Clock from '$lib/Clock.svelte'
  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;
  
  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;
  
  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="content">
  <h1>About this Clock!</h1>
  <div class='clock-box'>
    <Clock/>
  </div>
  <p>It tells the time.</p>
</div>

<style>
  .content {
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    place-items: center;
    row-gap: 1rem;
  }

  .clock-box {
    margin: 0;
    padding: 0;
    width: 16rem;
    height: 16rem;
  }
</style>
