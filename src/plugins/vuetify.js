import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary:'#2196f3',
                secondary:'#607d8b',
                accent:'#f44336',
                error:'#e91e63',
                warning:'#ff9800',
                info:'#009688',
                success:'#4caf50'
            },
            dark: {
                primary: '#111',
            },
        },
    }

});
