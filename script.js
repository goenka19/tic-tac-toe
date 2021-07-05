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
    var cntr = 0;

    function play()
    {
        blocks.forEach((block)=>
        {
            block.addEventListener('click',  ()=>
            {
                if (cntr == 1)
                {

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
        winconditions.every((condition)=>
        {

            if(board[condition[0]] == board[condition[1]] && board[condition[1]] == board[condition[2]] && board[condition[0]] != '')
            {
                cntr = 1;
                console.log('you win', conditioncounter);                
                return false;
            }
            else 
            {
                conditioncounter++;
                return true
            }
        })

    }  
    play();
    return{board};
}

let gb  = gameboard();
