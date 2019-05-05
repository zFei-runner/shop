class tableEdit{
    constructor (selector) {
        this.tbody=document.querySelector(selector);
        this.editBtn=this.tbody.querySelector(".btn-edit");
        this.delBtn=this.tbody.querySelector(".btn-del");
        this.okBtn=this.tbody.querySelector(".btn-ok");
        this.cancelBtn=this.tbody.querySelector(".btn-cancel");

        this.bindEvents();
    }
    bindEvents () {
        this.tbody.onclick= e => {
            e=e||event;
            let target = e.target || e.srcElement;
            let tr = target.parentNode.parentNode;
            if(target.className.includes("btn-edit")){
                this. editBtnClick(tr);
            }else if(target.className.includes("btn-del")){
                this. delBtnClick(tr);
            }else if(target.className.includes("btn-ok")){
                this. okBtnClick(tr);
            }else if(target.className.includes("btn-cancel")){
                this. cancelBtnClick(tr);
            }
        };
    }
    //编辑
    editBtnClick (tr) {
        Array.from(tr.querySelectorAll("span")).forEach( span => {
            span.nextElementSibling.value = span.innerHTML;
        });
        tr.classList.add("edit");
    }
    //删除
    delBtnClick (tr) {
        if(confirm("确定要删除吗？")){
            let id = tr.getAttribute("data-id");
            //连接数据库，进行删除
            tools.ajaxGetPromise("api/v1/delShop.php",{id}).then(data=>{
                console.log(data);
                if(data.res_Code===1){
                    alert(data.res_message);
                    rendershop.render();//重新渲染页面
                }else{
                    alert(data.res_message);//删除失败
                }
            });     
        }
    }
    //确认
    okBtnClick (tr) {
        let inputNum =  tr.querySelector(".inputNum"),
            inputPrice=  tr.querySelector(".inputPrice"),
            num=inputNum.value,
            price=inputPrice.value,
            id = tr.getAttribute("data-id");
        tools.ajaxGetPromise("api/v1/okShop.php",{id,price,num}).then(data=>{
            tr.classList.remove("edit");
            if(data.res_code===1){
                inputNum.previousElementSibling.innerHTML=num;
                inputPrice.previousElementSibling.innerHTML=price;
                alert(data.res_message);
            }else{
                alert(data.res_message);
            }
            
        });
        // Array.from(tr.querySelectorAll("span")).forEach( span => {
        //     span.innerHTML = span.nextElementSibling.value;
        // });
        
    }
    //取消
    cancelBtnClick (tr) {
        tr.classList.remove("edit");
    }
}

new tableEdit(".tbody-list");