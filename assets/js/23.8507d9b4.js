(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{358:function(a,t,_){"use strict";_.r(t);var v=_(0),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("p",[a._v("我一直都在一个小公司工作，用react-native开发一个商场项目。由于没人指导、经验不足，前期很是埋了一些坑，后面痛定思痛决定对项目进行大幅度重构。给自己设下了若干目标，可惜还没来得及全部实现，公司就因为疫情倒闭了。这里分享一部分自己的心得，希望能给同样在踩坑的同学一些帮助。")]),a._v(" "),_("p",[a._v("顺便成都地区有坑的话麻烦推荐下啊！！")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"项目结构调整"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目结构调整"}},[a._v("#")]),a._v(" 项目结构调整")]),a._v(" "),_("h4",{attrs:{id:"分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("目前的项目是以页面为边界进行结构的划分(一个页面一个目录)，这种划分方式的问题在于：")]),a._v(" "),_("ol",[_("li",[a._v("数十个页面挤在同一目录下，增加理解负担；")]),a._v(" "),_("li",[a._v("跨页面的可重复组件不易复用；")]),a._v(" "),_("li",[a._v("以页面为标准的划分方式，会转移程序员的关注点，降低对于业务的理解")])]),a._v(" "),_("h4",{attrs:{id:"解决方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("使用以业务为边界的划分方式（一个功能一个目录，与该功能相关的页面、组件等都放到下面）。将页面拆分为一个个功能组件，放到对应业务模块下面。再将其组装为页面。")]),a._v(" "),_("p",[a._v("同时redux也应该以模块为界限重新划分结构。"),_("br")]),a._v(" "),_("p",[a._v("例："),_("br"),a._v("\n---common //公共组件"),_("br"),a._v("\n  |---Header.ts "),_("br"),a._v("\n---shop //电商模块"),_("br"),a._v("\n  |---redux  // 与shop业务相关的redux目录"),_("br"),a._v("\n  |---CategoryList.ts"),_("br"),a._v("\n  |---TypeList.ts"),_("br"),a._v("\n  |---GoodsList.ts"),_("br"),a._v("\n  |---HomePage.ts "),_("br"),a._v("\n  |---GoodsPage.ts  // 把Header和GoodsList等组装成该页面")]),a._v(" "),_("p",[a._v("如果某一个模块下的页面、组件过多，可自行添加pages、components等目录即可。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"简化redux"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简化redux"}},[a._v("#")]),a._v(" 简化redux")]),a._v(" "),_("h4",{attrs:{id:"分析-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析-2"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("目前页面的状态基本全放在redux中，其实完全没必要。redux的作用主要在于公共状态的管理，私有状态完全可以交给组件自己维护，过多的状态只会导致redux结构过于臃肿复杂。")]),a._v(" "),_("h4",{attrs:{id:"解决方式-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式-2"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("只有两种状态适合存放在redux中：")]),a._v(" "),_("ol",[_("li",[a._v("状态被两个页面以上共享；")]),a._v(" "),_("li",[a._v("页面卸载后又重新挂载，状态仍然保留在页面上；")])]),a._v(" "),_("p",[a._v("除此之外的状态，一并交给组件自身维护。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"抽离api层，并对api层进行数据清洗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抽离api层，并对api层进行数据清洗"}},[a._v("#")]),a._v(" 抽离api层，并对api层进行数据清洗")]),a._v(" "),_("h4",{attrs:{id:"分析-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析-3"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("请求后端接口的相关代码直接写在组件或者redux中，导致逻辑散乱，也不易于维护。")]),a._v(" "),_("p",[a._v("目前从后端获取数据后，直接使用后端返回的对象进行展示。当后端字段改变、数据类型改变、接口变化时，前端使用了该接口的地方，需要跟着一并修改。当这个接口被多个组件共同使用时，可能会引起大范围的改动。")]),a._v(" "),_("h4",{attrs:{id:"解决方式-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式-3"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("在模块内部增加一个api层，用函数封装请求相关的代码。")]),a._v(" "),_("p",[a._v("增加一个数据清洗层。即将后台返回数据传入函数中，转换为一个固定格式的对象后，再传给视图层使用。这样当后端接口变动时，只需要改动清洗层即可。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"抽离service层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抽离service层"}},[a._v("#")]),a._v(" 抽离service层")]),a._v(" "),_("h4",{attrs:{id:"分析-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析-4"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("目前的项目中，页面的展示（视图层）和业务逻辑放在一起，导致视图层过于臃肿庞大。并且业务逻辑散落在组件中，导致业务逻辑的可重用性极低，且难以维护。")]),a._v(" "),_("h4",{attrs:{id:"解决方式-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式-4"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("在模块中放置service层，通过接口事先规划好模块中所需业务并实现（service层包含的逻辑必须和该模块中的业务逻辑对应）。组件按需引入即可。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"改善路由结构、通过配置文件动态添加路由"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改善路由结构、通过配置文件动态添加路由"}},[a._v("#")]),a._v(" 改善路由结构、通过配置文件动态添加路由")]),a._v(" "),_("h4",{attrs:{id:"分析-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析-5"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("目前页面路由的配置是扁平结构，所有页面都处于路由的最顶层，导致路由配置文件过于臃肿。")]),a._v(" "),_("p",[a._v("维护者必须熟知页面对应的路由名，才可进行页面跳转，使得项目的理解负担加大。")]),a._v(" "),_("p",[a._v("页面对应的路由名修改后，页面中进行过跳转的地方也要跟着一并修改，增加了维护成本。")]),a._v(" "),_("h4",{attrs:{id:"解决方式-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式-5"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("在每个模块内通过配置文件定义路由路径（路径格式为模块名/页面名，如：Shop/GoodsPage），路由文件读取配置文件并遍历，动态添加路由路径。")]),a._v(" "),_("p",[a._v("额外维护一个表示路由名的常量文件，跳转时通过从该文件中引入常量进行跳转，解决路由名修改导致的问题（如没有修改路由名的需求可以忽略）。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"编写单元测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编写单元测试"}},[a._v("#")]),a._v(" 编写单元测试")]),a._v(" "),_("h4",{attrs:{id:"分析-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析-6"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("保持代码质量的最好方式是持续重构，然而重构容易造成项目功能出错。通过编写单元测试，可以在每次改动后保证功能不变。")]),a._v(" "),_("p",[a._v("然而项目没有在早期引入单元测试，导致需要测试的地方太多，工作量巨大。")]),a._v(" "),_("h4",{attrs:{id:"解决方式-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式-6"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("暂时不进行大规模的单元测试编写，以后对某个功能进行修改时，再顺手将对应的单元测试补充上去。")]),a._v(" "),_("p",[a._v("对于新增的功能，必须编写单元测试。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"完善类型检查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#完善类型检查"}},[a._v("#")]),a._v(" 完善类型检查")]),a._v(" "),_("h4",{attrs:{id:"分析-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析-7"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),_("p",[a._v("js动态类型不仅容易带来隐患，而且会加大重构哦时的工作量。使用typescript，可以规避绝大部分因为类型问题引起的低级错误。")]),a._v(" "),_("p",[a._v("然而现在引入typescript，需要校验类型和编写对应接口的地方太多，工作量巨大。")]),a._v(" "),_("h4",{attrs:{id:"解决方式-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方式-7"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),_("p",[a._v("通过使用较为宽松的类型检查策略来引入typescript（如允许隐式的any类型），减少工作量。")]),a._v(" "),_("p",[a._v("可以再对某个功能进行修改时，顺手修复其中的类型。")]),a._v(" "),_("p",[a._v("等到类型报错所剩不多的时候，再将剩余的错误一并修改。")]),a._v(" "),_("p",[a._v("然后将类型检查的命令添加到打包指令中去，保证每次打包都会执行类型检查。")]),a._v(" "),_("p",[a._v("最后可以逐步使用严格的类型检查策略。")]),a._v(" "),_("hr"),a._v(" "),_("h3",{attrs:{id:"错误处理优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#错误处理优化"}},[a._v("#")]),a._v(" 错误处理优化")]),a._v(" "),_("h3",{attrs:{id:"为组件建立错误边界"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为组件建立错误边界"}},[a._v("#")]),a._v(" 为组件建立错误边界")]),a._v(" "),_("p",[a._v("两个没来得及写的东西……")]),a._v(" "),_("hr"),a._v(" "),_("h2",{attrs:{id:"关于重构的一点小心得："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于重构的一点小心得："}},[a._v("#")]),a._v(" 关于重构的一点小心得：")]),a._v(" "),_("p",[a._v("在大规模重构之前一定要拟定目标并估算工作量，最好不要超过一天，如果超过了就拆分成一些更小的目标。")]),a._v(" "),_("p",[a._v("相比大规模重构，持续重构是更好的方式。在日常工作中多反思以往代码，例如优化变量名、解耦函数、拆分组件等小工作要持续进行。否则问题会越积越多。")]),a._v(" "),_("p",[a._v("重构前记得保存代码。重构时，不要一次性修改了一大片代码，然后才来验证有没有出错。记得每一次的改动越小越好。")]),a._v(" "),_("p",[a._v("typescript、单元测试能够极大降低重构难度。")]),a._v(" "),_("hr"),a._v(" "),_("h2",{attrs:{id:"附录：关于重构的why-what-when-how"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#附录：关于重构的why-what-when-how"}},[a._v("#")]),a._v(" 附录：关于重构的why-what-when-how")]),a._v(" "),_("p",[a._v("——摘自极客时间《设计模式之美》第27节  作者:王争")]),a._v(" "),_("h3",{attrs:{id:"_1-重构的目的：为什么重构（why）？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-重构的目的：为什么重构（why）？"}},[a._v("#")]),a._v(" 1. 重构的目的：为什么重构（why）？")]),a._v(" "),_("p",[a._v("对于项目来言，重构可以保持代码质量持续处于一个可控状态，不至于腐化到无可救药的地步。对于个人而言，重构非常锻炼一个人的代码能力，并且是一件非常有成就感的事情。它是我们学习的经典设计思想、原则、模式、编程规范等理论知识的练兵场。")]),a._v(" "),_("h3",{attrs:{id:"_2-重构的对象：重构什么（what）？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-重构的对象：重构什么（what）？"}},[a._v("#")]),a._v(" 2. 重构的对象：重构什么（what）？")]),a._v(" "),_("p",[a._v("按照重构的规模，我们可以将重构大致分为大规模高层次的重构和小规模低层次的重构。")]),a._v(" "),_("p",[a._v("大规模高层次重构包括对代码分层、模块化、解耦、梳理类之间的交互关系、抽象复用组件等等。这部分工作利用的更多的是比较抽象、比较顶层的设计思想、原则、模式。")]),a._v(" "),_("p",[a._v("小规模低层次的重构包括规范命名、注释、修正函数参数过多、消除超大类、提取重复代码等等编程细节问题，主要是针对类、函数级别的重构。小规模低层次的重构更多的是利用编码规范这一理论知识。")]),a._v(" "),_("h3",{attrs:{id:"_3-重构的时机：什么时候重构（when）？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-重构的时机：什么时候重构（when）？"}},[a._v("#")]),a._v(" 3. 重构的时机：什么时候重构（when）？")]),a._v(" "),_("p",[a._v("建立持续重构意识，把重构作为开发必不可少的部分，融入到日常开发中，而不是等到代码出现很大问题的时候，再大刀阔斧地重构。")]),a._v(" "),_("h3",{attrs:{id:"_4-重构的方法：如何重构（how）？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-重构的方法：如何重构（how）？"}},[a._v("#")]),a._v(" 4. 重构的方法：如何重构（how）？")]),a._v(" "),_("p",[a._v("大规模高层次的重构难度比较大，需要组织、有计划地进行，分阶段地小步快跑，时刻让代码处于一个可运行的状态。而小规模低层次的重构，因为影响范围小，改动耗时短，所以，只要你愿意并且有时间，随时随地都可以去做。")])])}),[],!1,null,null,null);t.default=r.exports}}]);