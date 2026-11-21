/* CleanProfit UK: optional, consent-gated GA4. No account or business data is sent. */
(function(){
'use strict';
const KEY='cp_analytics_consent_v1',ID='G-E2W52HT7GH';
let choice=null,loaded=false;
try{choice=localStorage.getItem(KEY)}catch(e){}
if(choice!=='accepted'&&choice!=='rejected')choice=null;
const style=document.createElement('style');
style.textContent='#cp-consent{position:fixed;bottom:16px;left:16px;right:16px;max-width:560px;z-index:2147483000;background:#fff;color:#17342e;border:1px solid #cbded3;border-radius:16px;padding:18px;box-shadow:0 10px 40px #17342e33;font:14px/1.5 system-ui,sans-serif}#cp-consent[hidden]{display:none}#cp-consent p{margin:7px 0 12px}#cp-consent a{color:#087b59}#cp-consent .cp-actions{display:flex;flex-wrap:wrap;gap:9px}#cp-consent button,.cp-cookie-settings{cursor:pointer;border:1px solid #087b59;border-radius:9px;padding:9px 14px;font:600 13px system-ui,sans-serif;background:white;color:#087b59}#cp-consent button.cp-accept{background:#087b59;color:#fff}.cp-cookie-settings{background:transparent;border:0;padding:2px;text-decoration:underline;color:inherit}@media(max-width:600px){#cp-consent{bottom:8px;left:8px;right:8px}}';
function safePath(){return location.origin+location.pathname}
function load(){
 if(loaded||choice!=='accepted')return;
 loaded=true;
 window.dataLayer=window.dataLayer||[];
 window.gtag=function(){window.dataLayer.push(arguments)};
 window.gtag('js',new Date());
 window.gtag('config',ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,anonymize_ip:true});
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ID);document.head.appendChild(script);
 window.gtag('event','page_view',{page_location:safePath(),page_title:document.title});
}
function clearGA(){
 for(const c of document.cookie.split(';')){
  const name=c.split('=')[0].trim();
  if(!/^_ga(?:_|$)/.test(name))continue;
  for(const domain of ['',location.hostname,'.'+location.hostname])document.cookie=name+'=;Max-Age=0;path=/;SameSite=Lax'+(domain?';domain='+domain:'');
 }
}
function save(next){
 const was=choice;choice=next;
 try{localStorage.setItem(KEY,next)}catch(e){}
 document.getElementById('cp-consent').hidden=true;
 if(next==='accepted')load();
 else if(was==='accepted'){clearGA();location.reload()}
}
function show(){document.getElementById('cp-consent').hidden=false}
window.cpAnalyticsEvent=function(name){
 if(choice!=='accepted'||!loaded)return;
 if(name==='sign_up')window.gtag('event','sign_up',{method:'email'});
};
window.cpOpenCookieSettings=show;
function init(){
 document.head.appendChild(style);
 const panel=document.createElement('aside');panel.id='cp-consent';panel.setAttribute('role','region');panel.setAttribute('aria-label','Analytics cookie choices');
 panel.innerHTML='<strong>Help us improve CleanProfit</strong><p>With your permission, we use Google Analytics to understand visits and improve our website. Optional analytics stays off unless you accept. <a href="/cookies.html">Cookie details</a> · <a href="/privacy.html">Privacy</a></p><div class="cp-actions"><button type="button" class="cp-accept" id="cp-accept">Accept analytics</button><button type="button" id="cp-reject">Reject analytics</button></div>';
 document.body.appendChild(panel);
 document.getElementById('cp-accept').addEventListener('click',()=>save('accepted'));
 document.getElementById('cp-reject').addEventListener('click',()=>save('rejected'));
 panel.hidden=choice!==null;
 const footer=document.querySelector('footer');
 if(footer){const btn=document.createElement('button');btn.type='button';btn.className='cp-cookie-settings';btn.textContent='Cookie preferences';btn.addEventListener('click',show);footer.appendChild(btn)}
 if(choice==='accepted')load();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();