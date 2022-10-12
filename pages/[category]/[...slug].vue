<template>
  <main>
    <ZeroHeader />
    <ContentWrapperWithIndex>
      <div class="m-8">
        <ContentDoc>
        <template v-slot="{ doc }">
          <article class="prose prose-sm md:prose lg:prose-lg xl:prose-xl">
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
    </ContentWrapperWithIndex>
    <ZeroFooter />
  </main>
</template>
