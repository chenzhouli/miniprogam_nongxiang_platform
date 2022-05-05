const getOpenId = require('./getOpenId/index');
const createCollection = require('./createCollection/index');
const selectgoods = require('./selectgoods/index');
const addcart = require('./addcart/index'); 
const getcart = require('./getcart/index'); 
const changenum = require('./changenum/index'); 
const selectRecord = require('./selectRecord/index');
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
    case 'getcart': 
      return await getcart.main(event, context); 
    case 'changenum': 
      return await changenum.main(event, context); 
    case 'selectRecord':
      return await selectRecord.main(event, context);
    case 'updateRecord':
      return await updateRecord.main(event, context);
    case 'sumRecord':
      return await sumRecord.main(event, context);
  }
};
