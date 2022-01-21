// Your code here
window.onload = () => {
    let player = "x";
    let played = new Set();
    let boardMatrix = [[0, 0, 0],
                       [0, 0, 0],
                       [0, 0, 0]]
    const h1 = document.getElementById("winner");

    const findDiagonalNeighborsLeft = (node, matrix, player) => {
        const row = node[0];
        const col = node[1];
        let neighbors = [];

        // top left
        if (row > 0 && col > 0) {
            if (matrix[row - 1][col - 1] === player) {
                neighbors.push([row - 1, col - 1]);
            }
        }
        // bottom right
        if (row < matrix.length - 1 && col < matrix[row].length - 1) {
            if (matrix[row + 1][col + 1] === player) {
                neighbors.push([row + 1, col + 1]);
            }
        }

        return neighbors;
    }
    const findDiagonalNeighborsRight = (node, matrix, player) => {
        const row = node[0];
        const col = node[1];
        let neighbors = [];

        // top right
        if (row > 0 && col < matrix[row].length - 1) {
            if (matrix[row - 1][col + 1] === player) {
                neighbors.push([row - 1, col + 1]);
            }
        }
        // bottom left
        if (row < matrix.length - 1 && col > 0) {
            if (matrix[row + 1][col - 1] === player) {
                neighbors.push([row + 1, col - 1]);
            }
        }
        return neighbors;
    }
    const findNeighborsRow = (node, matrix, player) => {
        const row = node[0];
        const col = node[1];
        let neighbors = [];

        // right
        if (col < matrix[row].length - 1) {
            if (matrix[row][col + 1] === player) {
                neighbors.push([row, col + 1]);
            }
        }
        // left
        if (col > 0) {
            if (matrix[row][col - 1] === player) {
                neighbors.push([row, col - 1]);
            }
        }
        return neighbors;
    }
    const findNeighborsCol = (node, matrix, player) => {
        const row = node[0];
        const col = node[1];
        let neighbors = [];

        // top
        if (row > 0) {
            if (matrix[row - 1][col] === player) {
                neighbors.push([row - 1, col]);
            }
        }
        // bottom
        if (row < matrix.length - 1) {
            if (matrix[row + 1][col] === player) {
                neighbors.push([row + 1, col]);
            }
        }
        return neighbors;
    }

    function pathTraversal(node, matrix, visited, player, key) {
        const queue = [node];
        visited.add(`${node}`);
        let count = 0;

        while (queue.length) {
            count++;
            const removed = queue.shift();
            if (count === 3) {
                return true;
            }
            let neighbors;
            if (key === 1) {
                neighbors = findDiagonalNeighborsLeft(removed, matrix, player);
            } else if (key === 2) {
                neighbors = findNeighborsCol(removed, matrix, player);
            } else if (key === 3) {
                neighbors = findNeighborsRow(removed, matrix, player);
            } else if (key === 4) {
                neighbors = findDiagonalNeighborsRight(removed, matrix, player);
            }
            neighbors.forEach( coord => {
                if (!visited.has(`${coord}`)) {
                    visited.add(`${coord}`);
                    queue.push(coord);
                }
            });
        }
        return false;
    }

    function checkWinner(node, matrix, player) {
        let visited = new Set();
        for (let i = 1; i <= 5; i++) {
            if (pathTraversal(node, matrix, visited, player, i)) {
                return true;
            }
        }
        return false;
    }

    function setWinner(player) {
        h1.innerText = `WINNER: ${player}`;
        h1.style.display = "block";
    }

    document.querySelector(".board1").addEventListener("click", e => {
        const space1 = document.querySelector(".board1");
        if (player === "x" && !played.has("1")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("1");
            boardMatrix[0][0] = 1;
            if(checkWinner([0,0], boardMatrix, 1)) {
                setWinner("X");
            }

        } else if (player === "o" && !played.has("1")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("1");
            boardMatrix[0][0] = 2;
            if(checkWinner([0,0], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board2").addEventListener("click", e => {
        const space1 = document.querySelector(".board2");
        if (player === "x" && !played.has("2")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("2");
            boardMatrix[0][1] = 1;
            if(checkWinner([0,1], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("2")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("2");
            boardMatrix[0][1] = 2;
            if(checkWinner([0,1], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board3").addEventListener("click", e => {
        const space1 = document.querySelector(".board3");
        if (player === "x" && !played.has("3")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("3");
            boardMatrix[0][2] = 1;
            if(checkWinner([0,2], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("3")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("3");
            boardMatrix[0][2] = 2;
            if(checkWinner([0,2], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board4").addEventListener("click", e => {
        const space1 = document.querySelector(".board4");
        if (player === "x" && !played.has("4")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("4");
            boardMatrix[1][0] = 1;
            if(checkWinner([1,0], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("4")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("4");
            boardMatrix[1][0] = 2;
            if(checkWinner([1,0], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board5").addEventListener("click", e => {
        const space1 = document.querySelector(".board5");
        if (player === "x" && !played.has("5")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("5");
            boardMatrix[1][1] = 1;
            if(checkWinner([1,1], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("5")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("5");
            boardMatrix[1][1] = 2;
            if(checkWinner([1,1], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board6").addEventListener("click", e => {
        const space1 = document.querySelector(".board6");
        if (player === "x" && !played.has("6")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("6");
            boardMatrix[1][2] = 1;
            if(checkWinner([1,2], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("6")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("6");
            boardMatrix[1][2] = 2;
            if(checkWinner([1,2], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board7").addEventListener("click", e => {
        const space1 = document.querySelector(".board7");
        if (player === "x" && !played.has("7")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("7");
            boardMatrix[2][0] = 1;
            if(checkWinner([2,0], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("7")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("7");
            boardMatrix[2][0] = 2;
            if(checkWinner([2,0], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board8").addEventListener("click", e => {
        const space1 = document.querySelector(".board8");
        if (player === "x" && !played.has("8")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("8");
            boardMatrix[2][1] = 1;
            if(checkWinner([2,1], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("8")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("8");
            boardMatrix[2][1] = 2;
            if(checkWinner([2,1], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".board9").addEventListener("click", e => {
        const space1 = document.querySelector(".board9");
        if (player === "x" && !played.has("9")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg)"
            player = "o";
            played.add("9");
            boardMatrix[2][2] = 1;
            if(checkWinner([2,2], boardMatrix, 1)) {
                setWinner("X");
            }
        } else if (player === "o" && !played.has("9")) {
            space1.style.backgroundImage = "url(https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg)"
            player = "x";
            played.add("9");
            boardMatrix[2][2] = 2;
            if(checkWinner([2,2], boardMatrix, 2)) {
                setWinner("O");
            }
        }
    });
    document.querySelector(".newGame").addEventListener("click", e => {
        window.location.reload();
    });
    document.querySelector(".giveUp").addEventListener("click", e => {
        if (player === "x") {
            setWinner("O")
        } else {
            setWinner("X")
        }
    });
}
