class shoesManagement {
    constructor(arr) {
        this.shoes = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.shoes.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += this.shoes[i].stt;
            table += '</td>';

            table += '<td>';
            table += this.shoes[i].name;
            table += '</td>';

            table += '<td>';
            table += this.shoes[i].size;
            table += '</td>';

            table += '<td>';
            table += this.shoes[i].color;
            table += '</td>';

            table += '<td>';
            table += this.formatCurrency(this.shoes[i].price);
            table += '</td>';

            table += '<td class="zoom">';
            table += '<img width="100px" height="100px" src=" ' + this.shoes[i].img + '"> ';
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteShoes(' + i + ')">Delete</button> ' +
                ' <button  style="background-color: orange ; color: white" type="button" onclick="editShoes(' + i + ')">Edit</button>' +
                '</td>';

            table += '</tr>';

        }
        document.getElementById('list-shoes').innerHTML = table;
    }
    addShoes(shoes) {
        this.shoes.push(shoes);
    }
    delete(stt) {
        this.shoes.splice(stt, 1);
    }
    findShoesById(stt) {
        return this.shoes[stt];
    }
    edit(shoes, stt, name, size, color, price, img) {
        shoes.edit(stt, name, size, color, price, img);
    }
    formatCurrency(number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
    }
}