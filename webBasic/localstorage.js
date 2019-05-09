localStorage.setItem('villan','thanos');
localStorage.setItem('DCVillan','joker');

var myVillans = localStorage.getItem('villan');
console.log(myVillans);

console.log(localStorage.getItem('DCVillan'));

localStorage.removeItem('villan');
localStorage.clear();

localStorage.setItem("hero's",'IronMan');

var myHeros = localStorage.getItem("hero's");
console.log(myHeros);



