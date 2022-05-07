// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791672626-9b032ccfd7be49b242c0c117',
    'm791672645-56e10572256ea740bd025004',
    'm791672640-adb31749798b4d4ecc91cde0',
    'm791672638-855cc2951677f15eb07a6233',
    'm791672620-2b7465782ddca93a45198975',
    'm791672639-367a3f0f233b0100c6ccdba1',
    'm791672619-d13c96ee4175312af1d9b44a',
    'm791672617-89490cda835c975c8f678ab4',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: '/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
