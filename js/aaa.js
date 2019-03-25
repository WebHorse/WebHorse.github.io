// var nav=document.querySelector('#nav');
var nav = document.getElementById('nav')
// function resize(){
//     var Height=document.documentElement.clientHeight;

// nav.style.height=Height+'px';
// }
// var bOdy = document.body;
// var main=document.querySelector('.main');
// var Height=document.documentElement.clientHeight;

// main.style.height=Height+'px';
// var main = document.getElementsByClassName('main')[0];
// main.style.width = document.body.scrollWidth -220+'px';
// window.onresize=function(){
//     main.style.width = document.body.scrollWidth -220+main.style.marginLeft;
// }
// console.log(main.style.width)

//侧边栏的高度

// console.log(main.style.width)

var follow = document.getElementById('follow');
var oul = document.getElementById('oul');
var oLi = oul.getElementsByTagName('li');
var oDiv = oul.getElementsByClassName('hhh')
var xxx = oul.getElementsByClassName('xxx')
// console.log(oDiv)
for(var j = 0 ;j<oLi.length;j++){
    oLi[j].index=j;
    oLi[j].onmousemove=function(){
        // var oEvent = ev||event;
        
        follow.style.height="56px";
        follow.style.top= this.offsetTop+'px';
    //    console.log(follow.style.top)

    }
   
}

oul.onmouseout=function(){
    // var oEvent = ev||event;
    
    follow.style.height="0px";
//    console.log(follow.style.top)

}
for(var y = 0;y<oDiv.length;y++){
    oDiv[y].index=y;
    oDiv[y].onmousemove=function(){
        // var oEvent = ev||event;
        
        follow.style.height="56px";
        follow.style.top= oDiv[this.index].parentNode.querySelectorAll('.qusi > li').offsetTop + 'px';
        

    //    console.log(follow.style.top)

    }
}
//给侧边栏的鼠标指针一个跟随
for(var i = 0 ;i<oLi.length-1;i++){
        oLi[i].index=i;
        oDiv[i].style.display='none';
        oLi[i].onclick=function(){
        if(oDiv[this.index].style.display=='none'){
            for(var i = 0;i<oLi.length-1;i++){
                oDiv[i].style.display='none';
            }
            oDiv[this.index].style.display='block';

        }else{
            oDiv[this.index].style.display='none';

        }
    }
}
//侧边栏的二级菜单

var a = oul.getElementsByClassName('aaa');
for(var x = 0;x<a.length;x++){
    // console.log(xxx)
    // console.log(xxx)
    a[x].index=x;
     xxx[x].style.display='none';
    a[x].onclick=function(){
    if(xxx[this.index].style.display=='none'){
        for(var i = 0;i<a.length;i++){
            xxx[i].style.display='none';
        }
        xxx[this.index].style.display='block';
    }else{
        xxx[this.index].style.display='none';

    }
}
}
var fore = document.getElementsByClassName('fore')
// fore.style.background='transparent'
for(var w = 0;w<fore.length;w++){
    fore[w].style.background='rgb(24, 24, 24)'
    fore[w].onclick=function(){
        if(this.style.background!='#009688'){
            for(var i = 0;i<fore.length;i++){
    fore[i].style.background='rgb(24, 24, 24)'

            }
            this.style.background='#009688'

        }else{
            console.log(111)
            this.style.background='rgb(24, 24, 24)'

        }
    }
}

var red = document.getElementById('red');
var lastli = document.getElementsByClassName('lastli')[0]
var green = document.getElementById('green')
var blue = document.getElementById('blue')
console.log(oDiv)
red.onclick=function(){
    lastli.style.background='red'
    nav.style.background='rgb(75, 22, 22)'
    for(var i = 0;i<oDiv.length;i++){
   oDiv[i].style.background='rgb(46, 9, 9)'
        
    }
    for(var w = 0;w<fore.length;w++){
        fore[w].style.background='rgb(46, 9, 9)'
        
        fore[w].index=w;
        if(fore[w].background=='#009688'){
            fore[this.index].style.background='red'
        }
        fore[w].onclick=function(){
            if(this.style.background!='red'){
                for(var i = 0;i<fore.length;i++){
                fore[i].style.background='rgb(46, 9, 9)'
    
                }
                this.style.background='red'
    
            }else{
                console.log(111)
                this.style.background='rgb(24, 24, 24)'
    
            }
        }
    }
}
green.onclick=function(){
    lastli.style.background='#009688'
    nav.style.background='rgb(24, 24, 24)'
    for(var i = 0;i<oDiv.length;i++){
   oDiv[i].style.background='#20222A'
        
    }
    for(var w = 0;w<fore.length;w++){
        fore[w].style.background='#20222A'
        
        fore[w].index=w;
        // if(fore[w].background=='#009688'){
        //     fore[this.index].style.background='red'
        // }
        fore[w].onclick=function(){
            if(this.style.background!='#009688'){
                for(var i = 0;i<fore.length;i++){
                fore[i].style.background='#20222A'
    
                }
                this.style.background='#009688'
    
            }else{
                console.log(111)
                this.style.background='rgb(24, 24, 24)'
    
            }
        }
    }
}
blue.onclick=function(){
    lastli.style.background='rgb(11, 5, 92)'
    nav.style.background='rgb(28, 24, 78)'
        for(var i = 0;i<oDiv.length;i++){
       oDiv[i].style.background='rgb(65, 61, 116)'
            
        }
        for(var w = 0;w<fore.length;w++){
            fore[w].style.background='rgb(65, 61, 116)'
            
            fore[w].index=w;
            // if(fore[w].background=='#009688'){
            //     fore[this.index].style.background='red'
            // }
            fore[w].onclick=function(){
                if(this.style.background!='#009688'){
                    for(var i = 0;i<fore.length;i++){
                    fore[i].style.background='rgb(65, 61, 116)'
        
                    }
                    this.style.background='rgb(28, 17, 182)'
        
                }else{
                    console.log(111)
                    this.style.background='rgb(24, 24, 24)'
        
                }
            }
        }
    }


//侧边栏的三级菜单

var choose = document.getElementById('choose');
var choose_xl=document.getElementById('content_label4_xl')
var choose_li = choose_xl.getElementsByTagName('li')

choose_xl.style.opacity=0
choose.onclick=function(){
    if(choose_xl.style.opacity==0){
    choose_xl.style.opacity=1;
    choose_xl.style.top='50px'
    for(var i = 0;i<choose_li.length;i++){
        choose_li[i].index=i
        choose_li[i].onclick=function(){
            
            choose.value=choose_li[this.index].innerHTML;
        choose_xl.style.opacity=0;

        }
    }
    }else{
    choose_xl.style.display=0;

    }
}


//main部分搜索栏的下拉菜单



var duoxuan = document.getElementsByClassName('duoxuan');
var duoxuan1 = document.getElementsByClassName('duoxuan1')[0];
var icon_xuanze1 = document.getElementsByClassName('icon-xuanze1')[0];
var icon_xuanze = document.getElementsByClassName('icon-xuanze')
var dele = document.getElementById('dele')
var con_ul = document.getElementById('con_ul')

icon_xuanze1.style.display='none'
duoxuan1.onclick=function(){
    if(icon_xuanze1.style.display=='none'){
        icon_xuanze1.style.display='block'
        for(var i = 0 ;i <duoxuan.length;i++){
            icon_xuanze[i].style.display='block';

          
        }
    }else{
        icon_xuanze1.style.display='none'
        for(var b = 0 ;b <duoxuan.length;b++){
            icon_xuanze[b].style.display='none';
        }
    }
    
    
}



// for(var b = duoxuan.length - 1;b >= 0;b--){
//     duoxuan[b].index = b;
//     icon_xuanze[b].style.display='none';
//     duoxuan[b].onclick=function(){
//         if(this.children[0].style.display=='none'){
//             this.children[0].style.display='block';
//         }else{
//             this.children[0].style.display='none';
//         }
//     }
// }
//内容中的复选按钮的选择

dele.onclick=function(){
    // console.log(icon_xuanze)
    // var Tbody = document.getElementsByTagName('tbody')[0]
    console.log(555)
for(var I = conli.length-1;I >= 0;I--){
    conli[I].index=I
    if(icon_xuanze[I].style.display=='block'){
        con_ul.removeChild(conli[I]);
        user=[];
        var users = JSON.stringify(user)
        localStorage.user = users;
        console.log(user)
    }
}
}
var wzbq_input = document.getElementById('wzbq_input');
var wzbq_ul = document.getElementById('wzbq_ul');
var wzbq_ul_li=wzbq_ul.getElementsByTagName('li')
wzbq_ul.style.display='none';
wzbq_input.onclick=function(){
    if(wzbq_ul.style.display=='none'){
        wzbq_ul.style.display='block';
        for(var i = 0;i<wzbq_ul_li.length;i++){
            wzbq_ul_li[i].index=i;
            wzbq_ul_li[i].onclick=function(){
                wzbq_input.value=wzbq_ul_li[this.index].innerHTML;
                wzbq_ul.style.display='none'

            }

        }

    }else{
        wzbq_ul.style.display='none'
        // for(var b = 0 ;b <duoxuan.length;b++){
        //     icon_xuanze[b].style.display='none';
        // }
    }
}

var wzbq_input1 = document.getElementById('wzbq_input1');
var wzbq_ul1 = document.getElementById('wzbq_ul1');
var wzbq_ul_li1=wzbq_ul1.getElementsByTagName('li');

wzbq_ul1.style.display='none';
wzbq_input1.onclick=function(){
    if(wzbq_ul1.style.display=='none'){
        wzbq_ul1.style.display='block';
        for(var i = 0;i<wzbq_ul_li1.length;i++){
            wzbq_ul_li1[i].index=i;
            wzbq_ul_li1[i].onclick=function(){
                console.log(111)
                wzbq_input1.value=wzbq_ul_li1[this.index].innerHTML;
                wzbq_ul1.style.display='none'
            }

        }

    }else{
        wzbq_ul1.style.display='none';
        // for(var b = 0 ;b <duoxuan.length;b++){
        //     icon_xuanze[b].style.display='none';
        // }
    }
}


// 添加窗口的下拉菜单
// var arr='[{"conli.chilidren[1]":"","title"}]'
var time = new Date();
var sure = document.getElementById('sure');
var Box = document.getElementById('Box')
var addtion = document.getElementById('addtion')
var con_ul = document.getElementById('con_ul')
var innerhtml = document.getElementById('innerhtml')
var wzbq_input = document.getElementById('wzbq_input')
var wztitle_text = document.getElementById('wztitle_text')
var people_text = document.getElementById('people_text')
var onnounse = document.getElementById('onnounse')
var c_bottom = document.getElementById('c_bottom')
var conli = con_ul.getElementsByClassName('conli')
 var conul = con_ul.getElementsByClassName('conul')
// console.log(innerhtml.innerHTML)
var edit = document.getElementsByClassName('edit');
// console.log(edit)
var append= document.getElementById('append')
var redact = document.getElementById('redact')
var wztitle_text1 = document.getElementById('wztitle_text1')

var people_text1 = document.getElementById('people_text1')
var wzbq_input1 = document.getElementById('wzbq_input1')
var sure1 = document.getElementById('sure1');
var down1 = document.getElementById('down1')
var issue_content1 = document.getElementsByClassName('issue_content1')[0];
var valu1 = document.getElementsByClassName('valu1')[0]
var onnounse1 = document.getElementById('onnounse1')
var edit = document.getElementsByClassName('edit')
var mban = document.getElementById('mban');
var icon_huaban=document.getElementsByClassName('icon-huaban')[0]
var skin = document.getElementById('skin')
icon_huaban.onclick=function(){
    mban.style.display='block';
    skin.style.width='300px';
}

//发布待发布开始
issue_content1.onclick=function(){
    
    if(valu1.style.left=='48px'){
        // issue_content.onclick=function(){
            valu1.style.left='5px';
            onnounse1.style.left='20px';
            issue_content1.style.background='';
            valu1.style.background='';
            onnounse1.style.color=''
            onnounse1.innerHTML='待发布';

        // }
    }else{
        valu1.style.left='48px';
        onnounse1.style.left='5px';
        issue_content1.style.background='#5FB878';
        valu1.style.background='white';
        onnounse1.style.color='white'
        onnounse1.innerHTML='已发布';

    }
}
//发布待发布结束




append.onclick=function(){
    addtion.style.display='block'
    if(mban.style.display=='block'){
        mban.style.display='none'
    }else{
    mban.style.display='block'

    }
}
mban.onclick=function(){
    addtion.style.display='none'
    mban.style.display='none'
    skin.style.width='0px'
}

  

    down1.onclick=function(){
        redact.style.display='none';

    }



var n = con_ul.children.length ;



    var user = [{"id":"001","label":"美食","tltle":"舌尖上的中国第一季","author":"作者-1","colok":"20120104","release":"已发布"},
                 {"id":"002","label":"美食","tltle":"舌尖上的中国第一季","author":"作者-2","colok":"20120104","release":"已发布"},
                 {"id":"003","label":"美食","tltle":"舌尖上的中国第一季","author":"作者-3","colok":"20120104","release":"已发布"},
                 {"id":"004","label":"历史","tltle":"诸葛亮加码","author":"作者-4","colok":"20120104","release":"已发布"},
                 {"id":"005","label":"新闻","tltle":"新时代特色中国梦","author":"作者-5","colok":"20120203","release":"未发布"},
                 {"id":"006","label":"新闻","tltle":"新时代特色中国梦","author":"作者","colok":"20120506","release":"未发布"},
                 {"id":"007","label":"电影","tltle":"我是第一名","author":"作者","colok":"20150302","release":"未发布"}
                ]
var users=JSON.stringify(user);
localStorage.user = users;
console.log(typeof users)
var n = user.length+1;

function  aaa(){


    for(var r = 0; r<user.length;r++){
    
        var formli = document.createElement('li')
        var formli_ul = document.createElement('ul')
        formli.className='conli'
        formli.appendChild(formli_ul);
        con_ul.appendChild(formli)
        formli_ul.innerHTML="<li class='innerhtml'><div class='duoxuan'><i class='iconfont icon-xuanze'></i></div></li >"+"<li>"+ user[r].id+"</li>"+"<li>"+ user[r].label+"</li>"+"<li>"+ user[r].tltle+"</li>"+"<li>"+ user[r].author+"</li>"+"<li>"+ user[r].colok+"</li>"+"<li>"+ user[r].release+"</li>"+"<li> <button type='button' class='edit'><i class='iconfont icon-xiao47'></i>编辑</button><button type='button' class='omit'><i class='iconfont icon-lajitong'></i>删除</button></li>"
    }
}
aaa();
var omit = document.getElementsByClassName('omit');

sure.onclick=function(){
    mban.style.display='none'
    var arr = {
        id:(Array(3).join(0) + (n++)).slice(-3),
        label:wzbq_input.value,
        tltle:wztitle_text.value,
        author:people_text.value,
        colok:time.getFullYear()+"0" +time.getMonth()+"0"+time.getDay(),
        release:onnounse.innerHTML
    }
    user.push(arr);

        var formli = document.createElement('li')
        var formli_ul = document.createElement('ul')
        formli.className='conli'
        formli.appendChild(formli_ul);
        con_ul.appendChild(formli)
        formli_ul.innerHTML="<li class='innerhtml'><div class='duoxuan'><i class='iconfont icon-xuanze'></i></div></li >"+"<li>"+ user[user.length-1].id+"</li>"+"<li>"+ user[user.length-1].label+"</li>"+"<li>"+ user[user.length-1].tltle+"</li>"+"<li>"+ user[user.length-1].author+"</li>"+"<li>"+ user[user.length-1].colok+"</li>"+"<li>"+ user[user.length-1].release+"</li>"+"<li> <button type='button' class='edit'><i class='iconfont icon-xiao47'></i>编辑</button><button type='button' class='omit'><i class='iconfont icon-lajitong'></i>删除</button></li>"
        addtion.style.display='none';
        // for(var p = omit.length-1;p >= 0;p--){
        //     omit[p].index=p;
        //     omit[p].onclick=function(){
        //         // console.log(123)
                
        //         con_ul.removeChild(this.parentNode.parentNode.parentNode)
        //         user.splice(this.index,1)
        //         console.log(user,this)
            
        
        //     }
        // }
        // console.log(user)
        var users = JSON.stringify(user)
        localStorage.user = users;
        con_ul.onclick=function(e){
   
            var _this = e.target;
             if(e.target.nodeName=='BUTTON' && e.target.innerText=='删除'){
                 _this.parentNode.parentNode.parentNode.remove();
                 var id = _this.parentNode.parentNode.children[1].innerText;
        
                 for(let i=0;i<user.length;i++){
                     if(id==user[i].id){
                         console.log(user)
                         user.splice(i,1)
                         console.log(user)
                     }
                 }
                 var users = JSON.stringify(user)
                 localStorage.user = users;
                //  user.splice(this.index,1)
             }
        }

    }

// for(var p = omit.length-1;p >= 0;p--){
//     omit[p].index=p;
//     omit[p].onclick=function(){
//         // console.log(123)
//         console.log(this.index)
        
//         user.splice(this.index,1)

//         con_ul.removeChild(this.parentNode.parentNode.parentNode)
        
//         console.log(user,this)
//     }
// }

var con_ul = document.getElementById('con_ul');

con_ul.onclick=function(e){
   
    var _this = e.target;
     if(e.target.nodeName=='BUTTON' && e.target.innerText=='删除'){
         _this.parentNode.parentNode.parentNode.remove();
         var id = _this.parentNode.parentNode.children[1].innerText;

         for(let i=0;i<user.length;i++){
             if(id==user[i].id){
                 console.log(user)
                 user.splice(i,1)
                 console.log(user)
             }
         }
         var users = JSON.stringify(user)
         localStorage.user = users;

        //  user.splice(this.index,1)
     }
}
var seek_writer = document.getElementById('seek_writer');
var seek_title = document.getElementById("seek_title");
var seek_id = document.getElementById('seek_id');
var content_button = document.getElementById('content_button');
// console.log(content_button);
content_button.onclick=function(){
    // console.log(11)
    for(let i = 0;i<user.length;i++){
        if(seek_id.value == user[i].id && seek_writer.value == user[i].author&& seek_title.value==user[i].tltle&&choose.value==user[i].label){
            // for(var a = 0;a<user.length;a++){
                // conli[a].style.background=''
                // conli.style.background='red'
                // con_ul.removeChild(conli[a])
                // console.log(111)
                // user=[];
                // user.push()
                // formli.appendChild(formli_ul);
                // con_ul.appendChild(formli)
                // formli_ul.innerHTML="<li class='innerhtml'><div class='duoxuan'><i class='iconfont icon-xuanze'></i></div></li >"+"<li>"+ user[user.length-1].id+"</li>"+"<li>"+ user[user.length-1].label+"</li>"+"<li>"+ user[user.length-1].tltle+"</li>"+"<li>"+ user[user.length-1].author+"</li>"+"<li>"+ user[user.length-1].colok+"</li>"+"<li>"+ user[user.length-1].release+"</li>"+"<li> <button type='button' class='edit'><i class='iconfont icon-xiao47'></i>编辑</button><button type='button' class='omit'><i class='iconfont icon-lajitong'></i>删除</button></li>"
            // }
            // console.log(22)
            for(var q = 0;q<user.length;q++){
            conli[q].style.background=''

            }
            conli[i].style.background='red'
            
        }
    }
}


// for(var r = 0 ;r<conli.length;r++){
//     sure.onclick=function(){

//         addtion.style.display='none';
//         var formli = document.createElement('li')
//         formli.className='conli';
//         //创建一个Li
//         var formli_ul = document.createElement('ul')
//         //创建一个Li中的ul
//         var formli_ul_li1=document.createElement('li')
//         formli_ul_li1.innerHTML=innerhtml.innerHTML;
//         formli_ul.appendChild(formli_ul_li1)
//         //插入ul中的第一个li，选择
        
//         var formli_ul_li2=document.createElement('li')
//         formli_ul_li2.innerHTML=;
//         // (Array(3).join(0) + (conli.length+1)).slice(-3)
//         // if(conli.length <10){
//         //     formli_ul_li2.innerHTML='00'+conli.length+1;
//         // }else{
//         //     formli_ul_li2.innerHTML='0'+ conli.length+1;
//         // }
//         formli_ul.appendChild(formli_ul_li2)
//         //插入第二li，文章标签
        
//         var formli_ul_li3=document.createElement('li')
//         formli_ul_li3.innerHTML=wzbq_input.value;
//         formli_ul.appendChild(formli_ul_li3)
//         //插入第三个li，文章标签
        
//         var formli_ul_li4=document.createElement('li')
//         formli_ul_li4.innerHTML=wztitle_text.value;
//         formli_ul.appendChild(formli_ul_li4)
//         //插入第四个li，文章标题
        
//         var formli_ul_li5=document.createElement('li')
//         formli_ul_li5.innerHTML=people_text.value;
//         formli_ul.appendChild(formli_ul_li5);
//         //插入第五个li，作者
        
//         var formli_ul_li6=document.createElement('li')
//         formli_ul_li6.innerHTML= time.getFullYear()+"0" +time.getMonth()+"0"+time.getDay();
//         formli_ul.appendChild(formli_ul_li6);
//         //插入第六个li，上传时间
        
//         var formli_ul_li7=document.createElement('li')
//         formli_ul_li7.innerHTML=onnounse.innerHTML;
//         formli_ul.appendChild(formli_ul_li7);
//         //插入第七个li，发布情况
        
//         var formli_ul_li8=document.createElement('li')
//         formli_ul_li8.innerHTML=c_bottom.innerHTML;
//         formli_ul.appendChild(formli_ul_li8);
//         //第七个li，两个按钮
//         console.log(formli_ul_li8)
        
//         formli.appendChild(formli_ul)
//         con_ul.appendChild(formli)
//         for(var b = 0;b<duoxuan.length;b++){
//             duoxuan[b].index = b;
//             icon_xuanze[b].style.display='none';
//             duoxuan[b].onclick=function(){
//                 if(icon_xuanze[this.index].style.display=='none'){
//                     icon_xuanze[this.index].style.display='block';
//                 }else{
//                     icon_xuanze[this.index].style.display='none';
//                 }
//             }
//         }
//         for(var p = 0;p<omit.length;p++){
//             omit[p].index=p;
//             omit[p].onclick=function(){
//                 // console.log(123)
//                 console.log(this.index)
                
//                 con_ul.removeChild(this.parentNode.parentNode.parentNode)
//             }
            
//         }
        
//         }
// }

for(var b = 0;b<duoxuan.length;b++){
                duoxuan[b].index = b;
                icon_xuanze[b].style.display='none';
                duoxuan[b].onclick=function(){
                    if(icon_xuanze[this.index].style.display=='none'){
                        icon_xuanze[this.index].style.display='block';
                    }else{
                        icon_xuanze[this.index].style.display='none';
                    }
                }
            }
// var omit = document.getElementsByClassName('omit');
// for(var p = 0;p<omit.length;p++){
//     omit[p].index=p;
//     omit[p].onclick=function(){
//         console.log(123)
//         omit[this.index].parentNode.parentNode.parentNode.parentNode.removeChild(omit[this.index].parentNode.parentNode.parentNode)
//     }
// }

// 点击确定以后往表格内添加子节点

var down = document.getElementById('down')
down.onclick=function(){
   
addtion.style.display='none';
mban.style.display='none'
}


// var chang = con_ul.children.length;
            // var flag = true;
            
          











var addtion_top = document.getElementById('addtion_top')
var nav = document.getElementById('nav')
addtion_top.onmousedown=function(ev){
    var oEvent = ev || event;
            //pos=getpos(oEvent);
            //鼠标的位置减去DIV的位置
           
            if (addtion.setCapture) {
                disX = oEvent.clientX - addtion.offsetLeft;
                disY = oEvent.clientY - addtion.offsetTop;
                addtion.onmousemove = mouseMove;
                addtion.onmouseup = thisNull
                //在IE7下使用事件捕获，确保所有的事件都指向DIV
                addtion.setCapture();
                return false;
            } else {
                disX = oEvent.clientX - addtion.offsetLeft;
                disY = oEvent.clientY - addtion.offsetTop;

                document.onmousemove = mouseMove;
                document.onmouseup = thisNull
                return false;
            };
            
}
function mouseMove(ev) {
    console.log(addtion.offsetLeft)
    var oEvent = ev || event;
    var l=oEvent.clientX-disX;
    var t=oEvent.clientY-disY;
    
    var r=document.body.offsetWidth - addtion.offsetWidth;
    var b=document.body.offsetHeight - addtion.offsetHeight;

    if(l<0) l=0;
    if(l>r) l=r;
    if(t<0) t=0;
    if(t>b) t=b;

    addtion.style.left=l+'px';
    addtion.style.top =t+'px';
    addtion.style.bottom =b+'px';
};

function thisNull() {
    this.onmousemove = null;
    this.onmouseup = null;
    //在使用了事件捕获之后，在鼠标抬起的时候。需要释放这个事件捕获，不然的话，无法进行任何操作
    if (document.releaseCapture) {
        document.releaseCapture();
    };
};
//添加菜单的拖拽事件


var icon_fangda=document.getElementsByClassName('icon-fangda')[0];
icon_fangda.onclick=function(){
    // var docElm = document.getElementById('ppt-box');//要被全屏的元素
    //W3C   

        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
            if(typeof rfs != "undefined" && rfs) {
                rfs.call(el);
               
            };
            
          return;
    


}
// console.log(con_ul_Ul7.children)

//编辑窗口


// addtion.onmousedown=function(evt){
//     console.log(addtion)
// var e = evt||window.event;
// var disX = e.clientX - parseInt(addtion.style.left)
// var disY = e.clientY - parseInt(addtion.style.top)

// document.onmousemove =function(evt){
// var e = evt||window.event;
// addtion.style.left = e.clientX - disX +'px';
// addtion.style.top = e.clientY - disY +'px';

// }
// document.onmouseup=function(){
//     document.onmousemove=null;
//     document.onmouseup=null;
// }
// }
// var content_button = document.getElementById('content_button');
// content_button.onclick=function(){

// }
var issue_content = document.getElementsByClassName('issue_content')[0];
var valu = document.getElementsByClassName('valu')[0]
var onnounse = document.getElementById('onnounse')
issue_content.onclick=function(){
    
    if(valu.style.left=='48px'){
        // issue_content.onclick=function(){
            valu.style.left='5px';
            onnounse.style.left='20px';
            issue_content.style.background='';
            valu.style.background='';
            onnounse.style.color=''
            onnounse.innerHTML='待发布';

        // }
    }else{
        valu.style.left='48px';
        onnounse.style.left='5px';
        issue_content.style.background='#5FB878';
        valu.style.background='white';
        onnounse.style.color='white'
        onnounse.innerHTML='已发布';

    }
}


for(var t = 0 ;t<edit.length;t++){
    edit[t].index=t;
    edit[t].onclick=function(){
        var that = this
        redact.style.display='block';
        wztitle_text1.value=user[this.index].tltle;
        people_text1.value=user[this.index].author;
        wzbq_input1.value=user[this.index].label;
        onnounse1.innerHTML=user[this.index].release;
        console.log(that)
        sure1.onclick=function(e){
            console.log(that.index)
            user[that.index].tltle=wztitle_text1.value;
            user[that.index].author=people_text1.value;
            user[that.index].label= wzbq_input1.value;
            user[that.index].release=onnounse1.innerHTML;
            // console.log(conli[that.index].children)
            // var _this = e.target;
            // if(e.target.nodeName=='BUTTON' && e.target.innerText=='编辑'){
            //     var id = _this.parentNode.parentNode.children[that.index].innerText;
            //     wztitle_text1.value=id;
            //     people_text1.value=
               
            //     }
            that.parentNode.parentNode.children[3].innerHTML=user[that.index].tltle;
            that.parentNode.parentNode.children[4].innerHTML=user[that.index].author;
            that.parentNode.parentNode.children[2].innerHTML=user[that.index].label;
            that.parentNode.parentNode.children[6].innerHTML=user[that.index].release;

                 var users = JSON.stringify(user)
                 localStorage.user = users;
            redact.style.display='none';
    
        }       

    }
    
}
// sure1.onclick=function(){
    
//     redact.style.display='none';
// }
var icon_caidan = document.getElementsByClassName('icon-caidan')[0];
var main = document.getElementsByClassName('main')[0];
// nav.style.width=220+'px'
icon_caidan.onclick=function(){
    
    if(nav.style.width==220+'px'){
        nav.style.width='45px';
        main.style.width='1875px';
        main.style.marginLeft='45px';
    }else{
        nav.style.width='220px';
        main.style.width='1700px';
        main.style.marginLeft='220px';

    }
 

}
