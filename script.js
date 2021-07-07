const gameboard = () =>
{
    //setting up the player and the array of board
    const board = ['','','','','','','','',''];
    let player = (symbol) =>
    {
        getsymbol = () => symbol;    
        return{getsymbol}
    }
    let player_one = player('X');
    let player_two = player('O');

    //DOM - selection of blocks.
    var blocks = document.querySelectorAll('.block');
    var resultdiv = document.querySelector('.result');
    var counter = 1;
    var gameOver = 0;

    const winconditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    /*
    const cellClick  = (block) =>  {
        if (gameOver == 1) {
            console.log(gameOver + 'refresh the page to continue');
        } else {
            if(!block.textContent) {
                block.textContent = counter % 2 == 0? player_two.getsymbol() : player_one.getsymbol(); 
                board[parseInt(block.getAttribute('value'))] = block.textContent;
                if (counter>4) 
                    check();
                counter++;
            } else if(block.textContent != '') {
                console.log('You already selected that.');
            }
        }
    };
    */
    function play() {
        blocks.forEach((block) => {
            block.addEventListener('click', ()=> {
                if (gameOver == 1) {
                    console.log(gameOver + 'refresh the page to continue');
                } else {
                    if(!block.textContent) {
                        block.textContent = counter % 2 == 0? player_two.getsymbol() : player_one.getsymbol(); 
                        board[parseInt(block.getAttribute('value'))] = block.textContent;
                        if (counter>4) 
                            check();
                        counter++;
                    } else if(block.textContent != '') {
                        console.log('You already selected that.');
                    }
                }
            })
        })
    }   

    function displayresult(text) {
        const result = Object.assign(document.createElement("h2"), {textContent: text});
        const refreshBtn = Object.assign(document.createElement("button"), {
            textContent: "Refresh"
        });
        refreshBtn.setAttribute('onClick', 'window.location.reload();');
        result.appendChild(refreshBtn);                 
        resultdiv.appendChild(result);
    }

    function check() {
        for(const winPos of winconditions) {            
            if(board[winPos[0]] == board[winPos[1]] && board[winPos[1]] == board[winPos[2]] && board[winPos[0]] != '') {
                gameOver = 1;
                let winner = board[winPos[0]] == 'X'? '1':'2'
                displayresult('Player ' + winner);
                return;                
            }
        }
        if (!board.includes('')) {
            gameOver = 1;
            displayresult('Draw Game ')
        }
    }

    play();
    return{board};
}

let gb  = gameboard();
