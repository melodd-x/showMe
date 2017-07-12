// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'

Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
    //data
    state:{
        chartOne:{
            title: 'chartOne',
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        chartTwo:{
            title: 'chartTwo',
            data:[
                {value:300, name:'大傻逼'},
                {value:408, name:'二傻逼'},
                {value:500, name:'三傻逼'},
                {value:383, name:'四傻逼'},
                {value:548, name:'五傻逼'}
            ]
        },
        tableOne:{

        },
        tableTwo:{

        },
        tableThree:{

        }
    },
    // updata data
    mutations:{

    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
