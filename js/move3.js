
function getByClass(oParent,sClass){
         var aEle = oParent.getElementsByTagName('*');
         var aResult=[];

        //  for (var i = 0 ; i < aEle.length; i++) {
        //      if (aEle[i].className==sClass) {
        //         aResult.push(aEle[i]);
        //      }
        //  }
        for(var i = 0;i<aEle.length;i++){
          if(aEle[i].className==sClass){
            aResult.push(aEle[i])
          }
        }
         return aResult;
  }


function getStyle(ele,name){
         if (ele.currentStyle) {
          return ele.currentStyle[name]
         }
         else{
          return getComputedStyle(ele,null)[name]
         }  
       }

//我们的这个运动框架无法实现同时运动，所以我们现在要修改了一下了
//20171112 应煜鑫修改,把属性参数和目标值参数修改为JSON
// 希望的函数调用方式如下
// startMove(oDiv,{width:400,height:400},fnEnd)
//function startMove(obj,attr,iTarget,fnEnd){
function startMove(obj,json,fnEnd){
            //关闭自身物体的定时器
            clearInterval(obj.timer);
            //开启当前点中物体的定时器
            obj.timer=setInterval(function(){
                  
                  var bStop=true; //假设所有的json值都已经倒位了



                 for (var attr in json) {
                   //定义变量，计算一下速度
                   //让目标减去这个alpha的值
                   //除6让运动缓冲
                   var cur=0;
                   if (attr=='opacity') {
                      //Math.round
                      //这里需要用一个四舍五入的方法、去除小数点
                      //计算机有些计算是有BUG问题的
                      //比如alert(0.07*100);
                      var cur=Math.round(parseFloat(getStyle(obj,attr))*100); 
                   }else{
                      var cur=parseInt(getStyle(obj,attr));
                      //alert(cur) ;
                      //console.log(cur);
                   }


                   var speed = (json[attr]-cur)/6;
                   speed=speed>0?Math.ceil(speed):Math.floor(speed);
                   //speed=parseInt(speed);
                   //console.log(parseInt(speed));
                      //如果其中有一个JSON值还没有到达目标点的时候,
                      //就把bStop=false赋值为假
                    if (cur!=json[attr]) bStop=false; 
                        
                     if (attr=='opacity') {
                       obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                       obj.style.opacity=(cur+speed)/100;
                     }else{
                       obj.style[attr]=cur+speed+'px';
                       //console.log(cur+speed);
                     };

                   // if (cur == json[attr]) {
                        
                   // 	    clearInterval(obj.timer);

                   //   if (fnEnd)fnEnd();
                   // }else{

                   //   if (attr=='opacity') {
                   //     obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                   //     obj.style.opacity=(cur+speed)/100;
                   //   }else{
                   //     obj.style[attr]=cur+speed+'px';
                   //     console.log(cur+speed);
                   //   };

                   // };
                };

              //在结束了整个循环之后，这个时候bStop,依旧为真，保持true的情况
              //哪也就是说。、所有的值都已经到位了，哪么这个时候再关闭定时器
              //然后再次执行fuEnd函数
              if (bStop) {
                clearInterval(obj.timer);
                //alert('abc');
                if (fnEnd) fnEnd();
              }

            },30);
         };
