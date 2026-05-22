# 诚胜佳医疗器械有限公司官网

## 项目简介

这是一个静态企业官网项目，用于展示诚胜佳医疗器械有限公司的企业形象和产品信息。

## 公司信息

- **公司名称**: 诚胜佳医疗器械有限公司 (Cheng Sheng Jia Medical)
- **电话**: 13645133558
- **邮箱**: csjmedicalcare@qq.com
- **工厂地址**: 连云港经济技术开发区朝阳街道西庄路11-66

## 网站结构

### 主要页面

- **首页** (`index.html`) - 网站首页，展示公司概览
- **关于我们** (`qualifications.html`) - 公司简介、企业文化、荣誉资质
- **产品中心** (`products.html`) - 产品分类展示
- **服务案例** (`service.html`) - 服务流程和矫正案例
- **联系我们** (`contact.html`) - 联系方式和留言表单

### 产品分类

- 胸廓畸形系列
- 上肢康复系列
- 下肢康复系列
- 脊柱固定系列

## 技术架构

- **前端技术**: HTML5 + CSS3 + JavaScript
- **响应式设计**: 支持桌面端和移动端浏览
## 文件结构

```
诚胜佳医疗官网/
│
├── index.html                      # 首页
├── contact.html                    # 联系我们（留言表单）
├── qualifications.html             # 关于我们（主页面）
├── qualifications-1.html           # 关于我们（子页面）
├── products.html                   # 产品中心
├── service.html                    # 服务案例
│
├── 漏斗胸系列/
│   ├── funnel-chest.html          # 漏斗胸
│   ├── atypical-funnel-chest.html  # 非典型漏斗胸
│   └── pectus_sternal-center.html  # 漏斗胸（胸骨正中型）
│
├── 鸡胸系列/
│   ├── pectus_chicken-breast-rib-flare.html  # 鸡胸合并肋骨外翻
│   ├── pectus_rib-flare.html       # 肋骨外翻
│   ├── pectus_unilateral.html      # 单侧鸡胸
│   └── pectus_subclavicular.html   # 锁骨下鸡胸
│
├── 脊柱固定系列/
│   ├── cervicothoracic.html        # 颈胸椎固定
│   ├── thoracolumbar.html          # 胸腰椎固定
│   └── scoliosis.html              # 脊柱侧弯
│
├── 上肢康复系列/
│   ├── elbow-activity.html         # 肘关节活动
│   ├── elbow-valgus.html           # 肘外翻
│   └── elbow-varus.html            # 肘内翻
│
├── 下肢康复系列/
│   ├── hip-joint.html              # 髋关节
│   ├── leg-shape.html              # 腿型矫正
│   └── intoeing-correction.html    # 内八字矫正
│
├── css/                            # 样式文件
│   ├── base.css                    # 基础样式
│   ├── style.css                   # 通用样式
│   ├── index-home.css              # 首页样式
│   ├── contact.css                 # 联系我们样式
│   ├── service.css                 # 服务案例样式
│   ├── products-page.css           # 产品列表样式
│   ├── product-detail.css          # 产品详情样式
│   ├── inner-page.css              # 内页通用样式
│   ├── qualifications-page.css     # 关于我们样式
│   └── qualifications-1-page.css   # 关于我们子页面样式
│
├── js/                             # JavaScript文件
│   ├── main.js                     # 主脚本（导航等功能）
│   ├── index.js                    # 首页脚本
│   ├── services.js                # 服务案例脚本
│   └── qualifications.js           # 关于我们脚本
│
├── images/                         # 图片资源
│   ├── logo.png                    # 公司Logo
│   ├── index/                      # 首页图片
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── china-map.jpg
│   ├── about/                      # 关于我们图片
│   │   ├── enterprise.jpg
│   │   ├── medical.jpeg
│   │   ├── 3d-printing.jpeg
│   │   ├── workspace.jpeg
│   │   ├── 3d-scanning.png
│   │   ├── culture.png
│   │   └── tabbar/
│   │       ├── 1.png ~ 4.png
│   ├── contact/                    # 联系我们图片
│   │   ├── 1.jpeg
│   │   ├── 电话.png
│   │   ├── 邮箱.png
│   │   └── 定位.png
│   ├── common/                     # 通用图片
│   │   ├── wechat.png / wechat-qr.jpg
│   │   ├── douyin.png / douyin-qr.jpg
│   │   └── xiaohongshu.png / xiaohongshu-qr.jpg
│   ├── products/                   # 产品图片
│   │   ├── funnel-chest/
│   │   ├── atypical-funnel-chest/
│   │   ├── sternal-center/
│   │   ├── rib-flare/
│   │   ├── unilateral/
│   │   ├── subclavicular/
│   │   ├── scoliosis/
│   │   ├── cervicothoracic/
│   │   ├── thoracolumbar/
│   │   ├── elbow-activity/
│   │   ├── elbow-valgus/
│   │   ├── elbow-varus/
│   │   ├── hip-joint/
│   │   ├── leg/
│   │   ├── intoeing-foot/
│   │   ├── complex/
│   │   └── 1.png
│   ├── cases/                      # 案例图片
│   │   ├── 1.jpeg
│   │   ├── services.png
│   │   ├── work.png
│   │   ├── 3Dprint.png
│   │   ├── medcial.png
│   │   ├── 3Dscan.png
│   │   ├── leg-shape-X/
│   │   ├── leg-shape-O/
│   │   ├── pectus_sternal-center/
│   │   ├── pectus_subclavicular/
│   │   ├── pectus_unilateral/
│   │   └── pectus_chicken-breast-rib-flare/
│   └── materials/                  # 材料图片
│       └── 1.jpg ~ 12.jpg
│
├── video/                          # 视频资源
│   └── video.mp4
│
└── README.md                       # 项目说明文档
```

## 功能特性

- 响应式导航菜单（支持下拉子菜单）
- 产品分类筛选功能
- 联系表单提交（前端验证）
- 二维码展示（微信公众号、抖音、小红书）
- 移动端适配

## 使用说明

1. 直接在浏览器中打开 `index.html` 即可预览网站
2. 无需安装任何依赖或构建工具
3. 所有页面均为静态HTML文件

## 注意事项

- 本网站为纯静态页面，无后端数据库
- 联系表单提交仅在前端显示感谢提示，无实际数据存储
- 网站图片使用相对路径引用，确保保持原有目录结构

## 联系方式

如需更多信息，请通过以下方式联系我们：
- 电话：13645133558
- 邮箱：csjmedicalcare@qq.com
