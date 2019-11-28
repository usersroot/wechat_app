const Error = () => import(/* webpackChunkName: "group-foo" */ 'views/error')
const Mine = () => import(/* webpackChunkName: "group-foo" */ 'views/mine')
const Discover = () => import(/* webpackChunkName: "group-foo" */ 'views/discover')
const Chat = () => import(/* webpackChunkName: "group-foo" */ 'views/chat')
const Address = () => import(/* webpackChunkName: "group-foo" */ 'views/address')


const routes = [
    {
    path:'/',
    redirect:'/chat'
},{
    path:'/chat',
    component:Chat
},{
    path:'/mine',
    component:Mine
},{
    path:'/address',
    component:Address
},{
    path:'/discover',
    component:Discover
},{
    path:'*',
    component:Error
},
]
export default routes