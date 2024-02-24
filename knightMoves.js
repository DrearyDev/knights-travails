'use strict';
/* Board:

[7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7]

[6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7]

[5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7]

[4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7]

[3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7]

[2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7]

[1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7]

[0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]

-------------------------------*/

/* ---
pass in a coordinate and will return all possible moves assuming a knight
is on that spot. --- */
function calcPossibleMoves(origin) {
    let moves = [
        [origin[0] + 2, origin[1] + 1],
        [origin[0] + 2, origin[1] - 1],
        [origin[0] - 2, origin[1] + 1],
        [origin[0] - 2, origin[1] - 1],
        [origin[0] + 1, origin[1] + 2],
        [origin[0] + 1, origin[1] - 2],
        [origin[0] - 1, origin[1] + 2],
        [origin[0] - 1, origin[1] - 2]
    ];

    moves = moves.filter((point) => {
        if ((point[0] >= 0 && point[1] >= 0) &&
            (point[0] <= 7 && point[1] <= 7)) {
            return point;
        };
    });

    return moves;
};

function knightMoves(start, end) {
    //make sure coordinates are valid
    for (let i = 0; i < 2; i++) {
        if (start[i] < 0 || start[i] > 7){ return 'invalid start coordinate' };
        if (end[i] < 0 || end[i] > 7){ return 'invalid end coordinate' };
    };

    const queue = [[start]];
    const visited = new Set();

    while(queue[0]) {
        const path = queue.shift();
        const lastSquare = path[path.length - 1];

        if (lastSquare[0] === end[0] && lastSquare[1] === end[1]) {
            return path;
        };

        for (const move of calcPossibleMoves(lastSquare)) {
            if (!visited.has(`[${move}]`)) {
                queue.push([...path, move]);
                visited.add(`[${move}]`);
            };
        };
    };

    return null;
};

console.log(knightMoves([0,0], [7,7]));

/*

queue => is a queue of arrays which represent different paths that we could take.

path => is the next up path in the queue to find the next square by using calcPossibleMoves(). If the
square returned has not been visited before, then we push the path plus that move to the queue and
then add the square to the visited set.

lastSquare => The last square that was visited that we got from the path that was next up in our
queue. We use this to calculate the possible moves we could do and then only use the ones that end up
on squares we havent visited yet.

visited => is a set with all squares visited. we never want to go on a square we've already been on
within a path because that path will never be the shortest route to the end. We use this to check if
a square has been visited already. If not, then we can add it to the end of path and queue it up.

I use a BFS algorithm because we go in level order and we will find the first path to reach the end
faster than with DFS. We can return that path right away since we KNOW it must be the shortest since
it was the first to reach the end and we dont care about the other paths.

*/




