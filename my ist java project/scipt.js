//  onclick
const p1 = document.getElementById('clickText')
   p1.addEventListener('click', function changeText() {
    p1.textContent = 'ooops!'
})
   p1.addEventListener( 'mouseout', function changeText() {
    p1.textContent= 'Click on this Text!'
});
     


    //  onmousemove 
const p2 = document.getElementById('mouseOverMe');

   p2.addEventListener( 'mouseover', function changeText() {
   p2.textContent= 'Thank You!'
});
    
    p2.addEventListener( 'mouseout', function changeText() {
    p2.textContent= 'Mouse Over Me'
        });
    


        // onmousedown
 const p3 = document.getElementById('MouseDown');

   p3.addEventListener( 'mousedown', function changeText() {
   p3.textContent= 'Release Me'
});
    
    p3.addEventListener( 'mouseup', function changeText() {
    p3.textContent= 'Mouse Down'
        });
    



        // onmouseover 
 const p4 = document.getElementById('MouseOver');

        p4.addEventListener( 'mouseover', function changeText() {
        p4.textContent= 'Take the Mouse Out'
 });       
         p4.addEventListener( 'mouseout', function changeText() {
         p4.textContent= 'Mouse Over Me'
                 });
             
                  