<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-white z-50">
    <div class="bg-zero-orange bg-opacity-75 w-full px-3 flex justify-start items-center h-16">
      <button
        class="block lg:hidden outline-none focus:outline-none"
        @click="isOpen=!isOpen"
      >
        <MenuIcon class="text-white fill-current" />
      </button>
      <span class="mx-3 text-4xl text-white font-bold">Receitas Zero Lactose</span>
    </div>
    <aside
      class="transform left-0 w-60 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 border-zero-orange border-opacity-50 border-r"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <RecipesIndex />
    </aside>
  </header>
</template>

<script>
import MenuIcon from '~/assets/svg/menu.svg?inline'

export default {
  components: {
    MenuIcon
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
