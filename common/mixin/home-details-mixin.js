export default {
  data() {
    return {
      name: '咨询顾问平台',
      banner: {
        text: '产品服务',
        imgSrc: require('@/assets/image/details_text.png'),
        bgImg: require('@/assets/image/smart_banner_bg.jpg')
      },
      platform: {
        title: '数字化物业服务咨询顾问平台',
        en: 'DATA Service Platform',
        info: [
          '传统的地产咨询行业仍然依靠手工搜集的数据作为咨询依据，一栋新楼宇的咨询报告非常依赖以往的经验，容易出现服务周期漫长，且数据不精准，人员变动后服务难以为继等问题。服务周期长，咨询费用高昂，导致用户对此类业务获得感较弱。',
          '爱物管利用大数据和人工智能等高科技手段，对各类楼宇数据进行整合及清洗，从楼宇规划、建设、运营全环节提供咨询服务，帮助建立更低廉、更即时、更直观、更独特的楼宇模型。'
        ],
        imgText: [
          {
            icon: require('@/assets/image/platform_icon_1.png'),
            name: '精确直观'
          },
          {
            icon: require('@/assets/image/platform_icon_2.png'),
            name: '实时快速'
          },
          {
            icon: require('@/assets/image/platform_icon_3.png'),
            name: '价格低廉'
          }
        ]
      },
      content: {
        title: '服务内容',
        bgImg: require('@/assets/image/content_bg.png'),
        tags: [
          '楼宇前期介入咨询服务',
          '楼宇筹备期咨询服务（服务标准、服务成本测算、服务人员测算）',
          '楼宇运营状态咨询服务',
          '驻场顾问服务'
        ]
      },
      resident: {
        title: '驻场服务',
        info:
          '为打造城市智慧楼宇样板，使爱物管的AI服务平台充分发挥作用，让客户更加直观地了解AI服务平台带给楼宇的改变，爱物管提供智慧物业服务项目——由爱物管派遣年轻专业的高素质管理人员，对整栋楼宇的物业进行直接管理。在具体运营过程中，管理人员会根据AI服务平台提供的数据做运营调整，使之更适合楼宇的运营现状，并及时反馈，让客户更清晰地了解楼宇运营情况，通过我们楼宇管理人员的垂直运营，能够充分发挥出爱物管AI服务平台的效能，真正地做到降本增效。',
        imgSrc: require('@/assets/image/resident_img.png')
      },
      command: {
        title: 'AI楼宇数据指挥中心',
        info: [
          '数据是整个楼宇的生命基因，传统手动采集的方式落后低效，并且各类数据不能很好地相互交融。',
          '爱物管的AI数据平台，智能化地将楼宇的各类数据进行整合、清洗，形成高效的楼宇运营策略，并自动化楼宇人员和能源的控制，实现数据的最大化利用。',
          '管理人员能够实时、可视化地查看楼宇的各类资产及服务数据，第一时间下达决策指令，让决策与行动零时差。',
          '通过上述四个平台采集到的所有楼宇大数据，均汇聚到此平台，形成高效的楼宇运营策略以及自动化的楼宇人员以及能源控制。'
        ],
        imgSrc: require('@/assets/image/command_pc.png'),
        tags: ['AI人员数据服务系统', 'AI区域数据服务系统', 'AI设备数据服务系统']
      }
    }
  }
}
