function getApiUrl(){
    return "http://localhost:3001/"
}


function convertToRupiah(number) {
    number = number.toString()
    number = number.replace(/[^0-9 ]/g, "")
    var rupiah = '';
    var number_rev = number.toString().split('').reverse().join('');
    for (var i = 0; i < number_rev.length; i++) if (i % 3 == 0) rupiah += number_rev.substr(i, 3) + '.';
    rupiah = rupiah.split('', rupiah.length - 1).reverse().join('');
    return (rupiah.length < 1 ? '0' : rupiah);
}

export default {
    getApiUrl, convertToRupiah
}