const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => { 
  let res=await db.collection('merchandise_info').doc(event.id).get(); 
  try{ 
    let select=await db.collection('merchandise_cart').doc(event.id).get() 
    //有该商品 
    await db.collection('merchandise_cart').doc(event.id).update({   
      data:{  //数量加1 
        num:select.data.num+1 
      } 
    }); 
  }catch(err){ 
    //没有该商品 
    await db.collection('merchandise_cart').add({ 
      data:{ 
        _id:event.id, 
        name:res.data.name, 
        price:res.data.price, 
        sale:res.data.sale, 
        image:res.data.image, 
        num:1, 
        select:"circle" 
      } 
    }); 
  } 
  return{ 
    success:true 
  }; 
}