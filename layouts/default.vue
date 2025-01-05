<template>
  <div class="overflow-hidden h-screen flex flex-col">
    <Header />
    <div class="flex-grow overflow-y-scroll max-h-screen p-2">
      <slot />
    </div>
    <Footer />
  </div>
</template>