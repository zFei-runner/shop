class renderShop{
    constructor(){
        this.tbody=document.querySelector(".tbody-list");
        this.render();
    }
    //渲染页面数据
    render() {
        
        tools.ajaxGetPromise("api/v1/render.php").then(date =>{
            let html="";
            Array.from(date).forEach( (shop,index) => {
                html += `<tr data-id="${shop.id}">
                <td>${index + 1}</td>
                <td>${shop.name}</td>
                <td>
                    <span>${shop.price}</span>
                    <input type="text" class="inputPrice">
                </td>
                <td>
                    <span>${shop.num}</span>
                    <input type="text" class="inputNum">
                </td>
                <td>
                    <button type="button" class="btn btn-xs btn-edit btn-success">编辑</button>
                    <button type="button" class="btn btn-xs btn-del btn-danger">删除</button>
                    <button type="button" class="btn btn-xs btn-ok btn-info">确定</button>
                    <button type="button" class="btn btn-xs btn-cancel btn-warning">取消</button>
                </td>
                </tr>`;
                this.tbody.innerHTML = html;
            });
        });

    }
}
let rendershop = new renderShop();
