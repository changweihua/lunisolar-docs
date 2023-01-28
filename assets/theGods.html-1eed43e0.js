import{_ as e,V as r,W as s,X as t,$ as o,a0 as n,Y as d,Z as u,F as i}from"./framework-54e49b68.js";const a={},c=t("h1",{id:"thegods-神煞宜忌类",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#thegods-神煞宜忌类","aria-hidden":"true"},"#"),d(" TheGods 神煞宜忌类")],-1),_=t("p",null,"（theGods插件）",-1),h=t("thead",null,[t("tr",null,[t("th",null,"属性或方法"),t("th",null,"描述"),t("th",null,"参数"),t("th",null,"返回类型")])],-1),g=t("td",null,"lsr",-1),y=t("td",null,"当前Lunisolar对象实例",-1),G=t("td",null,null,-1),p=t("td",null,"getGods(ymdh)",-1),f=t("td",null,"取得神煞",-1),m=t("td",null,'参数默认为"MD", 可以是 "Y","M": "D": "H"的任一个或多个字符的组合，返回其对应的年神、月神、日神、时神或其组合',-1),b=t("td",null,"getGoodGods(ymdh)",-1),k=t("td",null,"取得吉神",-1),D=t("td",null,'参数默认为"MD", 参数同上',-1),L=t("td",null,"getBadGods(ymdh)",-1),T=t("td",null,"取得凶神",-1),A=t("td",null,'参数默认为"MD", 参数同上',-1),x=t("td",null,"getDuty12God()",-1),K=t("td",null,"取得当日建除十二神（建、除、满...)",-1),N=t("td",null,null,-1),q=t("td",null,"getLife12God(ymdh)",-1),B=t("td",null,"取得长生十二神(长生、沐浴、冠帶...)",-1),V=t("td",null,'参数可以是 "year"、"month"、"day"、 "hour"的其中一个',-1),M=t("tr",null,[t("td",null,"getActs(actType, returnKey, replacer)"),t("td",null,"取得当日宜忌"),t("td",null,[t("strong",null,"actType"),d(": 0 | 1 | 2 | 3 "),t("br"),d(" 指返回宜忌的分类"),t("br"),d(),t("strong",null,"returnKey"),d(": boolean"),t("br"),d(" 是否返回宜忌的key，默认为false, 即返回国际化翻译后的宜忌"),t("br"),d(),t("strong",null,"replacer"),d(": { [key: string]: string } "),t("br"),d(" 用于替换宜忌词条的字典对象")]),t("td",null,"{good: string[], bad: string[]}")],-1),S=t("tr",null,[t("td",null,"getGoodActs(actType, returnKey, replacer)"),t("td",null,"取得当日所宜"),t("td",null,"参数与 getActs 方法一致"),t("td",null,"string[]")],-1),v=t("tr",null,[t("td",null,"getBadActs(actType, returnKey, replacer)"),t("td",null,"取得当日所忌"),t("td",null,"参数与 getActs 方法一致"),t("td",null,"string[]")],-1),w=t("tr",null,[t("td",null,"getAllDayHourGods()"),t("td",null,"取得整日各时辰的神煞"),t("td"),t("td",null,"God[][]")],-1),z=t("tr",null,[t("td",null,"getLuckHours(luckType)"),t("td",null,"取得整日各时辰的吉凶"),t("td",null,[d("luckeType: 0 | 1 "),t("br"),d(" 0: 按黄黑道十二神（即青龙明堂等）决定吉凶"),t("br"),d(" 1：根据时辰的吉神凶神个数决定吉凶")]),t("td",null,"number[]")],-1),C=t("td",null,"getAllLuckDirection()",-1),H=t("td",null,null,-1),O=t("td",null,"getLuckDirection(godKeyOrName)",-1),R=t("td",null,[d("godKeyOrName: string"),t("br"),d("吉方神煞名称，一般为 '喜神' | '福神' | '財神' | '陽貴' | '陰貴'")],-1),Y=t("td",null,[t("strong",null,"[Direction24, God]")],-1),E=t("tr",null,[t("td",null,"query(queryString)"),t("td",null,"通过输入查询语句进行通用查询"),t("td",null,"query: string"),t("td",null,"God | God[] | string[] | null")],-1),F=u("<p><strong>queryString说明</strong>:</p><p>queryString 存入的字符串，对应返回的内容参见下表, 其中zh的中文字条取决于你是否使用zh语言名才能使用该字条。故建议使用key中的字条存入存数。</p><table><thead><tr><th>key</th><th>zh</th><th>说明</th><th>返回类型</th></tr></thead><tbody><tr><td>year gods</td><td>年神</td><td>取得年神</td><td>God[]</td></tr><tr><td>month gods</td><td>月神</td><td>取得月神</td><td>God[]</td></tr><tr><td>day gods</td><td>日神</td><td>取得日神</td><td>God[]</td></tr><tr><td>hour gods</td><td>時神</td><td>取得時神</td><td>God[]</td></tr><tr><td>this day gods</td><td>本日神煞</td><td>取得本日神煞</td><td>God[]</td></tr><tr><td>day of yellow-black god</td><td>本日黃黑十二神</td><td>取得本日的串宫十二神</td><td>God[]</td></tr><tr><td>hour of yellow-black god</td><td>此時黃黑十二神</td><td>取得此时辰的串宫十二神</td><td>God[]</td></tr><tr><td>duty god</td><td>建除十二神</td><td>取得建除</td><td>God</td></tr><tr><td>year of long-life god</td><td>年長生十二神</td><td>取得年长生十二神</td><td>God</td></tr><tr><td>month of long-life god</td><td>月長生十二神</td><td>取得月长生十二神</td><td>God</td></tr><tr><td>day of long-life god</td><td>日長生十二神</td><td>取得日长生十二神</td><td>God</td></tr><tr><td>hour of long-life god</td><td>時長生十二神</td><td>取得时辰长生十二神</td><td>God</td></tr><tr><td>good act</td><td>宜</td><td>取得本日所宜</td><td>string[]</td></tr><tr><td>good act 1</td><td>宜1</td><td>取得本日通书所宜</td><td>string[]</td></tr><tr><td>good act 2</td><td>宜2</td><td>取得本日御用所宜</td><td>string[]</td></tr><tr><td>good act 3</td><td>宜3</td><td>取得本日民用所宜</td><td>string[]</td></tr><tr><td>bad act</td><td>忌</td><td>取得本日所忌</td><td>string[]</td></tr><tr><td>bad act 1</td><td>忌1</td><td>取得本日通书所忌</td><td>string[]</td></tr><tr><td>bad act 2</td><td>忌2</td><td>取得本日御用所忌</td><td>string[]</td></tr><tr><td>bad act 3</td><td>忌3</td><td>取得本日民用所忌</td><td>string[]</td></tr></tbody></table>",3);function W(X,Z){const l=i("RouterLink");return r(),s("div",null,[c,_,t("table",null,[h,t("tbody",null,[t("tr",null,[g,y,G,t("td",null,[o(l,{to:"/api/lunisolarClass.html"},{default:n(()=>[d("Lunisolar")]),_:1})])]),t("tr",null,[p,f,m,t("td",null,[o(l,{to:"/api/god.html"},{default:n(()=>[d("God[]")]),_:1})])]),t("tr",null,[b,k,D,t("td",null,[o(l,{to:"/api/god.html"},{default:n(()=>[d("God[]")]),_:1})])]),t("tr",null,[L,T,A,t("td",null,[o(l,{to:"/api/god.html"},{default:n(()=>[d("God[]")]),_:1})])]),t("tr",null,[x,K,N,t("td",null,[o(l,{to:"/api/god.html"},{default:n(()=>[d("God")]),_:1})])]),t("tr",null,[q,B,V,t("td",null,[o(l,{to:"/api/god.html"},{default:n(()=>[d("God")]),_:1})])]),M,S,v,w,z,t("tr",null,[C,t("td",null,[d("取得当日所有神煞吉方,将会返回元素为 **["),o(l,{to:"/api/direction24.html"},{default:n(()=>[d("二十四山对象")]),_:1}),d(", 神煞对象]**元组的列表")]),H,t("td",null,[t("strong",null,[d("["),o(l,{to:"/api/direction24.html"},{default:n(()=>[d("Direction24")]),_:1}),d(", God][]")])])]),t("tr",null,[O,t("td",null,[d("取得指定吉神所在方位,将会返回 **["),o(l,{to:"/api/direction24.html"},{default:n(()=>[d("二十四山对象")]),_:1}),d(", 神煞对象]**元组")]),R,Y]),E])]),F])}const j=e(a,[["render",W],["__file","theGods.html.vue"]]);export{j as default};