window.onload = function(){
    var sc = document.getElementById('screen');
    var  nums = document.getElementsByClassName('number');
    var dict1 = '',dict2 = '',fuhao ='',m='';
    var denghao = document.getElementById('denghao');
    var yunsuan = document.getElementsByClassName('oprator');

    for(i=0;i<nums.length;i++){
        nums[i].onclick = function(){
            if(this.innerHTML !== '.' || sc.innerHTML.indexOf('.') ==-1){
                if(this.innerHTML !=='(-)'){
                    if(fuhao ==''){
                        dict1 = dict1+this.innerHTML;
                        sc.innerHTML = dict1;
                    }else{
                        dict2 = dict2+this.innerHTML;
                        sc.innerHTML = dict2;
                    }
                }else{
                    if(sc.innerHTML.indexOf('-') !== -1){
                        if(fuhao ==''){
                            dict1 = Math.abs(Number(dict1));
                            sc.innerHTML = f;
                        }
                        else{
                            dict2 = Math.abs(Number(dict2));
                            sc.innerHTML = dict2;
                        }
                    }
                    else{
                        if(fuhao ==''){
                            dict1 = '-' +dict1
                            sc.innerHTML = dict1;
                        }
                        else{
                            dict2 = '-' +dict2;
                            sc.innerHTML = dict2;
                        }
                    }
                }
            }
        }
    }

    var re = document.getElementById('cun');
    var cunchu = document.getElementsByClassName('cunchu')
    for(i=0;i<cunchu.length;i++){
        cunchu[i].onclick = function(){
            if(this.innerHTML =='m+'){ re.style.display ='block';m =''+(Number(m)+Number(sc.innerHTML))};
            if(this.innerHTML =='m-'){ re.style.display ='none'; m = ''};
            if(this.innerHTML =='mr'){  sc.innerHTML = m;dict1=m;};
            if(this.innerHTML == 'mc'){re.style.display ='none'; m = '';}
        }
    }


    for(var i=0;i<yunsuan.length;i++){
        yunsuan[i].onclick = function(){
            fuhao = this.innerHTML.trim();

        }
    };
    denghao.onclick = function(){
        if(fuhao == 'x<sup>y</sup>'){sc.innerHTML = Number(Math.pow(dict1,dict2));}
        if(fuhao == '+'){sc.innerHTML = Number(dict1) + Number(dict2);}
        if(fuhao == '-'){sc.innerHTML = Number(dict1) - Number(dict2);}
        if(fuhao == '*'){sc.innerHTML = Number(dict1) * Number(dict2);}
        if(fuhao == '/'){sc.innerHTML = Number(dict1) / Number(dict2);}
        dict1 = sc.innerHTML; dict2 = ''; fuhao = '';
    }
    var clear = document.getElementById('clear');
    clear.onclick = function(){
        sc.innerHTML = '0';
        fuhao = '';
        dict1 = '';
        dict2 = '';
    };




    function factorial(x) {
        if(x < 2)
            return 1;
        else
            return x * factorial(x - 1);
    }

    var sd = document.getElementsByClassName('sd');
    for(var i=0;i<sd.length;i++){
        sd[i].onclick = function(){
            if(this.innerHTML == '%'){sc.innerHTML = Number(dict1/100);}
            if(this.innerHTML == 'x<sup>-1</sup>'){sc.innerHTML = Number(1/dict1);}
            if(this.innerHTML == 'x²'){sc.innerHTML = Number((dict1)*(dict1));}
            if(this.innerHTML == 'x³'){sc.innerHTML = Number((dict1)*(dict1)*(dict1));}
            if(this.innerHTML == 'x!'){sc.innerHTML = Number(factorial(dict1));}
            if(this.innerHTML == '√'){sc.innerHTML = Number(Math.sqrt(dict1));}
            if(this.innerHTML == 'sin'){sc.innerHTML = Number(Math.sin(dict1));}
            if(this.innerHTML == 'cos'){sc.innerHTML = Number(Math.cos(dict1));}
            if(this.innerHTML == 'tan'){sc.innerHTML = Number(Math.tan(dict1));}
            if(this.innerHTML == 'in'){sc.innerHTML = Math.log(dict1);if(sc.innerHTML=='-Infinity'){sc.innerHTML='-∞';}}
            if(this.innerHTML == 'sinh'){sc.innerHTML = Number(Math.sinh(dict1));}
            if(this.innerHTML == 'cosh'){sc.innerHTML = Number(Math.cosh(dict1));}
            if(this.innerHTML == 'tanh'){sc.innerHTML = Number(Math.tanh(dict1));}
            if(this.innerHTML == 'log'){sc.innerHTML = Math.log10(dict1);if(sc.innerHTML=='-Infinity'){sc.innerHTML='-∞';}}
            if(this.innerHTML == 'Rand'){sc.innerHTML = Number(Math.random());}
            if(this.innerHTML == 'π'){sc.innerHTML = Number(Math.PI);}
            if(this.innerHTML == 'e'){sc.innerHTML = Number(Math.E);}
            dict1 =sc.innerHTML ;dict2='';sd='';
        }
    }









};
