const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => { 
  let select=await db.collection('merchandise_cart').doc(event.id).get(); 
  //console.log('select',select); 
  if(event.flag==0){ //增加商品 
    if(select.data.num<=99){ //限额99 
      await db.collection('merchandise_cart').doc(event.id).update({ 
        data:{ 
          num:select.data.num+1 
        },fail:console.error 
      }) 
    }else{ 
      return{ 
        success:false 
      } 
    } 
  } else{  //减少商品 
    await db.collection('merchandise_cart').doc(event.id).update({ 
      data:{ 
        num:select.data.num-1 
      },fail:console.error 
    }) 
 
    select=await db.collection('merchandise_cart').doc(event.id).get(); 
    if(select.data.num==0){ //去除商品 
      await db.collection('merchandise_cart').doc(event.id).remove(); 
    } 
  } 
  return await db.collection('merchandise_cart').get() 
};
