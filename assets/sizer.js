var tags=new Array('div','td','tr','p','b','table','strong','emphasis','a','h1','h2','h3','pre','sub','sup','i','th','cp','ul','ol','li','dt','dd','input','textarea','font','span');var dY=new Array('10','12','16','20','24','30','40');var ey=new Array('0.7','0.9','1.0','1.5','2.0','2.5','3');var aB=2;var aj="px";if(L==null)L="bnw2";function di(){aB=parseInt(aw(L+"fontsize"));if(aB==null||isFinite(aB)==false)aB=2;aj=aw(L+"fontsizeunit");if(aj==null||aj=="")aj="px";aQ(aB,aj);};function cZ(){aB=2;aj="px";cs(0,aj);};function cs(eY,cv){var size=aB;size+=eY;if(size<0)size=0;if(size>6)size=6;aB=size;aq(L+"fontsize",size,90);aq(L+"fontsizeunit",cv,90);aQ(size,cv);};function aQ(size,cv){if(!document.getElementById)return;ew=document.getElementsByTagName('body')[0];for(i=0;i<tags.length;i++){cO=ew.getElementsByTagName(tags[i]);for(k=0;k<cO.length;k++)av(cO[k],size,cv)}};function av(ee,size,cv){ee.style.fontSize=(cv=='px')?dY[size]+cv:ey[size]+cv;} 