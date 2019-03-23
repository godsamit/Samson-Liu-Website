var ALL_STRBDS =`
        <div class="slides-text">
          <div class="scenario-text">
            <a data-featherlight href="./../webpage-imgs/eggschange/Storyboards.jpg">
              <img src="./../webpage-imgs/eggschange/Storyboards.jpg">
            </a>
          </div>
        </div>`;

var SEP_STRBDS =`
        <div class="slides-text">
          <div class="scenario-text">
            <a data-featherlight href="./../webpage-imgs/eggschange/Storyboard-1.jpg">
              <img src="./../webpage-imgs/eggschange/Storyboard-1.jpg">
            </a>
          </div>
        </div>
        <div class="slides-text">
          <div class="scenario-text">
            <a data-featherlight href="./../webpage-imgs/eggschange/Storyboard-2.jpg">
              <img src="./../webpage-imgs/eggschange/Storyboard-2.jpg">
            </a>
          </div>
        </div>
        <div class="slides-text">
          <div class="scenario-text">
            <a data-featherlight href="./../webpage-imgs/eggschange/Storyboard-3.jpg">
              <img src="./../webpage-imgs/eggschange/Storyboard-3.jpg">
            </a>
          </div>
        </div>
        <div class="slides-text">
          <div class="scenario-text">
            <a data-featherlight href="./../webpage-imgs/eggschange/Storyboard-4.jpg">
              <img src="./../webpage-imgs/eggschange/Storyboard-4.jpg">
            </a>
          </div>
        </div>`

$(".slides-text:last-of-type").after(function(){
  var width = $(window).width();
  if (width < 600){
    return SEP_STRBDS;
  }
  else return ALL_STRBDS;
});
