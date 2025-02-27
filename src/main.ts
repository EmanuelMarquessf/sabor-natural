import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdExploreOutlined, BiDoorOpenFill, MdPhoneintalkRound, MdArrowbackiosRound , MdArrowforwardiosRound, MdFacebook, BiInstagram, BiWhatsapp  } from "oh-vue-icons/icons";

addIcons(MdExploreOutlined, BiDoorOpenFill, MdPhoneintalkRound, MdArrowbackiosRound , MdArrowforwardiosRound, MdFacebook, BiInstagram, BiWhatsapp  );

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");