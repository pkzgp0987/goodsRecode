var DBHelper = {
	CreateNew: function(var dbconnection,var remarks)
	{
		var dbHelper;
		//openDatabase方法打开已经存在的数据库，如果不存在将会创建一个数据库
		var db = window.openDatabase(dbconnection,"1.0",remarks,"2*1024*1024");

		//执行一组事务
		dbHelper.TransactionSql = function(var sqlArrays)
		{
			//transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
			db.transaction(function(tx){
				for (sql in sqlArrays)
				{
					//执行sql语句
					tx.executeSql(sql);
				}
			});
		};
		
		//执行sql语句
		dbHelper.ExecuteSqlSql= FunctionH.overload({
		    'string,array,function,function': function () 
			{
				//transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
				db.transaction(function(tx){
					//执行sql语句
					tx.executeSql(arguments[0],arguments[1],arguments[2],arguments[3]);
				});
			},
			 'string,array,function': function () 
			{
				//transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
				db.transaction(function(tx){
					//执行sql语句
					tx.executeSql(arguments[0],arguments[1],arguments[2]);
				});
			},
			 'string,array': function () 
			{
				//transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
				db.transaction(function(tx){
					//执行sql语句
					tx.executeSql(arguments[0],arguments[1]);
				});
			},
			 'string': function () 
			{
				//transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
				db.transaction(function(tx){
					//执行sql语句
					tx.executeSql(arguments[0]);
				});
			}
		});
		return dbHelper;
	}
}

//用于函数重载
var map = function (arr, callback, pThis) {
    var len = arr.length;
    var rlt = new Array(len);
    for (var i = 0; i < len; i++) {
        if (i in arr) rlt[i] = callback.call(pThis, arr[i], i, arr); 
    }
    return rlt;
}
/**
 * 函数参数重载方法 overload，对函数参数进行模式匹配。默认的dispatcher支持*和...以及?，"*"表示一个任意类型的参数，"..."表示多个任意类型的参数，"?"一般用在",?..."表示0个或任意多个参数
 * @method overload
 * @static
 * @optional {dispatcher} 用来匹配参数负责派发的函数
 * @param {func_maps} 根据匹配接受调用的函数列表
 * @return {function} 已重载化的函数
 */
var FunctionH = {
    overload: function (dispatcher, func_maps) {
        if (!(dispatcher instanceof Function)) {
            func_maps = dispatcher;
            dispatcher = function (args) {
                var ret = [];
                return map(args, function (o) { return typeof o}).join();
            }
        } 

        return function () {
            var key = dispatcher([].slice.apply(arguments));
            for (var i in func_maps) {
                var pattern  = new RegExp("^" + i.replace("*", "[^,]*").replace("...", ".*") + "$");
                if (pattern.test(key)) {
                    return func_maps[i].apply(this, arguments);
                } 
            }
        }
    }
};

