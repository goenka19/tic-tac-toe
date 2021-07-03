const gameboard = () =>
{
    //setting up the player and the array of board
    let board = new Array(9);
    board = ['','','','','','','','',''];
    let player = (symbol) =>
    {
        getsymbol = () => symbol;    
        return{getsymbol}
    }
    let player_one = player('X');
    let player_two = player('O');

    //DOM - selection of blocks.
    var blocks = document.querySelectorAll('.block');
    var counter = 1;

    blocks.forEach((block)=>
    {
        block.addEventListener('click', ()=>
        {
            //console.log(counter);
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
                counter++;

                let checkvalue = check();
                console.log(checkvalue)
            }
            else if(block.textContent != '')
            {
                console.log('WTF');
            }
        })
    })

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
        
        winconditions.every((condition)=>
        {
            if(board[condition[0]] == board[condition[1]] && board[condition[1]] == board[condition[2]] && counter>5 && board[condition[0]] != '')
            {
                console.log('hello world');
                return true
            }
            else 
            {
                console.log('Fuck the world');
                return false
            }
        })
    }
    return{board};
}

let gb  = gameboard();
