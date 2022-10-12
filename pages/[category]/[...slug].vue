<template>
  <main>
    <ZeroHeader class="fixed" />
    <!-- Workaround to show the correct padding for the header on top of the page -->
    <ZeroHeader class="opacity-0" />
    <div class="lg:flex h-full mb-16 lg:mb-0">
      <!-- FIXED DESKTOP MENU -->
      <!-- SHOWS FROM LG AND ABOVE -->
      <div class="flex-shrink-0 lg:static lg:w-60 xl:w-72 hidden lg:block border-zero-orange border-opacity-50 border-l-0 border-t-0 border-r border-b-0">
        <ContentIndex />
      </div>
      <ContentDoc>
        <template v-slot="{ doc }">
          <article class="m-8 prose prose-sm md:prose lg:prose-lg xl:prose-xl">
            <h1 class="text-4xl font-bold">
              {{ doc.title }}
            </h1>
            <ContentRenderer :value="doc" />
          </article>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
        <template #empty>
          <h1>Document is empty</h1>
        </template>
      </ContentDoc>
    </div>
    <ZeroFooter />
  </main>
</template>