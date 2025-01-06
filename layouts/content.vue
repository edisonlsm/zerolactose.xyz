<template>
  <div class="overflow-hidden h-dvh flex flex-col">
    <Header />
    <div class="flex-grow flex max-h-screen overflow-y-hidden">
      <!-- FIXED DESKTOP MENU -->
      <!-- SHOWS FROM LG AND ABOVE -->
      <div class="flex-shrink-0 lg:static lg:w-auto hidden lg:block overflow-y-auto border-zero-orange border-opacity-50 border-r">
        <TableOfContents />
      </div>
      <div class="flex-grow overflow-y-scroll">
        <slot />
      </div>
    </div>
    <Footer class="hidden lg:flex" />
  </div>
</template>