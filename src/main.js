import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components/UI'
import router from '@/router/router';
import directives from '@/directives';
import VFocus from './directives/VFocus';

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app.directive('focus', VFocus)

app
    .use(router)
    .mount('#app')
