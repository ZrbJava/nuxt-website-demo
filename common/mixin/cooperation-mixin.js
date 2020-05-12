export default {
  data() {
    return {
      name: '合作联系',
      banner: {
        text: '合作联系',
        imgSrc: require('@/assets/image/cooperation_text.png'),
        bgImg: require('@/assets/image/cooperation_banner.jpg')
      },
      contact: {
        title: '联系我们',
        mail: [
          {
            icon: 'icon-icon_51',
            text: '华南业务接洽',
            hot: false,
            email: 'caotao@aipm.cn'
          },
          {
            icon: 'icon-icon_51',
            text: '华西业务接洽',
            hot: false,
            email: 'wangyuxuan@aipm.cn'
          },
          {
            icon: 'icon-icon_52',
            text: '媒体联系',
            hot: false,
            email: 'pr@aipm.cn'
          },
          {
            icon: 'icon-icon_53',
            text: '商务合作',
            hot: false,
            email: 'hezuo@aipm.cn'
          }
        ]
      },
      headquarters: {
        title: '爱物管总部',
        addr: [
          '电话：020-89853580',
          'www.aipm.cn',
          '地址：广州市黄埔区鱼珠智谷E-PARK创意园B18号'
        ],
        ak: 'MeWvYE0vwRabXlKHrzgv7fuLAvdMm0R',
        position: {
          longitude: 113.442519,
          latitude: 23.109387
        }
      }
    }
  }
}
