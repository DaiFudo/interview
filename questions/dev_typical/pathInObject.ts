interface obj {
    a: string;
    b: { b: string };
    c: boolean;
}

const obj: obj = {
    a: 'Hola',
    b: {b: 'Bye'},
    c: true,
}
// obj, path
const sayPath = (obj: obj, path: string) => {
    if (obj) {
        return path.split('.')
            .reduce((acc, items) => acc && acc[path], obj)
    } else return undefined
}

sayPath(obj, 'a')