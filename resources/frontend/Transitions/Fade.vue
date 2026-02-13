// Exemplo de transição global
<template>
    <transition name="fade">
        <slot />
    </transition>
</template>

<script setup>
// ...
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
