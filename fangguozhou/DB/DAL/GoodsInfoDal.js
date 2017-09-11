var dbhelper = DBHelper.CreateNew("goods","存储商品信息");
var GoodsInfoDal = {
	CreateNew:function()
	{
		var goodsInfoDal;
		//增
		goodsInfoDal.add = function(var model)
		{
			var add_goods_sql = 'INSERT INTO goodsinfo(id,goodsName,shopId,typeID,goodsInfo) valuse(?,?,?,?,?)'
			     ;
			var paras = [model.id,model.goodsName,model.shopId,model.typeID,model.goodsInfo];
			dbhelper.ExecuteSqlSql(add_goods_sql,paras);
		};
		//删
		goodsInfoDal.del=function(var id)
		{
			var del_goods_sql='DELETE FROM goodsinfo WHERE id=？';
			var paras =[id];
			dbhelper.ExecuteSqlSql(del_goods_sql,[id]);
		};
		//改
		goodsInfoDal.update=function(var model)
		{
			var upd_goods_sql='UPDATE goodsinfo SET goodsName="?",shopId="?",typeID="?",goodsInfo="?" WHERE id=?';
			var paras = [model.goodsName,model.shopId,model.typeID,model.goodsInfo,model.id];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras);
		};
		
		//查
		goodsInfoDal.select=function(var where,var resultsfunction)
		{
			var sel_goods_sql='select * from goodsinfo where ?';
			var paras = [where];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras,function (context, results) {
     			resultsfunction(results);
            });
		};
		
		return goodsInfoDal;
	}
}

var ShopInfoDal = {
	CreateNew:function()
	{
		var shopInfoDal;
		//增
		shopInfoDal.add = function(var model)
		{
			var add_goods_sql = 'INSERT INTO shopinfo(id,name,shopkeeper,phone,position) valuse(?,?,?,?,?)'
			     ;
			var paras = [model.id,model.name,model.shopkeeper,model.phone,model.position];
			dbhelper.ExecuteSqlSql(add_goods_sql,paras);
		};
		//删
		shopInfoDal.del=function(var id)
		{
			var del_goods_sql='DELETE FROM shopinfo WHERE id=？';
			var paras =[id];
			dbhelper.ExecuteSqlSql(del_goods_sql,[id]);
		};
		//改
		shopInfoDal.update=function(var model)
		{
			var upd_goods_sql='UPDATE shopinfo SET name="?",shopkeeper="?",phone="?",position="?" WHERE id=?';
			var paras = [model.name,model.shopkeeper,model.phone,model.position,model.id];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras);
		};
		
		//查
		shopInfoDal.select=function(var where,var resultsfunction)
		{
			var sel_goods_sql='select * from shopinfo where ?';
			var paras = [where];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras,function (context, results) {
     			resultsfunction(results);
            });
		};
		
		return shopInfoDal;
	}
}

var TypeInfoDal = {
	CreateNew:function()
	{
		var typeInfoDal;
		//增
		typeInfoDal.add = function(var model)
		{
			var add_goods_sql = 'INSERT INTO typeinfo(id,name,remarks) valuse(?,?,?)'
			     ;
			var paras = [model.id,model.name,model.remarks];
			dbhelper.ExecuteSqlSql(add_goods_sql,paras);
		};
		//删
		typeInfoDal.del=function(var id)
		{
			var del_goods_sql='DELETE FROM typeinfo WHERE id=？';
			var paras =[id];
			dbhelper.ExecuteSqlSql(del_goods_sql,[id]);
		};
		//改
		typeInfoDal.update=function(var model)
		{
			var upd_goods_sql='UPDATE typeinfo SET name="?",remarks="?" WHERE id=?';
			var paras = [model.name,model.remarks,model.id];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras);
		};
		
		//查
		typeInfoDal.select=function(var where,var resultsfunction)
		{
			var sel_goods_sql='select * from typeinfo where ?';
			var paras = [where];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras,function (context, results) {
     			resultsfunction(results);
            });
		};
		
		return typeInfoDal;
	}
}


var ImageInfoDal = {
	CreateNew:function()
	{
		var imageInfoDal;
		//增
		imageInfoDal.add = function(var model)
		{
			var add_goods_sql = 'INSERT INTO imageinfo(id,goodsId,iconUrl,imageUrl,uploadTime) valuse(?,?,?,?,?)'
			     ;
			var paras = [model.id,model.goodsId,model.iconUrl,model.imageUrl,model.uploadTime];
			dbhelper.ExecuteSqlSql(add_goods_sql,paras);
		};
		//删
		imageInfoDal.del=function(var id)
		{
			var del_goods_sql='DELETE FROM imageinfo WHERE id=？';
			var paras =[id];
			dbhelper.ExecuteSqlSql(del_goods_sql,[id]);
		};
		//改
		imageInfoDal.update=function(var model)
		{
			var upd_goods_sql='UPDATE imageinfo SET goodsId="?",iconUrl="?",imageUrl="?",uploadTime="?"  WHERE id=?';
			var paras = [model.goodsId,model.iconUrl,model.imageUrl,model.uploadTime,model.id];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras);
		};
		
		//查
		imageInfoDal.select=function(var where,var resultsfunction)
		{
			var sel_goods_sql='select * from imageinfo where ?';
			var paras = [where];
			dbhelper.ExecuteSqlSql(upd_goods_sql,paras,function (context, results) {
     			resultsfunction(results);
            });
		};
		
		return imageInfoDal;
	}
}