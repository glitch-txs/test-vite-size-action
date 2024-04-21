import{watchConnectors as wd,watchAccount as gd,getEnsName as md,getEnsAvatar as vd,getBalance as bd,switchChain as yd,connect as Ic,disconnect as xd,signMessage as Cd,createConnector as _d,normalizeChainId as Bs,createConfig as Ed,reconnect as Ad}from"@wagmi/core";import{http as Oc,SwitchChainError as Nc,getAddress as $d}from"viem";import{walletConnect as Sd,injected as Rd,coinbaseWallet as Td}from"@wagmi/connectors";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const kd="modulepreload",Id=function(i){return"/"+i},Pc={},hn=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(t.map(s=>{if(s=Id(s),s in Pc)return;Pc[s]=!0;const u=s.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${h}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":kd,u||(b.as="script",b.crossOrigin=""),b.href=s,a&&b.setAttribute("nonce",a),document.head.appendChild(b),u)return new Promise((k,N)=>{b.addEventListener("load",k),b.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wl(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Uu(i){return{formatters:void 0,fees:void 0,serializers:void 0,...i}}const Od=Uu({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),ju=Uu({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),Nd=Symbol(),Mc=Object.getPrototypeOf,dl=new WeakMap,Pd=i=>i&&(dl.has(i)?dl.get(i):Mc(i)===Object.prototype||Mc(i)===Array.prototype),Md=i=>Pd(i)&&i[Nd]||null,Lc=(i,e=!0)=>{dl.set(i,e)};var Ca={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Us=i=>typeof i=="object"&&i!==null,Yi=new WeakMap,eo=new WeakSet,Ld=(i=Object.is,e=(h,b)=>new Proxy(h,b),t=h=>Us(h)&&!eo.has(h)&&(Array.isArray(h)||!(Symbol.iterator in h))&&!(h instanceof WeakMap)&&!(h instanceof WeakSet)&&!(h instanceof Error)&&!(h instanceof Number)&&!(h instanceof Date)&&!(h instanceof String)&&!(h instanceof RegExp)&&!(h instanceof ArrayBuffer),n=h=>{switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:throw h}},o=new WeakMap,r=(h,b,k=n)=>{const N=o.get(h);if((N==null?void 0:N[0])===b)return N[1];const P=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h));return Lc(P,!0),o.set(h,[b,P]),Reflect.ownKeys(h).forEach(j=>{if(Object.getOwnPropertyDescriptor(P,j))return;const V=Reflect.get(h,j),K={value:V,enumerable:!0,configurable:!0};if(eo.has(V))Lc(V,!1);else if(V instanceof Promise)delete K.value,K.get=()=>k(V);else if(Yi.has(V)){const[Z,I]=Yi.get(V);K.value=r(Z,I(),k)}Object.defineProperty(P,j,K)}),Object.preventExtensions(P)},a=new WeakMap,s=[1,1],u=h=>{if(!Us(h))throw new Error("object required");const b=a.get(h);if(b)return b;let k=s[0];const N=new Set,P=(f,w=++s[0])=>{k!==w&&(k=w,N.forEach(C=>C(f,w)))};let j=s[1];const V=(f=++s[1])=>(j!==f&&!N.size&&(j=f,Z.forEach(([w])=>{const C=w[1](f);C>k&&(k=C)})),k),K=f=>(w,C)=>{const A=[...w];A[1]=[f,...A[1]],P(A,C)},Z=new Map,I=(f,w)=>{if((Ca?"production":void 0)!=="production"&&Z.has(f))throw new Error("prop listener already exists");if(N.size){const C=w[3](K(f));Z.set(f,[w,C])}else Z.set(f,[w])},J=f=>{var w;const C=Z.get(f);C&&(Z.delete(f),(w=C[1])==null||w.call(C))},q=f=>(N.add(f),N.size===1&&Z.forEach(([C,A],T)=>{if((Ca?"production":void 0)!=="production"&&A)throw new Error("remove already exists");const S=C[3](K(T));Z.set(T,[C,S])}),()=>{N.delete(f),N.size===0&&Z.forEach(([C,A],T)=>{A&&(A(),Z.set(T,[C]))})}),re=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h)),Ee=e(re,{deleteProperty(f,w){const C=Reflect.get(f,w);J(w);const A=Reflect.deleteProperty(f,w);return A&&P(["delete",[w],C]),A},set(f,w,C,A){const T=Reflect.has(f,w),S=Reflect.get(f,w,A);if(T&&(i(S,C)||a.has(C)&&i(S,a.get(C))))return!0;J(w),Us(C)&&(C=Md(C)||C);let y=C;if(C instanceof Promise)C.then(x=>{C.status="fulfilled",C.value=x,P(["resolve",[w],x])}).catch(x=>{C.status="rejected",C.reason=x,P(["reject",[w],x])});else{!Yi.has(C)&&t(C)&&(y=u(C));const x=!eo.has(y)&&Yi.get(y);x&&I(w,x)}return Reflect.set(f,w,y,A),P(["set",[w],C,S]),!0}});a.set(h,Ee);const p=[re,V,r,q];return Yi.set(Ee,p),Reflect.ownKeys(h).forEach(f=>{const w=Object.getOwnPropertyDescriptor(h,f);"value"in w&&(Ee[f]=h[f],delete w.value,delete w.writable),Object.defineProperty(re,f,w)}),Ee})=>[u,Yi,eo,i,e,t,n,o,r,a,s],[Dd]=Ld();function vt(i={}){return Dd(i)}function zt(i,e,t){const n=Yi.get(i);(Ca?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let o;const r=[],a=n[3];let s=!1;const h=a(b=>{r.push(b),o||(o=Promise.resolve().then(()=>{o=void 0,s&&e(r.splice(0))}))});return s=!0,()=>{s=!1,h()}}function Wu(i,e){const t=Yi.get(i);(Ca?"production":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[n,o,r]=t;return r(n,o(),e)}function gn(i){return eo.add(i),i}function Gt(i,e,t,n){let o=i[e];return zt(i,()=>{const r=i[e];Object.is(o,r)||t(o=r)})}const js="https://secure.walletconnect.com",Fu=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],Qt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:js,SECURE_SITE_DASHBOARD:`${js}/dashboard`,SECURE_SITE_FAVICON:`${js}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},ie={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(i,e=""){return i==null?void 0:i.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const i=window.navigator.userAgent.toLowerCase();return ie.isMobile()&&i.includes("android")},isIos(){const i=window.navigator.userAgent.toLowerCase();return ie.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(i){return i?i-Date.now()<=Qt.TEN_SEC_MS:!0},isAllowedRetry(i){return Date.now()-i>=Qt.ONE_SEC_MS},copyToClopboard(i){navigator.clipboard.writeText(i)},getPairingExpiry(){return Date.now()+Qt.FOUR_MINUTES_MS},getPlainAddress(i){return i.split(":")[2]},async wait(i){return new Promise(e=>{setTimeout(e,i)})},debounce(i,e=500){let t;return(...n)=>{function o(){i(...n)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},formatNativeUrl(i,e){if(ie.isHttpUrl(i))return this.formatUniversalUrl(i,e);let t=i;t.includes("://")||(t=i.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const n=encodeURIComponent(e);return{redirect:`${t}wc?uri=${n}`,href:t}},formatUniversalUrl(i,e){if(!ie.isHttpUrl(i))return this.formatNativeUrl(i,e);let t=i;t.endsWith("/")||(t=`${t}/`);const n=encodeURIComponent(e);return{redirect:`${t}wc?uri=${n}`,href:t}},openHref(i,e,t){window.open(i,e,t||"noreferrer noopener")},async preloadImage(i){const e=new Promise((t,n)=>{const o=new Image;o.onload=t,o.onerror=n,o.crossOrigin="anonymous",o.src=i});return Promise.race([e,ie.wait(2e3)])},formatBalance(i,e){var n;let t;if(i==="0")t="0.000";else if(typeof i=="string"){const o=Number(i);o&&(t=(n=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return t?`${t} ${e??""}`:`0.000 ${e??""}`},formatBalance2(i,e){var n;let t;if(i==="0")t="0";else if(typeof i=="string"){const o=Number(i);o&&(t=(n=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return{value:t??"0",rest:t==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return Qt.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return ie.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return ie.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return ie.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,i=>{const e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)})},parseError(i){var e,t;return typeof i=="string"?i:typeof((t=(e=i==null?void 0:i.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?i.issues[0].message:i instanceof Error?i.message:"Unknown error"},sortRequestedNetworks(i,e=[]){const t={};return e&&i&&(i.forEach((n,o)=>{t[n]=o}),e.sort((n,o)=>{const r=t[n.id],a=t[o.id];return r!==void 0&&a!==void 0?r-a:r!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(i){let e=0;for(const t of i)e+=t.value??0;return e},formatTokenBalance(i){const e=i.toFixed(2),[t,n]=e.split(".");return{dollars:t,pennies:n}},isAddress(i){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)||/^(?:0x)?[0-9A-F]{40}$/iu.test(i))return!0}else return!1;return!1}};class Fl{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:n,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async put({body:e,headers:t,signal:n,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async delete({body:e,headers:t,signal:n,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}createUrl({path:e,params:t}){const n=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,r])=>{r&&n.searchParams.append(o,r)}),n}}const dt=vt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),we={state:dt,subscribeKey(i,e){return Gt(dt,i,e)},setProjectId(i){dt.projectId=i},setAllWallets(i){dt.allWallets=i},setIncludeWalletIds(i){dt.includeWalletIds=i},setExcludeWalletIds(i){dt.excludeWalletIds=i},setFeaturedWalletIds(i){dt.featuredWalletIds=i},setTokens(i){dt.tokens=i},setTermsConditionsUrl(i){dt.termsConditionsUrl=i},setPrivacyPolicyUrl(i){dt.privacyPolicyUrl=i},setCustomWallets(i){dt.customWallets=i},setIsSiweEnabled(i){dt.isSiweEnabled=i},setEnableAnalytics(i){dt.enableAnalytics=i},setSdkVersion(i){dt.sdkVersion=i},setMetadata(i){dt.metadata=i},setOnrampEnabled(i){dt.enableOnramp=i},setWalletFeaturesEnabled(i){dt.enableWalletFeatures=i}},Bd={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Ud=ie.getBlockchainApiUrl(),an=new Fl({baseUrl:Ud}),kr={fetchIdentity({address:i}){return an.get({path:`/v1/identity/${i}`,params:{projectId:we.state.projectId}})},fetchTransactions({account:i,projectId:e,cursor:t,onramp:n,signal:o}){const r=t?{cursor:t}:{};return an.get({path:`/v1/account/${i}/history?projectId=${e}${n?`&onramp=${n}`:""}`,params:r,signal:o})},async getBalance(i){const{sdkType:e,sdkVersion:t}=we.state;return an.get({path:`/v1/account/${i}/balance`,headers:{"x-sdk-type":e,"x-sdk-version":t},params:{currency:"usd",projectId:we.state.projectId}})},async generateOnRampURL({destinationWallets:i,partnerUserId:e,defaultNetwork:t,purchaseAmount:n,paymentAmount:o}){return(await an.post({path:`/v1/generators/onrampurl?projectId=${we.state.projectId}`,body:{destinationWallets:i,defaultNetwork:t,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:n,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await an.get({path:`/v1/onramp/options?projectId=${we.state.projectId}`})}catch{return Bd}},async getOnrampQuote({purchaseCurrency:i,paymentCurrency:e,amount:t,network:n}){try{return await an.post({path:`/v1/onramp/quote?projectId=${we.state.projectId}`,body:{purchaseCurrency:i,paymentCurrency:e,amount:t,network:n}})}catch{return{coinbaseFee:{amount:t,currency:e.id},networkFee:{amount:t,currency:e.id},paymentSubtotal:{amount:t,currency:e.id},paymentTotal:{amount:t,currency:e.id},purchaseAmount:{amount:t,currency:e.id},quoteId:"mocked-quote-id"}}}},Si=vt({message:"",variant:"success",open:!1}),Pe={state:Si,subscribeKey(i,e){return Gt(Si,i,e)},showSuccess(i){Si.message=i,Si.variant="success",Si.open=!0},showError(i){const e=ie.parseError(i);Si.message=e,Si.variant="error",Si.open=!0},hide(){Si.open=!1}},Be=vt({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),oe={state:Be,subscribe(i){return zt(Be,()=>i(Be))},subscribeKey(i,e){return Gt(Be,i,e)},setIsConnected(i){Be.isConnected=i},setCaipAddress(i){Be.caipAddress=i,Be.address=i?ie.getPlainAddress(i):void 0},setBalance(i,e){Be.balance=i,Be.balanceSymbol=e},setProfileName(i){Be.profileName=i},setProfileImage(i){Be.profileImage=i},setAddressExplorerUrl(i){Be.addressExplorerUrl=i},setSmartAccountDeployed(i){Be.smartAccountDeployed=i},setCurrentTab(i){Be.currentTab=i},setTokenBalance(i){i&&(Be.tokenBalance=gn(i))},setConnectedWalletInfo(i){Be.connectedWalletInfo=i},async fetchTokenBalance(){try{if(Be.address){const i=await kr.getBalance(Be.address);this.setTokenBalance(i.balances)}}catch{Pe.showError("Failed to fetch token balance")}},resetAccount(){Be.isConnected=!1,Be.smartAccountDeployed=!1,Be.currentTab=0,Be.caipAddress=void 0,Be.address=void 0,Be.balance=void 0,Be.balanceSymbol=void 0,Be.profileName=void 0,Be.profileImage=void 0,Be.addressExplorerUrl=void 0,Be.tokenBalance=[],Be.connectedWalletInfo=void 0}},Ws="WALLETCONNECT_DEEPLINK_CHOICE",Dc="@w3m/recent",Bc="@w3m/connected_wallet_image_url",Uc="@w3m/connected_connector",ct={setWalletConnectDeepLink({href:i,name:e}){try{localStorage.setItem(Ws,JSON.stringify({href:i,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const i=localStorage.getItem(Ws);if(i)return JSON.parse(i)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Ws)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(i){try{const e=ct.getRecentWallets();e.find(n=>n.id===i.id)||(e.unshift(i),e.length>2&&e.pop(),localStorage.setItem(Dc,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const i=localStorage.getItem(Dc);return i?JSON.parse(i):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(i){try{localStorage.setItem(Bc,i)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Bc)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(i){try{localStorage.setItem(Uc,i)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Uc)}catch{console.info("Unable to get Connected Connector")}}},Kt=vt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),lt={state:Kt,subscribeNetworkImages(i){return zt(Kt.networkImages,()=>i(Kt.networkImages))},subscribeKey(i,e){return Gt(Kt,i,e)},subscribe(i){return zt(Kt,()=>i(Kt))},setWalletImage(i,e){Kt.walletImages[i]=e},setNetworkImage(i,e){Kt.networkImages[i]=e},setConnectorImage(i,e){Kt.connectorImages[i]=e},setTokenImage(i,e){Kt.tokenImages[i]=e},setCurrencyImage(i,e){Kt.currencyImages[i]=e}},br=vt({themeMode:"dark",themeVariables:{}}),ot={state:br,subscribe(i){return zt(br,()=>i(br))},setThemeMode(i){br.themeMode=i;try{const e=je.getEmailConnector();e&&e.provider.syncTheme({themeMode:ot.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(i){br.themeVariables={...br.themeVariables,...i};try{const e=je.getEmailConnector();e&&e.provider.syncTheme({themeVariables:ot.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return Wu(br)}},Zi=vt({connectors:[]}),je={state:Zi,subscribeKey(i,e){return Gt(Zi,i,e)},setConnectors(i){Zi.connectors=i.map(e=>gn(e))},addConnector(i){var e,t;if(Zi.connectors.push(gn(i)),i.id==="w3mEmail"){const n=i,o=Wu(we.state);(t=(e=n==null?void 0:n.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),n.provider.syncTheme({themeMode:ot.getSnapshot().themeMode,themeVariables:ot.getSnapshot().themeVariables})}},getEmailConnector(){return Zi.connectors.find(i=>i.type==="EMAIL")},getAnnouncedConnectorRdns(){return Zi.connectors.filter(i=>i.type==="ANNOUNCED").map(i=>{var e;return(e=i.info)==null?void 0:e.rdns})},getConnectors(){return Zi.connectors},getConnector(i,e){return Zi.connectors.find(t=>{var n;return t.explorerId===i||((n=t.info)==null?void 0:n.rdns)===e})}},Jn=vt({loading:!1,open:!1,selectedNetworkId:void 0}),Rr={state:Jn,subscribe(i){return zt(Jn,()=>i(Jn))},set(i){Object.assign(Jn,{...Jn,...i})}},jd=ie.getAnalyticsUrl(),Wd=new Fl({baseUrl:jd}),Fd=["MODAL_CREATED"],sn=vt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),he={state:sn,subscribe(i){return zt(sn,()=>i(sn))},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=we.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(i){try{if(Fd.includes(i.data.event)||typeof window>"u")return;await Wd.post({path:"/e",headers:he._getApiHeaders(),body:{eventId:ie.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:i.timestamp,props:i.data}})}catch{}},sendEvent(i){sn.timestamp=Date.now(),sn.data=i,we.state.enableAnalytics&&he._sendAnalyticsEvent(sn)}};var zu={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(jl,function(){var t=1e3,n=6e4,o=36e5,r="millisecond",a="second",s="minute",u="hour",h="day",b="week",k="month",N="quarter",P="year",j="date",V="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(S){var y=["th","st","nd","rd"],x=S%100;return"["+S+(y[(x-20)%10]||y[x]||y[0])+"]"}},J=function(S,y,x){var $=String(S);return!$||$.length>=y?S:""+Array(y+1-$.length).join(x)+S},q={s:J,z:function(S){var y=-S.utcOffset(),x=Math.abs(y),$=Math.floor(x/60),E=x%60;return(y<=0?"+":"-")+J($,2,"0")+":"+J(E,2,"0")},m:function S(y,x){if(y.date()<x.date())return-S(x,y);var $=12*(x.year()-y.year())+(x.month()-y.month()),E=y.clone().add($,k),M=x-E<0,F=y.clone().add($+(M?-1:1),k);return+(-($+(x-E)/(M?E-F:F-E))||0)},a:function(S){return S<0?Math.ceil(S)||0:Math.floor(S)},p:function(S){return{M:k,y:P,w:b,d:h,D:j,h:u,m:s,s:a,ms:r,Q:N}[S]||String(S||"").toLowerCase().replace(/s$/,"")},u:function(S){return S===void 0}},re="en",ce={};ce[re]=I;var Ee="$isDayjsObject",p=function(S){return S instanceof A||!(!S||!S[Ee])},f=function S(y,x,$){var E;if(!y)return re;if(typeof y=="string"){var M=y.toLowerCase();ce[M]&&(E=M),x&&(ce[M]=x,E=M);var F=y.split("-");if(!E&&F.length>1)return S(F[0])}else{var z=y.name;ce[z]=y,E=z}return!$&&E&&(re=E),E||!$&&re},w=function(S,y){if(p(S))return S.clone();var x=typeof y=="object"?y:{};return x.date=S,x.args=arguments,new A(x)},C=q;C.l=f,C.i=p,C.w=function(S,y){return w(S,{locale:y.$L,utc:y.$u,x:y.$x,$offset:y.$offset})};var A=function(){function S(x){this.$L=f(x.locale,null,!0),this.parse(x),this.$x=this.$x||x.x||{},this[Ee]=!0}var y=S.prototype;return y.parse=function(x){this.$d=function($){var E=$.date,M=$.utc;if(E===null)return new Date(NaN);if(C.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var F=E.match(K);if(F){var z=F[2]-1||0,ee=(F[7]||"0").substring(0,3);return M?new Date(Date.UTC(F[1],z,F[3]||1,F[4]||0,F[5]||0,F[6]||0,ee)):new Date(F[1],z,F[3]||1,F[4]||0,F[5]||0,F[6]||0,ee)}}return new Date(E)}(x),this.init()},y.init=function(){var x=this.$d;this.$y=x.getFullYear(),this.$M=x.getMonth(),this.$D=x.getDate(),this.$W=x.getDay(),this.$H=x.getHours(),this.$m=x.getMinutes(),this.$s=x.getSeconds(),this.$ms=x.getMilliseconds()},y.$utils=function(){return C},y.isValid=function(){return this.$d.toString()!==V},y.isSame=function(x,$){var E=w(x);return this.startOf($)<=E&&E<=this.endOf($)},y.isAfter=function(x,$){return w(x)<this.startOf($)},y.isBefore=function(x,$){return this.endOf($)<w(x)},y.$g=function(x,$,E){return C.u(x)?this[$]:this.set(E,x)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(x,$){var E=this,M=!!C.u($)||$,F=C.p(x),z=function(bt,et){var tt=C.w(E.$u?Date.UTC(E.$y,et,bt):new Date(E.$y,et,bt),E);return M?tt:tt.endOf(h)},ee=function(bt,et){return C.w(E.toDate()[bt].apply(E.toDate("s"),(M?[0,0,0,0]:[23,59,59,999]).slice(et)),E)},xe=this.$W,Te=this.$M,ge=this.$D,ke="set"+(this.$u?"UTC":"");switch(F){case P:return M?z(1,0):z(31,11);case k:return M?z(1,Te):z(0,Te+1);case b:var Fe=this.$locale().weekStart||0,ut=(xe<Fe?xe+7:xe)-Fe;return z(M?ge-ut:ge+(6-ut),Te);case h:case j:return ee(ke+"Hours",0);case u:return ee(ke+"Minutes",1);case s:return ee(ke+"Seconds",2);case a:return ee(ke+"Milliseconds",3);default:return this.clone()}},y.endOf=function(x){return this.startOf(x,!1)},y.$set=function(x,$){var E,M=C.p(x),F="set"+(this.$u?"UTC":""),z=(E={},E[h]=F+"Date",E[j]=F+"Date",E[k]=F+"Month",E[P]=F+"FullYear",E[u]=F+"Hours",E[s]=F+"Minutes",E[a]=F+"Seconds",E[r]=F+"Milliseconds",E)[M],ee=M===h?this.$D+($-this.$W):$;if(M===k||M===P){var xe=this.clone().set(j,1);xe.$d[z](ee),xe.init(),this.$d=xe.set(j,Math.min(this.$D,xe.daysInMonth())).$d}else z&&this.$d[z](ee);return this.init(),this},y.set=function(x,$){return this.clone().$set(x,$)},y.get=function(x){return this[C.p(x)]()},y.add=function(x,$){var E,M=this;x=Number(x);var F=C.p($),z=function(Te){var ge=w(M);return C.w(ge.date(ge.date()+Math.round(Te*x)),M)};if(F===k)return this.set(k,this.$M+x);if(F===P)return this.set(P,this.$y+x);if(F===h)return z(1);if(F===b)return z(7);var ee=(E={},E[s]=n,E[u]=o,E[a]=t,E)[F]||1,xe=this.$d.getTime()+x*ee;return C.w(xe,this)},y.subtract=function(x,$){return this.add(-1*x,$)},y.format=function(x){var $=this,E=this.$locale();if(!this.isValid())return E.invalidDate||V;var M=x||"YYYY-MM-DDTHH:mm:ssZ",F=C.z(this),z=this.$H,ee=this.$m,xe=this.$M,Te=E.weekdays,ge=E.months,ke=E.meridiem,Fe=function(et,tt,At,He){return et&&(et[tt]||et($,M))||At[tt].slice(0,He)},ut=function(et){return C.s(z%12||12,et,"0")},bt=ke||function(et,tt,At){var He=et<12?"AM":"PM";return At?He.toLowerCase():He};return M.replace(Z,function(et,tt){return tt||function(At){switch(At){case"YY":return String($.$y).slice(-2);case"YYYY":return C.s($.$y,4,"0");case"M":return xe+1;case"MM":return C.s(xe+1,2,"0");case"MMM":return Fe(E.monthsShort,xe,ge,3);case"MMMM":return Fe(ge,xe);case"D":return $.$D;case"DD":return C.s($.$D,2,"0");case"d":return String($.$W);case"dd":return Fe(E.weekdaysMin,$.$W,Te,2);case"ddd":return Fe(E.weekdaysShort,$.$W,Te,3);case"dddd":return Te[$.$W];case"H":return String(z);case"HH":return C.s(z,2,"0");case"h":return ut(1);case"hh":return ut(2);case"a":return bt(z,ee,!0);case"A":return bt(z,ee,!1);case"m":return String(ee);case"mm":return C.s(ee,2,"0");case"s":return String($.$s);case"ss":return C.s($.$s,2,"0");case"SSS":return C.s($.$ms,3,"0");case"Z":return F}return null}(et)||F.replace(":","")})},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(x,$,E){var M,F=this,z=C.p($),ee=w(x),xe=(ee.utcOffset()-this.utcOffset())*n,Te=this-ee,ge=function(){return C.m(F,ee)};switch(z){case P:M=ge()/12;break;case k:M=ge();break;case N:M=ge()/3;break;case b:M=(Te-xe)/6048e5;break;case h:M=(Te-xe)/864e5;break;case u:M=Te/o;break;case s:M=Te/n;break;case a:M=Te/t;break;default:M=Te}return E?M:C.a(M)},y.daysInMonth=function(){return this.endOf(k).$D},y.$locale=function(){return ce[this.$L]},y.locale=function(x,$){if(!x)return this.$L;var E=this.clone(),M=f(x,$,!0);return M&&(E.$L=M),E},y.clone=function(){return C.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},S}(),T=A.prototype;return w.prototype=T,[["$ms",r],["$s",a],["$m",s],["$H",u],["$W",h],["$M",k],["$y",P],["$D",j]].forEach(function(S){T[S[1]]=function(y){return this.$g(y,S[0],S[1])}}),w.extend=function(S,y){return S.$i||(S(y,A,w),S.$i=!0),w},w.locale=f,w.isDayjs=p,w.unix=function(S){return w(1e3*S)},w.en=ce[re],w.Ls=ce,w.p={},w})})(zu);var zd=zu.exports;const pn=Wl(zd);var Hu={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(jl,function(){return function(t,n,o){o.updateLocale=function(r,a){var s=o.Ls[r];if(s)return(a?Object.keys(a):[]).forEach(function(u){s[u]=a[u]}),s}}})})(Hu);var Hd=Hu.exports;const Vd=Wl(Hd);var Vu={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(jl,function(){return function(t,n,o){t=t||{};var r=n.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(h,b,k,N){return r.fromToBase(h,b,k,N)}o.en.relativeTime=a,r.fromToBase=function(h,b,k,N,P){for(var j,V,K,Z=k.$locale().relativeTime||a,I=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],J=I.length,q=0;q<J;q+=1){var re=I[q];re.d&&(j=N?o(h).diff(k,re.d,!0):k.diff(h,re.d,!0));var ce=(t.rounding||Math.round)(Math.abs(j));if(K=j>0,ce<=re.r||!re.r){ce<=1&&q>0&&(re=I[q-1]);var Ee=Z[re.l];P&&(ce=P(""+ce)),V=typeof Ee=="string"?Ee.replace("%d",ce):Ee(ce,b,re.l,K);break}}if(b)return V;var p=K?Z.future:Z.past;return typeof p=="function"?p(V):p.replace("%s",V)},r.to=function(h,b){return s(h,b,this,!0)},r.from=function(h,b){return s(h,b,this)};var u=function(h){return h.$u?o.utc():o()};r.toNow=function(h){return this.to(u(this),h)},r.fromNow=function(h){return this.from(u(this),h)}}})})(Vu);var Zd=Vu.exports;const Gd=Wl(Zd);pn.extend(Gd);pn.extend(Vd);pn.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const zl={getYear(i=new Date().toISOString()){return pn(i).year()},getRelativeDateFromNow(i){return pn(i).fromNow(!0)},formatDate(i,e="DD MMM"){return pn(i).format(e)}},Er={caipNetworkIdToNumber(i){return i?Number(i.split(":")[1]):void 0}};var Yd=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Fs=Math.ceil,jt=Math.floor,St="[BigNumber Error] ",jc=St+"Number primitive has more than 15 significant digits: ",Jt=1e14,Ae=14,zs=9007199254740991,Hs=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Gi=1e7,at=1e9;function Zu(i){var e,t,n,o=I.prototype={constructor:I,toString:null,valueOf:null},r=new I(1),a=20,s=4,u=-7,h=21,b=-1e7,k=1e7,N=!1,P=1,j=0,V={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},K="0123456789abcdefghijklmnopqrstuvwxyz",Z=!0;function I(p,f){var w,C,A,T,S,y,x,$,E=this;if(!(E instanceof I))return new I(p,f);if(f==null){if(p&&p._isBigNumber===!0){E.s=p.s,!p.c||p.e>k?E.c=E.e=null:p.e<b?E.c=[E.e=0]:(E.e=p.e,E.c=p.c.slice());return}if((y=typeof p=="number")&&p*0==0){if(E.s=1/p<0?(p=-p,-1):1,p===~~p){for(T=0,S=p;S>=10;S/=10,T++);T>k?E.c=E.e=null:(E.e=T,E.c=[p]);return}$=String(p)}else{if(!Yd.test($=String(p)))return n(E,$,y);E.s=$.charCodeAt(0)==45?($=$.slice(1),-1):1}(T=$.indexOf("."))>-1&&($=$.replace(".","")),(S=$.search(/e/i))>0?(T<0&&(T=S),T+=+$.slice(S+1),$=$.substring(0,S)):T<0&&(T=$.length)}else{if(qe(f,2,K.length,"Base"),f==10&&Z)return E=new I(p),ce(E,a+E.e+1,s);if($=String(p),y=typeof p=="number"){if(p*0!=0)return n(E,$,y,f);if(E.s=1/p<0?($=$.slice(1),-1):1,I.DEBUG&&$.replace(/^0\.0*|\./,"").length>15)throw Error(jc+p)}else E.s=$.charCodeAt(0)===45?($=$.slice(1),-1):1;for(w=K.slice(0,f),T=S=0,x=$.length;S<x;S++)if(w.indexOf(C=$.charAt(S))<0){if(C=="."){if(S>T){T=x;continue}}else if(!A&&($==$.toUpperCase()&&($=$.toLowerCase())||$==$.toLowerCase()&&($=$.toUpperCase()))){A=!0,S=-1,T=0;continue}return n(E,String(p),y,f)}y=!1,$=t($,f,10,E.s),(T=$.indexOf("."))>-1?$=$.replace(".",""):T=$.length}for(S=0;$.charCodeAt(S)===48;S++);for(x=$.length;$.charCodeAt(--x)===48;);if($=$.slice(S,++x)){if(x-=S,y&&I.DEBUG&&x>15&&(p>zs||p!==jt(p)))throw Error(jc+E.s*p);if((T=T-S-1)>k)E.c=E.e=null;else if(T<b)E.c=[E.e=0];else{if(E.e=T,E.c=[],S=(T+1)%Ae,T<0&&(S+=Ae),S<x){for(S&&E.c.push(+$.slice(0,S)),x-=Ae;S<x;)E.c.push(+$.slice(S,S+=Ae));S=Ae-($=$.slice(S)).length}else S-=x;for(;S--;$+="0");E.c.push(+$)}}else E.c=[E.e=0]}I.clone=Zu,I.ROUND_UP=0,I.ROUND_DOWN=1,I.ROUND_CEIL=2,I.ROUND_FLOOR=3,I.ROUND_HALF_UP=4,I.ROUND_HALF_DOWN=5,I.ROUND_HALF_EVEN=6,I.ROUND_HALF_CEIL=7,I.ROUND_HALF_FLOOR=8,I.EUCLID=9,I.config=I.set=function(p){var f,w;if(p!=null)if(typeof p=="object"){if(p.hasOwnProperty(f="DECIMAL_PLACES")&&(w=p[f],qe(w,0,at,f),a=w),p.hasOwnProperty(f="ROUNDING_MODE")&&(w=p[f],qe(w,0,8,f),s=w),p.hasOwnProperty(f="EXPONENTIAL_AT")&&(w=p[f],w&&w.pop?(qe(w[0],-at,0,f),qe(w[1],0,at,f),u=w[0],h=w[1]):(qe(w,-at,at,f),u=-(h=w<0?-w:w))),p.hasOwnProperty(f="RANGE"))if(w=p[f],w&&w.pop)qe(w[0],-at,-1,f),qe(w[1],1,at,f),b=w[0],k=w[1];else if(qe(w,-at,at,f),w)b=-(k=w<0?-w:w);else throw Error(St+f+" cannot be zero: "+w);if(p.hasOwnProperty(f="CRYPTO"))if(w=p[f],w===!!w)if(w)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))N=w;else throw N=!w,Error(St+"crypto unavailable");else N=w;else throw Error(St+f+" not true or false: "+w);if(p.hasOwnProperty(f="MODULO_MODE")&&(w=p[f],qe(w,0,9,f),P=w),p.hasOwnProperty(f="POW_PRECISION")&&(w=p[f],qe(w,0,at,f),j=w),p.hasOwnProperty(f="FORMAT"))if(w=p[f],typeof w=="object")V=w;else throw Error(St+f+" not an object: "+w);if(p.hasOwnProperty(f="ALPHABET"))if(w=p[f],typeof w=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(w))Z=w.slice(0,10)=="0123456789",K=w;else throw Error(St+f+" invalid: "+w)}else throw Error(St+"Object expected: "+p);return{DECIMAL_PLACES:a,ROUNDING_MODE:s,EXPONENTIAL_AT:[u,h],RANGE:[b,k],CRYPTO:N,MODULO_MODE:P,POW_PRECISION:j,FORMAT:V,ALPHABET:K}},I.isBigNumber=function(p){if(!p||p._isBigNumber!==!0)return!1;if(!I.DEBUG)return!0;var f,w,C=p.c,A=p.e,T=p.s;e:if({}.toString.call(C)=="[object Array]"){if((T===1||T===-1)&&A>=-at&&A<=at&&A===jt(A)){if(C[0]===0){if(A===0&&C.length===1)return!0;break e}if(f=(A+1)%Ae,f<1&&(f+=Ae),String(C[0]).length==f){for(f=0;f<C.length;f++)if(w=C[f],w<0||w>=Jt||w!==jt(w))break e;if(w!==0)return!0}}}else if(C===null&&A===null&&(T===null||T===1||T===-1))return!0;throw Error(St+"Invalid BigNumber: "+p)},I.maximum=I.max=function(){return q(arguments,-1)},I.minimum=I.min=function(){return q(arguments,1)},I.random=function(){var p=9007199254740992,f=Math.random()*p&2097151?function(){return jt(Math.random()*p)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(w){var C,A,T,S,y,x=0,$=[],E=new I(r);if(w==null?w=a:qe(w,0,at),S=Fs(w/Ae),N)if(crypto.getRandomValues){for(C=crypto.getRandomValues(new Uint32Array(S*=2));x<S;)y=C[x]*131072+(C[x+1]>>>11),y>=9e15?(A=crypto.getRandomValues(new Uint32Array(2)),C[x]=A[0],C[x+1]=A[1]):($.push(y%1e14),x+=2);x=S/2}else if(crypto.randomBytes){for(C=crypto.randomBytes(S*=7);x<S;)y=(C[x]&31)*281474976710656+C[x+1]*1099511627776+C[x+2]*4294967296+C[x+3]*16777216+(C[x+4]<<16)+(C[x+5]<<8)+C[x+6],y>=9e15?crypto.randomBytes(7).copy(C,x):($.push(y%1e14),x+=7);x=S/7}else throw N=!1,Error(St+"crypto unavailable");if(!N)for(;x<S;)y=f(),y<9e15&&($[x++]=y%1e14);for(S=$[--x],w%=Ae,S&&w&&(y=Hs[Ae-w],$[x]=jt(S/y)*y);$[x]===0;$.pop(),x--);if(x<0)$=[T=0];else{for(T=-1;$[0]===0;$.splice(0,1),T-=Ae);for(x=1,y=$[0];y>=10;y/=10,x++);x<Ae&&(T-=Ae-x)}return E.e=T,E.c=$,E}}(),I.sum=function(){for(var p=1,f=arguments,w=new I(f[0]);p<f.length;)w=w.plus(f[p++]);return w},t=function(){var p="0123456789";function f(w,C,A,T){for(var S,y=[0],x,$=0,E=w.length;$<E;){for(x=y.length;x--;y[x]*=C);for(y[0]+=T.indexOf(w.charAt($++)),S=0;S<y.length;S++)y[S]>A-1&&(y[S+1]==null&&(y[S+1]=0),y[S+1]+=y[S]/A|0,y[S]%=A)}return y.reverse()}return function(w,C,A,T,S){var y,x,$,E,M,F,z,ee,xe=w.indexOf("."),Te=a,ge=s;for(xe>=0&&(E=j,j=0,w=w.replace(".",""),ee=new I(C),F=ee.pow(w.length-xe),j=E,ee.c=f(Ri(Ut(F.c),F.e,"0"),10,A,p),ee.e=ee.c.length),z=f(w,C,A,S?(y=K,p):(y=p,K)),$=E=z.length;z[--E]==0;z.pop());if(!z[0])return y.charAt(0);if(xe<0?--$:(F.c=z,F.e=$,F.s=T,F=e(F,ee,Te,ge,A),z=F.c,M=F.r,$=F.e),x=$+Te+1,xe=z[x],E=A/2,M=M||x<0||z[x+1]!=null,M=ge<4?(xe!=null||M)&&(ge==0||ge==(F.s<0?3:2)):xe>E||xe==E&&(ge==4||M||ge==6&&z[x-1]&1||ge==(F.s<0?8:7)),x<1||!z[0])w=M?Ri(y.charAt(1),-Te,y.charAt(0)):y.charAt(0);else{if(z.length=x,M)for(--A;++z[--x]>A;)z[x]=0,x||(++$,z=[1].concat(z));for(E=z.length;!z[--E];);for(xe=0,w="";xe<=E;w+=y.charAt(z[xe++]));w=Ri(w,$,y.charAt(0))}return w}}(),e=function(){function p(C,A,T){var S,y,x,$,E=0,M=C.length,F=A%Gi,z=A/Gi|0;for(C=C.slice();M--;)x=C[M]%Gi,$=C[M]/Gi|0,S=z*x+$*F,y=F*x+S%Gi*Gi+E,E=(y/T|0)+(S/Gi|0)+z*$,C[M]=y%T;return E&&(C=[E].concat(C)),C}function f(C,A,T,S){var y,x;if(T!=S)x=T>S?1:-1;else for(y=x=0;y<T;y++)if(C[y]!=A[y]){x=C[y]>A[y]?1:-1;break}return x}function w(C,A,T,S){for(var y=0;T--;)C[T]-=y,y=C[T]<A[T]?1:0,C[T]=y*S+C[T]-A[T];for(;!C[0]&&C.length>1;C.splice(0,1));}return function(C,A,T,S,y){var x,$,E,M,F,z,ee,xe,Te,ge,ke,Fe,ut,bt,et,tt,At,He=C.s==A.s?1:-1,it=C.c,Ve=A.c;if(!it||!it[0]||!Ve||!Ve[0])return new I(!C.s||!A.s||(it?Ve&&it[0]==Ve[0]:!Ve)?NaN:it&&it[0]==0||!Ve?He*0:He/0);for(xe=new I(He),Te=xe.c=[],$=C.e-A.e,He=T+$+1,y||(y=Jt,$=Wt(C.e/Ae)-Wt(A.e/Ae),He=He/Ae|0),E=0;Ve[E]==(it[E]||0);E++);if(Ve[E]>(it[E]||0)&&$--,He<0)Te.push(1),M=!0;else{for(bt=it.length,tt=Ve.length,E=0,He+=2,F=jt(y/(Ve[0]+1)),F>1&&(Ve=p(Ve,F,y),it=p(it,F,y),tt=Ve.length,bt=it.length),ut=tt,ge=it.slice(0,tt),ke=ge.length;ke<tt;ge[ke++]=0);At=Ve.slice(),At=[0].concat(At),et=Ve[0],Ve[1]>=y/2&&et++;do{if(F=0,x=f(Ve,ge,tt,ke),x<0){if(Fe=ge[0],tt!=ke&&(Fe=Fe*y+(ge[1]||0)),F=jt(Fe/et),F>1)for(F>=y&&(F=y-1),z=p(Ve,F,y),ee=z.length,ke=ge.length;f(z,ge,ee,ke)==1;)F--,w(z,tt<ee?At:Ve,ee,y),ee=z.length,x=1;else F==0&&(x=F=1),z=Ve.slice(),ee=z.length;if(ee<ke&&(z=[0].concat(z)),w(ge,z,ke,y),ke=ge.length,x==-1)for(;f(Ve,ge,tt,ke)<1;)F++,w(ge,tt<ke?At:Ve,ke,y),ke=ge.length}else x===0&&(F++,ge=[0]);Te[E++]=F,ge[0]?ge[ke++]=it[ut]||0:(ge=[it[ut]],ke=1)}while((ut++<bt||ge[0]!=null)&&He--);M=ge[0]!=null,Te[0]||Te.splice(0,1)}if(y==Jt){for(E=1,He=Te[0];He>=10;He/=10,E++);ce(xe,T+(xe.e=E+$*Ae-1)+1,S,M)}else xe.e=$,xe.r=+M;return xe}}();function J(p,f,w,C){var A,T,S,y,x;if(w==null?w=s:qe(w,0,8),!p.c)return p.toString();if(A=p.c[0],S=p.e,f==null)x=Ut(p.c),x=C==1||C==2&&(S<=u||S>=h)?ha(x,S):Ri(x,S,"0");else if(p=ce(new I(p),f,w),T=p.e,x=Ut(p.c),y=x.length,C==1||C==2&&(f<=T||T<=u)){for(;y<f;x+="0",y++);x=ha(x,T)}else if(f-=S,x=Ri(x,T,"0"),T+1>y){if(--f>0)for(x+=".";f--;x+="0");}else if(f+=T-y,f>0)for(T+1==y&&(x+=".");f--;x+="0");return p.s<0&&A?"-"+x:x}function q(p,f){for(var w,C,A=1,T=new I(p[0]);A<p.length;A++)C=new I(p[A]),(!C.s||(w=yr(T,C))===f||w===0&&T.s===f)&&(T=C);return T}function re(p,f,w){for(var C=1,A=f.length;!f[--A];f.pop());for(A=f[0];A>=10;A/=10,C++);return(w=C+w*Ae-1)>k?p.c=p.e=null:w<b?p.c=[p.e=0]:(p.e=w,p.c=f),p}n=function(){var p=/^(-?)0([xbo])(?=\w[\w.]*$)/i,f=/^([^.]+)\.$/,w=/^\.([^.]+)$/,C=/^-?(Infinity|NaN)$/,A=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(T,S,y,x){var $,E=y?S:S.replace(A,"");if(C.test(E))T.s=isNaN(E)?null:E<0?-1:1;else{if(!y&&(E=E.replace(p,function(M,F,z){return $=(z=z.toLowerCase())=="x"?16:z=="b"?2:8,!x||x==$?F:M}),x&&($=x,E=E.replace(f,"$1").replace(w,"0.$1")),S!=E))return new I(E,$);if(I.DEBUG)throw Error(St+"Not a"+(x?" base "+x:"")+" number: "+S);T.s=null}T.c=T.e=null}}();function ce(p,f,w,C){var A,T,S,y,x,$,E,M=p.c,F=Hs;if(M){e:{for(A=1,y=M[0];y>=10;y/=10,A++);if(T=f-A,T<0)T+=Ae,S=f,x=M[$=0],E=jt(x/F[A-S-1]%10);else if($=Fs((T+1)/Ae),$>=M.length)if(C){for(;M.length<=$;M.push(0));x=E=0,A=1,T%=Ae,S=T-Ae+1}else break e;else{for(x=y=M[$],A=1;y>=10;y/=10,A++);T%=Ae,S=T-Ae+A,E=S<0?0:jt(x/F[A-S-1]%10)}if(C=C||f<0||M[$+1]!=null||(S<0?x:x%F[A-S-1]),C=w<4?(E||C)&&(w==0||w==(p.s<0?3:2)):E>5||E==5&&(w==4||C||w==6&&(T>0?S>0?x/F[A-S]:0:M[$-1])%10&1||w==(p.s<0?8:7)),f<1||!M[0])return M.length=0,C?(f-=p.e+1,M[0]=F[(Ae-f%Ae)%Ae],p.e=-f||0):M[0]=p.e=0,p;if(T==0?(M.length=$,y=1,$--):(M.length=$+1,y=F[Ae-T],M[$]=S>0?jt(x/F[A-S]%F[S])*y:0),C)for(;;)if($==0){for(T=1,S=M[0];S>=10;S/=10,T++);for(S=M[0]+=y,y=1;S>=10;S/=10,y++);T!=y&&(p.e++,M[0]==Jt&&(M[0]=1));break}else{if(M[$]+=y,M[$]!=Jt)break;M[$--]=0,y=1}for(T=M.length;M[--T]===0;M.pop());}p.e>k?p.c=p.e=null:p.e<b&&(p.c=[p.e=0])}return p}function Ee(p){var f,w=p.e;return w===null?p.toString():(f=Ut(p.c),f=w<=u||w>=h?ha(f,w):Ri(f,w,"0"),p.s<0?"-"+f:f)}return o.absoluteValue=o.abs=function(){var p=new I(this);return p.s<0&&(p.s=1),p},o.comparedTo=function(p,f){return yr(this,new I(p,f))},o.decimalPlaces=o.dp=function(p,f){var w,C,A,T=this;if(p!=null)return qe(p,0,at),f==null?f=s:qe(f,0,8),ce(new I(T),p+T.e+1,f);if(!(w=T.c))return null;if(C=((A=w.length-1)-Wt(this.e/Ae))*Ae,A=w[A])for(;A%10==0;A/=10,C--);return C<0&&(C=0),C},o.dividedBy=o.div=function(p,f){return e(this,new I(p,f),a,s)},o.dividedToIntegerBy=o.idiv=function(p,f){return e(this,new I(p,f),0,1)},o.exponentiatedBy=o.pow=function(p,f){var w,C,A,T,S,y,x,$,E,M=this;if(p=new I(p),p.c&&!p.isInteger())throw Error(St+"Exponent not an integer: "+Ee(p));if(f!=null&&(f=new I(f)),y=p.e>14,!M.c||!M.c[0]||M.c[0]==1&&!M.e&&M.c.length==1||!p.c||!p.c[0])return E=new I(Math.pow(+Ee(M),y?p.s*(2-da(p)):+Ee(p))),f?E.mod(f):E;if(x=p.s<0,f){if(f.c?!f.c[0]:!f.s)return new I(NaN);C=!x&&M.isInteger()&&f.isInteger(),C&&(M=M.mod(f))}else{if(p.e>9&&(M.e>0||M.e<-1||(M.e==0?M.c[0]>1||y&&M.c[1]>=24e7:M.c[0]<8e13||y&&M.c[0]<=9999975e7)))return T=M.s<0&&da(p)?-0:0,M.e>-1&&(T=1/T),new I(x?1/T:T);j&&(T=Fs(j/Ae+2))}for(y?(w=new I(.5),x&&(p.s=1),$=da(p)):(A=Math.abs(+Ee(p)),$=A%2),E=new I(r);;){if($){if(E=E.times(M),!E.c)break;T?E.c.length>T&&(E.c.length=T):C&&(E=E.mod(f))}if(A){if(A=jt(A/2),A===0)break;$=A%2}else if(p=p.times(w),ce(p,p.e+1,1),p.e>14)$=da(p);else{if(A=+Ee(p),A===0)break;$=A%2}M=M.times(M),T?M.c&&M.c.length>T&&(M.c.length=T):C&&(M=M.mod(f))}return C?E:(x&&(E=r.div(E)),f?E.mod(f):T?ce(E,j,s,S):E)},o.integerValue=function(p){var f=new I(this);return p==null?p=s:qe(p,0,8),ce(f,f.e+1,p)},o.isEqualTo=o.eq=function(p,f){return yr(this,new I(p,f))===0},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(p,f){return yr(this,new I(p,f))>0},o.isGreaterThanOrEqualTo=o.gte=function(p,f){return(f=yr(this,new I(p,f)))===1||f===0},o.isInteger=function(){return!!this.c&&Wt(this.e/Ae)>this.c.length-2},o.isLessThan=o.lt=function(p,f){return yr(this,new I(p,f))<0},o.isLessThanOrEqualTo=o.lte=function(p,f){return(f=yr(this,new I(p,f)))===-1||f===0},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&this.c[0]==0},o.minus=function(p,f){var w,C,A,T,S=this,y=S.s;if(p=new I(p,f),f=p.s,!y||!f)return new I(NaN);if(y!=f)return p.s=-f,S.plus(p);var x=S.e/Ae,$=p.e/Ae,E=S.c,M=p.c;if(!x||!$){if(!E||!M)return E?(p.s=-f,p):new I(M?S:NaN);if(!E[0]||!M[0])return M[0]?(p.s=-f,p):new I(E[0]?S:s==3?-0:0)}if(x=Wt(x),$=Wt($),E=E.slice(),y=x-$){for((T=y<0)?(y=-y,A=E):($=x,A=M),A.reverse(),f=y;f--;A.push(0));A.reverse()}else for(C=(T=(y=E.length)<(f=M.length))?y:f,y=f=0;f<C;f++)if(E[f]!=M[f]){T=E[f]<M[f];break}if(T&&(A=E,E=M,M=A,p.s=-p.s),f=(C=M.length)-(w=E.length),f>0)for(;f--;E[w++]=0);for(f=Jt-1;C>y;){if(E[--C]<M[C]){for(w=C;w&&!E[--w];E[w]=f);--E[w],E[C]+=Jt}E[C]-=M[C]}for(;E[0]==0;E.splice(0,1),--$);return E[0]?re(p,E,$):(p.s=s==3?-1:1,p.c=[p.e=0],p)},o.modulo=o.mod=function(p,f){var w,C,A=this;return p=new I(p,f),!A.c||!p.s||p.c&&!p.c[0]?new I(NaN):!p.c||A.c&&!A.c[0]?new I(A):(P==9?(C=p.s,p.s=1,w=e(A,p,0,3),p.s=C,w.s*=C):w=e(A,p,0,P),p=A.minus(w.times(p)),!p.c[0]&&P==1&&(p.s=A.s),p)},o.multipliedBy=o.times=function(p,f){var w,C,A,T,S,y,x,$,E,M,F,z,ee,xe,Te,ge=this,ke=ge.c,Fe=(p=new I(p,f)).c;if(!ke||!Fe||!ke[0]||!Fe[0])return!ge.s||!p.s||ke&&!ke[0]&&!Fe||Fe&&!Fe[0]&&!ke?p.c=p.e=p.s=null:(p.s*=ge.s,!ke||!Fe?p.c=p.e=null:(p.c=[0],p.e=0)),p;for(C=Wt(ge.e/Ae)+Wt(p.e/Ae),p.s*=ge.s,x=ke.length,M=Fe.length,x<M&&(ee=ke,ke=Fe,Fe=ee,A=x,x=M,M=A),A=x+M,ee=[];A--;ee.push(0));for(xe=Jt,Te=Gi,A=M;--A>=0;){for(w=0,F=Fe[A]%Te,z=Fe[A]/Te|0,S=x,T=A+S;T>A;)$=ke[--S]%Te,E=ke[S]/Te|0,y=z*$+E*F,$=F*$+y%Te*Te+ee[T]+w,w=($/xe|0)+(y/Te|0)+z*E,ee[T--]=$%xe;ee[T]=w}return w?++C:ee.splice(0,1),re(p,ee,C)},o.negated=function(){var p=new I(this);return p.s=-p.s||null,p},o.plus=function(p,f){var w,C=this,A=C.s;if(p=new I(p,f),f=p.s,!A||!f)return new I(NaN);if(A!=f)return p.s=-f,C.minus(p);var T=C.e/Ae,S=p.e/Ae,y=C.c,x=p.c;if(!T||!S){if(!y||!x)return new I(A/0);if(!y[0]||!x[0])return x[0]?p:new I(y[0]?C:A*0)}if(T=Wt(T),S=Wt(S),y=y.slice(),A=T-S){for(A>0?(S=T,w=x):(A=-A,w=y),w.reverse();A--;w.push(0));w.reverse()}for(A=y.length,f=x.length,A-f<0&&(w=x,x=y,y=w,f=A),A=0;f;)A=(y[--f]=y[f]+x[f]+A)/Jt|0,y[f]=Jt===y[f]?0:y[f]%Jt;return A&&(y=[A].concat(y),++S),re(p,y,S)},o.precision=o.sd=function(p,f){var w,C,A,T=this;if(p!=null&&p!==!!p)return qe(p,1,at),f==null?f=s:qe(f,0,8),ce(new I(T),p,f);if(!(w=T.c))return null;if(A=w.length-1,C=A*Ae+1,A=w[A]){for(;A%10==0;A/=10,C--);for(A=w[0];A>=10;A/=10,C++);}return p&&T.e+1>C&&(C=T.e+1),C},o.shiftedBy=function(p){return qe(p,-zs,zs),this.times("1e"+p)},o.squareRoot=o.sqrt=function(){var p,f,w,C,A,T=this,S=T.c,y=T.s,x=T.e,$=a+4,E=new I("0.5");if(y!==1||!S||!S[0])return new I(!y||y<0&&(!S||S[0])?NaN:S?T:1/0);if(y=Math.sqrt(+Ee(T)),y==0||y==1/0?(f=Ut(S),(f.length+x)%2==0&&(f+="0"),y=Math.sqrt(+f),x=Wt((x+1)/2)-(x<0||x%2),y==1/0?f="5e"+x:(f=y.toExponential(),f=f.slice(0,f.indexOf("e")+1)+x),w=new I(f)):w=new I(y+""),w.c[0]){for(x=w.e,y=x+$,y<3&&(y=0);;)if(A=w,w=E.times(A.plus(e(T,A,$,1))),Ut(A.c).slice(0,y)===(f=Ut(w.c)).slice(0,y))if(w.e<x&&--y,f=f.slice(y-3,y+1),f=="9999"||!C&&f=="4999"){if(!C&&(ce(A,A.e+a+2,0),A.times(A).eq(T))){w=A;break}$+=4,y+=4,C=1}else{(!+f||!+f.slice(1)&&f.charAt(0)=="5")&&(ce(w,w.e+a+2,1),p=!w.times(w).eq(T));break}}return ce(w,w.e+a+1,s,p)},o.toExponential=function(p,f){return p!=null&&(qe(p,0,at),p++),J(this,p,f,1)},o.toFixed=function(p,f){return p!=null&&(qe(p,0,at),p=p+this.e+1),J(this,p,f)},o.toFormat=function(p,f,w){var C,A=this;if(w==null)p!=null&&f&&typeof f=="object"?(w=f,f=null):p&&typeof p=="object"?(w=p,p=f=null):w=V;else if(typeof w!="object")throw Error(St+"Argument not an object: "+w);if(C=A.toFixed(p,f),A.c){var T,S=C.split("."),y=+w.groupSize,x=+w.secondaryGroupSize,$=w.groupSeparator||"",E=S[0],M=S[1],F=A.s<0,z=F?E.slice(1):E,ee=z.length;if(x&&(T=y,y=x,x=T,ee-=T),y>0&&ee>0){for(T=ee%y||y,E=z.substr(0,T);T<ee;T+=y)E+=$+z.substr(T,y);x>0&&(E+=$+z.slice(T)),F&&(E="-"+E)}C=M?E+(w.decimalSeparator||"")+((x=+w.fractionGroupSize)?M.replace(new RegExp("\\d{"+x+"}\\B","g"),"$&"+(w.fractionGroupSeparator||"")):M):E}return(w.prefix||"")+C+(w.suffix||"")},o.toFraction=function(p){var f,w,C,A,T,S,y,x,$,E,M,F,z=this,ee=z.c;if(p!=null&&(y=new I(p),!y.isInteger()&&(y.c||y.s!==1)||y.lt(r)))throw Error(St+"Argument "+(y.isInteger()?"out of range: ":"not an integer: ")+Ee(y));if(!ee)return new I(z);for(f=new I(r),$=w=new I(r),C=x=new I(r),F=Ut(ee),T=f.e=F.length-z.e-1,f.c[0]=Hs[(S=T%Ae)<0?Ae+S:S],p=!p||y.comparedTo(f)>0?T>0?f:$:y,S=k,k=1/0,y=new I(F),x.c[0]=0;E=e(y,f,0,1),A=w.plus(E.times(C)),A.comparedTo(p)!=1;)w=C,C=A,$=x.plus(E.times(A=$)),x=A,f=y.minus(E.times(A=f)),y=A;return A=e(p.minus(w),C,0,1),x=x.plus(A.times($)),w=w.plus(A.times(C)),x.s=$.s=z.s,T=T*2,M=e($,C,T,s).minus(z).abs().comparedTo(e(x,w,T,s).minus(z).abs())<1?[$,C]:[x,w],k=S,M},o.toNumber=function(){return+Ee(this)},o.toPrecision=function(p,f){return p!=null&&qe(p,1,at),J(this,p,f,2)},o.toString=function(p){var f,w=this,C=w.s,A=w.e;return A===null?C?(f="Infinity",C<0&&(f="-"+f)):f="NaN":(p==null?f=A<=u||A>=h?ha(Ut(w.c),A):Ri(Ut(w.c),A,"0"):p===10&&Z?(w=ce(new I(w),a+A+1,s),f=Ri(Ut(w.c),w.e,"0")):(qe(p,2,K.length,"Base"),f=t(Ri(Ut(w.c),A,"0"),10,p,C,!0)),C<0&&w.c[0]&&(f="-"+f)),f},o.valueOf=o.toJSON=function(){return Ee(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,i!=null&&I.set(i),I}function Wt(i){var e=i|0;return i>0||i===e?e:e-1}function Ut(i){for(var e,t,n=1,o=i.length,r=i[0]+"";n<o;){for(e=i[n++]+"",t=Ae-e.length;t--;e="0"+e);r+=e}for(o=r.length;r.charCodeAt(--o)===48;);return r.slice(0,o+1||1)}function yr(i,e){var t,n,o=i.c,r=e.c,a=i.s,s=e.s,u=i.e,h=e.e;if(!a||!s)return null;if(t=o&&!o[0],n=r&&!r[0],t||n)return t?n?0:-s:a;if(a!=s)return a;if(t=a<0,n=u==h,!o||!r)return n?0:!o^t?1:-1;if(!n)return u>h^t?1:-1;for(s=(u=o.length)<(h=r.length)?u:h,a=0;a<s;a++)if(o[a]!=r[a])return o[a]>r[a]^t?1:-1;return u==h?0:u>h^t?1:-1}function qe(i,e,t,n){if(i<e||i>t||i!==jt(i))throw Error(St+(n||"Argument")+(typeof i=="number"?i<e||i>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(i))}function da(i){var e=i.c.length-1;return Wt(i.e/Ae)==e&&i.c[e]%2!=0}function ha(i,e){return(i.length>1?i.charAt(0)+"."+i.slice(1):i)+(e<0?"e":"e+")+e}function Ri(i,e,t){var n,o;if(e<0){for(o=t+".";++e;o+=t);i=o+i}else if(n=i.length,++e>n){for(o=t,e-=n;--e;o+=t);i+=o}else e<n&&(i=i.slice(0,e)+"."+i.slice(e));return i}var pa=Zu();const hl={bigNumber(i){return new pa(i)},multiply(i,e){if(i===void 0||e===void 0)return pa(0);const t=new pa(i),n=new pa(e);return t.multipliedBy(n)}},We=vt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),le={state:We,subscribe(i){return zt(We,()=>i(We))},subscribeKey(i,e){return Gt(We,i,e)},_getClient(){if(!We._client)throw new Error("NetworkController client not set");return We._client},setClient(i){We._client=gn(i)},setCaipNetwork(i){We.caipNetwork=i,Rr.set({selectedNetworkId:i==null?void 0:i.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(i){We.caipNetwork=i,Rr.set({selectedNetworkId:i==null?void 0:i.id}),We.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(i){We.requestedCaipNetworks=i},setAllowUnsupportedChain(i){We.allowUnsupportedChain=i},setSmartAccountEnabledNetworks(i){We.smartAccountEnabledNetworks=i},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:i,requestedCaipNetworks:e}=We,t=i,n=e;return ie.sortRequestedNetworks(t,n)},async getApprovedCaipNetworksData(){const i=await this._getClient().getApprovedCaipNetworksData();We.supportsAllNetworks=i.supportsAllNetworks,We.approvedCaipNetworkIds=i.approvedCaipNetworkIds},async switchActiveNetwork(i){await this._getClient().switchCaipNetwork(i),We.caipNetwork=i,i&&he.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:i.id}})},checkIfSupportedNetwork(){var i;We.isUnsupportedChain=!((i=We.requestedCaipNetworks)!=null&&i.some(e=>{var t;return e.id===((t=We.caipNetwork)==null?void 0:t.id)})),We.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){var e,t;const i=Er.caipNetworkIdToNumber((e=We.caipNetwork)==null?void 0:e.id);return i?!!((t=We.smartAccountEnabledNetworks)!=null&&t.includes(i)):!1},resetNetwork(){We.isDefaultCaipNetwork||(We.caipNetwork=void 0),We.approvedCaipNetworkIds=void 0,We.supportsAllNetworks=!0,We.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{Ie.open({view:"UnsupportedChain"})},300)}},qd=ie.getApiUrl(),yt=new Fl({baseUrl:qd}),Kd="40",Wc="4",ht=vt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),me={state:ht,subscribeKey(i,e){return Gt(ht,i,e)},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=we.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _fetchWalletImage(i){const e=`${yt.baseUrl}/getWalletImage/${i}`,t=await yt.getBlob({path:e,headers:me._getApiHeaders()});lt.setWalletImage(i,URL.createObjectURL(t))},async _fetchNetworkImage(i){const e=`${yt.baseUrl}/public/getAssetImage/${i}`,t=await yt.getBlob({path:e,headers:me._getApiHeaders()});lt.setNetworkImage(i,URL.createObjectURL(t))},async _fetchConnectorImage(i){const e=`${yt.baseUrl}/public/getAssetImage/${i}`,t=await yt.getBlob({path:e,headers:me._getApiHeaders()});lt.setConnectorImage(i,URL.createObjectURL(t))},async _fetchCurrencyImage(i){const e=`${yt.baseUrl}/public/getCurrencyImage/${i}`,t=await yt.getBlob({path:e,headers:me._getApiHeaders()});lt.setCurrencyImage(i,URL.createObjectURL(t))},async _fetchTokenImage(i){const e=`${yt.baseUrl}/public/getTokenImage/${i}`,t=await yt.getBlob({path:e,headers:me._getApiHeaders()});lt.setTokenImage(i,URL.createObjectURL(t))},async fetchNetworkImages(){const{requestedCaipNetworks:i}=le.state,e=i==null?void 0:i.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>me._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:i}=je.state,e=i.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>me._fetchConnectorImage(t)))},async fetchCurrencyImages(i=[]){await Promise.allSettled(i.map(e=>me._fetchCurrencyImage(e)))},async fetchTokenImages(i=[]){await Promise.allSettled(i.map(e=>me._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:i}=we.state;if(i!=null&&i.length){const{data:e}=await yt.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:i!=null&&i.length?String(i.length):Wc,include:i==null?void 0:i.join(",")}});e.sort((n,o)=>i.indexOf(n.id)-i.indexOf(o.id));const t=e.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(t.map(n=>me._fetchWalletImage(n))),ht.featured=e}},async fetchRecommendedWallets(){var h;const{includeWalletIds:i,excludeWalletIds:e,featuredWalletIds:t}=we.state,n=[...e??[],...t??[]].filter(Boolean),{data:o,count:r}=await yt.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",chains:(h=le.state.caipNetwork)==null?void 0:h.id,entries:Wc,include:i==null?void 0:i.join(","),exclude:n==null?void 0:n.join(",")}}),a=ct.getRecentWallets(),s=o.map(b=>b.image_id).filter(Boolean),u=a.map(b=>b.image_id).filter(Boolean);await Promise.allSettled([...s,...u].map(b=>me._fetchWalletImage(b))),ht.recommended=o,ht.count=r??0},async fetchWallets({page:i}){var u;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=we.state,o=[...ht.recommended.map(({id:h})=>h),...t??[],...n??[]].filter(Boolean),{data:r,count:a}=await yt.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:String(i),entries:Kd,chains:(u=le.state.caipNetwork)==null?void 0:u.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),s=r.map(h=>h.image_id).filter(Boolean);await Promise.allSettled([...s.map(h=>me._fetchWalletImage(h)),ie.wait(300)]),ht.wallets=[...ht.wallets,...r],ht.count=a>ht.count?a:ht.count,ht.page=i},async searchWallet({search:i}){var r;const{includeWalletIds:e,excludeWalletIds:t}=we.state;ht.search=[];const{data:n}=await yt.get({path:"/getWallets",headers:me._getApiHeaders(),params:{page:"1",entries:"100",search:i,chains:(r=le.state.caipNetwork)==null?void 0:r.id,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),o=n.map(a=>a.image_id).filter(Boolean);await Promise.allSettled([...o.map(a=>me._fetchWalletImage(a)),ie.wait(300)]),ht.search=n},async reFetchWallets(){ht.page=1,ht.wallets=[],await me.fetchFeaturedWallets(),await me.fetchRecommendedWallets()},prefetch(){const i=[me.fetchFeaturedWallets(),me.fetchRecommendedWallets(),me.fetchNetworkImages(),me.fetchConnectorImages()];we.state.enableAnalytics===void 0&&i.push(me.fetchAnalyticsConfig()),ht.prefetchPromise=Promise.race([Promise.allSettled(i),ie.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:i}=await yt.get({path:"/getAnalyticsConfig",headers:me._getApiHeaders()});we.setEnableAnalytics(i)}},Ke=vt({view:"Connect",history:["Connect"]}),W={state:Ke,subscribeKey(i,e){return Gt(Ke,i,e)},push(i,e){i!==Ke.view&&(Ke.view=i,Ke.history.push(i),Ke.data=e)},reset(i){Ke.view=i,Ke.history=[i]},replace(i,e){Ke.history.length>1&&Ke.history.at(-1)!==i&&(Ke.view=i,Ke.history[Ke.history.length-1]=i,Ke.data=e)},goBack(){if(Ke.history.length>1){Ke.history.pop();const[i]=Ke.history.slice(-1);i&&(Ke.view=i)}},goBackToIndex(i){if(Ke.history.length>1){Ke.history=Ke.history.slice(0,i+1);const[e]=Ke.history.slice(-1);e&&(Ke.view=e)}}},xr=vt({loading:!1,open:!1}),Ie={state:xr,subscribe(i){return zt(xr,()=>i(xr))},subscribeKey(i,e){return Gt(xr,i,e)},async open(i){await me.state.prefetchPromise;const e=oe.state.isConnected;i!=null&&i.view?W.reset(i.view):e?W.reset("Account"):W.reset("Connect"),xr.open=!0,Rr.set({open:!0}),he.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const i=oe.state.isConnected;xr.open=!1,Rr.set({open:!1}),he.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:i}})},setLoading(i){xr.loading=i,Rr.set({loading:i})}},to={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},pl={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Jd={providers:Fu,selectedProvider:null,error:null,purchaseCurrency:to,paymentCurrency:pl,purchaseCurrencies:[to],paymentCurrencies:[],quotesLoading:!1},Le=vt(Jd),De={state:Le,subscribe(i){return zt(Le,()=>i(Le))},subscribeKey(i,e){return Gt(Le,i,e)},setSelectedProvider(i){Le.selectedProvider=i},setPurchaseCurrency(i){Le.purchaseCurrency=i},setPaymentCurrency(i){Le.paymentCurrency=i},setPurchaseAmount(i){this.state.purchaseAmount=i},setPaymentAmount(i){this.state.paymentAmount=i},async getAvailableCurrencies(){const i=await kr.getOnrampOptions();Le.purchaseCurrencies=i.purchaseCurrencies,Le.paymentCurrencies=i.paymentCurrencies,Le.paymentCurrency=i.paymentCurrencies[0]||pl,Le.purchaseCurrency=i.purchaseCurrencies[0]||to,await me.fetchCurrencyImages(i.paymentCurrencies.map(e=>e.id)),await me.fetchTokenImages(i.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var i,e;Le.quotesLoading=!0;try{const t=await kr.getOnrampQuote({purchaseCurrency:Le.purchaseCurrency,paymentCurrency:Le.paymentCurrency,amount:((i=Le.paymentAmount)==null?void 0:i.toString())||"0",network:(e=Le.purchaseCurrency)==null?void 0:e.symbol});return Le.quotesLoading=!1,Le.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return Le.error=t.message,Le.quotesLoading=!1,null}finally{Le.quotesLoading=!1}},resetState(){Le.providers=Fu,Le.selectedProvider=null,Le.error=null,Le.purchaseCurrency=to,Le.paymentCurrency=pl,Le.purchaseCurrencies=[to],Le.paymentCurrencies=[],Le.paymentAmount=void 0,Le.purchaseAmount=void 0,Le.quotesLoading=!1}},Ge=vt({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),gt={state:Ge,subscribe(i){return zt(Ge,()=>i(Ge))},async fetchTransactions(i,e){const{projectId:t}=we.state;if(!t||!i)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Ge.loading=!0;try{const n=await kr.fetchTransactions({account:i,projectId:t,cursor:Ge.next,onramp:e}),o=this.filterSpamTransactions(n.data),r=[...Ge.transactions,...o];Ge.loading=!1,e==="coinbase"?Ge.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Ge.coinbaseTransactions,n.data):(Ge.transactions=r,Ge.transactionsByYear=this.groupTransactionsByYearAndMonth(Ge.transactionsByYear,o)),Ge.empty=r.length===0,Ge.next=n.next?n.next:void 0}catch{he.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:i,projectId:t,cursor:Ge.next}}),Pe.showError("Failed to fetch transactions"),Ge.loading=!1,Ge.empty=!0,Ge.next=void 0}},groupTransactionsByYearAndMonth(i={},e=[]){const t=i;return e.forEach(n=>{const o=new Date(n.metadata.minedAt).getFullYear(),r=new Date(n.metadata.minedAt).getMonth(),a=t[o]??{},u=(a[r]??[]).filter(h=>h.id!==n.id);t[o]={...a,[r]:[...u,n].sort((h,b)=>new Date(b.metadata.minedAt).getTime()-new Date(h.metadata.minedAt).getTime())}}),t},filterSpamTransactions(i){return i.filter(e=>!e.transfers.every(n=>{var o;return((o=n.nft_info)==null?void 0:o.flags.is_spam)===!0}))},clearCursor(){Ge.next=void 0},resetTransactions(){Ge.transactions=[],Ge.transactionsByYear={},Ge.loading=!1,Ge.empty=!1,Ge.next=void 0}},st=vt({wcError:!1,buffering:!1}),Ne={state:st,subscribeKey(i,e){return Gt(st,i,e)},_getClient(){if(!st._client)throw new Error("ConnectionController client not set");return st._client},setClient(i){st._client=gn(i)},connectWalletConnect(){st.wcPromise=this._getClient().connectWalletConnect(i=>{st.wcUri=i,st.wcPairingExpiry=ie.getPairingExpiry()}),ct.setConnectedConnector("WALLET_CONNECT")},async connectExternal(i){var e,t;await((t=(e=this._getClient()).connectExternal)==null?void 0:t.call(e,i)),ct.setConnectedConnector(i.type)},async signMessage(i){return this._getClient().signMessage(i)},checkInstalled(i){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,i)},resetWcConnection(){st.wcUri=void 0,st.wcPairingExpiry=void 0,st.wcPromise=void 0,st.wcLinking=void 0,st.recentWallet=void 0,gt.resetTransactions(),ct.deleteWalletConnectDeepLink()},setWcLinking(i){st.wcLinking=i},setWcError(i){st.wcError=i,st.buffering=!1},setRecentWallet(i){st.recentWallet=i},setBuffering(i){st.buffering=i},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},$t=vt({}),xt={state:$t,subscribe(i){return zt($t,()=>i($t))},subscribeKey(i,e){return Gt($t,i,e)},setToken(i){i&&($t.token=gn(i))},setTokenAmount(i){$t.sendTokenAmount=i},setReceiverAddress(i){$t.receiverAddress=i},setReceiverProfileImageUrl(i){$t.receiverProfileImageUrl=i},setReceiverProfileName(i){$t.receiverProfileName=i},resetSend(){$t.token=void 0,$t.sendTokenAmount=void 0,$t.receiverAddress=void 0,$t.receiverProfileImageUrl=void 0,$t.receiverProfileName=void 0}},Ue={getWalletImage(i){if(i!=null&&i.image_url)return i==null?void 0:i.image_url;if(i!=null&&i.image_id)return lt.state.walletImages[i.image_id]},getNetworkImage(i){if(i!=null&&i.imageUrl)return i==null?void 0:i.imageUrl;if(i!=null&&i.imageId)return lt.state.networkImages[i.imageId]},getConnectorImage(i){if(i!=null&&i.imageUrl)return i.imageUrl;if(i!=null&&i.imageId)return lt.state.connectorImages[i.imageId]}},Hl={goBackOrCloseModal(){W.state.history.length>1?W.goBack():Ie.close()},navigateAfterNetworkSwitch(){const{history:i}=W.state,e=i.findIndex(t=>t==="Networks");e>=1?W.goBackToIndex(e-1):Ie.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ba=globalThis,Vl=ba.ShadowRoot&&(ba.ShadyCSS===void 0||ba.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zl=Symbol(),Fc=new WeakMap;let Gu=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Zl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Vl&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Fc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fc.set(t,e))}return e}toString(){return this.cssText}};const hi=i=>new Gu(typeof i=="string"?i:i+"",void 0,Zl),Q=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,o,r)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new Gu(t,i,Zl)},Qd=(i,e)=>{if(Vl)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=ba.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},zc=Vl?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return hi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xd,defineProperty:e1,getOwnPropertyDescriptor:t1,getOwnPropertyNames:i1,getOwnPropertySymbols:r1,getPrototypeOf:n1}=Object,Xi=globalThis,Hc=Xi.trustedTypes,o1=Hc?Hc.emptyScript:"",Vs=Xi.reactiveElementPolyfillSupport,io=(i,e)=>i,_a={toAttribute(i,e){switch(e){case Boolean:i=i?o1:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Gl=(i,e)=>!Xd(i,e),Vc={attribute:!0,type:String,converter:_a,reflect:!1,hasChanged:Gl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Xi.litPropertyMetadata??(Xi.litPropertyMetadata=new WeakMap);let cn=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Vc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&e1(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=t1(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);r.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Vc}static _$Ei(){if(this.hasOwnProperty(io("elementProperties")))return;const e=n1(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(io("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(io("properties"))){const t=this.properties,n=[...i1(t),...r1(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(zc(o))}else e!==void 0&&t.push(zc(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qd(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var r;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const a=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:_a).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var r;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:_a;this._$Em=o,this[o]=s.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Gl)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,a]of o)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};cn.elementStyles=[],cn.shadowRootOptions={mode:"open"},cn[io("elementProperties")]=new Map,cn[io("finalized")]=new Map,Vs==null||Vs({ReactiveElement:cn}),(Xi.reactiveElementVersions??(Xi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=globalThis,Ea=ro.trustedTypes,Zc=Ea?Ea.createPolicy("lit-html",{createHTML:i=>i}):void 0,Yu="$lit$",qi=`lit$${Math.random().toFixed(9).slice(2)}$`,qu="?"+qi,a1=`<${qu}>`,Ir=document,uo=()=>Ir.createComment(""),ho=i=>i===null||typeof i!="object"&&typeof i!="function",Ku=Array.isArray,s1=i=>Ku(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Zs=`[ 	
\f\r]`,Qn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gc=/-->/g,Yc=/>/g,Cr=RegExp(`>|${Zs}(?:([^\\s"'>=/]+)(${Zs}*=${Zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qc=/'/g,Kc=/"/g,Ju=/^(?:script|style|textarea|title)$/i,Qu=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),O=Qu(1),H=Qu(2),Or=Symbol.for("lit-noChange"),rt=Symbol.for("lit-nothing"),Jc=new WeakMap,Ar=Ir.createTreeWalker(Ir,129);function Xu(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zc!==void 0?Zc.createHTML(e):e}const l1=(i,e)=>{const t=i.length-1,n=[];let o,r=e===2?"<svg>":"",a=Qn;for(let s=0;s<t;s++){const u=i[s];let h,b,k=-1,N=0;for(;N<u.length&&(a.lastIndex=N,b=a.exec(u),b!==null);)N=a.lastIndex,a===Qn?b[1]==="!--"?a=Gc:b[1]!==void 0?a=Yc:b[2]!==void 0?(Ju.test(b[2])&&(o=RegExp("</"+b[2],"g")),a=Cr):b[3]!==void 0&&(a=Cr):a===Cr?b[0]===">"?(a=o??Qn,k=-1):b[1]===void 0?k=-2:(k=a.lastIndex-b[2].length,h=b[1],a=b[3]===void 0?Cr:b[3]==='"'?Kc:qc):a===Kc||a===qc?a=Cr:a===Gc||a===Yc?a=Qn:(a=Cr,o=void 0);const P=a===Cr&&i[s+1].startsWith("/>")?" ":"";r+=a===Qn?u+a1:k>=0?(n.push(h),u.slice(0,k)+Yu+u.slice(k)+qi+P):u+qi+(k===-2?s:P)}return[Xu(i,r+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let fl=class e0{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,a=0;const s=e.length-1,u=this.parts,[h,b]=l1(e,t);if(this.el=e0.createElement(h,n),Ar.currentNode=this.el.content,t===2){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(o=Ar.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const k of o.getAttributeNames())if(k.endsWith(Yu)){const N=b[a++],P=o.getAttribute(k).split(qi),j=/([.?@])?(.*)/.exec(N);u.push({type:1,index:r,name:j[2],strings:P,ctor:j[1]==="."?u1:j[1]==="?"?d1:j[1]==="@"?h1:as}),o.removeAttribute(k)}else k.startsWith(qi)&&(u.push({type:6,index:r}),o.removeAttribute(k));if(Ju.test(o.tagName)){const k=o.textContent.split(qi),N=k.length-1;if(N>0){o.textContent=Ea?Ea.emptyScript:"";for(let P=0;P<N;P++)o.append(k[P],uo()),Ar.nextNode(),u.push({type:2,index:++r});o.append(k[N],uo())}}}else if(o.nodeType===8)if(o.data===qu)u.push({type:2,index:r});else{let k=-1;for(;(k=o.data.indexOf(qi,k+1))!==-1;)u.push({type:7,index:r}),k+=qi.length-1}r++}}static createElement(e,t){const n=Ir.createElement("template");return n.innerHTML=e,n}};function mn(i,e,t=i,n){var a,s;if(e===Or)return e;let o=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl;const r=ho(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=mn(i,o._$AS(i,e.values),o,n)),e}let c1=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??Ir).importNode(t,!0);Ar.currentNode=o;let r=Ar.nextNode(),a=0,s=0,u=n[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new Yl(r,r.nextSibling,this,e):u.type===1?h=new u.ctor(r,u.name,u.strings,this,e):u.type===6&&(h=new p1(r,this,e)),this._$AV.push(h),u=n[++s]}a!==(u==null?void 0:u.index)&&(r=Ar.nextNode(),a++)}return Ar.currentNode=Ir,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Yl=class t0{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=rt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=mn(this,e,t),ho(e)?e===rt||e==null||e===""?(this._$AH!==rt&&this._$AR(),this._$AH=rt):e!==this._$AH&&e!==Or&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):s1(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==rt&&ho(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ir.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=fl.createElement(Xu(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const a=new c1(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=Jc.get(e.strings);return t===void 0&&Jc.set(e.strings,t=new fl(e)),t}k(e){Ku(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new t0(this.S(uo()),this.S(uo()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},as=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=rt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=rt}_$AI(e,t=this,n,o){const r=this.strings;let a=!1;if(r===void 0)e=mn(this,e,t,0),a=!ho(e)||e!==this._$AH&&e!==Or,a&&(this._$AH=e);else{const s=e;let u,h;for(e=r[0],u=0;u<r.length-1;u++)h=mn(this,s[n+u],t,u),h===Or&&(h=this._$AH[u]),a||(a=!ho(h)||h!==this._$AH[u]),h===rt?e=rt:e!==rt&&(e+=(h??"")+r[u+1]),this._$AH[u]=h}a&&!o&&this.j(e)}j(e){e===rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},u1=class extends as{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===rt?void 0:e}},d1=class extends as{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==rt)}},h1=class extends as{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=mn(this,e,t,0)??rt)===Or)return;const n=this._$AH,o=e===rt&&n!==rt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==rt&&(n===rt||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},p1=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){mn(this,e)}};const Gs=ro.litHtmlPolyfillSupport;Gs==null||Gs(fl,Yl),(ro.litHtmlVersions??(ro.litHtmlVersions=[])).push("3.1.3");const f1=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new Yl(e.insertBefore(uo(),r),r,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let X=class extends cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=f1(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Or}};var Lu;X._$litElement$=!0,X.finalized=!0,(Lu=globalThis.litElementHydrateSupport)==null||Lu.call(globalThis,{LitElement:X});const Ys=globalThis.litElementPolyfillSupport;Ys==null||Ys({LitElement:X});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const w1=H`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,g1=H`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let no,er,tr;function m1(i,e){no=document.createElement("style"),er=document.createElement("style"),tr=document.createElement("style"),no.textContent=fn(i).core.cssText,er.textContent=fn(i).dark.cssText,tr.textContent=fn(i).light.cssText,document.head.appendChild(no),document.head.appendChild(er),document.head.appendChild(tr),i0(e)}function i0(i){er&&tr&&(i==="light"?(er.removeAttribute("media"),tr.media="enabled"):(tr.removeAttribute("media"),er.media="enabled"))}function v1(i){no&&er&&tr&&(no.textContent=fn(i).core.cssText,er.textContent=fn(i).dark.cssText,tr.textContent=fn(i).light.cssText)}function fn(i){return{core:Q`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${hi(i!=null&&i["--w3m-color-mix-strength"]?`${i["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${hi((i==null?void 0:i["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${hi((i==null?void 0:i["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${hi((i==null?void 0:i["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${hi((i==null?void 0:i["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:Q`
      :root {
        --w3m-color-mix: ${hi((i==null?void 0:i["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${hi((i==null?void 0:i["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:Q`
      :root {
        --w3m-color-mix: ${hi((i==null?void 0:i["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${hi((i==null?void 0:i["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const ae=Q`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Re=Q`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ql=Q`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function b1(i,e){const{kind:t,elements:n}=e;return{kind:t,elements:n,finisher(o){customElements.get(i)||customElements.define(i,o)}}}function y1(i,e){return customElements.get(i)||customElements.define(i,e),e}function D(i){return function(t){return typeof t=="function"?y1(i,t):b1(i,t)}}const x1=Q`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var C1=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let wl=class extends X{render(){return O`<slot></slot>`}};wl.styles=[ae,x1];wl=C1([D("wui-card")],wl);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _1={attribute:!0,type:String,converter:_a,reflect:!1,hasChanged:Gl},E1=(i=_1,e,t)=>{const{kind:n,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(t.name,i),n==="accessor"){const{name:a}=t;return{set(s){const u=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,u,i)},init(s){return s!==void 0&&this.P(a,void 0,i),s}}}if(n==="setter"){const{name:a}=t;return function(s){const u=this[a];e.call(this,s),this.requestUpdate(a,u,i)}}throw Error("Unsupported decorator location: "+n)};function v(i){return(e,t)=>typeof t=="object"?E1(i,e,t):((n,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,r):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kl(i){return v({...i,state:!0,attribute:!1})}const A1=Q`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,$1=H`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,S1=H`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,R1=H`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,T1=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,k1=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,I1=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,O1=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,N1=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,P1=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,M1=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,L1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,D1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,B1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,U1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,j1=H`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,W1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,F1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,z1=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,H1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,V1=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,Z1=H`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,G1=H` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Y1=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,q1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,K1=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,J1=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Q1=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,X1=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eh=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,th=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ih=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,rh=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,nh=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,oh=H`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,ah=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,sh=H`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,lh=H`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ch=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,uh=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,dh=H` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,hh=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ph=H`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,fh=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,wh=H`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,gh=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,mh=H`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,vh=H`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,bh=H`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,yh=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,xh=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,Ch=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,_h=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Eh=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Ah=H`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,$h=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Sh=H`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Rh=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Th=H`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,kh=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ih=H`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Oh=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,Nh=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Ph=H`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,Mh=H`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Lh=H`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var ss=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Dh={add:Z1,allWallets:$1,arrowBottomCircle:S1,appStore:R1,apple:T1,arrowBottom:k1,arrowLeft:I1,arrowRight:O1,arrowTop:N1,bank:Oh,browser:P1,card:Nh,checkmark:M1,chevronBottom:L1,checkmarkBold:Lh,chevronLeft:D1,chevronRight:B1,chevronTop:U1,chromeStore:j1,clock:W1,close:F1,compass:H1,coinPlaceholder:z1,copy:V1,cursor:G1,cursorTransparent:Mh,desktop:Y1,disconnect:q1,discord:K1,etherscan:J1,extension:Q1,externalLink:X1,facebook:eh,filters:th,github:ih,google:rh,helpCircle:nh,infoCircle:oh,mail:ah,mobile:sh,networkPlaceholder:lh,nftPlaceholder:ch,off:uh,playStore:dh,plus:Ph,qrCode:hh,recycleHorizontal:Ih,refresh:ph,search:fh,send:wh,swapHorizontal:gh,swapHorizontalMedium:vh,swapHorizontalBold:mh,swapVertical:yh,swapHorizontalRoundedBold:bh,telegram:xh,twitch:Ch,twitter:_h,twitterIcon:Eh,verify:Ah,verifyFilled:$h,wallet:Rh,walletConnect:Th,walletPlaceholder:Sh,warningCircle:kh};let vn=class extends X{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,O`${Dh[this.name]}`}};vn.styles=[ae,ql,A1];ss([v()],vn.prototype,"size",void 0);ss([v()],vn.prototype,"name",void 0);ss([v()],vn.prototype,"color",void 0);vn=ss([D("wui-icon")],vn);const Bh=Q`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var ls=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let bn=class extends X{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,O`<img src=${this.src} alt=${this.alt} />`}};bn.styles=[ae,ql,Bh];ls([v()],bn.prototype,"src",void 0);ls([v()],bn.prototype,"alt",void 0);ls([v()],bn.prototype,"size",void 0);bn=ls([D("wui-image")],bn);const Uh=Q`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var jh=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let gl=class extends X{render(){return O`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};gl.styles=[ae,Uh];gl=jh([D("wui-loading-hexagon")],gl);const Wh=Q`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Jl=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let po=class extends X{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,O`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};po.styles=[ae,Wh];Jl([v()],po.prototype,"color",void 0);Jl([v()],po.prototype,"size",void 0);po=Jl([D("wui-loading-spinner")],po);const Fh=Q`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var r0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Aa=class extends X{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,o=116+n,r=245+n,a=360+n*1.75;return O`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};Aa.styles=[ae,Fh];r0([v({type:Number})],Aa.prototype,"radius",void 0);Aa=r0([D("wui-loading-thumbnail")],Aa);const zh=Q`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var cs=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let yn=class extends X{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,O`<slot></slot>`}};yn.styles=[zh];cs([v()],yn.prototype,"width",void 0);cs([v()],yn.prototype,"height",void 0);cs([v()],yn.prototype,"borderRadius",void 0);yn=cs([D("wui-shimmer")],yn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o0=i=>(...e)=>({_$litDirective$:i,values:e});let a0=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hh=o0(class extends a0{constructor(i){var e;if(super(i),i.type!==n0.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var n,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(e)}const t=i.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const a=!!e[r];a===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(a?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return Or}}),Vh=Q`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var us=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let xn=class extends X{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,O`<slot class=${Hh(e)}></slot>`}};xn.styles=[ae,Vh];us([v()],xn.prototype,"variant",void 0);us([v()],xn.prototype,"color",void 0);us([v()],xn.prototype,"align",void 0);xn=us([D("wui-text")],xn);const Zh=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Gh=H`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Yh=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,qh=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Kh=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Jh=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Qh=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Xh=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,ep=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tp=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ip=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,rp=H`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,np=H`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,op=H`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,ap=H`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,sp=H`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,lp=H`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,cp=H`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,up=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,dp=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,hp=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,pp=Q`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Ql=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const fp={browser:Zh,dao:Gh,defi:Yh,defiAlt:qh,eth:Kh,layers:Jh,lock:Qh,login:Xh,network:ep,nft:tp,noun:ip,profile:rp,system:np,coinbase:op,onrampCard:cp,moonpay:ap,stripe:sp,paypal:lp,google:up,pencil:dp,lightbulb:hp};let fo=class extends X{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,O`${fp[this.name]}`}};fo.styles=[ae,pp];Ql([v()],fo.prototype,"name",void 0);Ql([v()],fo.prototype,"size",void 0);fo=Ql([D("wui-visual")],fo);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=i=>i??rt,Ce={getSpacingStyles(i,e){if(Array.isArray(i))return i[e]?`var(--wui-spacing-${i[e]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){return new URL(i).hostname},getTruncateString({string:i,charsStart:e,charsEnd:t,truncate:n}){return i.length<=e+t?i:n==="end"?`${i.substring(0,e)}...`:n==="start"?`...${i.substring(i.length-t)}`:`${i.substring(0,Math.floor(e))}...${i.substring(i.length-Math.floor(t))}`},generateAvatarColors(i){const t=i.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(o==null?void 0:o.replace("px","")),s=`${a}% ${a}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const b=this.tintColor(n,.15*h);u.push(`rgb(${b[0]}, ${b[1]}, ${b[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(i){const e=parseInt(i,16),t=e>>16&255,n=e>>8&255,o=e&255;return[t,n,o]},tintColor(i,e){const[t,n,o]=i,r=Math.round(t+(255-t)*e),a=Math.round(n+(255-n)*e),s=Math.round(o+(255-o)*e);return[r,a,s]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(i){const e=i.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(i,e,t){return Math.abs(i)>=e?Number(i.toFixed(t)):i},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},wp=Q`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Lt=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ct=class extends X{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ce.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ce.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ce.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ce.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ce.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ce.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ce.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ce.getSpacingStyles(this.margin,3)};
    `,O`<slot></slot>`}};Ct.styles=[ae,wp];Lt([v()],Ct.prototype,"flexDirection",void 0);Lt([v()],Ct.prototype,"flexWrap",void 0);Lt([v()],Ct.prototype,"flexBasis",void 0);Lt([v()],Ct.prototype,"flexGrow",void 0);Lt([v()],Ct.prototype,"flexShrink",void 0);Lt([v()],Ct.prototype,"alignItems",void 0);Lt([v()],Ct.prototype,"justifyContent",void 0);Lt([v()],Ct.prototype,"columnGap",void 0);Lt([v()],Ct.prototype,"rowGap",void 0);Lt([v()],Ct.prototype,"gap",void 0);Lt([v()],Ct.prototype,"padding",void 0);Lt([v()],Ct.prototype,"margin",void 0);Ct=Lt([D("wui-flex")],Ct);const gp=Q`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ds=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Cn=class extends X{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return O`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",O`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Ce.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Cn.styles=[ae,gp];ds([v()],Cn.prototype,"imageSrc",void 0);ds([v()],Cn.prototype,"alt",void 0);ds([v()],Cn.prototype,"address",void 0);Cn=ds([D("wui-avatar")],Cn);const mp=Q`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var zi=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ri=class extends X{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",n=this.size==="xl",o=t?"12%":"16%",r=t?"xxs":n?"s":"3xl",a=this.background==="gray",s=this.background==="opaque",u=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let h=`var(--wui-color-${this.backgroundColor})`;return u?h=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(h=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${h};
       --local-bg-mix: ${u||a?"100%":o};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,O` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};ri.styles=[ae,Re,mp];zi([v()],ri.prototype,"size",void 0);zi([v()],ri.prototype,"backgroundColor",void 0);zi([v()],ri.prototype,"iconColor",void 0);zi([v()],ri.prototype,"iconSize",void 0);zi([v()],ri.prototype,"background",void 0);zi([v({type:Boolean})],ri.prototype,"border",void 0);zi([v()],ri.prototype,"borderColor",void 0);zi([v()],ri.prototype,"icon",void 0);ri=zi([D("wui-icon-box")],ri);const vp=Q`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var ai=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let kt=class extends X{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return O`
      <button
        ?disabled=${this.disabled}
        class=${ei(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?Ce.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return O` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?O`<wui-image src=${this.networkSrc}></wui-image>`:O`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return O`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};kt.styles=[ae,Re,vp];ai([v()],kt.prototype,"networkSrc",void 0);ai([v()],kt.prototype,"avatarSrc",void 0);ai([v()],kt.prototype,"balance",void 0);ai([v({type:Boolean})],kt.prototype,"isUnsupportedChain",void 0);ai([v({type:Boolean})],kt.prototype,"disabled",void 0);ai([v({type:Boolean})],kt.prototype,"isProfileName",void 0);ai([v()],kt.prototype,"address",void 0);ai([v()],kt.prototype,"profileName",void 0);ai([v()],kt.prototype,"charsStart",void 0);ai([v()],kt.prototype,"charsEnd",void 0);kt=ai([D("wui-account-button")],kt);const bp=Q`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var qr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Oi=class extends X{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),O`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?O`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?O`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:O`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Oi.styles=[ae,bp];qr([v()],Oi.prototype,"size",void 0);qr([v()],Oi.prototype,"name",void 0);qr([v()],Oi.prototype,"imageSrc",void 0);qr([v()],Oi.prototype,"walletIcon",void 0);qr([v({type:Boolean})],Oi.prototype,"installed",void 0);qr([v()],Oi.prototype,"badgeSize",void 0);Oi=qr([D("wui-wallet-image")],Oi);const yp=Q`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var s0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const qs=4;let $a=class extends X{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<qs;return O`${this.walletImages.slice(0,qs).map(({src:t,walletName:n})=>O`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${ei(n)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(qs-this.walletImages.length)].map(()=>O` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};$a.styles=[ae,yp];s0([v({type:Array})],$a.prototype,"walletImages",void 0);$a=s0([D("wui-all-wallets-image")],$a);const xp=Q`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var _i=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Cp={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let Ht=class extends X{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Cp[this.size];return O`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?O`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:O``}};Ht.styles=[ae,Re,xp];_i([v()],Ht.prototype,"size",void 0);_i([v({type:Boolean})],Ht.prototype,"disabled",void 0);_i([v({type:Boolean})],Ht.prototype,"fullWidth",void 0);_i([v({type:Boolean})],Ht.prototype,"loading",void 0);_i([v()],Ht.prototype,"variant",void 0);_i([v({type:Boolean})],Ht.prototype,"hasIconLeft",void 0);_i([v({type:Boolean})],Ht.prototype,"hasIconRight",void 0);_i([v()],Ht.prototype,"borderRadius",void 0);_i([v()],Ht.prototype,"textVariant",void 0);Ht=_i([D("wui-button")],Ht);const l0=H`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,_p=Q`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var c0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Sa=class extends X{constructor(){super(...arguments),this.type="wallet"}render(){return O`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?O` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${l0}`:O`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Sa.styles=[ae,Re,_p];c0([v()],Sa.prototype,"type",void 0);Sa=c0([D("wui-card-select-loader")],Sa);const Ep=H`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Ap=H`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,$p=Q`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ko=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Nr=class extends X{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:Ep,md:l0,lg:Ap};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,O`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?O`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:O`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Nr.styles=[ae,$p];Ko([v()],Nr.prototype,"size",void 0);Ko([v()],Nr.prototype,"name",void 0);Ko([v()],Nr.prototype,"imageSrc",void 0);Ko([v({type:Boolean})],Nr.prototype,"selected",void 0);Nr=Ko([D("wui-network-image")],Nr);const Sp=Q`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Kr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ni=class extends X{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return O`
      <button data-selected=${ei(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?O`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ei(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:O`
      <wui-wallet-image
        size="md"
        imageSrc=${ei(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Ni.styles=[ae,Re,Sp];Kr([v()],Ni.prototype,"name",void 0);Kr([v()],Ni.prototype,"type",void 0);Kr([v()],Ni.prototype,"imageSrc",void 0);Kr([v({type:Boolean})],Ni.prototype,"disabled",void 0);Kr([v({type:Boolean})],Ni.prototype,"selected",void 0);Kr([v({type:Boolean})],Ni.prototype,"installed",void 0);Ni=Kr([D("wui-card-select")],Ni);const Rp=Q`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var Jr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pi=class extends X{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return O`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:Ce.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?O`<wui-image src=${this.imageSrc}></wui-image>`:null}};Pi.styles=[ae,Re,Rp];Jr([v()],Pi.prototype,"variant",void 0);Jr([v()],Pi.prototype,"imageSrc",void 0);Jr([v({type:Boolean})],Pi.prototype,"disabled",void 0);Jr([v()],Pi.prototype,"icon",void 0);Jr([v()],Pi.prototype,"href",void 0);Jr([v()],Pi.prototype,"text",void 0);Pi=Jr([D("wui-chip")],Pi);const Tp=Q`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Xl=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let wo=class extends X{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return O`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?O`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};wo.styles=[ae,Re,Tp];Xl([v()],wo.prototype,"size",void 0);Xl([v({type:Boolean})],wo.prototype,"loading",void 0);wo=Xl([D("wui-connect-button")],wo);const kp=Q`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var hs=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let _n=class extends X{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return O`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};_n.styles=[ae,Re,kp];hs([v({type:Boolean})],_n.prototype,"disabled",void 0);hs([v()],_n.prototype,"label",void 0);hs([v()],_n.prototype,"buttonLabel",void 0);_n=hs([D("wui-cta-button")],_n);const Ip=Q`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var Op=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ml=class extends X{render(){return O`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};ml.styles=[ae,Re,Ip];ml=Op([D("wui-details-group")],ml);const Np=Q`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var u0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ra=class extends X{constructor(){super(...arguments),this.name=""}render(){return O`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};Ra.styles=[ae,Re,Np];u0([v()],Ra.prototype,"name",void 0);Ra=u0([D("wui-details-group-item")],Ra);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pp=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=(i,e)=>{var n;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(n=o._$AO)==null||n.call(o,e,!1),oo(o,e);return!0},Ta=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},d0=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Dp(e)}};function Mp(i){this._$AN!==void 0?(Ta(this),this._$AM=i,d0(this)):this._$AM=i}function Lp(i,e=!1,t=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let r=t;r<n.length;r++)oo(n[r],!1),Ta(n[r]);else n!=null&&(oo(n,!1),Ta(n));else oo(this,i)}const Dp=i=>{i.type==n0.CHILD&&(i._$AP??(i._$AP=Lp),i._$AQ??(i._$AQ=Mp))};let Bp=class extends a0{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),d0(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),t&&(oo(this,e),Ta(this))}setValue(e){if(Pp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ec=()=>new Up;let Up=class{};const Ks=new WeakMap,tc=o0(class extends Bp{render(i){return rt}update(i,[e]){var n;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=i.options)==null?void 0:n.host,this.rt(this.ct=i.element)),rt}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=Ks.get(e);t===void 0&&(t=new WeakMap,Ks.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=Ks.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),jp=Q`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var dr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let fi=class extends X{constructor(){super(...arguments),this.inputElementRef=ec(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-size-${this.size}`;return O` ${this.templateIcon()}
      <input
        ${tc(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${ei(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?O`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};fi.styles=[ae,Re,jp];dr([v()],fi.prototype,"size",void 0);dr([v()],fi.prototype,"icon",void 0);dr([v({type:Boolean})],fi.prototype,"disabled",void 0);dr([v()],fi.prototype,"placeholder",void 0);dr([v()],fi.prototype,"type",void 0);dr([v()],fi.prototype,"keyHint",void 0);dr([v()],fi.prototype,"value",void 0);fi=dr([D("wui-input-text")],fi);const Wp=Q`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var ps=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let En=class extends X{constructor(){super(...arguments),this.disabled=!1}render(){return O`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?O`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};En.styles=[ae,Wp];ps([v()],En.prototype,"errorMessage",void 0);ps([v({type:Boolean})],En.prototype,"disabled",void 0);ps([v()],En.prototype,"value",void 0);En=ps([D("wui-email-input")],En);const Fp=Q`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Jo=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pr=class extends X{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,O`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Pr.styles=[ae,Re,ql,Fp];Jo([v()],Pr.prototype,"size",void 0);Jo([v({type:Boolean})],Pr.prototype,"disabled",void 0);Jo([v()],Pr.prototype,"icon",void 0);Jo([v()],Pr.prototype,"iconColor",void 0);Pr=Jo([D("wui-icon-link")],Pr);const zp=Q`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var h0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ka=class extends X{constructor(){super(...arguments),this.icon="copy"}render(){return O`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ka.styles=[ae,Re,zp];h0([v()],ka.prototype,"icon",void 0);ka=h0([D("wui-input-element")],ka);const Hp=Q`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var ic=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let go=class extends X{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return O`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};go.styles=[ae,Re,Hp];ic([v({type:Boolean})],go.prototype,"disabled",void 0);ic([v({type:String})],go.prototype,"value",void 0);go=ic([D("wui-input-numeric")],go);const Vp=Q`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var rc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let mo=class extends X{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return O`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};mo.styles=[ae,Re,Vp];rc([v({type:Boolean})],mo.prototype,"disabled",void 0);rc([v()],mo.prototype,"color",void 0);mo=rc([D("wui-link")],mo);const Zp=Q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Ei=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vt=class extends X{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return O`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ei(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return O`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return O`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:t;return O`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?O`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:O``}chevronTemplate(){return this.chevron?O`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Vt.styles=[ae,Re,Zp];Ei([v()],Vt.prototype,"icon",void 0);Ei([v()],Vt.prototype,"iconSize",void 0);Ei([v()],Vt.prototype,"variant",void 0);Ei([v()],Vt.prototype,"iconVariant",void 0);Ei([v({type:Boolean})],Vt.prototype,"disabled",void 0);Ei([v()],Vt.prototype,"imageSrc",void 0);Ei([v()],Vt.prototype,"alt",void 0);Ei([v({type:Boolean})],Vt.prototype,"chevron",void 0);Ei([v({type:Boolean})],Vt.prototype,"loading",void 0);Vt=Ei([D("wui-list-item")],Vt);var vl;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(vl||(vl={}));const Gp=Q`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Qr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Mi=class extends X{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,n=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":n,r=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${a};
    `,O`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,n=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?O`<div class="swap-images-container">
        ${e!=null&&e.url?O`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?O`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?O`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:n==="NFT"?O`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:O`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?O`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Mi.styles=[Gp];Qr([v()],Mi.prototype,"type",void 0);Qr([v()],Mi.prototype,"status",void 0);Qr([v()],Mi.prototype,"direction",void 0);Qr([v({type:Boolean})],Mi.prototype,"onlyDirectionIcon",void 0);Qr([v({type:Array})],Mi.prototype,"images",void 0);Qr([v({type:Object})],Mi.prototype,"secondImage",void 0);Mi=Qr([D("wui-transaction-visual")],Mi);const Yp=Q`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var si=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let It=class extends X{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return O`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${ei(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${ei(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${vl[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?O`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?O`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};It.styles=[ae,Yp];si([v()],It.prototype,"type",void 0);si([v({type:Array})],It.prototype,"descriptions",void 0);si([v()],It.prototype,"date",void 0);si([v({type:Boolean})],It.prototype,"onlyDirectionIcon",void 0);si([v()],It.prototype,"status",void 0);si([v()],It.prototype,"direction",void 0);si([v({type:Array})],It.prototype,"images",void 0);si([v({type:Array})],It.prototype,"price",void 0);si([v({type:Array})],It.prototype,"amount",void 0);si([v({type:Array})],It.prototype,"symbol",void 0);It=si([D("wui-transaction-list-item")],It);const qp=Q`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Kp=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let bl=class extends X{render(){return O`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};bl.styles=[ae,qp];bl=Kp([D("wui-transaction-list-item-loader")],bl);const Jp=Q`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var nc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let vo=class extends X{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return O`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};vo.styles=[ae,Jp];nc([v()],vo.prototype,"variant",void 0);nc([v()],vo.prototype,"size",void 0);vo=nc([D("wui-tag")],vo);const Qp=Q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var li=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ot=class extends X{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return O`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?O` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?O` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?O`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?O`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?O`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?O`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Ot.styles=[ae,Re,Qp];li([v({type:Array})],Ot.prototype,"walletImages",void 0);li([v()],Ot.prototype,"imageSrc",void 0);li([v()],Ot.prototype,"name",void 0);li([v()],Ot.prototype,"tagLabel",void 0);li([v()],Ot.prototype,"tagVariant",void 0);li([v()],Ot.prototype,"icon",void 0);li([v()],Ot.prototype,"walletIcon",void 0);li([v({type:Boolean})],Ot.prototype,"installed",void 0);li([v({type:Boolean})],Ot.prototype,"disabled",void 0);li([v({type:Boolean})],Ot.prototype,"showAllWallets",void 0);Ot=li([D("wui-list-wallet")],Ot);const Xp=Q`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var p0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ia=class extends X{constructor(){super(...arguments),this.logo="google"}render(){return O`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Ia.styles=[ae,Xp];p0([v()],Ia.prototype,"logo",void 0);Ia=p0([D("wui-logo")],Ia);const ef=Q`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var oc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let bo=class extends X{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return O`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};bo.styles=[ae,Re,ef];oc([v()],bo.prototype,"logo",void 0);oc([v({type:Boolean})],bo.prototype,"disabled",void 0);bo=oc([D("wui-logo-select")],bo);const tf=Q`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var fs=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let An=class extends X{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return O`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?O`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?O`<wui-image src=${this.imageSrc}></wui-image>`:O`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};An.styles=[ae,Re,tf];fs([v()],An.prototype,"imageSrc",void 0);fs([v({type:Boolean})],An.prototype,"isUnsupportedChain",void 0);fs([v({type:Boolean})],An.prototype,"disabled",void 0);An=fs([D("wui-network-button")],An);const rf=Q`
  :host {
    position: relative;
    display: block;
  }
`;var ws=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $n=class extends X{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(n=>n!==""),this.handleKeyDown=(e,t)=>{const n=e.target,o=this.getInputElement(n),r=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;r.includes(e.key)&&e.preventDefault();const a=o.selectionStart;switch(e.key){case"ArrowLeft":a&&o.setSelectionRange(a+1,a+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const n=t+1;if(!this.shouldInputBeEnabled(n))return;const o=this.numerics[n<this.length?n:t],r=o?this.getInputElement(o):void 0;r&&(r.disabled=!1,r.focus())}if(e==="prev"){const n=t-1,o=this.numerics[n>-1?n:t],r=o?this.getInputElement(o):void 0;r&&r.focus()}}}firstUpdated(){var t,n;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(n=this.numerics[0])==null||n.focus()}render(){return O`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>O`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,t)}
              @click=${n=>this.selectInput(n)}
              @keydown=${n=>this.handleKeyDown(n,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,n){const o=this.numerics[t],r=e||(o?this.getInputElement(o):void 0);r&&(r.value=n,this.values=this.values.map((a,s)=>s===t?n:a))}selectInput(e){const t=e.target;if(t){const n=this.getInputElement(t);n==null||n.select()}}handleInput(e,t){const n=e.target,o=this.getInputElement(n);if(o){const r=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,r,t):Ce.isNumber(r)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,n){const o=t[0];if(o&&Ce.isNumber(o)){this.updateInput(e,n,o);const a=t.substring(1);if(n+1<this.length&&a.length){const s=this.numerics[n+1],u=s?this.getInputElement(s):void 0;u&&this.handlePaste(u,a,n+1)}else this.focusInputField("next",n)}else this.updateInput(e,n,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};$n.styles=[ae,rf];ws([v({type:Number})],$n.prototype,"length",void 0);ws([v({type:String})],$n.prototype,"otp",void 0);ws([Kl()],$n.prototype,"values",void 0);$n=ws([D("wui-otp")],$n);var Qo={},nf=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},f0={},Dt={};let ac;const of=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Dt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Dt.getSymbolTotalCodewords=function(e){return of[e]};Dt.getBCHDigit=function(i){let e=0;for(;i!==0;)e++,i>>>=1;return e};Dt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ac=e};Dt.isKanjiModeEnabled=function(){return typeof ac<"u"};Dt.toSJIS=function(e){return ac(e)};var gs={};(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,o){if(i.isValid(n))return n;try{return e(n)}catch{return o}}})(gs);function w0(){this.buffer=[],this.length=0}w0.prototype={get:function(i){const e=Math.floor(i/8);return(this.buffer[e]>>>7-i%8&1)===1},put:function(i,e){for(let t=0;t<e;t++)this.putBit((i>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),i&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var af=w0;function Xo(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}Xo.prototype.set=function(i,e,t,n){const o=i*this.size+e;this.data[o]=t,n&&(this.reservedBit[o]=!0)};Xo.prototype.get=function(i,e){return this.data[i*this.size+e]};Xo.prototype.xor=function(i,e,t){this.data[i*this.size+e]^=t};Xo.prototype.isReserved=function(i,e){return this.reservedBit[i*this.size+e]};var sf=Xo,g0={};(function(i){const e=Dt.getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,r=e(n),a=r===145?26:Math.ceil((r-13)/(2*o-2))*2,s=[r-7];for(let u=1;u<o-1;u++)s[u]=s[u-1]-a;return s.push(6),s.reverse()},i.getPositions=function(n){const o=[],r=i.getRowColCoords(n),a=r.length;for(let s=0;s<a;s++)for(let u=0;u<a;u++)s===0&&u===0||s===0&&u===a-1||s===a-1&&u===0||o.push([r[s],r[u]]);return o}})(g0);var m0={};const lf=Dt.getSymbolSize,Qc=7;m0.getPositions=function(e){const t=lf(e);return[[0,0],[t-Qc,0],[0,t-Qc]]};var v0={};(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},i.from=function(o){return i.isValid(o)?parseInt(o,10):void 0},i.getPenaltyN1=function(o){const r=o.size;let a=0,s=0,u=0,h=null,b=null;for(let k=0;k<r;k++){s=u=0,h=b=null;for(let N=0;N<r;N++){let P=o.get(k,N);P===h?s++:(s>=5&&(a+=e.N1+(s-5)),h=P,s=1),P=o.get(N,k),P===b?u++:(u>=5&&(a+=e.N1+(u-5)),b=P,u=1)}s>=5&&(a+=e.N1+(s-5)),u>=5&&(a+=e.N1+(u-5))}return a},i.getPenaltyN2=function(o){const r=o.size;let a=0;for(let s=0;s<r-1;s++)for(let u=0;u<r-1;u++){const h=o.get(s,u)+o.get(s,u+1)+o.get(s+1,u)+o.get(s+1,u+1);(h===4||h===0)&&a++}return a*e.N2},i.getPenaltyN3=function(o){const r=o.size;let a=0,s=0,u=0;for(let h=0;h<r;h++){s=u=0;for(let b=0;b<r;b++)s=s<<1&2047|o.get(h,b),b>=10&&(s===1488||s===93)&&a++,u=u<<1&2047|o.get(b,h),b>=10&&(u===1488||u===93)&&a++}return a*e.N3},i.getPenaltyN4=function(o){let r=0;const a=o.data.length;for(let u=0;u<a;u++)r+=o.data[u];return Math.abs(Math.ceil(r*100/a/5)-10)*e.N4};function t(n,o,r){switch(n){case i.Patterns.PATTERN000:return(o+r)%2===0;case i.Patterns.PATTERN001:return o%2===0;case i.Patterns.PATTERN010:return r%3===0;case i.Patterns.PATTERN011:return(o+r)%3===0;case i.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case i.Patterns.PATTERN101:return o*r%2+o*r%3===0;case i.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case i.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(o,r){const a=r.size;for(let s=0;s<a;s++)for(let u=0;u<a;u++)r.isReserved(u,s)||r.xor(u,s,t(o,u,s))},i.getBestMask=function(o,r){const a=Object.keys(i.Patterns).length;let s=0,u=1/0;for(let h=0;h<a;h++){r(h),i.applyMask(h,o);const b=i.getPenaltyN1(o)+i.getPenaltyN2(o)+i.getPenaltyN3(o)+i.getPenaltyN4(o);i.applyMask(h,o),b<u&&(u=b,s=h)}return s}})(v0);var ms={};const Qi=gs,fa=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],wa=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ms.getBlocksCount=function(e,t){switch(t){case Qi.L:return fa[(e-1)*4+0];case Qi.M:return fa[(e-1)*4+1];case Qi.Q:return fa[(e-1)*4+2];case Qi.H:return fa[(e-1)*4+3];default:return}};ms.getTotalCodewordsCount=function(e,t){switch(t){case Qi.L:return wa[(e-1)*4+0];case Qi.M:return wa[(e-1)*4+1];case Qi.Q:return wa[(e-1)*4+2];case Qi.H:return wa[(e-1)*4+3];default:return}};var b0={},vs={};const ao=new Uint8Array(512),Oa=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)ao[t]=e,Oa[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)ao[t]=ao[t-255]})();vs.log=function(e){if(e<1)throw new Error("log("+e+")");return Oa[e]};vs.exp=function(e){return ao[e]};vs.mul=function(e,t){return e===0||t===0?0:ao[Oa[e]+Oa[t]]};(function(i){const e=vs;i.mul=function(n,o){const r=new Uint8Array(n.length+o.length-1);for(let a=0;a<n.length;a++)for(let s=0;s<o.length;s++)r[a+s]^=e.mul(n[a],o[s]);return r},i.mod=function(n,o){let r=new Uint8Array(n);for(;r.length-o.length>=0;){const a=r[0];for(let u=0;u<o.length;u++)r[u]^=e.mul(o[u],a);let s=0;for(;s<r.length&&r[s]===0;)s++;r=r.slice(s)}return r},i.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let r=0;r<n;r++)o=i.mul(o,new Uint8Array([1,e.exp(r)]));return o}})(b0);const y0=b0;function sc(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}sc.prototype.initialize=function(e){this.degree=e,this.genPoly=y0.generateECPolynomial(this.degree)};sc.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=y0.mod(t,this.genPoly),o=this.degree-n.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(n,o),r}return n};var cf=sc,x0={},hr={},lc={};lc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Ai={};const C0="[0-9]+",uf="[A-Z $%*+\\-./:]+";let yo="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";yo=yo.replace(/u/g,"\\u");const df="(?:(?![A-Z0-9 $%*+\\-./:]|"+yo+`)(?:.|[\r
]))+`;Ai.KANJI=new RegExp(yo,"g");Ai.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Ai.BYTE=new RegExp(df,"g");Ai.NUMERIC=new RegExp(C0,"g");Ai.ALPHANUMERIC=new RegExp(uf,"g");const hf=new RegExp("^"+yo+"$"),pf=new RegExp("^"+C0+"$"),ff=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Ai.testKanji=function(e){return hf.test(e)};Ai.testNumeric=function(e){return pf.test(e)};Ai.testAlphanumeric=function(e){return ff.test(e)};(function(i){const e=lc,t=Ai;i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},i.getBestModeForData=function(r){return t.testNumeric(r)?i.NUMERIC:t.testAlphanumeric(r)?i.ALPHANUMERIC:t.testKanji(r)?i.KANJI:i.BYTE},i.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},i.isValid=function(r){return r&&r.bit&&r.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+o)}}i.from=function(r,a){if(i.isValid(r))return r;try{return n(r)}catch{return a}}})(hr);(function(i){const e=Dt,t=ms,n=gs,o=hr,r=lc,a=7973,s=e.getBCHDigit(a);function u(N,P,j){for(let V=1;V<=40;V++)if(P<=i.getCapacity(V,j,N))return V}function h(N,P){return o.getCharCountIndicator(N,P)+4}function b(N,P){let j=0;return N.forEach(function(V){const K=h(V.mode,P);j+=K+V.getBitsLength()}),j}function k(N,P){for(let j=1;j<=40;j++)if(b(N,j)<=i.getCapacity(j,P,o.MIXED))return j}i.from=function(P,j){return r.isValid(P)?parseInt(P,10):j},i.getCapacity=function(P,j,V){if(!r.isValid(P))throw new Error("Invalid QR Code version");typeof V>"u"&&(V=o.BYTE);const K=e.getSymbolTotalCodewords(P),Z=t.getTotalCodewordsCount(P,j),I=(K-Z)*8;if(V===o.MIXED)return I;const J=I-h(V,P);switch(V){case o.NUMERIC:return Math.floor(J/10*3);case o.ALPHANUMERIC:return Math.floor(J/11*2);case o.KANJI:return Math.floor(J/13);case o.BYTE:default:return Math.floor(J/8)}},i.getBestVersionForData=function(P,j){let V;const K=n.from(j,n.M);if(Array.isArray(P)){if(P.length>1)return k(P,K);if(P.length===0)return 1;V=P[0]}else V=P;return u(V.mode,V.getLength(),K)},i.getEncodedBits=function(P){if(!r.isValid(P)||P<7)throw new Error("Invalid QR Code version");let j=P<<12;for(;e.getBCHDigit(j)-s>=0;)j^=a<<e.getBCHDigit(j)-s;return P<<12|j}})(x0);var _0={};const yl=Dt,E0=1335,wf=21522,Xc=yl.getBCHDigit(E0);_0.getEncodedBits=function(e,t){const n=e.bit<<3|t;let o=n<<10;for(;yl.getBCHDigit(o)-Xc>=0;)o^=E0<<yl.getBCHDigit(o)-Xc;return(n<<10|o)^wf};var A0={};const gf=hr;function Sn(i){this.mode=gf.NUMERIC,this.data=i.toString()}Sn.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Sn.prototype.getLength=function(){return this.data.length};Sn.prototype.getBitsLength=function(){return Sn.getBitsLength(this.data.length)};Sn.prototype.write=function(e){let t,n,o;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),o=parseInt(n,10),e.put(o,10);const r=this.data.length-t;r>0&&(n=this.data.substr(t),o=parseInt(n,10),e.put(o,r*3+1))};var mf=Sn;const vf=hr,Js=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Rn(i){this.mode=vf.ALPHANUMERIC,this.data=i}Rn.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Rn.prototype.getLength=function(){return this.data.length};Rn.prototype.getBitsLength=function(){return Rn.getBitsLength(this.data.length)};Rn.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=Js.indexOf(this.data[t])*45;n+=Js.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(Js.indexOf(this.data[t]),6)};var bf=Rn,yf=function(e){for(var t=[],n=e.length,o=0;o<n;o++){var r=e.charCodeAt(o);if(r>=55296&&r<=56319&&n>o+1){var a=e.charCodeAt(o+1);a>=56320&&a<=57343&&(r=(r-55296)*1024+a-56320+65536,o+=1)}if(r<128){t.push(r);continue}if(r<2048){t.push(r>>6|192),t.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){t.push(r>>12|224),t.push(r>>6&63|128),t.push(r&63|128);continue}if(r>=65536&&r<=1114111){t.push(r>>18|240),t.push(r>>12&63|128),t.push(r>>6&63|128),t.push(r&63|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer};const xf=yf,Cf=hr;function Tn(i){this.mode=Cf.BYTE,typeof i=="string"&&(i=xf(i)),this.data=new Uint8Array(i)}Tn.getBitsLength=function(e){return e*8};Tn.prototype.getLength=function(){return this.data.length};Tn.prototype.getBitsLength=function(){return Tn.getBitsLength(this.data.length)};Tn.prototype.write=function(i){for(let e=0,t=this.data.length;e<t;e++)i.put(this.data[e],8)};var _f=Tn;const Ef=hr,Af=Dt;function kn(i){this.mode=Ef.KANJI,this.data=i}kn.getBitsLength=function(e){return e*13};kn.prototype.getLength=function(){return this.data.length};kn.prototype.getBitsLength=function(){return kn.getBitsLength(this.data.length)};kn.prototype.write=function(i){let e;for(e=0;e<this.data.length;e++){let t=Af.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),i.put(t,13)}};var $f=kn,$0={exports:{}};(function(i){var e={single_source_shortest_paths:function(t,n,o){var r={},a={};a[n]=0;var s=e.PriorityQueue.make();s.push(n,0);for(var u,h,b,k,N,P,j,V,K;!s.empty();){u=s.pop(),h=u.value,k=u.cost,N=t[h]||{};for(b in N)N.hasOwnProperty(b)&&(P=N[b],j=k+P,V=a[b],K=typeof a[b]>"u",(K||V>j)&&(a[b]=j,s.push(b,j),r[b]=h))}if(typeof o<"u"&&typeof a[o]>"u"){var Z=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(Z)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var o=[],r=n;r;)o.push(r),t[r],r=t[r];return o.reverse(),o},find_path:function(t,n,o){var r=e.single_source_shortest_paths(t,n,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,o={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var o={value:t,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e})($0);var Sf=$0.exports;(function(i){const e=hr,t=mf,n=bf,o=_f,r=$f,a=Ai,s=Dt,u=Sf;function h(Z){return unescape(encodeURIComponent(Z)).length}function b(Z,I,J){const q=[];let re;for(;(re=Z.exec(J))!==null;)q.push({data:re[0],index:re.index,mode:I,length:re[0].length});return q}function k(Z){const I=b(a.NUMERIC,e.NUMERIC,Z),J=b(a.ALPHANUMERIC,e.ALPHANUMERIC,Z);let q,re;return s.isKanjiModeEnabled()?(q=b(a.BYTE,e.BYTE,Z),re=b(a.KANJI,e.KANJI,Z)):(q=b(a.BYTE_KANJI,e.BYTE,Z),re=[]),I.concat(J,q,re).sort(function(Ee,p){return Ee.index-p.index}).map(function(Ee){return{data:Ee.data,mode:Ee.mode,length:Ee.length}})}function N(Z,I){switch(I){case e.NUMERIC:return t.getBitsLength(Z);case e.ALPHANUMERIC:return n.getBitsLength(Z);case e.KANJI:return r.getBitsLength(Z);case e.BYTE:return o.getBitsLength(Z)}}function P(Z){return Z.reduce(function(I,J){const q=I.length-1>=0?I[I.length-1]:null;return q&&q.mode===J.mode?(I[I.length-1].data+=J.data,I):(I.push(J),I)},[])}function j(Z){const I=[];for(let J=0;J<Z.length;J++){const q=Z[J];switch(q.mode){case e.NUMERIC:I.push([q,{data:q.data,mode:e.ALPHANUMERIC,length:q.length},{data:q.data,mode:e.BYTE,length:q.length}]);break;case e.ALPHANUMERIC:I.push([q,{data:q.data,mode:e.BYTE,length:q.length}]);break;case e.KANJI:I.push([q,{data:q.data,mode:e.BYTE,length:h(q.data)}]);break;case e.BYTE:I.push([{data:q.data,mode:e.BYTE,length:h(q.data)}])}}return I}function V(Z,I){const J={},q={start:{}};let re=["start"];for(let ce=0;ce<Z.length;ce++){const Ee=Z[ce],p=[];for(let f=0;f<Ee.length;f++){const w=Ee[f],C=""+ce+f;p.push(C),J[C]={node:w,lastCount:0},q[C]={};for(let A=0;A<re.length;A++){const T=re[A];J[T]&&J[T].node.mode===w.mode?(q[T][C]=N(J[T].lastCount+w.length,w.mode)-N(J[T].lastCount,w.mode),J[T].lastCount+=w.length):(J[T]&&(J[T].lastCount=w.length),q[T][C]=N(w.length,w.mode)+4+e.getCharCountIndicator(w.mode,I))}}re=p}for(let ce=0;ce<re.length;ce++)q[re[ce]].end=0;return{map:q,table:J}}function K(Z,I){let J;const q=e.getBestModeForData(Z);if(J=e.from(I,q),J!==e.BYTE&&J.bit<q.bit)throw new Error('"'+Z+'" cannot be encoded with mode '+e.toString(J)+`.
 Suggested mode is: `+e.toString(q));switch(J===e.KANJI&&!s.isKanjiModeEnabled()&&(J=e.BYTE),J){case e.NUMERIC:return new t(Z);case e.ALPHANUMERIC:return new n(Z);case e.KANJI:return new r(Z);case e.BYTE:return new o(Z)}}i.fromArray=function(I){return I.reduce(function(J,q){return typeof q=="string"?J.push(K(q,null)):q.data&&J.push(K(q.data,q.mode)),J},[])},i.fromString=function(I,J){const q=k(I,s.isKanjiModeEnabled()),re=j(q),ce=V(re,J),Ee=u.find_path(ce.map,"start","end"),p=[];for(let f=1;f<Ee.length-1;f++)p.push(ce.table[Ee[f]].node);return i.fromArray(P(p))},i.rawSplit=function(I){return i.fromArray(k(I,s.isKanjiModeEnabled()))}})(A0);const bs=Dt,Qs=gs,Rf=af,Tf=sf,kf=g0,If=m0,xl=v0,Cl=ms,Of=cf,Na=x0,Nf=_0,Pf=hr,Xs=A0;function Mf(i,e){const t=i.size,n=If.getPositions(e);for(let o=0;o<n.length;o++){const r=n[o][0],a=n[o][1];for(let s=-1;s<=7;s++)if(!(r+s<=-1||t<=r+s))for(let u=-1;u<=7;u++)a+u<=-1||t<=a+u||(s>=0&&s<=6&&(u===0||u===6)||u>=0&&u<=6&&(s===0||s===6)||s>=2&&s<=4&&u>=2&&u<=4?i.set(r+s,a+u,!0,!0):i.set(r+s,a+u,!1,!0))}}function Lf(i){const e=i.size;for(let t=8;t<e-8;t++){const n=t%2===0;i.set(t,6,n,!0),i.set(6,t,n,!0)}}function Df(i,e){const t=kf.getPositions(e);for(let n=0;n<t.length;n++){const o=t[n][0],r=t[n][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?i.set(o+a,r+s,!0,!0):i.set(o+a,r+s,!1,!0)}}function Bf(i,e){const t=i.size,n=Na.getEncodedBits(e);let o,r,a;for(let s=0;s<18;s++)o=Math.floor(s/3),r=s%3+t-8-3,a=(n>>s&1)===1,i.set(o,r,a,!0),i.set(r,o,a,!0)}function el(i,e,t){const n=i.size,o=Nf.getEncodedBits(e,t);let r,a;for(r=0;r<15;r++)a=(o>>r&1)===1,r<6?i.set(r,8,a,!0):r<8?i.set(r+1,8,a,!0):i.set(n-15+r,8,a,!0),r<8?i.set(8,n-r-1,a,!0):r<9?i.set(8,15-r-1+1,a,!0):i.set(8,15-r-1,a,!0);i.set(n-8,8,1,!0)}function Uf(i,e){const t=i.size;let n=-1,o=t-1,r=7,a=0;for(let s=t-1;s>0;s-=2)for(s===6&&s--;;){for(let u=0;u<2;u++)if(!i.isReserved(o,s-u)){let h=!1;a<e.length&&(h=(e[a]>>>r&1)===1),i.set(o,s-u,h),r--,r===-1&&(a++,r=7)}if(o+=n,o<0||t<=o){o-=n,n=-n;break}}}function jf(i,e,t){const n=new Rf;t.forEach(function(u){n.put(u.mode.bit,4),n.put(u.getLength(),Pf.getCharCountIndicator(u.mode,i)),u.write(n)});const o=bs.getSymbolTotalCodewords(i),r=Cl.getTotalCodewordsCount(i,e),a=(o-r)*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const s=(a-n.getLengthInBits())/8;for(let u=0;u<s;u++)n.put(u%2?17:236,8);return Wf(n,i,e)}function Wf(i,e,t){const n=bs.getSymbolTotalCodewords(e),o=Cl.getTotalCodewordsCount(e,t),r=n-o,a=Cl.getBlocksCount(e,t),s=n%a,u=a-s,h=Math.floor(n/a),b=Math.floor(r/a),k=b+1,N=h-b,P=new Of(N);let j=0;const V=new Array(a),K=new Array(a);let Z=0;const I=new Uint8Array(i.buffer);for(let Ee=0;Ee<a;Ee++){const p=Ee<u?b:k;V[Ee]=I.slice(j,j+p),K[Ee]=P.encode(V[Ee]),j+=p,Z=Math.max(Z,p)}const J=new Uint8Array(n);let q=0,re,ce;for(re=0;re<Z;re++)for(ce=0;ce<a;ce++)re<V[ce].length&&(J[q++]=V[ce][re]);for(re=0;re<N;re++)for(ce=0;ce<a;ce++)J[q++]=K[ce][re];return J}function Ff(i,e,t,n){let o;if(Array.isArray(i))o=Xs.fromArray(i);else if(typeof i=="string"){let h=e;if(!h){const b=Xs.rawSplit(i);h=Na.getBestVersionForData(b,t)}o=Xs.fromString(i,h||40)}else throw new Error("Invalid data");const r=Na.getBestVersionForData(o,t);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=r;else if(e<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const a=jf(e,t,o),s=bs.getSymbolSize(e),u=new Tf(s);return Mf(u,e),Lf(u),Df(u,e),el(u,t,0),e>=7&&Bf(u,e),Uf(u,a),isNaN(n)&&(n=xl.getBestMask(u,el.bind(null,u,t))),xl.applyMask(n,u),el(u,t,n),{modules:u,version:e,errorCorrectionLevel:t,maskPattern:n,segments:o}}f0.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let n=Qs.M,o,r;return typeof t<"u"&&(n=Qs.from(t.errorCorrectionLevel,Qs.M),o=Na.from(t.version),r=xl.from(t.maskPattern),t.toSJISFunc&&bs.setToSJISFunction(t.toSJISFunc)),Ff(e,o,n,r)};var S0={},cc={};(function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:r,scale:r?4:a,margin:o,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},i.getImageWidth=function(n,o){const r=i.getScale(n,o);return Math.floor((n+o.margin*2)*r)},i.qrToImageData=function(n,o,r){const a=o.modules.size,s=o.modules.data,u=i.getScale(a,r),h=Math.floor((a+r.margin*2)*u),b=r.margin*u,k=[r.color.light,r.color.dark];for(let N=0;N<h;N++)for(let P=0;P<h;P++){let j=(N*h+P)*4,V=r.color.light;if(N>=b&&P>=b&&N<h-b&&P<h-b){const K=Math.floor((N-b)/u),Z=Math.floor((P-b)/u);V=k[s[K*a+Z]?1:0]}n[j++]=V.r,n[j++]=V.g,n[j++]=V.b,n[j]=V.a}}})(cc);(function(i){const e=cc;function t(o,r,a){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(r,a,s){let u=s,h=a;typeof u>"u"&&(!a||!a.getContext)&&(u=a,a=void 0),a||(h=n()),u=e.getOptions(u);const b=e.getImageWidth(r.modules.size,u),k=h.getContext("2d"),N=k.createImageData(b,b);return e.qrToImageData(N.data,r,u),t(k,h,b),k.putImageData(N,0,0),h},i.renderToDataURL=function(r,a,s){let u=s;typeof u>"u"&&(!a||!a.getContext)&&(u=a,a=void 0),u||(u={});const h=i.render(r,a,u),b=u.type||"image/png",k=u.rendererOpts||{};return h.toDataURL(b,k.quality)}})(S0);var R0={};const zf=cc;function eu(i,e){const t=i.a/255,n=e+'="'+i.hex+'"';return t<1?n+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':n}function tl(i,e,t){let n=i+e;return typeof t<"u"&&(n+=" "+t),n}function Hf(i,e,t){let n="",o=0,r=!1,a=0;for(let s=0;s<i.length;s++){const u=Math.floor(s%e),h=Math.floor(s/e);!u&&!r&&(r=!0),i[s]?(a++,s>0&&u>0&&i[s-1]||(n+=r?tl("M",u+t,.5+h+t):tl("m",o,0),o=0,r=!1),u+1<e&&i[s+1]||(n+=tl("h",a),a=0)):o++}return n}R0.render=function(e,t,n){const o=zf.getOptions(t),r=e.modules.size,a=e.modules.data,s=r+o.margin*2,u=o.color.light.a?"<path "+eu(o.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",h="<path "+eu(o.color.dark,"stroke")+' d="'+Hf(a,r,o.margin)+'"/>',b='viewBox="0 0 '+s+" "+s+'"',N='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+b+' shape-rendering="crispEdges">'+u+h+`</svg>
`;return typeof n=="function"&&n(null,N),N};const Vf=nf,_l=f0,T0=S0,Zf=R0;function uc(i,e,t,n,o){const r=[].slice.call(arguments,1),a=r.length,s=typeof r[a-1]=="function";if(!s&&!Vf())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(o=t,t=e,e=n=void 0):a===3&&(e.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=t,t=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(t=e,e=n=void 0):a===2&&!e.getContext&&(n=t,t=e,e=void 0),new Promise(function(u,h){try{const b=_l.create(t,n);u(i(b,e,n))}catch(b){h(b)}})}try{const u=_l.create(t,n);o(null,i(u,e,n))}catch(u){o(u)}}Qo.create=_l.create;Qo.toCanvas=uc.bind(null,T0.render);Qo.toDataURL=uc.bind(null,T0.renderToDataURL);Qo.toString=uc.bind(null,function(i,e,t){return Zf.render(i,t)});const Gf=.1,tu=2.5,Ti=7;function il(i,e,t){return i===e?!1:(i-e<0?e-i:i-e)<=t+Gf}function Yf(i,e){const t=Array.prototype.slice.call(Qo.create(i,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(t.length);return t.reduce((o,r,a)=>(a%n===0?o.push([r]):o[o.length-1].push(r))&&o,[])}const qf={generate(i,e,t){const n="#141414",o="transparent",a=[],s=Yf(i,"Q"),u=e/s.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:V,y:K})=>{const Z=(s.length-Ti)*u*V,I=(s.length-Ti)*u*K,J=.45;for(let q=0;q<h.length;q+=1){const re=u*(Ti-q*2);a.push(H`
            <rect
              fill=${q===2?n:o}
              width=${q===0?re-5:re}
              rx= ${q===0?(re-5)*J:re*J}
              ry= ${q===0?(re-5)*J:re*J}
              stroke=${n}
              stroke-width=${q===0?5:0}
              height=${q===0?re-5:re}
              x= ${q===0?I+u*q+5/2:I+u*q}
              y= ${q===0?Z+u*q+5/2:Z+u*q}
            />
          `)}});const b=Math.floor((t+25)/u),k=s.length/2-b/2,N=s.length/2+b/2-1,P=[];s.forEach((V,K)=>{V.forEach((Z,I)=>{if(s[K][I]&&!(K<Ti&&I<Ti||K>s.length-(Ti+1)&&I<Ti||K<Ti&&I>s.length-(Ti+1))&&!(K>k&&K<N&&I>k&&I<N)){const J=K*u+u/2,q=I*u+u/2;P.push([J,q])}})});const j={};return P.forEach(([V,K])=>{var Z;j[V]?(Z=j[V])==null||Z.push(K):j[V]=[K]}),Object.entries(j).map(([V,K])=>{const Z=K.filter(I=>K.every(J=>!il(I,J,u)));return[Number(V),Z]}).forEach(([V,K])=>{K.forEach(Z=>{a.push(H`<circle cx=${V} cy=${Z} fill=${n} r=${u/tu} />`)})}),Object.entries(j).filter(([V,K])=>K.length>1).map(([V,K])=>{const Z=K.filter(I=>K.some(J=>il(I,J,u)));return[Number(V),Z]}).map(([V,K])=>{K.sort((I,J)=>I<J?-1:1);const Z=[];for(const I of K){const J=Z.find(q=>q.some(re=>il(I,re,u)));J?J.push(I):Z.push([I])}return[V,Z.map(I=>[I[0],I[I.length-1]])]}).forEach(([V,K])=>{K.forEach(([Z,I])=>{a.push(H`
              <line
                x1=${V}
                x2=${V}
                y1=${Z}
                y2=${I}
                stroke=${n}
                stroke-width=${u/(tu/2)}
                stroke-linecap="round"
              />
            `)})}),a}},Kf=Q`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Xr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Li=class extends X{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,O`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return H`
      <svg height=${e} width=${e}>
        ${qf.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?O`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:O`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Li.styles=[ae,Kf];Xr([v()],Li.prototype,"uri",void 0);Xr([v({type:Number})],Li.prototype,"size",void 0);Xr([v()],Li.prototype,"theme",void 0);Xr([v()],Li.prototype,"imageSrc",void 0);Xr([v()],Li.prototype,"alt",void 0);Xr([v({type:Boolean})],Li.prototype,"arenaClear",void 0);Li=Xr([D("wui-qr-code")],Li);const Jf=Q`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Qf=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let El=class extends X{constructor(){super(...arguments),this.inputComponentRef=ec()}render(){return O`
      <wui-input-text
        ${tc(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};El.styles=[ae,Jf];El=Qf([D("wui-search-bar")],El);const Xf=Q`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var ea=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Mr=class extends X{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return O`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Mr.styles=[ae,Xf];ea([v()],Mr.prototype,"backgroundColor",void 0);ea([v()],Mr.prototype,"iconColor",void 0);ea([v()],Mr.prototype,"icon",void 0);ea([v()],Mr.prototype,"message",void 0);Mr=ea([D("wui-snackbar")],Mr);const e2=Q`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var pr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let wi=class extends X{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var o;const n=t===this.activeTab;return O`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${n}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?O`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const n=this.buttons[this.activeTab],o=this.buttons[e],r=n==null?void 0:n.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),u=a==null?void 0:a.getBoundingClientRect();n&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&u&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+u.width)+6}px`,o.animate([{width:`${s.width+u.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};wi.styles=[ae,Re,e2];pr([v({type:Array})],wi.prototype,"tabs",void 0);pr([v()],wi.prototype,"onTabChange",void 0);pr([v({type:Array})],wi.prototype,"buttons",void 0);pr([v({type:Boolean})],wi.prototype,"disabled",void 0);pr([v()],wi.prototype,"localTabWidth",void 0);pr([Kl()],wi.prototype,"activeTab",void 0);pr([Kl()],wi.prototype,"isDense",void 0);wi=pr([D("wui-tabs")],wi);const t2=Q`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-width: 0px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var dc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let xo=class extends X{constructor(){super(...arguments),this.text=""}render(){return O`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?O`<wui-image src=${this.imageSrc}></wui-image>`:O`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};xo.styles=[ae,Re,t2];dc([v()],xo.prototype,"imageSrc",void 0);dc([v()],xo.prototype,"text",void 0);xo=dc([D("wui-token-button")],xo);const i2=Q`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ys=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let In=class extends X{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,O`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};In.styles=[ae,Re,i2];ys([v()],In.prototype,"placement",void 0);ys([v()],In.prototype,"variant",void 0);ys([v()],In.prototype,"message",void 0);In=ys([D("wui-tooltip")],In);const r2=Q`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var Vn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let rr=class extends X{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){var t;const e=(t=hl.multiply(this.price,this.amount))==null?void 0:t.toFixed(3);return O`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?O`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${Ce.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount&&O`<wui-text variant="small-400" color="fg-200"
              >${Ce.formatNumberToLocalString(this.amount,4)}</wui-text
            >`}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?O`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};rr.styles=[ae,Re,r2];Vn([v()],rr.prototype,"imageSrc",void 0);Vn([v()],rr.prototype,"name",void 0);Vn([v()],rr.prototype,"symbol",void 0);Vn([v()],rr.prototype,"price",void 0);Vn([v()],rr.prototype,"amount",void 0);rr=Vn([D("wui-token-list-item")],rr);const n2=Q`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var xs=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let On=class extends X{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,O`${this.templateVisual()}`}templateVisual(){return this.imageSrc?O`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:O`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};On.styles=[ae,n2];xs([v()],On.prototype,"imageSrc",void 0);xs([v()],On.prototype,"alt",void 0);xs([v({type:Boolean})],On.prototype,"borderRadiusFull",void 0);On=xs([D("wui-visual-thumbnail")],On);const o2=Q`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Cs=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Nn=class extends X{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return O`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Nn.styles=[ae,Re,o2];Cs([v()],Nn.prototype,"label",void 0);Cs([v()],Nn.prototype,"description",void 0);Cs([v()],Nn.prototype,"icon",void 0);Nn=Cs([D("wui-notice-card")],Nn);const a2=Q`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var hc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const rl=100;let Co=class extends X{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var n,o;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".heightContent"),t=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&t){this.scrollElement=e;const r=t==null?void 0:t.scrollHeight;r&&r>rl&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return O`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${rl}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${rl}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?O` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Co.styles=[ae,Re,a2];hc([v()],Co.prototype,"textTitle",void 0);hc([v()],Co.prototype,"overflowedContent",void 0);Co=hc([D("wui-list-accordion")],Co);const s2=Q`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var _s=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pn=class extends X{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return O`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?O`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?O` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:O`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Pn.styles=[ae,Re,s2];_s([v()],Pn.prototype,"imageSrc",void 0);_s([v()],Pn.prototype,"textTitle",void 0);_s([v()],Pn.prototype,"textValue",void 0);Pn=_s([D("wui-list-content")],Pn);const l2=Q`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var ta=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Lr=class extends X{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return O`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?O`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:O`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Lr.styles=[ae,Re,l2];ta([v()],Lr.prototype,"imageSrc",void 0);ta([v()],Lr.prototype,"name",void 0);ta([v({type:Boolean})],Lr.prototype,"disabled",void 0);ta([v({type:Boolean})],Lr.prototype,"transparent",void 0);Lr=ta([D("wui-list-network")],Lr);const c2=Q`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Zn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let nr=class extends X{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return O`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?O`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:O`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};nr.styles=[ae,Re,c2];Zn([v()],nr.prototype,"amount",void 0);Zn([v()],nr.prototype,"networkCurreny",void 0);Zn([v()],nr.prototype,"networkImageUrl",void 0);Zn([v()],nr.prototype,"receiverAddress",void 0);Zn([v()],nr.prototype,"addressExplorerUrl",void 0);nr=Zn([D("wui-list-wallet-transaction")],nr);const u2=Q`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var Bt=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let _t=class extends X{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return O`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?O`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:O`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await me._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return O`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return O`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return O`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};_t.styles=[ae,Re,u2];Bt([v({type:Boolean})],_t.prototype,"disabled",void 0);Bt([v()],_t.prototype,"color",void 0);Bt([v()],_t.prototype,"label",void 0);Bt([v()],_t.prototype,"purchaseValue",void 0);Bt([v()],_t.prototype,"purchaseCurrency",void 0);Bt([v()],_t.prototype,"date",void 0);Bt([v({type:Boolean})],_t.prototype,"completed",void 0);Bt([v({type:Boolean})],_t.prototype,"inProgress",void 0);Bt([v({type:Boolean})],_t.prototype,"failed",void 0);Bt([v()],_t.prototype,"onClick",void 0);Bt([v()],_t.prototype,"symbol",void 0);Bt([v()],_t.prototype,"icon",void 0);_t=Bt([D("wui-onramp-activity-item")],_t);const d2=Q`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var fr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let gi=class extends X{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return O`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${ei(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?O`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:O`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var n;const e=le.getRequestedCaipNetworks(),t=(n=e==null?void 0:e.filter(o=>o==null?void 0:o.imageId))==null?void 0:n.slice(0,5);return O`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>O`
            <wui-flex class="network-icon">
              <wui-image src=${ei(Ue.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};gi.styles=[ae,Re,d2];fr([v({type:Boolean})],gi.prototype,"disabled",void 0);fr([v()],gi.prototype,"color",void 0);fr([v()],gi.prototype,"name",void 0);fr([v()],gi.prototype,"label",void 0);fr([v()],gi.prototype,"feeRange",void 0);fr([v({type:Boolean})],gi.prototype,"loading",void 0);fr([v()],gi.prototype,"onClick",void 0);gi=fr([D("wui-onramp-provider-item")],gi);const h2=Q`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var k0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pa=class extends X{constructor(){super(...arguments),this.text=""}render(){return O`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Pa.styles=[ae,Re,h2];k0([v()],Pa.prototype,"text",void 0);Pa=k0([D("wui-promo")],Pa);const p2=Q`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`;var pc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let _o=class extends X{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return O`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-tooltip");e&&(e.style.display="flex",e==null||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250}))}onMouseLeave(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-tooltip");e&&(e.style.display="none",e==null||e.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200}))}};_o.styles=[ae,Re,p2];pc([v()],_o.prototype,"text",void 0);pc([v()],_o.prototype,"icon",void 0);_o=pc([D("wui-tooltip-select")],_o);const f2=Q`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var fc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Eo=class extends X{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return O`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Eo.styles=[ae,f2];fc([v()],Eo.prototype,"dollars",void 0);fc([v()],Eo.prototype,"pennies",void 0);Eo=fc([D("wui-balance")],Eo);const w2=Q`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Gn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let or=class extends X{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return O`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${Ce.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?O`<wui-image src=${this.networkSrc}></wui-image>`:O`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};or.styles=[ae,Re,w2];Gn([v()],or.prototype,"networkSrc",void 0);Gn([v()],or.prototype,"avatarSrc",void 0);Gn([v({type:Boolean})],or.prototype,"isProfileName",void 0);Gn([v()],or.prototype,"address",void 0);Gn([v()],or.prototype,"icon",void 0);or=Gn([D("wui-profile-button")],or);const g2=Q`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var Yn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ar=class extends X{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return O`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ar.styles=[ae,Re,g2];Yn([v()],ar.prototype,"variant",void 0);Yn([v()],ar.prototype,"imageSrc",void 0);Yn([v({type:Boolean})],ar.prototype,"disabled",void 0);Yn([v()],ar.prototype,"icon",void 0);Yn([v()],ar.prototype,"text",void 0);ar=Yn([D("wui-chip-button")],ar);const m2=Q`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var wc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ao=class extends X{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return O`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return O` <wui-flex class="networks">
      ${e==null?void 0:e.map(t=>O` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};Ao.styles=[ae,Re,m2];wc([v({type:Array})],Ao.prototype,"networkImages",void 0);wc([v()],Ao.prototype,"text",void 0);Ao=wc([D("wui-compatible-network")],Ao);const v2=Q`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var gc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $o=class extends X{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return O`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};$o.styles=[ae,Re,v2];gc([v()],$o.prototype,"icon",void 0);gc([v()],$o.prototype,"text",void 0);$o=gc([D("wui-banner")],$o);const b2=Q`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var en=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Di=class extends X{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return O`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${Ce.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};Di.styles=[ae,Re,b2];en([v()],Di.prototype,"tokenName",void 0);en([v()],Di.prototype,"tokenImageUrl",void 0);en([v({type:Number})],Di.prototype,"tokenValue",void 0);en([v()],Di.prototype,"tokenAmount",void 0);en([v()],Di.prototype,"tokenCurrency",void 0);en([v({type:Boolean})],Di.prototype,"clickable",void 0);Di=en([D("wui-list-token")],Di);const y2=Q`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var wr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let mi=class extends X{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return O`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?O` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:O`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};mi.styles=[ae,Re,y2];wr([v()],mi.prototype,"icon",void 0);wr([v()],mi.prototype,"text",void 0);wr([v()],mi.prototype,"description",void 0);wr([v()],mi.prototype,"tag",void 0);wr([v()],mi.prototype,"iconBackgroundColor",void 0);wr([v()],mi.prototype,"iconColor",void 0);wr([v({type:Boolean})],mi.prototype,"disabled",void 0);mi=wr([D("wui-list-description")],mi);const x2=Q`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,C2=/[.*+?^${}()|[\]\\]/gu,_2=/[0-9,.]/u;var Es=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Mn=class extends X{constructor(){super(...arguments),this.inputElementRef=ec(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),O`<input
      ${tc(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var n,o;const t=e.data;t&&!_2.test(t)&&(n=this.inputElementRef)!=null&&n.value&&(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(C2,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};Mn.styles=[ae,Re,x2];Es([v({type:Boolean})],Mn.prototype,"disabled",void 0);Es([v({type:String})],Mn.prototype,"value",void 0);Es([v({type:String})],Mn.prototype,"placeholder",void 0);Mn=Es([D("wui-input-amount")],Mn);const E2=Q`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`;var ia=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Dr=class extends X{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return O`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?O`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?O`<wui-image src=${this.imageSrc}></wui-image>`:O`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Dr.styles=[ae,Re,E2];ia([v()],Dr.prototype,"text",void 0);ia([v()],Dr.prototype,"address",void 0);ia([v()],Dr.prototype,"imageSrc",void 0);ia([v({type:Boolean})],Dr.prototype,"isAddress",void 0);Dr=ia([D("wui-preview-item")],Dr);const A2=Q`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Yt=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Rt=class extends X{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ce.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ce.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ce.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ce.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ce.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ce.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ce.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ce.getSpacingStyles(this.margin,3)};
    `,O`<slot></slot>`}};Rt.styles=[ae,A2];Yt([v()],Rt.prototype,"gridTemplateRows",void 0);Yt([v()],Rt.prototype,"gridTemplateColumns",void 0);Yt([v()],Rt.prototype,"justifyItems",void 0);Yt([v()],Rt.prototype,"alignItems",void 0);Yt([v()],Rt.prototype,"justifyContent",void 0);Yt([v()],Rt.prototype,"alignContent",void 0);Yt([v()],Rt.prototype,"columnGap",void 0);Yt([v()],Rt.prototype,"rowGap",void 0);Yt([v()],Rt.prototype,"gap",void 0);Yt([v()],Rt.prototype,"padding",void 0);Yt([v()],Rt.prototype,"margin",void 0);Rt=Yt([D("wui-grid")],Rt);const $2=Q`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var I0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ma=class extends X{constructor(){super(...arguments),this.text=""}render(){return O`${this.template()}`}template(){return this.text?O`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ma.styles=[ae,$2];I0([v()],Ma.prototype,"text",void 0);Ma=I0([D("wui-separator")],Ma);const S2=3,R2=["receive","deposit","borrow","claim"],T2=["withdraw","repay","burn"],$r={getMonthName(i){const e=new Date;return e.setMonth(i),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(i,e){const t=zl.getYear(),n=this.getMonthName(e);return i===t?n:`${n} ${i}`},getTransactionImages(i){const[e,t]=i,n=!!e&&(i==null?void 0:i.every(a=>!!a.nft_info)),o=(i==null?void 0:i.length)>1;return(i==null?void 0:i.length)===2&&!n?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?i.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(e)]},getTransactionImage(i){return{type:$r.getTransactionTransferTokenType(i),url:$r.getTransactionImageURL(i)}},getTransactionImageURL(i){var o,r,a,s,u;let e;const t=!!(i!=null&&i.nft_info),n=!!(i!=null&&i.fungible_info);return i&&t?e=(a=(r=(o=i==null?void 0:i.nft_info)==null?void 0:o.content)==null?void 0:r.preview)==null?void 0:a.url:i&&n&&(e=(u=(s=i==null?void 0:i.fungible_info)==null?void 0:s.icon)==null?void 0:u.url),e},getTransactionTransferTokenType(i){if(i!=null&&i.fungible_info)return"FUNGIBLE";if(i!=null&&i.nft_info)return"NFT"},getTransactionDescriptions(i){var k,N,P;const e=(k=i==null?void 0:i.metadata)==null?void 0:k.operationType,t=i==null?void 0:i.transfers,n=((N=i==null?void 0:i.transfers)==null?void 0:N.length)>0,o=((P=i==null?void 0:i.transfers)==null?void 0:P.length)>1,r=n&&(t==null?void 0:t.every(j=>!!(j!=null&&j.fungible_info))),[a,s]=t;let u=this.getTransferDescription(a),h=this.getTransferDescription(s);if(!n)return(e==="send"||e==="receive")&&r?(u=Ce.getTruncateString({string:i==null?void 0:i.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=Ce.getTruncateString({string:i==null?void 0:i.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[u,h]):[i.metadata.status];if(o)return t.map(j=>this.getTransferDescription(j));let b="";return R2.includes(e)?b="+":T2.includes(e)&&(b="-"),u=b.concat(u),[u]},getTransferDescription(i){var t;let e="";return i&&(i!=null&&i.nft_info?e=((t=i==null?void 0:i.nft_info)==null?void 0:t.name)||"-":i!=null&&i.fungible_info&&(e=this.getFungibleTransferDescription(i)||"-")),e},getFungibleTransferDescription(i){var n;return i?[this.getQuantityFixedValue(i==null?void 0:i.quantity.numeric),(n=i==null?void 0:i.fungible_info)==null?void 0:n.symbol].join(" ").trim():null},getQuantityFixedValue(i){return i?parseFloat(i).toFixed(S2):null}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=globalThis,mc=ya.ShadowRoot&&(ya.ShadyCSS===void 0||ya.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vc=Symbol(),iu=new WeakMap;let O0=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==vc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(mc&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=iu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&iu.set(t,e))}return e}toString(){return this.cssText}};const k2=i=>new O0(typeof i=="string"?i:i+"",void 0,vc),ye=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,o,r)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new O0(t,i,vc)},I2=(i,e)=>{if(mc)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=ya.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},ru=mc?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return k2(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:O2,defineProperty:N2,getOwnPropertyDescriptor:P2,getOwnPropertyNames:M2,getOwnPropertySymbols:L2,getPrototypeOf:D2}=Object,ir=globalThis,nu=ir.trustedTypes,B2=nu?nu.emptyScript:"",nl=ir.reactiveElementPolyfillSupport,so=(i,e)=>i,La={toAttribute(i,e){switch(e){case Boolean:i=i?B2:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},bc=(i,e)=>!O2(i,e),ou={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:bc};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ir.litPropertyMetadata??(ir.litPropertyMetadata=new WeakMap);class un extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ou){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&N2(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=P2(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);r.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ou}static _$Ei(){if(this.hasOwnProperty(so("elementProperties")))return;const e=D2(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(so("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(so("properties"))){const t=this.properties,n=[...M2(t),...L2(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(ru(o))}else e!==void 0&&t.push(ru(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return I2(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var r;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const a=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:La).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var r;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:La;this._$Em=o,this[o]=s.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??bc)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,a]of o)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}un.elementStyles=[],un.shadowRootOptions={mode:"open"},un[so("elementProperties")]=new Map,un[so("finalized")]=new Map,nl==null||nl({ReactiveElement:un}),(ir.reactiveElementVersions??(ir.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo=globalThis,Da=lo.trustedTypes,au=Da?Da.createPolicy("lit-html",{createHTML:i=>i}):void 0,N0="$lit$",Ki=`lit$${Math.random().toFixed(9).slice(2)}$`,P0="?"+Ki,U2=`<${P0}>`,Br=document,So=()=>Br.createComment(""),Ro=i=>i===null||typeof i!="object"&&typeof i!="function",M0=Array.isArray,j2=i=>M0(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ol=`[ 	
\f\r]`,Xn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,su=/-->/g,lu=/>/g,_r=RegExp(`>|${ol}(?:([^\\s"'>=/]+)(${ol}*=${ol}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cu=/'/g,uu=/"/g,L0=/^(?:script|style|textarea|title)$/i,W2=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=W2(1),Ln=Symbol.for("lit-noChange"),nt=Symbol.for("lit-nothing"),du=new WeakMap,Sr=Br.createTreeWalker(Br,129);function D0(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return au!==void 0?au.createHTML(e):e}const F2=(i,e)=>{const t=i.length-1,n=[];let o,r=e===2?"<svg>":"",a=Xn;for(let s=0;s<t;s++){const u=i[s];let h,b,k=-1,N=0;for(;N<u.length&&(a.lastIndex=N,b=a.exec(u),b!==null);)N=a.lastIndex,a===Xn?b[1]==="!--"?a=su:b[1]!==void 0?a=lu:b[2]!==void 0?(L0.test(b[2])&&(o=RegExp("</"+b[2],"g")),a=_r):b[3]!==void 0&&(a=_r):a===_r?b[0]===">"?(a=o??Xn,k=-1):b[1]===void 0?k=-2:(k=a.lastIndex-b[2].length,h=b[1],a=b[3]===void 0?_r:b[3]==='"'?uu:cu):a===uu||a===cu?a=_r:a===su||a===lu?a=Xn:(a=_r,o=void 0);const P=a===_r&&i[s+1].startsWith("/>")?" ":"";r+=a===Xn?u+U2:k>=0?(n.push(h),u.slice(0,k)+N0+u.slice(k)+Ki+P):u+Ki+(k===-2?s:P)}return[D0(i,r+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class To{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,a=0;const s=e.length-1,u=this.parts,[h,b]=F2(e,t);if(this.el=To.createElement(h,n),Sr.currentNode=this.el.content,t===2){const k=this.el.content.firstChild;k.replaceWith(...k.childNodes)}for(;(o=Sr.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const k of o.getAttributeNames())if(k.endsWith(N0)){const N=b[a++],P=o.getAttribute(k).split(Ki),j=/([.?@])?(.*)/.exec(N);u.push({type:1,index:r,name:j[2],strings:P,ctor:j[1]==="."?H2:j[1]==="?"?V2:j[1]==="@"?Z2:As}),o.removeAttribute(k)}else k.startsWith(Ki)&&(u.push({type:6,index:r}),o.removeAttribute(k));if(L0.test(o.tagName)){const k=o.textContent.split(Ki),N=k.length-1;if(N>0){o.textContent=Da?Da.emptyScript:"";for(let P=0;P<N;P++)o.append(k[P],So()),Sr.nextNode(),u.push({type:2,index:++r});o.append(k[N],So())}}}else if(o.nodeType===8)if(o.data===P0)u.push({type:2,index:r});else{let k=-1;for(;(k=o.data.indexOf(Ki,k+1))!==-1;)u.push({type:7,index:r}),k+=Ki.length-1}r++}}static createElement(e,t){const n=Br.createElement("template");return n.innerHTML=e,n}}function Dn(i,e,t=i,n){var a,s;if(e===Ln)return e;let o=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl;const r=Ro(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=Dn(i,o._$AS(i,e.values),o,n)),e}class z2{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??Br).importNode(t,!0);Sr.currentNode=o;let r=Sr.nextNode(),a=0,s=0,u=n[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new ra(r,r.nextSibling,this,e):u.type===1?h=new u.ctor(r,u.name,u.strings,this,e):u.type===6&&(h=new G2(r,this,e)),this._$AV.push(h),u=n[++s]}a!==(u==null?void 0:u.index)&&(r=Sr.nextNode(),a++)}return Sr.currentNode=Br,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ra{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=nt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Dn(this,e,t),Ro(e)?e===nt||e==null||e===""?(this._$AH!==nt&&this._$AR(),this._$AH=nt):e!==this._$AH&&e!==Ln&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):j2(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==nt&&Ro(this._$AH)?this._$AA.nextSibling.data=e:this.T(Br.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=To.createElement(D0(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const a=new z2(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=du.get(e.strings);return t===void 0&&du.set(e.strings,t=new To(e)),t}k(e){M0(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new ra(this.S(So()),this.S(So()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class As{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=nt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=nt}_$AI(e,t=this,n,o){const r=this.strings;let a=!1;if(r===void 0)e=Dn(this,e,t,0),a=!Ro(e)||e!==this._$AH&&e!==Ln,a&&(this._$AH=e);else{const s=e;let u,h;for(e=r[0],u=0;u<r.length-1;u++)h=Dn(this,s[n+u],t,u),h===Ln&&(h=this._$AH[u]),a||(a=!Ro(h)||h!==this._$AH[u]),h===nt?e=nt:e!==nt&&(e+=(h??"")+r[u+1]),this._$AH[u]=h}a&&!o&&this.j(e)}j(e){e===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H2 extends As{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===nt?void 0:e}}class V2 extends As{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==nt)}}class Z2 extends As{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=Dn(this,e,t,0)??nt)===Ln)return;const n=this._$AH,o=e===nt&&n!==nt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==nt&&(n===nt||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class G2{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Dn(this,e)}}const al=lo.litHtmlPolyfillSupport;al==null||al(To,ra),(lo.litHtmlVersions??(lo.litHtmlVersions=[])).push("3.1.3");const Y2=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new ra(e.insertBefore(So(),r),r,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Y2(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ln}};var Du;se._$litElement$=!0,se.finalized=!0,(Du=globalThis.litElementHydrateSupport)==null||Du.call(globalThis,{LitElement:se});const sl=globalThis.litElementPolyfillSupport;sl==null||sl({LitElement:se});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q2={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:bc},K2=(i=q2,e,t)=>{const{kind:n,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(t.name,i),n==="accessor"){const{name:a}=t;return{set(s){const u=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,u,i)},init(s){return s!==void 0&&this.P(a,void 0,i),s}}}if(n==="setter"){const{name:a}=t;return function(s){const u=this[a];e.call(this,s),this.requestUpdate(a,u,i)}}throw Error("Unsupported decorator location: "+n)};function de(i){return(e,t)=>typeof t=="object"?K2(i,e,t):((n,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,r):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(i){return de({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=i=>i??nt;var qt=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Nt=class extends se{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=oe.state.address,this.balanceVal=oe.state.balance,this.balanceSymbol=oe.state.balanceSymbol,this.profileName=oe.state.profileName,this.profileImage=oe.state.profileImage,this.network=le.state.caipNetwork,this.isUnsupportedChain=le.state.isUnsupportedChain,this.unsubscribe.push(oe.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),le.subscribeKey("caipNetwork",e=>this.network=e),le.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Ue.getNetworkImage(this.network),t=this.balance==="show";return _`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${fe(this.address)}
        profileName=${fe(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${fe(e)}
        avatarSrc=${fe(this.profileImage)}
        balance=${t?ie.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Ie.open({view:"UnsupportedChain"}):Ie.open()}};qt([de({type:Boolean})],Nt.prototype,"disabled",void 0);qt([de()],Nt.prototype,"balance",void 0);qt([de()],Nt.prototype,"charsStart",void 0);qt([de()],Nt.prototype,"charsEnd",void 0);qt([B()],Nt.prototype,"address",void 0);qt([B()],Nt.prototype,"balanceVal",void 0);qt([B()],Nt.prototype,"balanceSymbol",void 0);qt([B()],Nt.prototype,"profileName",void 0);qt([B()],Nt.prototype,"profileImage",void 0);qt([B()],Nt.prototype,"network",void 0);qt([B()],Nt.prototype,"isUnsupportedChain",void 0);Nt=qt([D("w3m-account-button")],Nt);const J2=ye`
  :host {
    display: block;
    width: max-content;
  }
`;var Hi=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ni=class extends se{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=oe.state.isConnected,this.unsubscribe.push(oe.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?_`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${fe(this.balance)}
            .charsStart=${fe(this.charsStart)}
            .charsEnd=${fe(this.charsEnd)}
          >
          </w3m-account-button>
        `:_`
          <w3m-connect-button
            size=${fe(this.size)}
            label=${fe(this.label)}
            loadingLabel=${fe(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ni.styles=J2;Hi([de({type:Boolean})],ni.prototype,"disabled",void 0);Hi([de()],ni.prototype,"balance",void 0);Hi([de()],ni.prototype,"size",void 0);Hi([de()],ni.prototype,"label",void 0);Hi([de()],ni.prototype,"loadingLabel",void 0);Hi([de()],ni.prototype,"charsStart",void 0);Hi([de()],ni.prototype,"charsEnd",void 0);Hi([B()],ni.prototype,"isAccount",void 0);ni=Hi([D("w3m-button")],ni);var qn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ur=class extends se{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ie.state.open,this.loading=Ie.state.loading,this.unsubscribe.push(Ie.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return _`
      <wui-connect-button
        size=${fe(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ie.close():this.loading||Ie.open()}};qn([de()],Ur.prototype,"size",void 0);qn([de()],Ur.prototype,"label",void 0);qn([de()],Ur.prototype,"loadingLabel",void 0);qn([B()],Ur.prototype,"open",void 0);qn([B()],Ur.prototype,"loading",void 0);Ur=qn([D("w3m-connect-button")],Ur);const Q2=ye`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var $s=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const hu="scroll-lock";let jr=class extends se{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ie.state.open,this.caipAddress=oe.state.caipAddress,this.isSiweEnabled=we.state.isSiweEnabled,this.initializeTheming(),me.prefetch(),this.unsubscribe.push(Ie.subscribeKey("open",e=>e?this.onOpen():this.onClose()),oe.subscribe(e=>this.onNewAccountState(e))),he.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?_`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await hn(()=>import("./index--sifamuO.js"),[]);e.state.status!=="success"&&await Ne.disconnect()}Ie.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=ot.state,n=Ce.getColorTheme(t);m1(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Pe.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=hu,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${hu}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")this.handleClose();else if(n.key==="Tab"){const{tagName:o}=n.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:n}=e;if(this.isSiweEnabled){const{SIWEController:o}=await hn(()=>import("./index--sifamuO.js"),[]);t&&!this.caipAddress&&(this.caipAddress=n),t&&n&&this.caipAddress!==n&&(await o.signOut(),this.onSiweNavigation(),this.caipAddress=n);try{const r=await o.getSession();r&&!t?await o.signOut():t&&!r&&this.onSiweNavigation()}catch{t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?W.push("ConnectingSiwe"):Ie.open({view:"ConnectingSiwe"})}};jr.styles=Q2;$s([B()],jr.prototype,"open",void 0);$s([B()],jr.prototype,"caipAddress",void 0);$s([B()],jr.prototype,"isSiweEnabled",void 0);jr=$s([D("w3m-modal")],jr);const X2=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return jr}},Symbol.toStringTag,{value:"Module"})),ew=ye`
  :host {
    display: block;
    width: max-content;
  }
`;var Kn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let sr=class extends se{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=le.state.caipNetwork,this.connected=oe.state.isConnected,this.loading=Ie.state.loading,this.isUnsupportedChain=le.state.isUnsupportedChain,this.unsubscribe.push(le.subscribeKey("caipNetwork",e=>this.network=e),oe.subscribeKey("isConnected",e=>this.connected=e),Ie.subscribeKey("loading",e=>this.loading=e),le.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return _`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${fe(Ue.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(he.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ie.open({view:"Networks"}))}};sr.styles=ew;Kn([de({type:Boolean})],sr.prototype,"disabled",void 0);Kn([B()],sr.prototype,"network",void 0);Kn([B()],sr.prototype,"connected",void 0);Kn([B()],sr.prototype,"loading",void 0);Kn([B()],sr.prototype,"isUnsupportedChain",void 0);sr=Kn([D("w3m-network-button")],sr);const tw=ye`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var B0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ba=class extends se{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=W.state.view,this.unsubscribe.push(W.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return _`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return _`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return _`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return _`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return _`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return _`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return _`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return _`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return _`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return _`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return _`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return _`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return _`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return _`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return _`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return _`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return _`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return _`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return _`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return _`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return _`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return _`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return _`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return _`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return _`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return _`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return _`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return _`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return _`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return _`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return _`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return _`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WalletSend":return _`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return _`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return _`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;default:return _`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:t}=W.state;let n=-10,o=10;t.length<this.prevHistoryLength&&(n=10,o=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Ba.styles=tw;B0([B()],Ba.prototype,"view",void 0);Ba=B0([D("w3m-router")],Ba);const iw=ye`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var gr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const rw={USD:"$",EUR:"€",GBP:"£"},nw=[100,250,500,1e3];let vi=class extends se{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=oe.state.isConnected,this.loading=Ie.state.loading,this.paymentCurrency=De.state.paymentCurrency,this.paymentAmount=De.state.paymentAmount,this.purchaseAmount=De.state.purchaseAmount,this.quoteLoading=De.state.quotesLoading,this.unsubscribe.push(oe.subscribeKey("isConnected",e=>{this.connected=e}),Ie.subscribeKey("loading",e=>{this.loading=e}),De.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${nw.map(e=>{var t;return _`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${rw[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?_`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:_`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Ie.open({view:"OnRampProviders"})}openModal(){Ie.open({view:"Connect"})}async onPaymentAmountChange(e){De.setPaymentAmount(Number(e.detail)),await De.getQuote()}async selectPresetAmount(e){De.setPaymentAmount(e),await De.getQuote()}};vi.styles=iw;gr([de({type:Boolean})],vi.prototype,"disabled",void 0);gr([B()],vi.prototype,"connected",void 0);gr([B()],vi.prototype,"loading",void 0);gr([B()],vi.prototype,"paymentCurrency",void 0);gr([B()],vi.prototype,"paymentAmount",void 0);gr([B()],vi.prototype,"purchaseAmount",void 0);gr([B()],vi.prototype,"quoteLoading",void 0);vi=gr([D("w3m-onramp-widget")],vi);const ow=ye`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var U0={},Ss={};Ss.byteLength=lw;Ss.toByteArray=uw;Ss.fromByteArray=pw;var pi=[],Ft=[],aw=typeof Uint8Array<"u"?Uint8Array:Array,ll="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ln=0,sw=ll.length;ln<sw;++ln)pi[ln]=ll[ln],Ft[ll.charCodeAt(ln)]=ln;Ft[45]=62;Ft[95]=63;function j0(i){var e=i.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=i.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}function lw(i){var e=j0(i),t=e[0],n=e[1];return(t+n)*3/4-n}function cw(i,e,t){return(e+t)*3/4-t}function uw(i){var e,t=j0(i),n=t[0],o=t[1],r=new aw(cw(i,n,o)),a=0,s=o>0?n-4:n,u;for(u=0;u<s;u+=4)e=Ft[i.charCodeAt(u)]<<18|Ft[i.charCodeAt(u+1)]<<12|Ft[i.charCodeAt(u+2)]<<6|Ft[i.charCodeAt(u+3)],r[a++]=e>>16&255,r[a++]=e>>8&255,r[a++]=e&255;return o===2&&(e=Ft[i.charCodeAt(u)]<<2|Ft[i.charCodeAt(u+1)]>>4,r[a++]=e&255),o===1&&(e=Ft[i.charCodeAt(u)]<<10|Ft[i.charCodeAt(u+1)]<<4|Ft[i.charCodeAt(u+2)]>>2,r[a++]=e>>8&255,r[a++]=e&255),r}function dw(i){return pi[i>>18&63]+pi[i>>12&63]+pi[i>>6&63]+pi[i&63]}function hw(i,e,t){for(var n,o=[],r=e;r<t;r+=3)n=(i[r]<<16&16711680)+(i[r+1]<<8&65280)+(i[r+2]&255),o.push(dw(n));return o.join("")}function pw(i){for(var e,t=i.length,n=t%3,o=[],r=16383,a=0,s=t-n;a<s;a+=r)o.push(hw(i,a,a+r>s?s:a+r));return n===1?(e=i[t-1],o.push(pi[e>>2]+pi[e<<4&63]+"==")):n===2&&(e=(i[t-2]<<8)+i[t-1],o.push(pi[e>>10]+pi[e>>4&63]+pi[e<<2&63]+"=")),o.join("")}var yc={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */yc.read=function(i,e,t,n,o){var r,a,s=o*8-n-1,u=(1<<s)-1,h=u>>1,b=-7,k=t?o-1:0,N=t?-1:1,P=i[e+k];for(k+=N,r=P&(1<<-b)-1,P>>=-b,b+=s;b>0;r=r*256+i[e+k],k+=N,b-=8);for(a=r&(1<<-b)-1,r>>=-b,b+=n;b>0;a=a*256+i[e+k],k+=N,b-=8);if(r===0)r=1-h;else{if(r===u)return a?NaN:(P?-1:1)*(1/0);a=a+Math.pow(2,n),r=r-h}return(P?-1:1)*a*Math.pow(2,r-n)};yc.write=function(i,e,t,n,o,r){var a,s,u,h=r*8-o-1,b=(1<<h)-1,k=b>>1,N=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,P=n?0:r-1,j=n?1:-1,V=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=b):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+k>=1?e+=N/u:e+=N*Math.pow(2,1-k),e*u>=2&&(a++,u/=2),a+k>=b?(s=0,a=b):a+k>=1?(s=(e*u-1)*Math.pow(2,o),a=a+k):(s=e*Math.pow(2,k-1)*Math.pow(2,o),a=0));o>=8;i[t+P]=s&255,P+=j,s/=256,o-=8);for(a=a<<o|s,h+=o;h>0;i[t+P]=a&255,P+=j,a/=256,h-=8);i[t+P-j]|=V*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const e=Ss,t=yc,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=s,i.SlowBuffer=I,i.INSPECT_MAX_BYTES=50;const o=2147483647;i.kMaxLength=o,s.TYPED_ARRAY_SUPPORT=r(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function r(){try{const d=new Uint8Array(1),l={foo:function(){return 42}};return Object.setPrototypeOf(l,Uint8Array.prototype),Object.setPrototypeOf(d,l),d.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function a(d){if(d>o)throw new RangeError('The value "'+d+'" is invalid for option "size"');const l=new Uint8Array(d);return Object.setPrototypeOf(l,s.prototype),l}function s(d,l,c){if(typeof d=="number"){if(typeof l=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k(d)}return u(d,l,c)}s.poolSize=8192;function u(d,l,c){if(typeof d=="string")return N(d,l);if(ArrayBuffer.isView(d))return j(d);if(d==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d);if(di(d,ArrayBuffer)||d&&di(d.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(di(d,SharedArrayBuffer)||d&&di(d.buffer,SharedArrayBuffer)))return V(d,l,c);if(typeof d=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const m=d.valueOf&&d.valueOf();if(m!=null&&m!==d)return s.from(m,l,c);const R=K(d);if(R)return R;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof d[Symbol.toPrimitive]=="function")return s.from(d[Symbol.toPrimitive]("string"),l,c);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d)}s.from=function(d,l,c){return u(d,l,c)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function h(d){if(typeof d!="number")throw new TypeError('"size" argument must be of type number');if(d<0)throw new RangeError('The value "'+d+'" is invalid for option "size"')}function b(d,l,c){return h(d),d<=0?a(d):l!==void 0?typeof c=="string"?a(d).fill(l,c):a(d).fill(l):a(d)}s.alloc=function(d,l,c){return b(d,l,c)};function k(d){return h(d),a(d<0?0:Z(d)|0)}s.allocUnsafe=function(d){return k(d)},s.allocUnsafeSlow=function(d){return k(d)};function N(d,l){if((typeof l!="string"||l==="")&&(l="utf8"),!s.isEncoding(l))throw new TypeError("Unknown encoding: "+l);const c=J(d,l)|0;let m=a(c);const R=m.write(d,l);return R!==c&&(m=m.slice(0,R)),m}function P(d){const l=d.length<0?0:Z(d.length)|0,c=a(l);for(let m=0;m<l;m+=1)c[m]=d[m]&255;return c}function j(d){if(di(d,Uint8Array)){const l=new Uint8Array(d);return V(l.buffer,l.byteOffset,l.byteLength)}return P(d)}function V(d,l,c){if(l<0||d.byteLength<l)throw new RangeError('"offset" is outside of buffer bounds');if(d.byteLength<l+(c||0))throw new RangeError('"length" is outside of buffer bounds');let m;return l===void 0&&c===void 0?m=new Uint8Array(d):c===void 0?m=new Uint8Array(d,l):m=new Uint8Array(d,l,c),Object.setPrototypeOf(m,s.prototype),m}function K(d){if(s.isBuffer(d)){const l=Z(d.length)|0,c=a(l);return c.length===0||d.copy(c,0,0,l),c}if(d.length!==void 0)return typeof d.length!="number"||Ds(d.length)?a(0):P(d);if(d.type==="Buffer"&&Array.isArray(d.data))return P(d.data)}function Z(d){if(d>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return d|0}function I(d){return+d!=d&&(d=0),s.alloc(+d)}s.isBuffer=function(l){return l!=null&&l._isBuffer===!0&&l!==s.prototype},s.compare=function(l,c){if(di(l,Uint8Array)&&(l=s.from(l,l.offset,l.byteLength)),di(c,Uint8Array)&&(c=s.from(c,c.offset,c.byteLength)),!s.isBuffer(l)||!s.isBuffer(c))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(l===c)return 0;let m=l.length,R=c.length;for(let L=0,U=Math.min(m,R);L<U;++L)if(l[L]!==c[L]){m=l[L],R=c[L];break}return m<R?-1:R<m?1:0},s.isEncoding=function(l){switch(String(l).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(l,c){if(!Array.isArray(l))throw new TypeError('"list" argument must be an Array of Buffers');if(l.length===0)return s.alloc(0);let m;if(c===void 0)for(c=0,m=0;m<l.length;++m)c+=l[m].length;const R=s.allocUnsafe(c);let L=0;for(m=0;m<l.length;++m){let U=l[m];if(di(U,Uint8Array))L+U.length>R.length?(s.isBuffer(U)||(U=s.from(U)),U.copy(R,L)):Uint8Array.prototype.set.call(R,U,L);else if(s.isBuffer(U))U.copy(R,L);else throw new TypeError('"list" argument must be an Array of Buffers');L+=U.length}return R};function J(d,l){if(s.isBuffer(d))return d.length;if(ArrayBuffer.isView(d)||di(d,ArrayBuffer))return d.byteLength;if(typeof d!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof d);const c=d.length,m=arguments.length>2&&arguments[2]===!0;if(!m&&c===0)return 0;let R=!1;for(;;)switch(l){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return Ls(d).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c*2;case"hex":return c>>>1;case"base64":return kc(d).length;default:if(R)return m?-1:Ls(d).length;l=(""+l).toLowerCase(),R=!0}}s.byteLength=J;function q(d,l,c){let m=!1;if((l===void 0||l<0)&&(l=0),l>this.length||((c===void 0||c>this.length)&&(c=this.length),c<=0)||(c>>>=0,l>>>=0,c<=l))return"";for(d||(d="utf8");;)switch(d){case"hex":return M(this,l,c);case"utf8":case"utf-8":return S(this,l,c);case"ascii":return $(this,l,c);case"latin1":case"binary":return E(this,l,c);case"base64":return T(this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return F(this,l,c);default:if(m)throw new TypeError("Unknown encoding: "+d);d=(d+"").toLowerCase(),m=!0}}s.prototype._isBuffer=!0;function re(d,l,c){const m=d[l];d[l]=d[c],d[c]=m}s.prototype.swap16=function(){const l=this.length;if(l%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let c=0;c<l;c+=2)re(this,c,c+1);return this},s.prototype.swap32=function(){const l=this.length;if(l%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let c=0;c<l;c+=4)re(this,c,c+3),re(this,c+1,c+2);return this},s.prototype.swap64=function(){const l=this.length;if(l%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let c=0;c<l;c+=8)re(this,c,c+7),re(this,c+1,c+6),re(this,c+2,c+5),re(this,c+3,c+4);return this},s.prototype.toString=function(){const l=this.length;return l===0?"":arguments.length===0?S(this,0,l):q.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(l){if(!s.isBuffer(l))throw new TypeError("Argument must be a Buffer");return this===l?!0:s.compare(this,l)===0},s.prototype.inspect=function(){let l="";const c=i.INSPECT_MAX_BYTES;return l=this.toString("hex",0,c).replace(/(.{2})/g,"$1 ").trim(),this.length>c&&(l+=" ... "),"<Buffer "+l+">"},n&&(s.prototype[n]=s.prototype.inspect),s.prototype.compare=function(l,c,m,R,L){if(di(l,Uint8Array)&&(l=s.from(l,l.offset,l.byteLength)),!s.isBuffer(l))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof l);if(c===void 0&&(c=0),m===void 0&&(m=l?l.length:0),R===void 0&&(R=0),L===void 0&&(L=this.length),c<0||m>l.length||R<0||L>this.length)throw new RangeError("out of range index");if(R>=L&&c>=m)return 0;if(R>=L)return-1;if(c>=m)return 1;if(c>>>=0,m>>>=0,R>>>=0,L>>>=0,this===l)return 0;let U=L-R,Oe=m-c;const Qe=Math.min(U,Oe),Ze=this.slice(R,L),Xe=l.slice(c,m);for(let ze=0;ze<Qe;++ze)if(Ze[ze]!==Xe[ze]){U=Ze[ze],Oe=Xe[ze];break}return U<Oe?-1:Oe<U?1:0};function ce(d,l,c,m,R){if(d.length===0)return-1;if(typeof c=="string"?(m=c,c=0):c>2147483647?c=2147483647:c<-2147483648&&(c=-2147483648),c=+c,Ds(c)&&(c=R?0:d.length-1),c<0&&(c=d.length+c),c>=d.length){if(R)return-1;c=d.length-1}else if(c<0)if(R)c=0;else return-1;if(typeof l=="string"&&(l=s.from(l,m)),s.isBuffer(l))return l.length===0?-1:Ee(d,l,c,m,R);if(typeof l=="number")return l=l&255,typeof Uint8Array.prototype.indexOf=="function"?R?Uint8Array.prototype.indexOf.call(d,l,c):Uint8Array.prototype.lastIndexOf.call(d,l,c):Ee(d,[l],c,m,R);throw new TypeError("val must be string, number or Buffer")}function Ee(d,l,c,m,R){let L=1,U=d.length,Oe=l.length;if(m!==void 0&&(m=String(m).toLowerCase(),m==="ucs2"||m==="ucs-2"||m==="utf16le"||m==="utf-16le")){if(d.length<2||l.length<2)return-1;L=2,U/=2,Oe/=2,c/=2}function Qe(Xe,ze){return L===1?Xe[ze]:Xe.readUInt16BE(ze*L)}let Ze;if(R){let Xe=-1;for(Ze=c;Ze<U;Ze++)if(Qe(d,Ze)===Qe(l,Xe===-1?0:Ze-Xe)){if(Xe===-1&&(Xe=Ze),Ze-Xe+1===Oe)return Xe*L}else Xe!==-1&&(Ze-=Ze-Xe),Xe=-1}else for(c+Oe>U&&(c=U-Oe),Ze=c;Ze>=0;Ze--){let Xe=!0;for(let ze=0;ze<Oe;ze++)if(Qe(d,Ze+ze)!==Qe(l,ze)){Xe=!1;break}if(Xe)return Ze}return-1}s.prototype.includes=function(l,c,m){return this.indexOf(l,c,m)!==-1},s.prototype.indexOf=function(l,c,m){return ce(this,l,c,m,!0)},s.prototype.lastIndexOf=function(l,c,m){return ce(this,l,c,m,!1)};function p(d,l,c,m){c=Number(c)||0;const R=d.length-c;m?(m=Number(m),m>R&&(m=R)):m=R;const L=l.length;m>L/2&&(m=L/2);let U;for(U=0;U<m;++U){const Oe=parseInt(l.substr(U*2,2),16);if(Ds(Oe))return U;d[c+U]=Oe}return U}function f(d,l,c,m){return ua(Ls(l,d.length-c),d,c,m)}function w(d,l,c,m){return ua(dd(l),d,c,m)}function C(d,l,c,m){return ua(kc(l),d,c,m)}function A(d,l,c,m){return ua(hd(l,d.length-c),d,c,m)}s.prototype.write=function(l,c,m,R){if(c===void 0)R="utf8",m=this.length,c=0;else if(m===void 0&&typeof c=="string")R=c,m=this.length,c=0;else if(isFinite(c))c=c>>>0,isFinite(m)?(m=m>>>0,R===void 0&&(R="utf8")):(R=m,m=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const L=this.length-c;if((m===void 0||m>L)&&(m=L),l.length>0&&(m<0||c<0)||c>this.length)throw new RangeError("Attempt to write outside buffer bounds");R||(R="utf8");let U=!1;for(;;)switch(R){case"hex":return p(this,l,c,m);case"utf8":case"utf-8":return f(this,l,c,m);case"ascii":case"latin1":case"binary":return w(this,l,c,m);case"base64":return C(this,l,c,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,l,c,m);default:if(U)throw new TypeError("Unknown encoding: "+R);R=(""+R).toLowerCase(),U=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function T(d,l,c){return l===0&&c===d.length?e.fromByteArray(d):e.fromByteArray(d.slice(l,c))}function S(d,l,c){c=Math.min(d.length,c);const m=[];let R=l;for(;R<c;){const L=d[R];let U=null,Oe=L>239?4:L>223?3:L>191?2:1;if(R+Oe<=c){let Qe,Ze,Xe,ze;switch(Oe){case 1:L<128&&(U=L);break;case 2:Qe=d[R+1],(Qe&192)===128&&(ze=(L&31)<<6|Qe&63,ze>127&&(U=ze));break;case 3:Qe=d[R+1],Ze=d[R+2],(Qe&192)===128&&(Ze&192)===128&&(ze=(L&15)<<12|(Qe&63)<<6|Ze&63,ze>2047&&(ze<55296||ze>57343)&&(U=ze));break;case 4:Qe=d[R+1],Ze=d[R+2],Xe=d[R+3],(Qe&192)===128&&(Ze&192)===128&&(Xe&192)===128&&(ze=(L&15)<<18|(Qe&63)<<12|(Ze&63)<<6|Xe&63,ze>65535&&ze<1114112&&(U=ze))}}U===null?(U=65533,Oe=1):U>65535&&(U-=65536,m.push(U>>>10&1023|55296),U=56320|U&1023),m.push(U),R+=Oe}return x(m)}const y=4096;function x(d){const l=d.length;if(l<=y)return String.fromCharCode.apply(String,d);let c="",m=0;for(;m<l;)c+=String.fromCharCode.apply(String,d.slice(m,m+=y));return c}function $(d,l,c){let m="";c=Math.min(d.length,c);for(let R=l;R<c;++R)m+=String.fromCharCode(d[R]&127);return m}function E(d,l,c){let m="";c=Math.min(d.length,c);for(let R=l;R<c;++R)m+=String.fromCharCode(d[R]);return m}function M(d,l,c){const m=d.length;(!l||l<0)&&(l=0),(!c||c<0||c>m)&&(c=m);let R="";for(let L=l;L<c;++L)R+=pd[d[L]];return R}function F(d,l,c){const m=d.slice(l,c);let R="";for(let L=0;L<m.length-1;L+=2)R+=String.fromCharCode(m[L]+m[L+1]*256);return R}s.prototype.slice=function(l,c){const m=this.length;l=~~l,c=c===void 0?m:~~c,l<0?(l+=m,l<0&&(l=0)):l>m&&(l=m),c<0?(c+=m,c<0&&(c=0)):c>m&&(c=m),c<l&&(c=l);const R=this.subarray(l,c);return Object.setPrototypeOf(R,s.prototype),R};function z(d,l,c){if(d%1!==0||d<0)throw new RangeError("offset is not uint");if(d+l>c)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(l,c,m){l=l>>>0,c=c>>>0,m||z(l,c,this.length);let R=this[l],L=1,U=0;for(;++U<c&&(L*=256);)R+=this[l+U]*L;return R},s.prototype.readUintBE=s.prototype.readUIntBE=function(l,c,m){l=l>>>0,c=c>>>0,m||z(l,c,this.length);let R=this[l+--c],L=1;for(;c>0&&(L*=256);)R+=this[l+--c]*L;return R},s.prototype.readUint8=s.prototype.readUInt8=function(l,c){return l=l>>>0,c||z(l,1,this.length),this[l]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(l,c){return l=l>>>0,c||z(l,2,this.length),this[l]|this[l+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(l,c){return l=l>>>0,c||z(l,2,this.length),this[l]<<8|this[l+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(l,c){return l=l>>>0,c||z(l,4,this.length),(this[l]|this[l+1]<<8|this[l+2]<<16)+this[l+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(l,c){return l=l>>>0,c||z(l,4,this.length),this[l]*16777216+(this[l+1]<<16|this[l+2]<<8|this[l+3])},s.prototype.readBigUInt64LE=Vi(function(l){l=l>>>0,He(l,"offset");const c=this[l],m=this[l+7];(c===void 0||m===void 0)&&it(l,this.length-8);const R=c+this[++l]*2**8+this[++l]*2**16+this[++l]*2**24,L=this[++l]+this[++l]*2**8+this[++l]*2**16+m*2**24;return BigInt(R)+(BigInt(L)<<BigInt(32))}),s.prototype.readBigUInt64BE=Vi(function(l){l=l>>>0,He(l,"offset");const c=this[l],m=this[l+7];(c===void 0||m===void 0)&&it(l,this.length-8);const R=c*2**24+this[++l]*2**16+this[++l]*2**8+this[++l],L=this[++l]*2**24+this[++l]*2**16+this[++l]*2**8+m;return(BigInt(R)<<BigInt(32))+BigInt(L)}),s.prototype.readIntLE=function(l,c,m){l=l>>>0,c=c>>>0,m||z(l,c,this.length);let R=this[l],L=1,U=0;for(;++U<c&&(L*=256);)R+=this[l+U]*L;return L*=128,R>=L&&(R-=Math.pow(2,8*c)),R},s.prototype.readIntBE=function(l,c,m){l=l>>>0,c=c>>>0,m||z(l,c,this.length);let R=c,L=1,U=this[l+--R];for(;R>0&&(L*=256);)U+=this[l+--R]*L;return L*=128,U>=L&&(U-=Math.pow(2,8*c)),U},s.prototype.readInt8=function(l,c){return l=l>>>0,c||z(l,1,this.length),this[l]&128?(255-this[l]+1)*-1:this[l]},s.prototype.readInt16LE=function(l,c){l=l>>>0,c||z(l,2,this.length);const m=this[l]|this[l+1]<<8;return m&32768?m|4294901760:m},s.prototype.readInt16BE=function(l,c){l=l>>>0,c||z(l,2,this.length);const m=this[l+1]|this[l]<<8;return m&32768?m|4294901760:m},s.prototype.readInt32LE=function(l,c){return l=l>>>0,c||z(l,4,this.length),this[l]|this[l+1]<<8|this[l+2]<<16|this[l+3]<<24},s.prototype.readInt32BE=function(l,c){return l=l>>>0,c||z(l,4,this.length),this[l]<<24|this[l+1]<<16|this[l+2]<<8|this[l+3]},s.prototype.readBigInt64LE=Vi(function(l){l=l>>>0,He(l,"offset");const c=this[l],m=this[l+7];(c===void 0||m===void 0)&&it(l,this.length-8);const R=this[l+4]+this[l+5]*2**8+this[l+6]*2**16+(m<<24);return(BigInt(R)<<BigInt(32))+BigInt(c+this[++l]*2**8+this[++l]*2**16+this[++l]*2**24)}),s.prototype.readBigInt64BE=Vi(function(l){l=l>>>0,He(l,"offset");const c=this[l],m=this[l+7];(c===void 0||m===void 0)&&it(l,this.length-8);const R=(c<<24)+this[++l]*2**16+this[++l]*2**8+this[++l];return(BigInt(R)<<BigInt(32))+BigInt(this[++l]*2**24+this[++l]*2**16+this[++l]*2**8+m)}),s.prototype.readFloatLE=function(l,c){return l=l>>>0,c||z(l,4,this.length),t.read(this,l,!0,23,4)},s.prototype.readFloatBE=function(l,c){return l=l>>>0,c||z(l,4,this.length),t.read(this,l,!1,23,4)},s.prototype.readDoubleLE=function(l,c){return l=l>>>0,c||z(l,8,this.length),t.read(this,l,!0,52,8)},s.prototype.readDoubleBE=function(l,c){return l=l>>>0,c||z(l,8,this.length),t.read(this,l,!1,52,8)};function ee(d,l,c,m,R,L){if(!s.isBuffer(d))throw new TypeError('"buffer" argument must be a Buffer instance');if(l>R||l<L)throw new RangeError('"value" argument is out of bounds');if(c+m>d.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(l,c,m,R){if(l=+l,c=c>>>0,m=m>>>0,!R){const Oe=Math.pow(2,8*m)-1;ee(this,l,c,m,Oe,0)}let L=1,U=0;for(this[c]=l&255;++U<m&&(L*=256);)this[c+U]=l/L&255;return c+m},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(l,c,m,R){if(l=+l,c=c>>>0,m=m>>>0,!R){const Oe=Math.pow(2,8*m)-1;ee(this,l,c,m,Oe,0)}let L=m-1,U=1;for(this[c+L]=l&255;--L>=0&&(U*=256);)this[c+L]=l/U&255;return c+m},s.prototype.writeUint8=s.prototype.writeUInt8=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,1,255,0),this[c]=l&255,c+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,2,65535,0),this[c]=l&255,this[c+1]=l>>>8,c+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,2,65535,0),this[c]=l>>>8,this[c+1]=l&255,c+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,4,4294967295,0),this[c+3]=l>>>24,this[c+2]=l>>>16,this[c+1]=l>>>8,this[c]=l&255,c+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,4,4294967295,0),this[c]=l>>>24,this[c+1]=l>>>16,this[c+2]=l>>>8,this[c+3]=l&255,c+4};function xe(d,l,c,m,R){At(l,m,R,d,c,7);let L=Number(l&BigInt(4294967295));d[c++]=L,L=L>>8,d[c++]=L,L=L>>8,d[c++]=L,L=L>>8,d[c++]=L;let U=Number(l>>BigInt(32)&BigInt(4294967295));return d[c++]=U,U=U>>8,d[c++]=U,U=U>>8,d[c++]=U,U=U>>8,d[c++]=U,c}function Te(d,l,c,m,R){At(l,m,R,d,c,7);let L=Number(l&BigInt(4294967295));d[c+7]=L,L=L>>8,d[c+6]=L,L=L>>8,d[c+5]=L,L=L>>8,d[c+4]=L;let U=Number(l>>BigInt(32)&BigInt(4294967295));return d[c+3]=U,U=U>>8,d[c+2]=U,U=U>>8,d[c+1]=U,U=U>>8,d[c]=U,c+8}s.prototype.writeBigUInt64LE=Vi(function(l,c=0){return xe(this,l,c,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=Vi(function(l,c=0){return Te(this,l,c,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(l,c,m,R){if(l=+l,c=c>>>0,!R){const Qe=Math.pow(2,8*m-1);ee(this,l,c,m,Qe-1,-Qe)}let L=0,U=1,Oe=0;for(this[c]=l&255;++L<m&&(U*=256);)l<0&&Oe===0&&this[c+L-1]!==0&&(Oe=1),this[c+L]=(l/U>>0)-Oe&255;return c+m},s.prototype.writeIntBE=function(l,c,m,R){if(l=+l,c=c>>>0,!R){const Qe=Math.pow(2,8*m-1);ee(this,l,c,m,Qe-1,-Qe)}let L=m-1,U=1,Oe=0;for(this[c+L]=l&255;--L>=0&&(U*=256);)l<0&&Oe===0&&this[c+L+1]!==0&&(Oe=1),this[c+L]=(l/U>>0)-Oe&255;return c+m},s.prototype.writeInt8=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,1,127,-128),l<0&&(l=255+l+1),this[c]=l&255,c+1},s.prototype.writeInt16LE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,2,32767,-32768),this[c]=l&255,this[c+1]=l>>>8,c+2},s.prototype.writeInt16BE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,2,32767,-32768),this[c]=l>>>8,this[c+1]=l&255,c+2},s.prototype.writeInt32LE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,4,2147483647,-2147483648),this[c]=l&255,this[c+1]=l>>>8,this[c+2]=l>>>16,this[c+3]=l>>>24,c+4},s.prototype.writeInt32BE=function(l,c,m){return l=+l,c=c>>>0,m||ee(this,l,c,4,2147483647,-2147483648),l<0&&(l=4294967295+l+1),this[c]=l>>>24,this[c+1]=l>>>16,this[c+2]=l>>>8,this[c+3]=l&255,c+4},s.prototype.writeBigInt64LE=Vi(function(l,c=0){return xe(this,l,c,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=Vi(function(l,c=0){return Te(this,l,c,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ge(d,l,c,m,R,L){if(c+m>d.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("Index out of range")}function ke(d,l,c,m,R){return l=+l,c=c>>>0,R||ge(d,l,c,4),t.write(d,l,c,m,23,4),c+4}s.prototype.writeFloatLE=function(l,c,m){return ke(this,l,c,!0,m)},s.prototype.writeFloatBE=function(l,c,m){return ke(this,l,c,!1,m)};function Fe(d,l,c,m,R){return l=+l,c=c>>>0,R||ge(d,l,c,8),t.write(d,l,c,m,52,8),c+8}s.prototype.writeDoubleLE=function(l,c,m){return Fe(this,l,c,!0,m)},s.prototype.writeDoubleBE=function(l,c,m){return Fe(this,l,c,!1,m)},s.prototype.copy=function(l,c,m,R){if(!s.isBuffer(l))throw new TypeError("argument should be a Buffer");if(m||(m=0),!R&&R!==0&&(R=this.length),c>=l.length&&(c=l.length),c||(c=0),R>0&&R<m&&(R=m),R===m||l.length===0||this.length===0)return 0;if(c<0)throw new RangeError("targetStart out of bounds");if(m<0||m>=this.length)throw new RangeError("Index out of range");if(R<0)throw new RangeError("sourceEnd out of bounds");R>this.length&&(R=this.length),l.length-c<R-m&&(R=l.length-c+m);const L=R-m;return this===l&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(c,m,R):Uint8Array.prototype.set.call(l,this.subarray(m,R),c),L},s.prototype.fill=function(l,c,m,R){if(typeof l=="string"){if(typeof c=="string"?(R=c,c=0,m=this.length):typeof m=="string"&&(R=m,m=this.length),R!==void 0&&typeof R!="string")throw new TypeError("encoding must be a string");if(typeof R=="string"&&!s.isEncoding(R))throw new TypeError("Unknown encoding: "+R);if(l.length===1){const U=l.charCodeAt(0);(R==="utf8"&&U<128||R==="latin1")&&(l=U)}}else typeof l=="number"?l=l&255:typeof l=="boolean"&&(l=Number(l));if(c<0||this.length<c||this.length<m)throw new RangeError("Out of range index");if(m<=c)return this;c=c>>>0,m=m===void 0?this.length:m>>>0,l||(l=0);let L;if(typeof l=="number")for(L=c;L<m;++L)this[L]=l;else{const U=s.isBuffer(l)?l:s.from(l,R),Oe=U.length;if(Oe===0)throw new TypeError('The value "'+l+'" is invalid for argument "value"');for(L=0;L<m-c;++L)this[L+c]=U[L%Oe]}return this};const ut={};function bt(d,l,c){ut[d]=class extends c{constructor(){super(),Object.defineProperty(this,"message",{value:l.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${d}]`,this.stack,delete this.name}get code(){return d}set code(R){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:R,writable:!0})}toString(){return`${this.name} [${d}]: ${this.message}`}}}bt("ERR_BUFFER_OUT_OF_BOUNDS",function(d){return d?`${d} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),bt("ERR_INVALID_ARG_TYPE",function(d,l){return`The "${d}" argument must be of type number. Received type ${typeof l}`},TypeError),bt("ERR_OUT_OF_RANGE",function(d,l,c){let m=`The value of "${d}" is out of range.`,R=c;return Number.isInteger(c)&&Math.abs(c)>2**32?R=et(String(c)):typeof c=="bigint"&&(R=String(c),(c>BigInt(2)**BigInt(32)||c<-(BigInt(2)**BigInt(32)))&&(R=et(R)),R+="n"),m+=` It must be ${l}. Received ${R}`,m},RangeError);function et(d){let l="",c=d.length;const m=d[0]==="-"?1:0;for(;c>=m+4;c-=3)l=`_${d.slice(c-3,c)}${l}`;return`${d.slice(0,c)}${l}`}function tt(d,l,c){He(l,"offset"),(d[l]===void 0||d[l+c]===void 0)&&it(l,d.length-(c+1))}function At(d,l,c,m,R,L){if(d>c||d<l){const U=typeof l=="bigint"?"n":"";let Oe;throw l===0||l===BigInt(0)?Oe=`>= 0${U} and < 2${U} ** ${(L+1)*8}${U}`:Oe=`>= -(2${U} ** ${(L+1)*8-1}${U}) and < 2 ** ${(L+1)*8-1}${U}`,new ut.ERR_OUT_OF_RANGE("value",Oe,d)}tt(m,R,L)}function He(d,l){if(typeof d!="number")throw new ut.ERR_INVALID_ARG_TYPE(l,"number",d)}function it(d,l,c){throw Math.floor(d)!==d?(He(d,c),new ut.ERR_OUT_OF_RANGE("offset","an integer",d)):l<0?new ut.ERR_BUFFER_OUT_OF_BOUNDS:new ut.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${l}`,d)}const Ve=/[^+/0-9A-Za-z-_]/g;function ud(d){if(d=d.split("=")[0],d=d.trim().replace(Ve,""),d.length<2)return"";for(;d.length%4!==0;)d=d+"=";return d}function Ls(d,l){l=l||1/0;let c;const m=d.length;let R=null;const L=[];for(let U=0;U<m;++U){if(c=d.charCodeAt(U),c>55295&&c<57344){if(!R){if(c>56319){(l-=3)>-1&&L.push(239,191,189);continue}else if(U+1===m){(l-=3)>-1&&L.push(239,191,189);continue}R=c;continue}if(c<56320){(l-=3)>-1&&L.push(239,191,189),R=c;continue}c=(R-55296<<10|c-56320)+65536}else R&&(l-=3)>-1&&L.push(239,191,189);if(R=null,c<128){if((l-=1)<0)break;L.push(c)}else if(c<2048){if((l-=2)<0)break;L.push(c>>6|192,c&63|128)}else if(c<65536){if((l-=3)<0)break;L.push(c>>12|224,c>>6&63|128,c&63|128)}else if(c<1114112){if((l-=4)<0)break;L.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128)}else throw new Error("Invalid code point")}return L}function dd(d){const l=[];for(let c=0;c<d.length;++c)l.push(d.charCodeAt(c)&255);return l}function hd(d,l){let c,m,R;const L=[];for(let U=0;U<d.length&&!((l-=2)<0);++U)c=d.charCodeAt(U),m=c>>8,R=c%256,L.push(R),L.push(m);return L}function kc(d){return e.toByteArray(ud(d))}function ua(d,l,c,m){let R;for(R=0;R<m&&!(R+c>=l.length||R>=d.length);++R)l[R+c]=d[R];return R}function di(d,l){return d instanceof l||d!=null&&d.constructor!=null&&d.constructor.name!=null&&d.constructor.name===l.name}function Ds(d){return d!==d}const pd=function(){const d="0123456789abcdef",l=new Array(256);for(let c=0;c<16;++c){const m=c*16;for(let R=0;R<16;++R)l[m+R]=d[c]+d[R]}return l}();function Vi(d){return typeof BigInt>"u"?fd:d}function fd(){throw new Error("BigInt not supported")}})(U0);var Bu;typeof window<"u"&&(window.Buffer||(window.Buffer=U0.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Bu=window.process)!=null&&Bu.env||(window.process={env:{}}));var fw={};const Y={SECURE_SITE_SDK:fw.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},ft={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var Me;(function(i){i.assertEqual=o=>o;function e(o){}i.assertIs=e;function t(o){throw new Error}i.assertNever=t,i.arrayToEnum=o=>{const r={};for(const a of o)r[a]=a;return r},i.getValidEnumValues=o=>{const r=i.objectKeys(o).filter(s=>typeof o[o[s]]!="number"),a={};for(const s of r)a[s]=o[s];return i.objectValues(a)},i.objectValues=o=>i.objectKeys(o).map(function(r){return o[r]}),i.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const r=[];for(const a in o)Object.prototype.hasOwnProperty.call(o,a)&&r.push(a);return r},i.find=(o,r)=>{for(const a of o)if(r(a))return a},i.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function n(o,r=" | "){return o.map(a=>typeof a=="string"?`'${a}'`:a).join(r)}i.joinValues=n,i.jsonStringifyReplacer=(o,r)=>typeof r=="bigint"?r.toString():r})(Me||(Me={}));var Al;(function(i){i.mergeShapes=(e,t)=>({...e,...t})})(Al||(Al={}));const te=Me.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Ji=i=>{switch(typeof i){case"undefined":return te.undefined;case"string":return te.string;case"number":return isNaN(i)?te.nan:te.number;case"boolean":return te.boolean;case"function":return te.function;case"bigint":return te.bigint;case"symbol":return te.symbol;case"object":return Array.isArray(i)?te.array:i===null?te.null:i.then&&typeof i.then=="function"&&i.catch&&typeof i.catch=="function"?te.promise:typeof Map<"u"&&i instanceof Map?te.map:typeof Set<"u"&&i instanceof Set?te.set:typeof Date<"u"&&i instanceof Date?te.date:te.object;default:return te.unknown}},G=Me.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),ww=i=>JSON.stringify(i,null,2).replace(/"([^"]+)":/g,"$1:");class ti extends Error{constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(r){return r.message},n={_errors:[]},o=r=>{for(const a of r.issues)if(a.code==="invalid_union")a.unionErrors.map(o);else if(a.code==="invalid_return_type")o(a.returnTypeError);else if(a.code==="invalid_arguments")o(a.argumentsError);else if(a.path.length===0)n._errors.push(t(a));else{let s=n,u=0;for(;u<a.path.length;){const h=a.path[u];u===a.path.length-1?(s[h]=s[h]||{_errors:[]},s[h]._errors.push(t(a))):s[h]=s[h]||{_errors:[]},s=s[h],u++}}};return o(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,Me.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const o of this.issues)o.path.length>0?(t[o.path[0]]=t[o.path[0]]||[],t[o.path[0]].push(e(o))):n.push(e(o));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}ti.create=i=>new ti(i);const ko=(i,e)=>{let t;switch(i.code){case G.invalid_type:i.received===te.undefined?t="Required":t=`Expected ${i.expected}, received ${i.received}`;break;case G.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(i.expected,Me.jsonStringifyReplacer)}`;break;case G.unrecognized_keys:t=`Unrecognized key(s) in object: ${Me.joinValues(i.keys,", ")}`;break;case G.invalid_union:t="Invalid input";break;case G.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${Me.joinValues(i.options)}`;break;case G.invalid_enum_value:t=`Invalid enum value. Expected ${Me.joinValues(i.options)}, received '${i.received}'`;break;case G.invalid_arguments:t="Invalid function arguments";break;case G.invalid_return_type:t="Invalid function return type";break;case G.invalid_date:t="Invalid date";break;case G.invalid_string:typeof i.validation=="object"?"includes"in i.validation?(t=`Invalid input: must include "${i.validation.includes}"`,typeof i.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${i.validation.position}`)):"startsWith"in i.validation?t=`Invalid input: must start with "${i.validation.startsWith}"`:"endsWith"in i.validation?t=`Invalid input: must end with "${i.validation.endsWith}"`:Me.assertNever(i.validation):i.validation!=="regex"?t=`Invalid ${i.validation}`:t="Invalid";break;case G.too_small:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at least":"more than"} ${i.minimum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at least":"over"} ${i.minimum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(i.minimum))}`:t="Invalid input";break;case G.too_big:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at most":"less than"} ${i.maximum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at most":"under"} ${i.maximum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="bigint"?t=`BigInt must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly":i.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(i.maximum))}`:t="Invalid input";break;case G.custom:t="Invalid input";break;case G.invalid_intersection_types:t="Intersection results could not be merged";break;case G.not_multiple_of:t=`Number must be a multiple of ${i.multipleOf}`;break;case G.not_finite:t="Number must be finite";break;default:t=e.defaultError,Me.assertNever(i)}return{message:t}};let W0=ko;function gw(i){W0=i}function Ua(){return W0}const ja=i=>{const{data:e,path:t,errorMaps:n,issueData:o}=i,r=[...t,...o.path||[]],a={...o,path:r};let s="";const u=n.filter(h=>!!h).slice().reverse();for(const h of u)s=h(a,{data:e,defaultError:s}).message;return{...o,path:r,message:o.message||s}},mw=[];function ne(i,e){const t=ja({issueData:e,data:i.data,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,Ua(),ko].filter(n=>!!n)});i.common.issues.push(t)}class mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const o of t){if(o.status==="aborted")return _e;o.status==="dirty"&&e.dirty(),n.push(o.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const o of t)n.push({key:await o.key,value:await o.value});return mt.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const o of t){const{key:r,value:a}=o;if(r.status==="aborted"||a.status==="aborted")return _e;r.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),r.value!=="__proto__"&&(typeof a.value<"u"||o.alwaysSet)&&(n[r.value]=a.value)}return{status:e.value,value:n}}}const _e=Object.freeze({status:"aborted"}),F0=i=>({status:"dirty",value:i}),Et=i=>({status:"valid",value:i}),$l=i=>i.status==="aborted",Sl=i=>i.status==="dirty",Io=i=>i.status==="valid",Wa=i=>typeof Promise<"u"&&i instanceof Promise;var ue;(function(i){i.errToObj=e=>typeof e=="string"?{message:e}:e||{},i.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(ue||(ue={}));class bi{constructor(e,t,n,o){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const pu=(i,e)=>{if(Io(e))return{success:!0,data:e.value};if(!i.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new ti(i.common.issues);return this._error=t,this._error}}};function $e(i){if(!i)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:o}=i;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(a,s)=>a.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:n??s.defaultError}:{message:t??s.defaultError},description:o}}class Se{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Ji(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Ji(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new mt,ctx:{common:e.parent.common,data:e.data,parsedType:Ji(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Wa(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const o={common:{issues:[],async:(n=t==null?void 0:t.async)!==null&&n!==void 0?n:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ji(e)},r=this._parseSync({data:e,path:o.path,parent:o});return pu(o,r)}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Ji(e)},o=this._parse({data:e,path:n.path,parent:n}),r=await(Wa(o)?o:Promise.resolve(o));return pu(n,r)}refine(e,t){const n=o=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(o):t;return this._refinement((o,r)=>{const a=e(o),s=()=>r.addIssue({code:G.custom,...n(o)});return typeof Promise<"u"&&a instanceof Promise?a.then(u=>u?!0:(s(),!1)):a?!0:(s(),!1)})}refinement(e,t){return this._refinement((n,o)=>e(n)?!0:(o.addIssue(typeof t=="function"?t(n,o):t),!1))}_refinement(e){return new oi({schema:this,typeName:ve.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Ii.create(this,this._def)}nullable(){return zr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ii.create(this,this._def)}promise(){return Un.create(this,this._def)}or(e){return Mo.create([this,e],this._def)}and(e){return Lo.create(this,e,this._def)}transform(e){return new oi({...$e(this._def),schema:this,typeName:ve.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Wo({...$e(this._def),innerType:this,defaultValue:t,typeName:ve.ZodDefault})}brand(){return new H0({typeName:ve.ZodBranded,type:this,...$e(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Va({...$e(this._def),innerType:this,catchValue:t,typeName:ve.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return na.create(this,e)}readonly(){return Ga.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const vw=/^c[^\s-]{8,}$/i,bw=/^[a-z][a-z0-9]*$/,yw=/^[0-9A-HJKMNP-TV-Z]{26}$/,xw=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Cw=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,_w="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let cl;const Ew=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Aw=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,$w=i=>i.precision?i.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`):i.precision===0?i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Sw(i,e){return!!((e==="v4"||!e)&&Ew.test(i)||(e==="v6"||!e)&&Aw.test(i))}class Xt extends Se{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==te.string){const r=this._getOrReturnCtx(e);return ne(r,{code:G.invalid_type,expected:te.string,received:r.parsedType}),_e}const n=new mt;let o;for(const r of this._def.checks)if(r.kind==="min")e.data.length<r.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:G.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="max")e.data.length>r.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:G.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="length"){const a=e.data.length>r.value,s=e.data.length<r.value;(a||s)&&(o=this._getOrReturnCtx(e,o),a?ne(o,{code:G.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):s&&ne(o,{code:G.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),n.dirty())}else if(r.kind==="email")Cw.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"email",code:G.invalid_string,message:r.message}),n.dirty());else if(r.kind==="emoji")cl||(cl=new RegExp(_w,"u")),cl.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"emoji",code:G.invalid_string,message:r.message}),n.dirty());else if(r.kind==="uuid")xw.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"uuid",code:G.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid")vw.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"cuid",code:G.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid2")bw.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"cuid2",code:G.invalid_string,message:r.message}),n.dirty());else if(r.kind==="ulid")yw.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"ulid",code:G.invalid_string,message:r.message}),n.dirty());else if(r.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),ne(o,{validation:"url",code:G.invalid_string,message:r.message}),n.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"regex",code:G.invalid_string,message:r.message}),n.dirty())):r.kind==="trim"?e.data=e.data.trim():r.kind==="includes"?e.data.includes(r.value,r.position)||(o=this._getOrReturnCtx(e,o),ne(o,{code:G.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),n.dirty()):r.kind==="toLowerCase"?e.data=e.data.toLowerCase():r.kind==="toUpperCase"?e.data=e.data.toUpperCase():r.kind==="startsWith"?e.data.startsWith(r.value)||(o=this._getOrReturnCtx(e,o),ne(o,{code:G.invalid_string,validation:{startsWith:r.value},message:r.message}),n.dirty()):r.kind==="endsWith"?e.data.endsWith(r.value)||(o=this._getOrReturnCtx(e,o),ne(o,{code:G.invalid_string,validation:{endsWith:r.value},message:r.message}),n.dirty()):r.kind==="datetime"?$w(r).test(e.data)||(o=this._getOrReturnCtx(e,o),ne(o,{code:G.invalid_string,validation:"datetime",message:r.message}),n.dirty()):r.kind==="ip"?Sw(e.data,r.version)||(o=this._getOrReturnCtx(e,o),ne(o,{validation:"ip",code:G.invalid_string,message:r.message}),n.dirty()):Me.assertNever(r);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(o=>e.test(o),{validation:t,code:G.invalid_string,...ue.errToObj(n)})}_addCheck(e){return new Xt({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ue.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ue.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ue.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ue.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ue.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ue.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ue.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ue.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...ue.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...ue.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...ue.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...ue.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...ue.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...ue.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...ue.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...ue.errToObj(t)})}nonempty(e){return this.min(1,ue.errToObj(e))}trim(){return new Xt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Xt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Xt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Xt.create=i=>{var e;return new Xt({checks:[],typeName:ve.ZodString,coerce:(e=i==null?void 0:i.coerce)!==null&&e!==void 0?e:!1,...$e(i)})};function Rw(i,e){const t=(i.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,o=t>n?t:n,r=parseInt(i.toFixed(o).replace(".","")),a=parseInt(e.toFixed(o).replace(".",""));return r%a/Math.pow(10,o)}class lr extends Se{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==te.number){const r=this._getOrReturnCtx(e);return ne(r,{code:G.invalid_type,expected:te.number,received:r.parsedType}),_e}let n;const o=new mt;for(const r of this._def.checks)r.kind==="int"?Me.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),ne(n,{code:G.invalid_type,expected:"integer",received:"float",message:r.message}),o.dirty()):r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(n=this._getOrReturnCtx(e,n),ne(n,{code:G.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),o.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(n=this._getOrReturnCtx(e,n),ne(n,{code:G.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),o.dirty()):r.kind==="multipleOf"?Rw(e.data,r.value)!==0&&(n=this._getOrReturnCtx(e,n),ne(n,{code:G.not_multiple_of,multipleOf:r.value,message:r.message}),o.dirty()):r.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),ne(n,{code:G.not_finite,message:r.message}),o.dirty()):Me.assertNever(r);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,ue.toString(t))}gt(e,t){return this.setLimit("min",e,!1,ue.toString(t))}lte(e,t){return this.setLimit("max",e,!0,ue.toString(t))}lt(e,t){return this.setLimit("max",e,!1,ue.toString(t))}setLimit(e,t,n,o){return new lr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:ue.toString(o)}]})}_addCheck(e){return new lr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ue.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ue.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ue.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ue.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ue.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:ue.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:ue.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ue.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ue.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Me.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}lr.create=i=>new lr({checks:[],typeName:ve.ZodNumber,coerce:(i==null?void 0:i.coerce)||!1,...$e(i)});class cr extends Se{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==te.bigint){const r=this._getOrReturnCtx(e);return ne(r,{code:G.invalid_type,expected:te.bigint,received:r.parsedType}),_e}let n;const o=new mt;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(n=this._getOrReturnCtx(e,n),ne(n,{code:G.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),o.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(n=this._getOrReturnCtx(e,n),ne(n,{code:G.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),o.dirty()):r.kind==="multipleOf"?e.data%r.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),ne(n,{code:G.not_multiple_of,multipleOf:r.value,message:r.message}),o.dirty()):Me.assertNever(r);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,ue.toString(t))}gt(e,t){return this.setLimit("min",e,!1,ue.toString(t))}lte(e,t){return this.setLimit("max",e,!0,ue.toString(t))}lt(e,t){return this.setLimit("max",e,!1,ue.toString(t))}setLimit(e,t,n,o){return new cr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:ue.toString(o)}]})}_addCheck(e){return new cr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ue.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ue.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ue.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ue.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:ue.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}cr.create=i=>{var e;return new cr({checks:[],typeName:ve.ZodBigInt,coerce:(e=i==null?void 0:i.coerce)!==null&&e!==void 0?e:!1,...$e(i)})};class Oo extends Se{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==te.boolean){const n=this._getOrReturnCtx(e);return ne(n,{code:G.invalid_type,expected:te.boolean,received:n.parsedType}),_e}return Et(e.data)}}Oo.create=i=>new Oo({typeName:ve.ZodBoolean,coerce:(i==null?void 0:i.coerce)||!1,...$e(i)});class Wr extends Se{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==te.date){const r=this._getOrReturnCtx(e);return ne(r,{code:G.invalid_type,expected:te.date,received:r.parsedType}),_e}if(isNaN(e.data.getTime())){const r=this._getOrReturnCtx(e);return ne(r,{code:G.invalid_date}),_e}const n=new mt;let o;for(const r of this._def.checks)r.kind==="min"?e.data.getTime()<r.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:G.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),n.dirty()):r.kind==="max"?e.data.getTime()>r.value&&(o=this._getOrReturnCtx(e,o),ne(o,{code:G.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),n.dirty()):Me.assertNever(r);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Wr({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:ue.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:ue.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Wr.create=i=>new Wr({checks:[],coerce:(i==null?void 0:i.coerce)||!1,typeName:ve.ZodDate,...$e(i)});class Fa extends Se{_parse(e){if(this._getType(e)!==te.symbol){const n=this._getOrReturnCtx(e);return ne(n,{code:G.invalid_type,expected:te.symbol,received:n.parsedType}),_e}return Et(e.data)}}Fa.create=i=>new Fa({typeName:ve.ZodSymbol,...$e(i)});class No extends Se{_parse(e){if(this._getType(e)!==te.undefined){const n=this._getOrReturnCtx(e);return ne(n,{code:G.invalid_type,expected:te.undefined,received:n.parsedType}),_e}return Et(e.data)}}No.create=i=>new No({typeName:ve.ZodUndefined,...$e(i)});class Po extends Se{_parse(e){if(this._getType(e)!==te.null){const n=this._getOrReturnCtx(e);return ne(n,{code:G.invalid_type,expected:te.null,received:n.parsedType}),_e}return Et(e.data)}}Po.create=i=>new Po({typeName:ve.ZodNull,...$e(i)});class Bn extends Se{constructor(){super(...arguments),this._any=!0}_parse(e){return Et(e.data)}}Bn.create=i=>new Bn({typeName:ve.ZodAny,...$e(i)});class Tr extends Se{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Et(e.data)}}Tr.create=i=>new Tr({typeName:ve.ZodUnknown,...$e(i)});class Bi extends Se{_parse(e){const t=this._getOrReturnCtx(e);return ne(t,{code:G.invalid_type,expected:te.never,received:t.parsedType}),_e}}Bi.create=i=>new Bi({typeName:ve.ZodNever,...$e(i)});class za extends Se{_parse(e){if(this._getType(e)!==te.undefined){const n=this._getOrReturnCtx(e);return ne(n,{code:G.invalid_type,expected:te.void,received:n.parsedType}),_e}return Et(e.data)}}za.create=i=>new za({typeName:ve.ZodVoid,...$e(i)});class ii extends Se{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),o=this._def;if(t.parsedType!==te.array)return ne(t,{code:G.invalid_type,expected:te.array,received:t.parsedType}),_e;if(o.exactLength!==null){const a=t.data.length>o.exactLength.value,s=t.data.length<o.exactLength.value;(a||s)&&(ne(t,{code:a?G.too_big:G.too_small,minimum:s?o.exactLength.value:void 0,maximum:a?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),n.dirty())}if(o.minLength!==null&&t.data.length<o.minLength.value&&(ne(t,{code:G.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),n.dirty()),o.maxLength!==null&&t.data.length>o.maxLength.value&&(ne(t,{code:G.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((a,s)=>o.type._parseAsync(new bi(t,a,t.path,s)))).then(a=>mt.mergeArray(n,a));const r=[...t.data].map((a,s)=>o.type._parseSync(new bi(t,a,t.path,s)));return mt.mergeArray(n,r)}get element(){return this._def.type}min(e,t){return new ii({...this._def,minLength:{value:e,message:ue.toString(t)}})}max(e,t){return new ii({...this._def,maxLength:{value:e,message:ue.toString(t)}})}length(e,t){return new ii({...this._def,exactLength:{value:e,message:ue.toString(t)}})}nonempty(e){return this.min(1,e)}}ii.create=(i,e)=>new ii({type:i,minLength:null,maxLength:null,exactLength:null,typeName:ve.ZodArray,...$e(e)});function dn(i){if(i instanceof Je){const e={};for(const t in i.shape){const n=i.shape[t];e[t]=Ii.create(dn(n))}return new Je({...i._def,shape:()=>e})}else return i instanceof ii?new ii({...i._def,type:dn(i.element)}):i instanceof Ii?Ii.create(dn(i.unwrap())):i instanceof zr?zr.create(dn(i.unwrap())):i instanceof yi?yi.create(i.items.map(e=>dn(e))):i}class Je extends Se{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=Me.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==te.object){const h=this._getOrReturnCtx(e);return ne(h,{code:G.invalid_type,expected:te.object,received:h.parsedType}),_e}const{status:n,ctx:o}=this._processInputParams(e),{shape:r,keys:a}=this._getCached(),s=[];if(!(this._def.catchall instanceof Bi&&this._def.unknownKeys==="strip"))for(const h in o.data)a.includes(h)||s.push(h);const u=[];for(const h of a){const b=r[h],k=o.data[h];u.push({key:{status:"valid",value:h},value:b._parse(new bi(o,k,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof Bi){const h=this._def.unknownKeys;if(h==="passthrough")for(const b of s)u.push({key:{status:"valid",value:b},value:{status:"valid",value:o.data[b]}});else if(h==="strict")s.length>0&&(ne(o,{code:G.unrecognized_keys,keys:s}),n.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const b of s){const k=o.data[b];u.push({key:{status:"valid",value:b},value:h._parse(new bi(o,k,o.path,b)),alwaysSet:b in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const b of u){const k=await b.key;h.push({key:k,value:await b.value,alwaysSet:b.alwaysSet})}return h}).then(h=>mt.mergeObjectSync(n,h)):mt.mergeObjectSync(n,u)}get shape(){return this._def.shape()}strict(e){return ue.errToObj,new Je({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{var o,r,a,s;const u=(a=(r=(o=this._def).errorMap)===null||r===void 0?void 0:r.call(o,t,n).message)!==null&&a!==void 0?a:n.defaultError;return t.code==="unrecognized_keys"?{message:(s=ue.errToObj(e).message)!==null&&s!==void 0?s:u}:{message:u}}}:{}})}strip(){return new Je({...this._def,unknownKeys:"strip"})}passthrough(){return new Je({...this._def,unknownKeys:"passthrough"})}extend(e){return new Je({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Je({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ve.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Je({...this._def,catchall:e})}pick(e){const t={};return Me.objectKeys(e).forEach(n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])}),new Je({...this._def,shape:()=>t})}omit(e){const t={};return Me.objectKeys(this.shape).forEach(n=>{e[n]||(t[n]=this.shape[n])}),new Je({...this._def,shape:()=>t})}deepPartial(){return dn(this)}partial(e){const t={};return Me.objectKeys(this.shape).forEach(n=>{const o=this.shape[n];e&&!e[n]?t[n]=o:t[n]=o.optional()}),new Je({...this._def,shape:()=>t})}required(e){const t={};return Me.objectKeys(this.shape).forEach(n=>{if(e&&!e[n])t[n]=this.shape[n];else{let r=this.shape[n];for(;r instanceof Ii;)r=r._def.innerType;t[n]=r}}),new Je({...this._def,shape:()=>t})}keyof(){return z0(Me.objectKeys(this.shape))}}Je.create=(i,e)=>new Je({shape:()=>i,unknownKeys:"strip",catchall:Bi.create(),typeName:ve.ZodObject,...$e(e)});Je.strictCreate=(i,e)=>new Je({shape:()=>i,unknownKeys:"strict",catchall:Bi.create(),typeName:ve.ZodObject,...$e(e)});Je.lazycreate=(i,e)=>new Je({shape:i,unknownKeys:"strip",catchall:Bi.create(),typeName:ve.ZodObject,...$e(e)});class Mo extends Se{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function o(r){for(const s of r)if(s.result.status==="valid")return s.result;for(const s of r)if(s.result.status==="dirty")return t.common.issues.push(...s.ctx.common.issues),s.result;const a=r.map(s=>new ti(s.ctx.common.issues));return ne(t,{code:G.invalid_union,unionErrors:a}),_e}if(t.common.async)return Promise.all(n.map(async r=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await r._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(o);{let r;const a=[];for(const u of n){const h={...t,common:{...t.common,issues:[]},parent:null},b=u._parseSync({data:t.data,path:t.path,parent:h});if(b.status==="valid")return b;b.status==="dirty"&&!r&&(r={result:b,ctx:h}),h.common.issues.length&&a.push(h.common.issues)}if(r)return t.common.issues.push(...r.ctx.common.issues),r.result;const s=a.map(u=>new ti(u));return ne(t,{code:G.invalid_union,unionErrors:s}),_e}}get options(){return this._def.options}}Mo.create=(i,e)=>new Mo({options:i,typeName:ve.ZodUnion,...$e(e)});const xa=i=>i instanceof Bo?xa(i.schema):i instanceof oi?xa(i.innerType()):i instanceof Uo?[i.value]:i instanceof ur?i.options:i instanceof jo?Object.keys(i.enum):i instanceof Wo?xa(i._def.innerType):i instanceof No?[void 0]:i instanceof Po?[null]:null;class Rs extends Se{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==te.object)return ne(t,{code:G.invalid_type,expected:te.object,received:t.parsedType}),_e;const n=this.discriminator,o=t.data[n],r=this.optionsMap.get(o);return r?t.common.async?r._parseAsync({data:t.data,path:t.path,parent:t}):r._parseSync({data:t.data,path:t.path,parent:t}):(ne(t,{code:G.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),_e)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const o=new Map;for(const r of t){const a=xa(r.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const s of a){if(o.has(s))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);o.set(s,r)}}return new Rs({typeName:ve.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:o,...$e(n)})}}function Rl(i,e){const t=Ji(i),n=Ji(e);if(i===e)return{valid:!0,data:i};if(t===te.object&&n===te.object){const o=Me.objectKeys(e),r=Me.objectKeys(i).filter(s=>o.indexOf(s)!==-1),a={...i,...e};for(const s of r){const u=Rl(i[s],e[s]);if(!u.valid)return{valid:!1};a[s]=u.data}return{valid:!0,data:a}}else if(t===te.array&&n===te.array){if(i.length!==e.length)return{valid:!1};const o=[];for(let r=0;r<i.length;r++){const a=i[r],s=e[r],u=Rl(a,s);if(!u.valid)return{valid:!1};o.push(u.data)}return{valid:!0,data:o}}else return t===te.date&&n===te.date&&+i==+e?{valid:!0,data:i}:{valid:!1}}class Lo extends Se{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),o=(r,a)=>{if($l(r)||$l(a))return _e;const s=Rl(r.value,a.value);return s.valid?((Sl(r)||Sl(a))&&t.dirty(),{status:t.value,value:s.data}):(ne(n,{code:G.invalid_intersection_types}),_e)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([r,a])=>o(r,a)):o(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Lo.create=(i,e,t)=>new Lo({left:i,right:e,typeName:ve.ZodIntersection,...$e(t)});class yi extends Se{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==te.array)return ne(n,{code:G.invalid_type,expected:te.array,received:n.parsedType}),_e;if(n.data.length<this._def.items.length)return ne(n,{code:G.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),_e;!this._def.rest&&n.data.length>this._def.items.length&&(ne(n,{code:G.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...n.data].map((a,s)=>{const u=this._def.items[s]||this._def.rest;return u?u._parse(new bi(n,a,n.path,s)):null}).filter(a=>!!a);return n.common.async?Promise.all(r).then(a=>mt.mergeArray(t,a)):mt.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new yi({...this._def,rest:e})}}yi.create=(i,e)=>{if(!Array.isArray(i))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new yi({items:i,typeName:ve.ZodTuple,rest:null,...$e(e)})};class Do extends Se{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==te.object)return ne(n,{code:G.invalid_type,expected:te.object,received:n.parsedType}),_e;const o=[],r=this._def.keyType,a=this._def.valueType;for(const s in n.data)o.push({key:r._parse(new bi(n,s,n.path,s)),value:a._parse(new bi(n,n.data[s],n.path,s))});return n.common.async?mt.mergeObjectAsync(t,o):mt.mergeObjectSync(t,o)}get element(){return this._def.valueType}static create(e,t,n){return t instanceof Se?new Do({keyType:e,valueType:t,typeName:ve.ZodRecord,...$e(n)}):new Do({keyType:Xt.create(),valueType:e,typeName:ve.ZodRecord,...$e(t)})}}class Ha extends Se{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==te.map)return ne(n,{code:G.invalid_type,expected:te.map,received:n.parsedType}),_e;const o=this._def.keyType,r=this._def.valueType,a=[...n.data.entries()].map(([s,u],h)=>({key:o._parse(new bi(n,s,n.path,[h,"key"])),value:r._parse(new bi(n,u,n.path,[h,"value"]))}));if(n.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const u of a){const h=await u.key,b=await u.value;if(h.status==="aborted"||b.status==="aborted")return _e;(h.status==="dirty"||b.status==="dirty")&&t.dirty(),s.set(h.value,b.value)}return{status:t.value,value:s}})}else{const s=new Map;for(const u of a){const h=u.key,b=u.value;if(h.status==="aborted"||b.status==="aborted")return _e;(h.status==="dirty"||b.status==="dirty")&&t.dirty(),s.set(h.value,b.value)}return{status:t.value,value:s}}}}Ha.create=(i,e,t)=>new Ha({valueType:e,keyType:i,typeName:ve.ZodMap,...$e(t)});class Fr extends Se{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==te.set)return ne(n,{code:G.invalid_type,expected:te.set,received:n.parsedType}),_e;const o=this._def;o.minSize!==null&&n.data.size<o.minSize.value&&(ne(n,{code:G.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),t.dirty()),o.maxSize!==null&&n.data.size>o.maxSize.value&&(ne(n,{code:G.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),t.dirty());const r=this._def.valueType;function a(u){const h=new Set;for(const b of u){if(b.status==="aborted")return _e;b.status==="dirty"&&t.dirty(),h.add(b.value)}return{status:t.value,value:h}}const s=[...n.data.values()].map((u,h)=>r._parse(new bi(n,u,n.path,h)));return n.common.async?Promise.all(s).then(u=>a(u)):a(s)}min(e,t){return new Fr({...this._def,minSize:{value:e,message:ue.toString(t)}})}max(e,t){return new Fr({...this._def,maxSize:{value:e,message:ue.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Fr.create=(i,e)=>new Fr({valueType:i,minSize:null,maxSize:null,typeName:ve.ZodSet,...$e(e)});class wn extends Se{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==te.function)return ne(t,{code:G.invalid_type,expected:te.function,received:t.parsedType}),_e;function n(s,u){return ja({data:s,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ua(),ko].filter(h=>!!h),issueData:{code:G.invalid_arguments,argumentsError:u}})}function o(s,u){return ja({data:s,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ua(),ko].filter(h=>!!h),issueData:{code:G.invalid_return_type,returnTypeError:u}})}const r={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Un){const s=this;return Et(async function(...u){const h=new ti([]),b=await s._def.args.parseAsync(u,r).catch(P=>{throw h.addIssue(n(u,P)),h}),k=await Reflect.apply(a,this,b);return await s._def.returns._def.type.parseAsync(k,r).catch(P=>{throw h.addIssue(o(k,P)),h})})}else{const s=this;return Et(function(...u){const h=s._def.args.safeParse(u,r);if(!h.success)throw new ti([n(u,h.error)]);const b=Reflect.apply(a,this,h.data),k=s._def.returns.safeParse(b,r);if(!k.success)throw new ti([o(b,k.error)]);return k.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new wn({...this._def,args:yi.create(e).rest(Tr.create())})}returns(e){return new wn({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new wn({args:e||yi.create([]).rest(Tr.create()),returns:t||Tr.create(),typeName:ve.ZodFunction,...$e(n)})}}class Bo extends Se{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Bo.create=(i,e)=>new Bo({getter:i,typeName:ve.ZodLazy,...$e(e)});class Uo extends Se{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ne(t,{received:t.data,code:G.invalid_literal,expected:this._def.value}),_e}return{status:"valid",value:e.data}}get value(){return this._def.value}}Uo.create=(i,e)=>new Uo({value:i,typeName:ve.ZodLiteral,...$e(e)});function z0(i,e){return new ur({values:i,typeName:ve.ZodEnum,...$e(e)})}class ur extends Se{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return ne(t,{expected:Me.joinValues(n),received:t.parsedType,code:G.invalid_type}),_e}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),n=this._def.values;return ne(t,{received:t.data,code:G.invalid_enum_value,options:n}),_e}return Et(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return ur.create(e)}exclude(e){return ur.create(this.options.filter(t=>!e.includes(t)))}}ur.create=z0;class jo extends Se{_parse(e){const t=Me.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==te.string&&n.parsedType!==te.number){const o=Me.objectValues(t);return ne(n,{expected:Me.joinValues(o),received:n.parsedType,code:G.invalid_type}),_e}if(t.indexOf(e.data)===-1){const o=Me.objectValues(t);return ne(n,{received:n.data,code:G.invalid_enum_value,options:o}),_e}return Et(e.data)}get enum(){return this._def.values}}jo.create=(i,e)=>new jo({values:i,typeName:ve.ZodNativeEnum,...$e(e)});class Un extends Se{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==te.promise&&t.common.async===!1)return ne(t,{code:G.invalid_type,expected:te.promise,received:t.parsedType}),_e;const n=t.parsedType===te.promise?t.data:Promise.resolve(t.data);return Et(n.then(o=>this._def.type.parseAsync(o,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Un.create=(i,e)=>new Un({type:i,typeName:ve.ZodPromise,...$e(e)});class oi extends Se{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ve.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),o=this._def.effect||null,r={addIssue:a=>{ne(n,a),a.fatal?t.abort():t.dirty()},get path(){return n.path}};if(r.addIssue=r.addIssue.bind(r),o.type==="preprocess"){const a=o.transform(n.data,r);return n.common.issues.length?{status:"dirty",value:n.data}:n.common.async?Promise.resolve(a).then(s=>this._def.schema._parseAsync({data:s,path:n.path,parent:n})):this._def.schema._parseSync({data:a,path:n.path,parent:n})}if(o.type==="refinement"){const a=s=>{const u=o.refinement(s,r);if(n.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(n.common.async===!1){const s=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?_e:(s.status==="dirty"&&t.dirty(),a(s.value),{status:t.value,value:s.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(s=>s.status==="aborted"?_e:(s.status==="dirty"&&t.dirty(),a(s.value).then(()=>({status:t.value,value:s.value}))))}if(o.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Io(a))return a;const s=o.transform(a.value,r);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:s}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>Io(a)?Promise.resolve(o.transform(a.value,r)).then(s=>({status:t.value,value:s})):a);Me.assertNever(o)}}oi.create=(i,e,t)=>new oi({schema:i,typeName:ve.ZodEffects,effect:e,...$e(t)});oi.createWithPreprocess=(i,e,t)=>new oi({schema:e,effect:{type:"preprocess",transform:i},typeName:ve.ZodEffects,...$e(t)});class Ii extends Se{_parse(e){return this._getType(e)===te.undefined?Et(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ii.create=(i,e)=>new Ii({innerType:i,typeName:ve.ZodOptional,...$e(e)});class zr extends Se{_parse(e){return this._getType(e)===te.null?Et(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}zr.create=(i,e)=>new zr({innerType:i,typeName:ve.ZodNullable,...$e(e)});class Wo extends Se{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===te.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Wo.create=(i,e)=>new Wo({innerType:i,typeName:ve.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...$e(e)});class Va extends Se{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},o=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Wa(o)?o.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new ti(n.common.issues)},input:n.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new ti(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Va.create=(i,e)=>new Va({innerType:i,typeName:ve.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...$e(e)});class Za extends Se{_parse(e){if(this._getType(e)!==te.nan){const n=this._getOrReturnCtx(e);return ne(n,{code:G.invalid_type,expected:te.nan,received:n.parsedType}),_e}return{status:"valid",value:e.data}}}Za.create=i=>new Za({typeName:ve.ZodNaN,...$e(i)});const Tw=Symbol("zod_brand");class H0 extends Se{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class na extends Se{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?_e:r.status==="dirty"?(t.dirty(),F0(r.value)):this._def.out._parseAsync({data:r.value,path:n.path,parent:n})})();{const o=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?_e:o.status==="dirty"?(t.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:n.path,parent:n})}}static create(e,t){return new na({in:e,out:t,typeName:ve.ZodPipeline})}}class Ga extends Se{_parse(e){const t=this._def.innerType._parse(e);return Io(t)&&(t.value=Object.freeze(t.value)),t}}Ga.create=(i,e)=>new Ga({innerType:i,typeName:ve.ZodReadonly,...$e(e)});const V0=(i,e={},t)=>i?Bn.create().superRefine((n,o)=>{var r,a;if(!i(n)){const s=typeof e=="function"?e(n):typeof e=="string"?{message:e}:e,u=(a=(r=s.fatal)!==null&&r!==void 0?r:t)!==null&&a!==void 0?a:!0,h=typeof s=="string"?{message:s}:s;o.addIssue({code:"custom",...h,fatal:u})}}):Bn.create(),kw={object:Je.lazycreate};var ve;(function(i){i.ZodString="ZodString",i.ZodNumber="ZodNumber",i.ZodNaN="ZodNaN",i.ZodBigInt="ZodBigInt",i.ZodBoolean="ZodBoolean",i.ZodDate="ZodDate",i.ZodSymbol="ZodSymbol",i.ZodUndefined="ZodUndefined",i.ZodNull="ZodNull",i.ZodAny="ZodAny",i.ZodUnknown="ZodUnknown",i.ZodNever="ZodNever",i.ZodVoid="ZodVoid",i.ZodArray="ZodArray",i.ZodObject="ZodObject",i.ZodUnion="ZodUnion",i.ZodDiscriminatedUnion="ZodDiscriminatedUnion",i.ZodIntersection="ZodIntersection",i.ZodTuple="ZodTuple",i.ZodRecord="ZodRecord",i.ZodMap="ZodMap",i.ZodSet="ZodSet",i.ZodFunction="ZodFunction",i.ZodLazy="ZodLazy",i.ZodLiteral="ZodLiteral",i.ZodEnum="ZodEnum",i.ZodEffects="ZodEffects",i.ZodNativeEnum="ZodNativeEnum",i.ZodOptional="ZodOptional",i.ZodNullable="ZodNullable",i.ZodDefault="ZodDefault",i.ZodCatch="ZodCatch",i.ZodPromise="ZodPromise",i.ZodBranded="ZodBranded",i.ZodPipeline="ZodPipeline",i.ZodReadonly="ZodReadonly"})(ve||(ve={}));const Iw=(i,e={message:`Input not instance of ${i.name}`})=>V0(t=>t instanceof i,e),Z0=Xt.create,G0=lr.create,Ow=Za.create,Nw=cr.create,Y0=Oo.create,Pw=Wr.create,Mw=Fa.create,Lw=No.create,Dw=Po.create,Bw=Bn.create,Uw=Tr.create,jw=Bi.create,Ww=za.create,Fw=ii.create,zw=Je.create,Hw=Je.strictCreate,Vw=Mo.create,Zw=Rs.create,Gw=Lo.create,Yw=yi.create,qw=Do.create,Kw=Ha.create,Jw=Fr.create,Qw=wn.create,Xw=Bo.create,e3=Uo.create,t3=ur.create,i3=jo.create,r3=Un.create,fu=oi.create,n3=Ii.create,o3=zr.create,a3=oi.createWithPreprocess,s3=na.create,l3=()=>Z0().optional(),c3=()=>G0().optional(),u3=()=>Y0().optional(),d3={string:i=>Xt.create({...i,coerce:!0}),number:i=>lr.create({...i,coerce:!0}),boolean:i=>Oo.create({...i,coerce:!0}),bigint:i=>cr.create({...i,coerce:!0}),date:i=>Wr.create({...i,coerce:!0})},h3=_e;var g=Object.freeze({__proto__:null,defaultErrorMap:ko,setErrorMap:gw,getErrorMap:Ua,makeIssue:ja,EMPTY_PATH:mw,addIssueToContext:ne,ParseStatus:mt,INVALID:_e,DIRTY:F0,OK:Et,isAborted:$l,isDirty:Sl,isValid:Io,isAsync:Wa,get util(){return Me},get objectUtil(){return Al},ZodParsedType:te,getParsedType:Ji,ZodType:Se,ZodString:Xt,ZodNumber:lr,ZodBigInt:cr,ZodBoolean:Oo,ZodDate:Wr,ZodSymbol:Fa,ZodUndefined:No,ZodNull:Po,ZodAny:Bn,ZodUnknown:Tr,ZodNever:Bi,ZodVoid:za,ZodArray:ii,ZodObject:Je,ZodUnion:Mo,ZodDiscriminatedUnion:Rs,ZodIntersection:Lo,ZodTuple:yi,ZodRecord:Do,ZodMap:Ha,ZodSet:Fr,ZodFunction:wn,ZodLazy:Bo,ZodLiteral:Uo,ZodEnum:ur,ZodNativeEnum:jo,ZodPromise:Un,ZodEffects:oi,ZodTransformer:oi,ZodOptional:Ii,ZodNullable:zr,ZodDefault:Wo,ZodCatch:Va,ZodNaN:Za,BRAND:Tw,ZodBranded:H0,ZodPipeline:na,ZodReadonly:Ga,custom:V0,Schema:Se,ZodSchema:Se,late:kw,get ZodFirstPartyTypeKind(){return ve},coerce:d3,any:Bw,array:Fw,bigint:Nw,boolean:Y0,date:Pw,discriminatedUnion:Zw,effect:fu,enum:t3,function:Qw,instanceof:Iw,intersection:Gw,lazy:Xw,literal:e3,map:Kw,nan:Ow,nativeEnum:i3,never:jw,null:Dw,nullable:o3,number:G0,object:zw,oboolean:u3,onumber:c3,optional:n3,ostring:l3,pipeline:s3,preprocess:a3,promise:r3,record:qw,set:Jw,strictObject:Hw,string:Z0,symbol:Mw,transformer:fu,tuple:Yw,undefined:Lw,union:Vw,unknown:Uw,void:Ww,NEVER:h3,ZodIssueCode:G,quotelessJson:ww,ZodError:ti});const pt=g.object({message:g.string()});function pe(i){return g.literal(Y[i])}g.object({accessList:g.array(g.string()),blockHash:g.string().nullable(),blockNumber:g.string().nullable(),chainId:g.string(),from:g.string(),gas:g.string(),hash:g.string(),input:g.string().nullable(),maxFeePerGas:g.string(),maxPriorityFeePerGas:g.string(),nonce:g.string(),r:g.string(),s:g.string(),to:g.string(),transactionIndex:g.string().nullable(),type:g.string(),v:g.string(),value:g.string()});const p3=g.object({chainId:g.number()}),f3=g.object({email:g.string().email()}),w3=g.object({otp:g.string()}),g3=g.object({chainId:g.optional(g.number()),preferredAccountType:g.optional(g.string())}),m3=g.object({email:g.string().email()}),v3=g.object({otp:g.string()}),b3=g.object({otp:g.string()}),y3=g.object({themeMode:g.optional(g.enum(["light","dark"])),themeVariables:g.optional(g.record(g.string(),g.string().or(g.number())))}),x3=g.object({metadata:g.object({name:g.string(),description:g.string(),url:g.string(),icons:g.array(g.string())}).optional(),sdkVersion:g.string(),projectId:g.string()}),C3=g.object({type:g.string()}),_3=g.object({action:g.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),E3=g.object({email:g.string().email(),address:g.string(),chainId:g.number(),smartAccountDeployed:g.optional(g.boolean()),preferredAccountType:g.optional(g.string())}),A3=g.object({isConnected:g.boolean()}),$3=g.object({chainId:g.number()}),S3=g.object({chainId:g.number()}),R3=g.object({newEmail:g.string().email()}),T3=g.object({smartAccountEnabledNetworks:g.array(g.number())});g.object({address:g.string(),isDeployed:g.boolean()});const k3=g.object({type:g.string(),address:g.string()}),I3=g.any(),O3=g.object({method:g.literal("eth_accounts")}),N3=g.object({method:g.literal("eth_blockNumber")}),P3=g.object({method:g.literal("eth_call"),params:g.array(g.any())}),M3=g.object({method:g.literal("eth_chainId")}),L3=g.object({method:g.literal("eth_estimateGas"),params:g.array(g.any())}),D3=g.object({method:g.literal("eth_feeHistory"),params:g.array(g.any())}),B3=g.object({method:g.literal("eth_gasPrice")}),U3=g.object({method:g.literal("eth_getAccount"),params:g.array(g.any())}),j3=g.object({method:g.literal("eth_getBalance"),params:g.array(g.any())}),W3=g.object({method:g.literal("eth_getBlockByHash"),params:g.array(g.any())}),F3=g.object({method:g.literal("eth_getBlockByNumber"),params:g.array(g.any())}),z3=g.object({method:g.literal("eth_getBlockReceipts"),params:g.array(g.any())}),H3=g.object({method:g.literal("eth_getBlockTransactionCountByHash"),params:g.array(g.any())}),V3=g.object({method:g.literal("eth_getBlockTransactionCountByNumber"),params:g.array(g.any())}),Z3=g.object({method:g.literal("eth_getCode"),params:g.array(g.any())}),G3=g.object({method:g.literal("eth_getFilterChanges"),params:g.array(g.any())}),Y3=g.object({method:g.literal("eth_getFilterLogs"),params:g.array(g.any())}),q3=g.object({method:g.literal("eth_getLogs"),params:g.array(g.any())}),K3=g.object({method:g.literal("eth_getProof"),params:g.array(g.any())}),J3=g.object({method:g.literal("eth_getStorageAt"),params:g.array(g.any())}),Q3=g.object({method:g.literal("eth_getTransactionByBlockHashAndIndex"),params:g.array(g.any())}),X3=g.object({method:g.literal("eth_getTransactionByBlockNumberAndIndex"),params:g.array(g.any())}),eg=g.object({method:g.literal("eth_getTransactionByHash"),params:g.array(g.any())}),tg=g.object({method:g.literal("eth_getTransactionCount"),params:g.array(g.any())}),ig=g.object({method:g.literal("eth_getTransactionReceipt"),params:g.array(g.any())}),rg=g.object({method:g.literal("eth_getUncleCountByBlockHash"),params:g.array(g.any())}),ng=g.object({method:g.literal("eth_getUncleCountByBlockNumber"),params:g.array(g.any())}),og=g.object({method:g.literal("eth_maxPriorityFeePerGas")}),ag=g.object({method:g.literal("eth_newBlockFilter")}),sg=g.object({method:g.literal("eth_newFilter"),params:g.array(g.any())}),lg=g.object({method:g.literal("eth_newPendingTransactionFilter")}),cg=g.object({method:g.literal("eth_sendRawTransaction"),params:g.array(g.any())}),ug=g.object({method:g.literal("eth_syncing"),params:g.array(g.any())}),dg=g.object({method:g.literal("eth_uninstallFilter"),params:g.array(g.any())}),wu=g.object({method:g.literal("personal_sign"),params:g.array(g.any())}),hg=g.object({method:g.literal("eth_signTypedData_v4"),params:g.array(g.any())}),gu=g.object({method:g.literal("eth_sendTransaction"),params:g.array(g.any())}),mu=g.object({token:g.string()}),ga={appEvent:g.object({type:pe("APP_SWITCH_NETWORK"),payload:p3}).or(g.object({type:pe("APP_CONNECT_EMAIL"),payload:f3})).or(g.object({type:pe("APP_CONNECT_DEVICE")})).or(g.object({type:pe("APP_CONNECT_OTP"),payload:w3})).or(g.object({type:pe("APP_GET_USER"),payload:g.optional(g3)})).or(g.object({type:pe("APP_SIGN_OUT")})).or(g.object({type:pe("APP_IS_CONNECTED"),payload:g.optional(mu)})).or(g.object({type:pe("APP_GET_CHAIN_ID")})).or(g.object({type:pe("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(g.object({type:pe("APP_INIT_SMART_ACCOUNT")})).or(g.object({type:pe("APP_SET_PREFERRED_ACCOUNT"),payload:C3})).or(g.object({type:pe("APP_RPC_REQUEST"),payload:wu.or(gu).or(O3).or(N3).or(P3).or(M3).or(L3).or(D3).or(B3).or(U3).or(j3).or(W3).or(F3).or(z3).or(H3).or(V3).or(Z3).or(G3).or(Y3).or(q3).or(K3).or(J3).or(Q3).or(X3).or(eg).or(tg).or(ig).or(rg).or(ng).or(og).or(ag).or(sg).or(lg).or(cg).or(ug).or(dg).or(wu).or(hg).or(gu)})).or(g.object({type:pe("APP_UPDATE_EMAIL"),payload:m3})).or(g.object({type:pe("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:v3})).or(g.object({type:pe("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:b3})).or(g.object({type:pe("APP_SYNC_THEME"),payload:y3})).or(g.object({type:pe("APP_SYNC_DAPP_DATA"),payload:x3})),frameEvent:g.object({type:pe("FRAME_SWITCH_NETWORK_ERROR"),payload:pt}).or(g.object({type:pe("FRAME_SWITCH_NETWORK_SUCCESS"),payload:S3})).or(g.object({type:pe("FRAME_CONNECT_EMAIL_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_CONNECT_EMAIL_SUCCESS"),payload:_3})).or(g.object({type:pe("FRAME_CONNECT_OTP_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_CONNECT_OTP_SUCCESS")})).or(g.object({type:pe("FRAME_CONNECT_DEVICE_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_CONNECT_DEVICE_SUCCESS")})).or(g.object({type:pe("FRAME_GET_USER_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_GET_USER_SUCCESS"),payload:E3})).or(g.object({type:pe("FRAME_SIGN_OUT_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_SIGN_OUT_SUCCESS")})).or(g.object({type:pe("FRAME_IS_CONNECTED_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_IS_CONNECTED_SUCCESS"),payload:A3})).or(g.object({type:pe("FRAME_GET_CHAIN_ID_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_GET_CHAIN_ID_SUCCESS"),payload:$3})).or(g.object({type:pe("FRAME_RPC_REQUEST_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_RPC_REQUEST_SUCCESS"),payload:I3})).or(g.object({type:pe("FRAME_SESSION_UPDATE"),payload:mu})).or(g.object({type:pe("FRAME_UPDATE_EMAIL_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_UPDATE_EMAIL_SUCCESS")})).or(g.object({type:pe("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(g.object({type:pe("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:R3})).or(g.object({type:pe("FRAME_SYNC_THEME_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_SYNC_THEME_SUCCESS")})).or(g.object({type:pe("FRAME_SYNC_DAPP_DATA_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(g.object({type:pe("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:T3})).or(g.object({type:pe("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:pt})).or(g.object({type:pe("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:k3})).or(g.object({type:pe("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:pt}))},wt={set(i,e){Ye.isClient&&localStorage.setItem(`${Y.STORAGE_KEY}${i}`,e)},get(i){return Ye.isClient?localStorage.getItem(`${Y.STORAGE_KEY}${i}`):null},delete(i){Ye.isClient&&localStorage.removeItem(`${Y.STORAGE_KEY}${i}`)}},pg=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ma=30*1e3,Ye={getBlockchainApiUrl(){try{const{timeZone:i}=new Intl.DateTimeFormat().resolvedOptions(),e=i.toUpperCase();return pg.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const i=wt.get(Y.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<ma){const t=Math.ceil((ma-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const i=wt.get(Y.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<ma)return Math.ceil((ma-e)/1e3)}return 0},checkIfRequestExists(i){const e=this.getRequestMethod(i);return ft.NOT_SAFE_RPC_METHODS.includes(e)||ft.SAFE_RPC_METHODS.includes(e)},getRequestMethod(i){var e;return(e=i==null?void 0:i.payload)==null?void 0:e.method},checkIfRequestIsAllowed(i){const e=this.getRequestMethod(i);return ft.SAFE_RPC_METHODS.includes(e)},getPreferredAccountType(){return wt.get(Y.PREFERRED_ACCOUNT_TYPE)||ft.ACCOUNT_TYPES.EOA},isClient:typeof window<"u"};class fg{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=Ye.getBlockchainApiUrl(),this.events={onFrameEvent:n=>{Ye.isClient&&window.addEventListener("message",({data:o})=>{var a;if(!((a=o.type)!=null&&a.includes(Y.FRAME_EVENT_KEY)))return;const r=ga.frameEvent.parse(o);n(r)})},onAppEvent:n=>{Ye.isClient&&window.addEventListener("message",({data:o})=>{var a;if(!((a=o.type)!=null&&a.includes(Y.APP_EVENT_KEY)))return;const r=ga.appEvent.parse(o);n(r)})},postAppEvent:n=>{var o;if(Ye.isClient){if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");ga.appEvent.parse(n),window.postMessage(n),this.iframe.contentWindow.postMessage(n,"*")}},postFrameEvent:n=>{if(Ye.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");ga.frameEvent.parse(n),parent.postMessage(n,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((n,o)=>{this.frameLoadPromiseResolver={resolve:n,reject:o}}),t&&(this.frameLoadPromise=new Promise((n,o)=>{this.frameLoadPromiseResolver={resolve:n,reject:o}}),Ye.isClient)){const n=document.createElement("iframe");n.id="w3m-iframe",n.src=`${Y.SECURE_SITE_SDK}?projectId=${e}`,n.style.position="fixed",n.style.zIndex="999999",n.style.display="none",n.style.opacity="0",n.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",n.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(n),this.iframe=n,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class wg{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new fg(e,!0),this.w3mFrame.events.onFrameEvent(t=>{switch(console.log("💻 received",t),t.type){case Y.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(t);case Y.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(t);case Y.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case Y.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(t);case Y.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case Y.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(t);case Y.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(t);case Y.FRAME_GET_USER_ERROR:return this.onConnectError(t);case Y.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(t);case Y.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(t);case Y.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(t);case Y.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(t);case Y.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case Y.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(t);case Y.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(t);case Y.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(t);case Y.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(t);case Y.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(t);case Y.FRAME_SESSION_UPDATE:return this.onSessionUpdate(t);case Y.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case Y.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(t);case Y.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case Y.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(t);case Y.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(t);case Y.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(t);case Y.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case Y.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(t);case Y.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case Y.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(t);case Y.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(t);case Y.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(t);case Y.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onPreferSmartAccountSuccess(t);case Y.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onPreferSmartAccountError();default:return null}})}getLoginEmailUsed(){return!!wt.get(Y.EMAIL_LOGIN_USED_KEY)}getEmail(){return wt.get(Y.EMAIL)}rejectRpcRequest(){var e;(e=this.rpcRequestResolver)==null||e.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,Ye.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:Y.APP_CONNECT_EMAIL,payload:e}),new Promise((t,n)=>{this.connectEmailResolver={resolve:t,reject:n}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_CONNECT_OTP,payload:e}),new Promise((t,n)=>{this.connectOtpResolver={resolve:t,reject:n}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,Ye.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:Y.APP_UPDATE_EMAIL,payload:e}),new Promise((t,n)=>{this.updateEmailResolver={resolve:t,reject:n}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((t,n)=>{this.updateEmailPrimaryOtpResolver={resolve:t,reject:n}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((t,n)=>{this.updateEmailSecondaryOtpResolver={resolve:t,reject:n}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_SYNC_THEME,payload:e}),new Promise((t,n)=>{this.syncThemeResolver={resolve:t,reject:n}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_SYNC_DAPP_DATA,payload:e}),new Promise((t,n)=>{this.syncDappDataResolver={resolve:t,reject:n}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((t,n)=>{this.setPreferredAccountResolver={resolve:t,reject:n}})}async connect(e){const t=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_GET_USER,payload:{chainId:t,preferredAccountType:e==null?void 0:e.preferredAccountType}}),new Promise((n,o)=>{this.connectResolver={resolve:n,reject:o}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((t,n)=>{this.switchChainResolver={resolve:t,reject:n}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:Y.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return await this.w3mFrame.frameLoadPromise,ft.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:Y.APP_RPC_REQUEST,payload:e}),new Promise((t,n)=>{this.rpcRequestResolver={resolve:t,reject:n}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(Y.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(Y.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Y.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Y.FRAME_IS_CONNECTED_ERROR&&e(),t.type===Y.FRAME_IS_CONNECTED_SUCCESS&&!t.payload.isConnected&&e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Y.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===Y.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:ft.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===Y.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===Y.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){var t;(t=this.connectEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var t;(t=this.connectEmailResolver)==null||t.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var t;(t=this.connectDeviceResolver)==null||t.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var t;(t=this.connectOtpResolver)==null||t.reject(e.payload.message)}onConnectSuccess(e){var t;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(t=this.connectResolver)==null||t.resolve(e.payload)}onConnectError(e){var t;(t=this.connectResolver)==null||t.reject(e.payload.message)}onIsConnectedSuccess(e){var t;e.payload.isConnected||this.deleteEmailLoginCache(),(t=this.isConnectedResolver)==null||t.resolve(e.payload)}onIsConnectedError(e){var t;(t=this.isConnectedResolver)==null||t.reject(e.payload.message)}onGetChainIdSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.getChainIdResolver)==null||t.resolve(e.payload)}onGetChainIdError(e){var t;(t=this.getChainIdResolver)==null||t.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var t;(t=this.disconnectResolver)==null||t.reject(e.payload.message)}onSwitchChainSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.switchChainResolver)==null||t.resolve(e.payload)}onSwitchChainError(e){var t;(t=this.switchChainResolver)==null||t.reject(e.payload.message)}onRpcRequestSuccess(e){var t;(t=this.rpcRequestResolver)==null||t.resolve(e.payload)}onRpcRequestError(e){var t;(t=this.rpcRequestResolver)==null||t.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;(e=this.updateEmailResolver)==null||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var t;(t=this.updateEmailResolver)==null||t.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var t;(t=this.updateEmailPrimaryOtpResolver)==null||t.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var n;const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),(n=this.updateEmailSecondaryOtpResolver)==null||n.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){var t;(t=this.updateEmailSecondaryOtpResolver)==null||t.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var t;(t=this.syncThemeResolver)==null||t.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var t;(t=this.syncDappDataResolver)==null||t.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){var t;this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),(t=this.smartAccountEnabledNetworksResolver)==null||t.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){var t;this.persistSmartAccountEnabledNetworks([]),(t=this.smartAccountEnabledNetworksResolver)==null||t.reject(e.payload.message)}onPreferSmartAccountSuccess(e){var t;this.persistPreferredAccount(e.payload.type),(t=this.setPreferredAccountResolver)==null||t.resolve(void 0)}onPreferSmartAccountError(){var e;(e=this.setPreferredAccountResolver)==null||e.reject()}setNewLastEmailLoginTime(){wt.set(Y.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){wt.set(Y.EMAIL,e),wt.set(Y.EMAIL_LOGIN_USED_KEY,"true"),wt.delete(Y.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){wt.delete(Y.EMAIL_LOGIN_USED_KEY),wt.delete(Y.EMAIL),wt.delete(Y.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){wt.set(Y.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(wt.get(Y.LAST_USED_CHAIN_KEY))}persistPreferredAccount(e){wt.set(Y.PREFERRED_ACCOUNT_TYPE,e)}persistSmartAccountEnabledNetworks(e){wt.set(Y.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}var tn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ui=class extends se{constructor(){super(),this.usubscribe=[],this.networkImages=lt.state.networkImages,this.address=oe.state.address,this.profileImage=oe.state.profileImage,this.profileName=oe.state.profileName,this.network=le.state.caipNetwork,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(oe.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):Ie.close()}),le.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t,n;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((t=this.network)==null?void 0:t.imageId)??""];return _`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${fe(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?Ce.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ce.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${fe(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((n=this.network)==null?void 0:n.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=le.state,t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:o})=>{var r;return o===((r=this.network)==null?void 0:r.id)});return t||!n}onCopyAddress(){try{this.address&&(ie.copyToClopboard(this.address),Pe.showSuccess("Address copied"))}catch{Pe.showError("Failed to copy")}}emailBtnTemplate(){const e=ct.getConnectedConnector(),t=je.getEmailConnector();if(!t||e!=="EMAIL")return null;const n=t.provider.getEmail()??"";return _`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=le.checkIfSmartAccountEnabled(),t=ct.getConnectedConnector();if(!je.getEmailConnector()||t!=="EMAIL"||!e)return null;const r=Ye.getPreferredAccountType()===ft.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return _`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){const e=le.checkIfSmartAccountEnabled(),n=Ye.getPreferredAccountType()===ft.ACCOUNT_TYPES.SMART_ACCOUNT||!e?ft.ACCOUNT_TYPES.EOA:ft.ACCOUNT_TYPES.SMART_ACCOUNT,o=je.getEmailConnector();o&&(this.loading=!0,await(o==null?void 0:o.provider.setPreferredAccount(n)),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){W.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&W.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Ne.disconnect(),he.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{he.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Pe.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};Ui.styles=ow;tn([B()],Ui.prototype,"address",void 0);tn([B()],Ui.prototype,"profileImage",void 0);tn([B()],Ui.prototype,"profileName",void 0);tn([B()],Ui.prototype,"network",void 0);tn([B()],Ui.prototype,"disconnecting",void 0);tn([B()],Ui.prototype,"loading",void 0);Ui=tn([D("w3m-account-settings-view")],Ui);var gg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let vu=class extends se{render(){const e=ct.getConnectedConnector();return _`
      ${we.state.enableWalletFeatures&&e==="EMAIL"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return _`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return _`<w3m-account-default-widget></w3m-account-default-widget>`}};vu=gg([D("w3m-account-view")],vu);var q0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Tl=class extends se{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=ie.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return _`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?_`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:_`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return ie.isMobile()?_`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){W.push("ConnectingWalletConnect")}};q0([B()],Tl.prototype,"search",void 0);Tl=q0([D("w3m-all-wallets-view")],Tl);const mg=ye`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var ci=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pt=class extends se{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=De.state.selectedProvider,this.uri=Ne.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(De.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var n,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(n=this.selectedOnRampProvider)==null?void 0:n.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return _`
      <wui-flex
        data-error=${fe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${fe((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=oe.state.address,t=we.state.projectId;if(!e)throw new Error("No address found");(await kr.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(r=>new Date(r.metadata.minedAt)>new Date(this.startTime)||r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),W.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){Pe.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,ie.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?_`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=ot.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return _`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){Pe.showError("No link found"),W.goBack();return}try{ie.copyToClopboard(this.selectedOnRampProvider.url),Pe.showSuccess("Link copied")}catch{Pe.showError("Failed to copy")}}};Pt.styles=mg;ci([B()],Pt.prototype,"selectedOnRampProvider",void 0);ci([B()],Pt.prototype,"uri",void 0);ci([B()],Pt.prototype,"ready",void 0);ci([B()],Pt.prototype,"showRetry",void 0);ci([B()],Pt.prototype,"buffering",void 0);ci([B()],Pt.prototype,"error",void 0);ci([B()],Pt.prototype,"intervalId",void 0);ci([B()],Pt.prototype,"startTime",void 0);ci([de({type:Boolean})],Pt.prototype,"isMobile",void 0);ci([de()],Pt.prototype,"onRetry",void 0);Pt=ci([D("w3m-buy-in-progress-view")],Pt);const vg=ye`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,be={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.10"},ki={ConnectorExplorerIds:{[be.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[be.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[be.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[be.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[be.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[be.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[be.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[be.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[be.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[be.INJECTED_CONNECTOR_ID]:"Browser Wallet",[be.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[be.COINBASE_CONNECTOR_ID]:"Coinbase",[be.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[be.LEDGER_CONNECTOR_ID]:"Ledger",[be.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[be.INJECTED_CONNECTOR_ID]:"INJECTED",[be.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[be.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[be.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},bg={getCaipTokens(i){if(!i)return;const e={};return Object.entries(i).forEach(([t,n])=>{e[`${be.EIP155}:${t}`]=n}),e}};var xc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Fo=class extends se{constructor(){super(),this.unsubscribe=[],this.connectors=je.state.connectors,this.count=me.state.count,this.unsubscribe.push(je.subscribeKey("connectors",e=>this.connectors=e),me.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(ie.isMobile())return null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?_`
      <wui-list-wallet
        imageSrc=${fe(Ue.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=we.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(n=>_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          data-testid=${`wallet-selector-${n.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:t}=me.state;return t.length?this.filterOutDuplicateWallets(t).map(o=>_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return ct.getRecentWallets().map(t=>_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!Ne.checkInstalled()?null:_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=je.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(be.CONNECTOR_RDNS_MAP[t.id])?null:_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(s=>s.type==="WALLET_CONNECT"),{allWallets:t}=we.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!ie.isMobile())return null;const n=me.state.featured.length,o=this.count+n,r=o<10?o:Math.floor(o/10)*10,a=r<o?`${r}+`:`${r}`;return _`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(N=>N.type==="WALLET_CONNECT"))return null;const{recommended:t}=me.state,{customWallets:n,featuredWalletIds:o}=we.state,{connectors:r}=je.state,a=ct.getRecentWallets(),u=r.filter(N=>N.type==="INJECTED").filter(N=>N.name!=="Browser Wallet");if(o||n||!t.length)return null;const h=u.length+a.length,b=Math.max(0,2-h);return this.filterOutDuplicateWallets(t).slice(0,b).map(N=>_`
        <wui-list-wallet
          imageSrc=${fe(Ue.getWalletImage(N))}
          name=${(N==null?void 0:N.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(N)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?ie.isMobile()?W.push("AllWallets"):W.push("ConnectingWalletConnect"):W.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const t=ct.getRecentWallets(),n=this.connectors.map(s=>{var u;return(u=s.info)==null?void 0:u.rdns}).filter(Boolean),o=t.map(s=>s.rdns).filter(Boolean),r=n.concat(o);return e.filter(s=>!r.includes(String(s==null?void 0:s.rdns)))}onAllWallets(){he.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),W.push("AllWallets")}onConnectWallet(e){W.push("ConnectingWalletConnect",{wallet:e})}};Fo.styles=vg;xc([B()],Fo.prototype,"connectors",void 0);xc([B()],Fo.prototype,"count",void 0);Fo=xc([D("w3m-connect-view")],Fo);const yg=ye`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var rn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};class Tt extends se{constructor(){var e,t,n,o;super(),this.wallet=(e=W.state.data)==null?void 0:e.wallet,this.connector=(t=W.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Ue.getWalletImage(this.wallet)??Ue.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=Ne.state.wcUri,this.error=Ne.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ne.subscribeKey("wcUri",r=>{var a;this.uri=r,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),Ne.subscribeKey("wcError",r=>this.error=r),Ne.subscribeKey("buffering",r=>this.buffering=r))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),_`
      <wui-flex
        data-error=${fe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${fe(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?_`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(Ne.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=ot.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return _`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(ie.copyToClopboard(this.uri),Pe.showSuccess("Link copied"))}catch{Pe.showError("Failed to copy")}}}Tt.styles=yg;rn([B()],Tt.prototype,"uri",void 0);rn([B()],Tt.prototype,"error",void 0);rn([B()],Tt.prototype,"ready",void 0);rn([B()],Tt.prototype,"showRetry",void 0);rn([B()],Tt.prototype,"buffering",void 0);rn([de({type:Boolean})],Tt.prototype,"isMobile",void 0);rn([de()],Tt.prototype,"onRetry",void 0);var xg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let bu=class extends Tt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&ct.setConnectedWalletImageUrl(this.connector.imageUrl),await Ne.connectExternal(this.connector),we.state.isSiweEnabled?W.push("ConnectingSiwe"):Ie.close(),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};bu=xg([D("w3m-connecting-external-view")],bu);var Cc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ya=class extends se{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=W.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Qt.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),_`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):_`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=Ne.state;if(e||ie.isPairingExpired(t)){if(Ne.connectWalletConnect(),this.wallet){const n=Ue.getWalletImage(this.wallet);n&&ct.setConnectedWalletImageUrl(n)}else{const o=je.state.connectors.find(a=>a.type==="WALLET_CONNECT"),r=Ue.getConnectorImage(o);r&&ct.setConnectedWalletImageUrl(r)}await Ne.state.wcPromise,this.finalizeConnection(),we.state.isSiweEnabled?W.push("ConnectingSiwe"):Ie.close()}}catch(t){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),Ne.setWcError(!0),ie.isAllowedRetry(this.lastRetry)&&(Pe.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var n;const{wcLinking:e,recentWallet:t}=Ne.state;e&&ct.setWalletConnectDeepLink(e),t&&ct.setWeb3ModalRecent(t),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((n=this.wallet)==null?void 0:n.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:o,rdns:r}=this.wallet,a=o==null?void 0:o.map(({injected_id:j})=>j).filter(Boolean),s=r?[r]:a??[],u=s.length,h=e,b=n,k=Ne.checkInstalled(s),N=u&&k,P=t&&!ie.isMobile();N&&this.platforms.push("browser"),h&&this.platforms.push(ie.isMobile()?"mobile":"qrcode"),b&&this.platforms.push("web"),P&&this.platforms.push("desktop"),!N&&u&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return _`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return _`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return _`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return _`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return _`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return _`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?_`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Cc([B()],Ya.prototype,"platform",void 0);Cc([B()],Ya.prototype,"platforms",void 0);Ya=Cc([D("w3m-connecting-wc-view")],Ya);var Cg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let yu=class extends se{constructor(){var e;super(...arguments),this.wallet=(e=W.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return _`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?_`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?_`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?_`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?_`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&ie.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&ie.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&ie.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&ie.openHref(this.wallet.homepage,"_blank")}};yu=Cg([D("w3m-downloads-view")],yu);var _g=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Eg="https://walletconnect.com/explorer";let xu=class extends se{render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{ie.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=me.state,{customWallets:n}=we.state;return[...t,...n??[],...e].slice(0,4).map(r=>_`
        <wui-list-wallet
          name=${r.name??"Unknown"}
          tagVariant="main"
          imageSrc=${fe(Ue.getWalletImage(r))}
          @click=${()=>{ie.openHref(r.homepage??Eg,"_blank")}}
        ></wui-list-wallet>
      `)}};xu=_g([D("w3m-get-wallet-view")],xu);const Ag=ye`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var _c=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let zo=class extends se{constructor(){var e;super(),this.network=(e=W.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return _`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${fe(Ue.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:_`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await le.switchActiveNetwork(this.network),we.state.isSiweEnabled||Hl.navigateAfterNetworkSwitch())}catch{this.error=!0}}};zo.styles=Ag;_c([B()],zo.prototype,"showRetry",void 0);_c([B()],zo.prototype,"error",void 0);zo=_c([D("w3m-network-switch-view")],zo);const $g=ye`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var K0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qa=class extends se{constructor(){super(),this.unsubscribe=[],this.caipNetwork=le.state.caipNetwork,this.unsubscribe.push(le.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){he.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),W.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:n}=le.state,o=ie.sortRequestedNetworks(e,t);return o==null?void 0:o.map(r=>{var a;return _`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===r.id}
          imageSrc=${fe(Ue.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${!n&&!(e!=null&&e.includes(r.id))}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:t}=oe.state,{approvedCaipNetworkIds:n,supportsAllNetworks:o,caipNetwork:r}=le.state,{data:a}=W.state;t&&(r==null?void 0:r.id)!==e.id?n!=null&&n.includes(e.id)?(await le.switchActiveNetwork(e),Hl.navigateAfterNetworkSwitch()):o&&W.push("SwitchNetwork",{...a,network:e}):t||(le.setCaipNetwork(e),W.push("Connect"))}};qa.styles=$g;K0([B()],qa.prototype,"caipNetwork",void 0);qa=K0([D("w3m-networks-view")],qa);const Sg=ye`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var oa=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Rg=7;let Hr=class extends se{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=De.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=gt.state.coinbaseTransactions,this.tokenImages=lt.state.tokenImages,this.unsubscribe.push(De.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),lt.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},gt.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),gt.clearCursor(),this.fetchTransactions()}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var s,u,h;const n=zl.formatDate((s=t==null?void 0:t.metadata)==null?void 0:s.minedAt),o=t.transfers[0],r=o==null?void 0:o.fungible_info;if(!r)return null;const a=((u=r==null?void 0:r.icon)==null?void 0:u.url)||((h=this.tokenImages)==null?void 0:h[r.symbol||""]);return _`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${fe(r.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${n}
          icon=${fe(a)}
          symbol=${fe(r.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const n=parseInt(t,10);return new Array(12).fill(null).map((r,a)=>a).reverse().map(r=>{var u;const a=$r.getTransactionGroupTitle(n,r),s=(u=this.coinbaseTransactions[n])==null?void 0:u[r];return s?_`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(s)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=oe.state.address,t=we.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await gt.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(r=>r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const r=oe.state.address;await gt.fetchTransactions(r,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Rg).fill(_` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};Hr.styles=Sg;oa([B()],Hr.prototype,"selectedOnRampProvider",void 0);oa([B()],Hr.prototype,"loading",void 0);oa([B()],Hr.prototype,"coinbaseTransactions",void 0);oa([B()],Hr.prototype,"tokenImages",void 0);Hr=oa([D("w3m-onramp-activity-view")],Hr);const Tg=ye`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Ts=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let jn=class extends se{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=De.state.paymentCurrency,this.currencies=De.state.paymentCurrencies,this.currencyImages=lt.state.currencyImages,this.unsubscribe.push(De.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),lt.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var t;return _`
        <wui-list-item
          imageSrc=${fe((t=this.currencyImages)==null?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(De.setPaymentCurrency(e),Ie.close())}};jn.styles=Tg;Ts([B()],jn.prototype,"selectedCurrency",void 0);Ts([B()],jn.prototype,"currencies",void 0);Ts([B()],jn.prototype,"currencyImages",void 0);jn=Ts([D("w3m-onramp-fiat-select-view")],jn);var J0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let kl=class extends se{constructor(){super(),this.unsubscribe=[],this.providers=De.state.providers,this.unsubscribe.push(De.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((n,o)=>({...n,url:t[o]||""}))})}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>_`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){De.setSelectedProvider(e),W.push("BuyInProgress"),ie.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=oe.state.address,t=le.state.caipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const n=Qt.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??Qt.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=De.state.purchaseCurrency,r=o?[o.symbol]:De.state.purchaseCurrencies.map(a=>a.symbol);return await kr.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:Qt.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:De.state.purchaseAmount})}};J0([B()],kl.prototype,"providers",void 0);kl=J0([D("w3m-onramp-providers-view")],kl);const kg=ye`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var ks=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Wn=class extends se{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=De.state.purchaseCurrencies,this.tokens=De.state.purchaseCurrencies,this.tokenImages=lt.state.tokenImages,this.unsubscribe.push(De.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),lt.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var t;return _`
        <wui-list-item
          imageSrc=${fe((t=this.tokenImages)==null?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(De.setPurchaseCurrency(e),Ie.close())}};Wn.styles=kg;ks([B()],Wn.prototype,"selectedCurrency",void 0);ks([B()],Wn.prototype,"tokens",void 0);ks([B()],Wn.prototype,"tokenImages",void 0);Wn=ks([D("w3m-onramp-token-select-view")],Wn);const Ig=ye`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Og=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Il=class extends se{render(){return _`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};Il.styles=Ig;Il=Og([D("w3m-transactions-view")],Il);var Ng=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Pg=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Cu=class extends se{render(){return _`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Pg}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{ie.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Cu=Ng([D("w3m-what-is-a-network-view")],Cu);var Mg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Lg=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let _u=class extends se{render(){return _`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Lg}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){he.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),W.push("GetWallet")}};_u=Mg([D("w3m-what-is-a-wallet-view")],_u);var Dg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Eu=class extends se{render(){return _`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${W.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Eu=Dg([D("w3m-what-is-a-buy-view")],Eu);const Bg=ye`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var Is=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Ug=6;let ji=class extends se{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=Ye.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=W.state.data)==null?void 0:e.email,this.emailConnector=je.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?_`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:_` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?_`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Ye.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Ye.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===Ug&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(n){this.error=ie.parseError(n),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!je.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Pe.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Pe.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};ji.styles=Bg;Is([B()],ji.prototype,"loading",void 0);Is([B()],ji.prototype,"timeoutTimeLeft",void 0);Is([B()],ji.prototype,"error",void 0);ji=Is([D("w3m-email-otp-widget")],ji);var Q0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ol=class extends ji{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=oe.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){const t=le.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await Ne.connectExternal(this.emailConnector),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?W.push("UpgradeToSmartAccount"):Ie.close()}}catch(t){throw he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(oe.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};Q0([B()],Ol.prototype,"smartAccountDeployed",void 0);Ol=Q0([D("w3m-email-verify-otp-view")],Ol);const jg=ye`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var X0=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ka=class extends se{constructor(){var e;super(),this.email=(e=W.state.data)==null?void 0:e.email,this.emailConnector=je.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),he.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),W.replace("EmailVerifyOtp",{email:this.email})}catch{W.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),Pe.showSuccess("Code email resent")}}catch(e){Pe.showError(e)}finally{this.loading=!1}}};Ka.styles=jg;X0([B()],Ka.prototype,"loading",void 0);Ka=X0([D("w3m-email-verify-device-view")],Ka);const Wg=ye`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var ed=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ja=class extends se{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ie.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const t=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const o=(t==null?void 0:t.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width="360px",this.iframe.style.height=`${o.height-10}px`,this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top=`${o.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),_`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){const e=je.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:ot.getSnapshot().themeVariables})}};Ja.styles=Wg;ed([B()],Ja.prototype,"ready",void 0);Ja=ed([D("w3m-approve-transaction-view")],Ja);var Fg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Au=class extends se{render(){return _`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Qt.SECURE_SITE_DASHBOARD}
          imageSrc=${Qt.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Au=Fg([D("w3m-upgrade-wallet-view")],Au);var Ec=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Qa=class extends se{constructor(){super(...arguments),this.emailConnector=je.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(ft.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect({preferredAccountType:ft.ACCOUNT_TYPES.SMART_ACCOUNT}),this.loading=!1,W.push("Account")}catch{Pe.showError("Error upgrading to smart account")}}}render(){return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return _` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return _`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){W.push("Account")}};Ec([B()],Qa.prototype,"emailConnector",void 0);Ec([B()],Qa.prototype,"loading",void 0);Qa=Ec([D("w3m-upgrade-to-smart-account-view")],Qa);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zg=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hg={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vg=i=>(...e)=>({_$litDirective$:i,values:e});class Zg{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=(i,e)=>{var n;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(n=o._$AO)==null||n.call(o,e,!1),co(o,e);return!0},Xa=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},td=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),qg(e)}};function Gg(i){this._$AN!==void 0?(Xa(this),this._$AM=i,td(this)):this._$AM=i}function Yg(i,e=!1,t=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let r=t;r<n.length;r++)co(n[r],!1),Xa(n[r]);else n!=null&&(co(n,!1),Xa(n));else co(this,i)}const qg=i=>{i.type==Hg.CHILD&&(i._$AP??(i._$AP=Yg),i._$AQ??(i._$AQ=Gg))};class Kg extends Zg{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),td(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),t&&(co(this,e),Xa(this))}setValue(e){if(zg(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=()=>new Jg;class Jg{}const ul=new WeakMap,ts=Vg(class extends Kg{render(i){return nt}update(i,[e]){var n;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=i.options)==null?void 0:n.host,this.rt(this.ct=i.element)),nt}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=ul.get(e);t===void 0&&(t=new WeakMap,ul.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=ul.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qg=ye`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Ac=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ho=class extends se{constructor(){var e;super(...arguments),this.formRef=es(),this.initialEmail=((e=W.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return _`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ts(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${W.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=je.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),he.sendEvent({type:"track",event:"EMAIL_EDIT"}),W.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){Pe.showError(t),this.loading=!1}}};Ho.styles=Qg;Ac([B()],Ho.prototype,"email",void 0);Ac([B()],Ho.prototype,"loading",void 0);Ho=Ac([D("w3m-update-email-wallet-view")],Ho);var Xg=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $u=class extends ji{constructor(){var e;super(),this.email=(e=W.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:t}),he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),W.replace("UpdateEmailSecondaryOtp",W.state.data))}catch(n){throw he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onStartOver=()=>{W.replace("UpdateEmailWallet",W.state.data)}}};$u=Xg([D("w3m-update-email-primary-otp-view")],$u);var em=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Su=class extends ji{constructor(){var e;super(),this.email=(e=W.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:t}),he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),W.reset("Account"))}catch(n){throw he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onStartOver=()=>{W.replace("UpdateEmailWallet",W.state.data)}}};Su=em([D("w3m-update-email-secondary-otp-view")],Su);const tm=ye`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var id=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let is=class extends se{constructor(){super(...arguments),this.disconecting=!1}render(){return _`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=le.state;return ie.sortRequestedNetworks(e,t).map(o=>_`
        <wui-list-network
          imageSrc=${fe(Ue.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await Ne.disconnect(),he.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{he.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Pe.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=oe.state,{approvedCaipNetworkIds:n,supportsAllNetworks:o,caipNetwork:r}=le.state,{data:a}=W.state;t&&(r==null?void 0:r.id)!==e.id?n!=null&&n.includes(e.id)?(await le.switchActiveNetwork(e),Hl.navigateAfterNetworkSwitch()):o&&W.push("SwitchNetwork",{...a,network:e}):t||(le.setCaipNetwork(e),W.push("Connect"))}};is.styles=tm;id([B()],is.prototype,"disconecting",void 0);is=id([D("w3m-unsupported-chain-view")],is);const im=ye`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Os=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Fn=class extends se{constructor(){super(),this.unsubscribe=[],this.address=oe.state.address,this.profileName=oe.state.profileName,this.network=le.state.caipNetwork,this.unsubscribe.push(oe.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):Pe.showError("Account not found")}),le.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=Ue.getNetworkImage(this.network);return _` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${Ce.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ot.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var s;const e=le.getRequestedCaipNetworks(),t=le.checkIfSmartAccountEnabled(),n=le.state.caipNetwork;if(Ye.getPreferredAccountType()===ft.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return n?_`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[Ue.getNetworkImage(n)??""]}
      ></wui-compatible-network>`:null;const a=((s=e==null?void 0:e.filter(u=>u==null?void 0:u.imageId))==null?void 0:s.slice(0,5)).map(Ue.getNetworkImage).filter(Boolean);return _`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${a}
    ></wui-compatible-network>`}onReceiveClick(){W.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(ie.copyToClopboard(this.address),Pe.showSuccess("Address copied"))}catch{Pe.showError("Failed to copy")}}};Fn.styles=im;Os([B()],Fn.prototype,"address",void 0);Os([B()],Fn.prototype,"profileName",void 0);Os([B()],Fn.prototype,"network",void 0);Fn=Os([D("w3m-wallet-receive-view")],Fn);const rm=ye`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var nm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Nl=class extends se{render(){return _` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:n}=le.state,o=le.checkIfSmartAccountEnabled(),r=Ye.getPreferredAccountType();let a=ie.sortRequestedNetworks(e,t);if(o&&r===ft.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;a=[n]}return a.map(s=>_`
        <wui-list-network
          imageSrc=${fe(Ue.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Nl.styles=rm;Nl=nm([D("w3m-wallet-compatible-networks-view")],Nl);const om=ye`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var aa=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vr=class extends se{constructor(){super(),this.unsubscribe=[],this.token=xt.state.token,this.sendTokenAmount=xt.state.sendTokenAmount,this.receiverAddress=xt.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(xt.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),_` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){W.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!ie.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};Vr.styles=om;aa([B()],Vr.prototype,"token",void 0);aa([B()],Vr.prototype,"sendTokenAmount",void 0);aa([B()],Vr.prototype,"receiverAddress",void 0);aa([B()],Vr.prototype,"message",void 0);Vr=aa([D("w3m-wallet-send-view")],Vr);const am=ye`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Ns=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let zn=class extends se{constructor(){super(),this.unsubscribe=[],this.tokenBalance=oe.state.tokenBalance,this.search="",this.onDebouncedSearch=ie.debounce(e=>{this.search=e}),this.unsubscribe.push(oe.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return _`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e;return this.search?this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens=this.tokenBalance,_`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(t=>_`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`):_`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){W.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){xt.setToken(e),xt.setTokenAmount(void 0),W.goBack()}};zn.styles=am;Ns([B()],zn.prototype,"tokenBalance",void 0);Ns([B()],zn.prototype,"tokens",void 0);Ns([B()],zn.prototype,"search",void 0);zn=Ns([D("w3m-wallet-send-select-token-view")],zn);const sm=ye`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var sa=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zr=class extends se{constructor(){super(),this.unsubscribe=[],this.token=xt.state.token,this.sendTokenAmount=xt.state.sendTokenAmount,this.receiverAddress=xt.state.receiverAddress,this.caipNetwork=le.state.caipNetwork,this.unsubscribe.push(xt.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),le.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t,n;return _` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number((e=this.token)==null?void 0:e.quantity.numeric).toFixed(2)} ${(t=this.token)==null?void 0:t.symbol}"
            .imageSrc=${(n=this.token)==null?void 0:n.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${Ce.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return _`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){W.reset("Account"),setTimeout(()=>{xt.resetSend()},200)}onCancelClick(){W.goBack()}};Zr.styles=sm;sa([B()],Zr.prototype,"token",void 0);sa([B()],Zr.prototype,"sendTokenAmount",void 0);sa([B()],Zr.prototype,"receiverAddress",void 0);sa([B()],Zr.prototype,"caipNetwork",void 0);Zr=sa([D("w3m-wallet-send-preview-view")],Zr);const lm=ye`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function rd(i){const{connectors:e}=je.state,t=e.filter(r=>r.type==="ANNOUNCED").reduce((r,a)=>{var s;return(s=a.info)!=null&&s.rdns&&(r[a.info.rdns]=!0),r},{});return i.map(r=>({...r,installed:!!r.rdns&&!!t[r.rdns??""]})).sort((r,a)=>Number(a.installed)-Number(r.installed))}var la=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Ru="local-paginator";let Gr=class extends se{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!me.state.wallets.length,this.wallets=me.state.wallets,this.recommended=me.state.recommended,this.featured=me.state.featured,this.unsubscribe.push(me.subscribeKey("wallets",e=>this.wallets=e),me.subscribeKey("recommended",e=>this.recommended=e),me.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return _`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await me.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>_`
        <wui-card-select-loader type="wallet" id=${fe(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return rd(e).map(n=>_`
        <wui-card-select
          imageSrc=${fe(Ue.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
          .installed=${n.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:o}=me.state,r=window.innerWidth<352?3:4,a=e.length+t.length;let u=Math.ceil(a/r)*r-a+r;return u-=e.length?n.length%r:0,o===0&&n.length>0?null:o===0||[...n,...e,...t].length<o?this.shimmerTemplate(u,Ru):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${Ru}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.initial){const{page:o,count:r,wallets:a}=me.state;a.length<r&&me.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=je.getConnector(e.id,e.rdns);t?W.push("ConnectingExternal",{connector:t}):W.push("ConnectingWalletConnect",{wallet:e})}};Gr.styles=lm;la([B()],Gr.prototype,"initial",void 0);la([B()],Gr.prototype,"wallets",void 0);la([B()],Gr.prototype,"recommended",void 0);la([B()],Gr.prototype,"featured",void 0);Gr=la([D("w3m-all-wallets-list")],Gr);const cm=ye`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var $c=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vo=class extends se{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?_`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await me.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=me.state,t=rd(e);return e.length?_`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>_`
            <wui-card-select
              imageSrc=${fe(Ue.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
              .installed=${n.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:_`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=je.getConnector(e.id,e.rdns);t?W.push("ConnectingExternal",{connector:t}):W.push("ConnectingWalletConnect",{wallet:e})}};Vo.styles=cm;$c([B()],Vo.prototype,"loading",void 0);$c([de()],Vo.prototype,"query",void 0);Vo=$c([D("w3m-all-wallets-search")],Vo);var Ps=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zo=class extends se{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ne.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return _`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var n;const t=this.platformTabs[e];t&&((n=this.onSelectPlatfrom)==null||n.call(this,t))}};Ps([de({type:Array})],Zo.prototype,"platforms",void 0);Ps([de()],Zo.prototype,"onSelectPlatfrom",void 0);Ps([B()],Zo.prototype,"buffering",void 0);Zo=Ps([D("w3m-connecting-header")],Zo);var um=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Tu=class extends Tt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=je.state,n=t.find(r=>{var a,s;return r.type==="ANNOUNCED"&&((a=r.info)==null?void 0:a.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),o=t.find(r=>r.type==="INJECTED");n?await Ne.connectExternal(n):o&&await Ne.connectExternal(o),Ie.close(),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Tu=um([D("w3m-connecting-wc-browser")],Tu);var dm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ku=class extends Tt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:n}=this.wallet,{redirect:o,href:r}=ie.formatNativeUrl(t,this.uri);Ne.setWcLinking({name:n,href:r}),Ne.setRecentWallet(this.wallet),ie.openHref(o,"_blank")}catch{this.error=!0}}};ku=dm([D("w3m-connecting-wc-desktop")],ku);var hm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Iu=class extends Tt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:n}=this.wallet,{redirect:o,href:r}=ie.formatNativeUrl(t,this.uri);Ne.setWcLinking({name:n,href:r}),Ne.setRecentWallet(this.wallet),ie.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=ie.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Ne.setBuffering(!0),setTimeout(()=>{Ne.setBuffering(!1)},5e3))}};Iu=hm([D("w3m-connecting-wc-mobile")],Iu);const pm=ye`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var fm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pl=class extends Tt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),_`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Ne.setWcLinking(void 0),Ne.setRecentWallet(this.wallet),_` <wui-qr-code
      size=${e}
      theme=${ot.state.themeMode}
      uri=${this.uri}
      imageSrc=${fe(Ue.getWalletImage(this.wallet))}
      alt=${fe(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return _`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Pl.styles=pm;Pl=fm([D("w3m-connecting-wc-qrcode")],Pl);var wm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ou=class extends se{constructor(){var e;if(super(),this.wallet=(e=W.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return _`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${fe(Ue.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ou=wm([D("w3m-connecting-wc-unsupported")],Ou);var gm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Nu=class extends Tt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:n}=this.wallet,{redirect:o,href:r}=ie.formatUniversalUrl(t,this.uri);Ne.setWcLinking({name:n,href:r}),Ne.setRecentWallet(this.wallet),ie.openHref(o,"_blank")}catch{this.error=!0}}};Nu=gm([D("w3m-connecting-wc-web")],Nu);const mm=ye`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-gray-glass-002);
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var $i=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zt=class extends se{constructor(){super(...arguments),this.detailsOpen=!1,this.slippageRate=.5}render(){return _`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${Ce.formatNumberToLocalString(this.toTokenConvertedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${Ce.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?_`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Network cost</wui-text>
                      <wui-text variant="small-400" color="fg-100">
                        $${Ce.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?_` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Price impact</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${Ce.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?_`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Max. slippage</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${Ce.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.sourceTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Provider fee</wui-text>
                      <wui-flex alignItems="center" justifyContent="center" class="free-badge">
                        <wui-text variant="micro-700" color="success-100">Free</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Zt.styles=[mm];$i([de()],Zt.prototype,"detailsOpen",void 0);$i([de()],Zt.prototype,"sourceTokenSymbol",void 0);$i([de()],Zt.prototype,"sourceTokenPrice",void 0);$i([de()],Zt.prototype,"toTokenSymbol",void 0);$i([de()],Zt.prototype,"toTokenConvertedAmount",void 0);$i([de()],Zt.prototype,"gasPriceInUSD",void 0);$i([de()],Zt.prototype,"priceImpact",void 0);$i([de()],Zt.prototype,"slippageRate",void 0);$i([de()],Zt.prototype,"maxSlippage",void 0);Zt=$i([D("w3m-convert-details")],Zt);const vm=ye`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-gray-glass-005);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-gray-glass-002);
  }

  :host wui-flex.focus .input_mask__border {
    fill: var(--wui-gray-glass-020);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-200);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .token-select-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-select-button:hover {
    background: var(--wui-gray-glass-005);
  }

  .token-select-button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-gray-glass-020);
  }

  .market-value {
    min-height: 18px;
  }
`;var ui=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const bm=5e-5;let Mt=class extends se{constructor(){super(...arguments),this.focused=!1,this.price=0,this.marketValue="$1.0345,00",this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=hl.bigNumber(e).isGreaterThan(0);return _`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        ${this.target==="sourceToken"?g1:w1}
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${this.marketValue}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){const t=["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"],n=e.key===",",o=e.key===".",r=e.key>="0"&&e.key<="9",a=this.value;!r&&!t.includes(e.key)&&!o&&!n&&e.preventDefault(),(n||o)&&(a!=null&&a.includes(".")||a!=null&&a.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value;t===","||t==="."?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){if(!this.token)return _` <wui-button
        class="swap-token-button"
        size="md"
        variant="accentBg"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;const e=this.token.logoURI?_`<wui-image src=${this.token.logoURI}></wui-image>`:_`
          <wui-icon-box
            size="sm"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="networkPlaceholder"
          ></wui-icon-box>
        `;return _`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <button
          size="sm"
          variant="shade"
          class="token-select-button"
          @click=${this.onSelectToken.bind(this)}
        >
          ${e}
          <wui-text variant="paragraph-600" color="fg-100">${this.token.symbol}</wui-text>
        </button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const e=hl.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(bm):!1;return _`
      ${t?_`<wui-text variant="small-400" color="fg-200">
            ${Ce.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?_` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:_` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){he.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"})}onBuyToken(){W.push("OnRampProviders")}};Mt.styles=[vm];ui([de()],Mt.prototype,"focused",void 0);ui([de()],Mt.prototype,"balance",void 0);ui([de()],Mt.prototype,"value",void 0);ui([de()],Mt.prototype,"price",void 0);ui([de()],Mt.prototype,"marketValue",void 0);ui([de()],Mt.prototype,"disabled",void 0);ui([de()],Mt.prototype,"target",void 0);ui([de()],Mt.prototype,"token",void 0);ui([de()],Mt.prototype,"onSetAmount",void 0);ui([de()],Mt.prototype,"onSetMaxValue",void 0);Mt=ui([D("w3m-convert-input")],Mt);const ym=ye`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ms=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};function Pu(){var a,s,u,h,b,k,N;const i=(s=(a=W.state.data)==null?void 0:a.connector)==null?void 0:s.name,e=(h=(u=W.state.data)==null?void 0:u.wallet)==null?void 0:h.name,t=(k=(b=W.state.data)==null?void 0:b.network)==null?void 0:k.name,n=e??i,o=je.getConnectors();return{Connect:`Connect ${o.length===1&&((N=o[0])==null?void 0:N.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let Hn=class extends se{constructor(){super(),this.unsubscribe=[],this.heading=Pu()[W.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(W.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Ne.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return _`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){he.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),W.push("WhatIsAWallet")}async onClose(){if(we.state.isSiweEnabled){const{SIWEController:e}=await hn(()=>import("./index--sifamuO.js"),[]);e.state.status!=="success"&&await Ne.disconnect()}Ie.close()}titleTemplate(){return _`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=W.state,t=e==="Connect",r=e==="ApproveTransaction"||e==="UpgradeToSmartAccount";return this.showBack&&!r?_`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:_`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?_`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-text");if(t){const o=Pu()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var n;const{history:e}=W.state,t=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){W.state.view==="ConnectingSiwe"?W.push("Connect"):W.goBack()}};Hn.styles=[ym];Ms([B()],Hn.prototype,"heading",void 0);Ms([B()],Hn.prototype,"buffering",void 0);Ms([B()],Hn.prototype,"showBack",void 0);Hn=Ms([D("w3m-header")],Hn);var nd=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ml=class extends se{constructor(){super(...arguments),this.data=[]}render(){return _`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>_`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>_`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};nd([de({type:Array})],Ml.prototype,"data",void 0);Ml=nd([D("w3m-help-widget")],Ml);const xm=ye`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var nn=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Wi=class extends se{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=lt.state.currencyImages,this.tokenImages=lt.state.tokenImages,this.unsubscribe.push(De.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),De.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),De.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),lt.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){De.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;const e=((n=this.selectedCurrency)==null?void 0:n.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return _` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?_` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Ie.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${fe(t)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:_`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Wi.styles=xm;nn([de({type:String})],Wi.prototype,"type",void 0);nn([de({type:Number})],Wi.prototype,"value",void 0);nn([B()],Wi.prototype,"currencies",void 0);nn([B()],Wi.prototype,"selectedCurrency",void 0);nn([B()],Wi.prototype,"currencyImages",void 0);nn([B()],Wi.prototype,"tokenImages",void 0);Wi=nn([D("w3m-swap-input")],Wi);const Cm=ye`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var _m=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ll=class extends se{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=we.state;return!e&&!t?null:_`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=we.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=we.state;return e?_`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=we.state;return e?_`<a href=${e}>Privacy Policy</a>`:null}};Ll.styles=[Cm];Ll=_m([D("w3m-legal-footer")],Ll);const Em=ye`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var od=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let rs=class extends se{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:o,homepage:r}=this.wallet,a=ie.isMobile(),s=ie.isIos(),u=ie.isAndroid(),h=[t,n,r,o].filter(Boolean).length>1,b=Ce.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!a?_`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${()=>W.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&r?_`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?_`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&u?_`
        <wui-cta-button
          label=${`Don't have ${b}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&ie.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&ie.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&ie.openHref(this.wallet.homepage,"_blank")}};rs.styles=[Em];od([de({type:Object})],rs.prototype,"wallet",void 0);rs=od([D("w3m-mobile-download-links")],rs);const Am=ye`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var $m=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Dl=class extends se{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=we.state;return!e&&!t?null:_`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return _` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){W.push("WhatIsABuy")}};Dl.styles=[Am];Dl=$m([D("w3m-onramp-providers-footer")],Dl);const Sm=ye`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ad=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Rm={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ns=class extends se{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Pe.state.open,this.unsubscribe.push(Pe.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=Pe.state,n=Rm[t];return _`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Pe.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ns.styles=Sm;ad([B()],ns.prototype,"open",void 0);ns=ad([D("w3m-snackbar")],ns);const Tm=ye`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var ca=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Yr=class extends se{constructor(){super(),this.unsubscribe=[],this.formRef=es(),this.connectors=je.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(je.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.length>1;return this.connectors.find(n=>n.type==="EMAIL")?_`
      <form ${ts(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?_`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?_`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?_`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=je.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:n}=await t.provider.connectEmail({email:this.email});he.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP"?(he.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),W.push("EmailVerifyOtp",{email:this.email})):n==="VERIFY_DEVICE"&&W.push("EmailVerifyDevice",{email:this.email})}catch(t){const n=ie.parseError(t);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":Pe.showError(t)}finally{this.loading=!1}}onFocusEvent(){he.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Yr.styles=Tm;ca([B()],Yr.prototype,"connectors",void 0);ca([B()],Yr.prototype,"email",void 0);ca([B()],Yr.prototype,"loading",void 0);ca([B()],Yr.prototype,"error",void 0);Yr=ca([D("w3m-email-login-widget")],Yr);const km=ye`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var mr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let xi=class extends se{constructor(){super(),this.unsubscribe=[],this.address=oe.state.address,this.profileImage=oe.state.profileImage,this.profileName=oe.state.profileName,this.network=le.state.caipNetwork,this.disconnecting=!1,this.balance=oe.state.balance,this.balanceSymbol=oe.state.balanceSymbol,this.unsubscribe.push(oe.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||Pe.showError("Account not found")}),le.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ue.getNetworkImage(this.network);return _`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${fe(this.address)}
          address=${fe(this.address)}
          imageSrc=${fe(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?Ce.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ce.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${ie.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${fe(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=we.state;return e?_`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=ct.getConnectedConnector(),t=je.getEmailConnector(),{origin:n}=location;return!t||e!=="EMAIL"||n.includes(Qt.SECURE_SITE)?null:_`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){W.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=oe.state;return e?_`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=ct.getConnectedConnector(),t=je.getEmailConnector();if(!t||e!=="EMAIL")return null;const n=t.provider.getEmail()??"";return _`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=le.state,t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:o})=>{var r;return o===((r=this.network)==null?void 0:r.id)});return t||!n}onCopyAddress(){try{this.address&&(ie.copyToClopboard(this.address),Pe.showSuccess("Address copied"))}catch{Pe.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(he.sendEvent({type:"track",event:"CLICK_NETWORKS"}),W.push("Networks"))}onTransactions(){he.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),W.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Ne.disconnect(),he.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{he.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Pe.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=oe.state;e&&ie.openHref(e,"_blank")}onGoToUpgradeView(){he.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),W.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){W.push("UpdateEmailWallet",{email:e})}};xi.styles=km;mr([B()],xi.prototype,"address",void 0);mr([B()],xi.prototype,"profileImage",void 0);mr([B()],xi.prototype,"profileName",void 0);mr([B()],xi.prototype,"network",void 0);mr([B()],xi.prototype,"disconnecting",void 0);mr([B()],xi.prototype,"balance",void 0);mr([B()],xi.prototype,"balanceSymbol",void 0);xi=mr([D("w3m-account-default-widget")],xi);const Im=ye`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,Om={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}]};var vr=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ci=class extends se{constructor(){super(),this.unsubscribe=[],this.address=oe.state.address,this.profileImage=oe.state.profileImage,this.profileName=oe.state.profileName,this.smartAccountDeployed=oe.state.smartAccountDeployed,this.network=le.state.caipNetwork,this.currentTab=oe.state.currentTab,this.tokenBalance=oe.state.tokenBalance,this.unsubscribe.push(oe.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed):Ie.close()}),le.subscribe(e=>{this.network=e.caipNetwork}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=Ue.getNetworkImage(this.network);return _`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${fe(this.address)}
        networkSrc=${fe(e)}
        icon="chevronBottom"
        avatarSrc=${fe(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${Om.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){return this.currentTab===0?_`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?_`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?_`<w3m-account-activity-widget></w3m-account-activity-widget>`:_`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=ie.calculateBalance(this.tokenBalance),{dollars:n="0",pennies:o="00"}=ie.formatTokenBalance(t);return _`<wui-balance dollars=${n} pennies=${o}></wui-balance>`}return _`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){const e=le.checkIfSmartAccountEnabled(),t=Ye.getPreferredAccountType();return!e||t===ft.ACCOUNT_TYPES.SMART_ACCOUNT||this.smartAccountDeployed?null:_` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){oe.setCurrentTab(e)}onProfileButtonClick(){W.push("AccountSettings")}onBuyClick(){W.push("OnRampProviders")}onReceiveClick(){W.push("WalletReceive")}onSendClick(){W.push("WalletSend")}onUpdateToSmartAccount(){W.push("UpgradeToSmartAccount")}};Ci.styles=Im;vr([B()],Ci.prototype,"address",void 0);vr([B()],Ci.prototype,"profileImage",void 0);vr([B()],Ci.prototype,"profileName",void 0);vr([B()],Ci.prototype,"smartAccountDeployed",void 0);vr([B()],Ci.prototype,"network",void 0);vr([B()],Ci.prototype,"currentTab",void 0);vr([B()],Ci.prototype,"tokenBalance",void 0);Ci=vr([D("w3m-account-wallet-features-widget")],Ci);const Nm=ye`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var Pm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Bl=class extends se{render(){return _`<w3m-activity-list page="account"></w3m-activity-list>`}};Bl.styles=Nm;Bl=Pm([D("w3m-account-activity-widget")],Bl);const Mm=ye`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Lm=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ul=class extends se{render(){return _`${this.nftTemplate()}`}nftTemplate(){return _` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){W.push("WalletReceive")}};Ul.styles=Mm;Ul=Lm([D("w3m-account-nfts-widget")],Ul);const Dm=ye`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var sd=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let os=class extends se{constructor(){super(),this.unsubscribe=[],this.tokenBalance=oe.state.tokenBalance,this.unsubscribe.push(oe.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){oe.fetchTokenBalance()}render(){return _`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?_`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:_` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>_`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){W.push("WalletReceive")}onBuyClick(){W.push("OnRampProviders")}};os.styles=Dm;sd([B()],os.prototype,"tokenBalance",void 0);os=sd([D("w3m-account-tokens-widget")],os);const Bm=ye`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var on=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const va="last-transaction",Um=7;let Fi=class extends se{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=oe.state.address,this.transactionsByYear=gt.state.transactionsByYear,this.loading=gt.state.loading,this.empty=gt.state.empty,this.next=gt.state.next,gt.clearCursor(),this.unsubscribe.push(oe.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,gt.resetTransactions(),gt.fetchTransactions(e.address))}),gt.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){gt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return _` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,n)=>{const o=n===e.length-1,r=parseInt(t,10);return new Array(12).fill(null).map((s,u)=>u).reverse().map(s=>{var b;const u=$r.getTransactionGroupTitle(r,s),h=(b=this.transactionsByYear[r])==null?void 0:b[s];return h?_`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${u}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(h,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:n,descriptions:o,direction:r,isAllNFT:a,images:s,status:u,transfers:h,type:b}=this.getTransactionListItemProps(e),k=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!a?_`
        <wui-transaction-list-item
          date=${n}
          .direction=${r}
          id=${t&&this.next?va:""}
          status=${u}
          type=${b}
          .images=${s}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:k?h.map((P,j)=>{const V=$r.getTransferDescription(P),K=t&&j===h.length-1;return _` <wui-transaction-list-item
          date=${n}
          direction=${P.direction}
          id=${K&&this.next?va:""}
          status=${u}
          type=${b}
          .onlyDirectionIcon=${!0}
          .images=${[s[j]]}
          .descriptions=${[V]}
        ></wui-transaction-list-item>`}):_`
      <wui-transaction-list-item
        date=${n}
        .direction=${r}
        id=${t&&this.next?va:""}
        status=${u}
        type=${b}
        .images=${s}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((n,o)=>{const r=t&&o===e.length-1;return _`${this.templateRenderTransaction(n,r)}`})}emptyStateActivity(){return _`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return _`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?_`${this.emptyStateAccount()}`:_`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(Um).fill(_` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){W.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=we.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(gt.fetchTransactions(this.address),he.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,n,o;(t=this.paginationObserver)==null||t.disconnect();const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${va}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var u,h,b,k,N;const t=zl.formatDate((u=e==null?void 0:e.metadata)==null?void 0:u.minedAt),n=$r.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,r=(h=e==null?void 0:e.transfers)==null?void 0:h[0],a=!!r&&((b=e==null?void 0:e.transfers)==null?void 0:b.every(P=>!!P.nft_info)),s=$r.getTransactionImages(o);return{date:t,direction:r==null?void 0:r.direction,descriptions:n,isAllNFT:a,images:s,status:(k=e.metadata)==null?void 0:k.status,transfers:o,type:(N=e.metadata)==null?void 0:N.operationType}}};Fi.styles=Bm;on([de()],Fi.prototype,"page",void 0);on([B()],Fi.prototype,"address",void 0);on([B()],Fi.prototype,"transactionsByYear",void 0);on([B()],Fi.prototype,"loading",void 0);on([B()],Fi.prototype,"empty",void 0);on([B()],Fi.prototype,"next",void 0);Fi=on([D("w3m-activity-list")],Fi);const jm=ye`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;var Sc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Go=class extends se{render(){return _` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?_`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:_`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){W.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return _`<wui-text variant="small-400" color="fg-200">$${t.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?_` <wui-text variant="small-400" color="error-100">
          ${Ce.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:_` <wui-text variant="small-400" color="fg-200">
        ${Ce.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?_`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:_`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){xt.setTokenAmount(e.detail)}onMaxClick(){var e;this.token&&xt.setTokenAmount(Number((e=this.token)==null?void 0:e.quantity.numeric))}onBuyClick(){W.push("OnRampProviders")}};Go.styles=jm;Sc([de({type:Object})],Go.prototype,"token",void 0);Sc([de({type:Number})],Go.prototype,"sendTokenAmount",void 0);Go=Sc([D("w3m-input-token")],Go);const Wm=ye`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var Rc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Yo=class extends se{constructor(){super(...arguments),this.inputElementRef=es(),this.instructionElementRef=es(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return _` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${ts(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${ts(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.receiverAddress&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){const e=await navigator.clipboard.readText();xt.setReceiverAddress(e)}onInputChange(e){const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),xt.setReceiverAddress(t.value)}};Yo.styles=Wm;Rc([de()],Yo.prototype,"receiverAddress",void 0);Rc([B()],Yo.prototype,"instructionHidden",void 0);Yo=Rc([D("w3m-input-address")],Yo);const Fm=ye`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var Tc=function(i,e,t,n){var o=arguments.length,r=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qo=class extends se{render(){return _` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${Ce.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?_` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${fe(Ue.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&W.push("Networks",{network:e})}};qo.styles=Fm;Tc([de()],qo.prototype,"receiverAddress",void 0);Tc([de({type:Object})],qo.prototype,"caipNetwork",void 0);qo=Tc([D("w3m-wallet-send-details")],qo);let Mu=!1;class zm{constructor(e){this.initPromise=void 0,this.setIsConnected=t=>{oe.setIsConnected(t)},this.getIsConnectedState=()=>oe.state.isConnected,this.setCaipAddress=t=>{oe.setCaipAddress(t)},this.setBalance=(t,n)=>{oe.setBalance(t,n)},this.setProfileName=t=>{oe.setProfileName(t)},this.setProfileImage=t=>{oe.setProfileImage(t)},this.resetAccount=()=>{oe.resetAccount()},this.setCaipNetwork=t=>{le.setCaipNetwork(t)},this.getCaipNetwork=()=>le.state.caipNetwork,this.setRequestedCaipNetworks=t=>{le.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>le.getApprovedCaipNetworksData(),this.resetNetwork=()=>{le.resetNetwork()},this.setConnectors=t=>{je.setConnectors(t)},this.addConnector=t=>{je.addConnector(t)},this.getConnectors=()=>je.getConnectors(),this.resetWcConnection=()=>{Ne.resetWcConnection()},this.fetchIdentity=t=>kr.fetchIdentity(t),this.setAddressExplorerUrl=t=>{oe.setAddressExplorerUrl(t)},this.setSmartAccountDeployed=t=>{oe.setSmartAccountDeployed(t)},this.setConnectedWalletInfo=t=>{oe.setConnectedWalletInfo(t)},this.setSmartAccountEnabledNetworks=t=>{le.setSmartAccountEnabledNetworks(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ie.open(e)}async close(){await this.initOrContinue(),Ie.close()}setLoading(e){Ie.setLoading(e)}getThemeMode(){return ot.state.themeMode}getThemeVariables(){return ot.state.themeVariables}setThemeMode(e){ot.setThemeMode(e),i0(ot.state.themeMode)}setThemeVariables(e){ot.setThemeVariables(e),v1(ot.state.themeVariables)}subscribeTheme(e){return ot.subscribe(e)}getWalletInfo(){return oe.state.connectedWalletInfo}subscribeWalletInfo(e){return oe.subscribeKey("connectedWalletInfo",e)}getState(){return Rr.state}subscribeState(e){return Rr.subscribe(e)}showErrorMessage(e){Pe.showError(e)}showSuccessMessage(e){Pe.showSuccess(e)}getEvent(){return{...he.state}}subscribeEvents(e){return he.subscribe(e)}async initControllers(e){if(le.setClient(e.networkControllerClient),le.setDefaultCaipNetwork(e.defaultChain),we.setProjectId(e.projectId),we.setAllWallets(e.allWallets),we.setIncludeWalletIds(e.includeWalletIds),we.setExcludeWalletIds(e.excludeWalletIds),we.setFeaturedWalletIds(e.featuredWalletIds),we.setTokens(e.tokens),we.setTermsConditionsUrl(e.termsConditionsUrl),we.setPrivacyPolicyUrl(e.privacyPolicyUrl),we.setCustomWallets(e.customWallets),we.setEnableAnalytics(e.enableAnalytics),we.setSdkVersion(e._sdkVersion),Ne.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:t}=await hn(()=>import("./index--sifamuO.js"),[]);t.setSIWEClient(e.siweControllerClient)}e.metadata&&we.setMetadata(e.metadata),e.themeMode&&ot.setThemeMode(e.themeMode),e.themeVariables&&ot.setThemeVariables(e.themeVariables),e.enableOnramp&&we.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&we.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&le.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!Mu&&ie.isClient()&&(Mu=!0,this.initPromise=new Promise(async e=>{await Promise.all([hn(()=>import("./index-CROCCfsZ.js"),[]),hn(()=>Promise.resolve().then(()=>X2),void 0)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}function Hm(i){if(i)return{id:`${be.EIP155}:${i.id}`,name:i.name,imageId:ki.EIP155NetworkImageIds[i.id]}}async function Vm(i){var r,a,s,u;if(!i)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(i==null?void 0:i.getProvider()),t=(a=(r=e==null?void 0:e.signer)==null?void 0:r.session)==null?void 0:a.namespaces,n=(s=t==null?void 0:t[be.EIP155])==null?void 0:s.methods,o=(u=t==null?void 0:t[be.EIP155])==null?void 0:u.chains;return{supportsAllNetworks:!!(n!=null&&n.includes(be.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:o}}function Zm(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:ki.WalletConnectRpcChainIds.map(i=>`${be.EIP155}:${i}`)}}function Gm({chainId:i,projectId:e}){const t=ie.getBlockchainApiUrl();return ki.WalletConnectRpcChainIds.includes(i)?Oc(`${t}/v1/?chainId=${be.EIP155}:${i}&projectId=${e}`):Oc()}class Ym extends zm{constructor(e){const{wagmiConfig:t,siweConfig:n,defaultChain:o,tokens:r,_sdkVersion:a,...s}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw new Error("web3modal:constructor - projectId is undefined");const u={switchCaipNetwork:async b=>{const k=Er.caipNetworkIdToNumber(b==null?void 0:b.id);k&&await yd(this.wagmiConfig,{chainId:k})},getApprovedCaipNetworksData:async()=>new Promise(b=>{var P,j;const N=new Map(t.state.connections).get(t.state.current||"");if(((P=N==null?void 0:N.connector)==null?void 0:P.id)===be.EMAIL_CONNECTOR_ID)b(Zm());else if(((j=N==null?void 0:N.connector)==null?void 0:j.id)===be.WALLET_CONNECT_CONNECTOR_ID){const V=t.connectors.find(K=>K.id===be.WALLET_CONNECT_CONNECTOR_ID);b(Vm(V))}b({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},h={connectWalletConnect:async b=>{var j;const k=t.connectors.find(V=>V.id===be.WALLET_CONNECT_CONNECTOR_ID);if(!k)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await k.getProvider()).on("display_uri",V=>{b(V)});const P=Er.caipNetworkIdToNumber((j=this.getCaipNetwork())==null?void 0:j.id);await Ic(this.wagmiConfig,{connector:k,chainId:P})},connectExternal:async({id:b,provider:k,info:N})=>{var V,K;const P=t.connectors.find(Z=>Z.id===b);if(!P)throw new Error("connectionControllerClient:connectExternal - connector is undefined");k&&N&&P.id===be.EIP6963_CONNECTOR_ID&&((V=P.setEip6963Wallet)==null||V.call(P,{provider:k,info:N}));const j=Er.caipNetworkIdToNumber((K=this.getCaipNetwork())==null?void 0:K.id);await Ic(this.wagmiConfig,{connector:P,chainId:j})},checkInstalled:b=>{const k=this.getConnectors().find(N=>N.type==="INJECTED");return b?k&&window!=null&&window.ethereum?b.some(N=>{var P;return!!((P=window.ethereum)!=null&&P[String(N)])}):!1:!!window.ethereum},disconnect:async()=>{await xd(this.wagmiConfig)},signMessage:async b=>Cd(this.wagmiConfig,{message:b})};super({networkControllerClient:u,connectionControllerClient:h,siweControllerClient:n,defaultChain:Hm(o),tokens:bg.getCaipTokens(r),_sdkVersion:a??`html-wagmi-${be.VERSION}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),this.initEmailConnectorListeners([...t.connectors]),wd(this.wagmiConfig,{onChange:b=>this.syncConnectors(b)}),gd(this.wagmiConfig,{onChange:b=>this.syncAccount({...b})})}getState(){const e=super.getState();return{...e,selectedNetworkId:Er.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:Er.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){const t=e==null?void 0:e.map(n=>{var o,r;return{id:`${be.EIP155}:${n.id}`,name:n.name,imageId:ki.EIP155NetworkImageIds[n.id],imageUrl:(r=(o=this.options)==null?void 0:o.chainImages)==null?void 0:r[n.id]}});this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:n,connector:o}){if(this.resetAccount(),this.syncNetwork(e,n,t),t&&e&&n){const r=`${be.EIP155}:${n}:${e}`;this.setIsConnected(t),this.setCaipAddress(r),await Promise.all([this.syncProfile(e,n),this.syncBalance(e,n),this.syncConnectedWalletInfo(o),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,t,n){var r,a,s,u;const o=this.wagmiConfig.chains.find(h=>h.id===t);if(o||t){const h=(o==null?void 0:o.name)??(t==null?void 0:t.toString()),b=Number((o==null?void 0:o.id)??t),k=`${be.EIP155}:${b}`;if(this.setCaipNetwork({id:k,name:h,imageId:ki.EIP155NetworkImageIds[b],imageUrl:(a=(r=this.options)==null?void 0:r.chainImages)==null?void 0:a[b]}),n&&e&&t){const N=`${be.EIP155}:${b}:${e}`;if(this.setCaipAddress(N),(u=(s=o==null?void 0:o.blockExplorers)==null?void 0:s.default)!=null&&u.url){const P=`${o.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(P)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,t),await this.syncBalance(e,t))}}}async syncProfile(e,t){try{const{name:n,avatar:o}=await this.fetchIdentity({address:e});this.setProfileName(n),this.setProfileImage(o)}catch{if(t===ju.id){const n=await md(this.wagmiConfig,{address:e,chainId:t});if(n){this.setProfileName(n);const o=await vd(this.wagmiConfig,{name:n,chainId:t});o&&this.setProfileImage(o)}}else this.setProfileName(null),this.setProfileImage(null)}}async syncBalance(e,t){var o,r,a;const n=this.wagmiConfig.chains.find(s=>s.id===t);if(n){const s=await bd(this.wagmiConfig,{address:e,chainId:n.id,token:(a=(r=(o=this.options)==null?void 0:o.tokens)==null?void 0:r[n.id])==null?void 0:a.address});this.setBalance(s.formatted,s.symbol);return}this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){var t;if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===be.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){const n=await e.getProvider();n.session&&this.setConnectedWalletInfo({...n.session.peer.metadata,name:n.session.peer.metadata.name,icon:(t=n.session.peer.metadata.icons)==null?void 0:t[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){const t=new Set,n=e.filter(s=>!t.has(s.id)&&t.add(s.id)),o=[],r=be.COINBASE_SDK_CONNECTOR_ID,a=n.find(s=>s.id===be.CONNECTOR_RDNS_MAP[be.COINBASE_CONNECTOR_ID]);n.forEach(({id:s,name:u,type:h,icon:b})=>{var P,j;a&&s===r||be.EMAIL_CONNECTOR_ID===s||o.push({id:s,explorerId:ki.ConnectorExplorerIds[s],imageUrl:((j=(P=this.options)==null?void 0:P.connectorImages)==null?void 0:j[s])??b,name:ki.ConnectorNamesMap[s]??u,imageId:ki.ConnectorImageIds[s],type:ki.ConnectorTypesMap[h]??"EXTERNAL",info:{rdns:s}})}),this.setConnectors(o),this.syncEmailConnector(n)}async syncEmailConnector(e){const t=e.find(({id:n})=>n===be.EMAIL_CONNECTOR_ID);if(t){const n=await t.getProvider();this.addConnector({id:be.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:n})}}async initEmailConnectorListeners(e){const t=e.find(({id:n})=>n===be.EMAIL_CONNECTOR_ID);t&&(await this.listenEmailConnector(t),await this.listenModal(t))}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const t=await e.getProvider(),n=t.getLoginEmailUsed();super.setLoading(n),n&&this.setIsConnected(!1),t.onRpcRequest(o=>{if(Ye.checkIfRequestExists(o))Ye.checkIfRequestIsAllowed(o)||super.open({view:"ApproveTransaction"});else{super.open();const r=Ye.getRequestMethod(o);console.error(ft.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:r}),setTimeout(()=>{this.showErrorMessage(ft.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),t.rejectRpcRequest()}}),t.onRpcResponse(()=>{super.close()}),t.onNotConnected(()=>{this.getIsConnectedState()||(this.setIsConnected(!1),super.setLoading(!1))}),t.onIsConnected(o=>{this.setIsConnected(!0),this.setSmartAccountDeployed(!!o.smartAccountDeployed),super.setLoading(!1)}),t.onGetSmartAccountEnabledNetworks(o=>{this.setSmartAccountEnabledNetworks(o)}),t.onSetPreferredAccount(({address:o})=>{var a;if(!o)return;const r=Er.caipNetworkIdToNumber((a=this.getCaipNetwork())==null?void 0:a.id);this.syncAccount({address:o,chainId:r,isConnected:!0,connector:e})})}}async listenModal(e){const t=await e.getProvider();this.subscribeState(n=>{n.open||t.rejectRpcRequest()})}}function qm(i){return _d(e=>({id:be.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(t={}){const n=await this.getProvider(),o=Ye.getPreferredAccountType(),[{address:r,chainId:a}]=await Promise.all([n.connect({chainId:t.chainId,preferredAccountType:o}),n.getSmartAccountEnabledNetworks()]);return{accounts:[r],account:r,chainId:a,chain:{id:a,unsuported:!1}}},async disconnect(){await(await this.getProvider()).disconnect()},async getAccounts(){const t=await this.getProvider(),n=Ye.getPreferredAccountType(),{address:o}=await t.connect({preferredAccountType:n});return e.emitter.emit("change",{accounts:[o]}),[o]},async getProvider(){return this.provider||(this.provider=new wg(i.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const t=await this.getProvider(),{chainId:n}=await t.getChainId();return n},async isAuthorized(){const t=await this.getProvider(),{isConnected:n}=await t.isConnected();return n},async switchChain({chainId:t}){try{const n=e.chains.find(r=>r.id===t);if(!n)throw new Nc(new Error("chain not found on connector."));return await(await this.getProvider()).switchNetwork(t),e.emitter.emit("change",{chainId:Bs(t)}),n}catch(n){throw n instanceof Error?new Nc(n):n}},onAccountsChanged(t){t.length===0?this.onDisconnect():e.emitter.emit("change",{accounts:t.map($d)})},onChainChanged(t){const n=Bs(t);e.emitter.emit("change",{chainId:n})},async onConnect(t){const n=Bs(t.chainId),o=await this.getAccounts();e.emitter.emit("connect",{accounts:o,chainId:n})},async onDisconnect(t){await(await this.getProvider()).disconnect()}}))}function Km({projectId:i,chains:e,metadata:t,enableInjected:n,enableCoinbase:o,enableEmail:r,enableWalletConnect:a,enableEIP6963:s,...u}){const h=[],b=e.map(N=>[N.id,Gm({chainId:N.id,projectId:i})]),k=Object.fromEntries(b);return a!==!1&&h.push(Sd({projectId:i,metadata:t,showQrModal:!1})),n!==!1&&h.push(Rd({shimDisconnect:!0})),o!==!1&&h.push(Td({appName:(t==null?void 0:t.name)??"Unknown",appLogoUrl:(t==null?void 0:t.icons[0])??"Unknown",enableMobileWalletLink:!0})),r===!0&&h.push(qm({chains:[...e],options:{projectId:i}})),Ed({chains:e,multiInjectedProviderDiscovery:s!==!1,transports:k,...u,connectors:h})}function Jm(i){return new Ym({...i,_sdkVersion:`html-wagmi-${be.VERSION}`})}const ld="YOUR_PROJECT_ID",Qm={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},Xm=[ju,Od],cd=Km({chains:Xm,projectId:ld,metadata:Qm,enableEmail:!0});Ad(cd);const e5=Jm({wagmiConfig:cd,projectId:ld,enableAnalytics:!0,enableOnramp:!0});console.log(e5);export{On as $,ri as A,Pr as B,ka as C,go as D,fi as E,mo as F,Vt as G,It as H,bl as I,Ot as J,bo as K,Ia as L,An as M,Nr as N,$n as O,Li as P,El as Q,Mr as R,wi as S,$r as T,Ce as U,xo as V,wl as W,vo as X,In as Y,rr as Z,Mi as _,v1 as a,Oi as a0,Nn as a1,Co as a2,Pn as a3,Lr as a4,nr as a5,_t as a6,gi as a7,Pa as a8,_o as a9,W as aA,Eo as aa,or as ab,ar as ac,Ao as ad,$o as ae,Di as af,mi as ag,Mn as ah,Dr as ai,Ct as aj,Rt as ak,Ma as al,oe as am,Er as an,le as ao,Ne as ap,Hl as aq,vt as ar,Gt as as,zt as at,gn as au,we as av,ct as aw,he as ax,Pe as ay,Ie as az,w1 as b,D as c,g1 as d,vn as e,bn as f,gl as g,po as h,m1 as i,Aa as j,yn as k,xn as l,fo as m,kt as n,$a as o,Cn as p,Ht as q,Sa as r,i0 as s,Ni as t,Pi as u,wo as v,_n as w,ml as x,Ra as y,En as z};
