var e=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,p=(o,l,a)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[l]=a,r=(e,o)=>{for(var l in o||(o={}))n.call(o,l)&&p(e,l,o[l]);if(a)for(var l of a(o))t.call(o,l)&&p(e,l,o[l]);return e};import{c as s,f as c}from"./index.f4425738.js";import{u as d}from"./useBasicForm.87d36372.js";import{d as i,r as u,o as m,h as f,i as b,c as g,f as _,w as v,b as h,u as I,ao as y,s as P,az as q,av as w,e as k,g as O,E as j,v as A,x as C}from"./vendor.805d0475.js";import{_ as V,a as x}from"./index.303de588.js";const S=[{field:"client_id",component:"Input",label:"公众号AppId",required:!0,componentProps:{placeholder:"请输入公众号AppId"}},{field:"client_secret",component:"Input",label:"公众号Secret",required:!0,componentProps:{placeholder:"请输入公众号Secret"}}],z=[{field:"appid",component:"Input",label:"支付公众号AppId",required:!0,componentProps:{placeholder:"请输入公众号AppId"}},{field:"mch_id",component:"Input",label:"微信支付商户号",required:!0,componentProps:{placeholder:"请输入微信支付商户号(MCH_ID)"}},{field:"key",component:"Input",label:"微信支付密钥",required:!0,componentProps:{placeholder:"请输入微信支付密钥(API_KEY)"}}],L=[{field:"enable",component:"Switch",label:"开启短信登录",required:!0},{field:"account",component:"Input",label:"账号",required:!0,componentProps:{placeholder:"请输入账号"}},{field:"password",component:"Input",label:"密码",required:!0,componentProps:{placeholder:"请输入密码"}},{field:"sign",component:"Input",label:"签名",required:!0,componentProps:{placeholder:"请输入签名"}}],F=[{field:"client_id",component:"Input",label:"网站应用AppId",required:!0,componentProps:{placeholder:"请输入应用AppId"}},{field:"client_secret",component:"Input",label:"网站应用Secret",required:!0,componentProps:{placeholder:"请输入应用Secret"}}],G=[{field:"key_type",component:"Select",label:"密钥类型",required:!0,defaultValue:"gptlink",componentProps:{options:[{label:"GPTLink",value:"gptlink"},{label:"OpenAI",value:"openai"}]}},{field:"secret_key",component:"Input",label:"API密钥",required:!0,componentProps:{placeholder:"请输入api密钥"}},{field:"name",component:"Input",label:"站点名称",required:!1,componentProps:{placeholder:"输入网址名称"}},{field:"icp",component:"Input",label:"网站底部icp备案号",required:!1,componentProps:{placeholder:"请输入icp备案号"}},{field:"web_logo",component:"Input",label:"用户端LOGO",required:!1,slot:"web_logo"},{field:"admin_logo",component:"Input",label:"管理端LOGO",required:!1,slot:"admin_logo"}],R=[{field:"title",component:"Input",label:"协议标题",required:!0,componentProps:{placeholder:"请输入协议标题"}},{field:"agreement",component:"Input",label:"协议内容",required:!0,slot:"agreement"}];const T={class:"cb-page open"},U=(e=>(A("data-v-f865c5a8"),e=e(),C(),e))((()=>h("div",{style:{"margin-bottom":"10px"}},[O("GPTLink密钥获取："),h("a",{href:"https://gpt-link.com",target:"_blank"},"点此前往")],-1))),D={class:"cb-m-b-40"},E={class:"open-upload cb-flex"},B=["src"],H={key:2,class:"open-upload-mask"},K={class:"open-upload cb-flex"},M=["src"],Y={key:2,class:"open-upload-mask"},J={class:"cb-m-l-60"},N=O("确认");var Q=V(i({__name:"index",setup(e){const a=u("5"),n=u([{value:"5",name:"api接口密钥"},{value:"1",name:"微信公众号"},{value:"3",name:"微信网站应用"},{value:"2",name:"微信支付"},{value:"4",name:"创蓝短信配置"},{value:"6",name:"协议配置"}]),{register:t,validate:p,setFieldsValue:i,resetFields:O,setProps:A}=d({options:{labelCol:{span:6},wrapperCol:{span:6}},schemas:G});m((()=>{Q()}));const C=e=>{O();A({schemas:{1:S,2:z,3:F,4:L,5:G,6:R}[e]}),setTimeout((()=>{Q()}),50)},V=async()=>{try{const e=await p(),o={type:a.value,config:r({},e)};e.agreement&&(o.config={agreements:r({},e)});const{err_code:l}=await x().open.openConfig(o);l||j.success("保存成功")}catch(e){}},Q=async()=>{try{const{data:t}=await x().open.getConfig({type:a.value});"5"===a.value&&(t.config=(e=r({},t.config),n={admin_logo:t.config.admin_logo,web_logo:t.config.web_logo},o(e,l(n)))),i(r({},t.config))}catch(t){}var e,n},W=async(e,o)=>{const l=await Z(e);i({[o]:l})},X=e=>{i({[e]:""})},Z=e=>new Promise(((o,l)=>{let a=new FileReader;a.readAsDataURL(e),a.onload=e=>{o(e.target.result)}}));return(e,o)=>{const l=f("el-card"),p=f("CbTab"),r=f("el-icon"),d=f("el-button");return b(),g("div",T,[_(l,null,{default:v((()=>[U])),_:1}),_(l,{class:"open-main"},{default:v((()=>[h("div",D,[_(p,{tabs:n.value,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),onChange:C},null,8,["tabs","modelValue"])]),_(I(s),{onRegister:I(t)},{web_logo:v((({model:e,field:l})=>[_(I(y),{"show-file-list":!1,"http-request":()=>{},"before-upload":e=>W(e,"web_logo")},{default:v((()=>[h("div",E,[e[l]?(b(),g("img",{key:0,src:e[l],class:"open-upload-img"},null,8,B)):(b(),P(r,{key:1,class:"avatar-uploader-icon",size:30},{default:v((()=>[_(I(q))])),_:1})),e[l]?(b(),g("div",H,[_(r,{color:"#fff",class:"open-upload-del",size:26,onClick:o[1]||(o[1]=e=>X("web_logo"))},{default:v((()=>[_(I(w))])),_:1})])):k("",!0)])])),_:2},1032,["http-request","before-upload"])])),admin_logo:v((({model:e,field:l})=>[_(I(y),{"show-file-list":!1,"http-request":()=>{},"before-upload":e=>W(e,"admin_logo")},{default:v((()=>[h("div",K,[e[l]?(b(),g("img",{key:0,src:e[l],class:"open-upload-img"},null,8,M)):(b(),P(r,{key:1,class:"avatar-uploader-icon",size:30},{default:v((()=>[_(I(q))])),_:1})),e[l]?(b(),g("div",Y,[_(r,{color:"#fff",class:"open-upload-del",size:26,onClick:o[2]||(o[2]=e=>X("admin_logo"))},{default:v((()=>[_(I(w))])),_:1})])):k("",!0)])])),_:2},1032,["http-request","before-upload"])])),agreement:v((({model:e,field:o})=>[_(I(c),{modelValue:e[o],"onUpdate:modelValue":l=>e[o]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["onRegister"]),h("div",J,[_(d,{type:"primary",onClick:V},{default:v((()=>[N])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-f865c5a8"]]);export{Q as default};
