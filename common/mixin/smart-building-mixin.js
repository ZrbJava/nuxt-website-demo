export default {
  data() {
    return {
      name: '智慧楼宇',
      banner: {
        text: '产品服务',
        imgSrc: require('@/assets/image/details_text.png'),
        bgImg: require('@/assets/image/smart_banner_bg.jpg')
      },
      smart: {
        title: '智慧楼宇',
        en: 'Smart Building',
        info: [
          '随着中国商业地产新开工面积触顶回落，逐渐由增量市场进入存量市场。跟上第四次工业革命的步伐，打造智慧楼宇，在商业地产的保值和增值中发挥越来越重要的作用。',
          '爱物管为写字楼、园区等商业地产打造AI智慧楼宇服务系统，引入人工智能、IOT以及5G软硬件技术，从楼宇资产管理、用户服务支持等方面实现楼宇的降本增效、提质增值。'
        ]
      },
      base: {
        title: '统一基础服务平台',
        info:
          '本平台是未来AI楼宇服务建设的基础功能平台，将提供统一的物业资产、用户、交易以及统一服务入口等基础性系统支持，为实现“统一规划、分步实施；适当超前，预留未来”原则的落地，奠定必要的条件及基础。',
        bgImg: require('@/assets/image/smart_bg.jpg'),
        imgSrc: require('@/assets/image/base.png'),
        tags: [
          '楼宇资产管理系统',
          '楼宇用户管理系统',
          '楼宇交易服务系统',
          '统一用户服务系统'
        ]
      },
      service: {
        title: '智慧楼宇服务平台',
        info:
          '本平台围绕与楼宇硬件投入相关的设施设备升级、改造为核心，提升楼宇管理水平，降低楼宇运营成本，并为AI楼宇数据采集以及反馈，提供重要的功能性入口及服务。',
        imgSrc: require('@/assets/image/service_left.png'),
        tags: [
          '统一门禁管理系统',
          '楼宇访客管理系统',
          '楼宇停车管理系统',
          '楼宇设备监测管理系统',
          '楼宇环境监测管理系统',
          '楼宇能源控制系统'
        ]
      },
      property: {
        title: '智慧物业服务平台',
        info:
          '实现对物管管理服务公司的整体审计、监控以及对应数据、标准在我院的沉淀和积累。并且通过AI、IOT以及5G等技术，实现物业服务投入的利用率提升、服务品质提升以及有效的人力成本节省',
        bgImg: require('@/assets/image/property_bg.jpg'),
        imgSrc: require('@/assets/image/property.png'),
        tags: [
          '物业服务人员管理系统',
          '服务质量控制系统',
          '服务评分系统',
          '楼宇商品销售服务系统',
          '工作量化基础管理系统',
          '保洁工作量化系统',
          '保安工作量化系统',
          '工程工作量化系统'
        ]
      },
      admin: {
        title: '智慧行政服务平台',
        info:
          '任何平台的建立，都离不开对用户的服务和支持，这个平台围绕自身的行政服务为核心，采用新一代的数据服务技术及构建在以上两个平台上的统一的用户服务信息基础设施，为各部门以及员工提供优质、高效，体验良好的行政服务。',
        imgSrc: require('@/assets/image/admin_left.png'),
        tags: [
          '消费管理系统',
          '会议服务系统',
          '智能考勤系统',
          '员工福利系统',
          '企业费用管理系统'
        ]
      },
      robot: {
        title: 'AI机器人',
        info:
          '经过6年来的不断研发，爱物管服务机器人不仅可以结合自身的AI设施设备平台方便成熟地调用电梯、门禁等资源，支持自动呼梯、门禁联动、自动转梯等核心能力，还进一步的支持多台机器人在楼内的大规模调度能力，支持区域限速、区域限量、排队乘梯、排队出入门等高阶的资源调度能力。',
        bgImg: require('@/assets/image/robot_bg.jpg'),
        imgSrc: require('@/assets/image/robot.png'),
        tags: ['楼宇内部物流配送服务机器人', '楼宇的安防巡逻机器人']
      }
    }
  }
}
