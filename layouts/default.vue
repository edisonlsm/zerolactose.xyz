<template>
  <div class="h-full">
    <ZeroHeader />
    <div class="lg:flex h-full mb-16 lg:mb-0">
      <div class="flex-shrink-0 lg:static lg:w-60 xl:w-72 hidden lg:block border-zero-orange border-opacity-50 border-l-0 border-t-0 border-r border-b-0">
        <RecipesIndex />
      </div>
      <div>
        <Nuxt />
      </div>
    </div>
    <ZeroFooter />
  </div>
</template>

<style>
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */

  html, body {
      height:100%; /*both html and body*/
  }
  body {
      margin: 0; /*reset default margin*/
  }
</style>
