<script lang="ts" setup>
import { SocialLinkSize, SocialLinkIcon } from '../types/socialLink'
import VTIconDiscord from './icons/VTIconDiscord.vue'
import VTIconFacebook from './icons/VTIconFacebook.vue'
import VTIconGitHub from './icons/VTIconGitHub.vue'
import VTIconLinkedIn from './icons/VTIconLinkedIn.vue'
import VTIconSlack from './icons/VTIconSlack.vue'
import VTIconX from './icons/VTIconX.vue'
import VTIconLanguages from './icons/VTIconLanguages.vue'
import VTIconBilibili from './icons/VTIconBilibili.vue'
import VTIconDouyin from './icons/VTIconDouyin.vue'

const props = defineProps<{
  size?: SocialLinkSize
  icon: SocialLinkIcon
  link: string
}>()

const target = /^[a-z]+:/i.test(props.link) ? `_blank` : undefined

const icons = {
  bilibili: VTIconBilibili,
  douyin: VTIconDouyin,
  discord: VTIconDiscord,
  facebook: VTIconFacebook,
  github: VTIconGitHub,
  linkedin: VTIconLinkedIn,
  slack: VTIconSlack,
  twitter: VTIconX,
  x: VTIconX,
  languages: VTIconLanguages
}
</script>

<template>
  <a
    class="vt-social-link"
    :class="{
      'is-small': size === 'small',
      'is-medium': size === 'medium'
    }"
    :href="link"
    :title="icon"
    :target="target"
    rel="noopener noreferrer"
  >
    <component :is="icons[icon]" class="vt-social-link-icon" />
    <span class="visually-hidden">{{ icon }}</span>
  </a>
</template>
