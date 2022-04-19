
document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
    // '</script>\n' +
    var table = document.getElementById('financeTable');
    var wb = XLSX.utils.table_to_book(table);
    console.log(wb)


    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
    var buf = new ArrayBuffer(wbout.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xFF; //convert to octet

    var file = new Blob([buf], {type: 'application/octet-stream'});

    console.log('opening another')
        var a = document.createElement("a"), url = URL.createObjectURL(file);
        a.href = url;
        a.target="_blank"
        document.body.appendChild(a);
        a.click();

};
