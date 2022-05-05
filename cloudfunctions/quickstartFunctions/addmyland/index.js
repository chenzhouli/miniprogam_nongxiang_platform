const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => { 
  let res=await db.collection('empty_land').doc(event.id).get(); 
  console.log('res',res);
  try{ 
    await db.collection('my_land').doc(event.id).get(); 
    //有该土地 
    return{
      success:false
    }
  }catch(err){ 
    //没有该土地 
    await db.collection('my_land').add({ 
      data:{ 
        _id:event.id, 
        name:res.data.name, 
        price:res.data.price, 
        address:res.data.address, 
        image:res.data.image, 
        chra:res.data.chra,
        area:res.data.area
      } 
    }); 
    return{ 
      success:true 
    };
  } 
}