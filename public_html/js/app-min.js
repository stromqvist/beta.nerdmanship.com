function makeBg(t,e,n){var i=t,u=e,a=n,o=Math.pow(a,2),s=a,l=i+u,c=a*i+(a-1)*u,r=c,_=document.createElementNS("http://www.w3.org/2000/svg","svg");headerBackground.appendChild(_),_.setAttribute("id","bgSVG"),_.setAttribute("xmlns","http://www.w3.org/2000/svg"),_.setAttribute("xlinkns","http://www.w3.org/1999/xlink"),_.setAttribute("width","200%"),_.setAttribute("viewBox","0 0 "+c+" "+r);for(var p=0;o>p;p++){var d=document.createElementNS("http://www.w3.org/2000/svg","rect");_.appendChild(d),d.setAttribute("width",i),d.setAttribute("height",i),d.setAttribute("class","rectangle rectangle"+p),d.setAttribute("data-rect-id",p),d.setAttribute("fill","hsla(200, 40%, "+random(10,15)+"% , 1)"),s>p&&(d.setAttribute("x",l*(p-(s-a))),d.setAttribute("y",l*(s/a-1)),p+1==s&&(s+=a))}}function makeBgTls(t){rects=Array.from(bgRects),rects.reduce(function(t,e){var n=new TimelineMax;return n.from(e,random(2,4),{scale:.3,autoAlpha:0}),t.add(n,random(0,1))},t)}function center(){TweenMax.set(bgSVG,{x:"-50%",y:"-50%"}),TweenMax.set(nerdmanship,{x:"-50%",y:"-50%"}),TweenMax.set(".controllerContainer",{x:"-50%",y:"-50%"})}function random(t,e){return null==e&&(e=t,t=0),Math.random()*(e-t)+t}function chanceRoll(t){return null==t&&(t=50),t>0&&100*Math.random()<=t}function focusHandle(){TweenMax.to(circle1,.1,{scale:1.2})}function blurHandle(){TweenMax.to(circle1,.1,{scale:1})}function showScrubber(){if(!showing){var t=new TimelineMax;t.to("#scrubbSVG",1.5,{autoAlpha:1}).to(".circle1",.5,{scale:1,delay:1.3,ease:Power3.easeOut}),showing=!0,setTimeout(startPulse,2e3)}}function startPulse(){tlPulse=new TimelineMax({repeat:-1,delay:2}),TweenMax.set(pulseCircs,{transformOrigin:"center",autoAlpha:0}),tlPulse.to(circle2,2,{bezier:[{autoAlpha:0},{autoAlpha:.2},{autoAlpha:.8},{autoAlpha:0}],ease:Power3.easeOut},.3).to(circle2,2,{scale:3.3},.3).to(circle3,2,{bezier:[{autoAlpha:0},{autoAlpha:.2},{autoAlpha:.5},{autoAlpha:0}],ease:Power3.easeOut},0).to(circle3,2,{scale:3},0)}function killPulse(){TweenMax.to(pulseCircs,.2,{autoAlpha:0}),tlPulse.kill()}function scrollGlow(){haveScrolled||setTimeout(function(){tlScroll.to(glowDiv,1.2,{autoAlpha:.5}).to(glowDiv,1.2,{width:"70%",autoAlpha:1,repeat:-1,yoyo:!0,ease:Power1.easeIn})},5e3)}function killScrollGlow(){TweenMax.to(glowDiv,.5,{autoAlpha:0}),setTimeout(function(){tlScroll.kill()},600)}function updateSlider(){$("#productionSlider").slider("value",100*tl.progress()),$("#discoverySlider").slider("value",100*tl.progress()),TweenMax.set(scrubbProgress,{drawSVG:100*tl.progress()+"%"}),TweenMax.set(sliderHandle,{left:100*tl.progress()+"%"})}function makeFlickerTl(t){logoLetters=Array.from(chars),logoLetters.reduce(function(t,e){var n=new TimelineMax;return n.to(e,flicDur,{fill:logoMid,ease:RoughEase.ease.config(configObj)},0,0),t.add(n,0)},t)}$("#sliderHandle").draggable();var select=function(t){return document.querySelector(t)},selectAll=function(t){return document.querySelectorAll(t)},tl=new TimelineMax({onUpdate:updateSlider,onComplete:scrollGlow}),tlStart=new TimelineMax,tlAnimIn=new TimelineMax,tlFlicker=new TimelineMax,tlViewBox=new TimelineMax,tlFinish=new TimelineMax,tlText=new TimelineMax,tlScrubber=new TimelineMax,tlGlow=new TimelineMax,tlScroll=new TimelineMax,tl_N=new TimelineMax,tl_E=new TimelineMax,tl_R=new TimelineMax,tl_D=new TimelineMax,tl_M=new TimelineMax,tl_A=new TimelineMax,tl_N2=new TimelineMax,tl_S=new TimelineMax,tl_H=new TimelineMax,tl_I=new TimelineMax,tl_P=new TimelineMax,nerdmanship=select("#nerdmanship"),kineticType=select(".kineticType"),headerBackground=select(".headerBackground"),glowContainer=select(".glowContainer"),scrubbSVG=select("#scrubbSVG"),scrubbProgress=select("#scrubbProgress"),scrubbRail=select("#scrubbRail"),circle1=select(".circle1"),circle2=select(".circle2"),circle3=select(".circle3"),circle4=select(".circle4"),pulseCircs=[circle2,circle3],units=selectAll(".unit"),chars=selectAll(".chars"),charGroup=select("#charGroup"),glowDiv=select(".glowDiv"),theN=select("#n"),theE=select("#e"),theR=select("#r"),theD=select("#d"),theM=select("#m"),theA=select("#a"),theN2=select("#n2"),theS=select("#s"),theH=select("#h"),theI=select("#i"),theP=select("#p"),unit_N1=select("#n .unit1"),unit_N2=select("#n .unit2"),unit_N3=select("#n .unit3"),unit_N4=select("#n .unit4"),unit_N5=select("#n .unit5"),unit_N6=select("#n .unit6"),unit_N7=select("#n .unit7"),unit_N8=select("#n .unit8"),unit_N9=select("#n .unit9"),unit_N10=select("#n .unit10"),unit_N11=select("#n .unit11"),unit_N12=select("#n .unit12"),unit_N13=select("#n .unit13"),unit_N14=select("#n .unit14"),unit_N15=select("#n .unit15"),unit_N16=select("#n .unit16"),unit_N17=select("#n .unit17"),unit_N18=select("#n .unit18"),unit_N19=select("#n .unit19"),unit_N20=select("#n .unit20"),unit_N21=select("#n .unit21"),unit_N22=select("#n .unit22"),unit_N23=select("#n .unit23"),unit_N24=select("#n .unit24"),unit_N25=select("#n .unit25"),unit_N26=select("#n .unit26"),unit_N27=select("#n .unit27"),unit_N28=select("#n .unit28"),unit_N29=select("#n .unit29"),unit_N30=select("#n .unit30"),unit_N31=select("#n .unit31"),unit_N32=select("#n .unit32"),unit_N33=select("#n .unit33"),unit_N34=select("#n .unit34"),unit_N35=select("#n .unit35"),unit_N36=select("#n .unit36"),unit_N37=select("#n .unit37"),unit_N38=select("#n .unit38"),unit_N39=select("#n .unit39"),unit_N40=select("#n .unit40");unit_E1=select("#e .unit1"),unit_E2=select("#e .unit2"),unit_E3=select("#e .unit3"),unit_E4=select("#e .unit4"),unit_E5=select("#e .unit5"),unit_E6=select("#e .unit6"),unit_E7=select("#e .unit7"),unit_E8=select("#e .unit8"),unit_E9=select("#e .unit9"),unit_E10=select("#e .unit10"),unit_E11=select("#e .unit11"),unit_E12=select("#e .unit12"),unit_E13=select("#e .unit13"),unit_E14=select("#e .unit14"),unit_E15=select("#e .unit15"),unit_E16=select("#e .unit16"),unit_E17=select("#e .unit17"),unit_E18=select("#e .unit18"),unit_E19=select("#e .unit19"),unit_E20=select("#e .unit20"),unit_E21=select("#e .unit21"),unit_E22=select("#e .unit22"),unit_E23=select("#e .unit23"),unit_E24=select("#e .unit24"),unit_E25=select("#e .unit25"),unit_E26=select("#e .unit26"),unit_E27=select("#e .unit27"),unit_E28=select("#e .unit28"),unit_E29=select("#e .unit29"),unit_E30=select("#e .unit30"),unit_E31=select("#e .unit31"),unit_E32=select("#e .unit32"),unit_E33=select("#e .unit33"),unit_E34=select("#e .unit34"),unit_E35=select("#e .unit35"),unit_E36=select("#e .unit36"),unit_E37=select("#e .unit37"),unit_E38=select("#e .unit38"),unit_E39=select("#e .unit39"),unit_E40=select("#e .unit40"),unit_R1=select("#r .unit1"),unit_R2=select("#r .unit2"),unit_R3=select("#r .unit3"),unit_R4=select("#r .unit4"),unit_R5=select("#r .unit5"),unit_R6=select("#r .unit6"),unit_R7=select("#r .unit7"),unit_R8=select("#r .unit8"),unit_R9=select("#r .unit9"),unit_R10=select("#r .unit10"),unit_R11=select("#r .unit11"),unit_R12=select("#r .unit12"),unit_R13=select("#r .unit13"),unit_R14=select("#r .unit14"),unit_R15=select("#r .unit15"),unit_R16=select("#r .unit16"),unit_R17=select("#r .unit17"),unit_R18=select("#r .unit18"),unit_R19=select("#r .unit19"),unit_R20=select("#r .unit20"),unit_R21=select("#r .unit21"),unit_R22=select("#r .unit22"),unit_R23=select("#r .unit23"),unit_R24=select("#r .unit24"),unit_R25=select("#r .unit25"),unit_R26=select("#r .unit26"),unit_R27=select("#r .unit27"),unit_R28=select("#r .unit28"),unit_R29=select("#r .unit29"),unit_R30=select("#r .unit30"),unit_R31=select("#r .unit31"),unit_R32=select("#r .unit32"),unit_R33=select("#r .unit33"),unit_R34=select("#r .unit34"),unit_R35=select("#r .unit35"),unit_R36=select("#r .unit36"),unit_R37=select("#r .unit37"),unit_R38=select("#r .unit38"),unit_R39=select("#r .unit39"),unit_R40=select("#r .unit40"),unit_D1=select("#d .unit1"),unit_D2=select("#d .unit2"),unit_D3=select("#d .unit3"),unit_D4=select("#d .unit4"),unit_D5=select("#d .unit5"),unit_D6=select("#d .unit6"),unit_D7=select("#d .unit7"),unit_D8=select("#d .unit8"),unit_D9=select("#d .unit9"),unit_D10=select("#d .unit10"),unit_D11=select("#d .unit11"),unit_D12=select("#d .unit12"),unit_D13=select("#d .unit13"),unit_D14=select("#d .unit14"),unit_D15=select("#d .unit15"),unit_D16=select("#d .unit16"),unit_D17=select("#d .unit17"),unit_D18=select("#d .unit18"),unit_D19=select("#d .unit19"),unit_D20=select("#d .unit20"),unit_D21=select("#d .unit21"),unit_D22=select("#d .unit22"),unit_D23=select("#d .unit23"),unit_D24=select("#d .unit24"),unit_D25=select("#d .unit25"),unit_D26=select("#d .unit26"),unit_D27=select("#d .unit27"),unit_D28=select("#d .unit28"),unit_D29=select("#d .unit29"),unit_D30=select("#d .unit30"),unit_D31=select("#d .unit31"),unit_D32=select("#d .unit32"),unit_D33=select("#d .unit33"),unit_D34=select("#d .unit34"),unit_D35=select("#d .unit35"),unit_D36=select("#d .unit36"),unit_D37=select("#d .unit37"),unit_D38=select("#d .unit38"),unit_D39=select("#d .unit39"),unit_D40=select("#d .unit40"),unit_M1=select("#m .unit1"),unit_M2=select("#m .unit2"),unit_M3=select("#m .unit3"),unit_M4=select("#m .unit4"),unit_M5=select("#m .unit5"),unit_M6=select("#m .unit6"),unit_M7=select("#m .unit7"),unit_M8=select("#m .unit8"),unit_M9=select("#m .unit9"),unit_M10=select("#m .unit10"),unit_M11=select("#m .unit11"),unit_M12=select("#m .unit12"),unit_M13=select("#m .unit13"),unit_M14=select("#m .unit14"),unit_M15=select("#m .unit15"),unit_M16=select("#m .unit16"),unit_M17=select("#m .unit17"),unit_M18=select("#m .unit18"),unit_M19=select("#m .unit19"),unit_M20=select("#m .unit20"),unit_M21=select("#m .unit21"),unit_M22=select("#m .unit22"),unit_M23=select("#m .unit23"),unit_M24=select("#m .unit24"),unit_M25=select("#m .unit25"),unit_M26=select("#m .unit26"),unit_M27=select("#m .unit27"),unit_M28=select("#m .unit28"),unit_M29=select("#m .unit29"),unit_M30=select("#m .unit30"),unit_M31=select("#m .unit31"),unit_M32=select("#m .unit32"),unit_M33=select("#m .unit33"),unit_M34=select("#m .unit34"),unit_M35=select("#m .unit35"),unit_M36=select("#m .unit36"),unit_M37=select("#m .unit37"),unit_M38=select("#m .unit38"),unit_M39=select("#m .unit39"),unit_M40=select("#m .unit40"),unit_A1=select("#a .unit1"),unit_A2=select("#a .unit2"),unit_A3=select("#a .unit3"),unit_A4=select("#a .unit4"),unit_A5=select("#a .unit5"),unit_A6=select("#a .unit6"),unit_A7=select("#a .unit7"),unit_A8=select("#a .unit8"),unit_A9=select("#a .unit9"),unit_A10=select("#a .unit10"),unit_A11=select("#a .unit11"),unit_A12=select("#a .unit12"),unit_A13=select("#a .unit13"),unit_A14=select("#a .unit14"),unit_A15=select("#a .unit15"),unit_A16=select("#a .unit16"),unit_A17=select("#a .unit17"),unit_A18=select("#a .unit18"),unit_A19=select("#a .unit19"),unit_A20=select("#a .unit20"),unit_A21=select("#a .unit21"),unit_A22=select("#a .unit22"),unit_A23=select("#a .unit23"),unit_A24=select("#a .unit24"),unit_A25=select("#a .unit25"),unit_A26=select("#a .unit26"),unit_A27=select("#a .unit27"),unit_A28=select("#a .unit28"),unit_A29=select("#a .unit29"),unit_A30=select("#a .unit30"),unit_A31=select("#a .unit31"),unit_A32=select("#a .unit32"),unit_A33=select("#a .unit33"),unit_A34=select("#a .unit34"),unit_A35=select("#a .unit35"),unit_A36=select("#a .unit36"),unit_A37=select("#a .unit37"),unit_A38=select("#a .unit38"),unit_A39=select("#a .unit39"),unit_A40=select("#a .unit40"),unit_N2_1=select("#n2 .unit1"),unit_N2_2=select("#n2 .unit2"),unit_N2_3=select("#n2 .unit3"),unit_N2_4=select("#n2 .unit4"),unit_N2_5=select("#n2 .unit5"),unit_N2_6=select("#n2 .unit6"),unit_N2_7=select("#n2 .unit7"),unit_N2_8=select("#n2 .unit8"),unit_N2_9=select("#n2 .unit9"),unit_N2_10=select("#n2 .unit10"),unit_N2_11=select("#n2 .unit11"),unit_N2_12=select("#n2 .unit12"),unit_N2_13=select("#n2 .unit13"),unit_N2_14=select("#n2 .unit14"),unit_N2_15=select("#n2 .unit15"),unit_N2_16=select("#n2 .unit16"),unit_N2_17=select("#n2 .unit17"),unit_N2_18=select("#n2 .unit18"),unit_N2_19=select("#n2 .unit19"),unit_N2_20=select("#n2 .unit20"),unit_N2_21=select("#n2 .unit21"),unit_N2_22=select("#n2 .unit22"),unit_N2_23=select("#n2 .unit23"),unit_N2_24=select("#n2 .unit24"),unit_N2_25=select("#n2 .unit25"),unit_N2_26=select("#n2 .unit26"),unit_N2_27=select("#n2 .unit27"),unit_N2_28=select("#n2 .unit28"),unit_N2_29=select("#n2 .unit29"),unit_N2_30=select("#n2 .unit30"),unit_N2_31=select("#n2 .unit31"),unit_N2_32=select("#n2 .unit32"),unit_N2_33=select("#n2 .unit33"),unit_N2_34=select("#n2 .unit34"),unit_N2_35=select("#n2 .unit35"),unit_N2_36=select("#n2 .unit36"),unit_N2_37=select("#n2 .unit37"),unit_N2_38=select("#n2 .unit38"),unit_N2_39=select("#n2 .unit39"),unit_N2_40=select("#n2 .unit40"),unit_S1=select("#s .unit1"),unit_S2=select("#s .unit2"),unit_S3=select("#s .unit3"),unit_S4=select("#s .unit4"),unit_S5=select("#s .unit5"),unit_S6=select("#s .unit6"),unit_S7=select("#s .unit7"),unit_S8=select("#s .unit8"),unit_S9=select("#s .unit9"),unit_S10=select("#s .unit10"),unit_S11=select("#s .unit11"),unit_S12=select("#s .unit12"),unit_S13=select("#s .unit13"),unit_S14=select("#s .unit14"),unit_S15=select("#s .unit15"),unit_S16=select("#s .unit16"),unit_S17=select("#s .unit17"),unit_S18=select("#s .unit18"),unit_S19=select("#s .unit19"),unit_S20=select("#s .unit20"),unit_S21=select("#s .unit21"),unit_S22=select("#s .unit22"),unit_S23=select("#s .unit23"),unit_S24=select("#s .unit24"),unit_S25=select("#s .unit25"),unit_S26=select("#s .unit26"),unit_S27=select("#s .unit27"),unit_S28=select("#s .unit28"),unit_S29=select("#s .unit29"),unit_S30=select("#s .unit30"),unit_S31=select("#s .unit31"),unit_S32=select("#s .unit32"),unit_S33=select("#s .unit33"),unit_S34=select("#s .unit34"),unit_S35=select("#s .unit35"),unit_S36=select("#s .unit36"),unit_S37=select("#s .unit37"),unit_S38=select("#s .unit38"),unit_S39=select("#s .unit39"),unit_S40=select("#s .unit40"),unit_H1=select("#h .unit1"),unit_H2=select("#h .unit2"),unit_H3=select("#h .unit3"),unit_H4=select("#h .unit4"),unit_H5=select("#h .unit5"),unit_H6=select("#h .unit6"),unit_H7=select("#h .unit7"),unit_H8=select("#h .unit8"),unit_H9=select("#h .unit9"),unit_H10=select("#h .unit10"),unit_H11=select("#h .unit11"),unit_H12=select("#h .unit12"),unit_H13=select("#h .unit13"),unit_H14=select("#h .unit14"),unit_H15=select("#h .unit15"),unit_H16=select("#h .unit16"),unit_H17=select("#h .unit17"),unit_H18=select("#h .unit18"),unit_H19=select("#h .unit19"),unit_H20=select("#h .unit20"),unit_H21=select("#h .unit21"),unit_H22=select("#h .unit22"),unit_H23=select("#h .unit23"),unit_H24=select("#h .unit24"),unit_H25=select("#h .unit25"),unit_H26=select("#h .unit26"),unit_H27=select("#h .unit27"),unit_H28=select("#h .unit28"),unit_H29=select("#h .unit29"),unit_H30=select("#h .unit30"),unit_H31=select("#h .unit31"),unit_H32=select("#h .unit32"),unit_H33=select("#h .unit33"),unit_H34=select("#h .unit34"),unit_H35=select("#h .unit35"),unit_H36=select("#h .unit36"),unit_H37=select("#h .unit37"),unit_H38=select("#h .unit38"),unit_H39=select("#h .unit39"),unit_H40=select("#h .unit40"),unit_I1=select("#i .unit1"),unit_I2=select("#i .unit2"),unit_I3=select("#i .unit3"),unit_I4=select("#i .unit4"),unit_I5=select("#i .unit5"),unit_I6=select("#i .unit6"),unit_I7=select("#i .unit7"),unit_I8=select("#i .unit8"),unit_I9=select("#i .unit9"),unit_I10=select("#i .unit10"),unit_I11=select("#i .unit11"),unit_I12=select("#i .unit12"),unit_I13=select("#i .unit13"),unit_I14=select("#i .unit14"),unit_I15=select("#i .unit15"),unit_I16=select("#i .unit16"),unit_I17=select("#i .unit17"),unit_I18=select("#i .unit18"),unit_I19=select("#i .unit19"),unit_I20=select("#i .unit20"),unit_I21=select("#i .unit21"),unit_I22=select("#i .unit22"),unit_I23=select("#i .unit23"),unit_I24=select("#i .unit24"),unit_I25=select("#i .unit25"),unit_I26=select("#i .unit26"),unit_I27=select("#i .unit27"),unit_I28=select("#i .unit28"),unit_I29=select("#i .unit29"),unit_I30=select("#i .unit30"),unit_I31=select("#i .unit31"),unit_I32=select("#i .unit32"),unit_I33=select("#i .unit33"),unit_I34=select("#i .unit34"),unit_I35=select("#i .unit35"),unit_I36=select("#i .unit36"),unit_I37=select("#i .unit37"),unit_I38=select("#i .unit38"),unit_I39=select("#i .unit39"),unit_I40=select("#i .unit40"),unit_P1=select("#p .unit1"),unit_P2=select("#p .unit2"),unit_P3=select("#p .unit3"),unit_P4=select("#p .unit4"),unit_P5=select("#p .unit5"),unit_P6=select("#p .unit6"),unit_P7=select("#p .unit7"),unit_P8=select("#p .unit8"),unit_P9=select("#p .unit9"),unit_P10=select("#p .unit10"),unit_P11=select("#p .unit11"),unit_P12=select("#p .unit12"),unit_P13=select("#p .unit13"),unit_P14=select("#p .unit14"),unit_P15=select("#p .unit15"),unit_P16=select("#p .unit16"),unit_P17=select("#p .unit17"),unit_P18=select("#p .unit18"),unit_P19=select("#p .unit19"),unit_P20=select("#p .unit20"),unit_P21=select("#p .unit21"),unit_P22=select("#p .unit22"),unit_P23=select("#p .unit23"),unit_P24=select("#p .unit24"),unit_P25=select("#p .unit25"),unit_P26=select("#p .unit26"),unit_P27=select("#p .unit27"),unit_P28=select("#p .unit28"),unit_P29=select("#p .unit29"),unit_P30=select("#p .unit30"),unit_P31=select("#p .unit31"),unit_P32=select("#p .unit32"),unit_P33=select("#p .unit33"),unit_P34=select("#p .unit34"),unit_P35=select("#p .unit35"),unit_P36=select("#p .unit36"),unit_P37=select("#p .unit37"),unit_P38=select("#p .unit38"),unit_P39=select("#p .unit39"),unit_P40=select("#p .unit40"),unit1s=[unit_N1,unit_E1,unit_R1,unit_D1,unit_M1,unit_A1,unit_N2_1,unit_S1,unit_H1,unit_I1,unit_P1],unit10s=[unit_N10,unit_E10,unit_R10,unit_D10,unit_M10,unit_A10,unit_N2_10,unit_S10,unit_H10,unit_I10,unit_P10],unit20s=[unit_N20,unit_E20,unit_R20,unit_D20,unit_M20,unit_A20,unit_N2_20,unit_S20,unit_H20,unit_I20,unit_P20],unit30s=[unit_N30,unit_E30,unit_R30,unit_D30,unit_M30,unit_A30,unit_N2_30,unit_S30,unit_H30,unit_I30,unit_P30],unit40s=[unit_N40,unit_E40,unit_R40,unit_D40,unit_M40,unit_A40,unit_N2_40,unit_S40,unit_H40,unit_I40,unit_P40],nCurve=[unit_N11,unit_N12,unit_N13,unit_N14,unit_N15,unit_N16,unit_N17,unit_N18,unit_N19],n2Curve=[unit_N2_11,unit_N2_12,unit_N2_13,unit_N2_14,unit_N2_15,unit_N2_16,unit_N2_17,unit_N2_18,unit_N2_19],rCurve1=[unit_R13,unit_R14,unit_R15,unit_R16,unit_R17,unit_R18,unit_R19],rCurve2=[unit_R24,unit_R25,unit_R26,unit_R27,unit_R28,unit_R29],dCurve1=[unit_D13,unit_D14,unit_D15,unit_D16],dCurve2=[unit_D21,unit_D22,unit_D23,unit_D24],dCurve3=[unit_D25,unit_D26,unit_D27,unit_D28],dStraight=[unit_D17,unit_D18,unit_D19,unit_D20],aCurve=[unit_A16,unit_A17,unit_A18,unit_A19,unit_A20,unit_A21,unit_A22,unit_A23],sCurve1=[unit_S3,unit_S4,unit_S5,unit_S6,unit_S7,unit_S8,unit_S9],sCurve2=[unit_S14,unit_S15,unit_S16,unit_S17,unit_S18,unit_S19,unit_S20,unit_S21,unit_S22],pCurve=[unit_P13,unit_P14,unit_P15,unit_P16,unit_P17,unit_P18,unit_P19],iCurve=[unit_I2,unit_I3,unit_I4,unit_I5,unit_I6,unit_I7,unit_I8,unit_I9,unit_I10],posN=0,posE=270,posR=520,posD=788,posM=1062,posA=1360,posN2=1640,posS=1905,posH=2165,posI=2440,posP=2590,posArr=[posN,posE,posR,posD,posM,posA,posN2,posS,posH,posI,posP],dur=.3,arcDur=.2,backDur=.1,punchDur=.1,finDur=.25,flicDur=11,backDelay="=+0.25",punchDelay="=+0.5",arcObj={type:"soft",values:[{x:"+=0",y:"+=0"},{x:"+=0",y:"+=100"},{x:"+=180",y:"+=100"}]},backSnap="-=180",backSnapP="-=280",logoStart="hsla(200, 40%, 5%, 1)",backgroundTint="hsla(200, 45%, 15%, 1)",logoMid="hsla(150, 20%, 60%, 1)",logoEnd="hsla(150, 20%, 80%, 1)",yellow="hsla(40, 90%, 65%, 1)",logoText=selectAll(".logoText"),upperText=new SplitText(".logoUpper",{type:"words,chars"}),lowerText=new SplitText(".logoLower",{type:"words,chars"}),upperLetters=upperText.chars,lowerLetters=lowerText.chars,configObj={template:Power0.easeNone,strength:1,points:100,taper:"none",randomize:!0,clamp:!0},h1Shadow=select("#presentation h1"),$(".ui-slider-handle").draggable(),makeBg(30,1,6);var bgSVG=select("#bgSVG"),bgRects=selectAll(".rectangle"),bgTl=new TimelineMax;makeBgTls(bgTl),window.addEventListener("resize",center),$("#discoverySlider").slider({step:.01,slide:function(t,e){tl.progress(e.value/100).pause(),TweenMax.set(scrubbProgress,{drawSVG:e.value+"%"}),TweenMax.to(".controllerContainer",.2,{autoAlpha:.2})},stop:function(){tl.play(),TweenMax.to(".controllerContainer",.2,{autoAlpha:1}),TweenMax.to(circle1,.1,{scale:1})}});var sliderHandleTarget=select("#discoverySlider .ui-slider-handle");sliderHandleTarget.addEventListener("mouseover",focusHandle),sliderHandleTarget.addEventListener("mouseleave",blurHandle);var showing=!1,tlPulse,sliderHandleTarget=select("#discoverySlider .ui-slider-handle");sliderHandleTarget.addEventListener("mousedown",killPulse);var haveScrolled=!1;document.onscroll=function(){haveScrolled||(haveScrolled=!0,console.log("User scrolled"),mixpanel.track("First scroll"),killScrollGlow())},$("#btnPause").on("click",function(){tl.pause()}),$("#btnPlay").on("click",function(){tl.play(0)}),$("#productionSlider").slider({step:.01,slide:function(t,e){tl.progress(e.value/100).pause()},stop:function(){tl.play()}}),TweenMax.set(nerdmanship,{xPercent:0,transformPerspective:500,autoAlpha:1}),TweenMax.set(units,{transformOrigin:"center"}),TweenLite.defaultEase=Power0.easeOut,TweenMax.set(bgSVG,{rotation:45}),TweenMax.set(bgRects,{transformOrigin:"center"}),TweenMax.set(circle1,{transformOrigin:"center",scale:0,autoAlpha:1}),TweenMax.set(circle4,{xPercent:"-50%"}),tlStart.to(unit1s,0,{rotation:90}).to(charGroup,0,{x:100,scaleX:.9,scaleY:.7,transformOrigin:"center"},0).staggerTo(chars,0,{fill:logoStart,cycle:{x:function(t){return 200*t}}},0),TweenMax.set(unit10s,{rotation:180}),TweenMax.set(unit20s,{rotation:180}),TweenMax.set(unit30s,{rotation:180}),TweenMax.set(unit40s,{rotation:180}),TweenMax.set(unit_N29,{autoAlpha:0}),TweenMax.set(unit_E28,{autoAlpha:0}),TweenMax.set(unit_R28,{autoAlpha:0}),TweenMax.set(unit_D27,{autoAlpha:0}),TweenMax.set(unit_M29,{autoAlpha:0}),TweenMax.set(unit_A30,{autoAlpha:0}),TweenMax.set(unit_N2_29,{autoAlpha:0}),TweenMax.set(unit_S23,{autoAlpha:0}),TweenMax.set(unit_H19,{autoAlpha:0}),TweenMax.set(unit_I11,{autoAlpha:0}),TweenMax.set(unit_P21,{autoAlpha:0}),TweenMax.set(unit_H20,{rotation:0}),TweenMax.set(unit_H30,{rotation:0}),TweenMax.set(unit_H23,{rotation:180}),TweenMax.set(unit_H19,{x:125,rotation:-90}),TweenMax.set(unit_H14,{x:-150,rotation:-180}),TweenMax.set(unit_I10,{x:225}),TweenMax.set(logoText,{autoAlpha:1}),tlAnimIn.to(charGroup,3,{x:0,scaleX:.8,scaleY:.8,ease:Power1.easeOut},0).staggerTo(chars,3,{cycle:{x:function(t){return 250*t}},ease:Power1.easeOut},0,0),makeFlickerTl(tlFlicker),tlViewBox.add("toNerd").to(nerdmanship,.2,{rotation:-20,skewX:30,attr:{viewBox:"980 -50 1500 50"}},"toNerd").to(nerdmanship,.1,{rotation:-10,skewX:20,attr:{viewBox:"950 -50 1000 50"}},"toNerd =+0.2").to(nerdmanship,.1,{attr:{viewBox:"825 -50 1100 50"}},"toNerd =+0.6").add("toMan","toNerd =+1.2").to(nerdmanship,.3,{rotation:-20,skewX:35,attr:{viewBox:"1600 -50 1100 50"}},"toMan").to(nerdmanship,.2,{rotation:-15,skewX:25,attr:{viewBox:"1600 -50 950 50"}},"toMan =+0.6").add("toShip","toMan =+1.1").to(nerdmanship,.3,{rotation:-10,skewX:20,attr:{viewBox:"2100 -50 1200 50"}},"toShip").to(nerdmanship,.2,{rotation:-5,skewX:10,attr:{viewBox:"2150 -50 1100 50"}},"toShip =+0.65").add("toNerdmanship","toShip =+1.0").to(nerdmanship,.2,{rotation:0,skewX:0,attr:{viewBox:"0 0 4000 50"}},"toNerdmanship"),tlFinish.to(nerdmanship,5,{skewX:-10,ease:Power2.easeOut},0).to(charGroup,5,{x:-100,scaleY:.9,ease:Power2.easeOut},0).staggerTo(chars,5,{cycle:{x:posArr},ease:Power2.easeOut},0,0).from(bgSVG,6,{y:"-=50"},0),tlText.staggerFrom(upperLetters,5,{autoAlpha:0,rotationY:90,transformOrigin:"0% 50% -50%",ease:Power3.easeOut},.05,0).staggerFrom(lowerLetters,5,{autoAlpha:0,rotationY:90,transformOrigin:"0% 50% -50%",ease:Power3.easeOut},.05,1.2),tlGlow.to(chars,3,{fill:logoEnd}).to("#glowWide",5,{autoAlpha:.25},1).to("#glowSlim",3,{autoAlpha:.05,ease:Back.easeOut},2).to("#glowSlim",3,{attr:{cy:390,rx:650,ry:20},ease:Back.easeOut},2),tl_N.add("arc").to(theN,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theN,backDur,{x:backSnap},"back").to(unit_N1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_N1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_N1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_N1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_N21,0,{autoAlpha:0},"prepAnim").to(unit_N10,arcDur,{bezier:{type:"soft",values:[{rotation:180},{rotation:90},{rotation:153}]}},"prepAnim").to(nCurve,arcDur,{bezier:{type:"soft",values:[{rotation:0},{rotation:15},{rotation:0}]}},"prepAnim").to(unit_N10,arcDur,{bezier:{type:"soft",values:[{x:0,y:0},{x:-25,y:15},{x:0,y:0}]}},"prepAnim =+0.2").add("finAnim","back").to(unit_N21,0,{autoAlpha:1},"finAnim").to(unit_N10,.25,{bezier:{type:"soft",values:[{rotation:153},{rotation:120},{rotation:153}]}},"finAnim").to(unit_N20,.25,{bezier:[{rotation:180},{rotation:210},{rotation:207}]},"finAnim =+0.08"),tl_E.add("arc").to(theE,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theE,backDur,{x:backSnap},"back").to(unit_E1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_E1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_E20,0,{autoAlpha:0},"prepAnim").to(unit_E20,0,{autoAlpha:1},"prepAnim =+0.15").to(unit_E10,.1,{rotation:0},"prepAnim").to(unit_E1,.15,{rotation:180},"prepAnim").to(unit_E5,.15,{rotation:-180},"prepAnim").to(unit_E15,.15,{rotation:"+=90",ease:SlowMo.ease.config(.1,.1,!0)},"prepAnim").to(unit_E9,.35,{bezier:[{rotation:0},{rotation:100},{rotation:90}]},"prepAnim").to(unit_E20,.15,{rotation:"90_ccw"},"prepAnim =+0.15").to(unit_E24,.15,{rotation:90},"prepAnim =+0.15").add("finAnim","back").to(unit_E14,finDur,{rotation:90},"finAnim").to(unit_E17,finDur,{rotation:-180},"finAnim").to(unit_E20,finDur,{rotation:90},"finAnim").to(unit_E17,finDur,{bezier:[{x:"+=0"},{x:"+=80"},{x:"+=0"}]},"finAnim").to(unit_E24,finDur,{bezier:[{rotation:90},{rotation:50},{rotation:90}]},"finAnim"),tl_R.add("arc").to(theR,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theR,backDur,{x:backSnap},"back").to(unit_R1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_R1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_R1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_R1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_R21,0,{autoAlpha:0},"prepAnim").to(unit_R10,arcDur,{rotation:90},"prepAnim").to(unit_R10,arcDur,{x:"+=115"},"prepAnim").to(rCurve1,arcDur,{rotation:180/7},"prepAnim").to(rCurve2,arcDur,{rotation:-180/7},"prepAnim").to(unit_R23,arcDur,{rotation:-180/7},"prepAnim").to(unit_R20,arcDur,{rotation:"0_ccw"},"prepAnim").to(unit_R21,arcDur,{rotation:"180_cw"},"prepAnim").add("finAnim","back").to(unit_R21,0,{autoAlpha:1},"finAnim").to(unit_R28,0,{autoAlpha:0},"finAnim").to(unit_R10,finDur,{x:"-=115",ease:Back.easeOut},"finAnim").to(unit_R23,finDur,{rotation:70,ease:Back.easeOut},"finAnim").to(rCurve2,.2,{rotation:0},"finAnim"),tl_D.add("arc").to(theD,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theD,backDur,{x:backSnap},"back").to(unit_D1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_D1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_D1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_D1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_D10,arcDur,{rotation:90,x:"+=115"},"prepAnim").to(dCurve1,arcDur,{rotation:22.5},"prepAnim").to(dCurve2,.15,{rotation:22.5},"prepAnim").to(dCurve3,.1,{rotation:45},"prepAnim").to(dCurve3,.1,{rotation:0},"prepAnim =+0.1").to(unit_D20,.2,{rotation:0},"prepAnim").to(dStraight,arcDur,{x:25},"prepAnim").add("finAnim","back").to(dStraight,finDur,{x:0,ease:Back.easeOut},"finAnim").to(unit_D10,finDur,{rotation:90,x:0,y:0,ease:Back.easeOut},"finAnim"),tl_M.add("arc").to(theM,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theM,backDur,{x:backSnap},"back").to(unit_M1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_M1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_M1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_M1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").set(unit_M15,{rotation:-180},"prepAnim").set(unit_M15,{x:-25},"prepAnim").to(unit_M10,arcDur,{rotation:145},"prepAnim").to(unit_M15,arcDur,{rotation:-145},"prepAnim").to(unit_M15,arcDur,{x:0},"prepAnim").to(unit_M10,.2,{x:125},"prepAnim =+0.1").to(unit_M20,.1,{x:-100},"prepAnim =+0.1").add("finAnim","back").to(unit_M10,finDur,{x:0},"finAnim").to(unit_M20,finDur,{x:0},"finAnim").to(unit_M20,finDur,{bezier:[{y:0},{y:10},{y:0}]},"finAnim").to(unit_M15,finDur,{rotation:-110},"finAnim").to(unit_M20,finDur,{rotation:"145_short"},"finAnim"),tl_A.add("arc").to(theA,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theA,backDur,{x:backSnap},"back").to(unit_A1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_A1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_A1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_A1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_A10,0,{rotation:0},"prepAnim").to(unit_A9,0,{rotation:180},"prepAnim").to(unit_A5,0,{rotation:0},"prepAnim").to(unit_A13,0,{rotation:180},"prepAnim").to(unit_A20,0,{rotation:180},"prepAnim").to(unit_A5,arcDur,{rotation:90},"prepAnim").to(unit_A13,arcDur,{rotation:90},"prepAnim").to(unit_A14,0,{x:50},"prepAnim").to(unit_A28,arcDur,{x:50},"prepAnim").add("finAnim","back").to(aCurve,finDur,{rotation:22.5},"finAnim").to(unit_A14,finDur,{x:0},"finAnim").to(unit_A28,finDur,{x:0},"finAnim"),tl_N2.add("arc").to(theN2,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theN2,backDur,{x:backSnap},"back").to(unit_N2_1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_N2_1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_N2_1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_N2_1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_N2_21,0,{autoAlpha:0},"prepAnim").to(unit_N2_10,arcDur,{bezier:{type:"soft",values:[{rotation:180},{rotation:90},{rotation:153}]}},"prepAnim").to(n2Curve,arcDur,{bezier:{type:"soft",values:[{rotation:0},{rotation:15},{rotation:0}]}},"prepAnim").to(unit_N2_10,arcDur,{bezier:{type:"soft",values:[{x:0,y:0},{x:-25,y:15},{x:0,y:0}]}},"prepAnim =+0.2").add("finAnim","back").to(unit_N2_21,0,{autoAlpha:1},"finAnim").to(unit_N2_10,.25,{bezier:{type:"soft",values:[{rotation:153},{rotation:120},{rotation:153}]}},"finAnim").to(unit_N2_20,.25,{bezier:[{rotation:180},{rotation:210},{rotation:207}]},"finAnim =+0.08"),tl_S.add("arc").to(theS,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theS,backDur,{x:backSnap},"back").to(unit_S2,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_S2,.2,{rotation:-180/7},"arc =+0.2").to(unit_S2,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_S2,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_S17,.1,{x:25},"prepAnim").to(unit_S17,0,{autoAlpha:0},"prepAnim =+0.1").to(unit_S1,.25,{rotation:269},"prepAnim =+0.1").to(unit_S1,arcDur,{y:-65},"prepAnim =+0.1").to(sCurve1,arcDur,{rotation:-180/7},"prepAnim =+0.1").to(unit_S10,arcDur,{rotation:"-25.7_short"},"prepAnim =+0.1").to(unit_S11,arcDur,{rotation:-15},"prepAnim =+0.1").to(unit_S13,arcDur,{rotation:15},"prepAnim =+0.1").to(unit_S14,arcDur,{rotation:180/7},"prepAnim =+0.1").to(unit_S15,arcDur,{rotation:180/7},"prepAnim =+0.1").to(unit_S16,arcDur,{rotation:180/7},"prepAnim =+0.1").add("finAnim","back").to(unit_S17,0,{x:0,rotation:180,autoAlpha:1},"finAnim").to(unit_S18,0,{rotation:-180/7},"finAnim").to(unit_S19,0,{
rotation:-180/7},"finAnim").to(unit_S20,0,{rotation:-180/7},"finAnim").to(sCurve2,.35,{rotation:180/7,ease:Back.easeOut},"finAnim"),tl_H.add("arc").to(theH,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theH,backDur,{x:backSnap},"back").to(unit_H1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_H1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_H1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_H1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_H14,arcDur,{x:0,rotation:-90},"prepAnim").add("finAnim","back").to(unit_H19,0,{autoAlpha:1},"finAnim").to(unit_H32,0,{autoAlpha:0},"finAnim").to(unit_H19,finDur,{x:0},"finAnim").to(unit_H14,finDur,{rotation:-105,ease:SlowMo.ease.config(.1,.1,!0)},"finAnim"),tl_I.add("arc").to(theI,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theI,backDur,{x:backSnap},"back").to(unit_I1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_I1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_I1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_I1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_I10,.05,{x:150,autoAlpha:0},"prepAnim").to(iCurve,.1,{rotation:4,ease:SlowMo.ease.config(.1,.1,!0)},"prepAnim =+0.05").to(iCurve,.2,{rotation:2,ease:SlowMo.ease.config(.1,.1,!0)},"prepAnim =+0.2").add("finAnim","back"),tl_P.add("arc").to(theP,arcDur,{bezier:arcObj},"arc").add("back",backDelay).to(theP,backDur,{x:backSnapP},"back").to(unit_P1,.2,{rotation:"-=20",ease:SlowMo.ease.config(.1,.1,!0)},"arc").to(unit_P1,.2,{rotation:"+=15",ease:SlowMo.ease.config(.1,.1,!0)},"arc =+0.2").to(unit_P1,.15,{rotation:"+=20",ease:SlowMo.ease.config(.1,.1,!0)},"back").to(unit_P1,.2,{rotation:"-=15",ease:SlowMo.ease.config(.1,.1,!0)},"back =+0.15").add("prepAnim","arc").to(unit_P10,arcDur,{rotation:90},"prepAnim").to(unit_P10,arcDur,{x:"+=115"},"prepAnim").to(pCurve,arcDur,{rotation:180/7},"prepAnim").to(unit_P20,arcDur,{rotation:0},"prepAnim").add("finAnim","back").to(unit_P10,finDur,{x:"-=115",ease:Back.easeOut},"finAnim"),tl.add(tlStart).add("start").add(tlAnimIn,"start").add(tlFlicker,"start").add("viewbox",3).add(tlViewBox,"viewbox").add("animate","viewbox").add(tl_N,"animate").add(tl_E,"animate =+0.08").add(tl_R,"animate =+0.16").add(tl_D,"animate =+0.24").add(tl_M,"animate =+1.20").add(tl_A,"animate =+1.28").add(tl_N2,"animate =+1.36").add(tl_S,"animate =+2.20").add(tl_H,"animate =+2.28").add(tl_I,"animate =+2.36").add(tl_P,"animate =+2.44").add("finish",6.5).add(tlFinish,"finish").add(tlText,"finish").add(bgTl,"finish").add(tlGlow,"finish =+3").call(showScrubber,[""],this,"finish =+4");
//# sourceMappingURL=./app-min.js.map