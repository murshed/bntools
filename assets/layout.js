var eJ=(document.all?1:0);var n=0;var eU=0;var eL=0;var fd=0;var bx=0;var ai="";var al=false;var aG=1;var cx=2;var by=3;var cz=4;var aT=5;var ap=6;var at=7;var o=by;var eo=false;var am=false;var aa=false;var X="";var ab="";var cf=false;var cC=false;var cr={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"ৃ","A":"র্","d":"ি","D":"ী","s":"ু","S":"ূ","f":"া","F":"অ","g":"্","G":"।","h":"ব","H":"ভ","j":"ক","J":"খ","k":"ত","K":"থ","l":"দ","L":"ধ","z":"্র","Z":"্য","x":"ও","X":"ৗ","c":"ে","C":"ৈ","v":"র","V":"ল","b":"ন","B":"ণ","n":"স","N":"ষ","m":"ম","M":"শ","q":"ঙ","Q":"ং","w":"য","W":"য়","e":"ড","E":"ঢ","r":"প","R":"ফ","t":"ট","T":"ঠ","y":"চ","Y":"ছ","u":"জ","U":"ঝ","i":"হ","I":"ঞ","o":"গ","O":"ঘ","p":"ড়","P":"ঢ়","&":"ঁ","$":"৳","`":"\u200C","~":"\u200D","\\":"ৎ","|":"ঃ"};var aV={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"া","A":"আ","d":"ড","D":"দ","s":"স","S":"ষ","f":"ফ","F":"ঋ","g":"গ","G":"ঘ","h":"হ","H":"ঃ","j":"জ","J":"ঝ","k":"ক","K":"খ","l":"ল","L":"খ","z":"য","Z":"ত","x":"ক্স","X":"ঢ","c":"চ","C":"ছ","v":"ভ","V":"ঠ","b":"ব","B":"ই","n":"ন","N":"ণ","m":"ম","M":"গ","q":"য়","Q":"ছ","w":"ৃ","W":"ঋ","e":"ে","E":"এ","r":"র","R":"ড়","t":"ট","T":"ত","y":"য়","Y":"্য","u":"ু","U":"উ","i":"ি","I":"ই","o":"ো","O":"ও","p":"প","P":"চ","&":"্","$":"৳","+":"্",".":"।","`":"\u200C","~":"\u200D","\\":"॥","|":"।"};var bD={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","o":"অ","a":"আ","A":"আ","i":"ই","I":"ঈ","u":"উ","U":"ঊ","e":"এ","E":"এ","O":"ও","d":"দ","D":"ড","s":"স","S":"শ","f":"ফ","g":"গ","h":"হ","H":"হ","j":"জ","J":"য","k":"ক","K":"ক","l":"ল","L":"ল","z":"য","Z":"্য","c":"চ","v":"ভ","V":"ভ","b":"ব","n":"ন","N":"ণ","m":"ম","y":"য়","w":"্ব","r":"র","R":"ড়","t":"ত","T":"ট","y":"য়","Y":"য়","p":"প","$":"৳","+":"্",".":"।",":":"ঃ","^":"ঁ","`":"্"};var cl={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"ৃ","A":"র্","d":"ি","D":"ী","s":"ু","S":"ূ","f":"া","F":"অ","g":"্","G":"।","h":"ব","H":"ভ","j":"ক","J":"খ","k":"ত","K":"থ","l":"দ","L":"ধ","z":"্র","Z":"্য","x":"ো","X":"ৌ","c":"ে","C":"ৈ","v":"র","V":"ল","b":"ন","B":"ণ","n":"স","N":"ষ","m":"ম","M":"শ","q":"ঙ","Q":"ং","w":"য","W":"য়","e":"ড","E":"ঢ","r":"প","R":"ফ","t":"ট","T":"ঠ","y":"চ","Y":"ছ","u":"জ","U":"ঝ","i":"হ","I":"ঞ","o":"গ","O":"ঘ","p":"ড়","P":"ঢ়","&":"ঁ","$":"৳","`":"\u200C","~":"\u200D","^":"÷","*":"×","\\":"ৎ","|":"ঃ"};var cg={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"া","A":"অ","s":"স","S":"ষ","d":"ড","D":"ঢ","f":"ত","F":"থ","g":"গ","G":"ঘ","h":"হ","H":"ঃ","j":"জ","J":"ঝ","k":"ক","K":"খ","l":"ল","L":"ং","z":"য়","Z":"য","x":"শ","X":"ঢ়","c":"চ","C":"ছ","v":"আ","V":"ঋ","b":"ব","B":"ভ","n":"ন","N":"ণ","m":"ম","M":"ঙ","q":"দ","Q":"ধ","w":"ূ","W":"ঊ","e":"ী","E":"ঈ","r":"র","R":"ড়","t":"ট","T":"ঠ","y":"এ","Y":"ঐ","u":"ু","U":"উ","i":"ি","I":"ই","o":"ও","O":"ঔ","p":"প","P":"ফ","[":"ে","{":"ৈ","]":"ো","}":"ৌ","*":"ৎ","&":"ঞ","$":"৳","~":"\u200C","`":"\u200D","<":"ৃ",">":"ঁ",".":"।","/":"্","|":"॥"};var cd={"0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯","a":"আ","A":"অ","d":"দ","D":"ধ","s":"স","S":"শ","f":"া","F":"অ","g":"গ","G":"ঘ","h":"হ","H":"হ","j":"জ","J":"ঝ","k":"ক","K":"খ","l":"ল","L":"ল","z":"য","Z":"জ","x":"ষ","X":"ষ","c":"চ","C":"ছ","v":"র","V":"ল","b":"ব","B":"ভ","n":"ন","N":"ণ","m":"ম","M":"ম","q":"ঙ","Q":"ং","w":"্ব","W":"ঃ","e":"এ","E":"ঐ","r":"র","R":"র","t":"ত","T":"থ","y":"্য","Y":"য়","u":"উ","U":"ঊ","i":"ই","I":"ঈ","o":"ও","O":"ঔ","p":"প","P":"ফ",".":"।",":":"ঃ","~":"ঁ","$":"৳"};function bq(C){if(o==cx)return cr[C];else if(o==by)return cl[C];else if(o==cz)return cg[C];else if(o==aT)return aV[C];else if(o==ap){cC=dy(C);return bD[C];}else if(o==at){return cd[C];}return C;};function F(){bx=0;ai="";};function cS(g,f){if(bx==n||D(n)||f=="্র"||f=="্য"){var bh=ai.length;ai=ai+f;H(g,ai+bx,bh+bx.length);}else if(f=="র্"){var bh=ai.length;ai=f+ai;H(g,ai+bx,bh+bx.length);}else if(D(f)){ai=ai+f;ag(g,f);}else{ag(g,f);F();}};function cU(g){var bh=1;var eR="";var w="";var bW=true;var bJ="";g.focus();while(true){if(document.selection){aO=document.selection.createRange();if(g.value.length>=bh){aO.moveStart('character',-1*bh);}else{bJ="",bh--;aO.moveStart('character',-1*bh);break;}bJ=aO.text.charAt(0);}else if(g.selectionStart||g.selectionStart==0){var B=g.selectionStart-bh;var bM=g.selectionEnd;var scrollTop=g.scrollTop;if(B<0){bJ="",bh--;B=g.selectionStart-bh;break;}bJ=g.value.substring(B,B+1)}if(bh!=1&&ah(bJ))break;if(bh==1&&ah(bJ))eR=bJ;else if(Q(bJ)||bA(bJ)||cy(bJ))break;else if(v(bJ)){if(bW==true){w=bJ+w;bW=false;}else break;}else if(D(bJ)){w=bJ+w;bW=true;}bh++;}var line=bJ+"র্"+w+eR;if(document.selection){aO.text=line;aO.collapse(true);aO.select();}else if(g.selectionStart||g.selectionStart==0){g.value=g.value.substring(0,B)+line+g.value.substring(bM,g.value.length);g.focus();g.selectionStart=B+line.length;g.selectionEnd=B+line.length;g.scrollTop=scrollTop;}};function bd(g,eS,eQ){if(document.selection){g.focus();aO=document.selection.createRange();if(g.value.length>=1)aO.moveStart('character',-1);if(aO.text.charAt(0)=='ে')aO.text=eS;else aO.text=aO.text.charAt(0)+eQ;aO.collapse(true);aO.select();}else if(g.selectionStart||g.selectionStart==0){var B=g.selectionStart-1;var bM=g.selectionEnd;var scrollTop=g.scrollTop;var bJ;B=(B== -1?g.value.length:B);if(g.value.substring(B,B+1)=="ে")bJ=eS;else{B=B+1;bJ=eQ;}g.value=g.value.substring(0,B)+bJ+g.value.substring(bM,g.value.length);g.focus();g.selectionStart=B+bJ.length;g.selectionEnd=B+bJ.length;g.scrollTop=scrollTop;}};function aD(f){if(f=='হ'||f=='গ'||f=='ঘ'||f=='ণ'||f=='ঃ'||f=='ট'||f=='ো'||f=='ই'||f=='ি'||f=='উ'||f=='ু'||f=='র'||f=='ড়')return true;return false;};function aC(f){var r=f;if(n=='ক'&&f=='হ')r='খ';else if(n=='গ'&&f=='হ')r='ঘ';else if(n=='চ'&&f=='হ')r='চ';else if(n=='জ'&&f=='হ')r='ঝ';else if(n=='ট'&&f=='হ')r='ঠ';else if(n=='ড'&&f=='হ')r='ঢ';else if(n=='ত'&&f=='হ')r='থ';else if(n=='দ'&&f=='হ')r='ধ';else if(n=='প'&&f=='হ')r='ফ';else if(n=='ব'&&f=='হ')r='ভ';else if(n=='স'&&f=='হ')r='শ';else if(n=='ড়'&&f=='হ')r='ঢ়';else if(n=='ণ'&&f=='গ')r='ঙ';else if(n=='ন'&&f=='গ')r='ং';else if(n=='ণ'&&f=='ঘ')r='ঞ';else if(n=='ণ'&&f=='ণ')r='ঁ';else if(n=='ঃ'&&f=='ঃ')r='ঃ';else if(n=='ট'&&f=='ট')r='ৎ';else if(n=='া'&&f=='ো')r='অ';else if(n=='ি'&&f=='ি')r='ী';else if(n=='ই'&&f=='ই')r='ঈ';else if(n=='ু'&&f=='ু')r='ূ';else if(n=='উ'&&f=='উ')r='ঊ';else if(n=='ও'&&f=='ই')r='ঐ';else if(n=='ো'&&f=='ি')r='ৈ';else if(n=='ও'&&f=='উ')r='ঔ';else if(n=='ো'&&f=='ু')r='ৌ';else if(n=='ৃ'&&f=='র')r='ৃ';else if(n=='ঋ'&&f=='ড়')r='ঋ';return r;};function bo(f){if(f=='হ'||f=='`'||f=='~')return true;return false;};function bl(f){var r=f;if(n=='ক'&&f=='হ')r='খ';else if(n=='গ'&&f=='হ')r='ঘ';else if(n=='চ'&&f=='হ')r='চ';else if(n=='জ'&&f=='হ')r='ঝ';else if(n=='ট'&&f=='হ')r='ঠ';else if(n=='ড'&&f=='হ')r='ঢ';else if(n=='ত'&&f=='হ')r='থ';else if(n=='দ'&&f=='হ')r='ধ';else if(n=='প'&&f=='হ')r='ফ';else if(n=='ব'&&f=='হ')r='ভ';else if(n=='স'&&f=='হ')r='শ';else if(n=='ড়'&&f=='হ')r='ঢ়';else if(n=='ণ'&&f=='গ')r='ঙ';else if(n=='ন'&&f=='গ')r='ং';else if(n=='ণ'&&f=='ঘ')r='ঞ';else if(n=='ণ'&&f=='ণ')r='ঁ';else if(n=='ঃ'&&f=='ঃ')r='ঃ';else if(n=='ট'&&f=='ট')r='ৎ';else if(n=='া'&&f=='ো')r='অ';else if(n=='ি'&&f=='ি')r='ী';else if(n=='ই'&&f=='ই')r='ঈ';else if(n=='ু'&&f=='ু')r='ূ';else if(n=='উ'&&f=='উ')r='ঊ';else if(n=='ও'&&f=='ই')r='ঐ';else if(n=='ো'&&f=='ি')r='ৈ';else if(n=='ও'&&f=='উ')r='ঔ';else if(n=='ো'&&f=='ু')r='ৌ';else if(n=='ৃ'&&f=='র')r='ৃ';else if(n=='ঋ'&&f=='ড়')r='ঋ';return r;};function dy(C){if(C=='`'||C=='Y')return true;return false;};function cK(f){if(f=='ঃ'||f=='ো'||f=='ি'||f=='ু'||Q(f)||v(f))return true;return false;};function cn(et,dj){var r=dj;if((et=='ক'&&dj=='ক')||(et=='ক'&&dj=='খ'))r='\u09CD'+dj;return r;};function aX(C,f){var r=f;if(f!='হ'&&am==true)am=false;if(n=='ক'&&f=='হ')r='খ';else if(n=='গ'&&f=='হ')r='ঘ';else if(n=='চ'&&f=='হ'&&am==false){r='চ';am=true;}else if(n=='চ'&&f=='হ'&&am==true){r='ছ';am=false;}else if(n=='জ'&&f=='হ')r='ঝ';else if(n=='ট'&&f=='হ')r='ঠ';else if(n=='ড'&&f=='হ')r='ঢ';else if(n=='ত'&&f=='হ')r='থ';else if(n=='দ'&&f=='হ')r='ধ';else if(n=='প'&&f=='হ')r='ফ';else if(n=='ব'&&f=='হ')r='ভ';else if(n=='স'&&f=='হ')r='শ';else if(n=='শ'&&f=='হ')r='ষ';else if(n=='ড়'&&f=='হ')r='ঢ়';else if(n=='ণ'&&f=='গ')r='ঙ';else if(n=='ন'&&f=='গ')r='ং';else if(n=='ণ'&&f=='ঘ')r='ঞ';else if(n=='ঃ'&&f=='ঃ')r='ঃ';else if(n=='ট'&&f=='ট')r='ৎ';else if(n=='া'&&f=='ো')r='অ';else if(n=='ি'&&f=='ি')r='ী';else if(n=='ু'&&f=='ু')r='ূ';else if(n=='উ'&&f=='উ')r='ঊ';else if(n=='ও'&&f=='ই')r='ঐ';else if(n=='ো'&&f=='ি')r='ৈ';else if(n=='ও'&&f=='উ')r='ঔ';else if(n=='ো'&&f=='ু')r='ৌ';else if(n=='ৃ'&&f=='র')r='ৃ';else if(n=='ঋ'&&f=='ড়')r='ঋ';else if((n=='র'||n=='ড়')&&v(f))r=f;else if(f=='ঁ')r=f;else if(v(n)&&f=='অ'&&aa==false){aa=true;r=n;}else if(v(n)&&Q(f)&&aa==true){r=f;}else if(v(n)&&Q(f))r=bc(f);else if(v(n)&&v(f)&&aa==false)r='\u09CD'+f;else if((Q(n)||ah(n))&&f=='আ')r='য়া';else if(n==0&&f=='য়'&&cC==false){r='ইয়';}else if(n=='অ'&&f=='অ')r='উ';else if(n=='া'&&f=='অ')r='ও';else if(n=='এ'&&f=='এ')r='ঈ';else if(n=='ে'&&f=='এ')r='ী';else if(n=='ে'&&f=='অ')r='ও';else if(n=='ও'&&f=='ঈ')r='ঐ';else if(n=='ও'&&f=='ঊ')r='ঔ';if(f!='অ'&&f!='\u09CD'&&aa==true)aa=false;return r;};function bX(g,C,K,f){if(o==ap&&cf==true&&aK[X]!=null){bV=aK[X];H(g,"",ab.length);X="";ab="";F();for(i=0;i<bV.length;i++){C=bV.charAt(i);K=bV.charCodeAt(i);f=bq(C);bX(g,C,K,f);eL=C;}return;}if(n==0&&f=="্য"){H(g,g.value.charAt(g.value.length-1)+"‌্য",1);F();return;}if(aJ(f))F();if(bA(f))F();if(n=='অ'&&f=='া'){H(g,"আ",1);F();}else if(o!=ap&&D(n)&&ah(f)){H(g,cJ(f),1);F();}else if(D(n)&&f=='।'){H(g,'॥',1);F();}else if(o!=by&&aF(n)&&aJ(f)==true){H(g,f+n,1);F();}else if(o!=by&&aF(n)&&bS(f)){H(g,f+n,1);F();}else if(o==cx&&ao(bx))cS(g,f);else if(o==aT&&aD(f)&&cy(n)==false){var r=aC(f);if(r!=f){f=r;H(g,f,1);F();}else ag(g,f);}else if(o==at&&bo(f)&&cy(n)==false){var r=bl(f);if(r!=f){f=r;H(g,f,1);F();}else ag(g,f);}else if(o==ap){var r=aX(C,f);if(r!=f){if(v(n)&&f=='হ'){H(g,r,1);}else if(v(n)&&v(f)){ag(g,r);}else if(ah(n)&&Q(f)){ag(g,r);}else if(r==bc(f)){ag(g,r);}else{H(g,r,1);}f=r.charAt(r.length-1);F();}else if(D(n)&&Q(f)){H(g,f,1);}else if(Q(n)&&D(f)){H(g,bc(n),1);}else ag(g,f);}else if(f=="র্")cU(g);else if(o!=by&&f=='া')bd(g,'ো','া');else if(o!=by&&f=='ৗ')bd(g,'ৌ','ৗ');else if(K>29){ag(g,f);}else if(K==13&&eJ){ag(g,f);}if((D(n)==false&&ao(f)))bx=f;if(!(aF(n)&&bS(f))){n=f;}};function dn(ev){var g;if(eJ)g=ev.srcElement;else g=ev.target;var K=(window.event)?event.keyCode:ev.which;var C=String.fromCharCode(K);if(K==27){al= !al;A();}if((K>=8&&K<=13)||K==27||K==32||K==46||(K>=37&&K<=40)){n=0;F();am=false;aa=false;X="";ab="";}if(ev.altKey&&ev.ctrlKey&&(C=='E'||C=='e')){o=aG;A();}else if(ev.altKey&&ev.ctrlKey&&(C=='B'||C=='b')){o=(o==cx?aG:cx);A();}else if(ev.altKey&&ev.ctrlKey&&(C=='U'||C=='u')){o=(o==by?aG:by);A();}else if(ev.altKey&&ev.ctrlKey&&(C=='V'||C=='v')){o=(o==cz?aG:cz);A();}else if(ev.altKey&&ev.ctrlKey&&(C=='P'||C=='p')){o=(o==aT?aG:aT);A();}else if(ev.altKey&&ev.ctrlKey&&(C=='A'||C=='a')){o=(o==ap?aG:ap);A();}else if(ev.altKey&&ev.ctrlKey&&(C=='O'||C=='o')){o=(o==at?aG:at);A();}if(K==27)return false;return true;};function dg(ev){var g;if(eJ)g=ev.srcElement;else g=ev.target;var K=(window.event)?event.keyCode:ev.which;var C=String.fromCharCode(K);if(ev.altKey&&ev.ctrlKey&&(C=='E'||C=='e'))return false;else if(ev.altKey&&ev.ctrlKey&&(C=='B'||C=='b'))return false;else if(ev.altKey&&ev.ctrlKey&&(C=='P'||C=='p'))return false;else if(ev.altKey&&ev.ctrlKey&&(C=='A'||C=='a'))return false;else if(ev.altKey&&ev.ctrlKey&&(C=='U'||C=='u'))return false;else if(ev.altKey&&ev.ctrlKey&&(C=='V'||C=='v'))return false;else if(ev.altKey&&ev.ctrlKey&&(C=='O'||C=='o'))return false;else if(ev.ctrlKey||ev.altKey)return true;if(o==aG||al==true){return true;}var f="";f=bq(C);if(f==null)return true;X=X+C;var cc=document.getElementById("bw");if(cc!=null){if(aA!=null)cc.innerHTML=aA["bw"]+" "+X+" ("+eL+" - "+C+" => "+n+" - "+f+")";else cc.innerHTML="যে চাবি টেপা হয়েছে - "+X+"("+eL+" - "+C+")";}bX(g,C,K,f);if(eJ)event.keyCode=0;eL=C;if(K>29)return false;return true;} 