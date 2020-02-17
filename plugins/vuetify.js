import BOTW from '~/components/icons/botw.vue'
import Easy from '~/components/icons/easy.vue'
import Medium from '~/components/icons/medium.vue'
import Hard from '~/components/icons/hard.vue'
import VeryHard from '~/components/icons/very-hard.vue'
import Home from '~/components/icons/home.vue'

export default {
  iconfont: false,
  icons: {
    values: {
      botw: {
        component: BOTW
        // props: {
        //   name: 'botw'
        // }
      },
      home: { component: Home },
      easy: { component: Easy },
      medium: { component: Medium },
      hard: { component: Hard },
      veryHard: { component: VeryHard }
    }
  }
  // lang: {},
  // rtl: true,
  // theme: {}
}
