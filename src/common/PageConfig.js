import HomePage from "../view/HomePage";
import PhotoWall from "../view/PhotoWall"

const PageConfig = [
    {
        name: "首页",
        url: "/index",
        component: HomePage
    },
    {
        name: "图片墙",
        url: "/photoWall",
        component: PhotoWall
    },
]

export default PageConfig