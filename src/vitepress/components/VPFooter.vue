<script lang="ts" setup>
import { VTLink } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <div class="VPFooter">
    <p v-if="config.footer?.license" class="license">
      {{ config.i18n?.footerLicense?.before ?? 'Released under the '
      }}<VTLink class="link" :href="config.footer.license.link" no-icon>{{
        config.footer.license.text
      }}</VTLink
      >{{ config.i18n?.footerLicense?.after ?? '.' }}
    </p>

    <p v-if="config.footer?.copyright" class="copyright">
      {{ config.footer.copyright }}
    </p>

    <p v-if="config.footer?.recordNumber" class="record-number">
      <VTLink class="link" :href="config.footer.recordNumber.link" no-icon>
        {{ config.footer.recordNumber.text }}
      </VTLink>
    </p>
  </div>
</template>

<style scoped>
.VPFooter {
  border-top: 1px solid var(--vt-c-bg-soft);
  padding: 23px 24px 24px;
  background-color: var(--vt-c-bg-soft);
  transition: border-top 0.5s, background-color 0.5s;
}

.dark .VPFooter {
  border-top: 1px solid var(--vt-c-divider-light);
  background-color: var(--vt-c-bg);
}

.license,
.copyright,
.record-number {
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.25s;
}

.link {
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.link:hover {
  color: var(--vt-c-text-2);
}
</style>
