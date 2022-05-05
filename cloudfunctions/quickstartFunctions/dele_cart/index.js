const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => { 
  try{
    await db.collection('merchandise_cart').doc(event.id).remove()
  }catch(e){
    return{ 
    success:false 
    }; 
  } 
}