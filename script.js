const gameboard = () =>
{
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
                console.log(board[parseInt(block.getAttribute('value'))]);
                counter++;
                //console.log(board);
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
    

    return{board};
}

let gb  = gameboard();
