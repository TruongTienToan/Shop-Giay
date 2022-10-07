class Shoes {
    constructor (stt, name, size, color, price, img){
        this.stt= stt;
        this.name= name;
        this.size= size;
        this.color= color;
        this.price= price;
        this.img= img;
    }
    getSTT() {
        return this.stt;
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    getColor() {
        return this.color;
    }
    getprice() {
        return this.price;
    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setFullname(name) {
        this.name=name;
    }
    setsize(size) {
        this.size=size;
    }
    setcolor(color) {
        this.color=color;
    }
    setPrice(price) {
        this.price=price;
    }
    setImg(img) {
        this.img=img;
    }
    
    edit(stt, name, size,color, price, img) {
        this.stt = stt;
        this.name = name;
        this.size = size;
        this.color = color;
        this.price = price;
        this.img = img;
    }
}