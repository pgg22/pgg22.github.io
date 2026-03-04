const type = ['deuxd', 'troisd', 'games', 'crafts', 'sewing'];


function changeWindow(s) {
    document.getElementById(s).style.display = "block";
    for(let i=0; i<type.length; i++) {
        if (type[i]!=s) {
            document.getElementById(type[i]).style.display = "none";
        }
    }
}