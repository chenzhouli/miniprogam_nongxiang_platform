const getOpenId = require('./getOpenId/index');
const createCollection = require('./createCollection/index');
const selectgoods = require('./selectgoods/index');
const addcart = require('./addcart/index'); 
const addmyland = require('./addmyland/index');
const add_dingdan = require('./add_dingdan/index');
const getcart = require('./getcart/index'); 
const dele_cart = require('./dele_cart/index'); 
const changenum = require('./changenum/index'); 
const selectAllgoods = require('./selectAllgoods/index');
const selectAllland = require('./selectAllland/index');
const updateRecord = require('./updateRecord/index');
const sumRecord = require('./sumRecord/index');


// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context);
    case 'createCollection':
      return await createCollection.main(event, context);
    case 'selectgoods':
      return await selectgoods.main(event, context);
    case 'addcart': 
      return await addcart.main(event, context); 
    case 'addmyland': 
      return await addmyland.main(event, context); 
    case 'add_dingdan': 
      return await add_dingdan.main(event, context);
    case 'getcart': 
      return await getcart.main(event, context); 
    case 'dele_cart': 
      return await dele_cart.main(event, context);
    case 'changenum': 
      return await changenum.main(event, context); 
    case 'selectAllgoods':
      return await selectAllgoods.main(event, context);
    case 'selectAllland':
      return await selectAllland.main(event, context);
    case 'updateRecord':
      return await updateRecord.main(event, context);
    case 'sumRecord':
      return await sumRecord.main(event, context);
  }
};
