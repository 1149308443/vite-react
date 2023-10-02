import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineCustomElements, applyPolyfills } from '../stencli/loader';

applyPolyfills().then(()=>{
  defineCustomElements()
})

createApp(App).mount('#app')
