/**
 * File Name: global.js
 *
 * Revision History:
 *      Nolan Chaves, 2024-03-20, : Created
 */

function print(){
    let position = $("#txtPosition").val();
    let partNumber = $("#txtPartNumber").val();
    let description = $("#txtDescription").val();

    let message = (`
    ^XA^PQ1^MD15 ^FO25,50^A0N,100,80^FD${position} 
    ^FS ^FO195,55^A0N,55,45^FD${partNumber}
    "^FS ^FO195,115^A0N,35,35^FD${description}
    ^FS ^XZ^XA^MD0^XZ`);

    let newWindow = window.open('', '_blank');

    newWindow.document.write(message);

    newWindow.print();

};