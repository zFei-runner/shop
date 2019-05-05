class addShop{
    constructor () {
        // this.addModal = document.querySelector("#addModal");
        this.name=document.querySelector("#inputName");
        this.price=document.querySelector("#inputPrice");
        this.num=document.querySelector("#inputNum");
        this.btn=document.querySelector("#addShop-btn");
        this.init();
        
    }
    init () {
       
        this.btn.onclick = () =>{

             
            let price = this.price.value,
             num = this.num.value,
             name = this.name.value;
           if(name==="" || price==="" || num===""){
                alert("不能添加为空的商品");
                return;
           }
           tools.ajaxGetPromise("api/v1/addShop.php",{name,price,num}).then( date =>{
                if(date.res_Code===1){
                //    console.log(date);
                    alert(date.res_message);
                    //添加完成后清空input中输入的内容
                    this.name.value =  this.price.value = this.num.value = "";
                    //隐藏模态框
                    $('#addModal').modal('hide');
                    rendershop.render();
               }
                
            
            });

        
        }
    }




}
new addShop();