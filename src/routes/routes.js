/* eslint-disable */
const pages = resolve => require(['../pages/index.vue'], resolve)
const pagesManage = resolve => require(['../pages/manage.vue'], resolve)
const pagesManageBmw = resolve => require(['../pages/manage/bmw/index.vue'], resolve)
const pagesManageMoto = resolve => require(['../pages/manage/moto/index.vue'], resolve)
const pagesManageZjw = resolve => require(['../pages/manage/zjw/index.vue'], resolve)
const pagesManageBmwGs = resolve => require(['../pages/manage/bmw/gs/index.vue'], resolve)
const pagesManageBmwRr = resolve => require(['../pages/manage/bmw/rr/index.vue'], resolve)

let routes = [
  {
    name: "pages",
    path: "",
    component: pages
  },
  {
    name: "pages-manage",
    path: "/manage",
    component: pagesManage,
    children: [
      {
        name: "pages-manage-bmw",
        path: "bmw",
        component: pagesManageBmw
      },
      {
        name: "pages-manage-moto",
        path: "moto",
        component: pagesManageMoto
      },
      {
        name: "pages-manage-zjw",
        path: "zjw",
        component: pagesManageZjw
      },
      {
        name: "pages-manage-bmw-gs",
        path: "bmw/gs",
        component: pagesManageBmwGs
      },
      {
        name: "pages-manage-bmw-rr",
        path: "bmw/rr",
        component: pagesManageBmwRr
      }
    ]
  }
]

export default routes
