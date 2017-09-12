var DBTools={
	function GetAllImagesInfo(var queryResult)
	{
		var dal =ImageInfoDal.CreateNew();
		dal.select("",queryResult);
	}
	//queryResult 示例代码读取数据库返回值的方法
/*	 function queryResult(result)  
        {  
            try  
            {  
                //获取所有行  
                var rowList = result.rows;  
                //获取每行的记录  
                for(var i = 0; i < rowList.length; i++)  
                {  
                    var row = rowList.item(i);  
                    for(var j in row)  
                    {  
                        document.write(j+"="+row[j]+"<br/>");  
                    }  
                }  
            }  
            catch(err)  
            {  
                alert(err.message?err.message:err.toString());  
            }  
        }  */
       
       function GetGoodsInfoByImageID(var imageID,var queryResult)
       {
	       	var dal =GoodsInfoDal.CreateNew();
			dal.select("where id = "+imageID,queryResult);
       }
       
       function AddGoodsType(var typeName,var remark)
       {
	       	var typeInfo=TypeInfoModel.CreateNew();
	       	typeInfo.name=typeName;
	       	typeInfo.remarks=remark;
	       	var dal =GoodsInfoDal.CreateNew();
	       	dal.add(typeInfo);
       }
}
