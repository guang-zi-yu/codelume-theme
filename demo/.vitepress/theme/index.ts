import { VPTheme } from '@codelume/theme'
import { h } from 'vue'

// uncomment to test CSS variables override
// import './override.css'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout!, null, {
    })
  }
}
