import React from 'react';
function Home(){
        var output=[];
        var i = 0;
        const changeText = (event) => {
            console.log(event.target)
            i=i+1
            event.target.innerText = i
            return i
        }
        output.push(<button onClick={changeText}></button>)
        return output;
        
};

export default Home;