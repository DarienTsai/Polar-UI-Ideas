/**
 * for the main screen
 */
setTimeout(fresh, 1);
function fresh(){
    let doc = document;
    document.replaceChild(document.getElementsByTagName('html')[0], doc);
}
