## 全栈之巅 - 仿王者荣耀手机端官网和管理后台
### 教程地址：https://space.bilibili.com/341919508/video?keyword=%E7%8E%8B%E8%80%85

## 一、工具安装 - （nodejs, npm, mongodb）


## 二、基于 Element UI 的后台管理系统
### 增删改查统一接口：（通用 CRUD 接口）
1. 创建分类
2. 分类列表
3. 修改分类
4. 删除分类
5. 子分类


## 三、移动端官网
1. “工具样式” 概念和 scss
2. 样式重置
3. 网站色彩和字体定义 （colors, text）
4. 通用 flex 布局样式定义
5. 常用边距定义 （margin, padding）
6. 首页顶部轮播图片 （vue swiper）
7. 使用精灵图片 （sprite）
8. 使用字体图标 （iconfont）
9. 卡片组件 （card, list-card）


## 四、发布和部署（阿里云）

1. 生产环境编译 - server 里面的 admin 文件夹是后台的静态页面，web 文件夹是前端静态页面
2. 购买域名和服务器  （www.aliyun.com）
3. 域名解析
4. Nginx 安装和配置
5. MongoDB 数据库的安装和配置
6. git 安装、配置 ssh-key
7. Node.js 安装、配置淘宝镜像
8. 拉去代码，安装 pm2 并启动项目
9. 配置 Nginx 的反向代理（在 vscode 安装 Remote-SSH 插件）
10. 迁移本地数据到服务器（mongodump）

## 五、进阶
1. 使用免费 SSL 证书启用 HTTPS 安全连接 （免费 SSL -> https://letsencrypt.org/）
2. 使用阿里云 OSS 云存储存放上传文件 （oss 云存储包 -> multer-aliyun-oss）


### 知识点 - 安装的依赖包： 

1. nodemon

2. inflection     // 处理单词转换（如：复数转换成单数）

3. multer         // 上传图片

4. quill          // 富文本编辑器 

5. jsonwebtoken   // web 的 Token 验证

6. bcrypt         // 散列密码 （登录注册的密码 -> 加密  不可逆）

7. http-assert    // 用于确保一个东西是否存在，条件是否正确

8. require-all    // 把某个文件夹的所有文件都引用进来，使用一遍

9. dayjs          // 用于处理时间

10. multer-aliyun-oss   // 把图片上传到 oss 云存储上 


