import { createApp } from 'vue'
import App from './App.vue'
import { createRouter , createWebHistory} from "vue-router";
import HomePage from './components/HomePage.vue'
import UnitsPage from './components/UnitsPage.vue'
import TasksPage from './components/TasksPage.vue'
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const router = createRouter({
    history: createWebHistory(),
	routes: [
	{
		path: '/HomePage',
        name:"HomePage",
        component: HomePage,
	},
	{
		path: '/UnitsPage',
        name:"UnitsPage",
        component: UnitsPage,
	},
	{
		path: '/TasksPage',

		name:  'TasksPage',
        component: TasksPage,
	}
  ]
})

//create new vue instance  
createApp(App).use(router).mount('#app')
