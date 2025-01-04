<template>
  <div class="lg:flex h-full mb-16 lg:mb-0">
    <!-- FIXED DESKTOP MENU -->
    <!-- SHOWS FROM LG AND ABOVE -->
    <div class="flex-shrink-0 lg:static lg:w-60 xl:w-72 hidden lg:block border-zero-orange border-opacity-50 border-l-0 border-t-0 border-r border-b-0">
      <TableOfContents />
    </div>
    <div>
      <main>
        <ContentDoc class="prose" />
      </main>
    </div>
  </div>
 
</template>