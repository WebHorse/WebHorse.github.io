function Request(obj){
    this.methods = obj.methods;         //声明一个变量，将obj的methods属性赋值给methods
    this.url = obj.url;                 //声明一个变量，将obj的url属性赋值给url
    this.data = obj.data;               //声明一个变量，将obj的date属性赋值给打他
    var self = this;                    //提前将this赋值给self

    if(typeof Request.prototype.createXHR != 'function'){       //第一条条件判断语句，如果判断request的原型中的createXHr是否为function类型，是返回false，不是返回true
        Request.prototype.createXHR = function(){       //因为原型中并不存在createXHr所以执行里面的代码，在原型中插入该属性，并且将一个匿名函数赋值给它
                if(typeof XMLHttpRequest !="undefined"){    //判断XMLHTTpRequest是否定义了，未定义为false，定义了为true
                    return new XMLHttpRequest();        //在定义了的情况下返回一个创建了的对象，XMLHTTpRequest
                }else if(typeof ActiveXObject !="undefined"){   //当第一条判断不满足时，来判断这一条，判断ActiveXobject是否被定义，未定义返回true，定义了返回false
                    var version = ['MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP'];// 将一个带有三个字符串的数值赋值给version
                    for(var i = 0;i<version.length; i++){   //进入一个for循环，运行4次
                        try{    
                            return new ActiveXObject(version[i])    //try中的语句是进行测试代码块中的错误   ，在这里返回了一个ActiveXobject的实例
                        }
                        catch(e){
                            // throw new Error('您的浏览器不支持AJAX对象')      在catch中处理try中抛出的错误
                        }
                    }
                }else{
                    throw new Error('您的浏览器不支持AJAX对象')
                }
        }
    }   

    if(typeof Request.prototype.formData != 'function'){    //这是另一个条件判断语句，当第一个if执行完毕执行这个if，判断request的原型中formDate是否为一个函数
        Request.prototype.formData = function(data){    //当不是函数的时候进入代码块，给原型中添加formDate函数，并带有一个形参
            var dataArr = [];   //建立一个空数组
            for(var i in data){ //在date中进行枚举
                dataArr.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));    //往空数组中添加encodeURIComponent(i)+'='+encodeURIComponent(data[i])
            }
            return dataArr.join('&')    //用&符号讲数值在数组中分隔
        }
    }


    var xhr = this.createXHR();     //讲request原型中的createXHR属性赋值给xhr，会用到this的原因是，不知道，很好奇，原型就是会被共享
    var FormData,objData;   //提前声明两个值
    if(typeof self.data === 'object'){      //判断this的date是否绝对等于object
        objData = self.formData(self.data)  //是的话进入判断语句，讲this.formDate(this.data)赋值给之前声明的objDate
    }else{
        objData = self.data;        //如果不是则将this.date赋值给之前声明的objData
    }


    if(self.methods.toUpperCase() === 'GET'){       //判断调用的这个对象的methods属性中的toupperCase方法返回值是否绝对等于GET
        FormData = self.url+'?random='+Math.random()+'&'+objData        //将条用的这个对象的url属性加上‘？random’。。。。赋值给定义好的FormData变量
    }else{
        FormData = objData;     //将objData赋值给FormData，使他们有羁绊
    }

    xhr.open(self.methods,FormData,true)        //变量xhr现在是一个函数，该函数中的open方法中传入四个参数
    if(self.methods.toUpperCase() === 'POST'){
        xhr.setRequestHeader("Content-Type",  "application/x-www-form-urlencoded");
        xhr.send(FormData)
    }else{
        xhr.send(null)
    }
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                // console.log(this)
                obj.success({FormData:FormData,data:xhr.responseText,success:"OK",status:200,readyState:4})  //回调
             }  
        }
    }
}

function ajax(obj){
    return new Request(obj)
}


