const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => { 
  try{
    if (event.flag==1){
      let res=await db.collection('merchandise_cart').doc(event.id).get()
      await db.collection('dingdan').add({ 
        data:{ 
          //_id:event.id, 
          name:res.data.name, 
          price:res.data.price, 
          sale:res.data.sale, 
          image:res.data.image, 
          num:res.data.num,
        } 
      })
    }else{
      await db.collection('dingdan').add({ 
        data:{ 
          //_id:event.id, 
          name:event.name, 
          price:event.price, 
          sale:event.sale, 
          image:event.image, 
          num:event.num,
        } 
      })
    }
  }catch(e){
    return{ 
    success:false 
    }; 
  } 
}