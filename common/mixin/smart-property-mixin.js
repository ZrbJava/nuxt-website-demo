export default {
  data() {
    return {
      name: '智慧物业',
      banner: {
        text: '产品服务',
        imgSrc: require('@/assets/image/details_text.png'),
        bgImg: require('@/assets/image/smart_banner_bg.jpg')
      },
      smart: {
        title: '智慧物业',
        en: 'Smart Property',
        info: [
          '传统的物业对一线人员的监管十分困难，态度懒散、士气下降、工作效率低，并且相关数据记录都采用传统的手写方式进行，楼宇缺乏有效的数据支撑。',
          '我们为业主提供楼宇运用过程中透明化、可视化的数据，帮助管理人员做出精准有效的运营决策，并对保洁、保安、工程、客服等板块进行产业化升级，在落地过程中实现降本增效的目标。'
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
