/*
function bestCharge(selectedItems) {

  var item = [];//商品名
  var count = [];//商品数量
  var id = [];//商品id
  var price = [];//price是单价
  var newarray = loadAllItems();
  var array = loadPromotions();
  var shuchu;
  var height;
  selectedItems.forEach(function (pro) {
    var num = pro.indexOf("×");
    id.push(pro.slice(0, num - 3));
    count.push(pro.slice(pro.length - 1));
  });

  height = id.length;//求出商品数量
  var price2 = [];  //price2是每种商品的单价×数量
  var price1 = [], sum = 0;//price1是优惠后的总价
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < newarray.length; j++) {
      if (newarray[j].id === id[i]) {
        price[i] = newarray[j].price;
        item[i] = newarray[j].name;
        price2[i] = price[i] * count[i];
        sum += price[i] * count[i];
      }
    }
  }
  //得到商品单价和名字
  /*计算价格*//*
  if (sum > 30) price1[0] = sum - 6;
  else price1[0] = sum;
  //方案二
  i = 0;price1[1]=0;
  id.forEach(function (b) {
    if (b === array[1].items[0] || b === array[1].items[1]) {
      price1[1] += price[i] * count[i] / 2;
    }
    else {
      price1[1] += price[i] * count[i];
    }
    i++;
  });
  shuchu = "============= 订餐明细 =============\n";
  for (j = 0; j < height; j++) {
    shuchu += item[j] + " × " + count[j] + " = " + price2[j] + "元" + "\n";
  }
  if (price1[0] < price1[1]) {
    shuchu += "-----------------------------------\n使用优惠:\n" + array[0].type + "，省6元\n-----------------------------------\n" +
      "总计：" + price1[0] + "元" + "\n" + "===================================\n";
  }
  else if (price1[0] > price1[1]) {
    shuchu += "-----------------------------------\n使用优惠:\n" + array[1].type + "(黄焖鸡，凉皮)，省" + (sum - price1[1]) + "元\n-----------------------------------\n" +
      "总计：" + price1[1] + "元\n===================================\n";
  }
  else
    {
      shuchu += "-----------------------------------\n总计：" + sum + "元\n===================================\n";
    }
    return shuchu;
  }
*/
function bestCharge(selectItems)
{
  const iteminformation=getinformation(selectItems);
  //console.log(iteminformation);
  const price=getprice(iteminformation);
  // console.log(price);
  const sum=getsum(price);
  // console.log(sum);
  const save=getsave(sum,iteminformation);
  //console.log(save);
  const choice=getchoice(save);
  // console.log(choice);
  const result=output(iteminformation,price,sum,save,choice);
  return result;
}
function getinformation(selectItems)
{
  const allItems = loadAllItems();
  const item=[];
  selectItems.forEach(function(a){
    var num=a.indexOf(" ");
    var itemid=a.slice(0,num);
    var itemcount=a.slice(a.length-1);
    allItems.forEach(function(val){
      if(val.id===itemid)
      {
        val.count=itemcount;
        item.push( val);
      }
    });
    /* var newarray=a.split(' × ');
     itemid.push(newarray[0]);
     itemcount.push(newarray[1]);
     console.log(a,newarray);*/
  });
  //console.log(item);
  return item;
}
function getprice(iteminformation)
{
  const price1=[];
  iteminformation.forEach(function(val){
    var num=val.price*val.count;
    price1.push(num);
  });
  //console.log(price1);
  return price1;
}
function getsum(price)
{
  return price.reduce(function(total,current){
    return  total+current;
  });
}

function getsave(sum,iteminformation)
{
  var  save=[];
  save[1]=save[0]=0;
  var allPromotions = loadPromotions();
  if(sum>30) save[0]=6;
  iteminformation.forEach(function(val){
    if(allPromotions[1].items.indexOf(val.id) >= 0)
    {
      save[1]+=val.price*val.count/2;
    }
  });
  save[2]=save[0]>save[1]?save[0]:save[1];
  //console.log(save);
  return save;
}
function getchoice(save)
{
  var allPromotions = loadPromotions();
  if(save[0]>save[1])
  {
    return allPromotions[0].type;
  }
  else if(save[0]<save[1])
  {
    return allPromotions[1].type;
  }
  return;
}
function output(iteminformation,price,sum,save,choice)
{
  var shuchu="============= 订餐明细 =============\n";
  for(i=0;i<iteminformation.length;i++)
  {
    shuchu+=iteminformation[i].name+" × "+iteminformation[i].count+" = "+price[i]+"元\n";
  }
  if(save[2]==6){
    shuchu+="-----------------------------------\n使用优惠:\n"+choice+"，省"+save[2]+"元\n-----------------------------------\n总计："
      +(sum-save[2])+"元\n===================================";
  }
  else if(save[2]>6){
    shuchu+="-----------------------------------\n使用优惠:\n"+choice+"(黄焖鸡，凉皮)，省"+save[2]+"元\n-----------------------------------\n总计："
      +(sum-save[2])+"元\n===================================";
  }
  else{
    shuchu+="-----------------------------------\n总计："+sum+"元\n===================================";
  }
  console.log(shuchu);
  return shuchu;
}

