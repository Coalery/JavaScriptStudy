var o = {};
var p = {};

function func() {
    switch(this) {
        case o:
            console.log('o');kjk
            break;
        case p:
            console.log('p');
            break;
        case globalThis:
            console.log('global');
            break;
    }
}

func(); // global
func.apply(o); // o
func.call(p); // p