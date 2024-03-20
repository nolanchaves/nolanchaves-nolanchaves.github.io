/**
 * File Name: global.js
 *
 * Revision History:
 *      Nolan Chaves, 2024-03-20, : Created
 */

function btnPrint_click() {
    print();
}

function init() {
    console.log("DOM is ready");
    $('#btnPrint').on("click", btnPrint_click);
}

$(document).ready(function () {
    init();
});