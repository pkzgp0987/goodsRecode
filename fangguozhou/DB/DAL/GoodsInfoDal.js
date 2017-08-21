var GoodsInfoDal = {
	CreateNew:function()
	{
		var goodsInfoDal;
		var dbhelper = DBHelper.CreateNew("goods","存储商品信息");
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
		
		//查
		goodsInfoDal.selectBySql=function(var sql,var resultsfunction)
		{
			dbhelper.ExecuteSqlSql(sql,null,function (context, results) {
     			resultsfunction(results);
            });
		};
		
		return goodsInfoDal;
	}
}