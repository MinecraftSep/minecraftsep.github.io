var posts=["/post/2023-12-06竞赛笔记.html","/post/2023-12-23竞赛笔记.html","/post/2023-12-12竞赛笔记.html","/post/2023-12-08竞赛笔记.html","/post/2023-12-11竞赛笔记.html","/post/2024-01-15竞赛笔记.html","/post/2024-01-16竞赛笔记.html","/post/2024-01-18竞赛笔记.html","/post/2024-01-19竞赛笔记.html","/post/2024-01-17竞赛笔记.html","/post/2024-01-22竞赛笔记.html","/post/2024-01-23竞赛笔记.html","/post/2024-01-24竞赛笔记.html","/post/2024-01-25竞赛笔记.html","/post/2024-03-04竞赛笔记.html","/post/2024-03-05竞赛笔记.html","/post/2024-03-06竞赛笔记.html","/post/2024-03-18竞赛笔记.html","/post/2024-03-20竞赛笔记.html","/post/Sep的网站限时内测.html","/post/2024-03-21竞赛笔记.html","/post/Minecraft-Sep的竞赛笔记书.html","/post/C-七大经典排序算法详解.html","/post/2024-03-22竞赛笔记.html","/post/2023.10.27初一编程马拉松赛赛后总结.html","/post/2023.11.21初一周赛总结.html","/post/2024.03.23周赛赛后总结.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };