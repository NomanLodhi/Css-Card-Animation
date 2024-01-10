const Roll=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Rotating Effect */
.Roll{
    animation: roll 2s ease ;

}
@keyframes roll {
    100%{
        transform: rotate(360deg);
    }
}
    </code>
    </pre>
    `
    box.classList.toggle('Roll')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    
    box.classList.remove('shake')
    box.classList.remove('scaling')
    box.classList.remove('Fading')
    box.classList.remove('Stretch')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('Blinking')
    box.classList.remove('Pulse')
    box.classList.remove('ComplexRotating')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
        }
        const Shake=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Shaking Effect */
.shake{
    animation: shake 0.7s ease infinite;
}

@keyframes shake {
    0%{
        
        transform: rotate(3deg);
    }
    30%{
        
        transform: rotate(-3deg);
    }
    60%{
     
        transform: rotate(3deg);
    }
    80%{
        
        transform: rotate(-3deg);
    }
    100%{
        
        transform: rotate(3deg);
    }
        

}
    </code>
    </pre>
    `
    
    box.classList.toggle('shake')
    box.classList.remove('Wobbling')
    
    box.classList.remove('Roll')
    box.classList.remove('scaling')
    box.classList.remove('Fading')
    box.classList.remove('Stretch')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('ComplexRotating')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('Pulse')
    box.classList.remove('Blinking')
    box.classList.remove('BlinkingRotateRight')
        }
        const Scale=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Scaling Efects */
    .scaling{
        animation: Scale 2s ease ;
    }
    @keyframes Scale{
        0%{
            transform: scale(1.7);
        }
        30%{
            transform: scale(0);
        }
        60%{
            transform: scale(2);
        }
            
    
    }
    </code>
    </pre>
    `
    box.classList.toggle('scaling')
    box.classList.remove('shake')
    box.classList.remove('Stretch')
    box.classList.remove('Colorchanging')

    box.classList.remove('Roll')
    box.classList.remove('Wobbling')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')
    
    box.classList.remove('Fading')
    box.classList.remove('Fadeleft')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('Faderight')
    box.classList.remove('ComplexRotating')
    box.classList.remove('Blinking')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateRight')
        }
        const Fade=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Fading effects */
.Fading{
    animation: Fade 2s ease forwards;
}
@keyframes Fade {
    0%{
        opacity: 1;
    }
   
    100%{
       opacity: 0 ;
    }
}
    </code>
    </pre>
    `
    box.classList.toggle('Fading')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Faderight')
    box.classList.remove('Roll')
    box.classList.remove('Stretch')

    box.classList.remove('Fadeleft')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')
    
    box.classList.remove('ComplexRotating')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateRight')
        }
        const Fadeleft=()=>{
            
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Fade left effects*/
.Fadeleft{
    animation: Fadeleft 2s ease;
}
@keyframes Fadeleft {
    0%{
        position: relative;
        right: 100px;
        opacity: 0;
    }
    50%{
        position: relative;
        right: 50px;
        opacity: 0.3;
    }
    50%{
        position: relative;
        right: 30px;
        opacity: 0.5;
    }
    100%{
        position: relative;
        right: 10px;
        opacity: 1;
    }
      
}
    </code>
    </pre>
    `
    box.classList.toggle('Fadeleft')
    box.classList.remove('Faderight')
    box.classList.remove('Stretch')

    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('ComplexRotating')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')
    
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Pulse')
    box.classList.remove('Blinking')
    box.classList.remove('BlinkingRotateLeft')
        }
        const Faderight=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Fade right effects*/
.Faderight{
    animation: Faderight 2s ease;
}
@keyframes Faderight {
    0%{
        position: relative;
        left: 100px;
        opacity: 0;
    }
    50%{
        position: relative;
        left: 50px;
        opacity: 0.3;
    }
    50%{
        position: relative;
        left: 30px;
        opacity: 0.5;
    }
    100%{
        position: relative;
        left: 10px;
        opacity: 1;
    }
      
}
    </code>
    </pre>
    `
    box.classList.toggle('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('Stretch')

    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('ComplexRotating')
    box.classList.remove('Fading')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Blinking')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')
    
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
        }
        const ComplexRotating=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
    <pre>
    <code>
    /* Complex Rotating */
.ComplexRotating{
    animation: ComplexRotating 0.8s ease-in-out;
  
}
   
   


@keyframes ComplexRotating {
    0%{
        position: relative;
        transform: scale(1.2);
        bottom: 100px;
        transform: rotate(360deg);
        
    }
    
    
    25%{
          
        position: relative;
        right: 200px;
                
    }   
    50%{
        position: relative;
        top: 100px;
    }
               
    75%{
        position: relative;
        left: 200px;
    }
    100%{
        position: relative;
        bottom: 100px;
    }
}
    </code>
    </pre>
    `
    box.classList.toggle('ComplexRotating')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Stretch')

    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Blinking')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')
    
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('BlinkingRotateLeft')
    }
    
        const ComplexRotatingleft=()=>{
            let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Complex Rotating left */
.ComplexRotatingleft{
    animation: ComplexRotatingleft 0.8s ease-in-out;
  
}
   
   


@keyframes ComplexRotatingleft {
    0%{
        position: relative;
        transform: scale(1.2);
        bottom: 100px;
        transform: rotate(360deg);
        
    }
    
    
    25%{
        position: relative;
        left: 200px;
    }   
        
        
                
    50%{
        position: relative;
        top: 100px;
    }
               
    75%{
        position: relative;
        right: 200px;
    }
    100%{
        position: relative;
        bottom: 100px;
    }
}
            </code>
            </pre>
            `
            let box=document.getElementById('box');
    box.classList.remove('ComplexRotating')
    box.classList.toggle('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Stretch')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

    box.classList.remove('Blinking')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
        }
        const Blinking=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Blinking   */
.Blinking{
    animation: Blinking 2s ease;
}
@keyframes Blinking {
    0%{
        opacity: 0;
    }
    25%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    75%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
            </code>
            </pre>
            `
    box.classList.toggle('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Pulse')
    box.classList.remove('Stretch')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('BlinkingRotateLeft')
        }
        const BlinkingRotateRight=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Blinking Rotate Right */
.BlinkingRotateRight{
    animation: BlinkingRotateRight 0.8s ease-in-out;
    
}

   


@keyframes BlinkingRotateRight {
    0%{
        position: relative;
        transform: scale(1.2);
        bottom: 100px;
        opacity: 1;
        
    }
    
    
    25%{
        position: relative;
        right: 200px;
        opacity: 0;
    }   
       
        
    50%{
        position: relative;
        top: 100px;
        opacity: 1;
    }
    
    75%{
        position: relative;
        left: 200px;
        opacity: 0;
    }
    100%{
        position: relative;
        bottom: 100px;
        opacity: 1;
    }
}
            </code>
            </pre>
            `
    box.classList.toggle('BlinkingRotateRight')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Blinking')
    box.classList.remove('Stretch')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
        }
        const BlinkingRotateLeft=()=>{
            let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Blinking Rotate Left */
.BlinkingRotateLeft{
    animation: BlinkingRotateLeft 0.8s ease-in-out;
    
}

   


@keyframes BlinkingRotateLeft {
    0%{
        position: relative;
        transform: scale(1.2);
        bottom: 100px;
        opacity: 1;
        
    }
    
    
    25%{
       
        
        position: relative;
        Left: 200px;
        opacity: 0;
    }   
    50%{
        position: relative;
        top: 100px;
        opacity: 1;
    }
    
    75%{
        position: relative;
        right: 200px;
        opacity: 0;
    }
    100%{
        position: relative;
        bottom: 100px;
        opacity: 1;
    }
}
            </code>
            </pre>
            `
            let box=document.getElementById('box');
    box.classList.toggle('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Pulse')
    box.classList.remove('Stretch')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')


        }
        const Pulse=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Pulse */
.Pulse{
    animation: Pulse 2s ease;
}
 @keyframes Pulse {
    0%{
        transform: scale(0.98);
    }
    25%{
        transform: scale(1.3);
    }
    50%{
        transform: scale(1);
    }
    75%{
        transform: scale(1.3);
    }
    100%{
        transform: scale(1);
    }
 }   
            </code>
            </pre>
            `
    box.classList.toggle('Pulse')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Stretch')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

        }
        const Stretch=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Stretch */
.stretch{
    animation: stretch 5s ease ;
}
@keyframes stretch {
    0%{
        width: 250px;
    }
    50%{
        width: 400px;
    }
    80%{
        width: 200px;
    }
    100%{
        width: 250px;
        
    }


}
            </code>
            </pre>
            `
    box.classList.toggle('Stretch')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Wobbling')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')


        }
        const Wobbling=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Wobbling */
            .Wobbling{
                animation: Wobbling 2s ease;
            }
            
            @keyframes Wobbling {
                0%{
                    border-radius: 30% 50% 50% 50%;
                    padding-top: 30px;
                }
                25%{
                    border-radius: 50% 30% 50% 50%;
                    padding-left:  10px; ;
                }
                50%{
                    border-radius: 50% 50% 30% 50%;
                    padding-right: 15px;
                }
                50%{
                    border-radius: 50% 50% 50% 30%;
                    padding-bottom: 20px;
                }
            }
            </code>
            </pre>
            `
    box.classList.toggle('Wobbling')
    box.classList.remove('Stretch')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Colorchanging')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')

        }
        const Colorchanging=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
 /* Colorchanging */
.Colorchanging{
animation: Colorchanging 2s ease;
}
 @keyframes Colorchanging {
0%{
background-image: linear-gradient(to right top, #342b62, #1b871d, #9c0984, #2cb388, #6cc76c);
transform: scale(1);
}
25%{
background-image: linear-gradient(to right top, #622b5c, #731b87, #9c9a09, #2eb32c, #756cc7);
transform: scale(1.02);
}
50%{
background-image: linear-gradient(to right top, #690000, #391d30, #110d17, #882cb3, #ff0b0b);
transform: scale(1);
}
75%{
background-image: linear-gradient(to right top, #63a545, #4dbdb0, #170707, #1a0225, #282804);
transform: scale(1.02);
}
100%{
background-image: linear-gradient(to right top, #a88222, #c27210, #8aa718, #1cacbf, #08d408);
transform: scale(1);
}

} 
           
            </code>
            </pre>
            `
    box.classList.toggle('Colorchanging')
    box.classList.toggle('Wobbling')
    box.classList.remove('Stretch')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Flip-X')
    box.classList.remove('Flip-Y')
        }

        const FlipX=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Flip- X */
            .Flip-X{
                animation: Flip-X 2s ease;
             }
     
             @keyframes Flip-X {
                 100%{
                     transform: rotateX(360deg);
                 }
                 
             }
            </code>
            </pre>
            `
    box.classList.toggle('Flip-X')
    box.classList.remove('Colorchanging')
    box.classList.remove('Wobbling')
    box.classList.remove('Stretch')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
    box.classList.remove('Flip-Y')
}
    
        const FlipY=()=>{
    let box=document.getElementById('box');
    let text=document.getElementById('output').innerHTML=`
            <pre>
            <code>
            /* Flip-Y */
        .Flip-Y{
            animation: Flip-Y 2s ease;
        }
        @keyframes Flip-Y {
            100%{
                transform: rotateY(360deg);
            }
            
        }
            </code>
            </pre>
            `
    box.classList.toggle('Flip-Y')
    box.classList.remove('Flip-X')
    box.classList.remove('Colorchanging')
    box.classList.remove('Wobbling')
    box.classList.remove('Stretch')
    box.classList.remove('Pulse')
    box.classList.remove('BlinkingRotateLeft')
    box.classList.remove('BlinkingRotateRight')
    box.classList.remove('Blinking')
    box.classList.remove('ComplexRotating')
    box.classList.remove('ComplexRotatingright')
    box.classList.remove('ComplexRotatingleft')
    box.classList.remove('Faderight')
    box.classList.remove('Fadeleft')
    box.classList.remove('scaling')
    box.classList.remove('shake')
    box.classList.remove('Roll')
    box.classList.remove('Fading')
        }
    