olxDiv= document.getElementsByClassName('olx')[0];

video= document.getElementsByClassName('video')[0];
video.addEventListener('click',function(){
    olxDiv.innerHTML=`<video src="Images/dbms.mp4" controls width="320" height="240"></video>
    <br>
    <br>
    <button class="close btn" onclick=back_to_form()>Back!</button>`
});

function back_to_form(){
    olxDiv.innerHTML=`
    <img src="./Images/dbms.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">SwapZone Phase1</h5>
      <p class="card-text">OLX 2.0 for College Students!</p>
      <a class="video btn" target="_blank"
        >View!</a
      >
      <br>
      <br>
      <a href="https://github.com/Shruthi111/OLX2.0" class="btn" target="_blank"
        >View Code here!</a
      >
      <br>
      <small style="color:black">Not yet deployed</small>
    </div>
`
}