const graph = {
    a: ['b', 'c',],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g']
}

let counter = 0;



const breadthSearch = (graph, start, end) => {
    let queue = []

    queue.push(start);

    while(queue.length > 0){
        const current = queue.shift();
        if(!graph[current]){
            graph[current] = []
        }
        if(graph[current].includes(end)){
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}


breadthSearch(graph, 'a', 'x');


