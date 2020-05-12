export default {
  data() {
    return {
      name: '爱物管',
      banner: {
        text: '关于爱物管',
        imgSrc: require('@/assets/image/about_b.png'),
        bgImg: require('@/assets/image/about_banner.jpg')
      },
      tab: ['爱物管简介', '发展历程', '发起团队', '企业荣誉'],
      about: {
        title: '爱物管简介',
        en: 'About AIPM',
        info: [
          '爱物管(AIPM)是广州启盟信息科技有限公司旗下，是一家专注于商业地产运营的智能服务商，以提升楼宇运营效率为切入点，提升楼宇服务品质即资产价值为目标的高科技品牌。',
          '爱物管是一家运用人工智能、大数据、智能IOT设备等高科技为楼宇物业赋能的商业地产运营智能服务商。为业主提供楼宇运用过程中透明化、可视化的数据，帮助管理人员做出精准有效的运营决策，并对保洁、保安、工程、客服等板块进行产业化升级，在落地过程中实现降本增效的目标。业务范围覆盖智慧楼宇、智慧物业以及智慧行政三个领域。'
        ]
      },
      progress: {
        imgSrc: require('@/assets/image/course.jpg'),
        imgSrc2: require('@/assets/image/m-course.jpg'),
        list: [
          {
            date: '2019',
            tags: [
              '11月：DSP-Onsite服务面积超十万平米',
              '7月：数据化物管顾问驻场服务获成功（DSPOnsite-1.0）',
              '3月：数据化物管咨询顾问平台上线（DSP1.0）'
            ]
          },
          {
            date: '2018',
            tags: [
              '12月：完成千万元天使轮融资',
              '9月：总服务管理面积超五百万方',
              '6月：总服务管理面积超百万方',
              '2月：首个集团用户上线'
            ]
          },
          {
            date: '2017',
            tags: [
              '11月：数字化物管解决方案平台上线（BSP1.0）',
              '9月：广州启盟信息科技有限公司公司成立'
            ]
          }
        ]
      },
      team: {
        title: '发起团队',
        en: 'Our team',
        list: [
          {
            name: '滕一帆',
            position: '创始人、CEO',
            imgSrc: require('@/assets/image/team_img1.jpg'),
            info: ['前楼小二COO，联合创始人。', '完成十亿级企业从零到一。'],
            introduction:
              '在技术岗位参与医疗信息化进程，在销售岗位参与智慧城市规划及建设，在科技创业、行业信息化、数据智能化增效方面有很深理解和积累。'
          },
          {
            name: '龚世海',
            position: '合伙人',
            imgSrc: require('@/assets/image/team_img2.jpg'),
            info: ['上海交通大学硕士、中欧EMBA', '前大众点评网CTO。'],
            introduction:
              '十年来帮助大众点评建立完整技术体系，从几人扩展到六百人精悍技术研发团队。'
          },
          {
            name: '潘晓良',
            position: '合伙人',
            imgSrc: require('@/assets/image/team_img3.jpg'),
            info: ['前百姓网CTO、联合创始人。'],
            introduction:
              '十年从零开始打造百姓网“小而美”的技术团队。在产品运营、公司文化、人事制度等方面有丰富的经验。'
          },
          {
            name: '伍林',
            position: '商业发展、合伙人',
            imgSrc: require('@/assets/image/team_img4.jpg'),
            info: [
              '前中国最高建筑——广州中信广场项目总经理。服务戴德梁行18年，先后任物业管理部、商业地产部主管及董事。'
            ],
            introduction:
              '在物业商业规划、资产管理、项目运营、科技楼宇方面，有资深经验和市场资源。'
          }
        ]
      },
      honor: {
        title: '企业荣誉',
        en: 'Corporate honor',
        imgBg: require('@/assets/image/honor_bg.png'),
        imgBg2: require('@/assets/image/honor_bg_m.png'),
        imgLeft: require('@/assets/image/honor_left.png'),
        imgLeft2: require('@/assets/image/honor_left_m.png'),
        imgRight: require('@/assets/image/honor_right.png'),
        natimg: require('@/assets/image/natural_img.png'),
        patent: {
          title: '发明专利',
          list: [
            '软件著作权 19 件',
            '专利申请达 25 件，其中发明专利 17 件',
            '多项发明专利填补了国内相关技术领域的空白，',
            '初步展开智慧物业专利布局'
          ]
        },
        prize: {
          title: '奖项',
          list: [
            'GMIC产业智能升级引领奖',
            '2019年中国楼宇最佳合作品牌',
            '2019年第八届中国创新创业大赛互联网行业成长组优胜奖'
          ]
        },
        natural: {
          title: '资质',
          natBg: require('@/assets/image/natural_bg.png'),
          list: [
            '国际建筑业主与管理者协会（BOMA）中国分会会员',
            '广州物业管理行业协会联席单位',
            '成都市楼宇经济促进会会员单位'
          ]
        }
      }
    }
  }
}
