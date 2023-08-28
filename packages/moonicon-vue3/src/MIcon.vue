<script setup lang="ts">
  import { type PropType, type Component } from 'vue'
  const modules: Record<string, Component> = {}
  const files: any = import.meta.glob('../components/*.tsx', { eager: true })
  Object.keys(files).forEach((fileName) => {
    const name = fileName.replace(/\..\/components\/|\.tsx/g, '')
    modules[name] = files[fileName].default
  })

  const props = defineProps({
    fill: {
      type: String as PropType<string>,
      default: '#fff'
    }, // fill color
    stroke: {
      type: String as PropType<string>,
      default: '#333'
    }, // stroke color
    strokeWidth: {
      type: [Number, String] as PropType<number | string>,
      default: 1.2
    },
    size: {
      type: [Number, String] as PropType<number | string>,
      default: '24'
    },
    name: {
      type: String as PropType<string>,
      default: ''
    }
  })

  const icon = modules[props.name]
</script>

<template>
  <component :is="icon" v-bind="props" />
</template>
