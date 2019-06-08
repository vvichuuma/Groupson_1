var deals = 0;

var categories = [
  {
    name: 'Local-Deals',
    dealer: 0,
    id: 1,
    sum_tot: 0
   
  },
  {
    name: 'Gateway-Deals',
     dealer: 0,
     id: 2,
     sum_tot: 0
 
  },
  {
    name: 'Oocal-Deals',
     dealer: 0,
     id: 3,
     sum_tot: 0
 
  },
  {
    name: 'Group-Deals',
     dealer: 0, 
     id: 4,
     sum_tot: 0

  }
]


function outerBound(){

  const $root = document.getElementById("outer_border")

  categories.forEach(category => {
      $root.innerHTML += `   <div onclick="showFunction(this)" class="box">

     
      <h3>${category.name} <span class="total_sum">Total : <span id="total_sumz-${category.id}">${category.sum_tot}</span>  </span></h3>


     </div>
        

    <div class="inactive" id="box_1">
      <h4></h4>
     <h5 onclick="add(this , ${category.id})" class="add_deals">Add_deals</h5>
    </div>`

  })


}


function showFunction(el){
  el.nextElementSibling.classList.toggle('active')
  el.nextElementSibling.classList.toggle('inactive')

}; 


 add = (el, id) => {
 
  const node = Math.floor(Math.random() * 10) + 1;
  var rand_num = node;
  var dealz = categories.find(category => category.id === id).dealer; 

  dealz = dealz + 1; 

  categories.find(category => category.id === id).dealer = dealz;

   var total_sum = categories.find(category => category.id === id).sum_tot + rand_num;

   categories.find(category => category.id === id).sum_tot = total_sum;

  document.getElementById(`total_sumz-${id}`).innerHTML = total_sum

  el.previousElementSibling.innerHTML += `<h4>Deal ${dealz} </h4>` + `<span class="price">$${rand_num}</span>`

  
}

