const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => { 
  try{
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
  }catch(e){
    return{ 
    success:false 
    }; 
  } 
}