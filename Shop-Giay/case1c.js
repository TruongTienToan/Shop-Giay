let shoes = new Shoes('01', "Adidas Xspeedportal", '38-42', 'Trắng Cam',3000000,'./assets/images/1.png');
let shoes1 = new Shoes('02','Adidas Predator','36-42','Trắng', 2700000,'./assets/images/2.png');
let shoes2 = new Shoes('03','Adidas Predator','38-42','Đỏ',2900000,'./assets/images/3.png');
let shoes3 = new Shoes('04','Adidas Xspeedportal','39-42','Xanh lá',3500000,'./assets/images/4.png');
let arr =[shoes, shoes1, shoes2, shoes3];
let manage = new shoesManagement(arr);

function addShoes(){
    let stt = document.getElementById('stt').value;
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let color = document.getElementById('color').value;
    let price = document.getElementById('price').value;
    let img = document.getElementById('img').value;

    let shoes = new Shoes(stt,name,size,color,price,img);
    manage.addShoes(shoes);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('stt').value = '';
    document.getElementById('name').value = '';
    document.getElementById('size').value = '';
    document.getElementById('color').value = '';
    document.getElementById('price').value = '';
    document.getElementById('img').value= '';
}

function deleteShoes(stt) {
        manage.delete(stt);
        manage.showList();
}

let shoesId = 0;
function editShoes(id){
    let shoes = manage.findShoesById(id);
    document.getElementById('stt').value = shoes.stt;
    document.getElementById('name').value = shoes.name;
    document.getElementById('size').value = shoes.size;
    document.getElementById('color').value = shoes.color;
    document.getElementById('price').value = shoes.price;
    document.getElementById('img').value = shoes.img;

    shoesId = id;
}

function updateShoes(){
    let stt = document.getElementById('stt').value;
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let color = document.getElementById('color').value;
    let price = document.getElementById('price').value;
    let img = document.getElementById('img').value;

    let shoes = manage.findShoesById(shoesId);
    manage.edit(shoes,stt,name,size,color,price, img);
    manage.showList();
    clear();
}

manage.showList();
