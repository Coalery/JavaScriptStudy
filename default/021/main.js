function outter() {
    var title = 'coding everybody';
    return function() {
        console.log(title);
    }
}
inner = outter();
inner();


function factory_movie(title) {
    return {
        get_title : () => title,
        set_title : (_title) => {
            if(typeof _title === 'string') {
                title = _title
            } else {
                console.log('영화 제목은 문자열만 가능합니다.');
            }
        }
    }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());

ghost.set_title('Ghooooooooooost');
console.log(ghost.get_title());

ghost.set_title(1234);


var arr = [];
for(var i = 0; i < 5; i++) {
    // arr[i] = function() {
    //     console.log(i);
    // }
    arr[i] = function(id) {
        return function() {
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}