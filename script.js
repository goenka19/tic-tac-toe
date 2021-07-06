const gameboard = () =>
{
    //setting up the player and the array of board
    let board = ['','','','','','','','',''];
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
    var cntr = 0;

    function play()
    {
        blocks.forEach((block)=>
        {
            block.addEventListener('click',  ()=>
            {
                if (cntr == 1)
                {
                    console.log('refresh the page to continue');
                }
                else
                {
                    if(block.textContent == '')
                    {
                        if(counter % 2 == 1)
                        {
                            block.textContent = player_one.getsymbol();
                        }
                        else if (counter % 2 == 0)
                        {
                            block.textContent = player_two.getsymbol();
                        }                    
                        board[parseInt(block.getAttribute('value'))] = block.textContent;

                        if (counter>4)
                        {
                            check();
                        }
                        //console.log(counter);  
                        counter++;
                    }
                    else if(block.textContent != '')
                    {
                        console.log('You already selected that.');
                    }
                }
            })
        })
    }
        

    //for inserting the board to the screen 
    function display()
    {   
        blocks.forEach((block)=>
        {
            for (let i = 0; i < board.length; i++) 
            {
                block.innerHTML = board[i];
                console.log('hello')
            }
        })
    }
    function check()
    {
        var winconditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        var conditioncounter = 1;
        for(let i = 0; i < winconditions.length; i++ )
        {            
            if(board[winconditions[i][0]] == board[winconditions[i][1]] && board[winconditions[i][1]] == board[winconditions[i][2]] && board[winconditions[i][0]] != '' && board[winconditions[i][0]] == player_one.getsymbol())
            {
                cntr = 1;

                let result = document.createElement('h2');
                result.textContent = 'Player 1 Win  ';

                let refresh = document.createElement('button')
                refresh.innerHTML = 'Refresh';
                refresh.setAttribute('onClick', 'window.location.reload();');
                result.appendChild(refresh);
                
                resultdiv.appendChild(result);
                break;                
            }
            else if(board[winconditions[i][0]] == board[winconditions[i][1]] && board[winconditions[i][1]] == board[winconditions[i][2]] && board[winconditions[i][0]] != '' && board[winconditions[i][0]] == player_two.getsymbol())
            {
                cntr = 1;
                let result = document.createElement('h2');
                result.textContent = 'Player 2 Win';

                let refresh = document.createElement('button')
                refresh.innerHTML = 'Refresh';
                refresh.setAttribute('onClick', 'window.location.reload();');
                result.appendChild(refresh);

                resultdiv.appendChild(result);                
                break;
            }
            
            else if(board.includes(''))
            {
                continue;
            }
            else 
            {
                let result = document.createElement('h2');
                result.textContent = 'Draw Game';

                let refresh = document.createElement('button')
                refresh.innerHTML = 'Refresh';
                refresh.setAttribute('onClick', 'window.location.reload();');
                result.appendChild(refresh);

                resultdiv.appendChild(result);                
                break;
            }
            
        }

    }  
    play();
    return{board};
}

let gb  = gameboard();
