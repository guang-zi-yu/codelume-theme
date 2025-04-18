export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'bilibili'
  | 'douyin'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'x'
  | 'languages'

export type SocialLinkSize = 'small' | 'medium'
