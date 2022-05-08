const cloud = require('wx-server-sdk'); 
 
cloud.init({ 
  env: cloud.DYNAMIC_CURRENT_ENV 
}); 
 
const db = cloud.database(); 
 
 
exports.main = async (event, context) => {  
      let res=await db.collection('empty_land').doc(event.id).get()
      try{
        let select=await db.collection('my_land').doc(event.id).get()
        if(res.data.area >= select.data.area+event.num){
          await db.collection('my_land').doc(event.id).update({   
            data:{  
              area:select.data.area+event.num 
            } 
          }); 
        }else{
          return{ 
            success:false 
          };
        } 
      }catch(err){
        await db.collection('my_land').add({ 
          data:{ 
            //_id:event.id, 
            name:res.data.name, 
            price:res.data.price, 
            address:res.data.address,  
            image:res.data.image,  
            chra:res.data.chra, 
            area:event.num 
          } 
        })
      }
}