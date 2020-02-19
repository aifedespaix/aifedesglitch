import BOTW from '~/components/icons/botw.vue'
import Easy from '~/components/icons/easy.vue'
import Medium from '~/components/icons/medium.vue'
import Hard from '~/components/icons/hard.vue'
import VeryHard from '~/components/icons/very-hard.vue'
import Home from '~/components/icons/home.vue'
import Facebook from '~/components/icons/facebook.vue'
import Twitter from '~/components/icons/twitter.vue'
import Menu from '~/components/icons/menu.vue'

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
      veryHard: { component: VeryHard },
      facebook: { component: Facebook },
      twitter: { component: Twitter },
      menu: { component: Menu }
    }
  }
  // lang: {},
  // rtl: true
}
