<script setup lang="ts">
  import { computed } from 'vue'
  import { NButton, NScrollbar } from 'naive-ui'
  import styles from './index.module.scss'
  import { useIconsStore } from '@/store/icons'
  import { type Icon } from '@/store/icons/types'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const iconStore = useIconsStore()
  const iconCustomize = computed(() => iconStore.getCustomize)
  const emptyImage = getImageUrl('empty')

  const onlySelected = computed(() => iconStore.getOnlySelected)
  const selectedIconsMap = computed(() => iconStore.getSelectedIconsMap)

  const icons = computed(() => {
    return onlySelected.value
      ? iconStore.getSelectedIcons
      : iconStore.getFilterIcons
  })

  const changeIconSelected = (e: MouseEvent, icon: Icon) => {
    selectedIconsMap.value[icon.name]
      ? iconStore.removeSelectedIcon(icon)
      : iconStore.pushSelectedIcons(icon)
  }
</script>

<template>
  <div v-if="!icons.length" :class="styles.emptyContent">
    <img :src="emptyImage" :class="styles.emptyTipImage" alt="empty" />
    <p :class="styles.emptyTipMessage">{t('icon.emptyMessage')}</p>
    <p :class="styles.emptyTipButton">
      <NButton>{{ t('icon.request') }}</NButton>
    </p>
  </div>
  <div v-else :class="styles.iconStoreWrapper">
    <NScrollbar>
      <div :class="styles.iconStore">
        <div
          v-for="icon in icons"
          :key="icon.name"
          :class="`${styles.iconItem} ${
            selectedIconsMap[icon.name] ? styles.isSelected : ''
          }`"
        >
          <div
            :class="styles.iconContent"
            @click="changeIconSelected($event, icon)"
          >
            <div :class="styles.iconArea">
              <component :is="icon.name" v-bind="iconCustomize" />
            </div>
            <div :class="styles.iconName">{{ icon.name }}</div>
          </div>
        </div>
      </div>
    </NScrollbar>
  </div>
</template>
